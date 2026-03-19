import { useMemo } from "react";
import musicIcon from "./assets/musicIcon.png";
import { useAudio } from "../../../context/AudioContext";
import PlayButton from "./assets/playButton.png";
import PauseButton from "./assets/pauseButton.png";

export default function AudioPlayer() {
  const { playing, toggleAudio } = useAudio();

  // Stable random values (generated once)
  const bars = useMemo(() => {
    return Array.from({ length: 15 }).map(() => {
      const min = (Math.random() * 0.15 + 0.55).toFixed(2); // tighter base
      const max = (Math.random() * 0.4 + 1.2).toFixed(2); // controlled peak (reduced)
      const duration = (Math.random() * 0.8 + 1.4).toFixed(2);
      const delay = (Math.random() * 0.5).toFixed(2);

      return { min, max, duration, delay };
    });
  }, []);

  return (
    <>
      {/* ================= INTERNAL CSS ================= */}
      <style>
        {`
          @keyframes wave {
            0%, 100% {
              transform: scaleY(var(--min-scale));
            }
            50% {
              transform: scaleY(var(--max-scale));
            }
          }

          .wave {
            animation-name: wave;
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-iteration-count: infinite;
          }
        `}
      </style>

      {/* ================= COMPONENT ================= */}
      <div className="relative flex items-center gap-5 w-full max-w-95 h-20 px-5 py-3 rounded-2xl bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg">
        {/* ================= ICON ================= */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/40 dark:bg-white/10">
          <img src={musicIcon} alt="music" className="w-[60%]" />
        </div>

        {/* ================= WAVEFORM WRAPPER (SAFE ZONE) ================= */}
        <div className="flex flex-1 items-center justify-center px-2 py-2 overflow-hidden">
          {/* Inner container keeps waveform centered */}
          <div className="flex items-center justify-center gap-1 h-full">
            {bars.map((bar, i) => (
              <span
                key={i}
                className={`
                  w-0.75
                  h-8                 /* slightly reduced base height */
                  rounded-full
                  bg-black dark:bg-white
                  origin-center
                  wave
                  transition-opacity duration-300
                  ${playing ? "opacity-100" : "opacity-40"}
                `}
                style={
                  {
                    "--min-scale": bar.min,
                    "--max-scale": bar.max,
                    animationDuration: `${bar.duration}s`,
                    animationDelay: `${bar.delay}s`,
                    animationPlayState: playing ? "running" : "paused",
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>

        {/* ================= BUTTON ================= */}
        <button
          onClick={toggleAudio}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/70 dark:bg-white/15"
        >
          <img
            src={playing ? PauseButton : PlayButton}
            alt="toggle"
            className="w-6"
          />
        </button>
      </div>
    </>
  );
}
