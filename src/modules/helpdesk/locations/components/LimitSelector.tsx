"use client";

import { ArrowDown2 } from "iconsax-react";

interface LimitSelectorProps {
  limit: number;
  onChange: (limit: number) => void;
}

export default function LimitSelector({ limit, onChange }: LimitSelectorProps) {
  return (
    <div className="flex items-center gap-2 border rounded-full px-4 h-10 bg-white">
      <span className="text-sm text-gray-700">Show {limit} / page</span>
      <ArrowDown2 size={18} color="#6B7280" variant="Linear" />
    </div>
  );
}
