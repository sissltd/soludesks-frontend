"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import React from "react";

import {
  Home,
  Profile2User,
  ReceiptText,
  MessageQuestion,
  Book,
  People,
  Teacher,
  Chart1,
  Call,
  Location,
  Ticket,
  User,
  Category,
  Setting2,
  ArrowDown2,
  ArrowUp2,
} from "iconsax-react";

// ---------------------------
// FIX 1: Proper Icon type
// ---------------------------
type IconType = React.FC<{
  size?: number;
  color?: string;
  variant?: "Linear" | "Bold" | "Bulk" | "Outline" | "TwoTone";
}>;

interface SidebarLink {
  label: string;
  href: string;
  icon: IconType;
}

interface SidebarGroup {
  group: string;
  free?: boolean;
  open: boolean;
  toggle: () => void;
  children: SidebarLink[];
}

export default function Sidebar() {
  const pathname = usePathname();

  // Collapsible groups
  const [openLearnHub, setOpenLearnHub] = useState(false);
  const [openHelpdesk, setOpenHelpdesk] = useState(true);

  // ---------------------------
  // FIX 2: Strongly typed config
  // ---------------------------
  const sidebarLinks: (SidebarLink | SidebarGroup)[] = [
    { label: "Dashboard", href: "/dashboard", icon: Home },
    { label: "Staff", href: "/staff", icon: Profile2User },
    { label: "Reports", href: "/reports", icon: ReceiptText },
    { label: "Requests", href: "/requests", icon: MessageQuestion },

    {
      group: "LearnHub",
      free: true,
      open: openLearnHub,
      toggle: () => setOpenLearnHub(!openLearnHub),
      children: [
        { label: "Courses", href: "/learnhub/courses", icon: Book },
        { label: "Learners", href: "/learnhub/learners", icon: People },
        { label: "Classes", href: "/learnhub/classes", icon: Teacher },
        { label: "Assessments", href: "/learnhub/assessments", icon: Chart1 },
      ],
    },

    {
      group: "Helpdesk",
      free: true,
      open: openHelpdesk,
      toggle: () => setOpenHelpdesk(!openHelpdesk),
      children: [
        { label: "Calls", href: "/helpdesk/calls", icon: Call },
        { label: "My Locations", href: "/helpdesk/locations", icon: Location },
        { label: "Tickets/Complaint", href: "/helpdesk/tickets", icon: Ticket },
        { label: "Agents", href: "/helpdesk/agents", icon: User },
      ],
    },
  ];

  return (
    <aside className="w-[250px] h-screen border-r bg-white flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6 h-20">
        <img
          src="/images/logo.png"
          alt="logo"
          className="h-10 object-contain"
        />
      </div>

      <div className="border-b" />

      {/* NAV */}
      <nav className="flex-1 overflow-y-auto px-4 py-4">
        {sidebarLinks.map((item, i) => {
          // --------------------
          // GROUP SECTION
          // --------------------
          if ("group" in item) {
            return (
              <div key={i} className="mb-2">
                <button
                  onClick={item.toggle}
                  className="flex items-center justify-between w-full px-2 py-2 text-[15px] font-semibold"
                >
                  <span>{item.group}</span>
                  <span className="flex items-center gap-2">
                    {item.free && (
                      <span className="text-[11px] bg-blue-100 text-blue-600 px-2 py-[1px] rounded-full">
                        Free trial
                      </span>
                    )}

                    {item.open ? (
                      <ArrowUp2 size={18} color="#777" />
                    ) : (
                      <ArrowDown2 size={18} color="#777" />
                    )}
                  </span>
                </button>

                {item.open && (
                  <div className="ml-2 mt-1 flex flex-col gap-1">
                    {item.children.map((child, ci) => {
                      const isActive = pathname.startsWith(child.href);

                      return (
                        <Link
                          key={ci}
                          href={child.href}
                          className={`flex items-center gap-3 px-3 py-2 rounded-md
        ${
          isActive
            ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`}
                        >
                          <child.icon
                            size={20}
                            color={isActive ? "#1664E8" : "#777"}
                            variant={isActive ? "Bold" : "Linear"}
                          />
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          // --------------------
          // NORMAL ITEM
          // --------------------
          const isActive = pathname === item.href;

          return (
            <Link
              key={i}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-[15px]
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
            >
              <item.icon
                size={22}
                color={isActive ? "#1664E8" : "#777"}
                variant={isActive ? "Bold" : "Linear"}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* BOTTOM STICKY */}
      <div className="mt-auto p-4 bg-gray-50 rounded-t-xl">
        <Link
          href="/apps"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
        >
          <Category size={22} color="#777" />
          More Apps
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
        >
          <Setting2 size={22} color="#777" />
          Settings
        </Link>
      </div>
    </aside>
  );
}
