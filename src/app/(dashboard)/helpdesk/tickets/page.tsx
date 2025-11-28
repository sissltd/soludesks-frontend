"use client";

import DrawerModal from "@/components/shared/DrawerModal";
import PageHeader from "@/components/shared/PageHeader";
import CreateTicketForm from "@/modules/helpdesk/calls/components/CreateTicketForm";
import KpiCard from "@/modules/helpdesk/calls/components/KpiCard";
import { Add, CallIncoming, HomeWifi, PlayCircle } from "iconsax-react";
import { useState } from "react";

const ticketComplaintsPage = () => {
  const [showTicketModal, setShowTicketModal] = useState(false);

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

        <div className="grid grid-cols-3 gap-4">
          <KpiCard
            title="Total Ticket Logged"
            value="210"
            bg="#F7F2FF"
            iconBg="#EFE6FF"
            icon={<HomeWifi size={28} variant="Linear" color="#A66AFE" />}
          />

          <KpiCard
            title="Active Tickets"
            value="33"
            bg="#E9FFE9"
            iconBg="#C8FFC8"
            icon={<PlayCircle size={28} variant="Linear" color="#3ECB4B" />}
          />

          <KpiCard
            title="Closed Tickets"
            value="167"
            bg="#FFF1ED"
            iconBg="#FFD5CC"
            icon={<CallIncoming size={28} variant="Linear" color="#FF6B5E" />}
          />
        </div>
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
};
export default ticketComplaintsPage;
