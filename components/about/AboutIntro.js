export default function AboutIntro() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Left: Intro Text */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-teal-500">A Little About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I’m a web developer and digital accessibility advocate with a focus
              on creating inclusive, accessible online experiences. Currently
              working as a Technical Support Engineer at Syde GmbH, I specialize
              in WordPress development, building custom themes and plugins, and
              providing accessible solutions for e-commerce sites.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With over 8 years of experience in web development, technical
              support, and customer care, I thrive on solving complex problems
              and collaborating with teams to deliver high-quality solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
            When I’m not coding, you’ll find me sharing insights on WordPress and accessibility on my blog, speaking at tech conferences, and organizing WordPress community events.
            </p>
          </div>
  
          {/* Right: Avatar */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src="https://www.femiyb.com/wp-content/uploads/2022/01/hoodie_samuel-femi-taiwo-332x1024.png"
              alt="Femi Avatar"
              className="w-64 h-auto"
            />
          </div>
        </div>
      </section>
    );
  }
  