import { useState } from "react";

import { AskNayraHero } from "../components/ask-nayra/AskNayraHero";
import { ConversationBox } from "../components/ask-nayra/ConversationBox";
import { QuickStartGrid } from "../components/ask-nayra/QuickStartGrid";
import { ContextCard } from "../components/ask-nayra/ContextCard";
import { ResourceRecommendations } from "../components/ask-nayra/ResourceRecommendations";
import { SupportOptions } from "../components/ask-nayra/SupportOptions";
import { PrivacyCard } from "../components/ask-nayra/PrivacyCard";
import { SafetyBanner } from "../components/ask-nayra/SafetyBanner";

export default function AskNayraPage() {
  const [initialMessage, setInitialMessage] = useState("");

  const [showContext, setShowContext] = useState(true);

  const startConversation = () => {
    document
      .getElementById("conversation")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const selectQuickStart = (title: string) => {
    setInitialMessage(title);

    setTimeout(() => {
      document
        .getElementById("conversation")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 50);
  };

  const handleUnsure = () => {
    setInitialMessage("I don't know what kind of help I need.");

    setTimeout(() => {
      document
        .getElementById("conversation")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 50);
  };

  const handleImmediateHelp = () => {
    alert(
      "Immediate safety support will be connected here. We will add country-specific emergency guidance in the next phase.",
    );
  };

  return (
    <main className="ask-nayra-page">
      <AskNayraHero
        onStart={startConversation}
        onUnsure={handleUnsure}
      />

      <SafetyBanner onHelp={handleImmediateHelp} />

      {showContext && (
        <ContextCard
          stage="Working Life"
          situation="Workplace harassment"
          onRemove={() => setShowContext(false)}
        />
      )}

      <QuickStartGrid onSelect={selectQuickStart} />

      <ConversationBox initialMessage={initialMessage} />

      <ResourceRecommendations />

      <SupportOptions />

      <section className="decision-section">
        <div className="decision-content">
          <span className="section-label">YOUR OPTIONS</span>

          <h2>You don't have to decide everything right now.</h2>

          <p>
            NAYRA can help you understand different possibilities so you can
            make a decision that feels right for you.
          </p>

          <div className="decision-points">
            <div>
              <span>01</span>
              <strong>Understand what happened</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Explore possible options</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Find information or support</strong>
            </div>
          </div>
        </div>

        <div className="decision-visual">
          <span>✦</span>
          <p>
            Take one step at a time.
          </p>
        </div>
      </section>

      <PrivacyCard />

      <section className="nayra-feedback">
        <span className="section-label">YOUR FEEDBACK</span>

        <h2>Was this helpful?</h2>

        <p>
          Your feedback can help us make NAYRA clearer and more useful.
        </p>

        <div className="feedback-buttons">
          <button>👍 Yes, helpful</button>
          <button>👎 Not really</button>
        </div>
      </section>

      <section className="ask-nayra-final">
        <span className="section-label">ASK NAYRA</span>

        <h2>You don't have to figure it out alone.</h2>

        <p>
          Start with whatever feels easiest. NAYRA can help you understand
          what's happening and explore what could come next.
        </p>

        <button
          className="primary-button"
          onClick={startConversation}
        >
          Talk to NAYRA →
        </button>
      </section>
    </main>
  );
}