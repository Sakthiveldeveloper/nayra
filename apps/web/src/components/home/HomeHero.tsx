type Props = {
    onNavigate: (page: any) => void;
  };
  
  export function HomeHero({ onNavigate }: Props) {
    return (
      <section className="home-hero">
        <div className="home-hero__content">
          <span className="home-hero__eyebrow">
            A LIFE SUPPORT PLATFORM · INDIA
          </span>
  
          <h1>
            You don't have to
            <br />
            figure everything out
            <br />
            alone.
          </h1>
  
          <p>
            Understand what's happening, explore your options,
            find trusted support, and take the next step that
            feels right for you.
          </p>
  
          <div className="home-search">
            <span className="home-search__icon">⌕</span>
  
            <input
              type="text"
              placeholder="What are you dealing with today?"
            />
  
            <button type="button">
              Search
            </button>
          </div>
  
          <div className="home-hero__actions">
            <button
              type="button"
              className="home-button home-button--primary"
              onClick={() => onNavigate("life-map")}
            >
              Explore my Life Map
              <span>→</span>
            </button>
  
            <button
              type="button"
              className="home-button home-button--secondary"
              onClick={() => onNavigate("ask")}
            >
              Talk to NAYRA
            </button>
          </div>
        </div>
  
        <div className="home-hero__visual">
          <div className="home-flower">
            ✿
          </div>
  
          <div className="home-hero__journey">
            <span>Your situation</span>
            <b>→</b>
            <span>Your options</span>
            <b>→</b>
            <span>Your next step</span>
          </div>
        </div>
      </section>
    );
  }