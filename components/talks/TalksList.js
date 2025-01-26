import TalkCard from "./TalkCard";

export default function TalksList({ talks }) {
  return (
    <ul className="space-y-4">
      {talks.map((talk, index) => (
        <TalkCard
          key={index}
          title={talk.title}
          topic={talk.topic}
          date={talk.date}
        />
      ))}
    </ul>
  );
}
