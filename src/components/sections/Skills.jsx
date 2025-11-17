import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      className="max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-3xl font-semibold mb-10">Technical Skills</h3>

      <h4 className="text-xl font-semibold mb-4 text-blue-600">Front-End</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        JavaScript • HTML • CSS • XML • React • SAPUI5 • Tailwind CSS • TypeScript
      </p>

      <h4 className="text-xl font-semibold mb-4 text-blue-600">Back-End & Integration</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        ABAP • OData • RESTful APIs • CDS Views
      </p>

      <h4 className="text-xl font-semibold mb-4 text-blue-600">Design & Architecture</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        UI/UX Design • Responsive Design • MVC Architecture • Component Reuse •
        Performance Optimisation • Fiori Design Guidelines
      </p>

      <h4 className="text-xl font-semibold mb-4 text-blue-600">Tools & Methodologies</h4>
      <p className="text-gray-600 dark:text-gray-300">
        VS Code • Git • Jira • SAP Web IDE • SAP BAS • Postman • Agile Development • CI/CD Workflows
      </p>
    </div>
    </motion.div>
  );
}
