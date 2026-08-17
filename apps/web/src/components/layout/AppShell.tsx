import type { ReactNode } from "react";
import type { PageKey } from "../../types/nayra";
import { Sidebar } from "../common/Sidebar";
import { TopBar } from "./TopBar";

type Props = {
  active: PageKey;
  onNavigate: (page: PageKey) => void;
  children: ReactNode;
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
};

export function AppShell({
  active,
  onNavigate,
  children,
  sidebarCollapsed,
  onToggleSidebar,
}: Props) {
  return (
    <div
      className={
        sidebarCollapsed
          ? "app-shell app-shell--sidebar-collapsed"
          : "app-shell"
      }
    >
      {/* LEFT SIDEBAR */}
      <Sidebar
        active={active}
        onNavigate={onNavigate}
        collapsed={sidebarCollapsed}
        onToggle={onToggleSidebar}
      />

      {/* RIGHT SIDE */}
      <div className="app-content">

        {/* KEEP HEADER */}
        <TopBar onHelp={() => onNavigate("help")}/>

        {/* PAGE */}
        <main className="app-main">
          {children}
        </main>

      </div>
    </div>
  );
}