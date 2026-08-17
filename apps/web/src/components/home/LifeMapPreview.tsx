import { LIFE_STAGES } from "../../data/home.data";

type Props = {
  onNavigate: (page: any) => void;
};

export function LifeMapPreview({ onNavigate }: Props) {
  return (
    <section className="home-section">
      <div className="home-section__heading home-section__heading--row">
        <div>
          <span>YOUR JOURNEY</span>

          <h2>Life Map</h2>

          <p>
            Explore support by stage of life instead of
            trying to find the right words.
          </p>
        </div>

        <button
          type="button"
          className="section-link"
          onClick={() => onNavigate("life-map")}
        >
          Open full map →
        </button>
      </div>

      <div className="life-map-preview">
        {LIFE_STAGES.map((stage, index) => (
          <button
            type="button"
            className={`life-stage ${
              index === 2 ? "life-stage--active" : ""
            }`}
            key={stage.title}
            onClick={() => onNavigate("life-map")}
          >
            <span className="life-stage__icon">
              {stage.icon}
            </span>

            <strong>{stage.title}</strong>

            <small>{stage.age}</small>

            <p>{stage.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
}