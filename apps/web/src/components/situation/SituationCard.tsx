export type Situation = { id: string; title: string; category: string; description: string; icon?: string };

export function SituationCard({ situation, onOpen }: { situation: Situation; onOpen: () => void }) {
  return (
    <button className="situation-card" onClick={onOpen}>
      <span className="card-icon">{situation.icon ?? "✦"}</span>
      <span><small>{situation.category}</small><strong>{situation.title}</strong><p>{situation.description}</p></span>
      <span>→</span>
    </button>
  );
}
