import { useMemo, useState } from "react";
import { lifeAreas, helpOptions, lifeStages } from "../data/nayra.data";
import { SearchBar } from "../components/common/SearchBar";
import { SectionHeader } from "../components/common/SectionHeader";
import { LifeAreaCard } from "../components/home/LifeAreaCard";
import { QuickHelpCard } from "../components/home/QuickHelpCard";
import { LifeMapPreview } from "../components/life-map/LifeMapPreview";

export function HomePage({ onNavigate }: { onNavigate: (page: any) => void }) {
  const [query, setQuery] = useState("");
  const [stage, setStage] = useState("young-adult");
  const filtered = useMemo(() => {
    if (!query.trim()) return lifeAreas;
    return lifeAreas.filter((a) => `${a.title} ${a.description} ${a.situations.join(" ")}`.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <div>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">A LIFE SUPPORT PLATFORM · INDIA V0.1</span>
          <h1>You don't have to figure everything out alone.</h1>
          <p>Understand what's happening, explore your options, find trusted support, and take the next step that feels right for you.</p>
          <SearchBar value={query} onChange={setQuery} onSubmit={() => onNavigate("ask")} />
          <div className="hero-actions">
            <button className="primary-button" onClick={() => onNavigate("life-map")}>Explore my Life Map</button>
            <button className="secondary-button" onClick={() => onNavigate("help")}>I need help now</button>
          </div>
        </div>
        <div className="hero-art"><div className="flower">✿</div><div className="hero-orbit">Your situation → your options → your next step</div></div>
      </section>

      <SectionHeader eyebrow="EXPLORE" title="What are you dealing with?" description="Start with a life area. You can change direction at any time." />
      <div className="life-area-grid">{filtered.map((a) => <LifeAreaCard key={a.id} area={a} onOpen={() => onNavigate("ask")} />)}</div>

      <section className="split-section">
        <div>
          <SectionHeader eyebrow="SAFETY" title="Need help right now?" description="You don't need to know the perfect words. Start with what is happening." />
          <div className="help-stack">{helpOptions.slice(0, 3).map((o) => <QuickHelpCard key={o.id} option={o} onOpen={() => onNavigate("help")} />)}</div>
        </div>
        <div className="home-ask">
          <div className="mini-orb">✿</div><span className="eyebrow">ASK NAYRA</span><h3>Start with your situation.</h3><p>“My manager keeps making comments and I don't know what to do.”</p><button className="primary-button" onClick={() => onNavigate("ask")}>Talk to NAYRA →</button>
        </div>
      </section>

      <SectionHeader eyebrow="YOUR JOURNEY" title="Life Map" description="Explore support by stage of life instead of trying to find the right words." action="Open full map" onAction={() => onNavigate("life-map")} />
      <LifeMapPreview stages={lifeStages} selected={stage} onSelect={setStage} />
    </div>
  );
}
