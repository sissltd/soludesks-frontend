"use client";

import { ColumnDef } from "@tanstack/react-table";
import StatusBadge from "@/components/shared/StatusBadge";
import { Edit2, Trash } from "iconsax-react";

export const agentsColumns: ColumnDef<any>[] = [
  {
    accessorKey: "agentId",
    header: "Agent ID",
    cell: ({ row }) => row.original.agentId,
  },

  {
    accessorKey: "name",
    header: "Agent Name",
    cell: ({ row }) => row.original.name,
  },

  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => row.original.email,
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },

  {
    accessorKey: "joined",
    header: "Date Joined",
    cell: ({ row }) => row.original.joined,
  },

  {
    accessorKey: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex gap-3">
        <Edit2 size={18} color="#4B5563" variant="Linear" />
        <Trash size={18} color="#EF4444" variant="Linear" />
      </div>
    ),
  },
];
