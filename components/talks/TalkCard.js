export default function TalkCard({ title, topic, date }) {
    return (
      <li className="p-4 bg-gray-100 rounded-md shadow">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-700">{topic}</p>
        <p className="text-gray-500 text-sm">{date}</p>
      </li>
    );
  }
  