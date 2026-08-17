import { useState } from "react";

import { AppShell } from "./components/layout/AppShell";
import { useNayraNavigation } from "./hooks/useNayraNavigation.ts";

import { HomePage } from "./pages/HomePage";
import { LifeMapPage } from "./pages/LifeMapPage";
import { GetHelpPage } from "./pages/GetHelpPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import  AskNayraPage  from "./pages/AskNayraPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";

import { FirstVisitOverlay } from "./components/onboarding/FirstVisitOverlay";

import "./styles.css";
import "./styles/ask-nayra.css";

export default function App() {
  const { page, navigate } = useNayraNavigation();

  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    return (
      localStorage.getItem("nayra_sidebar_collapsed") === "true"
    );
  });

  const toggleSidebar = () => {
    setSidebarCollapsed((previous) => {
      const next = !previous;

      localStorage.setItem(
        "nayra_sidebar_collapsed",
        String(next),
      );

      return next;
    });
  };

  const content = {
    home: <HomePage onNavigate={navigate} />,
    "life-map": <LifeMapPage onNavigate={navigate} />,
    help: <GetHelpPage />,
    resources: <ResourcesPage onNavigate={navigate} />,
    ask: <AskNayraPage  />,
    privacy: <PrivacyPage />,
    terms: <TermsPage />,
  }[page];

  

  return (
    <AppShell
      active={page}
      onNavigate={navigate}
      sidebarCollapsed={sidebarCollapsed}
      onToggleSidebar={toggleSidebar}
    >
      {content}

      <FirstVisitOverlay />
    </AppShell>
  );
}