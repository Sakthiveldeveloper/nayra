import { useState } from "react";

type Message = {
  id: number;
  sender: "user" | "nayra";
  text: string;
};

type Props = {
  initialMessage?: string;
};

export function ConversationBox({ initialMessage }: Props) {
  const [message, setMessage] = useState("");
  const [started, setStarted] = useState(Boolean(initialMessage));

  const [messages, setMessages] = useState<Message[]>(
    initialMessage
      ? [
          {
            id: 1,
            sender: "user",
            text: initialMessage,
          },
          {
            id: 2,
            sender: "nayra",
            text:
              "I'm here with you. We can take this one step at a time. You don't need to figure everything out right now.",
          },
        ]
      : [],
  );

  const handleSend = () => {
    const trimmed = message.trim();

    if (!trimmed) return;

    setStarted(true);

    setMessages((previous) => [
      ...previous,
      {
        id: Date.now(),
        sender: "user",
        text: trimmed,
      },
      {
        id: Date.now() + 1,
        sender: "nayra",
        text:
          "Thank you for sharing that. We can look at what happened, what options you may have, and what kind of support could help.",
      },
    ]);

    setMessage("");
  };

  return (
    <section className="conversation-section" id="conversation">
      <div className="conversation-heading">
        <div>
          <span className="section-label">YOUR SPACE</span>

          <h2>Tell me what's happening.</h2>

          <p>
            You can start with one sentence. You don't need to know exactly
            what kind of help you need.
          </p>
        </div>

        <div className="conversation-status">
          <span className="status-dot" />
          NAYRA is here
        </div>
      </div>

      <div className="conversation-panel">
        {!started && (
          <div className="conversation-empty">
            <div className="conversation-icon">✦</div>

            <h3>What would you like to talk about?</h3>

            <p>
              Ask a question, describe something that happened, or simply tell
              me how you're feeling about a situation.
            </p>
          </div>
        )}

        {started && (
          <div className="messages">
            {messages.map((item) => (
              <div
                key={item.id}
                className={`message-row ${item.sender}`}
              >
                <div className="message-avatar">
                  {item.sender === "nayra" ? "✦" : "You"}
                </div>

                <div className="message-bubble">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="conversation-input-area">
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell me what's happening..."
            rows={3}
          />

          <div className="input-actions">
            <button className="attach-button">
              + Add context
            </button>

            <div className="input-right-actions">
              <button className="icon-button" aria-label="Voice input">
                🎤
              </button>

              <button
                className="send-button"
                onClick={handleSend}
                disabled={!message.trim()}
              >
                Send →
              </button>
            </div>
          </div>
        </div>

        <p className="input-helper">
          You choose what you share. You can stop or change direction at any
          time.
        </p>
      </div>
    </section>
  );
}