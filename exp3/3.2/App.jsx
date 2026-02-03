import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

// Home Component
const Home = () => {
  return (
    <div className="p-4 bg-light rounded">
      <h2>Home Page</h2>
      <p>
        Welcome to the Home page. Use the navigation links above to navigate
        smoothly between pages without reloading.
      </p>
    </div>
  );
};

// About Component
const About = () => {
  return (
    <div className="p-4 bg-light rounded">
      <h2>About Page</h2>
      <p>
        This is the About page. Notice how the page changes without a full
        reload - that's smooth navigation using the Link component!
      </p>
    </div>
  );
};

// Contact Component
const Contact = () => {
  return (
    <div className="p-4 bg-light rounded">
      <h2>Contact Page</h2>
      <p>
        This is the Contact page. Links enable smooth navigation in our SPA.
      </p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Container className="mt-5">
        <h1 className="mb-4">
          Experiment 3.2: Navigation Using Link Component
        </h1>
        <p className="mb-4">
          This experiment demonstrates:
          <ul>
            <li>Importing Link from react-router-dom</li>
            <li>Creating navigation links</li>
            <li>Enabling smooth navigation without page reload</li>
          </ul>
        </p>

        {/* Navigation Links */}
        <nav className="mb-4 p-3 bg-dark rounded">
          <Link to="/" className="btn btn-primary me-2">
            Home
          </Link>
          <Link to="/about" className="btn btn-success me-2">
            About
          </Link>
          <Link to="/contact" className="btn btn-warning">
            Contact
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
