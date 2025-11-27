"use client";

import { useRouter } from "next/navigation";
import { Edit2, Trash } from "iconsax-react";

interface LocationCardProps {
  id: number | string;
  status: "Online" | "Inactive";
  node: string;
  title: string;
  ip: string;
  mac: string;
  name: string;
  date: string;
}

export default function LocationCard({
  id,
  status,
  node,
  title,
  ip,
  mac,
  name,
  date,
}: LocationCardProps) {
  const isOnline = status === "Online";
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/helpdesk/locations/${id}`)}
      className="
        border rounded-xl p-4 bg-white shadow-sm 
        flex flex-col justify-between h-[180px]
        cursor-pointer 
        hover:shadow-md hover:border-blue-400 
        transition-all duration-200
      "
    >
      {/* TOP ROW */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`h-3 w-3 rounded-full ${
              isOnline ? "bg-green-500" : "bg-red-400"
            }`}
          ></span>
          <span
            className={`text-sm font-medium ${
              isOnline ? "text-green-600" : "text-red-500"
            }`}
          >
            {status}
          </span>
        </div>

        <span className="text-sm text-gray-600">{node}</span>
      </div>

      {/* TITLE */}
      <h3 className="font-semibold text-gray-900 mt-2">{title}</h3>

      {/* DETAILS */}
      <div className="mt-2 text-sm">
        <p className="text-gray-700">
          <span className="font-medium">IP:</span> {ip}
          <span className="ml-6 font-medium">MAC:</span> {mac}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Name:</span> {name}
        </p>
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between mt-3 border-t pt-2">
        {/* ⚠️ Stop propagation so clicking edit/delete doesn’t open detail page */}
        <div
          className="flex items-center gap-3"
          onClick={(e) => e.stopPropagation()}
        >
          <Edit2 size={18} variant="Linear" color="#4B5563" />
          <Trash size={18} variant="Linear" color="#EF4444" />
        </div>

        <span className="text-sm text-gray-700">{date}</span>
      </div>
    </div>
  );
}
