"use client";

import { useState } from "react";
import { Add, Award, HomeWifi, TickCircle, User } from "iconsax-react";

import PageHeader from "@/components/shared/PageHeader";
import DrawerModal from "@/components/shared/DrawerModal";
import AddAgentForm from "@/modules/helpdesk/agents/components/AddAgentForm";
import KpiCard from "@/modules/helpdesk/calls/components/KpiCard";

import DataTable from "@/components/shared/DataTable";
import DataTableHeader, {
  TabType,
} from "@/modules/helpdesk/locations/components/DataTableHeader";

import { agentsColumns } from "@/modules/helpdesk/agents/columns/agentsColumns";
import { agents2 } from "@/constants/dummyDatas";
import AgentDetailsModal from "@/modules/helpdesk/agents/components/AgentDetailsmodal";

export default function AgentsPage() {
  const [showAddAgent, setShowAddAgent] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("extensions");

  // MODAL STATE
  const [openModal, setOpenModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<any>(null);

  // TAB DATA
  const activeAgents = agents2.filter((a) => a.status === "Active");
  const inactiveAgents = agents2.filter((a) => a.status === "Inactive");

  const tableData = activeTab === "extensions" ? activeAgents : inactiveAgents;

  // ==========================
  // OPEN DETAILS ON ROW CLICK
  // ==========================
  const openDetailsModal = (agent: any) => {
    setSelectedAgent(agent);
    setOpenModal(true);
  };

  return (
    <>
      <div className="p-8 space-y-8">
        <PageHeader
          title="Agents"
          subtitle="Manage all registered call agents."
          buttonText="Add Agent"
          buttonIcon={<Add size={20} variant="Linear" color="#fff" />}
          onButtonClick={() => setShowAddAgent(true)}
        />

        {/* KPIS */}
        <div className="grid grid-cols-4 gap-4">
          <KpiCard
            title="Total Agents"
            value={agents2.length.toString()}
            bg="#F7F2FF"
            iconBg="#EFE6FF"
            icon={<User size={28} variant="Linear" color="#A66AFE" />}
          />

          <KpiCard
            title="Active Agents"
            value={activeAgents.length.toString()}
            bg="#E9FFE9"
            iconBg="#C8FFC8"
            icon={<TickCircle size={28} variant="Linear" color="#3ECB4B" />}
          />

          <KpiCard
            title="Inactive Agents"
            value={inactiveAgents.length.toString()}
            bg="#FFF1ED"
            iconBg="#FFD5CC"
            icon={<Award size={28} variant="Linear" color="#FF6B5E" />}
          />

          <KpiCard
            title="Locations"
            value="30"
            bg="#CCFCFF"
            iconBg="#33F3FF"
            icon={<HomeWifi size={28} variant="Linear" color="#29ccd7" />}
          />
        </div>

        {/* TABLE SECTION */}
        <div className="w-full">
          <DataTableHeader
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            extensionsCount={activeAgents.length}
            agentsCount={inactiveAgents.length}
            tab1Label="Active"
            tab2Label="Inactive"
            showStatus={false}
          />

          <DataTable
            data={tableData}
            columns={agentsColumns}
            initialPageSize={10}
            className="rounded-b-xl rounded-t-none"
            clickableRows
            onRowClick={openDetailsModal}
          />
        </div>
      </div>

      {/* ----------------- ADD AGENT MODAL ----------------- */}
      <DrawerModal
        open={showAddAgent}
        onClose={() => setShowAddAgent(false)}
        title="Add Agent"
        primaryButtonText="Add Agent"
        onPrimaryClick={() => {
          const form = document.getElementById(
            "agent-create-form"
          ) as HTMLFormElement;
          form?.requestSubmit();
        }}
        secondaryButtonText="Cancel"
        onSecondaryClick={() => setShowAddAgent(false)}
      >
        <AddAgentForm onSuccess={() => setShowAddAgent(false)} />
      </DrawerModal>

      {/* ----------------- AGENT DETAILS MODAL ----------------- */}
      <DrawerModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Agent Details"
      >
        <AgentDetailsModal
          agent={selectedAgent}
          onClose={() => setOpenModal(false)}
        />
      </DrawerModal>
    </>
  );
}
