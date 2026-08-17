type Props = {
    onNavigate?: (page: string) => void;
  };
  
  export function SupportFinder({
    onNavigate,
  }: Props) {
    const support = [
      {
        icon: "👤",
        title: "Someone I trust",
        description:
          "A friend, family member, teacher, colleague or another person you feel comfortable reaching out to.",
        action: "Explore",
      },
      {
        icon: "🏢",
        title: "A trusted organisation",
        description:
          "Explore organisations and services that may be able to provide specialist support.",
        action: "Find organisations",
      },
      {
        icon: "📍",
        title: "Support near me",
        description:
          "Find relevant services and support options based on your location.",
        action: "Find support",
      },
    ];
  
    return (
      <section className="resources-support">
        <div className="resources-support__header">
          <div>
            <span className="eyebrow">
              FIND SUPPORT
            </span>
  
            <h2>
              Sometimes information isn't enough.
            </h2>
          </div>
  
          <p>
            If you want to speak to someone, NAYRA can
            help you explore different kinds of support.
          </p>
        </div>
  
        <div className="support-finder-grid">
          {support.map((item) => (
            <article
              className="support-finder-card"
              key={item.title}
            >
              <span className="resource-card-icon">
                {item.icon}
              </span>
  
              <h3>{item.title}</h3>
  
              <p>{item.description}</p>
  
              <button
                type="button"
                onClick={() => onNavigate?.("help")}
              >
                {item.action} →
              </button>
            </article>
          ))}
        </div>
      </section>
    );
  }