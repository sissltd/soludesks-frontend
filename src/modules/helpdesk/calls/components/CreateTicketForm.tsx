"use client";

import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Danger, ArrowDown2, InfoCircle } from "iconsax-react";
import { TimerResetIcon } from "lucide-react";

interface Props {
  onSuccess?: () => void;
}

const channels = ["Email", "Phone", "Walk-in"];

export default function CreateTicketForm({ onSuccess }: Props) {
  const [priority, setPriority] = useState<"low" | "medium" | "urgent" | null>(
    null
  );
  const [selectedChannel, setSelectedChannel] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSuccess) onSuccess();
  };

  return (
    <form
      id="create-ticket-form"
      onSubmit={handleSubmit}
      className="space-y-6 pb-4 relative px-4"
    >
      {/* USER EMAIL */}
      <div className="space-y-1">
        <label className="text-sm font-medium label-required">
          User Email/ID
        </label>
        <input
          required
          placeholder="Enter user email or ID"
          className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
        />
      </div>

      {/* CHANNEL */}
      <div className="space-y-1">
        <label className="text-sm font-medium label-required">Channel</label>

        <Listbox value={selectedChannel} onChange={setSelectedChannel}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full border rounded-lg px-4 py-3 text-sm flex items-center">
              <span className="text-gray-600 flex-1 text-left">
                {selectedChannel || "Select a channel"}
              </span>

              <ArrowDown2
                size={20}
                className="text-gray-950 absolute right-3 pointer-events-none"
              />
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 w-full bg-white border shadow rounded-lg z-50">
                {channels.map((c) => (
                  <Listbox.Option
                    key={c}
                    value={c}
                    className={({ active }) =>
                      `cursor-pointer px-4 py-2 text-sm ${
                        active ? "bg-gray-100" : ""
                      }`
                    }
                  >
                    {c}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      {/* SUBJECT */}
      <div className="space-y-1">
        <label className="text-sm font-medium label-required">Subject</label>
        <input
          required
          placeholder="Enter ticket subject"
          className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
        />
      </div>

      {/* PRIORITY LEVEL */}
      <div className="space-y-2">
        <label className="text-sm font-medium label-required">
          Priority Level
        </label>

        <div className="flex items-center gap-3">
          {/* LOW */}
          <button
            type="button"
            onClick={() => setPriority("low")}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm justify-start w-[210px] ${
              priority === "low"
                ? "border-blue-600 text-blue-600 bg-blue-50"
                : "border-gray-300 text-gray-600"
            }`}
          >
            <InfoCircle
              size={28}
              variant="Linear"
              color={priority === "low" ? "#1062D4" : "#9CA3AF"}
            />
            Low
          </button>

          {/* MEDIUM */}
          <button
            type="button"
            onClick={() => setPriority("medium")}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm justify-start w-[210px] ${
              priority === "medium"
                ? "border-blue-600 text-blue-600 bg-blue-50"
                : "border-gray-300 text-gray-600"
            }`}
          >
            <TimerResetIcon
              size={28}
              color={priority === "medium" ? "#1062D4" : "#9CA3AF"}
            />
            Medium
          </button>

          {/* URGENT */}
          <button
            type="button"
            onClick={() => setPriority("urgent")}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm justify-start w-[210px] ${
              priority === "urgent"
                ? "border-red-600 text-red-600 bg-red-50"
                : "border-gray-300 text-gray-600"
            }`}
          >
            <Danger
              size={28}
              variant="Linear"
              color={priority === "urgent" ? "#EF4444" : "#9CA3AF"}
            />
            Urgent
          </button>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="space-y-1">
        <label className="text-sm font-medium">Detailed Description</label>
        <textarea
          rows={5}
          className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500 resize-none"
          placeholder="Provide detailed information about the ticket..."
        />
      </div>
    </form>
  );
}
