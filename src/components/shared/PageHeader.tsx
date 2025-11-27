"use client";

import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonIcon?: ReactNode;
  onButtonClick: () => void;
}

export default function PageHeader({
  title,
  subtitle,
  buttonText,
  buttonIcon,
  onButtonClick,
}: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      {/* LEFT */}
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={onButtonClick}
        className="bg-(--primary-6) text-white px-2 py-2 rounded-md shadow flex items-center w-[150px]"
      >
        {buttonIcon && <span className="mr-3">{buttonIcon}</span>}
        {buttonText}
      </button>
    </div>
  );
}
