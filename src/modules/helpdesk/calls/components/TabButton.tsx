"use client";

import React from "react";
import classNames from "classnames";

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  icon: React.ReactNode;
}

export default function TabButton({
  active,
  onClick,
  label,
  count,
  icon,
}: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "flex-1 h-[38px] px-4 rounded-full flex items-center justify-center gap-2 transition-colors",
        "hover:bg-[#9AC1FF33]",
        active ? "bg-[#E8F2FF] text-[#1062D4] font-medium" : "text-gray-600"
      )}
    >
      {icon}

      <span className="text-[15px]">{label}</span>

      <span
        className={classNames(
          "px-2 h-[22px] rounded-full text-xs flex items-center",
          active ? "bg-[#0A66FF] text-white" : "bg-gray-200 text-gray-700"
        )}
      >
        {count}
      </span>
    </button>
  );
}
