import { supportOptions } from "../../data/askNayra.data";

export function SupportOptions() {
  return (
    <section className="support-options-section">
      <div className="support-options-header">
        <div>
          <span className="section-label">SUPPORT</span>

          <h2>You don't have to handle everything alone.</h2>
        </div>

        <p>
          Support can come from different places. Choose whatever feels
          comfortable for you.
        </p>
      </div>

      <div className="support-option-grid">
        {supportOptions.map((option) => (
          <article key={option.id} className="support-option-card">
            <div className="support-icon">{option.icon}</div>

            <h3>{option.title}</h3>

            <p>{option.description}</p>

            <button>{option.action} →</button>
          </article>
        ))}
      </div>
    </section>
  );
}