"use client";

import { useState } from "react";
import { Firstline, DocumentUpload, SearchNormal1 } from "iconsax-react";

export default function AddExtensionForm({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  const [tab, setTab] = useState<"manual" | "bulk">("manual");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <form
      id="extension-create-form"
      onSubmit={handleSubmit}
      className="space-y-6 pb-4 px-4"
    >
      {/* ========= TABS ========= */}
      <div className="flex gap-4">
        {/* Manual Upload */}
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
            color={tab === "manual" ? "#1062D4" : "#6B7280"}
            variant="Linear"
          />
          <span className="font-medium text-lg">Manual Upload</span>
        </button>

        {/* Bulk Upload */}
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

      {/* ========= MANUAL FORM ========= */}
      {tab === "manual" && (
        <div className="space-y-6">
          {/* Extension Number */}
          <div className="space-y-1">
            <label className="text-sm font-medium label-required">
              Extension Number
            </label>
            <input
              placeholder="E.g., 23214422"
              className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
              required
            />
          </div>

          {/* Username */}
          <div className="space-y-1">
            <label className="text-sm font-medium label-required">
              Username
            </label>
            <input
              placeholder="Enter username"
              className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-sm font-medium label-required">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500 pr-16"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-600 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Assign Agent */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Assign Agent</label>

            <div className="relative">
              <input
                placeholder="Select an agent"
                className="w-full border rounded-lg px-4 py-3 text-sm outline-blue-500 pr-12"
              />
              <SearchNormal1
                size={20}
                color="#6B7280"
                variant="Linear"
                className="absolute right-4 top-3"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========= BULK UPLOAD ========= */}
      {tab === "bulk" && (
        <div className="py-12 text-center text-gray-500">Bulk upload</div>
      )}
    </form>
  );
}
