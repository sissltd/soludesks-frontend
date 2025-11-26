"use client";

interface TicketMessageCardProps {
  type: "question" | "answer";
  message: string;
  phone?: string; // only for question
  timestamp: string;
  userInitials?: string; // only for answer
  userName?: string; // only for answer
}

export default function TicketMessageCard({
  type,
  message,
  phone,
  timestamp,
  userInitials,
  userName,
}: TicketMessageCardProps) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 space-y-4">
      {/* Label */}
      <span className="inline-block bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-md font-medium">
        {type === "question" ? "Question" : "Answer"}
      </span>

      {/* Message */}
      <p className="text-gray-700 text-sm leading-relaxed">{message}</p>

      {/* Question footer */}
      {type === "question" && (
        <p className="text-right text-sm font-medium">
          {phone}
          <br />
          <span className="text-gray-500 text-xs">{timestamp}</span>
        </p>
      )}

      {/* Answer footer */}
      {type === "answer" && (
        <div className="flex items-center justify-end gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-xs">
            {userInitials}
          </div>

          {/* User info */}
          <div className="text-right text-xs">
            <p className="font-medium">{userName}</p>
            <p className="text-gray-500">{timestamp}</p>
          </div>
        </div>
      )}
    </div>
  );
}
