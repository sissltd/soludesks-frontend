"use client";

import { SearchNormal1 } from "iconsax-react";

export default function AddAgentForm({ onSuccess }: { onSuccess: () => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(); // triggers DrawerModal submit
  };

  return (
    <form
      id="agent-create-form"
      onSubmit={handleSubmit}
      className="space-y-6 pb-4 px-4"
    >
      {/* AGENT EMAIL / ID */}
      <div className="space-y-1">
        <label className="text-sm font-medium label-required">
          Agent Email or ID
        </label>

        <div className="w-full relative">
          <input
            placeholder="Search or enter staff email or ID"
            className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
          />
          <SearchNormal1
            className="absolute right-4 top-3.5"
            size={18}
            color="#6B7280"
            variant="Linear"
          />
        </div>
      </div>

      {/* USER NAME */}
      <div className="space-y-1">
        <label className="text-sm font-medium label-required">User Name</label>
        <input
          placeholder="Enter username"
          className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
        />
      </div>

      {/* PASSWORD */}
      <div className="space-y-1">
        <label className="text-sm font-medium label-required">Password</label>
        <input
          type="password"
          placeholder="Input password"
          className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
        />
      </div>

      {/* ASSIGN EXTENSION */}
      <div className="space-y-1">
        <label className="text-sm font-medium label-required">
          Assign Extension
        </label>

        <div className="w-full relative">
          <input
            placeholder="Search and select extension"
            className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
          />
          <SearchNormal1
            className="absolute right-4 top-3.5"
            size={18}
            color="#6B7280"
            variant="Linear"
          />
        </div>
      </div>
    </form>
  );
}
