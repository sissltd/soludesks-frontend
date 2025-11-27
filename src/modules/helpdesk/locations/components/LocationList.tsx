"use client";

import {
  SearchNormal1,
  Calendar as CalIcon,
  ArrowDown2,
  Add,
} from "iconsax-react";
import { useState, Fragment } from "react";

import { Popover, Transition, Listbox } from "@headlessui/react";
import { Calendar } from "@/components/ui/calendar";

import LocationCard from "./LocationCard";
import LimitSelector from "./LimitSelector";
import Pagination from "./Pagination";

interface LocationListProps {
  locations: any[];
  onAddLocation: () => void;
  onEditLocation: (loc: any) => void; // ✅ NEW
}

const statusOptions = ["All", "Active", "Inactive"];

export default function LocationList({
  locations,
  onAddLocation,
  onEditLocation, // ✅ NEW
}: LocationListProps) {
  const isEmpty = locations.length === 0;

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const totalPages = 12; // placeholder

  // FILTER STATES
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [status, setStatus] = useState("All");

  return (
    <div className="space-y-6">
      {/* =================== HEADER / FILTERS =================== */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* SEARCH BAR */}
        <div className="flex items-center border rounded-full px-4 h-12 w-[340px] bg-white">
          <input
            type="text"
            placeholder="Find a location"
            className="flex-1 outline-none text-sm"
          />
          <SearchNormal1 size={20} variant="Linear" color="#6B7280" />
        </div>

        {/* RIGHT FILTERS */}
        <div className="flex items-center gap-3">
          {/* CREATED ON (CALENDAR POPOVER) */}
          <Popover className="relative">
            <Popover.Button
              className="
                flex items-center gap-2 border rounded-full px-4 h-12
                bg-white text-sm text-gray-700 hover:bg-gray-50
              "
            >
              {selectedDate ? selectedDate.toLocaleDateString() : "Created on"}
              <CalIcon size={18} variant="Linear" color="#6B7280" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition duration-150 ease-out"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-100 ease-in"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="
                  absolute right-0 z-50 mt-2 rounded-md border 
                  bg-white shadow-md p-2 w-[280px]
                "
              >
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  initialFocus
                />
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* STATUS DROPDOWN */}
          <Listbox value={status} onChange={setStatus}>
            <div className="relative">
              <Listbox.Button
                className="
                  flex items-center gap-2 border rounded-full px-4 h-12 
                  bg-white text-sm text-gray-700 hover:bg-gray-50
                "
              >
                {status}
                <ArrowDown2 size={18} variant="Linear" color="#6B7280" />
              </Listbox.Button>

              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className="
                    absolute right-0 mt-2 w-36 z-50 bg-white border rounded-lg 
                    shadow text-sm overflow-hidden
                  "
                >
                  {statusOptions.map((opt) => (
                    <Listbox.Option
                      key={opt}
                      value={opt}
                      className="cursor-pointer px-3 py-2 hover:bg-gray-100 text-gray-700"
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

      {/* =================== CONTENT =================== */}
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
          onEditLocation={onEditLocation} // ✅ PASS IT DOWN
        />
      )}
    </div>
  );
}

/* ---------------------------------------------------------- */
/* EMPTY STATE */
/* ---------------------------------------------------------- */

function EmptyState({ onAddLocation }: { onAddLocation: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24">
      <div className="w-[140px] h-[140px] rounded-full bg-gray-100 flex items-center justify-center mb-6">
        <img
          src="/images/emptyLocation.png"
          alt="empty"
          className="w-40 h-35 opacity-60"
        />
      </div>

      <h3 className="text-lg font-medium text-gray-800 mb-1">
        No location have been added to your hub yet.
      </h3>
      <p className="text-gray-500 mb-6">
        Add location to start managing call centers.
      </p>

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

/* ---------------------------------------------------------- */
/* NON-EMPTY VIEW */
/* ---------------------------------------------------------- */

function NonEmptyView({
  data,
  page,
  totalPages,
  onPageChange,
  limit,
  onLimitChange,
  onEditLocation, // ✅ NEW
}: any) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-6">
        {data.map((loc: any) => (
          <LocationCard
            key={loc.id}
            {...loc}
            onEdit={() => onEditLocation(loc)} // ✅ PASS CLICK HANDLER
          />
        ))}
      </div>

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
