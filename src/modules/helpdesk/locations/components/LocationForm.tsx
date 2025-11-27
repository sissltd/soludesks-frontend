"use client";

import { DocumentUpload, Firstline } from "iconsax-react";
import { useState } from "react";

export default function LocationForm({ onSuccess }: { onSuccess: () => void }) {
  const [tab, setTab] = useState<"manual" | "bulk">("manual");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(); // submit handled by DrawerModal
  };

  return (
    <form
      id="location-create-form"
      onSubmit={handleSubmit}
      className="space-y-6 pb-4 px-4"
    >
      {/* TABS */}

      <div className="flex gap-4">
        {/* MANUAL UPLOAD */}
        <button
          type="button"
          onClick={() => setTab("manual")}
          className={`
      flex-1 p-6 rounded-2xl border text-center flex flex-col items-center justify-center gap-3
      transition-all
      ${
        tab === "manual"
          ? "border-blue-600 bg-blue-50 text-blue-600"
          : "border-gray-300 text-gray-900 bg-white"
      }
    `}
        >
          <Firstline
            size={32}
            color={tab === "manual" ? "#1062D4" : "#6B7280"} // blue vs gray
            variant="Linear"
          />
          <span className="font-medium text-lg">Manual Upload</span>
        </button>

        {/* BULK UPLOAD */}
        <button
          type="button"
          onClick={() => setTab("bulk")}
          className={`
      flex-1 p-6 rounded-2xl border text-center flex flex-col items-center justify-center gap-3
      transition-all
      ${
        tab === "bulk"
          ? "border-blue-600 bg-blue-50 text-blue-600"
          : "border-gray-300 text-gray-900 bg-white"
      }
    `}
        >
          <DocumentUpload
            size={32}
            color={tab === "bulk" ? "#1062D4" : "#6B7280"}
            variant="Linear"
          />
          <span className="font-medium text-lg">Bulk Upload</span>
        </button>
      </div>

      {/* MANUAL UPLOAD FORM */}
      {tab === "manual" && (
        <div className="space-y-6">
          <h3 className="font-semibold">Location/Server Information</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium label-required">
                Location Name
              </label>
              <input
                placeholder="E.g., Kano Zonal Office"
                className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium label-required">
                Server IP Address
              </label>
              <input
                placeholder="Enter server IP e.g. 10.10.10.10"
                className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
              />
            </div>

            {/* USERNAME */}
            <div className="space-y-1">
              <label className="text-sm font-medium label-required">
                Username
              </label>
              <input
                placeholder="Enter username"
                className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
              />
            </div>

            {/* PASSWORD */}
            <div className="space-y-1">
              <label className="text-sm font-medium label-required">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
              />
            </div>

            {/* SERVER MODEL */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Server Model No</label>
              <input
                placeholder="Enter server model no"
                className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
              />
            </div>

            {/* SERVER MAC */}
            <div className="space-y-1">
              <label className="text-sm font-medium label-required">
                Server MAC Address
              </label>
              <input
                placeholder="E.g AA:BB:CC:DD:EE:FF"
                className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
              />
            </div>
          </div>

          {/* IPBX INFO */}
          <h3 className="font-semibold">IPBX Information</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 space-y-1">
              <label className="text-sm font-medium label-required">
                IPBX IP Address
              </label>
              <input
                placeholder="Enter IPBX address e.g AA:BB:CC:DD:EE:FF"
                className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium label-required">
                Username
              </label>
              <input
                placeholder="Enter username"
                className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium label-required">
                Password
              </label>
              <input
                placeholder="Enter password"
                className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
              />
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
