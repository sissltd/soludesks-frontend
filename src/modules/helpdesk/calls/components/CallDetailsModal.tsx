"use client";

import { useEffect, useState } from "react";
import { X, Plus } from "lucide-react";
import { User } from "iconsax-react";

import CallDetailsTab from "./CallDetailsTab";
import CallTicketTab from "./CallTicketTab";
import SecurityQuestionModal from "./SecurityQuestionModal";
import CallTopInfoCard from "./CallTopInfoCard";

interface Props {
  open: boolean;
  onClose: () => void;
  call?: any;
}

export default function CallDetailsModal({ open, onClose, call }: Props) {
  const [tab, setTab] = useState<"details" | "ticket">("details");
  const [showSecurityModal, setShowSecurityModal] = useState(false);
  const [ticketCreated, setTicketCreated] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-[9998] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-xl rounded-l-xl border-l border-gray-200
          transition-transform duration-300 overflow-y-auto z-[9999]
          w-full sm:w-1/2
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b h-16 rounded-tl-xl">
          <h2 className="text-xl font-semibold">Call Details</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 space-y-6">
          <CallTopInfoCard
            call={call}
            ticketCreated={ticketCreated}
            onCreateTicket={() => setShowSecurityModal(true)}
          />

          {/* TABS */}
          <div className="flex items-center border-b">
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                tab === "details"
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-400 border-transparent"
              }`}
              onClick={() => setTab("details")}
            >
              Call Details
            </button>

            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                tab === "ticket"
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-400 border-transparent"
              }`}
              onClick={() => setTab("ticket")}
            >
              Ticket
            </button>
          </div>

          {/* TAB CONTENT */}
          <div className="pt-0 min-h-[300px]">
            {tab === "details" && (
              <CallDetailsTab showAudio={call?.showAudio} />
            )}
            {tab === "ticket" && <CallTicketTab />}
          </div>
        </div>
      </div>

      <SecurityQuestionModal
        open={showSecurityModal}
        onClose={() => setShowSecurityModal(false)}
        onSuccess={() => {
          setShowSecurityModal(false);
          setTicketCreated(true);
        }}
      />
    </>
  );
}
