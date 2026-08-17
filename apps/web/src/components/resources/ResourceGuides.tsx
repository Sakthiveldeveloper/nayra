import { resourceGuides } from "../../data/resources.data";

export function ResourceGuides() {
  return (
    <section className="resources-section">
      <div className="section-heading">
        <span className="eyebrow">QUICK GUIDES</span>

        <h2>Helpful starting points.</h2>

        <p>
          Short, practical guides for when you don't
          have the energy to search through everything.
        </p>
      </div>

      <div className="resource-guides-grid">
        {resourceGuides.map((guide) => (
          <article
            className="resource-guide-card"
            key={guide.id}
          >
            <span className="resource-card-icon">
              {guide.icon}
            </span>

            <div className="resource-guide-meta">
              <span>{guide.type}</span>
              <span>•</span>
              <span>{guide.duration}</span>
            </div>

            <h3>{guide.title}</h3>

            <p>{guide.description}</p>

            <button type="button">
              Read guide →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}