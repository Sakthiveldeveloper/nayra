import type { LifeStage } from "../../types/nayra";
import { LifeStageCard } from "./LifeStageCard";

export function LifeMapPreview({ stages, selected, onSelect }: { stages: LifeStage[]; selected: string; onSelect: (id: string) => void }) {
  return (
    <div className="life-map">
      <div className="life-line" />
      <div className="stage-grid">
        {stages.map((stage) => (
          <LifeStageCard key={stage.id} stage={stage} selected={stage.id === selected} onClick={() => onSelect(stage.id)} />
        ))}
      </div>
    </div>
  );
}
