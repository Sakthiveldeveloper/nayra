import type { LifeMapStage } from "../../data/lifeMap.data";

type Props = {
  stage: LifeMapStage;
  onNavigate?: (
    page: string,
  ) => void;
};

export function SupportSection({
  stage,
  onNavigate,
}: Props) {
  return (
    <section className="life-map-support">
      <div className="life-map-support__main">
        <span className="section-eyebrow">
          SUPPORT
        </span>

        <h2>
          You don't have to figure it
          all out alone.
        </h2>

        <p>
          {stage.supportMessage}
        </p>

        <div className="support-actions">
          <button
            type="button"
            onClick={() =>
              onNavigate?.("help")
            }
          >
            Get support
          </button>

          <button
            type="button"
            className="secondary"
            onClick={() =>
              onNavigate?.("resources")
            }
          >
            Explore resources
          </button>
        </div>
      </div>

      <div className="life-map-support__reflection">
        <span>REFLECT</span>

        <h3>
          A few questions to think about
        </h3>

        <ul>
          {stage.reflectionQuestions
            .slice(0, 3)
            .map((question) => (
              <li key={question}>
                {question}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}