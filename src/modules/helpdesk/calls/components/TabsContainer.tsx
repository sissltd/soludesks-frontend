"use client";

import TabButton from "./TabButton";
import { CallIncoming, CallCalling, Call } from "iconsax-react";

interface Props {
  tab: "inbound" | "ongoing" | "log";
  setTab: (t: "inbound" | "ongoing" | "log") => void;
}

export default function TabsContainer({ tab, setTab }: Props) {
  return (
    <div
      className="w-[54%] h-[48px] rounded-full border flex items-center px-2 gap-2"
      style={{ borderColor: "var(--border)" }}
    >
      <TabButton
        active={tab === "inbound"}
        onClick={() => setTab("inbound")}
        label="Inbound Calls"
        count={32}
        icon={
          <CallIncoming
            size={17}
            color={tab === "inbound" ? "#1062D4" : "#A0A0A0"}
          />
        }
      />

      <TabButton
        active={tab === "ongoing"}
        onClick={() => setTab("ongoing")}
        label="Ongoing Calls"
        count={10}
        icon={
          <CallCalling
            size={17}
            color={tab === "ongoing" ? "#1062D4" : "#A0A0A0"}
          />
        }
      />

      <TabButton
        active={tab === "log"}
        onClick={() => setTab("log")}
        label="Call Log"
        count={12}
        icon={
          <Call
            size={17}
            color={tab === "log" ? "#1062D4" : "#A0A0A0"}
            className="rotate-135"
          />
        }
      />
    </div>
  );
}
