export default function TalkHeader({ title, subtitle }) {
    return (
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-teal-500 mb-4">{title}</h1>
        {subtitle && <p className="text-gray-700">{subtitle}</p>}
      </header>
    );
  }
  