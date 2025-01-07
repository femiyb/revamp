// File: components/blog/BlogContainer.js

export default function BlogContainer({ posts }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-500 mb-8 text-center">
          Blog Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-6 bg-gray-100 shadow rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{post.title.rendered}</h3>
              <p
                className="text-gray-600 mb-4"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              ></p>
              <a
                href={`/${post.slug}`}
                className="text-teal-500 font-bold hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
