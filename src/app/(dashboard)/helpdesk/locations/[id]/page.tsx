"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import DataTable from "@/components/shared/DataTable";
import StatusBadge from "@/components/shared/StatusBadge";
import DetailRow from "@/modules/helpdesk/locations/components/DetailRow";
import DataTableHeader, {
  TabType,
} from "@/modules/helpdesk/locations/components/DataTableHeader";

import { extensionsColumns } from "@/modules/helpdesk/locations/columns/extensionsColumns";
import { agentsColumns } from "@/modules/helpdesk/locations/columns/agentsColumns";

import DrawerModal from "@/components/shared/DrawerModal";
import AddExtensionForm from "@/modules/helpdesk/locations/components/AddExtensionForm";

import { ArrowLeft, Add } from "iconsax-react";
import { agents, extensions } from "@/constants/dummyDatas";

export default function LocationDetailsPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<TabType>("extensions");
  const [showAddExtension, setShowAddExtension] = useState(false);

  // Demo location data
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
    <>
      <div className="p-8 space-y-8">
        {/* ===================== BACK + TITLE ===================== */}
        <div>
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-700 mb-4"
          >
            <ArrowLeft size={22} variant="Linear" color="#000" />
            <span className="text-lg font-semibold">Location Details</span>
          </button>

          {/* ===================== SUMMARY CARD ===================== */}
          <div className="bg-white shadow-sm rounded-xl p-8 space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                  <img src="/images/logos.svg" className="w-8 h-8 opacity-80" />
                </div>

                <h1 className="text-2xl font-semibold">{location.title}</h1>
              </div>

              {/* OPEN ADD EXTENSION MODAL */}
              <button
                onClick={() => setShowAddExtension(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 h-12 rounded-lg hover:bg-blue-700"
              >
                <Add size={20} variant="Linear" color="#fff" />
                Add Extension
              </button>
            </div>

            <div className="grid grid-cols-2 gap-y-6">
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
        </div>

        {/* ===================== TABLE + HEADER ===================== */}
        <div className="w-full">
          <DataTableHeader
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            extensionsCount={extensions.length}
            agentsCount={agents.length}
            tab1Label="Extensions"
            tab2Label="Agents"
          />

          {activeTab === "extensions" && (
            <DataTable
              data={extensions}
              columns={extensionsColumns}
              initialPageSize={6}
              className="rounded-b-xl rounded-t-none"
            />
          )}

          {activeTab === "agents" && (
            <DataTable
              data={agents}
              columns={agentsColumns}
              initialPageSize={6}
              className="rounded-b-xl rounded-t-none"
            />
          )}
        </div>
      </div>

      {/* ===================== ADD EXTENSION MODAL ===================== */}
      <DrawerModal
        open={showAddExtension}
        onClose={() => setShowAddExtension(false)}
        title="Add Extension"
        primaryButtonText="Save Extension"
        onPrimaryClick={() => {
          const form = document.querySelector(
            "#extension-create-form"
          ) as HTMLFormElement;

          form?.requestSubmit();
        }}
        secondaryButtonText="Cancel"
        onSecondaryClick={() => setShowAddExtension(false)}
      >
        <AddExtensionForm onSuccess={() => setShowAddExtension(false)} />
      </DrawerModal>
    </>
  );
}
