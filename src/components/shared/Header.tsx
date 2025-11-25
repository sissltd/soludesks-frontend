"use client";

import {
  SearchNormal1,
  Message,
  Notification,
  Danger,
  ArrowDown2,
} from "iconsax-react";

export default function Header() {
  return (
    <header className="h-20 w-full bg-white border-b flex items-center justify-between px-8">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="flex items-center w-[360px] bg-white rounded-full border border-gray-200 px-5 py-3 shadow-sm">
          <input
            type="text"
            placeholder="Search soludesk"
            className="w-full outline-none text-gray-600 placeholder-gray-400 text-[15px]"
          />
          <SearchNormal1 size={20} color="#777" variant="Linear" />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-8">
        {/* Trial Notice */}
        <div className="flex items-center gap-2 text-red-500 text-[15px] font-medium">
          <Danger size={20} color="#FF4C2E" variant="Bulk" />7 days left for
          trial
        </div>

        {/* Message Icon */}
        <Message
          size={24}
          color="#777"
          variant="Linear"
          className="cursor-pointer"
        />

        {/* Notification Bell */}
        <Notification
          size={24}
          color="#777"
          variant="Linear"
          className="cursor-pointer"
        />

        {/* PROFILE */}
        <div className="flex items-center gap-3">
          <img
            src="/images/profile.png"
            alt="User"
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
          />

          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-[15px]">John Doe</span>
            <span className="text-gray-500 text-[13px]">Hub Owner</span>
          </div>

          <ArrowDown2 size={20} color="#777" />
        </div>
      </div>
    </header>
  );
}
