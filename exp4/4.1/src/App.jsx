import { useContext } from "react";
import { UserContext } from "./context/usercontext";
import Profile from "./component/profile";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: user.bg,
        color: user.text,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.5s ease"
      }}
    >
      <Profile />
    </div>
  );
}

export default App;