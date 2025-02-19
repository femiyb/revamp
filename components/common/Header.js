export default function Header() {
  return (
    <header className="bg-white shadow p-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <a href="/">
            <img
              src="https://www.app.femiyb.me/wp-content/uploads/2021/10/cropped-Femi-1.png"
              alt="Clued YB Logo"
              className="h-8"
            />
          </a>
          <a href="/">
            <span className="text-lg font-bold text-black">Femi YB</span>
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-black">
          <li>
            <a href="/" className="hover:text-teal-500">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-teal-500">
              About Me
            </a>
          </li>
          <li>
            <a href="/talks" className="text-gray-700 hover:text-teal-500">
              Talks
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-teal-500">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-teal-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
