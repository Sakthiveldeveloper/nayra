import { useMemo, useState } from "react";
import type { PageKey } from "../types/nayra";

import {
  LIFE_MAP_STAGES,
  type LifeMapSituation,
} from "../../src/data/lifeMap.data.ts";

import { LifeMapHero } from "../components/life-map/LifeMapHero";
import { LifeStageCarousel } from "../components/life-map/LifeStageCarousel";
import { LifeStageOverview } from "../components/life-map/LifeStageOverview";
import { SituationGrid } from "../components/life-map/SituationGrid";
import { SituationExplorer } from "../components/life-map/SituationExplorer";
import { AskNayraPrompt } from "../components/life-map/AskNayraPrompt";
import { SupportSection } from "../components/life-map/SupportSection";

type Props = {
  onNavigate: (page: PageKey) => void;
};

export function LifeMapPage({
  onNavigate,
}: Props) {
  const [selectedStageId, setSelectedStageId] =
    useState("young-adult");

  const [
    selectedSituation,
    setSelectedSituation,
  ] = useState<LifeMapSituation | null>(null);

  const selectedStage = useMemo(
    () =>
      LIFE_MAP_STAGES.find(
        (stage) =>
          stage.id === selectedStageId,
      ) ?? LIFE_MAP_STAGES[0],
    [selectedStageId],
  );

  const handleStageSelect = (
    stage: (typeof LIFE_MAP_STAGES)[number],
  ) => {
    setSelectedStageId(stage.id);
    setSelectedSituation(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAskNayra = () => {
    onNavigate("ask");
  };

  return (
    <main className="life-map-page">
      <LifeMapHero
        stageTitle={selectedStage.title}
        stageDescription={
          selectedStage.shortDescription
        }
      />

      <LifeStageCarousel
        stages={LIFE_MAP_STAGES}
        selectedStageId={selectedStage.id}
        onSelect={handleStageSelect}
      />

      <LifeStageOverview
        stage={selectedStage}
      />

      <SituationGrid
        situations={
          selectedStage.situations
        }
        onSelect={setSelectedSituation}
      />

      <AskNayraPrompt
        stageTitle={selectedStage.title}
        onAsk={handleAskNayra}
      />

      <SupportSection
        stage={selectedStage}
        onNavigate={(page) =>
          onNavigate(page as PageKey)
        }
      />

      <SituationExplorer
        situation={selectedSituation}
        onClose={() =>
          setSelectedSituation(null)
        }
        onAskNayra={handleAskNayra}
      />
    </main>
  );
}