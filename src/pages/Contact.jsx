function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <p className="text-gray-700 mb-4">
        Interested in working together? Let’s connect!
      </p>
      <ul className="space-y-2">
        <li>
          <a
            href="mailto:your@email.com"
            className="text-blue-600 hover:underline"
          >
            your@email.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/itsemil"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/itsemil"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
