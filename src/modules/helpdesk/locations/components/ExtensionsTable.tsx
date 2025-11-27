"use client";

import StatusBadge from "@/components/shared/StatusBadge";
import { Edit2, Trash } from "iconsax-react";

export default function ExtensionsTable({ data }: { data: any[] }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-gray-600 border-b">
          <th className="py-3 text-left font-medium">Extension Number</th>
          <th className="text-left font-medium">Username</th>
          <th className="text-left font-medium">Password</th>
          <th className="text-left font-medium">Progress</th>
          <th className="text-left font-medium">Date Added</th>
          <th className="text-left font-medium">Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr key={row.extension} className="border-b last:border-none">
            <td className="py-3">{row.extension}</td>
            <td>{row.username}</td>
            <td>{row.password}</td>
            <td>
              <StatusBadge status={row.status} />
            </td>
            <td>{row.date}</td>
            <td>
              <div className="flex gap-3">
                <Edit2 size={18} color="#4B5563" variant="Linear" />
                <Trash size={18} color="#EF4444" variant="Linear" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
