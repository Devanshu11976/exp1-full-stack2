import React, { useState } from "react";

const STATES = ["Gujarat", "Delhi", "Maharashtra", "Kolkata"];
const SKILLS = ["Java", "Python", "React", "Node.js", "Figma"];
const GENDERS = ["Male", "Female", "Non-binary", "Prefer not to say"];

const createEmpty = () => ({
  firstName: "",
  lastName: "",
  dob: "",
  gender: "",
  address: "",
  state: "",
  skills: [],
});

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Josefin+Sans:wght@300;400;600&display=swap');

  :root {
    --cream: #faf6ef;
    --parchment: #f0e8d8;
    --gold: #c9a84c;
    --gold-light: #e8c96b;
    --gold-dark: #9a7230;
    --ink: #1c1410;
    --ink-mid: #4a3728;
    --ink-soft: #7a6555;
    --border: rgba(201,168,76,0.3);
    --border-strong: rgba(201,168,76,0.6);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .reg-root {
    min-height: 100vh;
    background:
      radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.12), transparent 60%),
      var(--cream);
    display: grid;
    place-items: center;
    padding: 48px 20px 80px;
    font-family: 'Josefin Sans', sans-serif;
  }

  /* Grain overlay */
  .reg-root::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
    opacity: 0.5;
  }

  .reg-card {
    position: relative;
    z-index: 1;
    width: min(600px, 100%);
    background: #fffdf8;
    border: 1px solid var(--border);
    box-shadow:
      0 0 0 6px rgba(201,168,76,0.06),
      0 32px 80px rgba(28,20,16,0.12),
      inset 0 1px 0 rgba(255,255,255,0.8);
    padding: 52px 48px 44px;
    animation: riseIn 600ms cubic-bezier(0.16,1,0.3,1) both;
  }

  @media (max-width: 520px) { .reg-card { padding: 36px 24px 32px; } }

  @keyframes riseIn {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: none; }
  }

  /* ORNAMENT */
  .ornament {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 28px;
  }

  .ornament-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
  }

  .ornament-diamond {
    width: 8px; height: 8px;
    background: var(--gold);
    transform: rotate(45deg);
    flex-shrink: 0;
  }

  .ornament-diamond-sm {
    width: 4px; height: 4px;
    background: var(--gold-light);
    transform: rotate(45deg);
    flex-shrink: 0;
  }

  /* HEADER */
  .reg-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .reg-kicker {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--gold-dark);
    margin-bottom: 10px;
  }

  .reg-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 42px;
    font-weight: 300;
    letter-spacing: 0.04em;
    color: var(--ink);
    line-height: 1.1;
  }

  .reg-title em {
    font-style: italic;
    color: var(--gold-dark);
  }

  .reg-subtitle {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.12em;
    color: var(--ink-soft);
    text-transform: uppercase;
  }

  /* FORM SECTIONS */
  .reg-form { display: grid; gap: 0; }

  .form-section {
    display: grid;
    gap: 20px;
    padding-bottom: 28px;
    margin-bottom: 28px;
    border-bottom: 1px solid rgba(201,168,76,0.15);
  }

  .form-section:last-of-type { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

  .section-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--gold);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: 460px) { .field-row { grid-template-columns: 1fr; } }

  /* FLOATING LABEL FIELDS */
  .field {
    display: flex;
    flex-direction: column;
    gap: 0;
    position: relative;
  }

  .field-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-dark);
    margin-bottom: 6px;
  }

  .field-input, .field-select, .field-textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--border-strong);
    border-radius: 0;
    color: var(--ink);
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-weight: 400;
    padding: 8px 0 10px;
    outline: none;
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
    transition: border-color 200ms;
    background-color: transparent;
  }

  .field-input::placeholder { color: rgba(122,101,85,0.3); }
  .field-textarea::placeholder { color: rgba(122,101,85,0.3); }

  .field-input:focus, .field-select:focus, .field-textarea:focus {
    border-bottom-color: var(--gold);
    border-bottom-width: 2px;
  }

  .field-textarea { min-height: 80px; resize: vertical; line-height: 1.5; }

  .field-underline {
    height: 1px;
    background: var(--gold);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 220ms ease;
    margin-top: -1px;
  }

  .field-input:focus ~ .field-underline,
  .field-select:focus ~ .field-underline,
  .field-textarea:focus ~ .field-underline {
    transform: scaleX(1);
  }

  .field-select { cursor: pointer; color: var(--ink); }
  .field-select option { font-family: 'Josefin Sans', sans-serif; font-size: 14px; background: #fffdf8; color: var(--ink); }
  .field-select:invalid, .field-select option[value=""] { color: rgba(122,101,85,0.4); }

  /* SELECT ARROW */
  .select-wrap { position: relative; }
  .select-arrow {
    position: absolute;
    right: 4px;
    bottom: 14px;
    width: 8px; height: 8px;
    border-right: 1.5px solid var(--gold);
    border-bottom: 1.5px solid var(--gold);
    transform: rotate(45deg);
    pointer-events: none;
  }

  /* GENDER CHIPS */
  .chip-group { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 2px; }

  .chip {
    padding: 6px 16px;
    border: 1px solid var(--border-strong);
    background: transparent;
    color: var(--ink-soft);
    font-family: 'Josefin Sans', sans-serif;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 180ms;
    user-select: none;
  }

  .chip:hover { border-color: var(--gold); color: var(--ink); }

  .chip.active {
    background: var(--gold);
    border-color: var(--gold);
    color: #1c1410;
    font-weight: 600;
  }

  /* SKILL TAGS */
  .skill-group { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 2px; }

  .skill-tag {
    padding: 5px 14px;
    border: 1px solid var(--border-strong);
    background: transparent;
    color: var(--ink-soft);
    font-family: 'Josefin Sans', sans-serif;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 180ms;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .skill-tag:hover { border-color: var(--gold); color: var(--ink); }

  .skill-tag.active {
    background: rgba(201,168,76,0.12);
    border-color: var(--gold);
    color: var(--gold-dark);
  }

  .skill-check { font-size: 9px; opacity: 0; transition: opacity 150ms; }
  .skill-tag.active .skill-check { opacity: 1; }



  /* BUTTONS */
  .btn-row {
    display: flex;
    gap: 12px;
    margin-top: 36px;
    align-items: center;
    justify-content: flex-end;
  }

  .btn-cancel {
    background: transparent;
    border: 1px solid var(--border-strong);
    color: var(--ink-soft);
    cursor: pointer;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 12px 24px;
    transition: border-color 180ms, color 180ms, transform 150ms;
  }

  .btn-cancel:hover { border-color: var(--gold-dark); color: var(--ink); transform: translateY(-1px); }

  .btn-submit {
    background: var(--ink);
    border: 1px solid var(--ink);
    color: var(--gold-light);
    cursor: pointer;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    padding: 13px 32px;
    position: relative;
    overflow: hidden;
    transition: background 180ms, transform 150ms, box-shadow 180ms;
  }

  .btn-submit::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(201,168,76,0.15), transparent);
    opacity: 0;
    transition: opacity 200ms;
  }

  .btn-submit:hover { background: #2e221a; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(28,20,16,0.2); }
  .btn-submit:hover::before { opacity: 1; }
  .btn-submit:active { transform: translateY(0); }
  .btn-submit:disabled { opacity: 0.5; cursor: default; transform: none; }


`;

export default function Form() {
  const [formData, setFormData] = useState(createEmpty);
  const [submitting, setSubmitting] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleGender = (val) => {
    setFormData((p) => ({ ...p, gender: val }));
  };

  const handleSkill = (val) => {
    setFormData((p) => ({
      ...p,
      skills: p.skills.includes(val)
        ? p.skills.filter((s) => s !== val)
        : [...p.skills, val],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.gender) { alert("Please select a gender."); return; }
    setSubmitting(true);
    setTimeout(() => {
      const skills = formData.skills.length > 0 ? formData.skills.join(", ") : "None";
      alert(
`✦ Registration Successful ✦

─────────────────────────
  PERSONAL DETAILS
─────────────────────────
  Name      : ${formData.firstName} ${formData.lastName}
  DOB       : ${formData.dob}
  Gender    : ${formData.gender}

─────────────────────────
  LOCATION
─────────────────────────
  Address   : ${formData.address}
  State     : ${formData.state}

─────────────────────────
  SKILLS
─────────────────────────
  ${skills}
─────────────────────────`
      );
      setSubmitting(false);
      setFormData(createEmpty());
    }, 400);
  };

  const handleCancel = () => setFormData(createEmpty());

  return (
    <>
      <style>{css}</style>
      <div className="reg-root">
        <div className="reg-card">

          {/* Top Ornament */}
          <div className="ornament">
            <div className="ornament-line" />
            <div className="ornament-diamond-sm" />
            <div className="ornament-diamond" />
            <div className="ornament-diamond-sm" />
            <div className="ornament-line" />
          </div>

          {/* Header */}
          <header className="reg-header">
            <div className="reg-kicker">Official Record</div>
            <h1 className="reg-title">User <em>Registration</em></h1>
            <p className="reg-subtitle">Complete all fields to proceed</p>
          </header>

          <div className="ornament" style={{ marginBottom: 36 }}>
            <div className="ornament-line" />
            <div className="ornament-diamond-sm" />
            <div className="ornament-line" />
          </div>

          <form className="reg-form" onSubmit={handleSubmit}>

            {/* Personal Info */}
            <div className="form-section">
              <div className="section-label">Personal Information</div>
              <div className="field-row">
                <div className="field">
                  <div className="field-label">First Name</div>
                  <input
                    className="field-input"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Given name"
                    required
                  />
                </div>
                <div className="field">
                  <div className="field-label">Last Name</div>
                  <input
                    className="field-input"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Family name"
                    required
                  />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <div className="field-label">Date of Birth</div>
                  <input
                    className="field-input"
                    type="date"
                    name="dob"
                    max={today}
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <div className="field-label">Gender</div>
                  <div className="chip-group">
                    {GENDERS.map((g) => (
                      <div
                        key={g}
                        className={`chip ${formData.gender === g ? "active" : ""}`}
                        onClick={() => handleGender(g)}
                      >
                        {g}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="form-section">
              <div className="section-label">Location</div>

              <div className="field">
                <div className="field-label">Address</div>
                <textarea
                  className="field-textarea"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street, area, city…"
                  required
                />
              </div>

              <div className="field" style={{ maxWidth: 260 }}>
                <div className="field-label">State</div>
                <div className="select-wrap">
                  <select
                    className="field-select"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select state</option>
                    {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <div className="select-arrow" />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="form-section">
              <div className="section-label">Skills & Expertise</div>
              <div className="skill-group">
                {SKILLS.map((sk) => (
                  <div
                    key={sk}
                    className={`skill-tag ${formData.skills.includes(sk) ? "active" : ""}`}
                    onClick={() => handleSkill(sk)}
                  >
                    <span className="skill-check">✦</span>
                    {sk}
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="btn-row">
              <button type="button" className="btn-cancel" onClick={handleCancel}>
                Clear Form
              </button>
              <button type="submit" className="btn-submit" disabled={submitting}>
                {submitting ? "Registering…" : "Register  →"}
              </button>
            </div>
          </form>

          {/* Bottom Ornament */}
          <div className="ornament" style={{ marginTop: 36 }}>
            <div className="ornament-line" />
            <div className="ornament-diamond-sm" />
            <div className="ornament-diamond" />
            <div className="ornament-diamond-sm" />
            <div className="ornament-line" />
          </div>
        </div>
      </div>

    </>
  );
}