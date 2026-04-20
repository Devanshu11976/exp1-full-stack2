export default function MessageList({ messages, username }) {
  return (
    <div className="messages">
      {messages.map((msg, i) => {
        const isOwn = msg.sender === username;

        return (
          <div
            key={i}
            className={`message ${isOwn ? "own" : "other"}`}
          >
            <span className="sender">{msg.sender}</span>
            <p>{msg.content}</p>
          </div>
        );
      })}
    </div>
  );
}