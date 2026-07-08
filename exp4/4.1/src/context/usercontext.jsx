import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const users = [
    {
      name: "Devanshu Sharma",
      role: "Frontend Developer",
      theme: "light",
      bg: "linear-gradient(135deg, #fdfbfb, #ebedee)",
      text: "#222",
      card: "#ffffff"
    },
    {
      name: "Devanshu Sharma",
      role: "Backend Developer",
      theme: "dark",
      bg: "linear-gradient(135deg, #141e30, #243b55)",
      text: "#ffffff",
      card: "#1f2a40"
    }
  ];

  const [index, setIndex] = useState(0);

  const toggleUser = () => {
    setIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <UserContext.Provider value={{ user: users[index], toggleUser }}>
      {children}
    </UserContext.Provider>
  );
};