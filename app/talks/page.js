"use client"; // Required for useEffect

import { useEffect, useState } from "react";
import TalkHeader from "@/components/talks/TalkHeader";

export default function Talks() {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    async function fetchTalks() {
      try {
        const res = await fetch("https://sessionize.com/api/speaker/json/jydf7o6y9h");
        const data = await res.json();

        if (data?.sessions && data?.events) {
          const mappedTalks = data.sessions.map((session, index) => {
            const matchingEvent = data.events[index] || null;

            return {
              eventName: matchingEvent ? matchingEvent.name : "Unknown Event",
              eventUrl: matchingEvent ? matchingEvent.website : null,
              sessionTitle: session.title,
              sessionDescription: session.description,
              sessionUrl: session.sessionUrl,
              date: matchingEvent
                ? new Date(matchingEvent.eventStartDate).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Date Not Available",
            };
          });

          setTalks(mappedTalks);
        }
      } catch (error) {
        console.error("Error fetching talks:", error);
      }
    }

    fetchTalks();
  }, []);

  return (
    <div>
    <TalkHeader
    title="Talks & Speaking Engagements"
    subtitle="Explore insights into WordPress, accessibility, and technology from my past and upcoming speaking engagements."
  />
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 bg-gray-50 min-h-screen">
      <div className="space-y-10 mt-12">
        {talks.length > 0 ? (
          talks.map((talk, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg shadow-lg border border-gray-200 transition hover:shadow-xl"
            >
              {/* Event Name & Date */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-tealCustom4 flex items-center gap-2">
                  📢 {talk.eventName}
                </h3>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                  📅 {talk.date}
                </p>
              </div>

              {/* Session Title & Description */}
              <h4 className="text-lg font-bold text-gray-900 mt-2 mb-2">{talk.sessionTitle}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{talk.sessionDescription}</p>

              {/* Buttons for View Session & View Event */}
              <div className="mt-5 flex flex-wrap gap-4">
              <a
                href={talk.sessionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-nvdarkbg text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition"
              >
                🎤 View Session
              </a>
              {talk.eventUrl ? (
                <a
                  href={talk.eventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-tealCustom4 text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-900 transition"
                >
                  🌍 View Event
                </a>
              ) : (
                <button
                  className="bg-gray-300 text-gray-500 text-sm font-semibold py-2 px-4 rounded-lg shadow cursor-not-allowed flex items-center gap-2"
                  disabled
                >
                  🌍 View Event
                </button>
              )}

              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center text-lg">No upcoming or past talks available.</p>
        )}
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Want Me to Speak at Your Event?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Whether it's WordPress, accessibility, or diversity, I'm available to share insights with your audience. Reach out to invite me as a speaker.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="bg-nvdarkbg text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-teal-600 transition"
          >
            📩 Invite Me to Speak
          </a>
          <a
            href="https://sessionize.com/samuel-femi-taiwo/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-nvdarkbg text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-teal-600 transition"
          >
            🔗 View My Sessionize Profile
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
