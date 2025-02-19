import ContactHeader from '@/components/contact/ContactHeader';

export const metadata = {
  title: "Contact Me | Femi YB",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <div className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          {/* Links */}
          <ul className="space-y-4 text-center">
            <li>
              <a
                href="https://www.linkedin.com/in/femiyb"
                className="text-tealCustom4 font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/femiyb"
                className="text-tealCustom4 font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/femiyb"
                className="text-tealCustom4 font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>

          {/* Email */}
          <div className="text-center mt-6">
            <p className="text-lg text-gray-700 mb-2">Prefer email?</p>
            <a
              href="mailto:mail@femiyb.me"
              className="text-tealCustom4 font-bold hover:underline"
            >
              mail[@]femiyb.me
            </a>
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 mb-4">
              Interested in collaborating on a project? Let's work together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
