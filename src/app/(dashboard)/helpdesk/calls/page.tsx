"use client";

import { useState } from "react";
import { HomeWifi, CallIncoming, PlayCircle, Add } from "iconsax-react";

import CallCenterTable from "@/modules/helpdesk/calls/components/CallCenterTable";
import KpiCard from "@/modules/helpdesk/calls/components/KpiCard";
import DrawerModal from "@/components/shared/DrawerModal"; // ⬅ your new reusable drawer
import CreateTicketForm from "@/modules/helpdesk/calls/components/CreateTicketForm"; // ⬅ the ticket form you built
import PageHeader from "@/components/shared/PageHeader";

export default function CallCenterPage() {
  // ==========================
  // MODAL STATE
  // ==========================
  const [showTicketModal, setShowTicketModal] = useState(false);

  return (
    <>
      <div className="p-8 space-y-6">
        {/* HEADER */}
        <PageHeader
          title="Call Center"
          subtitle="Handle calls, view logs, and manage settings."
          buttonText="Create Ticket"
          buttonIcon={<Add size={20} variant="Linear" color="#fff" />}
          onButtonClick={() => setShowTicketModal(true)}
        />

        {/* KPI ROW */}
        <div className="grid grid-cols-3 gap-4">
          <KpiCard
            title="Total Call Logged"
            value="324"
            bg="#F7F2FF"
            iconBg="#F1E8FD"
            icon={<HomeWifi size={28} variant="Linear" color="#A66AFE" />}
          />

          <KpiCard
            title="Active Calls"
            value="233"
            bg="#E9FFE9"
            iconBg="#B7FCB7"
            icon={<PlayCircle size={28} variant="Linear" color="#00A500" />}
          />

          <KpiCard
            title="Linked Calls"
            value="33"
            bg="#E9FBFF"
            iconBg="#CCFCFF"
            icon={<CallIncoming size={28} variant="Linear" color="#00C2FF" />}
          />
        </div>

        {/* TABLE WRAPPER */}
        <div
          className="rounded-xl border bg-card p-6"
          style={{ borderColor: "var(--border)" }}
        >
          <CallCenterTable />
        </div>

        {/* ================================================== */}
        {/* TICKET CREATION MODAL (REUSABLE DRAWER) */}
        {/* ================================================== */}
      </div>
      <DrawerModal
        open={showTicketModal}
        onClose={() => setShowTicketModal(false)}
        title="Create Ticket"
        primaryButtonText="Create Ticket"
        onPrimaryClick={() => {
          const form = document.querySelector(
            "#create-ticket-form"
          ) as HTMLFormElement;
          form?.requestSubmit();
        }}
        primaryDisabled={false}
        secondaryButtonText="Cancel"
        onSecondaryClick={() => setShowTicketModal(false)}
      >
        <CreateTicketForm
          onSuccess={() => {
            setShowTicketModal(false);
          }}
        />
      </DrawerModal>
    </>
  );
}
