"use client";

import { User } from "iconsax-react";
import { Plus } from "lucide-react";

interface Props {
  call?: any;
  onCreateTicket: () => void;
  ticketCreated?: boolean;
  ticketId?: string;
}

export default function CallTopInfoCard({
  call,
  onCreateTicket,
  ticketCreated = false,
  ticketId = "A1B2C3",
}: Props) {
  return (
    <div className="p-4 rounded-xl border border-blue-300 bg-blue-50">
      {/* ================= BEFORE TICKET CREATION ================= */}
      {!ticketCreated && (
        <div className="flex justify-between items-start">
          {/* LEFT */}
          <div className="space-y-3 text-sm text-gray-700">
            <p className="flex items-center gap-2">
              <span className="font-medium">Agent:</span>
              <span className="flex items-center gap-2 ml-2">
                <User size={16} variant="Linear" color="#1f2937" />
                {call?.agent ?? "Ofonime Udoh"}
              </span>
            </p>

            <p className="flex items-center gap-2">
              <span className="font-medium">Duration:</span>
              <span className="ml-2">{call?.duration ?? "00:00:53"}</span>
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-end space-y-3">
            <p className="text-sm">
              <span className="font-medium">Status:</span>{" "}
              <span className="text-green-600 font-semibold">
                {call?.status ?? "Active"}
              </span>
            </p>

            <button
              className="flex items-center gap-1 text-blue-600 text-sm font-semibold cursor-pointer"
              onClick={onCreateTicket}
            >
              <Plus size={16} /> Create Ticket
            </button>
          </div>
        </div>
      )}

      {/* ================= AFTER TICKET CREATION ================= */}
      {ticketCreated && (
        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex justify-between">
            <p>
              <span className="font-medium">Agent:</span>{" "}
              <span className="ml-2 flex items-center gap-2">
                <User size={16} variant="Linear" color="#1f2937" />
                {call?.agent ?? "Ofonime Udoh"}
              </span>
            </p>

            <p>
              <span className="font-medium">Status:</span>{" "}
              <span className="text-green-600 font-semibold">Active</span>
            </p>
          </div>

          <div className="flex justify-between">
            <p>
              <span className="font-medium">Duration:</span>{" "}
              {call?.duration ?? "00:00:53"}
            </p>

            <p>
              <span className="font-medium">Ticket:</span> {ticketId}
            </p>
          </div>

          {/* Pills */}
          <div className="flex gap-3">
            <span className="px-4 py-1 rounded-full border border-green-500 text-green-600 text-xs">
              Open
            </span>

            <span className="px-4 py-1 rounded-full border border-orange-500 text-orange-500 text-xs flex items-center gap-1">
              <span className="size-2 bg-orange-500 rounded-full"></span>
              Medium Priority
            </span>

            <span className="px-4 py-1 rounded-full border text-gray-500 text-xs">
              Phone
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
