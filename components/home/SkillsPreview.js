// File: components/Skills.js

export default function Skills() {
  const skills = [
    {
      icon: '🌐', // Replace with an actual icon or image URL
      title: 'Web Development',
      description: 'Amazing websites and Web Apps, from start to finish.',
    },
    {
      icon: '📱', // Replace with an actual icon or image URL
      title: 'Mobile Applications',
      description:
        'Experience in mobile application development using ReactJS.',
    },
    {
      icon: '⚙️', // Replace with an actual icon or image URL
      title: 'Tech Support',
      description: 'Expert advice for consistent and secure code.',
    },
  ];

  return (
    <section className="py-32 bg-nvdarkbg">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          MY SKILLS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 text-white shadow rounded-lg hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-white">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
