type Props = {
    onHelp: () => void;
  };
  
  export function SafetyBanner({ onHelp }: Props) {
    return (
      <section className="safety-banner">
        <div className="safety-icon">🚨</div>
  
        <div className="safety-content">
          <strong>Are you in immediate danger?</strong>
  
          <p>
            Your immediate safety comes first. Move to a safer place if you can
            and contact appropriate emergency support.
          </p>
        </div>
  
        <button onClick={onHelp}>
          I need immediate help →
        </button>
      </section>
    );
  }