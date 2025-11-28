"use client";

import { User, Location, MessageText } from "iconsax-react";

interface AgentProfileHeaderProps {
  avatar: string;
  name: string;
  email: string;
  status: string; // “Active”, “Inactive”, etc.
  agentId: string;
  location: string;
}

export default function AgentProfileHeader({
  avatar,
  name,
  email,
  status,
  agentId,
  location,
}: AgentProfileHeaderProps) {
  return (
    <div className="flex flex-col justify-between items-start w-full">
      {/* Top BLOCK */}
      <div className="flex gap-4 items-start justify-between w-full">
        <div className="flex items-center justify-center gap-5">
          <img
            src={avatar}
            className="w-14 h-14 rounded-full border"
            alt="agent"
          />

          <div className="space-y-1">
            {/* NAME + STATUS */}
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">{name}</h2>

              {/* Status Indicator */}
              <div className="flex items-center gap-1">
                <span
                  className={`
                  w-2.5 h-2.5 rounded-full 
                  ${status === "Active" ? "bg-green-500" : "bg-gray-400"}
                `}
                />
                <span
                  className={`
                  text-sm font-medium 
                  ${status === "Active" ? "text-green-600" : "text-gray-500"}
                `}
                >
                  {status}
                </span>
              </div>
            </div>

            {/* EMAIL */}
            <p className="text-gray-600 text-sm">{email}</p>

            {/* AGENT ID */}
          </div>
        </div>
        <div>
          <MessageText size={20} variant="Linear" color="#000" />
        </div>
      </div>

      {/* Bottom BLOCK - LOCATION */}
      <div className="flex items-center w-full gap-2 text-gray-700 text-sm mt-3">
        <div className="flex items-center gap-2 text-gray-600 text-sm pt-1 w-[70%] font-bold">
          <User size={22} variant="Linear" color="#000" />
          {agentId}
        </div>
        <div className="flex items-center justify-end w-[30%] gap-3">
          <Location size={18} variant="Linear" color="#000" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
