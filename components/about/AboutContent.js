// File: components/about/AboutContent.js

export default function AboutContent() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* About Me Section */}
  
          {/* What I Do Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-tealCustom4 mb-6">What I Do</h2>
            <ul className="list-disc list-inside space-y-4">
              <li><strong>Web Development:</strong> Building custom WordPress themes and plugins for unique client needs.</li>
              <li><strong>Accessibility Advocacy:</strong> Creating accessible websites compliant with WCAG standards.</li>
              <li><strong>E-Commerce Solutions:</strong> Developing WooCommerce stores optimized for user experience.</li>
              <li><strong>Technical Support:</strong> Providing support for WordPress themes, plugins, and custom solutions.</li>
              <li><strong>Community Engagement:</strong> Speaking at WordPress events and organizing community meetups.</li>
            </ul>
          </div>
  
          {/* Technologies Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-tealCustom4 mb-6">Technologies I Work With</h2>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gray-100 rounded shadow">WordPress</span>
              <span className="px-4 py-2 bg-gray-100 rounded shadow">PHP</span>
              <span className="px-4 py-2 bg-gray-100 rounded shadow">JavaScript</span>
              <span className="px-4 py-2 bg-gray-100 rounded shadow">ReactJS</span>
              <span className="px-4 py-2 bg-gray-100 rounded shadow">Tailwind CSS</span>
              <span className="px-4 py-2 bg-gray-100 rounded shadow">Sass</span>
            </div>
          </div>
  
          {/* Experience Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-tealCustom4 mb-6">Latest Work Experience</h2>
            <ul className="space-y-4">
              <li><strong>Syde GmbH:</strong> Technical Support Engineer</li>
              <li><strong>Newsletter Glue:</strong> Technical Support Engineer</li>
              <li><strong>DevLlo Plugins:</strong> WordPress Plugin Developer</li>
              <li><strong>Paid Memberships Pro:</strong> Technical Support Engineer</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  