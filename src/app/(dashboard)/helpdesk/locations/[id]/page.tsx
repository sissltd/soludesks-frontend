"use client";

import { useState } from "react";
import DataTable from "@/components/shared/DataTable";
import StatusBadge from "@/components/shared/StatusBadge";
import DetailRow from "@/modules/helpdesk/locations/components/DetailRow";
import { extensionsColumns } from "@/modules/helpdesk/locations/columns/extensionsColumns";
import { agentsColumns } from "@/modules/helpdesk/locations/columns/agentsColumns";

import { ArrowLeft, Add } from "iconsax-react";
import { useRouter } from "next/navigation";
import { agents, extensions } from "@/constants/dummyDatas";

export default function LocationDetailsPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"extensions" | "agents">(
    "extensions"
  );

  const location = {
    title: "PTAD HQ – Abuja DC",
    username: "cti_admin",
    ip: "10.10.10.12",
    mac: "00:1A:2B:3C:4D:5E",
    password: "1234567890",
    model: "XenCall-SRV-2408",
    status: "Active",
  };

  return (
    <div className="p-8 space-y-10">
      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-700 mb-4"
      >
        <ArrowLeft size={22} variant="Linear" color="#000" />
        <span className="text-lg font-semibold">Location Details</span>
      </button>

      {/* SUMMARY CARD */}
      <div className="bg-white shadow-sm rounded-xl p-8 space-y-6">
        {/* HEADER */}
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
              <img src="/images/logos.svg" className="w-8 h-8 opacity-80" />
            </div>
            <h1 className="text-2xl font-semibold">{location.title}</h1>
          </div>

          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 h-12 rounded-lg hover:bg-blue-700">
            <Add size={20} variant="Linear" color="#fff" />
            Add Extension
          </button>
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-2 gap-y-6 w-full">
          <DetailRow label="Username:" value={location.username} />
          <DetailRow label="Password:" value={location.password} />
          <DetailRow label="Server IP Address:" value={location.ip} />
          <DetailRow label="Server Model No:" value={location.model} />
          <DetailRow label="Server MAC Address:" value={location.mac} />
          <DetailRow
            label="Status:"
            value={<StatusBadge status={location.status as any} />}
          />
        </div>
      </div>

      {/* CUSTOM TABS */}
      <div className="mt-4">
        <div className="flex border-b pb-2">
          {/* EXTENSIONS TAB */}
          <button
            onClick={() => setActiveTab("extensions")}
            className="relative w-1/2 pb-2 text-center text-sm font-medium"
          >
            <div
              className={`flex justify-center items-center gap-1 transition-colors ${
                activeTab === "extensions" ? "text-blue-600" : "text-gray-500"
              }`}
            >
              Extensions
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  activeTab === "extensions"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {extensions.length}
              </span>
            </div>

            {activeTab === "extensions" && (
              <div className="absolute left-0 -bottom-[2px] w-full h-[2px] bg-blue-600"></div>
            )}
          </button>

          {/* AGENTS TAB */}
          <button
            onClick={() => setActiveTab("agents")}
            className="relative w-1/2 pb-2 text-center text-sm font-medium"
          >
            <div
              className={`flex justify-center items-center gap-1 transition-colors ${
                activeTab === "agents" ? "text-blue-600" : "text-gray-500"
              }`}
            >
              Agents
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  activeTab === "agents"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {agents.length}
              </span>
            </div>

            {activeTab === "agents" && (
              <div className="absolute left-0 -bottom-[2px] w-full h-[2px] bg-blue-600"></div>
            )}
          </button>
        </div>

        {/* TAB CONTENT */}
        <div className="pt-6">
          {activeTab === "extensions" && (
            <DataTable
              data={extensions}
              columns={extensionsColumns}
              initialPageSize={6}
              compactSelectColumn={false}
            />
          )}

          {activeTab === "agents" && (
            <DataTable
              data={agents}
              columns={agentsColumns}
              initialPageSize={6}
              compactSelectColumn={false}
            />
          )}
        </div>
      </div>
    </div>
  );
}
