type Props = {
    stageTitle: string;
    stageDescription: string;
  };
  
  export function LifeMapHero({
    stageTitle,
    stageDescription,
  }: Props) {
    return (
      <section className="life-map-hero">
        <div className="life-map-hero__eyebrow">
          LIFE MAP
        </div>
  
        <h1>
          Your life journey,
          <br />
          with support at every step.
        </h1>
  
        <p>
          NAYRA organizes guidance around real situations,
          life stages and the things that matter to you.
        </p>
  
        <div className="life-map-hero__stage">
          <span>Currently exploring</span>
  
          <strong>{stageTitle}</strong>
  
          <small>{stageDescription}</small>
        </div>
      </section>
    );
  }