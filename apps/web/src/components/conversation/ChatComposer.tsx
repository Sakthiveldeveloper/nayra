import { useState } from "react";

export function ChatComposer({ onSend }: { onSend: (message: string) => void }) {
  const [value, setValue] = useState("");
  const send = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue("");
  };
  return (
    <div className="composer">
      <input value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Tell NAYRA what you're dealing with..." />
      <button onClick={send}>→</button>
    </div>
  );
}
