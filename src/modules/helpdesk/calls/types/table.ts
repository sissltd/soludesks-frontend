// ========================
//  DATA TYPES
// ========================
export type InboundRow = {
  id: string;
  caller: string;
  duration: string;
};

export type OngoingRow = {
  id: string;
  caller: string;
  agent: string;
  time: string;
  duration: string;
  status: "Active" | "On hold";
  ticket?: string | "N/A";
};

export type LogRow = {
  id: string;
  caller: string;
  agent: string;
  time: string;
  duration: string;
  outcome: "Closed" | "Active";
  ticket?: string | "N/A";
};
