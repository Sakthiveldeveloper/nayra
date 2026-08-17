type Props = {
    onExplore: () => void;
  };
  
  const items = [
    {
      icon: "🧭",
      title: "I want to understand",
      description:
        "Learn what something means, what may be happening and what options might exist.",
      action: "Explore information →",
    },
    {
      icon: "✨",
      title: "I want to know what I can do",
      description:
        "Explore practical next steps without being pushed into making a decision.",
      action: "See possible next steps →",
    },
    {
      icon: "🤝",
      title: "I want to find support",
      description:
        "Find trusted organisations, services and people who may be able to support you.",
      action: "Find support →",
    },
    {
      icon: "🌱",
      title: "I'm just exploring",
      description:
        "Browse topics at your own pace. You don't need a specific question.",
      action: "Browse resources →",
    },
  ];
  
  export function ResourceIntentCards({ onExplore }: Props) {
    return (
      <section className="resources-section">
        <div className="section-heading">
          <span className="eyebrow">START HERE</span>
          <h2>What would help you most right now?</h2>
          <p>
            Choose the kind of help that feels closest.
            You can change direction at any time.
          </p>
        </div>
  
        <div className="resource-intent-grid">
          {items.map((item) => (
            <button
              key={item.title}
              className="resource-intent-card"
              type="button"
              onClick={onExplore}
            >
              <div className="resource-card-icon">
                {item.icon}
              </div>
  
              <span className="resource-card-arrow">→</span>
  
              <h3>{item.title}</h3>
  
              <p>{item.description}</p>
  
              <strong>{item.action}</strong>
            </button>
          ))}
        </div>
      </section>
    );
  }