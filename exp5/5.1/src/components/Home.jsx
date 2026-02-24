import React from "react";

const Home = () => {
  return (
    <div className="p-5 text-center bg-white rounded shadow border-bottom border-5 border-primary">
      <h2 className="text-primary display-4 fw-bold mb-3 mt-4">
        Welcome To My Portfolio
      </h2>
      <p className="lead text-secondary mb-5">
        Building scalable, efficient, and modern web applications.
      </p>

      <div className="row justify-content-center mb-5">
        <div className="col-md-10">
          <p className="fs-5 text-dark mb-4">
            Hi, I'm Devanshu. I am a Computer Science student specializing in
            AI & ML with a strong interest in backend development and system design.
            My goal is to create robust applications that are fast, secure, and scalable.
          </p>
          <div className="p-4 bg-light rounded text-start shadow-sm border">
            <h3 className="h5 text-primary">Focused on Performance & Growth</h3>
            <p className="text-muted">
              This project demonstrates modular design and efficient routing
              using modern React concepts. By applying structured development
              practices, I aim to build applications that deliver smooth user
              experiences while maintaining clean and maintainable code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;