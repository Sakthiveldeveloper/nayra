import type { PageKey } from "../../src/types/nayra";

import { HomeHero } from "../../src/components/home/HomeHero";
import { StartWhereYouAre } from "../../src/components/home/StartWhereYouAre";
import { LifeAreaGrid } from "../../src/components/home/LifeAreaGrid";
import { SuggestedTopics } from "../../src/components/home/SuggestedTopics";
import { SafetySection } from "../../src/components/home/SafetySection";
import { LifeMapPreview } from "../../src/components/home/LifeMapPreview";
import { TrustedResources } from "../../src/components/home/TrustedResources";
import { Footer } from "../../src/components/common/Footer";

type Props = {
  onNavigate: (page: PageKey) => void;
};

export function HomePage({ onNavigate }: Props) {
  return (
    <main className="home-page">

      <HomeHero onNavigate={onNavigate} />

      <StartWhereYouAre onNavigate={onNavigate} />

      <LifeAreaGrid />

      <SuggestedTopics />

      <SafetySection onNavigate={onNavigate} />

      <LifeMapPreview onNavigate={onNavigate} />

      <TrustedResources onNavigate={onNavigate} />

      <Footer onNavigate={onNavigate} />

    </main>
  );
}