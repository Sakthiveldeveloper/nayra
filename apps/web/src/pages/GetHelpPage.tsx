import { useState } from "react";

type HelpOption = {
  id: string;
  icon: string;
  title: string;
  description: string;
  action: string;
  tone?: "danger" | "support" | "info";
};

const HELP_OPTIONS: HelpOption[] = [
  {
    id: "danger",
    icon: "🚨",
    title: "I am in immediate danger",
    description:
      "If you are in immediate danger, prioritise getting somewhere safe and contacting appropriate emergency support.",
    action: "See immediate safety steps",
    tone: "danger",
  },
  {
    id: "unsafe",
    icon: "🛡️",
    title: "I don't feel safe",
    description:
      "Explore practical safety planning, trusted people and support options without having to explain everything at once.",
    action: "Build a safety plan",
    tone: "support",
  },
  {
    id: "happened",
    icon: "✦",
    title: "Something happened to me",
    description:
      "Understand possible options and support without being pressured to make a decision.",
    action: "Understand my options",
    tone: "support",
  },
  {
    id: "rights",
    icon: "⚖️",
    title: "I need to understand my rights",
    description:
      "Find information that can help you understand your rights, choices and possible next steps.",
    action: "Explore rights",
    tone: "info",
  },
  {
    id: "health",
    icon: "🏥",
    title: "I need health support",
    description:
      "Find trusted health information and understand what kind of support may be available.",
    action: "Explore health support",
    tone: "info",
  },
  {
    id: "talk",
    icon: "💬",
    title: "I need someone to talk to",
    description:
      "Sometimes you don't need an answer straight away. You may just need a safe place to start putting things into words.",
    action: "Start talking",
    tone: "support",
  },
];

const SUPPORT_PATHS = [
  {
    icon: "👤",
    title: "Someone I trust",
    description:
      "A friend, family member, teacher, colleague or another person you feel comfortable reaching out to.",
  },
  {
    icon: "🏢",
    title: "A trusted organisation",
    description:
      "Explore organisations and services that may be able to provide specialist support.",
  },
  {
    icon: "📍",
    title: "Support near me",
    description:
      "Find relevant services and support options based on your location.",
  },
];

export function GetHelpPage() {
  const [selectedHelp, setSelectedHelp] =
    useState<HelpOption | null>(null);

  return (
    <main className="help-page">
      {/* HERO */}
      <section className="help-hero">
        <div className="help-hero__content">
          <span className="section-eyebrow">
            GET HELP
          </span>

          <h1>
            You don't have to know
            <br />
            exactly what you need.
          </h1>

          <p>
            Start with what is happening. NAYRA can help
            you understand the situation, explore your
            options and find appropriate support.
          </p>

          <div className="help-hero__actions">
            <button
              className="primary-button"
              onClick={() =>
                document
                  .getElementById("help-options")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Find the right place to start
              <span>→</span>
            </button>

            <button
              className="secondary-button"
              onClick={() => setSelectedHelp(HELP_OPTIONS[5])}
            >
              I just need to talk
            </button>
          </div>
        </div>

        <div className="help-hero__visual">
          <div className="help-hero__orb">
            ✦
          </div>

          <div className="help-hero__message">
            <strong>You can start with one sentence.</strong>
            <span>
              "I don't know what to do about something
              that happened."
            </span>
          </div>
        </div>
      </section>

      {/* QUICK SAFETY */}
      <section className="help-safety-banner">
        <div className="help-safety-banner__icon">
          🚨
        </div>

        <div>
          <strong>
            Are you in immediate danger?
          </strong>

          <p>
            Your immediate safety comes first. Move to
            a safer place if you can and contact
            appropriate emergency support.
          </p>
        </div>

        <button
          onClick={() =>
            setSelectedHelp(HELP_OPTIONS[0])
          }
        >
          I need immediate help →
        </button>
      </section>

      {/* MAIN OPTIONS */}
      <section
        className="help-options"
        id="help-options"
      >
        <div className="section-heading">
          <span className="section-eyebrow">
            START HERE
          </span>

          <h2>
            What is closest to
            <br />
            what you're experiencing?
          </h2>

          <p>
            These are starting points, not labels.
            Choose whatever feels closest.
          </p>
        </div>

        <div className="help-options__grid">
          {HELP_OPTIONS.map((option) => (
            <button
              key={option.id}
              className={`help-option-card help-option-card--${option.tone}`}
              onClick={() => setSelectedHelp(option)}
            >
              <div className="help-option-card__top">
                <span className="help-option-card__icon">
                  {option.icon}
                </span>

                <span className="help-option-card__arrow">
                  →
                </span>
              </div>

              <h3>{option.title}</h3>

              <p>{option.description}</p>

              <span className="help-option-card__action">
                {option.action} →
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* NOT SURE */}
      <section className="help-not-sure">
        <div className="help-not-sure__icon">
          ✦
        </div>

        <div className="help-not-sure__content">
          <span>ASK NAYRA</span>

          <h2>
            I'm not sure what kind of help I need.
          </h2>

          <p>
            That's okay. Tell NAYRA what is happening
            in your own words. You don't need to choose
            the right category first.
          </p>
        </div>

        <button className="help-not-sure__button">
          Talk to NAYRA →
        </button>
      </section>

      {/* SUPPORT PATHS */}
      <section className="support-paths">
        <div className="section-heading">
          <span className="section-eyebrow">
            SUPPORT PATHS
          </span>

          <h2>
            You don't have to handle
            <br />
            everything alone.
          </h2>

          <p>
            Support can come from different places.
            Choose what feels comfortable for you.
          </p>
        </div>

        <div className="support-paths__grid">
          {SUPPORT_PATHS.map((path) => (
            <article
              className="support-path-card"
              key={path.title}
            >
              <span className="support-path-card__icon">
                {path.icon}
              </span>

              <h3>{path.title}</h3>

              <p>{path.description}</p>

              <button>
                Explore →
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* PRIVACY MESSAGE */}
      <section className="help-privacy">
        <div>
          <span className="section-eyebrow">
            YOUR SPACE
          </span>

          <h2>
            You choose what you share.
          </h2>
        </div>

        <p>
          NAYRA is designed to let you explore information
          and support at your own pace. You don't need to
          tell your whole story before you can begin.
        </p>
      </section>

      {/* MODAL */}
      {selectedHelp && (
        <div
          className="help-modal-backdrop"
          onClick={() => setSelectedHelp(null)}
        >
          <div
            className="help-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="help-modal__close"
              onClick={() => setSelectedHelp(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="help-modal__icon">
              {selectedHelp.icon}
            </div>

            <span className="section-eyebrow">
              NAYRA SUPPORT
            </span>

            <h2>{selectedHelp.title}</h2>

            <p>
              {selectedHelp.description}
            </p>

            <div className="help-modal__steps">
              <div>
                <strong>1</strong>
                <span>
                  Understand what is happening
                </span>
              </div>

              <div>
                <strong>2</strong>
                <span>
                  Explore possible options
                </span>
              </div>

              <div>
                <strong>3</strong>
                <span>
                  Choose the next step that feels
                  right for you
                </span>
              </div>
            </div>

            <button className="primary-button">
              {selectedHelp.action} →
            </button>

            <button
              className="help-modal__back"
              onClick={() => setSelectedHelp(null)}
            >
              Go back
            </button>
          </div>
        </div>
      )}
    </main>
  );
}