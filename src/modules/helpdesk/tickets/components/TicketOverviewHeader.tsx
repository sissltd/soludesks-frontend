"use client";

import { ArrowLeft, User } from "iconsax-react";

interface Props {
  title: string;
  agentName: string;
  ticketId: string;
  status: string;
  priority: string;
  channel: string;
  department: string;
  onBack?: () => void;
  onCloseTicket?: () => void;
}

export default function TicketOverviewHeader({
  title,
  agentName,
  ticketId,
  status,
  priority,
  channel,
  department,
  onBack,
  onCloseTicket,
}: Props) {
  return (
    <div className="w-full space-y-6">
      {/* ========================= TOP BAR ========================= */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
          >
            <ArrowLeft size={22} color="#4B5563" />
          </button>

          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        </div>

        {/* Close Ticket button */}
        <button
          onClick={onCloseTicket}
          className="bg-[#FF5A2C] hover:bg-[#e64c1f] text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-2"
        >
          ✕ Close Ticket
        </button>
      </div>

      {/* ========================= MAIN PANEL ========================= */}
      <div className="border border-[#D0D9FF] bg-[#F7FAFF] rounded-xl p-6 relative">
        {/* ------- LEFT SECTION ------- */}
        <div className="space-y-4">
          <p className="text-gray-700 text-sm">
            <span className="font-semibold">Agent:</span>{" "}
            <span className="inline-flex items-center gap-2">
              <User size={16} /> {agentName}
            </span>
          </p>

          <p className="text-gray-700 text-sm">
            <span className="font-semibold">Ticket:</span> {ticketId}
          </p>

          {/* TAGS */}
          <div className="flex items-center gap-3 pt-1">
            {/* Status Tag */}
            <span className="px-4 py-1 rounded-full border border-[#1EC661] bg-white text-[#1EC661] text-sm">
              {status}
            </span>

            {/* Priority Tag */}
            <span className="px-4 py-1 rounded-full bg-[#FFF3E0] text-[#E29800] text-sm border border-[#F9D18B]">
              ● {priority} Priority
            </span>

            {/* Channel Tag */}
            <span className="px-4 py-1 rounded-full border text-gray-600 text-sm bg-white">
              {channel}
            </span>
          </div>
        </div>

        {/* ------- RIGHT SECTION ------- */}
        <div className="absolute right-6 bottom-6 flex items-center gap-3">
          <span className="w-4 h-4 rounded-full border border-gray-400"></span>
          <span className="text-sm text-gray-700">{department}</span>
        </div>
      </div>
    </div>
  );
}
