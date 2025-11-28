"use client";

import { ColumnDef } from "@tanstack/react-table";
import StatusBadge from "@/components/shared/StatusBadge";
import { ProfileDelete, RefreshSquare } from "iconsax-react";

export const agentsColumns: ColumnDef<any>[] = [
  {
    accessorKey: "agent",
    header: "Agent",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium text-gray-800">{row.original.name}</span>
        <span className="text-gray-500 text-xs">{row.original.email}</span>
      </div>
    ),
  },

  {
    accessorKey: "username",
    header: "Username",
    cell: ({ row }) => <span>{row.original.username}</span>,
  },

  {
    accessorKey: "extension",
    header: "Extension Number",
    cell: ({ row }) => row.original.extension,
  },

  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => row.original.location,
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },

  {
    accessorKey: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex items-center gap-3">
        <RefreshSquare size={18} color="#0063EF" />
        <ProfileDelete size={18} color="#BF9332" />
      </div>
    ),
  },
];
