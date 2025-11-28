"use client";

import TicketOverviewHeader from "@/modules/helpdesk/tickets/components/TicketOverviewHeader";

const TicketDetailsPage = () => {
  return (
    <div className="p-8">
      <TicketOverviewHeader
        title="Problem with my Payment"
        agentName="Ofonime Udoh"
        ticketId="A1B2C3"
        status="Open"
        priority="Medium"
        channel="Phone"
        department="Customer Care"
        onBack={() => console.log("Go back")}
        onCloseTicket={() => console.log("Close Ticket")}
      />
    </div>
  );
};

export default TicketDetailsPage;
