import TalkCard from "@/components/talks/TalkCard";
import TalkHeader from "@/components/talks/TalkHeader";
import TalksList from "@/components/talks/TalksList";

export default function Talks() {
  const upcomingTalks = [
    {
      title: "WordCamp Europe 2025",
      topic: "Building Accessible Multilingual WordPress Sites",
      date: "June 15, 2025",
    },
  ];

  const pastTalks = [
    {
      title: "WooSesh 2024",
      topic: "Ensuring an Accessible Customer Journey in WooCommerce",
      date: "October 30, 2024",
    },
    {
      title: "WordCamp Cape Town 2024",
      topic: "Promoting Digital Accessibility in Africa",
      date: "August 2, 2024",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <TalkHeader
          title="Talks & Speaking Engagements"
          subtitle="Insights about WordPress, accessibility, and technology."
        />

        {/* Upcoming Talks */}
        <h2 className="text-2xl font-bold text-teal-500 mb-4">Upcoming Talks</h2>
        <TalksList talks={upcomingTalks} />

        {/* Past Talks */}
        <h2 className="text-2xl font-bold text-teal-500 mt-12 mb-4">Past Talks</h2>
        <TalksList talks={pastTalks} />

        {/* Call-to-Action */}
        <div className="text-center mt-16">
  <div className="flex justify-center gap-4">
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
      className="bg-teal-500 text-white font-bold py-3 px-6 rounded-md shadow hover:bg-teal-600 transition"
    >
      View My Full Speaker Profile on Sessionize
    </a>
  </div>
</div>

      </div>
    </section>
  );
}
