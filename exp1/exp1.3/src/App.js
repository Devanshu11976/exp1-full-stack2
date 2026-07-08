import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        textAlign: "center",
        paddingTop: "100px",
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
      }}
    >
      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
