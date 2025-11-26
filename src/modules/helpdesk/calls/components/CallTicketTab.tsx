"use client";

import { Check } from "lucide-react";
import TicketMessageCard from "./TicketMessageCard";
import EscalateTicketForm from "./EscalateTicketForm";
import ActivityLog from "./ActivityLog";

export default function CallTicketTab() {
  // Dummy escalation levels
  const steps = [
    "Customer Care",
    "Manager 1",
    "Manager 2",
    "Manager 3",
    "Manager 4",
    "Manager 5",
  ];

  const activityLog = [
    {
      name: "Ekene Umoren",
      email: "ekene.u@zmail.com",
      date: "May 1, 2024 11:00am",
      status: "Approved",
      message:
        "The user’s request has been approved after reviewing the provided documents and confirming their eligibility. All required steps have been completed.",
    },
    {
      name: "Ekene Umoren",
      email: "ekene.u@zmail.com",
      date: "Apr 20, 2024 2:00pm",
      status: "Escalate",
      message:
        "The user’s request has been escalated due to incomplete documentation. Please ensure all required information is provided.",
    },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* ===========================
            ESCALATION STEPS
      ============================ */}
      <div className="flex items-center justify-between w-full px-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-1 relative"
          >
            {/* CONNECTING LINE (Left) */}
            {index !== 0 && (
              <div className="absolute left-0 top-4 w-1/2 h-[2px] bg-gray-300"></div>
            )}

            {/* CONNECTING LINE (Right) */}
            {index !== steps.length - 1 && (
              <div className="absolute right-0 top-4 w-1/2 h-[2px] bg-gray-300"></div>
            )}

            {/* Circle */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 border-2 ${
                index === 0
                  ? "bg-green-500 border-green-500 text-white"
                  : "border-gray-300 bg-white text-gray-300"
              }`}
            >
              {index === 0 && <Check size={18} />}
            </div>

            {/* Label */}
            <span
              className={`text-xs mt-2 ${
                index === 0 ? "text-green-600 font-medium" : "text-gray-400"
              }`}
            >
              {step}
            </span>

            {/* DATE for first step (optional) */}
            <span
              className={`text-[10px] mt-1 ${
                index === 0 ? "text-gray-300" : "text-transparent"
              }`}
            >
              {index === 0 ? "04 Oct 2025" : "placeholder"}
            </span>
          </div>
        ))}
      </div>

      <TicketMessageCard
        type="question"
        message="Lorem ipsum dolor sit amet consectetur. Risus lectus nulla libero mauris. Sit dolor malesuada velit at sed consequat libero. Turpis facilisi augue id integer. Urna lacus a risus duis nisl sed augue dui."
        phone="+234 555-0105"
        timestamp="23 Jun, 2:34pm"
      />

      <TicketMessageCard
        type="answer"
        message="Lorem ipsum dolor sit amet consectetur. Risus lectus nulla libero mauris. Sit dolor malesuada velit at sed consequat libero…"
        userInitials="JW"
        userName="Jenny Wilson"
        timestamp="23 Jun, 2:34pm"
      />

      {/* ===========================
            ESCALATE TICKET FORM
      ============================ */}
      <EscalateTicketForm />

      {/* ===========================
            ACTIVITY LOG
      ============================ */}
      <ActivityLog activityLog={activityLog} />
    </div>
  );
}
