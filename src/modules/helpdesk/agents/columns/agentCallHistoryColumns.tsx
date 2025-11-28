import { ColumnDef } from "@tanstack/react-table";
import StatusBadge from "@/components/shared/StatusBadge";

export const agentCallHistoryColumns: ColumnDef<any>[] = [
  {
    accessorKey: "number",
    header: "Number",
    cell: ({ row }) => row.original.number,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => row.original.date,
  },
  {
    accessorKey: "duration",
    header: "Duration",
    cell: ({ row }) => row.original.duration,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },
  {
    accessorKey: "ticket",
    header: "Ticket",
    cell: ({ row }) => row.original.ticket,
  },
];
