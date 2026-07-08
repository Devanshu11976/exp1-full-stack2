import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";

// Home Component
const Home = () => {
  return (
    <div className="p-4 bg-light rounded mt-4">
      <h2>Home Page</h2>
      <p>
        Welcome to our Multi-Page Single Page Application! This demonstrates
        complete routing functionality with multiple pages.
      </p>
      <p>Features of this SPA:</p>
      <ul>
        <li>Multiple components mapped to different routes</li>
        <li>Navigation bar with links</li>
        <li>Smooth navigation without page reload</li>
        <li>Clean and responsive design</li>
      </ul>
    </div>
  );
};

// About Component
const About = () => {
  return (
    <div className="p-4 bg-light rounded mt-4">
      <h2>About Us</h2>
      <p>
        This is a demonstration of a multi-page SPA using React Router. Each
        page is a separate component, but navigation happens instantly without
        reloading the entire application.
      </p>
      <p>
        React Router enables us to create seamless navigation experiences in
        single page applications.
      </p>
    </div>
  );
};

// Services Component
const Services = () => {
  return (
    <div className="p-4 bg-light rounded mt-4">
      <h2>Our Services</h2>
      <p>We offer a variety of services:</p>
      <ul>
        <li>Web Development - Modern and responsive websites</li>
        <li>Mobile Development - Cross-platform mobile applications</li>
        <li>UI/UX Design - Beautiful and intuitive interfaces</li>
        <li>Consulting - Expert technical guidance</li>
      </ul>
    </div>
  );
};

// Contact Component
const Contact = () => {
  return (
    <div className="p-4 bg-light rounded mt-4">
      <h2>Contact Us</h2>
      <p>Get in touch with us:</p>
      <p>
        <strong>Email:</strong> contact@example.com
        <br />
        <strong>Phone:</strong> +1 (555) 123-4567
        <br />
        <strong>Address:</strong> 123 Main Street, City, State 12345
      </p>
    </div>
  );
};

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My SPA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h1 className="mt-4 mb-3">
          Experiment 3.3: Multi-Page SPA Using Routing
        </h1>
        <p>
          This experiment demonstrates:
          <ul>
            <li>Creating multiple components for different pages</li>
            <li>Mapping each component to a route</li>
            <li>Testing navigation with a complete navigation bar</li>
          </ul>
        </p>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
