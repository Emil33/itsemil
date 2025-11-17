export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-24">
      <div className="max-w-5xl mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
        <p>© {new Date().getFullYear()} Emil Julenyi | itsemil.dev</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="https://github.com/itsemil" className="hover:text-blue-500">GitHub</a>
          <a href="https://linkedin.com/in/emil-julenyi-a22b3489" className="hover:text-blue-500">LinkedIn</a>
          <a href="mailto:ejulenyi@gmail.com" className="hover:text-blue-500">Email</a>
        </div>
      </div>
    </footer>
  );
}
