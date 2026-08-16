import { AppShell } from "./components/layout/AppShell";
import { useNayraNavigation } from "./hooks/useNayraNavigation.ts";
import { HomePage } from "./pages/HomePage";
import { LifeMapPage } from "./pages/LifeMapPage";
import { GetHelpPage } from "./pages/GetHelpPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { AskNayraPage } from "./pages/AskNayraPage";
import "./styles.css";

export default function App() {
  const { page, navigate } = useNayraNavigation();

  const content = {
    home: <HomePage onNavigate={navigate} />,
    "life-map": <LifeMapPage onNavigate={navigate} />,
    help: <GetHelpPage />,
    resources: <ResourcesPage />,
    ask: <AskNayraPage />,
  }[page];

  return <AppShell active={page} onNavigate={navigate}>{content}</AppShell>;
}
