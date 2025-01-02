// File: app/blog/[slug]/page.js

"use client";

import { useEffect, useState } from "react";

export default function BlogPost({ params }) {
  const [blogPost, setBlogPost] = useState(null);
  const { slug } = params;

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/posts?slug=${slug}`
        );
        const data = await response.json();
        if (data.length > 0) {
          setBlogPost(data[0]);
        } else {
          console.error("Post not found");
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <article className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-teal-500 mb-6">
          {blogPost.title.rendered}
        </h1>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blogPost.content.rendered }}
        ></div>
      </div>
    </article>
  );
}
