import { resourceLifeStages } from "../../data/resources.data";

type Props = {
  selectedStage: string;
  onSelect: (stage: string) => void;
};

export function ResourceLifeStages({
  selectedStage,
  onSelect,
}: Props) {
  return (
    <section className="resources-section">
      <div className="section-heading">
        <span className="eyebrow">YOUR JOURNEY</span>

        <h2>Resources that fit where you are.</h2>

        <p>
          Choose a life stage to discover information
          that may be more relevant to you.
        </p>
      </div>

      <div className="resource-stage-carousel">
        {resourceLifeStages.map((stage) => (
          <button
            key={stage.id}
            type="button"
            className={
              selectedStage === stage.id
                ? "resource-stage-card active"
                : "resource-stage-card"
            }
            onClick={() => onSelect(stage.id)}
          >
            <span className="resource-stage-icon">
              {stage.icon}
            </span>

            <span className="resource-stage-arrow">
              →
            </span>

            <h3>{stage.title}</h3>

            <strong>{stage.age}</strong>

            <p>{stage.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
}