import type { HelpOption } from "../../types/nayra";

export function QuickHelpCard({ option, onOpen }: { option: HelpOption; onOpen: () => void }) {
  return (
    <button className={`quick-help ${option.urgent ? "urgent" : ""}`} onClick={onOpen}>
      <span className="quick-icon">{option.icon}</span>
      <span><strong>{option.title}</strong><small>{option.description}</small></span>
      <span>→</span>
    </button>
  );
}
