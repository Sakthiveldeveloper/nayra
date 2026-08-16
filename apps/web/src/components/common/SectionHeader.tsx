type Props = { eyebrow?: string; title: string; description?: string; action?: string; onAction?: () => void };

export function SectionHeader({ eyebrow, title, description, action, onAction }: Props) {
  return (
    <div className="section-header">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action && <button className="text-button" onClick={onAction}>{action} →</button>}
    </div>
  );
}
