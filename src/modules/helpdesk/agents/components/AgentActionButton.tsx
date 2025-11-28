"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface AgentActionButtonProps {
  label: string;
  icon?: ReactNode;
  iconSize?: number; // NEW — control icon size

  bg?: string;
  color?: string;
  borderColor?: string;
  onClick?: () => void;
}

export default function AgentActionButton({
  label,
  icon,
  iconSize = 22, // default icon size
  bg = "white",
  color = "black",
  borderColor,
  onClick,
}: AgentActionButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`
        h-12 w-full rounded-lg flex items-center justify-center gap-3 text-md
      `}
      style={{
        backgroundColor: bg,
        color,
        border: borderColor ? `1px solid ${borderColor}` : "none",
      }}
    >
      {/* Force icon to scale properly */}
      {icon && (
        <span
          className="shrink-0 flex items-center justify-center"
          style={{ width: iconSize, height: iconSize }}
        >
          {icon}
        </span>
      )}

      <span className="whitespace-nowrap">{label}</span>
    </Button>
  );
}
