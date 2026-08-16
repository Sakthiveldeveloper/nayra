import type { PageKey } from "../../types/nayra";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

type Props = { active: PageKey; onNavigate: (page: PageKey) => void; children: React.ReactNode };

export function AppShell({ active, onNavigate, children }: Props) {
  return (
    <div className="app-shell">
      <Sidebar active={active} onNavigate={onNavigate} />
      <main className="main">
        <TopBar onHelp={() => onNavigate("help")} />
        <div className="page-content">{children}</div>
      </main>
    </div>
  );
}
