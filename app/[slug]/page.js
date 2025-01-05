import CommentForm from "@/components/blog/CommentForm";
import CommentList from "@/components/blog/CommentList";

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/posts`);
  const posts = await res.json();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;

  // Fetch the individual blog post
  const postRes = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/posts?slug=${slug}`
  );
  const posts = await postRes.json();
  const post = posts.length > 0 ? posts[0] : null;

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <article className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-teal-500 mb-6">
          {post.title.rendered}
        </h1>
        <div
          className="prose max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></div>
        <section className="comments">
          <CommentForm postId={post.id} />
          <CommentList postId={post.id} />
        </section>
      </div>
    </article>
  );
}
