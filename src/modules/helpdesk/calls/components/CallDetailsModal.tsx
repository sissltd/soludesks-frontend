"use client";

import { useEffect, useState } from "react";
import DrawerModal from "@/components/shared/DrawerModal";

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
      {/* Main Drawer */}
      <DrawerModal open={open} onClose={onClose} title="Call Details">
        <div className="space-y-6">
          {/* TOP INFO CARD */}
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
      </DrawerModal>

      {/* SECURITY MODAL */}
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
