"use client";

import { X } from "lucide-react";

interface DrawerModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  width?: string;

  // Optional bottom buttons
  primaryButtonText?: string;
  onPrimaryClick?: () => void;
  primaryDisabled?: boolean;

  secondaryButtonText?: string;
  onSecondaryClick?: () => void;
}

export default function DrawerModal({
  open,
  onClose,
  title,
  children,
  width = "sm:w-1/2",

  primaryButtonText,
  onPrimaryClick,
  primaryDisabled = false,

  secondaryButtonText,
  onSecondaryClick,
}: DrawerModalProps) {
  const showFooter = primaryButtonText || secondaryButtonText;

  return (
    <>
      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-[9998] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* DRAWER */}
      <div
        className={`
          fixed top-0 right-0 h-full bg-white shadow-xl rounded-l-xl border-l border-gray-200
          transition-transform duration-300 z-[9999]
          w-full ${width}
          ${open ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b h-16 rounded-tl-xl">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* CONTENT AREA */}
        <div
          className={`flex-1 overflow-y-auto p-4 ${showFooter ? "pb-24" : ""}`}
        >
          {children}
        </div>
        {/* FOOTER — ONLY IF BUTTONS ARE PASSED */}
        {showFooter && (
          <div
            className="
      fixed bottom-0 right-0 bg-white border-t p-4 
      w-full sm:w-1/2 rounded-l-xl 
      flex items-center justify-between gap-3
      z-[10000]
    "
          >
            {/* CANCEL */}
            {secondaryButtonText && (
              <button
                onClick={onSecondaryClick}
                className="h-11 px-5 border rounded-md bg-white hover:bg-gray-50 text-blue-600 border-blue-300"
              >
                {secondaryButtonText}
              </button>
            )}

            {/* PRIMARY */}
            {primaryButtonText && (
              <button
                onClick={onPrimaryClick}
                disabled={primaryDisabled}
                className={`
          h-11 flex-1 px-5 rounded-md text-white 
          ${
            primaryDisabled
              ? "bg-(--primary-2) cursor-not-allowed"
              : "bg-(--primary-6) hover:bg-(--primary-7)"
          }
        `}
              >
                {primaryButtonText}
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
