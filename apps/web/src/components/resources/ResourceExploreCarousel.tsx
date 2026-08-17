import { exploreResources } from "../../data/resources.data";

export function ResourceExploreCarousel() {
  return (
    <section className="resources-section">
      <div className="section-heading section-heading--row">
        <div>
          <span className="eyebrow">
            EXPLORE SOMETHING NEW
          </span>

          <h2>You might find this useful too.</h2>
        </div>

        <div className="carousel-controls">
          <button type="button" aria-label="Previous">
            ←
          </button>

          <button type="button" aria-label="Next">
            →
          </button>
        </div>
      </div>

      <div className="resource-explore-carousel">
        {exploreResources.map((resource) => (
          <article
            className="resource-explore-card"
            key={resource.title}
          >
            <span className="resource-card-icon">
              {resource.icon}
            </span>

            <span className="resource-category">
              {resource.category}
            </span>

            <h3>{resource.title}</h3>

            <p>{resource.description}</p>

            <button type="button">
              Explore →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}