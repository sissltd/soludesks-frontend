"use client";

import { ReactNode } from "react";

export default function DetailRow({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="grid grid-cols-2 gap-0">
      <span className="text-sm text-gray-500 whitespace-nowrap">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}
