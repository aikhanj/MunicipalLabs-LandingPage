'use client';

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";

type AudioContextValue = {
  muted: boolean;
  toggle: () => void;
  play: (type?: "click" | "success") => void;
};

const AudioContext = createContext<AudioContextValue | undefined>(undefined);

const toneMap: Record<string, string> = {
  click:
    "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=",
  success:
    "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA="
};

export function AudioProvider({ children }: { children: ReactNode }) {
  const [muted, setMuted] = useState(true);

  const toggle = useCallback(() => setMuted((prev) => !prev), []);

  const play = useCallback(
    (type: "click" | "success" = "click") => {
      if (muted) return;
      const audio = new Audio(toneMap[type]);
      audio.volume = type === "success" ? 0.5 : 0.3;
      void audio.play().catch(() => {
        // ignore playback errors (e.g., autoplay restrictions)
      });
    },
    [muted]
  );

  const value = useMemo(
    () => ({
      muted,
      toggle,
      play
    }),
    [muted, toggle, play]
  );

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return context;
}

