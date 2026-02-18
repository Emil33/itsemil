import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Quote Management App",
      description: "Replaced a legacy SAP GUI tool with a modular, intuitive SAPUI5 web app. Features include dynamic quote editing, item categorisation, discount calculations, and real-time updates — reducing staff training time by 50% and improving efficiency.",
      // image: "/projects/quote-app.jpg", // Add if you have project screenshots
      techStack: ["SAPUI5", "JavaScript", "SAP", "OData"],
      // demoUrl: "https://demo.example.com", // Add if available
      // githubUrl: "https://github.com/...", // Add if available
    },
    {
      title: "Customer Admin Portal",
      description: "Led the development of a consumer-facing SAPUI5 application for managing bookings and customer data. Enhanced UX and data handling through collaboration with UX designers and backend teams.",
      techStack: ["SAPUI5", "JavaScript", "UX Design", "REST API"],
    },
    {
      title: "Production Scan App",
      description: "Built a barcode scanning web app for production tracking with real-time data integration, improving operational speed and reducing human error by 70%.",
      techStack: ["JavaScript", "Barcode Scanner", "Real-time Data", "SAP"],
    },
    {
      title: "To-Do App",
      description: "Personal React project built with Tailwind CSS, localStorage, and component-based architecture. Includes task filtering, drag-and-drop reordering, and responsive design.",
      techStack: ["React", "Tailwind CSS", "localStorage", "Drag & Drop"],
      githubUrl: "https://github.com/itsemil/todo-app",
      // demoUrl: "https://your-todo-app-demo.netlify.app", // Add if you deploy it
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Highlighted Projects
      </motion.h2>
      <motion.p
        className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        A selection of projects showcasing my expertise in web development, from enterprise SAPUI5 applications to modern React solutions.
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}