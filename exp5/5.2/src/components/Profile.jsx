import React from "react";

const Profile = () => {
  return (
    <div className="p-5 text-dark bg-white rounded-4 shadow-lg border-0 overflow-hidden position-relative border-bottom border-5 border-success">
      <div className="row align-items-center">
        <div className="col-md-4 mb-4 mb-md-0 text-center">
          <div className="p-5 bg-success bg-opacity-10 rounded-circle shadow-sm border border-success border-opacity-25 d-inline-block position-relative mb-4">
            <h1 className="display-1 fw-bold text-success mb-0">D</h1>
            <div className="position-absolute bottom-0 end-0 p-2 bg-success rounded-circle shadow-sm">
              <div className="p-1 bg-white rounded-circle"></div>
            </div>
          </div>
          <h2 className="display-6 fw-bold text-dark mb-1">
            Devanshu Sharma
          </h2>
          <p className="fs-5 text-muted mb-4 fw-medium text-uppercase ls-wide">
            Backend Developer
          </p>
        </div>
        <div className="col-md-8 ps-md-5 border-start border-light ps-4">
          <h3 className="h3 fw-bold text-dark mb-4 mt-2">
            Personal Identity
          </h3>

          <div className="mb-4">
            <h4 className="h6 text-muted mb-2 text-uppercase fw-bold ls-tight">
              Section
            </h4>
            <p className="h5 text-dark fw-bold mb-3">23AML-3A</p>
          </div>

          <div className="mb-4">
            <h4 className="h6 text-muted mb-2 text-uppercase fw-bold ls-tight">
              Skillset
            </h4>
            <div className="d-flex flex-wrap gap-2 mt-2">
              <span className="badge bg-success bg-opacity-75 text-white fs-7 px-3 py-1 rounded-pill shadow-sm">
                React
              </span>
              <span className="badge bg-success bg-opacity-75 text-white fs-7 px-3 py-1 rounded-pill shadow-sm">
                Node.js
              </span>
              <span className="badge bg-success bg-opacity-75 text-white fs-7 px-3 py-1 rounded-pill shadow-sm">
                AI/ML
              </span>
              <span className="badge bg-success bg-opacity-75 text-white fs-7 px-3 py-1 rounded-pill shadow-sm">
                System Design
              </span>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="h6 text-muted mb-2 text-uppercase fw-bold ls-tight">
              Mission
            </h4>
            <p className="lead text-secondary mb-4 italic fs-6">
              To build scalable, efficient, and intelligent applications by
              combining backend engineering with AI-driven solutions, while
              continuously improving performance through smart architectural
              decisions like Lazy Loading and modular design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;