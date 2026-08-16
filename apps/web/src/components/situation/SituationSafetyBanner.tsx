export function SituationSafetyBanner({ children }: { children: React.ReactNode }) {
    return <div className="safety-banner"><span>🛡</span><div><strong>Safety first</strong><p>{children}</p></div></div>;
  }
  