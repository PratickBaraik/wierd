import musicicon from "./assets/music_icon.png";
import { useAudio } from "../../../context/AudioContext";
import PlayButton from "./assets/playButton.png";
import PauseButton from "./assets/pauseButton.png";

export default function AudioPlayer() {
  const { playing, toggleAudio } = useAudio();

  const delays = [
    0.35, 0.3, 0.25, 0.2, 0.15, 0.1, 0.05, 0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3,
    0.35,
  ];

  return (
    <div className="relative flex items-center gap-5 w-full max-w-95 h-20 px-5 py-3 rounded-2xl bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg">
      {/* icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/40 dark:bg-white/10">
        <img src={musicicon} alt="music" className="w-[60%]" />
      </div>

      {/* waveform */}
      <div className="flex flex-1 items-end justify-center gap-1">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            style={{
              animationDelay: `${delays[i]}s`,
              animationPlayState: playing ? "running" : "paused",
            }}
            className={`
              w-1
              h-8
              rounded-full
              bg-black dark:bg-white
              origin-bottom
              animate-wave
              transition-opacity duration-300
              ${playing ? "opacity-100" : "opacity-40"}
            `}
          />
        ))}
      </div>

      {/* button */}
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
  );
}
