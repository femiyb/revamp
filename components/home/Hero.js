// File: components/Hero.js

export default function Hero() {
    return (
      <section
        className="bg-teal-500 text-white py-16"
        style={{
          backgroundImage: `url('https://www.femiyb.com/wp-content/uploads/2021/10/FemiYB-1.png')`,
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center md:items-start">
          {/* Right Content */}
          <div className="md:ml-auto md:w-3/4 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, My Name is Femi
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold">
              I'm a Developer
            </h2>
            <p className="text-lg leading-relaxed">
              I specialize in WordPress and software development. Currently
              working as a Technical Support Engineer at Syde GmbH, I also develop
              WordPress themes and plugins.
            </p>
            <button className="bg-white text-teal-500 font-bold py-3 px-6 rounded-md shadow hover:bg-gray-200 transition">
              About Me
            </button>
          </div>
        </div>
      </section>
    );
  }
  