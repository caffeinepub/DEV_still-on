import { useCallback, useState } from "react";

export default function App() {
  const [isOn, setIsOn] = useState(true);

  const toggle = useCallback(() => {
    setIsOn((prev) => !prev);
  }, []);

  return (
    <div
      className={`${isOn ? "" : "dark"} transition-smooth`}
      style={{ colorScheme: isOn ? "light" : "dark" }}
    >
      <div
        className="h-screen w-screen overflow-hidden bg-background text-foreground transition-smooth flex flex-col"
        data-ocid="app-root"
      >
        {/* Hero — centered */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-5 select-none">
            <h1
              className="font-display font-bold tracking-tight leading-none"
              style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
            >
              Still On.
            </h1>

            {/* Light Bulb */}
            <button
              type="button"
              onClick={toggle}
              aria-label={isOn ? "Turn off the light" : "Turn on the light"}
              aria-pressed={isOn}
              data-ocid="bulb-toggle"
              className="group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full p-1 transition-smooth"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            >
              {isOn ? <BulbOn /> : <BulbOff />}
            </button>
          </div>
        </div>

        {/* Footer tagline — pinned bottom-right */}
        <footer className="p-6 sm:p-8 flex justify-end">
          <p
            className="font-body text-muted-foreground transition-smooth text-right"
            style={{
              fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
              opacity: 0.6,
              lineHeight: "1.6",
            }}
            data-ocid="footer-tagline"
          >
            When the rest of the web is down.
            <br />
            Built with{" "}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-100 transition-smooth"
              style={
                !isOn
                  ? {
                      color: "#DCFF1E",
                      textDecoration: "underline",
                      textDecorationColor: "#DCFF1E",
                    }
                  : undefined
              }
            >
              caffeine
            </a>
            . Powered by{" "}
            <a
              href="https://internetcomputer.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-100 transition-smooth"
              style={
                !isOn
                  ? {
                      color: "#29ABE2",
                      textDecoration: "underline",
                      textDecorationColor: "#29ABE2",
                    }
                  : undefined
              }
            >
              ICP
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

function BulbOn() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      aria-hidden="true"
      className="drop-shadow-[0_0_18px_oklch(0.68_0.14_54/0.7)] transition-smooth"
    >
      {/* Glow halo */}
      <circle cx="32" cy="26" r="22" fill="oklch(0.68 0.14 54 / 0.15)" />
      {/* Bulb glass */}
      <path
        d="M20 26a12 12 0 1 1 24 0c0 5-2.5 9-6 11.5V42a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-4.5C22.5 35 20 31 20 26Z"
        fill="oklch(0.68 0.14 54 / 0.9)"
        stroke="oklch(0.62 0.16 54)"
        strokeWidth="1.5"
      />
      {/* Filament */}
      <path
        d="M27 35 Q32 29 37 35"
        stroke="oklch(0.90 0.08 80)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Base rings */}
      <rect
        x="26"
        y="42"
        width="12"
        height="2"
        rx="1"
        fill="oklch(0.55 0.08 54)"
      />
      <rect
        x="27"
        y="45.5"
        width="10"
        height="2"
        rx="1"
        fill="oklch(0.55 0.08 54)"
      />
      {/* Shine */}
      <ellipse
        cx="27.5"
        cy="21"
        rx="2.5"
        ry="4"
        fill="oklch(0.98 0 0 / 0.35)"
        transform="rotate(-15 27.5 21)"
      />
    </svg>
  );
}

function BulbOff() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      aria-hidden="true"
      className="transition-smooth opacity-50"
    >
      {/* Bulb glass outline */}
      <path
        d="M20 26a12 12 0 1 1 24 0c0 5-2.5 9-6 11.5V42a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-4.5C22.5 35 20 31 20 26Z"
        fill="oklch(0.5 0.01 70 / 0.15)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Filament broken */}
      <path
        d="M27 35 Q29 32 31 34"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M33 33 Q35 31 37 35"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Base rings */}
      <rect
        x="26"
        y="42"
        width="12"
        height="2"
        rx="1"
        fill="currentColor"
        opacity="0.3"
      />
      <rect
        x="27"
        y="45.5"
        width="10"
        height="2"
        rx="1"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}
