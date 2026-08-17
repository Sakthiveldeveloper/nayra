type Props = {
    stageTitle: string;
    onAsk: () => void;
  };
  
  export function AskNayraPrompt({
    onAsk,
  }: Props) {
    return (
      <section className="life-map-ask">
        <div className="life-map-ask__icon">
          ✦
        </div>
  
        <div className="life-map-ask__content">
          <span>ASK NAYRA</span>
  
          <h2>
            Not sure where to start?
          </h2>
  
          <p>
            Tell NAYRA what is happening.
            You don't need to know which category
            it belongs to.
          </p>
  
          <div className="life-map-ask__example">
            “I'm dealing with something at work
            and I don't know what my options are.”
          </div>
        </div>
  
        <button
          type="button"
          onClick={onAsk}
        >
          Talk to NAYRA →
        </button>
      </section>
    );
  }