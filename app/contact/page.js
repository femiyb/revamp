export default function ContactPage() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-teal-500 mb-6 text-center">Contact Me</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Let's build something great together! Whether you're looking to collaborate, have a question, or just want to connect, I'd love to hear from you.
        </p>

        {/* Links */}
        <ul className="space-y-4 text-center">
          <li>
            <a
              href="https://www.linkedin.com/in/your-profile"
              className="text-teal-500 font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/your-handle"
              className="text-teal-500 font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/your-username"
              className="text-teal-500 font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* Email */}
        <div className="text-center mt-6">
          <p className="text-lg text-gray-700 mb-2">Prefer email?</p>
          <a
            href="mailto:youremail@example.com"
            className="text-teal-500 font-bold hover:underline"
          >
            youremail@example.com
          </a>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 mb-4">
            Interested in collaborating on a project? Let's work together!
          </p>
          <a
            href="/portfolio"
            className="bg-teal-500 text-white font-bold py-3 px-6 rounded shadow hover:bg-teal-600 transition"
          >
            Work with Me
          </a>
        </div>
      </div>
    </div>
  );
}
