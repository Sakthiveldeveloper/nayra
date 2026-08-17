type Props = {
    onAsk: () => void;
  };
  
  export function ResourceAskNayra({
    onAsk,
  }: Props) {
    return (
      <section className="resources-ask">
        <div className="resources-ask__icon">
          ✦
        </div>
  
        <div className="resources-ask__content">
          <span className="eyebrow">
            ASK NAYRA
          </span>
  
          <h2>
            Not sure which resource you need?
          </h2>
  
          <p>
            You don't have to search for the right words.
            Tell NAYRA what's happening in your own words
            and explore useful areas together.
          </p>
  
          <em>
            "Something has been happening at work and
            I'm not sure what I can do."
          </em>
        </div>
  
        <button
          type="button"
          className="btn btn-light"
          onClick={onAsk}
        >
          Talk to NAYRA →
        </button>
      </section>
    );
  }