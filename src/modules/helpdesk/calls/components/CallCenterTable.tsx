"use client";

import React, { useState } from "react";
import classNames from "classnames";
import DataTable from "@/components/shared/DataTable";
import TabsContainer from "./TabsContainer";
import { Button } from "@/components/ui/button";

import CallDetailsModal from "./CallDetailsModal";

import { CallReceived, CallRemove, CallOutgoing } from "iconsax-react";

import { inboundData, logData, ongoingData } from "@/constants/dummyTable";

export default function CallCenterTable() {
  const [tab, setTab] = useState<"inbound" | "ongoing" | "log">("inbound");

  // ========================
  // MODAL STATE
  // ========================
  const [openModal, setOpenModal] = useState(false);
  const [selectedCall, setSelectedCall] = useState<any>(null);

  const openDetailsModal = (row: any) => {
    const raw = row.original;

    setSelectedCall({
      ...raw,
      showAudio: tab === "log", // << enable audio for log only
    });

    setOpenModal(true);
  };

  // ========================
  // COLUMNS
  // ========================

  const inboundCols = React.useMemo(
    () => [
      {
        header: () => <input type="checkbox" />,
        accessorKey: "select",
        cell: () => <input type="checkbox" />,
      },
      { header: "Caller Number", accessorKey: "caller" },
      { header: "Duration", accessorKey: "duration" },
      {
        header: () => <div className="flex justify-center w-full">Action</div>,
        accessorKey: "actions",
        cell: () => (
          <div className="flex justify-center items-center gap-2 w-full">
            <Button variant="ghost" size="icon">
              <CallReceived
                size={18}
                color="var(--success-1)"
                variant="Linear"
              />
            </Button>

            <Button variant="ghost" size="icon">
              <CallRemove size={18} color="var(--error-1)" variant="Linear" />
            </Button>

            <Button variant="ghost" size="icon">
              <CallOutgoing size={18} color="#BF9332" variant="Linear" />
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  const ongoingCols = React.useMemo(
    () => [
      {
        header: () => <input type="checkbox" />,
        accessorKey: "select",
        cell: () => <input type="checkbox" />,
      },
      { header: "Caller Number", accessorKey: "caller" },
      { header: "Agent", accessorKey: "agent" },
      { header: "Time", accessorKey: "time" },
      { header: "Duration", accessorKey: "duration" },
      {
        header: "Status",
        accessorKey: "status",
        cell: (info: any) => {
          const s = info.getValue();
          return (
            <span
              className={classNames("px-3 py-1 rounded-full text-xs", {
                "bg-green-100 text-green-800": s === "Active",
                "bg-orange-100 text-orange-800": s === "On hold",
              })}
            >
              {s}
            </span>
          );
        },
      },
      { header: "Linked ticket", accessorKey: "ticket" },
    ],
    []
  );

  const logCols = React.useMemo(
    () => [
      {
        header: () => <input type="checkbox" />,
        accessorKey: "select",
        cell: () => <input type="checkbox" />,
      },
      { header: "Caller Number", accessorKey: "caller" },
      { header: "Agent", accessorKey: "agent" },
      { header: "Time", accessorKey: "time" },
      { header: "Duration", accessorKey: "duration" },
      {
        header: "Outcome",
        accessorKey: "outcome",
        cell: (info: any) => {
          const o = info.getValue();
          return (
            <span
              className={classNames("px-3 py-1 rounded-full text-xs", {
                "bg-gray-200 text-gray-700": o === "Closed",
                "bg-green-100 text-green-800": o === "Active",
              })}
            >
              {o}
            </span>
          );
        },
      },
      { header: "Linked ticket", accessorKey: "ticket" },
    ],
    []
  );

  return (
    <>
      <div className="space-y-6">
        <TabsContainer tab={tab} setTab={setTab} />

        {tab === "inbound" && (
          <DataTable
            columns={inboundCols as any}
            data={inboundData}
            initialPageSize={6}
            compactSelectColumn={true}
          />
        )}

        {tab === "ongoing" && (
          <DataTable
            columns={ongoingCols as any}
            data={ongoingData}
            initialPageSize={6}
            compactSelectColumn={true}
            clickableRows
            onRowClick={openDetailsModal}
          />
        )}

        {tab === "log" && (
          <DataTable
            columns={logCols as any}
            data={logData}
            initialPageSize={6}
            compactSelectColumn={true}
            clickableRows
            onRowClick={openDetailsModal}
          />
        )}
      </div>

      {/* ======================== */}
      {/* FIXED MODAL */}
      {/* ======================== */}
      <CallDetailsModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        call={selectedCall}
      />
    </>
  );
}
