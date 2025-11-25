"use client";

import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode; // <— You pass an element, so this is correct
  accent: string;
}

export default function StatCard({
  title,
  value,
  icon,
  accent,
}: StatCardProps) {
  return (
    <div className="p-5 rounded-xl border bg-white shadow-sm flex items-center gap-4">
      {/* Icon container */}
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: accent }}
      >
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-muted-foreground text-sm">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}
