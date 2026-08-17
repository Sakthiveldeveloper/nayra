import type { LifeMapStage } from "../../data/lifeMap.data";

type Props = {
  stages: LifeMapStage[];
  selectedStageId: string;
  onSelect: (stage: LifeMapStage) => void;
};

export function LifeStageCarousel({
  stages,
  selectedStageId,
  onSelect,
}: Props) {
  return (
    <section className="life-stage-section">
      <div className="section-heading">
        <div>
          <span className="section-eyebrow">
            YOUR JOURNEY
          </span>

          <h2>Where are you right now?</h2>

          <p>
            Choose a stage to explore the situations,
            questions and support relevant to it.
          </p>
        </div>
      </div>

      <div className="life-stage-carousel">
        {stages.map((stage) => {
          const selected =
            stage.id === selectedStageId;

          return (
            <button
              key={stage.id}
              type="button"
              className={`life-stage-card ${
                selected
                  ? "life-stage-card--selected"
                  : ""
              }`}
              onClick={() => onSelect(stage)}
            >
              <div className="life-stage-card__icon">
                {stage.icon}
              </div>

              <div className="life-stage-card__arrow">
                →
              </div>

              <h3>{stage.title}</h3>

              <strong>{stage.ageRange}</strong>

              <p>{stage.shortDescription}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}