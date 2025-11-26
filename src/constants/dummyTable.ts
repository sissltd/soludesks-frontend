// ========================
//  DUMMY DATA

import {
  InboundRow,
  LogRow,
  OngoingRow,
} from "@/modules/helpdesk/calls/types/table";

// ========================
export const inboundData: InboundRow[] = [
  { id: "1", caller: "+234 555-0101", duration: "00:00:53" },
  { id: "2", caller: "+234 555-0102", duration: "00:02:17" },
  { id: "3", caller: "+234 555-0103", duration: "00:00:28" },
  { id: "4", caller: "+234 555-0104", duration: "00:03:01" },
  { id: "5", caller: "+234 555-0105", duration: "00:01:12" },
  { id: "6", caller: "+234 555-0106", duration: "00:00:46" },
];

export const ongoingData: OngoingRow[] = [
  {
    id: "1",
    caller: "+234 555-0101",
    agent: "Ofonime Udoh",
    time: "10:42 AM",
    duration: "00:00:53",
    status: "Active",
    ticket: "TK-00512",
  },
  {
    id: "2",
    caller: "+234 555-0102",
    agent: "Ngozi Okoro",
    time: "09:17 PM",
    duration: "00:02:17",
    status: "On hold",
    ticket: "N/A",
  },
  {
    id: "3",
    caller: "+234 555-0105",
    agent: "Chinedu Eze",
    time: "01:59 PM",
    duration: "00:00:28",
    status: "Active",
    ticket: "TK-00512",
  },
  {
    id: "4",
    caller: "+234 213-0105",
    agent: "Folake Obasanjo",
    time: "06:22 AM",
    duration: "00:03:01",
    status: "Active",
    ticket: "N/A",
  },
  {
    id: "5",
    caller: "+234 555-0102",
    agent: "Bala Muhammed",
    time: "03:30 PM",
    duration: "00:01:12",
    status: "Active",
    ticket: "N/A",
  },
  {
    id: "6",
    caller: "+234 555-0105",
    agent: "Ese Walter",
    time: "08:05 AM",
    duration: "00:00:46",
    status: "On hold",
    ticket: "TK-00512",
  },
];

export const logData: LogRow[] = [
  {
    id: "1",
    caller: "+234 555-0101",
    agent: "Ofonime Udoh",
    time: "10:42 AM",
    duration: "00:00:53",
    outcome: "Closed",
    ticket: "N/A",
  },
  {
    id: "2",
    caller: "+234 555-0102",
    agent: "Ngozi Okoro",
    time: "09:17 PM",
    duration: "00:02:17",
    outcome: "Active",
    ticket: "N/A",
  },
  {
    id: "3",
    caller: "+234 555-0105",
    agent: "Chinedu Eze",
    time: "01:59 PM",
    duration: "00:00:28",
    outcome: "Closed",
    ticket: "TK-00512",
  },
  {
    id: "4",
    caller: "+234 213-0105",
    agent: "Folake Obasanjo",
    time: "06:22 AM",
    duration: "00:03:01",
    outcome: "Closed",
    ticket: "N/A",
  },
  {
    id: "5",
    caller: "+234 555-0102",
    agent: "Bala Muhammed",
    time: "03:30 PM",
    duration: "00:01:12",
    outcome: "Closed",
    ticket: "N/A",
  },
  {
    id: "6",
    caller: "+234 555-0105",
    agent: "Ese Walter",
    time: "08:05 AM",
    duration: "00:00:46",
    outcome: "Active",
    ticket: "TK-00512",
  },
];
