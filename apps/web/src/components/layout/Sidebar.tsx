import type { PageKey } from "../../types/nayra";

type Props = {
  active: PageKey;
  onNavigate: (page: PageKey) => void;
};

const items: Array<{
  key: PageKey;
  icon: string;
  label: string;
}> = [
  { key: "home", icon: "⌂", label: "Home" },
  { key: "life-map", icon: "♡", label: "Life Map" },
  { key: "help", icon: "🛡", label: "Get Help" },
  { key: "resources", icon: "▤", label: "Resources" },
  { key: "ask", icon: "✦", label: "Ask NAYRA" },
];

export function Sidebar({ active, onNavigate }: Props) {
  return (
    <aside className="sidebar" data-tour="sidebar">
      <div className="brand">
        <span className="brand-mark">✿</span>
        <span>NAYRA</span>
      </div>

      <nav>
        {items.map((item) => (
          <button
            key={item.key}
            className={
              active === item.key
                ? "nav-item active"
                : "nav-item"
            }
            data-tour={item.key}
            onClick={() => onNavigate(item.key)}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-note">
        <strong>You are not alone.</strong>
        <span>
          Guidance, trusted information and support — one step at a time.
        </span>
      </div>
    </aside>
  );
}