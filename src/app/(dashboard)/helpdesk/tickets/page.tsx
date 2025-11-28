"use client";

import { useState } from "react";
import { Add, CallIncoming, HomeWifi, PlayCircle } from "iconsax-react";

import PageHeader from "@/components/shared/PageHeader";
import DrawerModal from "@/components/shared/DrawerModal";
import KpiCard from "@/modules/helpdesk/calls/components/KpiCard";
import DataTable from "@/components/shared/DataTable";
import DataTableHeader from "@/modules/helpdesk/locations/components/DataTableHeader";

import { ticketColumnsActive } from "@/modules/helpdesk/tickets/columns/ticketColumnsActive";
import { ticketColumnsClosed } from "@/modules/helpdesk/tickets/columns/ticketColumnsClosed";

import CreateTicketForm from "@/modules/helpdesk/calls/components/CreateTicketForm";
import { activeTickets, closedTickets } from "@/constants/dummyDatas";

export default function TicketComplaintsPage() {
  const [tab, setTab] = useState<"extensions" | "agents">("extensions");
  const [showTicketModal, setShowTicketModal] = useState(false);

  const tableData = tab === "extensions" ? activeTickets : closedTickets;
  const columns =
    tab === "extensions" ? ticketColumnsActive : ticketColumnsClosed;

  return (
    <>
      <div className="p-8 space-y-8">
        {/* HEADER */}
        <PageHeader
          title="Tickets"
          subtitle="Quickly view and manage all support tickets."
          buttonText="Create Ticket"
          buttonIcon={<Add size={20} variant="Linear" color="#fff" />}
          onButtonClick={() => setShowTicketModal(true)}
        />

        {/* KPI ROW */}
        <div className="grid grid-cols-3 gap-4">
          <KpiCard
            title="Total Ticket Logged"
            value="210"
            bg="#F7F2FF"
            iconBg="#EFE6FF"
            icon={<HomeWifi size={28} color="#A66AFE" variant="Linear" />}
          />

          <KpiCard
            title="Active Tickets"
            value="33"
            bg="#E9FFE9"
            iconBg="#C8FFC8"
            icon={<PlayCircle size={28} color="#3ECB4B" variant="Linear" />}
          />

          <KpiCard
            title="Closed Tickets"
            value="167"
            bg="#FFF1ED"
            iconBg="#FFD5CC"
            icon={<CallIncoming size={28} color="#FF6B5E" variant="Linear" />}
          />
        </div>

        {/* TABLE SECTION */}
        <div className="w-full">
          <DataTableHeader
            activeTab={tab}
            setActiveTab={setTab}
            extensionsCount={activeTickets.length}
            agentsCount={closedTickets.length}
            tab1Label="Active"
            tab2Label="Closed"
            showStatus={true}
          />

          <DataTable
            data={tableData}
            columns={columns}
            initialPageSize={10}
            className="rounded-b-xl rounded-t-none"
            clickableRows
          />
        </div>
      </div>

      {/* CREATE TICKET MODAL */}
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
        secondaryButtonText="Cancel"
        onSecondaryClick={() => setShowTicketModal(false)}
      >
        <CreateTicketForm onSuccess={() => setShowTicketModal(false)} />
      </DrawerModal>
    </>
  );
}
