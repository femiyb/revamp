'use client'; // Required for client-side fetching
import Link from 'next/link';

import { useEffect, useState } from 'react';

export default function BlogPreview() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/posts?_embed&per_page=3`
        );
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchLatestPosts();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-tealCustom4 mb-8">
          Experience Meets Expertise
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Discover insights and practical advice on accessibility, WordPress
          development, and more. Check out my latest articles!
        </p>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => {
              const rawImage =
                post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                '/default-image.jpg';

              const featuredImage = rawImage.includes('app.femiyb.com')
                ? `/api/images?path=${encodeURIComponent(
                    rawImage.replace(
                      'https://www.app.femiyb.com/wp-content/uploads/',
                      ''
                    )
                  )}`
                : rawImage;

              return (
                <a
                  key={post.id}
                  href={`/${post.slug}`}
                  className="relative group block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Featured Image */}
                  <img
                    src={featuredImage}
                    alt={post.title.rendered}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Dark Overlay with Post Title */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-extrabold text-white leading-tight mb-2">
                      {post.title.rendered}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {new Date(post.date).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </a>
              );
            })
          ) : (
            <p className="text-gray-500">Loading latest posts...</p>
          )}
        </div>

        {/* View More Blog Button */}
        <Link
          href="/blog"
          className="mt-8 inline-block bg-nvdarkbg text-white font-bold py-2 px-4 rounded shadow hover:bg-teal-600 transition"
        >
          Read My Blog
        </Link>
      </div>
    </section>
  );
}
