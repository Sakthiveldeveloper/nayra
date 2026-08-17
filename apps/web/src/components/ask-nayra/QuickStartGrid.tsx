import { quickStarts } from "../../data/askNayra.data";

type Props = {
  onSelect: (title: string) => void;
};

export function QuickStartGrid({ onSelect }: Props) {
  return (
    <section className="quick-start-section">
      <div className="split-heading">
        <div>
          <span className="section-label">START HERE</span>

          <h2>Not sure what to say?</h2>
        </div>

        <p>
          Choose something close to what you're experiencing. You can change
          direction at any time.
        </p>
      </div>

      <div className="quick-start-grid">
        {quickStarts.map((item) => (
          <button
            key={item.id}
            className="quick-start-card"
            onClick={() => onSelect(item.title)}
          >
            <span className="card-icon">{item.icon}</span>

            <span className="card-arrow">→</span>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <span className="card-link">
              Start here →
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}