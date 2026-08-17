import { useState } from "react";

export function ResourcePrivacy() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] =
    useState(false);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <>
      <section className="resources-your-space">
        <div>
          <span className="eyebrow">
            YOUR SPACE
          </span>

          <h2>Your story belongs to you.</h2>
        </div>

        <p>
          You choose what you share with NAYRA. You can
          explore resources without explaining your entire
          situation.
        </p>

        <div className="privacy-points">
          <span>🔒 You choose what to share</span>
          <span>🌱 Explore at your own pace</span>
          <span>↗ Specialist sources when needed</span>
        </div>
      </section>

      <section className="resources-newsletter">
        <div>
          <span className="eyebrow">
            STAY IN THE LOOP
          </span>

          <h2>
            Useful information, when you want it.
          </h2>

          <p>
            Get occasional updates about new guides,
            resources and features from NAYRA.
          </p>
        </div>

        {subscribed ? (
          <div className="newsletter-success">
            <strong>You're subscribed ✓</strong>
            <span>
              We'll only send useful NAYRA updates.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="newsletter-form">
              <input
                type="email"
                required
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="Your email address"
                aria-label="Email address"
              />

              <button type="submit">
                Subscribe →
              </button>
            </div>

            <label className="newsletter-consent">
              <input type="checkbox" required />
              <span>
                I agree to receive occasional NAYRA
                updates.
              </span>
            </label>

            <small>
              No spam. Unsubscribe anytime.
            </small>
          </form>
        )}
      </section>
    </>
  );
}