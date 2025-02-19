import BlogContainer from '@/components/blog/BlogContainer';
import BlogHeader from '@/components/blog/BlogHeader';

export const metadata = {
  title: "Blog Page | Femi YB",
};

export default async function BlogPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/posts?_embed`,
    {
      next: { revalidate: 60 }, // Cache for 60 seconds
    }
  );
  const posts = await res.json();

  return (
    <>
      <BlogHeader />
      <BlogContainer posts={posts} />;
    </>
  );
}
