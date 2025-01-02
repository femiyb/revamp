// File: components/BlogPreview.js

export default function BlogPreview() {
    const blogPosts = [
      {
        id: 1,
        title: "Understanding Accessibility in Web Design",
        description: "Explore the principles of accessible web design and why it matters.",
        link: "/blog/accessibility-in-web-design",
      },
      {
        id: 2,
        title: "10 Tips for Optimizing WordPress Performance",
        description: "Learn how to speed up your WordPress website with these practical tips.",
        link: "/blog/wordpress-performance-tips",
      },
      {
        id: 3,
        title: "Building Scalable React Apps",
        description: "A guide to creating React applications that grow with your needs.",
        link: "/blog/scalable-react-apps",
      },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-8">
            Experience Meets Expertise
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Discover insights and practical advice on accessibility, WordPress
            development, and more. Check out my latest articles!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="p-6 bg-gray-100 shadow rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a
                  href={post.link}
                  className="text-teal-500 font-bold hover:underline"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-teal-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-teal-600">
            Read My Blog
          </button>
        </div>
      </section>
    );
  }
  