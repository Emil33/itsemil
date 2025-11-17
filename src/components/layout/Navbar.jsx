import DarkModeToggle from "../ui/DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-2xl font-bold text-blue-600">itsemil</h1>
        <div className="space-x-6">
          <a href="#hero" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}