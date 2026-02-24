import React from "react";

const Contact = () => {
  return (
    <div className="p-5 bg-white rounded shadow border-start border-5 border-secondary">
      <h2 className="text-secondary fw-bold mb-4">Get In Touch</h2>
      <p className="lead mb-4">
        I am always open to collaboration, backend development projects,
        internships, and learning opportunities in software development.
      </p>
      <div className="card border-0 bg-light p-4 mb-3">
        <h3 className="h5 text-dark">Contact Information</h3>
        <p className="text-muted mb-0">Email:</p>
        <a
          href="mailto:devanshusharmagsp@gmail.com"
          className="text-primary mb-3 text-decoration-none"
        >
          devanshusharmagsp@gmail.com
        </a>

        <p className="text-muted mb-2 mt-2 font-italic">
          "Success is built on continuous learning, consistency, and strong
          problem-solving skills."
        </p>
      </div>
      <p className="text-muted small">
        If you would like to discuss backend development, AI/ML projects, or
        potential opportunities, feel free to reach out. I would be happy to connect!
      </p>
    </div>
  );
};

export default Contact;