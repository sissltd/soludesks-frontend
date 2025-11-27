"use client";

import { Tab } from "@headlessui/react";

export default function SectionTabs({
  extensionsCount,
  agentsCount,
}: {
  extensionsCount: number;
  agentsCount: number;
}) {
  return (
    <Tab.Group>
      {/* TAB HEADERS */}
      <Tab.List className="flex gap-8 border-b pb-2">
        {/* EXTENSIONS */}
        <Tab
          className={({ selected }) =>
            `relative pb-2 text-sm font-medium outline-none
            ${selected ? "text-blue-600" : "text-gray-500"}`
          }
        >
          {({ selected }) => (
            <div className="flex items-center gap-1">
              Extensions
              <span
                className={`text-xs px-2 py-0.5 rounded-full 
                  ${
                    selected
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }
                `}
              >
                {extensionsCount}
              </span>
              {/* UNDERLINE */}
              {selected && (
                <span className="absolute left-0 -bottom-[2px] w-full h-[2px] bg-blue-600 rounded-full"></span>
              )}
            </div>
          )}
        </Tab>

        {/* AGENTS */}
        <Tab
          className={({ selected }) =>
            `relative pb-2 text-sm font-medium outline-none
            ${selected ? "text-blue-600" : "text-gray-500"}`
          }
        >
          {({ selected }) => (
            <div className="flex items-center gap-1">
              Agents
              <span
                className={`text-xs px-2 py-0.5 rounded-full 
                  ${
                    selected
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }
                `}
              >
                {agentsCount}
              </span>
              {/* UNDERLINE */}
              {selected && (
                <span className="absolute left-0 -bottom-[2px] w-full h-[2px] bg-blue-600 rounded-full"></span>
              )}
            </div>
          )}
        </Tab>
      </Tab.List>

      {/* TAB PANELS */}
      <Tab.Panels className="pt-6">
        <Tab.Panel>{/* EXTENSIONS TABLE GOES HERE */}</Tab.Panel>
        <Tab.Panel>
          <div className="text-gray-500">Agents table coming soon…</div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
