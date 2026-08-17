type Props = {
    stage?: string;
    situation?: string;
    onRemove?: () => void;
  };
  
  export function ContextCard({
    stage = "Working Life",
    situation = "Workplace harassment",
    onRemove,
  }: Props) {
    return (
      <section className="context-card">
        <div className="context-icon">🧩</div>
  
        <div className="context-content">
          <span className="section-label">CONTEXT</span>
  
          <h3>You're exploring something from your journey.</h3>
  
          <p>
            NAYRA can use this context to make suggestions more relevant. You
            don't need to explain everything again.
          </p>
  
          <div className="context-tags">
            <span>{stage}</span>
            <span>{situation}</span>
          </div>
        </div>
  
        {onRemove && (
          <button className="context-remove" onClick={onRemove}>
            Remove context
          </button>
        )}
      </section>
    );
  }