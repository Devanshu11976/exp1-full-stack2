import React from "react";

const Dashboard = () => {
  return (
    <div className="p-5 text-dark bg-white rounded-5 shadow-lg border-0 overflow-hidden position-relative border-start border-5 border-primary">
      <div className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-4">
        <div>
          <h2 className="display-6 fw-bold text-primary mb-1 mt-3">
            Professional Dashboard
          </h2>
          <p className="text-muted lead fw-medium mb-1">
            Devanshu Sharma
          </p>
        </div>
        <div className="text-end">
          <div className="badge bg-primary fs-6 px-3 py-2 rounded-pill shadow-sm">
            AI/ML Project
          </div>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="p-4 bg-light rounded-4 shadow-sm h-100 text-center border">
            <h4 className="h6 text-muted mb-3 text-uppercase fw-bold ls-wide">
              Model Accuracy
            </h4>
            <span className="display-6 fw-bold text-primary mb-0">
              92%
            </span>
            <p className="text-secondary small mt-2">
              Optimized Training
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 bg-light rounded-4 shadow-sm h-100 text-center border">
            <h4 className="h6 text-muted mb-3 text-uppercase fw-bold ls-wide">
              API Response Time
            </h4>
            <span className="display-6 fw-bold text-info mb-0">
              120ms
            </span>
            <p className="text-secondary small mt-2">
              Backend Optimized
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 bg-light rounded-4 shadow-sm h-100 text-center border">
            <h4 className="h6 text-muted mb-3 text-uppercase fw-bold ls-wide">
              Performance Gain
            </h4>
            <span className="display-6 fw-bold text-success mb-0">
              +30%
            </span>
            <p className="text-secondary small mt-2">
              Through Lazy Loading
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-primary bg-opacity-10 rounded-4 shadow-sm border border-primary border-opacity-25 mt-4">
        <h3 className="h5 fw-bold text-primary mb-3">
          Project Summary
        </h3>
        <p className="text-muted smaller mb-0">
          This dashboard demonstrates route-based lazy loading and modular
          architecture. Components are loaded only when required, improving
          scalability, reducing initial bundle size, and enhancing overall
          application performance.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;