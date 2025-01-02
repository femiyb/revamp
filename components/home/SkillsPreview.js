// File: components/Skills.js

export default function Skills() {
    const skills = [
      {
        icon: "🌐", // Replace with an actual icon or image URL
        title: "Web Development",
        description: "Amazing websites and Web Apps, from start to finish.",
      },
      {
        icon: "📱", // Replace with an actual icon or image URL
        title: "Mobile Applications",
        description: "Experience in mobile application development using ReactJS.",
      },
      {
        icon: "⚙️", // Replace with an actual icon or image URL
        title: "Tech Support",
        description: "Expert advice for consistent and secure code.",
      },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-8">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  