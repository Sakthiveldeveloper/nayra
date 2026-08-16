const steps = ["Understand", "What can I do?", "Know my rights", "Who can help?", "My next step"];

export function SituationNavigator({ active = 0, onSelect }: { active?: number; onSelect?: (index: number) => void }) {
  return (
    <div className="situation-nav">
      {steps.map((step, i) => <button key={step} className={i === active ? "active" : ""} onClick={() => onSelect?.(i)}><span>{i + 1}</span>{step}</button>)}
    </div>
  );
}
