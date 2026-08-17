import type { PageKey } from "../../types/nayra";

type Props = {
  onNavigate: (page: PageKey) => void;
};

const safetyItems = [
  {
    icon: "☎",
    title: "I am in immediate danger",
    description:
      "Prioritise your immediate safety and reach appropriate emergency support.",
  },
  {
    icon: "🛡",
    title: "I don't feel safe",
    description:
      "Create a practical safety plan and identify trusted support.",
  },
  {
    icon: "✦",
    title: "Something happened to me",
    description:
      "Understand possible next steps without forcing you to make a decision.",
  },
];

export function SafetySection({ onNavigate }: Props) {
  return (
    <section className="safety-section">
      <div className="safety-section__content">
        <span>SAFETY</span>

        <h2>Need support right now?</h2>

        <p>
          You don't need to know the perfect words.
          Start with what is happening.
        </p>

        <div className="safety-list">
          {safetyItems.map((item) => (
            <button
              type="button"
              className="safety-item"
              key={item.title}
              onClick={() => onNavigate("help")}
            >
              <span className="safety-item__icon">
                {item.icon}
              </span>

              <span className="safety-item__content">
                <strong>{item.title}</strong>
                <small>{item.description}</small>
              </span>

              <span className="safety-item__arrow">
                →
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="ask-card">
        <span className="ask-card__icon">✿</span>

        <span className="ask-card__eyebrow">
          ASK NAYRA
        </span>

        <h3>Start with your situation.</h3>

        <p>
          "My manager keeps making comments and
          I don't know what to do."
        </p>

        <button
          type="button"
          onClick={() => onNavigate("ask")}
        >
          Talk to NAYRA →
        </button>
      </div>
    </section>
  );
}