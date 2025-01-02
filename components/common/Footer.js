export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <p>&copy; {new Date().getFullYear()} Clued YB. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              Twitter
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }
  