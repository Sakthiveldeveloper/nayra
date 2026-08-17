import type { PageKey } from "../../types/nayra";

type Props = {
  active: PageKey;
  onNavigate: (page: PageKey) => void;
  collapsed: boolean;
  onToggle: () => void;
};

const items: Array<{
  key: PageKey;
  icon: string;
  label: string;
}> = [
  {
    key: "home",
    icon: "⌂",
    label: "Home",
  },
  {
    key: "life-map",
    icon: "♡",
    label: "Life Map",
  },
  {
    key: "help",
    icon: "🛡",
    label: "Get Help",
  },
  {
    key: "resources",
    icon: "▤",
    label: "Resources",
  },
  {
    key: "ask",
    icon: "✦",
    label: "Ask NAYRA",
  },
];

export function Sidebar({
  active,
  onNavigate,
  collapsed,
  onToggle,
}: Props) {
  return (
    <aside
      className={`sidebar ${
        collapsed ? "sidebar--collapsed" : ""
      }`}
      data-tour="sidebar"
      onClick={(event) => {
        // Don't collapse when clicking a navigation item.
        if (
          (event.target as HTMLElement).closest(
            ".nav-item",
          )
        ) {
          return;
        }

        onToggle();
      }}
    >
      {/* Brand */}
      <div className="brand">
        <span className="brand-mark">✿</span>

        {!collapsed && (
          <span className="brand-name">
            NAYRA
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            data-tour={item.key}
            className={
              active === item.key
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => onNavigate(item.key)}
            title={collapsed ? item.label : undefined}
          >
            <span className="nav-item__icon">
              {item.icon}
            </span>

            {!collapsed && (
              <span className="nav-item__label">
                {item.label}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Sidebar footer */}
      {!collapsed && (
        <div className="sidebar-note">
          <strong>You are not alone.</strong>

          <span>
            Guidance, trusted information and support —
            one step at a time.
          </span>
        </div>
      )}
    </aside>
  );
}