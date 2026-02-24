import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Spinner } from "react-bootstrap";

// Lazy loading the components
const Home = lazy(() => import("./src/components/Home.jsx"));
const About = lazy(() => import("./src/components/About.jsx"));
const Contact = lazy(() => import("./src/components/Contact.jsx"));

const LoadingFallback = () => (
  <div className="d-flex justify-content-center align-items-center p-5 bg-dark text-light rounded">
    <Spinner animation="border" role="status" variant="light">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <span className="ms-3 text-light">Loading...</span>
  </div>
);

const App = () => {
  return (
    <Router>
      {/* Dark Navbar */}
      <Navbar bg="black" variant="dark" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-info">
            Exp 5.1: Lazy Loading
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-light">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-light">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Dark Background Wrapper */}
      <div className="bg-dark text-light min-vh-100">
        <Container className="py-5">
          <h1 className="text-center mb-4 text-info">
            React Lazy Loading Experiment
          </h1>

          {/* Suspense Wrapper */}
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>

          <div className="mt-5 border-top border-secondary pt-3 text-center text-muted small">
            <p>
              Observe the Network tab in DevTools to see the dynamic importing of
              component chunks.
            </p>
          </div>
        </Container>
      </div>
    </Router>
  );
};

export default App;