# Experiment 6.2 – Client-Side Form Validation (Email + Password)

## Aim

Validate form inputs on the client before submission using React.

## Theory

Client-side validation ensures correctness of user data and provides immediate feedback without server interaction.

## Requirements

- Fields: Email, Password.
- Email must contain `@` and end with `.com`, `.in`, or any country TLD.
- Password rules:
  1. Starts with a capital letter
  2. Contains at least one number
  3. Contains at least one special character
  4. Minimum 5 characters

## Procedure

1. Create form inputs.
2. Define validation conditions.
3. Display error messages.
4. Allow submission only for valid data.

## How to Run

```bash
npm install
npm run dev -- --host --port 5174
```

Then open http://localhost:5174.

## Implementation Highlights

- Controlled inputs with `useState`.
- Validation helpers for email and password with inline error messages.
- Submit disabled until both fields pass validation.
- Success banner appears briefly on valid submission.
- Centered, Poppins-styled UI with interactive focus/hover cues.

## Files

- `src/App.jsx` – Form, validation logic, UI.
- `src/App.css` – Layout, centering, gradients, form styling.
- `src/index.css` – Global font and base styles.
- `index.html`, `package.json`, `vite.config.js` – Vite/React setup.

## Screenshots

- Add captures in `src/screenshots/` and reference them here, e.g. `![Form](src/screenshots/form.png)`.
