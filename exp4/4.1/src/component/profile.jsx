import { useContext } from "react";
import { UserContext } from "../context/usercontext";

function Profile() {
  const { user, toggleUser } = useContext(UserContext);

  return (
    <div
      style={{
        backgroundColor: user.card,
        padding: "30px",
        borderRadius: "15px",
        width: "300px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        transition: "all 0.5s ease"
      }}
    >
      <h2>{user.name}</h2>
      <h3>{user.role}</h3>
      <p>Theme: {user.theme}</p>

      <button
        onClick={toggleUser}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          background: "#ff7e5f",
          color: "#fff",
          fontWeight: "bold"
        }}
      >
        Switch Theme
      </button>
    </div>
  );
}

export default Profile;