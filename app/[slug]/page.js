import CommentForm from '@/components/blog/CommentForm';
import CommentList from '@/components/blog/CommentList';
import ScrollToHash from '@/components/blog/ScrollToHash';

export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/posts?_embed`
    );
    if (!res.ok) {
      console.error('Failed to fetch posts:', res.statusText);
      return [];
    }
    const posts = await res.json();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;

  const postRes = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/posts?slug=${slug}&_embed`
  );

  if (!postRes.ok) {
    console.error(`Failed to fetch post for slug: ${slug}`);
    return <div>Failed to load the post.</div>;
  }

  const posts = await postRes.json();
  const post = posts.length > 0 ? posts[0] : null;

  if (!post) {
    return <div>Post not found.</div>;
  }

  const rawImage =
    post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    '/default-image.jpg';

  const featuredImage = rawImage.includes('www.app.femiyb.com')
    ? `/api/images?path=${encodeURIComponent(
        rawImage.replace('https://www.app.femiyb.com/wp-content/uploads/', '')
      )}`
    : rawImage;

  const updatedContent = post.content.rendered
    // Rewrite `src` attributes to use your API
    .replace(
      /src="https:\/\/app\.femiyb\.com\/wp-content\/uploads\/([^"]+)"/g,
      (match, path) => `src="/api/images?path=${encodeURIComponent(path)}"`
    )
    // Rewrite `srcset` attributes properly
    .replace(/srcset="([^"]+)"/g, (match, srcset) => {
      const updatedSrcset = srcset
        .split(',') // Split each `srcset` entry
        .map((entry) => {
          const parts = entry.trim().split(' '); // Separate URL and size
          const url = parts[0]; // Extract URL
          const size = parts[1] || ''; // Extract size if present

          if (url.startsWith('https://www.app.femiyb.com/wp-content/uploads/')) {
            const newUrl = `/api/images?path=${encodeURIComponent(
              url.replace('https://www.app.femiyb.com/wp-content/uploads/', '')
            )}`;
            return `${newUrl} ${size}`.trim();
          }

          return entry.trim(); // Keep original if not a WordPress image
        })
        .join(', '); // Reassemble `srcset`

      return `srcset="${updatedSrcset}"`;
    });

  return (
    <div className="post-container">
      <ScrollToHash /> {/* This enables smooth scrolling to hash links */}
      <article className="post-article">
        {/* Post Title */}
        <h1 className="post-title">{post.title.rendered}</h1>

        {/* Post Date */}
        <p className="post-date">
          {new Date(post.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        {/* Featured Image */}
        <img
          width="930"
          height="620"
          src={featuredImage}
          alt={post.title.rendered}
          className="featured-image"
        />

        {/* Post Content */}
        <div
          className="post-content prose prose-lg prose-gray max-w-none leading-relaxed"
          dangerouslySetInnerHTML={{ __html: updatedContent }}
        ></div>

        {/* Comments */}
        <section className="comments-section">
          <h2>Comments</h2>
          <CommentForm postId={post.id} />
          <CommentList postId={post.id} />
        </section>
      </article>
    </div>
  );
}
