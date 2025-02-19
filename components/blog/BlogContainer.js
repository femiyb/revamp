'use client'; // Required for interactivity if any

export default function BlogContainer({ posts }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Responsive Grid for Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            // Proxy the featured image through the React app
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
          })}
        </div>
      </div>
    </section>
  );
}
