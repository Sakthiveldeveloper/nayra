import { recommendedResources } from "../../data/askNayra.data";

export function ResourceRecommendations() {
  return (
    <section className="recommendation-section">
      <div className="split-heading">
        <div>
          <span className="section-label">BASED ON YOUR JOURNEY</span>

          <h2>Information that may help.</h2>
        </div>

        <p>
          Explore trusted information without needing to explain your whole
          situation.
        </p>
      </div>

      <div className="resource-card-grid">
        {recommendedResources.map((resource) => (
          <article key={resource.id} className="recommendation-card">
            <div className="recommendation-icon">
              {resource.icon}
            </div>

            <span className="recommendation-category">
              {resource.category}
            </span>

            <h3>{resource.title}</h3>

            <p>{resource.description}</p>

            <button>Explore →</button>
          </article>
        ))}
      </div>
    </section>
  );
}