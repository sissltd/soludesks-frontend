"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { Play, Pause } from "lucide-react";

interface Props {
  audioUrl: string;
}

export default function AudioWavePlayer({ audioUrl }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<string>("0:00");
  const [playbackRate, setPlaybackRate] = useState(1);

  // Helpers
  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" + s : s}`;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    wavesurfer.current = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "#C9C9C9",
      progressColor: "#737373",
      cursorColor: "transparent",
      height: 60,
      barGap: 2,
      barWidth: 2,
      barRadius: 2,
    });

    wavesurfer.current.load(audioUrl);

    wavesurfer.current.on("ready", () => {
      setDuration(formatTime(wavesurfer.current!.getDuration()));
    });

    wavesurfer.current.on("finish", () => {
      setIsPlaying(false);
    });

    return () => {
      wavesurfer.current?.destroy();
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (!wavesurfer.current) return;
    wavesurfer.current.playPause();
    setIsPlaying(wavesurfer.current.isPlaying());
  };

  const updateSpeed = (rate: number) => {
    setPlaybackRate(rate);
    wavesurfer.current?.setPlaybackRate(rate);
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4 w-full">
      {/* Play / Pause */}
      <button
        onClick={togglePlay}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Waveform */}
      <div className="flex-1">
        <div ref={containerRef} id="waveform" className="w-full"></div>
      </div>

      {/* Duration */}
      <span className="text-sm font-medium text-gray-700">{duration}</span>

      {/* Speed */}
      <button
        onClick={() => updateSpeed(playbackRate === 1 ? 1.5 : 1)}
        className="px-2 py-1 rounded bg-gray-100 text-xs text-gray-700 hover:bg-gray-200"
      >
        {playbackRate}x
      </button>
    </div>
  );
}
