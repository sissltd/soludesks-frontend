"use client";

import KpiCard from "@/modules/helpdesk/calls/components/KpiCard";
import { Award, CallIncoming, Message, TickCircle } from "iconsax-react";

interface AgentKpiRowProps {
  totalCalls: number | string;
  resolved: number | string;
  csScore: number | string;
}

export default function AgentKpiRow({
  totalCalls,
  resolved,
  csScore,
}: AgentKpiRowProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Total Calls */}
      <KpiCard
        title="Total Calls"
        value={totalCalls.toString()}
        bg="#f4f4f4"
        iconBg="#CCFCFF"
        icon={<CallIncoming size={26} color="#1E6FFB" variant="Linear" />}
      />

      {/* Resolved */}
      <KpiCard
        title="Resolved"
        value={resolved.toString()}
        bg="#f4f4f4"
        iconBg="#CFFFD0"
        icon={<TickCircle size={26} color="#32CD32" variant="Linear" />}
      />

      {/* CS Score */}
      <KpiCard
        title="CS Score"
        value={csScore.toString()}
        bg="#f4f4f4"
        iconBg="#FFE1D0"
        icon={<Award size={26} color="#FF7F50" variant="Linear" />}
      />
    </div>
  );
}
