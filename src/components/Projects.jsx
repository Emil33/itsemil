export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto text-center">
      <h3 className="text-3xl font-semibold mb-10">Highlighted Projects</h3>

      <div className="grid sm:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h4 className="text-xl font-bold mb-2">Quote Management App</h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Replaced a legacy SAP GUI tool with a modular, intuitive SAPUI5 web app. Features include dynamic quote
            editing, item categorisation, discount calculations, and real-time updates — reducing staff training time
            by 50% and improving efficiency.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h4 className="text-xl font-bold mb-2">Customer Admin Portal</h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Led the development of a consumer-facing SAPUI5 application for managing bookings and customer data.
            Enhanced UX and data handling through collaboration with UX designers and backend teams.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h4 className="text-xl font-bold mb-2">Production Scan App</h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Built a barcode scanning web app for production tracking with real-time data integration, improving
            operational speed and reducing human error by 70%.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h4 className="text-xl font-bold mb-2">To-Do App</h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Personal React project built with Tailwind CSS, localStorage, and component-based architecture.
            Includes task filtering, drag-and-drop reordering, and responsive design.
          </p>
          <a
            href="https://github.com/itsemil/todo-app"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
