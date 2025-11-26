"use client";

import React from "react";
import {
  Call,
  ArchiveAdd,
  CallMinus,
  CallCalling,
  CallIncoming,
  CallReceived,
  CallRemove,
  CallOutgoing,
} from "iconsax-react";
import classNames from "classnames";
import DataTable from "@/components/shared/DataTable";
import { InboundRow, LogRow, OngoingRow } from "../types/table";
import { inboundData, logData, ongoingData } from "@/constants/dummyTable";
import TabsContainer from "./TabsContainer";
import { Button } from "@/components/ui/button";

// ========================
//  MAIN TABLE COMPONENT
// ========================
export default function CallCenterTable() {
  const [tab, setTab] = React.useState<"inbound" | "ongoing" | "log">(
    "inbound"
  );

  // Inbound Columns
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
            <Button
              className="hover:bg-(--primary-4)"
              variant="ghost"
              size="icon"
            >
              <CallReceived
                size={18}
                color="var(--success-1)"
                variant="Linear"
              />
            </Button>

            <Button
              className="hover:bg-(--primary-4)"
              variant="ghost"
              size="icon"
            >
              <CallRemove size={18} color="var(--error-1)" variant="Linear" />
            </Button>

            <Button
              className="hover:bg-(--primary-4)"
              variant="ghost"
              size="icon"
            >
              <CallOutgoing size={18} color="#BF9332" variant="Linear" />
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  // Ongoing Columns
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

  // Log Columns
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
    <div className="space-y-6">
      {/* TABS WRAPPER */}
      <TabsContainer tab={tab} setTab={setTab} />

      {/* Tables */}
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
        />
      )}

      {tab === "log" && (
        <DataTable
          columns={logCols as any}
          data={logData}
          initialPageSize={6}
          compactSelectColumn={true}
        />
      )}
    </div>
  );
}
