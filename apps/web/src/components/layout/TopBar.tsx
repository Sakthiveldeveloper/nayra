export function TopBar({ onHelp }: { onHelp: () => void }) {
    return (
      <header className="topbar">
        <div className="mobile-brand"><span>✿</span> NAYRA</div>
        <div className="top-actions">
          <button className="language">◎ English ▾</button>
          <button className="icon-button" aria-label="Notifications">♧</button>
          <button className="help-button" onClick={onHelp}>Get Help Now</button>
        </div>
      </header>
    );
  }
  