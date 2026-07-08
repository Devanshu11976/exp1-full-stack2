import { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import "./Chat.css";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(null);
  const [tempName, setTempName] = useState("");

  const clientRef = useRef(null);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");

    const client = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
    });

    client.onConnect = () => {
      console.log("✅ Connected");

      client.subscribe("/topic/messages", (msg) => {
        const data = JSON.parse(msg.body);
        setMessages((prev) => [...prev, data]);
      });
    };

    client.activate();
    clientRef.current = client;

    return () => client.deactivate();
  }, []);

  const sendMessage = (input) => {
    if (!input.trim()) return;

    if (!clientRef.current || !clientRef.current.connected) {
      console.log("Not connected");
      return;
    }

    clientRef.current.publish({
      destination: "/app/chat",
      body: JSON.stringify({
        sender: username,
        content: input,
      }),
    });
  };

  const handleJoin = () => {
    if (!tempName.trim()) return;
    setUsername(tempName);
  };

  // 🔥 BLOCK CHAT UNTIL NAME ENTERED
  if (!username) {
    return (
      <div className="chat-container">
        <div className="username-box">
          <h2>Enter Username</h2>
          <input
            placeholder="Your name..."
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
          <button onClick={handleJoin}>Join Chat</button>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <div className="chat-box">
        <MessageList messages={messages} username={username} />
        <MessageInput onSend={sendMessage} />
      </div>
    </div>
  );
}