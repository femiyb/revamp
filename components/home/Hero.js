// File: components/Hero.js

export default function Hero() {
  return (
    <section className="text-white py-16 bg-tealCustombg">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="/assets/images/samuel-femi-taiwo_original-e1736284460605.png"
            alt="Femi's Illustration" 
            className="w-full h-auto max-w-sm"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-2/3 space-y-6 text-center md:text-left md:ml-8 p-12 bg-tealCustombg2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, My Name is Femi
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold">I'm a Developer</h2>
          <p className="text-lg leading-relaxed">
            I specialize in WordPress and software development. Currently
            working as a Technical Support Engineer at Syde GmbH, I also develop
            WordPress themes and plugins.
          </p>
          <button className="bg-tealCustom3 text-white font-bold py-3 px-6 rounded-md shadow hover:bg-gray-200 hover:text-tealCustom4 transition">
            About Me
          </button>
        </div>
      </div>
    </section>
  );
}
