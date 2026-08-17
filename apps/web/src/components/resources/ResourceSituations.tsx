import {
    resourceSituations,
  } from "../../data/resources.data";
  
  type Props = {
    selectedStage: string;
    searchValue: string;
    onSelectSituation: (id: string) => void;
  };
  
  export function ResourceSituations({
    selectedStage,
    searchValue,
    onSelectSituation,
  }: Props) {
    const normalizedSearch =
      searchValue.trim().toLowerCase();
  
    const filtered = resourceSituations.filter((item) => {
      const matchesStage =
        !selectedStage ||
        item.lifeStages?.includes(
          selectedStage as never,
        );
  
      const matchesSearch =
        !normalizedSearch ||
        `${item.title} ${item.description} ${item.categoryLabel}`
          .toLowerCase()
          .includes(normalizedSearch);
  
      return matchesStage && matchesSearch;
    });
  
    return (
      <section className="resources-section" id="situations">
        <div className="section-heading section-heading--split">
          <div>
            <span className="eyebrow">EXPLORE</span>
  
            <h2>Start with what is happening.</h2>
          </div>
  
          <p>
            You don't need to know the official name
            for your situation. Choose what feels closest.
          </p>
        </div>
  
        {filtered.length > 0 ? (
          <div className="resource-situation-grid">
            {filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                className="resource-situation-card"
                onClick={() =>
                  onSelectSituation(item.id)
                }
              >
                <div className="resource-situation-card__top">
                  <span className="resource-card-icon">
                    {item.icon}
                  </span>
  
                  <span>→</span>
                </div>
  
                <span className="resource-category">
                  {item.categoryLabel}
                </span>
  
                <h3>{item.title}</h3>
  
                <p>{item.description}</p>
  
                <strong>Explore →</strong>
              </button>
            ))}
          </div>
        ) : (
          <div className="resource-empty">
            <span>🌱</span>
  
            <h3>
              We couldn't find an exact match.
            </h3>
  
            <p>
              Try another word, browse all situations,
              or tell NAYRA what is happening in your
              own words.
            </p>
          </div>
        )}
  
        <div className="resource-centered-action">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              document
                .getElementById("situations")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            View all situations →
          </button>
        </div>
      </section>
    );
  }