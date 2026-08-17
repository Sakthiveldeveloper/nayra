type Props = {
    onNavigate: (page: any) => void;
  };
  
  const options = [
    {
      icon: "✦",
      title: "I'm not sure what's going on",
      description:
        "Start somewhere simple and explore what may be affecting you.",
      action: "Explore",
      page: "home",
    },
    {
      icon: "♡",
      title: "I want to understand myself",
      description:
        "Explore your life areas and understand what matters to you.",
      action: "Open Life Map",
      page: "life-map",
    },
    {
      icon: "🛡",
      title: "I need help",
      description:
        "Find practical support and trusted information.",
      action: "Get support",
      page: "help",
    },
    {
      icon: "✦",
      title: "I want to talk",
      description:
        "Start with what's happening. You don't need perfect words.",
      action: "Talk to NAYRA",
      page: "ask",
    },
  ];
  
  export function StartWhereYouAre({ onNavigate }: Props) {
    return (
      <section className="home-section">
        <div className="home-section__heading">
          <span>START WHERE YOU ARE</span>
  
          <h2>What would you like to do?</h2>
  
          <p>
            There is no right place to start. Choose whatever
            feels closest to you.
          </p>
        </div>
  
        <div className="start-grid">
          {options.map((option) => (
            <button
              type="button"
              key={option.title}
              className="start-card"
              onClick={() => onNavigate(option.page)}
            >
              <div className="start-card__icon">
                {option.icon}
              </div>
  
              <div>
                <h3>{option.title}</h3>
  
                <p>{option.description}</p>
  
                <span className="start-card__action">
                  {option.action} →
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
    );
  }