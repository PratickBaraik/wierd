import musicicon from "./assets/music_icon.png";
import { useAudio } from "../../../context/AudioContext";
import PlayButton from "./assets/playButton.png";
import PauseButton from "./assets/pauseButton.png";

export default function AudioPlayer() {
  const { playing, toggleAudio } = useAudio();

  /* symmetric animation delays (center leads) */
  const delays = [
    0.35, 0.3, 0.25, 0.2, 0.15, 0.1, 0.05, 0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3,
    0.35,
  ];

  return (
    <div
      className="
      relative
      flex items-center gap-5
      w-full max-w-[380px]
      h-[72px]
      px-5 py-3
      rounded-2xl

      bg-white/20
      dark:bg-white/5

      backdrop-blur-xl
      border border-white/30
      dark:border-white/10

      shadow-lg
      transition-all duration-300
      hover:-translate-y-[2px]
      hover:shadow-xl
      "
    >
      {/* glass reflection */}
      <div
        className="
        pointer-events-none
        absolute inset-0
        rounded-2xl
        bg-gradient-to-br
        from-white/20
        to-transparent
        opacity-40
        "
      />

      {/* music icon */}
      <div
        className="
        relative z-10
        w-[48px] h-[48px]
        flex items-center justify-center
        rounded-full
        overflow-hidden
        bg-white/40
        dark:bg-white/10
        backdrop-blur-md
        border border-white/30
        "
      >
        <img
          src={musicicon}
          alt="music icon"
          className="w-[60%] h-[60%] object-contain"
        />
      </div>

      {/* waveform */}
      <div className="relative z-10 flex flex-1 items-end justify-center gap-[5px] min-w-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            style={{
              animationDelay: `${delays[i]}s`,
              animationPlayState: playing ? "running" : "paused",
            }}
            className="
              w-[4px]
              h-[24px]
              rounded-full
              bg-neutral-800
              dark:bg-neutral-200
              origin-bottom
              animate-wave
            "
          />
        ))}
      </div>

      {/* play / pause */}
      <button
        onClick={toggleAudio}
        aria-label={playing ? "Pause music" : "Play music"}
        className="
        relative z-10
        w-[48px] h-[48px]
        flex items-center justify-center
        rounded-full
        bg-white/60
        dark:bg-white/15
        backdrop-blur-md
        border border-white/40
        shadow-md
        transition-all duration-200
        hover:scale-105
        hover:bg-white/80
        dark:hover:bg-white/25
        active:scale-95
        "
      >
        <img
          src={playing ? PauseButton : PlayButton}
          alt={playing ? "Pause music" : "Play music"}
          className="w-[24px] h-[24px] transition-transform duration-200"
        />
      </button>
    </div>
  );
}
