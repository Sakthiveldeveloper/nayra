import { useState } from "react";
import { ChatComposer } from "./ChatComposer";
import { ChatMessage } from "./ChatMessage";

export function AskNayraPanel() {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    { role: "assistant", content: "Hi, I'm NAYRA. You can start with a situation, a question, or simply tell me what feels difficult right now." },
  ]);

  const send = (content: string) => {
    setMessages((current) => [
      ...current,
      { role: "user", content },
      { role: "assistant", content: "I understand. In the next step we'll connect this conversation to the NAYRA API so I can guide you through the relevant situation, options and trusted resources." },
    ]);
  };

  return (
    <section className="ask-panel">
      <div className="ask-head"><div><span className="eyebrow">AI GUIDANCE · V0.1</span><h2>Ask NAYRA</h2></div><span className="privacy-pill">🔒 Private by design</span></div>
      <div className="chat-body">{messages.map((m, i) => <ChatMessage key={i} role={m.role} content={m.content} />)}</div>
      <div className="suggestion-row">
        {["I need clarity", "I don't feel safe", "Know my rights", "Find support"].map((s) => <button key={s} onClick={() => send(s)}>{s}</button>)}
      </div>
      <ChatComposer onSend={send} />
      <small className="disclaimer">NAYRA provides guidance and navigation. It does not replace emergency, medical, legal or professional services.</small>
    </section>
  );
}
