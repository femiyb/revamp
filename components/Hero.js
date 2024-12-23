// File: components/Hero.js


export default function Hero() {
    return (
      <section className="bg-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="space-y-4 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, My Name is Clued
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold">I'm a Developer</h2>
            <p className="text-lg">
            I am a software developer specializing in creating custom solutions with a focus on functionality, user experience, and modern technologies.
            </p>
            <button className="bg-white text-teal-500 font-bold py-2 px-4 rounded shadow hover:bg-gray-200">
              About Me
            </button>
          </div>
  
          {/* Right Image */}
          <div className="mt-8 md:mt-0 md:w-1/2">
            <img
              src="/hero-image.png" // Replace with your actual image path
              alt="Developer illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    );
  }
  