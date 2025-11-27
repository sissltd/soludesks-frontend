"use client";

import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ArrowDown2 } from "iconsax-react";

interface LimitSelectorProps {
  limit: number;
  onChange: (limit: number) => void;
}

const options = [5, 10, 20, 50];

export default function LimitSelector({ limit, onChange }: LimitSelectorProps) {
  return (
    <Listbox value={limit} onChange={onChange}>
      <div className="relative">
        {/* Trigger Button */}
        <Listbox.Button
          className="
            flex items-center justify-between gap-2 
            border rounded-full px-4 h-10 bg-white text-sm w-[160px]
          "
        >
          <span className="text-gray-700">Show {limit} / page</span>
          <ArrowDown2 size={16} color="#6B7280" variant="Linear" />
        </Listbox.Button>

        {/* Dropdown ABOVE */}
        <Transition
          as={Fragment}
          enter="transition duration-150"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition duration-100"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <Listbox.Options
            className="
              absolute bottom-12 w-full bg-white 
              border rounded-lg shadow z-50 text-sm py-1
            "
          >
            {options.map((opt) => (
              <Listbox.Option
                key={opt}
                value={opt}
                className="
                  cursor-pointer px-3 py-2 hover:bg-gray-100
                  text-gray-700
                "
              >
                {opt} / page
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
