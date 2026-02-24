import React from "react";

const About = () => {
  return (
    <div className="p-5 text-dark bg-white rounded-4 shadow-lg border-0 overflow-hidden position-relative border-top border-5 border-info">
      <div className="row align-items-center">
        <div className="col-md-5 mb-4 mb-md-0">
          <div className="p-4 bg-info bg-opacity-10 rounded-4 shadow-sm border border-info border-opacity-25 h-100 d-flex flex-column justify-content-center align-items-center">
            <h2 className="display-5 fw-bold text-info mb-1 mt-3">
              Devanshu Sharma
            </h2>
            <p className="fs-5 text-muted mb-4 fw-medium text-uppercase ls-wide">
              Backend & AI/ML Enthusiast
            </p>
            <div className="text-center w-100">
              <div className="p-3 bg-white rounded-3 shadow-sm mb-3">
                <span className="text-muted d-block small text-uppercase fw-bold ls-tight mb-1">
                  Section
                </span>
                <span className="h5 text-dark fw-bold mb-0">23AML-3A</span>
              </div>
              <div className="p-3 bg-white rounded-3 shadow-sm mb-3">
                <span className="text-muted d-block small text-uppercase fw-bold ls-tight mb-1">
                  Course
                </span>
                <span className="h5 text-dark fw-bold mb-0">Full Stack-2</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 ps-md-5">
          <h3 className="h2 fw-bold text-dark mb-4">
            Building Scalable & Intelligent Systems
          </h3>
          <p className="lead text-secondary mb-4">
            Hi, I'm Devanshu. I focus on backend development, system design,
            and integrating AI/ML concepts into real-world applications.
          </p>
          <p className="text-muted mb-4">
            In this experiment, I am implementing{" "}
            <strong>Route-Based Lazy Loading</strong> to improve application
            performance. This approach ensures that components are loaded only
            when required, optimizing resource usage and enhancing user
            experience.
          </p>
          <blockquote className="blockquote border-start border-4 border-info ps-4 py-2 bg-light rounded-2 shadow-sm">
            <p className="mb-0 fs-6 italic text-dark fw-medium">
              "Continuous learning and consistency are the foundations of
              long-term success."
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;