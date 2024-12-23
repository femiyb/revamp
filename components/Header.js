export default function Header() {
    return (
      <header className="bg-white shadow p-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png" // Replace with your logo file path
              alt="Clued YB Logo"
              className="h-8 w-8"
            />
            <span className="text-lg font-bold text-black">Clued YB</span>
          </div>
  
          {/* Navigation Links */}
          <ul className="flex space-x-8 text-black">
            <li><a href="/" className="hover:text-teal-500">Home</a></li>
            <li><a href="/about" className="hover:text-teal-500">About Me</a></li>
            <li><a href="/blog" className="hover:text-teal-500">Blog</a></li>
            <li><a href="/contact" className="hover:text-teal-500">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  