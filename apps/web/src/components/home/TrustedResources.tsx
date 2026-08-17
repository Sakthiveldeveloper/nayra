type Props = {
    onNavigate: (page: any) => void;
  };
  
  export function TrustedResources({ onNavigate }: Props) {
    return (
      <section className="trusted-section">
        <div className="trusted-section__icon">
          ◈
        </div>
  
        <div className="trusted-section__content">
          <span>TRUSTED INFORMATION</span>
  
          <h2>Know more. Feel more prepared.</h2>
  
          <p>
            Explore practical information and trusted resources
            for situations that may affect your everyday life.
          </p>
        </div>
  
        <button
          type="button"
          onClick={() => onNavigate("resources")}
        >
          Explore resources →
        </button>
      </section>
    );
  }