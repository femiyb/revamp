export default function Talks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-teal-500 mb-8 text-center">
          Talks & Speaking Engagements
        </h1>

        {/* Introduction */}
        <p className="text-gray-700 text-center mb-12">
          I love sharing insights about WordPress, accessibility, and
          technology. Below are some of the topics I’ve spoken on and events
          I’ve participated in.
        </p>

        {/* Upcoming Talks */}
        <h2 className="text-2xl font-bold text-teal-500 mb-4">
          Upcoming Talks
        </h2>
        <ul className="space-y-4">
          <li className="p-4 bg-gray-100 rounded-md shadow">
            <h3 className="text-lg font-bold">WordCamp Europe 2025</h3>
            <p>Topic: Building Accessible Multilingual WordPress Sites</p>
            <p>Date: June 15, 2025</p>
          </li>
          {/* Add more upcoming talks here */}
        </ul>

        {/* Past Talks */}
        <h2 className="text-2xl font-bold text-teal-500 mt-12 mb-4">
          Past Talks
        </h2>
        <ul className="space-y-4">
          <li className="p-4 bg-gray-100 rounded-md shadow">
            <h3 className="text-lg font-bold">WooSesh 2024</h3>
            <p>Topic: Ensuring an Accessible Customer Journey in WooCommerce</p>
            <p>Date: October 30, 2024</p>
          </li>
          <li className="p-4 bg-gray-100 rounded-md shadow">
            <h3 className="text-lg font-bold">WordCamp Cape Town 2024</h3>
            <p>Topic: Promoting Digital Accessibility in Africa</p>
            <p>Date: August 2, 2024</p>
          </li>
          {/* Add more past talks here */}
        </ul>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="bg-teal-500 text-white font-bold py-3 px-6 rounded-md shadow hover:bg-teal-600 transition"
          >
            Invite Me to Speak
          </a>
          <a
            href="https://sessionize.com/samuel-femi-taiwo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:underline"
          >
            View My Full Speaker Profile on Sessionize
          </a>
        </div>
      </div>
    </section>
  );
}
