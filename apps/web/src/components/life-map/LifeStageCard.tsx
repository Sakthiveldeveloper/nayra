import type { LifeStage } from "../../types/nayra";

export function LifeStageCard({ stage, selected, onClick }: { stage: LifeStage; selected: boolean; onClick: () => void }) {
  return (
    <button className={`life-stage-card ${selected ? "selected" : ""}`} onClick={onClick}>
      <span className="stage-icon">{stage.icon}</span>
      <strong>{stage.title}</strong>
      <small>{stage.age}</small>
      <p>{stage.description}</p>
    </button>
  );
}
