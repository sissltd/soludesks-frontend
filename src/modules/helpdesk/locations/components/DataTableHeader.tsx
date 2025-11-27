"use client";

import { useState, Fragment } from "react";
import { SearchNormal1, Calendar, ArrowDown2 } from "iconsax-react";
import { Popover, Transition, Listbox } from "@headlessui/react";
import { Calendar as ShadcnCalendar } from "@/components/ui/calendar";

export type TabType = "extensions" | "agents";

interface DataTableHeaderProps {
  activeTab: TabType;
  setActiveTab: React.Dispatch<React.SetStateAction<TabType>>;
  extensionsCount: number;
  agentsCount: number;
}

const statusOptions = ["All", "Active", "Inactive"];

export default function DataTableHeader({
  activeTab,
  setActiveTab,
  extensionsCount,
  agentsCount,
}: DataTableHeaderProps) {
  const [status, setStatus] = useState("All");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="w-full border border-gray-200 rounded-t-xl bg-white p-6 space-y-6">
      {/* ================= TABS ================= */}
      <div className="relative grid grid-cols-2 text-center">
        <button
          onClick={() => setActiveTab("extensions")}
          className={`flex items-center justify-center gap-2 pb-3 font-medium ${
            activeTab === "extensions" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          Extensions
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === "extensions"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {extensionsCount}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("agents")}
          className={`flex items-center justify-center gap-2 pb-3 font-medium ${
            activeTab === "agents" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          Agents
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === "agents"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {agentsCount}
          </span>
        </button>

        {/* Base Line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-200" />

        {/* Sliding Blue Underline */}
        <div
          className={`absolute bottom-0 h-[2px] w-1/2 bg-blue-600 transition-transform duration-300 ${
            activeTab === "extensions" ? "translate-x-0" : "translate-x-full"
          }`}
        />
      </div>

      {/* ================= FILTERS ================= */}
      <div className="flex items-center justify-between pt-4">
        {/* SEARCH — 75% WIDTH */}
        <div className="w-[75%]">
          <div className="flex items-center h-11 w-[40%] rounded-full border border-gray-300 bg-white px-4">
            <input
              placeholder="Search agent code"
              className="w-full outline-none text-sm placeholder-gray-400"
            />
            <SearchNormal1 size={18} variant="Linear" color="#6B7280" />
          </div>
        </div>

        {/* RIGHT FILTERS */}
        <div className="flex items-center gap-4 w-[25%] justify-end">
          {/* DATE PICKER POPOVER (WITH SHADCN CALENDAR) */}
          <Popover className="relative">
            <Popover.Button className="h-11 flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 text-sm">
              <span className="text-gray-700">
                {selectedDate ? selectedDate.toLocaleDateString() : "Date"}
              </span>
              <Calendar size={18} variant="Linear" color="#6B7280" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-100"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 mt-2 rounded-md border bg-white p-0 shadow-md z-50">
                <div className="p-2 w-[280px]">
                  <ShadcnCalendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                  />
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* STATUS DROPDOWN (HEADLESS UI LISTBOX) */}
          <Listbox value={status} onChange={setStatus}>
            <div className="relative">
              <Listbox.Button className="h-11 flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 text-sm">
                <span className="text-gray-700">{status}</span>
                <ArrowDown2 size={18} variant="Linear" color="#6B7280" />
              </Listbox.Button>

              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow text-sm z-50">
                  {statusOptions.map((opt) => (
                    <Listbox.Option
                      key={opt}
                      value={opt}
                      className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                    >
                      {opt}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  );
}
