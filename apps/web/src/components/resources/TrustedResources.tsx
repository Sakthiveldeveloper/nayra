import { trustedResources } from "../../data/resources.data";

export function TrustedResources() {
  return (
    <section className="resources-trusted">
      <div className="section-heading">
        <span className="eyebrow">
          TRUSTED INFORMATION
        </span>

        <h2>Information from reliable sources.</h2>

        <p>
          NAYRA helps you discover information. When a
          topic needs specialist knowledge, we point you
          toward appropriate trusted sources.
        </p>
      </div>

      <div className="trusted-resource-grid">
        {trustedResources.map((resource) => (
          <article
            className="trusted-resource-card"
            key={resource.id}
          >
            <div className="trusted-resource-card__icon">
              {resource.icon}
            </div>

            <span className="resource-category">
              {resource.type}
            </span>

            <h3>{resource.title}</h3>

            <p>{resource.description}</p>

            <div className="trusted-resource-meta">
              <span>📍 {resource.location}</span>
              <span>✓ Trusted source</span>
            </div>

            <button type="button">
              View source ↗
            </button>
          </article>
        ))}
      </div>

      <p className="trusted-resource-note">
        External resources open on their original
        organisation's website.
      </p>
    </section>
  );
}