import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

// Home Component
const Home = () => {
  return (
    <div className="p-4 bg-light rounded">
      <h2>Home Page</h2>
      <p>
        Welcome to the Home page. This demonstrates basic client-side routing
        using React Router.
      </p>
      <p>The application is wrapped with BrowserRouter.</p>
      <p>
        Change the URL manually to navigate:
        <ul>
          <li>/about - About page</li>
          <li>/contact - Contact page</li>
        </ul>
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
        This is the About page. Routes are defined using Routes and Route
        components.
      </p>
      <p>Navigation happens without page reload!</p>
    </div>
  );
};

// Contact Component
const Contact = () => {
  return (
    <div className="p-4 bg-light rounded">
      <h2>Contact Page</h2>
      <p>
        This is the Contact page. Each route displays a different component.
      </p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Container className="mt-5">
        <h1 className="mb-4">
          Experiment 3.1: Basic Client-Side Routing Using React Router
        </h1>
        <p className="mb-4">
          This application demonstrates:
          <ul>
            <li>Wrapping the application with BrowserRouter</li>
            <li>Defining routes using Routes and Route components</li>
            <li>Navigating between pages without page reload</li>
          </ul>
        </p>

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
