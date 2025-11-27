import StatusBadge from "@/components/shared/StatusBadge";
import { ColumnDef } from "@tanstack/react-table";
import { Edit2, Trash } from "iconsax-react";
import { Edit3, MinusCircle } from "lucide-react";

export const extensionsColumns: ColumnDef<any>[] = [
  {
    accessorKey: "extension",
    header: "Extension Number",
    cell: ({ row }) => row.original.extension,
  },

  {
    accessorKey: "username",
    header: "Username",
    cell: ({ row }) => row.original.username,
  },

  {
    accessorKey: "password",
    header: "Password",
    cell: ({ row }) => row.original.password,
  },

  {
    accessorKey: "status",
    header: "Progress",
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },

  {
    accessorKey: "date",
    header: "Date Added",
    cell: ({ row }) => row.original.date,
  },

  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-3">
        <MinusCircle size={18} color="#636363" />
        <Edit3 size={18} color="#636363" />
      </div>
    ),
  },
];
