export default function Footer() {
  return (
    <footer className="bg-nvdarkbg text-white py-6 text-center w-full">
      <div className="max-w-7xl mx-auto text-center space-y-2">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com/femiyb" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            Twitter
          </a>
          <a href="https://github.com/femiyb" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/femiyb" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
