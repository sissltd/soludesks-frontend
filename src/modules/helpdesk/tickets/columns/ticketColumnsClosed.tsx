"use client";

import { ColumnDef } from "@tanstack/react-table";

export const ticketColumnsClosed: ColumnDef<any>[] = [
  {
    accessorKey: "ticketId",
    header: "Ticket ID",
  },
  {
    accessorKey: "user",
    header: "User ID",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium">{row.original.user}</span>
        {row.original.email && (
          <span className="text-xs text-gray-500">{row.original.email}</span>
        )}
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "channel",
    header: "Channel",
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const value = row.original.priority;
      const colorMap: any = {
        High: "text-red-500",
        Medium: "text-orange-500",
        Low: "text-gray-600",
      };
      return (
        <span className={`flex items-center gap-2 ${colorMap[value]}`}>
          ● {value}
        </span>
      );
    },
  },
  {
    accessorKey: "updated",
    header: "Last Update",
  },
];
