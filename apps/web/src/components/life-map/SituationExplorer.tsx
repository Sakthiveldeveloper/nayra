import type {
    LifeMapSituation,
  } from "../../data/lifeMap.data";
  
  type Props = {
    situation: LifeMapSituation | null;
    onClose: () => void;
    onAskNayra: (
      prompt: string,
    ) => void;
  };
  
  export function SituationExplorer({
    situation,
    onClose,
    onAskNayra,
  }: Props) {
    if (!situation) {
      return null;
    }
  
    return (
      <div className="situation-overlay">
        <div
          className="situation-overlay__backdrop"
          onClick={onClose}
        />
  
        <article className="situation-explorer">
          <button
            type="button"
            className="situation-explorer__close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
  
          <div className="situation-explorer__header">
            <div className="situation-explorer__icon">
              {situation.icon}
            </div>
  
            <div>
              <span>
                {situation.category}
              </span>
  
              <h2>{situation.title}</h2>
  
              <p>
                {situation.shortDescription}
              </p>
            </div>
          </div>
  
          <div className="situation-explorer__content">
            <ExplorerSection
              title="What might be happening?"
              items={
                situation.whatMightBeHappening
              }
            />
  
            <ExplorerSection
              title="Things to know"
              items={situation.thingsToKnow}
            />
  
            <ExplorerSection
              title="Options to explore"
              items={
                situation.optionsToExplore
              }
            />
  
            <ExplorerSection
              title="Trusted support"
              items={
                situation.trustedSupport
              }
            />
          </div>
  
          <div className="situation-explorer__footer">
            <div>
              <strong>
                Not sure what to do next?
              </strong>
  
              <p>
                You don't need the perfect words.
                Start with what is happening.
              </p>
            </div>
  
            <button
              type="button"
              onClick={() =>
                onAskNayra(
                  situation.askNayraPrompt,
                )
              }
            >
              Talk to NAYRA →
            </button>
          </div>
        </article>
      </div>
    );
  }
  
  type ExplorerSectionProps = {
    title: string;
    items: string[];
  };
  
  function ExplorerSection({
    title,
    items,
  }: ExplorerSectionProps) {
    return (
      <section className="explorer-section">
        <h3>{title}</h3>
  
        <ul>
          {items.map((item) => (
            <li key={item}>
              <span>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    );
  }