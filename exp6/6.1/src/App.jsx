import React, { useState } from "react";

const createInitialForm = () => ({
  fullName: "",
  email: "",
  role: "",
  experience: "0-1 years",
  topics: { hooks: true, routing: false, testing: false },
  goals: "",
});

const describeTopics = (topics) =>
  Object.entries(topics)
    .filter(([, checked]) => checked)
    .map(([key]) => key[0].toUpperCase() + key.slice(1))
    .join(", ") || "None selected";

const ROLES = [
  { value: "student", label: "Student", icon: "◎" },
  { value: "engineer", label: "Frontend Engineer", icon: "⬡" },
  { value: "designer", label: "Designer", icon: "◈" },
  { value: "manager", label: "Product / Manager", icon: "◇" },
];

const EXPERIENCE = ["0-1 years", "2-4 years", "5-8 years", "9+ years"];
const TOPICS = [
  { key: "hooks", label: "Hooks", desc: "useState, useEffect & friends" },
  { key: "routing", label: "Routing", desc: "Navigation & URL structure" },
  { key: "testing", label: "Testing", desc: "Jest, RTL, Vitest" },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0a0a0f !important;
    color: #e8e4dc !important;
    font-family: 'Outfit', sans-serif;
    min-height: 100vh;
  }

  .app-root {
    min-height: 100vh;
    display: grid;
    place-items: start center;
    padding: 48px 20px 80px;
    background:
      radial-gradient(ellipse 60% 40% at 80% 10%, rgba(255,90,50,0.07) 0%, transparent 60%),
      radial-gradient(ellipse 50% 30% at 10% 80%, rgba(100,60,200,0.08) 0%, transparent 60%),
      #0a0a0f;
  }

  .card {
    width: min(820px, 100%);
    display: grid;
    gap: 0;
  }

  /* HEADER */
  .header {
    display: block;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(232,228,220,0.1);
    position: relative;
  }

  .header::before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 80px;
    height: 1px;
    background: #ff5a32;
  }

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #ff5a32;
    opacity: 0.9;
  }

  .eyebrow-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #ff5a32;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.7); }
  }

  .title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(38px, 6vw, 58px);
    line-height: 0.95;
    letter-spacing: -0.02em;
    color: #f0ece4;
  }

  .title em {
    font-style: italic;
    color: #ff5a32;
  }

  .subtitle {
    margin-top: 14px;
    font-size: 14px;
    color: rgba(232,228,220,0.5);
    font-weight: 300;
    line-height: 1.6;
    max-width: 380px;
  }

  /* FORM */
  .form { display: grid; gap: 0; padding-top: 40px; }

  .section {
    display: grid;
    gap: 28px;
    padding-bottom: 40px;
    margin-bottom: 40px;
    border-bottom: 1px solid rgba(232,228,220,0.08);
    position: relative;
  }

  .section-number {
    position: absolute;
    right: 0;
    top: 0;
    font-family: 'DM Serif Display', serif;
    font-size: 100px;
    line-height: 1;
    color: rgba(232,228,220,0.025);
    pointer-events: none;
    user-select: none;
    letter-spacing: -0.04em;
  }

  .section-title {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(232,228,220,0.35);
    margin-bottom: 4px;
  }

  .field-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }

  .field { display: flex; flex-direction: column; gap: 8px; }

  .field-label {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: rgba(232,228,220,0.55);
  }

  .field-input, .field-select, .field-textarea {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(232,228,220,0.18);
    border-radius: 0;
    color: #f0ece4;
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    font-weight: 400;
    padding: 14px 16px;
    outline: none;
    transition: border-color 200ms, background 200ms, box-shadow 200ms;
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
  }

  .field-input::placeholder, .field-textarea::placeholder {
    color: rgba(232,228,220,0.2);
    font-weight: 300;
  }

  .field-input:focus, .field-select:focus, .field-textarea:focus {
    border-color: #ff5a32;
    background: rgba(255,90,50,0.05);
    box-shadow: 0 0 0 1px #ff5a32;
  }

  .field-textarea { min-height: 120px; resize: vertical; line-height: 1.6; }

  .select-wrap { position: relative; }

  .select-wrap::after {
    content: '↓';
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: rgba(232,228,220,0.4);
    pointer-events: none;
  }

  .field-select option { background: #1a1a22; color: #f0ece4; }

  /* ROLE CARDS */
  .role-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
  }

  .role-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(232,228,220,0.18);
    padding: 20px 16px;
    cursor: pointer;
    transition: border-color 200ms, background 200ms, transform 150ms;
    position: relative;
  }

  .role-card:hover {
    border-color: rgba(255,90,50,0.5);
    background: rgba(255,90,50,0.06);
    transform: translateY(-2px);
  }

  .role-card.selected {
    border-color: #ff5a32;
    background: rgba(255,90,50,0.08);
  }

  .role-card.selected::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: #ff5a32;
  }

  .role-icon {
    font-size: 20px;
    margin-bottom: 8px;
    display: block;
    opacity: 0.7;
  }

  .role-name {
    font-size: 13px;
    font-weight: 500;
    color: #f0ece4;
  }

  /* TOPIC CARDS */
  .topic-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }

  @media (max-width: 500px) { .topic-grid { grid-template-columns: 1fr; } }

  .topic-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(232,228,220,0.1);
    padding: 16px 14px;
    cursor: pointer;
    transition: border-color 200ms, background 200ms;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    user-select: none;
  }

  .topic-card:hover {
    border-color: rgba(255,90,50,0.4);
    background: rgba(255,90,50,0.04);
  }

  .topic-card.selected {
    border-color: #ff5a32;
    background: rgba(255,90,50,0.08);
  }

  .topic-checkbox {
    width: 16px; height: 16px;
    border: 1.5px solid rgba(232,228,220,0.3);
    border-radius: 2px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-top: 2px;
    transition: border-color 200ms, background 200ms;
  }

  .topic-card.selected .topic-checkbox {
    border-color: #ff5a32;
    background: #ff5a32;
  }

  .topic-check { font-size: 10px; color: #0a0a0f; font-weight: 700; }

  .topic-content .topic-name { font-size: 14px; font-weight: 500; color: #f0ece4; }
  .topic-content .topic-desc { font-size: 12px; color: rgba(232,228,220,0.35); margin-top: 3px; }

  /* EXP TABS */
  .exp-tabs { display: flex; gap: 0; }

  .exp-tab {
    flex: 1;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(232,228,220,0.1);
    border-right: none;
    color: rgba(232,228,220,0.4);
    cursor: pointer;
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    padding: 12px 8px;
    text-align: center;
    transition: color 200ms, background 200ms, border-color 200ms;
  }

  .exp-tab:last-child { border-right: 1px solid rgba(232,228,220,0.1); }
  .exp-tab:hover { color: #f0ece4; border-color: rgba(232,228,220,0.2); }

  .exp-tab.selected {
    background: rgba(255,90,50,0.1);
    border-color: #ff5a32;
    color: #ff5a32;
  }

  /* SUBMIT */
  .submit-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    padding-top: 32px;
  }

  .submit-hint {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    color: rgba(232,228,220,0.25);
    text-transform: uppercase;
  }

  .submit-btn {
    background: #ff5a32;
    border: none;
    color: #0a0a0f;
    cursor: pointer;
    font-family: 'Outfit', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 16px 36px;
    transition: transform 150ms, background 200ms, opacity 200ms, box-shadow 200ms;
    min-width: 180px;
    border-radius: 2px;
  }

  .submit-btn:hover:not(:disabled) { background: #ff7151; transform: translateY(-1px); }
  .submit-btn:active:not(:disabled) { transform: translateY(1px); }
  .submit-btn:disabled { opacity: 0.6; cursor: default; }



  /* SAVED MEMBERS */
  .members-block { margin-top: 56px; display: grid; gap: 28px; }

  .members-header {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(232,228,220,0.08);
    position: relative;
  }

  .members-header::before {
    content: '';
    position: absolute;
    bottom: -1px; left: 0;
    width: 40px; height: 1px;
    background: #ff5a32;
  }

  .members-title {
    font-family: 'DM Serif Display', serif;
    font-size: 28px;
    color: #f0ece4;
    letter-spacing: -0.02em;
  }

  .members-count {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    color: #ff5a32;
    background: rgba(255,90,50,0.1);
    border: 1px solid rgba(255,90,50,0.3);
    padding: 4px 10px;
  }

  .empty-state {
    padding: 40px;
    text-align: center;
    border: 1px dashed rgba(232,228,220,0.12);
    color: rgba(232,228,220,0.2);
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .members-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }

  .member-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(232,228,220,0.14);
    padding: 20px;
    position: relative;
    animation: fadeIn 400ms ease;
    transition: border-color 200ms;
  }

  .member-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: rgba(255,90,50,0.3);
  }

  .member-card:hover { border-color: rgba(232,228,220,0.18); }

  .member-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 16px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(232,228,220,0.07);
  }

  .member-name { font-size: 16px; font-weight: 600; color: #f0ece4; }
  .member-email { font-size: 12px; color: rgba(232,228,220,0.4); margin-top: 3px; }

  .member-role-badge {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #ff5a32;
    background: rgba(255,90,50,0.1);
    border: 1px solid rgba(255,90,50,0.25);
    padding: 4px 8px;
    white-space: nowrap;
  }

  .member-row { display: flex; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
  .member-row-key {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(232,228,220,0.3);
  }
  .success-msg {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    color: #5fcf8a;
    animation: fadeIn 400ms ease;
  }

  @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
`;

export default function App() {
  const [form, setForm] = useState(createInitialForm);
  const [focusField, setFocusField] = useState("");
  const [entries, setEntries] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTopicToggle = (key) => {
    setForm((prev) => ({ ...prev, topics: { ...prev.topics, [key]: !prev.topics[key] } }));
  };

  const handleRoleSelect = (value) => {
    setForm((prev) => ({ ...prev, role: value }));
  };

  const handleExpSelect = (value) => {
    setForm((prev) => ({ ...prev, experience: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    const entry = {
      ...form,
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    };
    setTimeout(() => {
      setEntries((prev) => [entry, ...prev]);
      setIsSubmitting(false);
      setMessage("Saved successfully ✓");
      setForm(createInitialForm());
      setTimeout(() => setMessage(""), 4000);

      const roleLabel = ROLES.find((r) => r.value === entry.role)?.label || entry.role || "—";
      const topics = describeTopics(entry.topics);
      alert(
`✅ Preferences Saved

─────────────────────────
  IDENTITY
─────────────────────────
  Name        : ${entry.fullName || "—"}
  Email       : ${entry.email || "—"}
  Role        : ${roleLabel}

─────────────────────────
  WORKSHOP
─────────────────────────
  Experience  : ${entry.experience}
  Topics      : ${topics}${entry.goals ? `
  Goals       : ${entry.goals}` : ""}
─────────────────────────`
      );
    }, 700);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="app-root">
        <div className="card">

          {/* HEADER */}
          <header className="header">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Experiment 06 — Controlled Components
              </div>
              <h1 className="title">
                Frontend<br /><em>Intake</em> Form
              </h1>
              <p className="subtitle">
                Every field is fully controlled by React state. Changes propagate live.
              </p>
            </div>
          </header>

          {/* FORM */}
          <form className="form" onSubmit={handleSubmit}>

            {/* Section 1 — Identity */}
            <div className="section">
              <div className="section-number">01</div>
              <div className="section-title">Identity</div>
              <div className="field-grid">
                <div className="field">
                  <label className="field-label" htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    className="field-input"
                    value={form.fullName}
                    onChange={handleInput}
                    placeholder="Your full name"
                    onFocus={() => setFocusField("fullName")}
                    onBlur={() => setFocusField("")}
                    required
                  />
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="field-input"
                    value={form.email}
                    onChange={handleInput}
                    placeholder="you@example.com"
                    onFocus={() => setFocusField("email")}
                    onBlur={() => setFocusField("")}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Section 2 — Role */}
            <div className="section">
              <div className="section-number">02</div>
              <div className="section-title">Your Role</div>
              <div className="role-grid">
                {ROLES.map((r) => (
                  <div
                    key={r.value}
                    className={`role-card ${form.role === r.value ? "selected" : ""}`}
                    onClick={() => handleRoleSelect(r.value)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && handleRoleSelect(r.value)}
                  >
                    <span className="role-icon">{r.icon}</span>
                    <span className="role-name">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 — Experience */}
            <div className="section">
              <div className="section-number">03</div>
              <div className="section-title">Experience Level</div>
              <div className="exp-tabs">
                {EXPERIENCE.map((exp) => (
                  <div
                    key={exp}
                    className={`exp-tab ${form.experience === exp ? "selected" : ""}`}
                    onClick={() => handleExpSelect(exp)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && handleExpSelect(exp)}
                  >
                    {exp}
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4 — Topics */}
            <div className="section">
              <div className="section-number">04</div>
              <div className="section-title">Topics of Interest</div>
              <div className="topic-grid">
                {TOPICS.map((t) => (
                  <div
                    key={t.key}
                    className={`topic-card ${form.topics[t.key] ? "selected" : ""}`}
                    onClick={() => handleTopicToggle(t.key)}
                    role="checkbox"
                    aria-checked={form.topics[t.key]}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === " " && handleTopicToggle(t.key)}
                  >
                    <div className="topic-checkbox">
                      {form.topics[t.key] && <span className="topic-check">✓</span>}
                    </div>
                    <div className="topic-content">
                      <div className="topic-name">{t.label}</div>
                      <div className="topic-desc">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5 — Goals */}
            <div className="section" style={{ borderBottom: "none", marginBottom: 0 }}>
              <div className="section-number">05</div>
              <div className="section-title">Workshop Goals</div>
              <div className="field">
                <textarea
                  name="goals"
                  className="field-textarea"
                  value={form.goals}
                  onChange={handleInput}
                  placeholder="What do you want to build, learn, or unblock during this workshop?"
                  onFocus={() => setFocusField("goals")}
                  onBlur={() => setFocusField("")}
                />
              </div>
            </div>

            <div className="submit-row">
              <div className="submit-hint">
                {message
                  ? <span className="success-msg">{message}</span>
                  : isSubmitting ? "Saving entry..." : "All fields controlled by state"}
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Preferences →"}
              </button>
            </div>
          </form>

          {/* SAVED MEMBERS */}
          <div className="members-block">
            <div className="members-header">
              <h2 className="members-title">Saved Members</h2>
              <span className="members-count">{entries.length} entries</span>
            </div>

            {entries.length === 0 ? (
              <div className="empty-state">No entries yet — submit the form above</div>
            ) : (
              <div className="members-grid">
                {entries.map((entry) => (
                  <div key={entry.id} className="member-card">
                    <div className="member-top">
                      <div>
                        <div className="member-name">{entry.fullName || "Unnamed"}</div>
                        <div className="member-email">{entry.email || "—"}</div>
                      </div>
                      <span className="member-role-badge">{entry.role || "TBD"}</span>
                    </div>
                    <div className="member-row">
                      <span className="member-row-key">Experience</span>
                      <span className="member-row-val">{entry.experience}</span>
                    </div>
                    <div className="member-row">
                      <span className="member-row-key">Topics</span>
                      <span className="member-row-val">{describeTopics(entry.topics)}</span>
                    </div>
                    {entry.goals && (
                      <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(232,228,220,0.07)" }}>
                        <div className="member-row-key" style={{ marginBottom: 5 }}>Goals</div>
                        <div style={{ fontSize: 13, color: "rgba(232,228,220,0.5)", lineHeight: 1.5 }}>
                          {entry.goals}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}