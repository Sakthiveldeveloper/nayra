import type {
    LifeMapSituation,
  } from "../../data/lifeMap.data";
  
  type Props = {
    situations: LifeMapSituation[];
    onSelect: (
      situation: LifeMapSituation,
    ) => void;
  };
  
  export function SituationGrid({
    situations,
    onSelect,
  }: Props) {
    return (
      <section className="life-situations">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">
              SITUATIONS
            </span>
  
            <h2>What are you dealing with?</h2>
  
            <p>
              These are starting points, not labels.
              You can always explore something else.
            </p>
          </div>
        </div>
  
        <div className="situation-grid">
          {situations.map((situation) => (
            <button
              key={situation.id}
              type="button"
              className="situation-card"
              onClick={() => onSelect(situation)}
            >
              <div className="situation-card__top">
                <span className="situation-card__icon">
                  {situation.icon}
                </span>
  
                <span className="situation-card__arrow">
                  →
                </span>
              </div>
  
              <span className="situation-card__category">
                {situation.category}
              </span>
  
              <h3>{situation.title}</h3>
  
              <p>{situation.shortDescription}</p>
  
              <div className="situation-card__tags">
                {situation.tags
                  .slice(0, 3)
                  .map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
              </div>
            </button>
          ))}
        </div>
      </section>
    );
  }