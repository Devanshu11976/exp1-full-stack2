import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-4">

                                            {/* BUTTON */}
      <div className="text-center mb-4">
        <button className="btn btn-primary me-2">Primary</button>
        <button className="btn btn-success me-2">Success</button>
        <button className="btn btn-danger">Danger</button>
      </div>

                                             {/* CARD */}
      <div className="card mb-4" style={{ width: "18rem", margin: "auto" }}>
        <div className="card-body text-center">
          <h5 className="card-title">Bootstrap Card</h5>
          <p className="card-text">
            This is a simple card using Bootstrap in React.
          </p>
          <button className="btn btn-warning">Know More</button>
        </div>
      </div>

                                            {/* FORM */}
      <div className="card p-4" style={{ maxWidth: "400px", margin: "auto" }}>
        <h4 className="text-center mb-3">Login Form</h4>

        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>

          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>

    </div>
  );
}

export default App;
