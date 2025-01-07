import BlogContainer from "@/components/blog/BlogContainer";

export default async function BlogPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/posts`, {
    cache: "no-store", // Use "force-cache" or "revalidate" for caching behavior
  });
  const posts = await res.json();

  return (
    <div className="py-16">
      <BlogContainer posts={posts} />
    </div>
  );
}
