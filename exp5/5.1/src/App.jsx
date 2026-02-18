import './App.css';
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./component/Dashboard'));
    }, 3000);
  })
);

function App() {
  return (
    <div className="container">
      <div className="content">
        <Suspense fallback={<div className="inner-loader">Loading Dashboard...</div>}>
          <Dashboard />
        </Suspense>
      </div>
    </div>
  );
}

export default App;