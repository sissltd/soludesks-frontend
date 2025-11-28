"use client";

import { useEffect, useState } from "react";
import StatusBadge from "@/components/shared/StatusBadge";

import AgentProfileHeader from "./AgentProfileHeader";
import AgentKpiRow from "./AgentKpiRow";
import DataTable from "@/components/shared/DataTable";

import { agentExtensionColumns } from "../columns/agentExtensionColumns";
import { agentCallHistoryColumns } from "../columns/agentCallHistoryColumns";
import {
  RefreshSquare,
  ShieldSecurity,
  Trash,
  UserMinus,
  UserRemove,
} from "iconsax-react";
import AgentActionButton from "./AgentActionButton";

interface AgentDetailsModalProps {
  agent?: any;
  onClose: () => void;

  onResetPassword?: () => void;
  onReassign?: () => void;
  onSuspend?: () => void;
  onDelete?: () => void;
}

export default function AgentDetailsModal({
  agent,
  onClose,
  onResetPassword,
  onReassign,
  onSuspend,
  onDelete,
}: AgentDetailsModalProps) {
  const [tab, setTab] = useState<"extensions" | "calls">("extensions");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!agent) return null;

  return (
    <div className="space-y-6">
      {/* TOP INFO */}
      <div className="bg-white rounded-xl border p-6 flex flex-col gap-4">
        <AgentProfileHeader
          avatar={agent.avatar}
          name={agent.name}
          email={agent.email}
          status={agent.status}
          agentId={agent.agentId}
          location={agent.location}
        />

        <AgentKpiRow
          totalCalls={agent.totalCalls}
          resolved={agent.resolved}
          csScore={agent.csScore}
        />
      </div>

      {/* TABS */}
      <div className="flex items-center border-b">
        <button
          className={`px-4 py-2 text-sm font-medium border-b-2 ${
            tab === "extensions"
              ? "text-blue-600 border-blue-600"
              : "text-gray-400 border-transparent"
          }`}
          onClick={() => setTab("extensions")}
        >
          Extension history
        </button>

        <button
          className={`px-4 py-2 text-sm font-medium border-b-2 ${
            tab === "calls"
              ? "text-blue-600 border-blue-600"
              : "text-gray-400 border-transparent"
          }`}
          onClick={() => setTab("calls")}
        >
          Call history
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="min-h-[300px]">
        {tab === "extensions" && (
          <DataTable
            data={agent.extensionHistory}
            columns={agentExtensionColumns}
            initialPageSize={7}
          />
        )}

        {tab === "calls" && (
          <DataTable
            data={agent.callHistory}
            columns={agentCallHistoryColumns}
            initialPageSize={7}
          />
        )}
      </div>

      {/* ACTION BUTTONS */}
      <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-xl p-6 mt-6">
        {/* Reset Password */}
        <AgentActionButton
          label="Reset Password"
          icon={<ShieldSecurity size={22} variant="Linear" color="#fff" />}
          bg="#1D4ED8"
          color="#fff"
          onClick={onResetPassword}
        />

        {/* Reassign */}
        <AgentActionButton
          label="Re Assign"
          icon={<RefreshSquare size={22} variant="Linear" color="#fff" />}
          bg="#000"
          color="#fff"
          onClick={onReassign}
        />

        {/* Suspend Account */}
        <AgentActionButton
          label="Suspend Account"
          icon={<UserMinus size={22} variant="Linear" color="#FF5025" />}
          bg="#fff"
          color="#FF5025"
          borderColor="#FF5025"
          onClick={onSuspend}
        />

        {/* Delete Account */}
        <AgentActionButton
          label="Delete Account"
          icon={<UserRemove size={22} variant="Linear" color="#fff" />}
          bg="#DC2626"
          color="#fff"
          onClick={onDelete}
        />
      </div>
    </div>
  );
}
