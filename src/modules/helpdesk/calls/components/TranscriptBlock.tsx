"use client";

interface TranscriptEntry {
  speaker: string;
  text: string;
}

interface Props {
  conversation: TranscriptEntry[];
  borderColor?: string; // optional override
}

export default function TranscriptBlock({
  conversation,
  borderColor = "#ACACAC",
}: Props) {
  return (
    <div
      className="pl-4 text-sm leading-relaxed space-y-4 text-gray-700 border-l-4"
      style={{ borderColor }}
    >
      {conversation.map((entry, index) => (
        <p key={index} className="space-y-1">
          <strong>{entry.speaker}:</strong>{" "}
          <span className="whitespace-pre-line">{entry.text.trim()}</span>
        </p>
      ))}
    </div>
  );
}
