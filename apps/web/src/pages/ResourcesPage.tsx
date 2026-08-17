import { useMemo, useState } from "react";

import type { PageKey } from "../types/nayra";

import { ResourcesHero } from "../components/resources/ResourcesHero";
import { ResourceIntentCards } from "../components/resources/ResourceIntentCards";
import { ResourceLifeStages } from "../components/resources/ResourceLifeStages";
import { ResourceSituations } from "../components/resources/ResourceSituations";
import { ResourceGuides } from "../components/resources/ResourceGuides";
import { TrustedResources } from "../components/resources/TrustedResources";
import { SupportFinder } from "../components/resources/SupportFinder";
import { ResourceExploreCarousel } from "../components/resources/ResourceExploreCarousel";
import { ResourceAskNayra } from "../components/resources/ResourceAskNayra";
import { ResourcePrivacy } from "../components/resources/ResourcePrivacy";

import {
  resourceLifeStages,
  // resourceSituations,
} from "../data/resources.data";

type Props = {
  onNavigate: (page: PageKey) => void;
};

export function ResourcesPage({
  onNavigate,
}: Props) {
  const [searchValue, setSearchValue] =
    useState("");

  const [selectedStage, setSelectedStage] =
    useState("working-life");

  const selectedStageData = useMemo(
    () =>
      resourceLifeStages.find(
        (stage) => stage.id === selectedStage,
      ),
    [selectedStage],
  );

  const handleExplore = () => {
    document
      .getElementById("situations")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const handleAsk = () => {
    onNavigate("ask");
  };

  const handleSituation = (id: string) => {
    /*
     * Later this will navigate to:
     *
     * /resources/:situationId
     *
     * For now we keep the interaction ready.
     */
    console.log("Selected resource:", id);
  };

  return (
    <main className="resources-page">
      <ResourcesHero
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onExplore={handleExplore}
        onAsk={handleAsk}
      />

      <ResourceIntentCards
        onExplore={handleExplore}
      />

      <ResourceLifeStages
        selectedStage={selectedStage}
        onSelect={setSelectedStage}
      />

      <section className="resources-current-stage">
        <div className="resources-current-stage__icon">
          {selectedStageData?.icon}
        </div>

        <div>
          <span className="eyebrow">
            CURRENTLY EXPLORING
          </span>

          <h2>
            {selectedStageData?.title}
            {" · "}
            {selectedStageData?.age}
          </h2>

          <p>
            {selectedStageData?.description}
          </p>

          <div className="resource-tags">
            {selectedStage === "working-life" && (
              <>
                <span>Career</span>
                <span>Workplace</span>
                <span>Money</span>
                <span>Relationships</span>
                <span>Family</span>
                <span>Wellbeing</span>
              </>
            )}

            {selectedStage === "adolescence" && (
              <>
                <span>Education</span>
                <span>Relationships</span>
                <span>Health</span>
                <span>Safety</span>
                <span>Identity</span>
              </>
            )}

            {selectedStage === "young-adult" && (
              <>
                <span>Career</span>
                <span>Relationships</span>
                <span>Health</span>
                <span>Money</span>
                <span>Independence</span>
              </>
            )}

            {selectedStage === "childhood" && (
              <>
                <span>Safety</span>
                <span>Health</span>
                <span>Education</span>
                <span>Relationships</span>
              </>
            )}

            {selectedStage === "motherhood" && (
              <>
                <span>Pregnancy</span>
                <span>Parenting</span>
                <span>Health</span>
                <span>Relationships</span>
              </>
            )}

            {selectedStage === "later-life" && (
              <>
                <span>Health</span>
                <span>Money</span>
                <span>Family</span>
                <span>Independence</span>
              </>
            )}
          </div>
        </div>
      </section>

      <ResourceSituations
        selectedStage={selectedStage}
        searchValue={searchValue}
        onSelectSituation={handleSituation}
      />

      <ResourceGuides />

      <TrustedResources />

      <SupportFinder
        onNavigate={(page) =>
          onNavigate(page as PageKey)
        }
      />

      <ResourceExploreCarousel />

      <ResourceAskNayra onAsk={handleAsk} />

      <ResourcePrivacy />

      <footer className="resources-footer">
        <div className="resources-footer__brand">
          <span className="brand-mark">✿</span>

          <strong>NAYRA</strong>

          <p>
            Understand what's happening.
            <br />
            Explore your options.
            <br />
            Find your next step.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <button onClick={() => onNavigate("home")}>
            Home
          </button>
          <button onClick={() => onNavigate("life-map")}>
            Life Map
          </button>
          <button onClick={() => onNavigate("help")}>
            Get Help
          </button>
          <button onClick={() => onNavigate("ask")}>
            Ask NAYRA
          </button>
        </div>

        <div>
          <h4>Support</h4>
          <button>Find support</button>
          <button>Trusted organisations</button>
          <button>Safety information</button>
        </div>

        <div>
          <h4>Your privacy</h4>
          <button>Privacy</button>
          <button>Terms</button>
          <button>Accessibility</button>
        </div>
      </footer>

      <div className="resources-disclaimer">
        NAYRA is an information and support-navigation
        platform. It does not replace emergency services,
        medical professionals, legal professionals or
        other specialist services.

        <span>
          © 2026 NAYRA · Built with care.
        </span>
      </div>
    </main>
  );
}