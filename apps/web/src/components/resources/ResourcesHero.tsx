type Props = {
    searchValue: string;
    onSearchChange: (value: string) => void;
    onExplore: () => void;
    onAsk: () => void;
  };
  
  export function ResourcesHero({
    searchValue,
    onSearchChange,
    onExplore,
    onAsk,
  }: Props) {
    return (
      <section className="resources-hero">
        <div className="resources-hero__content">
          <span className="eyebrow">NAYRA RESOURCES</span>
  
          <h1>
            Find information
            <br />
            that helps you
            <br />
            move forward.
          </h1>
  
          <p>
            Trusted information, practical guides and support
            options — organised around real situations and
            different stages of life.
          </p>
  
          <p className="resources-hero__subtext">
            You don't need to know the right category.
            Start with what you're experiencing.
          </p>
  
          <div className="resources-search">
            <span>⌕</span>
  
            <input
              value={searchValue}
              onChange={(event) =>
                onSearchChange(event.target.value)
              }
              placeholder="Search for a situation, question or topic..."
              aria-label="Search resources"
            />
  
            <button type="button" onClick={onExplore}>
              Search
            </button>
          </div>
  
          <div className="resources-search__examples">
            <span>Try:</span>
            <button type="button" onClick={() => onSearchChange("workplace harassment")}>
              workplace harassment
            </button>
            <button type="button" onClick={() => onSearchChange("bullying")}>
              bullying
            </button>
            <button type="button" onClick={() => onSearchChange("relationship problems")}>
              relationship problems
            </button>
          </div>
  
          <div className="resources-hero__actions">
            <button
              className="btn btn-primary"
              type="button"
              onClick={onExplore}
            >
              Explore by situation →
            </button>
  
            <button
              className="btn btn-secondary"
              type="button"
              onClick={onAsk}
            >
              I don't know where to start
            </button>
          </div>
        </div>
  
        <div className="resources-hero__visual">
          <div className="resources-hero__orb">
            ✦
          </div>
  
          <div className="resources-hero__note">
            <strong>Start with what you know.</strong>
            <span>
              You don't need the perfect words before
              you begin exploring.
            </span>
          </div>
        </div>
      </section>
    );
  }