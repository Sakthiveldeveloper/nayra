export function ChatMessage({ role, content }: { role: "user" | "assistant"; content: string }) {
    return <div className={`chat-message ${role}`}><div className="message-avatar">{role === "assistant" ? "✿" : "You"}</div><div><small>{role === "assistant" ? "NAYRA" : "You"}</small><p>{content}</p></div></div>;
  }
  