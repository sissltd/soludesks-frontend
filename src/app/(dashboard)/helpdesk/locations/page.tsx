"use client";

import { useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import DrawerModal from "@/components/shared/DrawerModal";
import LocationForm from "@/modules/helpdesk/locations/components/LocationForm";
import {
  Add,
  Home2,
  TickCircle,
  CloseCircle,
  HomeWifi,
  PlayCircle,
} from "iconsax-react";

// KPI CARD COMPONENT
import KpiCard from "@/modules/helpdesk/calls/components/KpiCard";
import LocationList from "@/modules/helpdesk/locations/components/LocationList";
import { locations } from "@/constants/dummyDatas";

export default function LocationManagementPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  // const locations: any[] = [];

  return (
    <>
      <div className="p-8 space-y-8">
        {/* PAGE HEADER */}
        <PageHeader
          title="Location Management"
          subtitle="Oversee the locations of your call devices, along with server IPs and relevant details."
          buttonText="Add Location"
          buttonIcon={<Add size={20} variant="Linear" color="#fff" />}
          onButtonClick={() => setShowAddModal(true)}
        />

        {/* KPI ROW */}
        <div className="grid grid-cols-3 gap-4">
          <KpiCard
            title="Total Locations"
            value="0"
            bg="#F7F2FF" // light purple
            iconBg="#EFE6FF" // softer purple
            icon={<HomeWifi size={28} variant="Linear" color="#A66AFE" />}
          />

          <KpiCard
            title="Total Active"
            value="0"
            bg="#E9FFE9" // light green
            iconBg="#C8FFC8" // deeper green
            icon={<PlayCircle size={28} variant="Linear" color="#3ECB4B" />}
          />

          <KpiCard
            title="Total Inactive"
            value="0"
            bg="#FFF1ED" // light red/peach
            iconBg="#FFD5CC" // deeper peach
            icon={<CloseCircle size={28} variant="Linear" color="#FF6B5E" />}
          />
        </div>

        {/* LOCATION LIST (NEW) */}
        <LocationList
          locations={locations}
          onAddLocation={() => setShowAddModal(true)}
        />
      </div>

      {/* DRAWER MODAL */}
      <DrawerModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Location"
        primaryButtonText="Save Location"
        onPrimaryClick={() => {
          const form = document.querySelector(
            "#location-create-form"
          ) as HTMLFormElement;

          form?.requestSubmit();
        }}
        secondaryButtonText="Cancel"
        onSecondaryClick={() => setShowAddModal(false)}
      >
        <LocationForm onSuccess={() => setShowAddModal(false)} />
      </DrawerModal>
    </>
  );
}
