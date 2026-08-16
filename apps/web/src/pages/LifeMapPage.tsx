import { useState } from "react";
import { lifeAreas, lifeStages } from "../data/nayra.data";
import { SectionHeader } from "../components/common/SectionHeader";
import { LifeMapPreview } from "../components/life-map/LifeMapPreview";
import { SituationCard } from "../components/situation/SituationCard";

export function LifeMapPage({ onNavigate }: { onNavigate: (page: any) => void }) {
  const [selected, setSelected] = useState(lifeStages[2].id);
  const stage = lifeStages.find((s) => s.id === selected) ?? lifeStages[2];
  const situations = lifeAreas.slice(0, 6).flatMap((a, i) => a.situations.slice(0, 1).map((title) => ({ id: `${i}-${title}`, title, category: a.title, description: `Explore practical guidance and trusted next steps.`, icon: a.icon })));

  return <div>
    <SectionHeader eyebrow="LIFE MAP" title="Your life journey, with support at every step." description="NAYRA organizes guidance around real situations and life stages." />
    <LifeMapPreview stages={lifeStages} selected={selected} onSelect={setSelected} />
    <div className="stage-highlight"><span>{stage.icon}</span><div><strong>{stage.title} · {stage.age}</strong><p>{stage.description}</p></div></div>
    <SectionHeader eyebrow="SITUATIONS" title="Explore common situations" description="These are starting points, not labels. You can always search for something else." />
    <div className="situation-grid">{situations.map((s) => <SituationCard key={s.id} situation={s} onOpen={() => onNavigate("ask")} />)}</div>
  </div>;
}
