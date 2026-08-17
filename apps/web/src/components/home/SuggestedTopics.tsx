import { SUGGESTED_TOPICS } from "../../data/home.data";

export function SuggestedTopics() {
  return (
    <section className="suggested-topics">
      <div>
        <span className="suggested-topics__eyebrow">
          YOU MIGHT BE LOOKING FOR
        </span>

        <h2>Start with a topic.</h2>

        <p>
          You don't need to know exactly what to search for.
        </p>
      </div>

      <div className="suggested-topics__list">
        {SUGGESTED_TOPICS.map((topic) => (
          <button type="button" key={topic}>
            {topic}
            <span>→</span>
          </button>
        ))}
      </div>
    </section>
  );
}