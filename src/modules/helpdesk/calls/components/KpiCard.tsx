"use client";

import React from "react";

interface KpiCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bg: string; // card background color
  iconBg?: string; // optional icon box background override
}

export default function KpiCard({
  title,
  value,
  icon,
  bg,
  iconBg = "rgba(255,255,255,0.4)",
}: KpiCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-md w-full p-1.5 bg-white">
      <div
        className="flex items-center gap-3 rounded-md w-full"
        style={{
          height: "84px",
          padding: "12px",
          background: bg,
        }}
      >
        {/* Icon Container */}
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "8px",
            background: iconBg,
          }}
          className="flex items-center justify-center mr-2"
        >
          {icon}
        </div>

        {/* Text */}
        <div className="flex flex-col leading-tight">
          <span className="text-[17px] font-medium text-[#555]">{title}</span>
          <span className="text-[28px] font-semibold text-[#202020] mt-1">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
}
