import type { LifeMapStage } from "../../data/lifeMap.data";


type Props = {
  stage: LifeMapStage;
};

export function LifeStageOverview({
  stage,
}: Props) {
  return (
    <section className="life-stage-overview">
      <div className="life-stage-overview__icon">
        {stage.icon}
      </div>

      <div>
        <span className="section-eyebrow">
          CURRENT STAGE
        </span>

        <h2>
          {stage.title} · {stage.ageRange}
        </h2>

        <p>{stage.description}</p>

        <div className="life-stage-themes">
          {stage.themes.map((theme) => (
            <span key={theme}>{theme}</span>
          ))}
        </div>
      </div>
    </section>
  );
}