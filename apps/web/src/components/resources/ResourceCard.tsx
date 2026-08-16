import type { Resource } from "../../types/nayra";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="resource-card">
      <div className="resource-top"><span className={`resource-type ${resource.type}`}>{resource.type}</span><span>↗</span></div>
      <span className="eyebrow">{resource.category}</span>
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
      <button className="text-button">Explore →</button>
    </article>
  );
}
