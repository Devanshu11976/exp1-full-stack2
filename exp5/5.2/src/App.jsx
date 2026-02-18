import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Profile = lazy(() => import('./component/Profile'));
const Dashboard = lazy(() => import('./component/Dashboard'));

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Profile</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>

        <Route
          path="/"
          element={
            <div className="container">
              <div className="content">
                <Suspense fallback={<div className="inner-loader">Loading Profile...</div>}>
                  <Profile />
                </Suspense>
              </div>
            </div>
          }
        />

        <Route
          path="/dashboard"
          element={
            <div className="container">
              <div className="content">
                <Suspense fallback={<div className="inner-loader">Loading Dashboard...</div>}>
                  <Dashboard />
                </Suspense>
              </div>
            </div>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;