"use client";

import { conversation } from "@/constants/dummyConversation";
import AudioWavePlayer from "./AudioWavePlayer";
import CallControlBar from "./CallControlBar";
import TranscriptBlock from "./TranscriptBlock";

interface Props {
  showAudio?: boolean; // ← optional toggle
}

export default function CallDetailsTab({ showAudio = false }: Props) {
  // ==========================
  // CONVERSATION OBJECT ARRAY
  // ==========================

  return (
    <div className="space-y-6 px-2 pt-2 pb-6">
      {/* ========================
          CONDITIONAL PLAYER OR BAR
      ========================== */}
      {showAudio ? (
        <AudioWavePlayer audioUrl="/audio/sample-audio.mp3" />
      ) : (
        <CallControlBar
          duration="00:00:53"
          onHold={() => console.log("Hold clicked")}
          onMute={() => console.log("Mute clicked")}
          onTranscribe={() => console.log("Transcribe clicked")}
          onEndCall={() => console.log("Call ended")}
        />
      )}

      {/* ========================
          TRANSCRIBED LABEL
      ========================== */}
      <p className="text-blue-600 text-sm font-medium cursor-pointer">
        Transcribed….
      </p>

      {/* ========================
          TRANSCRIPT CONTENT
      ========================== */}
      <TranscriptBlock conversation={conversation} borderColor="#ACACAC" />
    </div>
  );
}
