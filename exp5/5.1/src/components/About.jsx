import React from "react";

const About = () => {
  return (
    <div className="p-5 bg-white rounded shadow border-start border-5 border-info">
      <h2 className="text-info fw-bold mb-3">About Me</h2>
      <div className="mb-4">
        <h3 className="h4 text-dark">Devanshu Sharma</h3>
        <p className="text-muted mb-1">Section: 23AML-3A</p>
        <p className="text-muted mb-1">Full Stack-2</p>
      </div>
      <p className="lead text-secondary">
        I am a Computer Science student specializing in AI & ML, with a strong
        interest in backend development and scalable system design.
      </p>
      <p>
        Currently, I am building modern web applications using React and
        exploring advanced concepts like routing, lazy loading, and performance
        optimization to create efficient and user-friendly applications.
      </p>
    </div>
  );
};

export default About;