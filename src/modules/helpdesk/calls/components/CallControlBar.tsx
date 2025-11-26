"use client";

import { CirclePause, MicOff, AlignLeft, PhoneOff } from "lucide-react";

interface Props {
  duration?: string;
  onHold?: () => void;
  onMute?: () => void;
  onTranscribe?: () => void;
  onEndCall?: () => void;
}

export default function CallControlBar({
  duration = "00:00:53",
  onHold,
  onMute,
  onTranscribe,
  onEndCall,
}: Props) {
  return (
    <div className="bg-[#062A4D] rounded-xl py-4 px-6 flex items-center justify-between">
      {/* Left: Timer */}
      <div className="flex items-center gap-2 text-white font-medium">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span>{duration}</span>
      </div>

      {/* Middle Buttons */}
      <div className="flex items-center bg-white rounded-xl px-6 py-4 w-[60%] justify-between shadow-sm">
        {/* Hold */}
        <button
          onClick={onHold}
          className="flex items-center gap-3 text-[#062A4D] hover:opacity-80"
        >
          <CirclePause size={24} />
          <span className="text-base font-medium">Hold</span>
        </button>

        {/* Mute */}
        <button
          onClick={onMute}
          className="flex items-center gap-3 text-[#062A4D] hover:opacity-80"
        >
          <MicOff size={24} />
          <span className="text-base font-medium">Mute</span>
        </button>

        {/* Transcribe */}
        <button
          onClick={onTranscribe}
          className="flex items-center gap-3 text-[#062A4D] hover:opacity-80"
        >
          <AlignLeft size={24} />
          <span className="text-base font-medium">Transcribe</span>
        </button>
      </div>

      {/* End Call */}
      <button
        onClick={onEndCall}
        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow flex items-center justify-center"
      >
        <PhoneOff size={24} />
      </button>
    </div>
  );
}
