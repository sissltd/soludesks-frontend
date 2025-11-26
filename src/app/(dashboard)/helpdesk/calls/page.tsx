"use client";

import { HomeWifi, CallIncoming, PlayCircle, Add } from "iconsax-react";
import CallCenterTable from "@/modules/helpdesk/calls/components/CallCenterTable";
import KpiCard from "@/modules/helpdesk/calls/components/KpiCard";

export default function CallCenterPage() {
  return (
    <div className="p-8 space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Call Center</h2>
          <p className="text-sm text-muted-foreground">
            Handle calls, view logs, and manage settings.
          </p>
        </div>

        <button className="bg-(--primary-6) text-white px-2 py-2 rounded-md shadow flex items-center w-[12%]">
          <Add size={20} variant="Linear" color="#ffff" className="mr-3" />{" "}
          Create Ticket
        </button>
      </div>

      {/* KPI ROW */}
      <div className="flex justify-between items-center gap-4">
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
    </div>
  );
}
