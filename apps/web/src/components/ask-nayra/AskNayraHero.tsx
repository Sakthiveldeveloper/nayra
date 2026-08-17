type Props = {
    onStart: () => void;
    onUnsure: () => void;
  };
  
  export function AskNayraHero({ onStart, onUnsure }: Props) {
    return (
      <section className="ask-nayra-hero">
        <div className="ask-nayra-hero-content">
          <span className="section-label">ASK NAYRA</span>
  
          <h1>
            You don't need the
            <br />
            right words to start.
          </h1>
  
          <p className="hero-description">
            Tell NAYRA what's happening in your own words. You can ask a
            question, describe a situation, or simply say that you're not sure
            what to do.
          </p>
  
          <div className="hero-actions">
            <button className="primary-button" onClick={onStart}>
              Start a conversation →
            </button>
  
            <button className="secondary-button" onClick={onUnsure}>
              I don't know where to start
            </button>
          </div>
  
          <div className="privacy-note">
            🔒 You choose what you share. You don't have to tell your whole
            story.
          </div>
        </div>
  
        <div className="ask-nayra-hero-visual">
          <div className="nayra-spark">✦</div>
  
          <div className="hero-message-card">
            <strong>Start with one sentence.</strong>
            <p>
              "I don't know what to do about something that happened."
            </p>
          </div>
        </div>
      </section>
    );
  }