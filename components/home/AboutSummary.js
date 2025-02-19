// File: components/AboutMe.js

export default function AboutMe() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="space-y-4 md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-tealCustom4">
            ABOUT ME
          </h2>
          <p className="text-lg text-gray-700">
            I am a passionate advocate for inclusivity, diversity, and
            accessibility, especially in digital spaces. With over 8 years of
            experience in web development and technical support, I constantly
            seek new challenges that allow me to grow and expand my skills.
          </p>
          <p className="text-lg text-gray-700">
            I specialize in creating accessible, user-friendly web experiences,
            with expertise in WooCommerce and WordPress. I actively contribute
            to the WordPress community and have a particular interest in
            supporting neurodivergent and disabled users, ensuring digital
            experiences are accessible to everyone.
          </p>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img
            src={`/api/images?path=2021/10/FemiYB-1024x858.png`} // Replace with your actual image path
            alt="About Me Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
