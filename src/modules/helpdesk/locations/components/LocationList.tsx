"use client";

import { SearchNormal1, Calendar, ArrowDown2, Add } from "iconsax-react";
import LocationCard from "./LocationCard";
import LimitSelector from "./LimitSelector";
import Pagination from "./Pagination";
import { useState } from "react";

interface LocationListProps {
  locations: any[];
  onAddLocation: () => void;
}

export default function LocationList({
  locations,
  onAddLocation,
}: LocationListProps) {
  const isEmpty = locations.length === 0;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const totalPages = 12; // placeholder

  return (
    <div className="space-y-6">
      {/* HEADER / FILTER BLOCK */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* SEARCH BAR */}
        <div className="flex items-center border rounded-full px-4 h-12 w-[320px] bg-white">
          <input
            type="text"
            placeholder="Find a location"
            className="flex-1 outline-none text-sm"
          />

          {/* FIXED: Iconsax color + variant */}
          <SearchNormal1
            size={20}
            variant="Linear"
            color="#6B7280" // gray-500
          />
        </div>

        <div className="flex items-center gap-3">
          {/* CREATED ON */}
          <button className="flex items-center gap-2 border rounded-full px-4 h-12 bg-white hover:bg-gray-50">
            <span className="text-sm text-gray-700">Created on</span>

            {/* FIXED */}
            <Calendar size={18} variant="Linear" color="#6B7280" />
          </button>

          {/* DEVICE STATUS */}
          <button className="flex items-center gap-2 border rounded-full px-4 h-12 bg-white hover:bg-gray-50">
            <span className="text-sm text-gray-700">Device Status</span>

            {/* FIXED */}
            <ArrowDown2 size={18} variant="Linear" color="#6B7280" />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      {isEmpty ? (
        <EmptyState onAddLocation={onAddLocation} />
      ) : (
        <NonEmptyView
          data={locations}
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
          limit={limit}
          onLimitChange={setLimit}
        />
      )}
    </div>
  );
}

function EmptyState({ onAddLocation }: { onAddLocation: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24">
      {/* Icon Circle */}
      <div className="w-[140px] h-[140px] rounded-full bg-gray-100 flex items-center justify-center mb-6">
        <img
          src="/images/emptyLocation.png"
          alt="empty"
          className="w-40 h-35 opacity-60"
        />
      </div>

      {/* TEXT */}
      <h3 className="text-lg font-medium text-gray-800 mb-1">
        No location have been added to your hub yet.
      </h3>
      <p className="text-gray-500 mb-6">
        Add location to start managing call centers.
      </p>

      {/* BUTTON */}
      <button
        onClick={onAddLocation}
        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        <Add size={20} variant="Linear" color="#fff" />
        Add Location
      </button>
    </div>
  );
}

function NonEmptyView({
  data,
  page,
  totalPages,
  onPageChange,
  limit,
  onLimitChange,
}: any) {
  return (
    <div className="space-y-8">
      {/* CARD GRID */}
      <div className="grid grid-cols-3 gap-6">
        {data.map((loc: any) => (
          <LocationCard key={loc.id} {...loc} />
        ))}
      </div>

      {/* BOTTOM CONTROLS */}
      <div className="flex items-center justify-between mt-10">
        <LimitSelector limit={limit} onChange={onLimitChange} />

        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
}

function NonEmptyPlaceholder() {
  return (
    <div className="border rounded-xl p-4 bg-white text-center text-gray-500">
      <p>Location table will go here...</p>
    </div>
  );
}
