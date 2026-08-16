import { useEffect, useMemo, useState } from "react";

type TourStep = {
  id: string;
  target?: string;
  title: string;
  description: string;
  position?: "top" | "bottom" | "left" | "right" | "center";
};

const STORAGE_KEY = "nayra_onboarding_completed";

const TOUR_STEPS: TourStep[] = [
  {
    id: "welcome",
    title: "A place to understand what's happening.",
    description:
      "NAYRA isn't here to tell you what to do. It's here to help you understand your situation, explore your options and find the next step that feels right for you.",
    position: "center",
  },

  {
    id: "sidebar",
    target: "sidebar",
    title: "Your NAYRA space.",
    description:
      "This is your main navigation. Move between your home, Life Map, support, resources and conversations whenever you need.",
    position: "right",
  },

  {
    id: "home",
    target: "home",
    title: "Start here.",
    description:
      "Home gives you a simple starting point. You can search for a situation, explore your life areas or ask for help.",
    position: "right",
  },

  {
    id: "life-map",
    target: "life-map",
    title: "Understand your life areas.",
    description:
      "Life Map helps you look at different parts of your life and understand what may be affecting how you're feeling.",
    position: "right",
  },

  {
    id: "help",
    target: "help",
    title: "Get support when you need it.",
    description:
      "When something needs more than information, this is where you can find support and guidance.",
    position: "right",
  },

  {
    id: "resources",
    target: "resources",
    title: "Find useful resources.",
    description:
      "Explore trusted information and resources related to different situations and areas of life.",
    position: "right",
  },

  {
    id: "ask",
    target: "ask",
    title: "Talk it through.",
    description:
      "Ask NAYRA about a situation, thought or question. The goal is to help you explore—not make decisions for you.",
    position: "right",
  },

  {
    id: "finish",
    title: "You're ready.",
    description:
      "Explore NAYRA at your own pace. You can always come back to these areas whenever you need them.",
    position: "center",
  },
];

export function FirstVisitOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

  const step = useMemo(
    () => TOUR_STEPS[currentStep],
    [currentStep],
  );

  /*
   * Show onboarding only for first visit.
   */
  useEffect(() => {
    const completed = localStorage.getItem(STORAGE_KEY);

    if (!completed) {
      setIsOpen(true);
    }
  }, []);

  /*
   * Find and highlight tour targets.
   *
   * IMPORTANT:
   * The sidebar stays highlighted during every
   * navigation step.
   */
  useEffect(() => {
    const removeTourTargets = () => {
      document
        .querySelectorAll(".nayra-tour__target")
        .forEach((element) => {
          element.classList.remove("nayra-tour__target");
        });
    };

    removeTourTargets();

    if (!isOpen) {
      setTargetRect(null);
      return;
    }

    const updateTargetPosition = () => {
      removeTourTargets();

      /*
       * --------------------------------------------------
       * KEEP SIDEBAR VISIBLE DURING ENTIRE TOUR
       * --------------------------------------------------
       */
      const sidebar = document.querySelector(
        '[data-tour="sidebar"]',
      ) as HTMLElement | null;

      if (sidebar && !step.target?.includes("sidebar")) {
        sidebar.classList.add("nayra-tour__target");
      }

      /*
       * Welcome / Finish have no target.
       */
      if (!step.target) {
        setTargetRect(null);
        return;
      }

      /*
       * Find current target.
       */
      const element = document.querySelector(
        `[data-tour="${step.target}"]`,
      ) as HTMLElement | null;

      if (!element) {
        setTargetRect(null);
        return;
      }

      /*
       * Sidebar step:
       * highlight the complete sidebar.
       */
      if (step.target === "sidebar") {
        element.classList.add("nayra-tour__target");

        setTargetRect(element.getBoundingClientRect());

        return;
      }

      /*
       * Navigation step:
       * highlight the current navigation item.
       */
      element.classList.add("nayra-tour__target");

      setTargetRect(element.getBoundingClientRect());
    };

    updateTargetPosition();

    window.addEventListener("resize", updateTargetPosition);
    window.addEventListener("scroll", updateTargetPosition, true);

    /*
     * Give the application a moment to finish layout.
     */
    const timer = window.setTimeout(
      updateTargetPosition,
      100,
    );

    return () => {
      window.clearTimeout(timer);

      window.removeEventListener(
        "resize",
        updateTargetPosition,
      );

      window.removeEventListener(
        "scroll",
        updateTargetPosition,
        true,
      );

      removeTourTargets();
    };
  }, [isOpen, step]);

  /*
   * Finish the tour.
   */
  const closeTour = () => {
    document
      .querySelectorAll(".nayra-tour__target")
      .forEach((element) => {
        element.classList.remove("nayra-tour__target");
      });

    localStorage.setItem(STORAGE_KEY, "true");

    setIsOpen(false);
    setTargetRect(null);
  };

  /*
   * Go to next step.
   */
  const nextStep = () => {
    if (currentStep === TOUR_STEPS.length - 1) {
      closeTour();
      return;
    }

    setCurrentStep((previous) => previous + 1);
  };

  /*
   * Go to previous step.
   */
  const previousStep = () => {
    if (currentStep === 0) {
      return;
    }

    setCurrentStep((previous) => previous - 1);
  };

  /*
   * Skip entire tour.
   */
  const skipTour = () => {
    closeTour();
  };

  if (!isOpen) {
    return null;
  }

  const isWelcome = currentStep === 0;
  const isFinish =
    currentStep === TOUR_STEPS.length - 1;

  return (
    <div className="nayra-tour">

      {/* ============================================
          DARK / BLURRED BACKGROUND
      ============================================ */}
      <div className="nayra-tour__backdrop" />

      {/* ============================================
          CURRENT TARGET SPOTLIGHT
      ============================================ */}
      {targetRect && (
        <div
          className="nayra-tour__spotlight"
          style={{
            top: targetRect.top - 8,
            left: targetRect.left - 8,
            width: targetRect.width + 16,
            height: targetRect.height + 16,
          }}
        />
      )}

      {/* ============================================
          TOUR CARD
      ============================================ */}
      <div
        className={[
          "nayra-tour__card",
          isWelcome || isFinish
            ? "nayra-tour__card--center"
            : "nayra-tour__card--target",
        ].join(" ")}
        style={
          targetRect && !isWelcome && !isFinish
            ? {
                top: Math.max(targetRect.top, 24),

                left: Math.min(
                  targetRect.right + 24,
                  window.innerWidth - 390,
                ),
              }
            : undefined
        }
      >
        {/* NAYRA ICON */}
        <div className="nayra-tour__icon">
          <span>✦</span>
        </div>

        {/* WELCOME LABEL */}
        {isWelcome && (
          <div className="nayra-tour__eyebrow">
            WELCOME TO NAYRA
          </div>
        )}

        {/* TITLE */}
        <h2>{step.title}</h2>

        {/* DESCRIPTION */}
        <p>{step.description}</p>

        {/* WELCOME / FINISH FLOW */}
        {(isWelcome || isFinish) && (
          <div className="nayra-tour__flow">
            <span>Your situation</span>

            <b>→</b>

            <span>Your options</span>

            <b>→</b>

            <span>Your next step</span>
          </div>
        )}

        {/* ========================================
            FOOTER
        ======================================== */}
        <div className="nayra-tour__footer">

          {/* PROGRESS */}
          <div className="nayra-tour__progress">
            <span>
              {currentStep + 1} / {TOUR_STEPS.length}
            </span>

            <div className="nayra-tour__dots">
              {TOUR_STEPS.map(
                (tourStep, index) => (
                  <span
                    key={tourStep.id}
                    className={
                      index === currentStep
                        ? "nayra-tour__dot nayra-tour__dot--active"
                        : "nayra-tour__dot"
                    }
                  />
                ),
              )}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="nayra-tour__actions">

            {currentStep > 0 && (
              <button
                type="button"
                className="nayra-tour__back"
                onClick={previousStep}
              >
                Back
              </button>
            )}

            <button
              type="button"
              className="nayra-tour__primary"
              onClick={nextStep}
            >
              {isWelcome
                ? "Let's begin"
                : isFinish
                  ? "Explore NAYRA"
                  : "Next"}
            </button>
          </div>
        </div>

        {/* SKIP */}
        {isWelcome && (
          <button
            type="button"
            className="nayra-tour__skip"
            onClick={skipTour}
          >
            Skip introduction
          </button>
        )}
      </div>
    </div>
  );
}