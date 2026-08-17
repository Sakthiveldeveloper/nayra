import { useState } from "react";
import type { FormEvent } from "react";

import type { PageKey } from "../../types/nayra";

type Props = {
  onNavigate?: (page: PageKey) => void;
};

export function Footer({ onNavigate }: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
    setEmail("");
  };

  const goTo = (page: PageKey) => {
    onNavigate?.(page);
  };

  return (
    <footer className="nayra-footer">
      {/* ==============================
          MAIN FOOTER
      ============================== */}

      <div className="nayra-footer__main">

        {/* Brand */}
        <div className="nayra-footer__brand">
          <div className="nayra-footer__logo">
            <span>✿</span>
            <strong>NAYRA</strong>
          </div>

          <p>
            A calmer place to understand what's happening,
            explore your options and find the next step.
          </p>

          <span className="nayra-footer__location">
            Built with care for people navigating real life.
          </span>
        </div>

        {/* Explore */}
        <div className="nayra-footer__column">
          <h4>Explore</h4>

          <button onClick={() => goTo("home")}>
            Home
          </button>

          <button onClick={() => goTo("life-map")}>
            Life Map
          </button>

          <button onClick={() => goTo("resources")}>
            Resources
          </button>

          <button onClick={() => goTo("ask")}>
            Ask NAYRA
          </button>
        </div>

        {/* Support */}
        <div className="nayra-footer__column">
          <h4>Support</h4>

          <button onClick={() => goTo("help")}>
            Get Help
          </button>

          <button>
            Safety & Privacy
          </button>

          <button>
            Trusted Resources
          </button>

          <button>
            Accessibility
          </button>
        </div>

        {/* Company */}
        <div className="nayra-footer__column">
          <h4>Company</h4>

          <button>
            About NAYRA
          </button>

          <button>
            Our approach
          </button>

          <button>
            Responsible AI
          </button>

          <button>
            Contact
          </button>
        </div>
      </div>

      {/* ==============================
          NEWSLETTER
      ============================== */}

      <div className="nayra-footer__newsletter">

        <div>
          <span className="nayra-footer__eyebrow">
            NAYRA NOTES
          </span>

          <h3>
            Small things that can make
            difficult days easier.
          </h3>

          <p>
            Occasional resources, practical guidance and
            product updates. No noise.
          </p>
        </div>

        <form
          className="nayra-footer__form"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setSubmitted(false);
            }}
            placeholder="Your email address"
            aria-label="Email address"
            required
          />

          <button type="submit">
            Subscribe
          </button>

          {submitted && (
            <span className="nayra-footer__success">
              You're on the list. 💜
            </span>
          )}
        </form>
      </div>

      {/* ==============================
          BOTTOM BAR
      ============================== */}

      <div className="nayra-footer__bottom">

        <span>
          © {new Date().getFullYear()} NAYRA.
          All rights reserved.
        </span>

        <div className="nayra-footer__legal">
          <button
            onClick={() => goTo("privacy")}
          >
            Privacy
          </button>

          <button
            onClick={() => goTo("terms")}
          >
            Terms
          </button>

          <button>
            Cookies
          </button>
        </div>

        <span className="nayra-footer__made">
          Your situation → your options → your next step.
        </span>

      </div>
    </footer>
  );
}