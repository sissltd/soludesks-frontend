"use client";

import { useState } from "react";

interface EditLocationFormProps {
  onSuccess: () => void;
  defaultValues: any;
}

export default function EditLocationForm({
  onSuccess,
  defaultValues,
}: EditLocationFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <form
      id="location-edit-form"
      onSubmit={handleSubmit}
      className="space-y-6 pb-6 px-4"
    >
      {/* LOCATION NAME */}
      <div className="space-y-1">
        <label className="text-sm font-medium label-required">
          Location Name
        </label>
        <input
          defaultValue={defaultValues?.title}
          placeholder="Enter location name"
          className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
        />
      </div>

      {/* SERVER IP */}
      <div className="space-y-1">
        <label className="text-sm font-medium label-required">
          Server IP Address
        </label>
        <input
          defaultValue={defaultValues?.ip}
          placeholder="Enter server IP e.g. 10.10.10.10"
          className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
        />
      </div>

      {/* USERNAME */}
      <div className="space-y-1">
        <label className="text-sm font-medium label-required">Username</label>
        <input
          defaultValue={defaultValues?.username}
          placeholder="Enter username"
          className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
        />
      </div>

      {/* SERVER MODEL NO */}
      <div className="space-y-1">
        <label className="text-sm font-medium label-required">
          Server Model No
        </label>
        <input
          defaultValue={defaultValues?.model}
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
          defaultValue={defaultValues?.mac}
          placeholder="E.g AA:BB:CC:DD:EE:FF"
          className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
        />
      </div>

      {/* PASSWORD FIELD WITH SHOW BUTTON */}
      <div className="space-y-1">
        <label className="text-sm font-medium label-required">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            defaultValue={defaultValues?.password}
            placeholder="Enter password"
            className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500 pr-14"
          />

          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-700"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </form>
  );
}
