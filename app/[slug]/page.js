import CommentForm from "@/components/blog/CommentForm";
import CommentList from "@/components/blog/CommentList";

// Generate static params for pre-rendering blog posts
export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/posts`);

    if (!res.ok) {
      console.error("Failed to fetch posts:", res.statusText);
      return [];
    }

    const posts = await res.json();

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;

  // Fetch the individual blog post by slug
  const postRes = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/posts?slug=${slug}`
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

// Replace WordPress URLs with the correct local proxy
const updatedContent = post.content.rendered.replace(
  /https:\/\/www\.femiyb\.com\/wp-content\/uploads\/([^">]+)/g,
  (match, path) => `/api/images/${path}`
);


  return (
    <article className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-teal-500 mb-6">
          {post.title.rendered}
        </h1>

        {/* Updated blog content with proxied and lazy-loaded images */}
        <div
          className="prose max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: updatedContent }}
        ></div>

        <section className="comments">
          <CommentForm postId={post.id} />
          <CommentList postId={post.id} />
        </section>
      </div>
    </article>
  );
}
