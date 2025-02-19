export default function TalkHeader({ title, subtitle }) {
  return (
    <section className="bg-tealCustombg text-white py-16 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      {subtitle && <p className="text-white">{subtitle}</p>}
    </section>
  );
}
