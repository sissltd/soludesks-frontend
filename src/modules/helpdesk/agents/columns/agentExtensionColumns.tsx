import { ColumnDef } from "@tanstack/react-table";
import StatusBadge from "@/components/shared/StatusBadge";

export const agentExtensionColumns: ColumnDef<any>[] = [
  {
    accessorKey: "number",
    header: "Number",
    cell: ({ row }) => row.original.number,
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => row.original.location,
  },
  {
    accessorKey: "date",
    header: "Date Assigned",
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
];
