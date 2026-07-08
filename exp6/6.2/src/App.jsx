import { useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|in|[A-Za-z]{2,})$/;
const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

function validateEmail(value) {
  if (!value) return "Email is required.";
  if (!emailRegex.test(value)) {
    return "Use a valid email with @ and .com/.in or country TLD.";
  }
  return "";
}

function validatePassword(value) {
  if (!value) return "Password is required.";
  if (!/^[A-Z]/.test(value)) return "Start with a capital letter.";
  if (!/[0-9]/.test(value)) return "Include at least one number.";
  if (!specialChars.test(value))
    return "Include at least one special character.";
  if (value.length < 5) return "Use at least 5 characters.";
  return "";
}

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitted, setSubmitted] = useState(false);

  const emailError = useMemo(() => validateEmail(email), [email]);
  const passwordError = useMemo(() => validatePassword(password), [password]);
  const isValid = !emailError && !passwordError;

  const onSubmit = (event) => {
    event.preventDefault();
    setTouched({ email: true, password: true });
    if (!isValid) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1500);
  };

  const handleBlur = (field) => () =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const emailStateClass = touched.email
    ? emailError
      ? "is-invalid"
      : "is-valid"
    : "";

  const passwordStateClass = touched.password
    ? passwordError
      ? "is-invalid"
      : "is-valid"
    : "";

  return (
    <div className="page">
      <div className="card">
        <header className="header">
          <div className="badge">F2</div>
          <div>
            <p className="subtitle">Experiment 6.2 · Client-side Validation</p>
            <h1 className="title">Validate Email & Password</h1>
            <p className="subtitle">Realtime checks, no server round-trip.</p>
          </div>
        </header>

        <form className="form" onSubmit={onSubmit} noValidate>
          <label className="label">
            Email
            <input
              className={`input form-control ${emailStateClass}`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlur("email")}
              placeholder="you@example.com"
              aria-invalid={Boolean(emailError)}
            />
            {touched.email && emailError ? (
              <div className="error invalid-feedback d-block">{emailError}</div>
            ) : (
              <div className="hint form-text">
                Must include @ and end with .com/.in or country code.
              </div>
            )}
          </label>

          <label className="label">
            Password
            <input
              className={`input form-control ${passwordStateClass}`}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handleBlur("password")}
              placeholder="Start with capital, add number & special char"
              aria-invalid={Boolean(passwordError)}
            />
            {touched.password && passwordError ? (
              <div className="error invalid-feedback d-block">
                {passwordError}
              </div>
            ) : (
              <div className="hint form-text">
                Start with a capital, include a number, a special character, and
                at least 5 chars.
              </div>
            )}
          </label>

          <button type="submit" className="submit" disabled={!isValid}>
            Validate & Submit
          </button>
        </form>

        {submitted && (
          <div className="status">All checks passed. Submission allowed!</div>
        )}
      </div>
    </div>
  );
}
