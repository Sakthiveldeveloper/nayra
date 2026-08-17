import { LIFE_AREAS } from "../../data/home.data";

export function LifeAreaGrid() {
  return (
    <section
      className="home-section"
      data-tour="home"
    >
      <div className="home-section__heading">
        <span>EXPLORE</span>

        <h2>What are you dealing with?</h2>

        <p>
          Start with a life area. You can change direction
          at any time.
        </p>
      </div>

      <div className="life-area-grid">
        {LIFE_AREAS.map((area) => (
          <button
            type="button"
            key={area.id}
            className="life-area-card"
          >
            <div className="life-area-card__top">
              <span className="life-area-card__icon">
                {area.icon}
              </span>

              <span className="life-area-card__arrow">
                →
              </span>
            </div>

            <h3>{area.title}</h3>

            <p>{area.description}</p>

            <div className="life-area-card__tags">
              {area.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}