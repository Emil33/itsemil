function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <ul className="space-y-4">
        <li className="p-4 border rounded-lg shadow-sm">
          <h3 className="text-xl font-bold">To-Do App</h3>
          <p className="text-gray-600">
            Task manager with filters, drag & drop, and localStorage
            persistence.
          </p>
        </li>
        <li className="p-4 border rounded-lg shadow-sm">
          <h3 className="text-xl font-bold">Portfolio Website</h3>
          <p className="text-gray-600">
            This very site built with React, Tailwind, and Framer Motion.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
