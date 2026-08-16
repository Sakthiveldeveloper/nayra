import type { LifeArea } from "../../types/nayra";
import { Tag } from "../common/Tag";

export function LifeAreaCard({ area, onOpen }: { area: LifeArea; onOpen: () => void }) {
  return (
    <button className={`life-area-card ${area.tone}`} onClick={onOpen}>
      <div className="card-icon">{area.icon}</div>
      <div className="card-copy">
        <h3>{area.title}</h3>
        <p>{area.description}</p>
        <div className="tag-row">{area.situations.slice(0, 2).map((s) => <Tag key={s}>{s}</Tag>)}</div>
      </div>
      <span className="card-arrow">→</span>
    </button>
  );
}
