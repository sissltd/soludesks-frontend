// export const agents2 = [
//   {
//     id: 1,
//     name: "Maya Thompson",
//     email: "maya.thompson@example.com",
//     username: "agent_alpha",
//     extension: "112",
//     location: "Abuja, Nigeria",
//     status: "Inactive",
//   },
//   {
//     id: 2,
//     name: "Sophie Carter",
//     email: "sophie.carter@example.com",
//     username: "agent_bravo",
//     extension: "110",
//     location: "Port Harcourt, Nigeria",
//     status: "Active",
//   },
//   {
//     id: 3,
//     name: "Ella Martinez",
//     email: "ella.martinez@example.com",
//     username: "agent_charlie",
//     extension: "109",
//     location: "Kano, Nigeria",
//     status: "Active",
//   },
//   {
//     id: 4,
//     name: "+23491 332 991 22",
//     email: "agent_delta@example.com",
//     username: "agent_delta",
//     extension: "113",
//     location: "Ibadan, Nigeria",
//     status: "Inactive",
//   },
//   {
//     id: 5,
//     name: "Zoe Wilson",
//     email: "zoe.wilson@example.com",
//     username: "agent_echo",
//     extension: "105",
//     location: "Kaduna, Nigeria",
//     status: "Active",
//   },
//   {
//     id: 6,
//     name: "Ava Brown",
//     email: "ava.brown@example.com",
//     username: "agent_foxtrot",
//     extension: "108",
//     location: "Benin City, Nigeria",
//     status: "Inactive",
//   },
//   {
//     id: 7,
//     name: "Isabella Lee",
//     email: "isabella.lee@example.com",
//     username: "agent_golf",
//     extension: "107",
//     location: "Maiduguri, Nigeria",
//     status: "Inactive",
//   },
//   {
//     id: 8,
//     name: "+23491 332 991 22",
//     email: "agent_hotel@example.com",
//     username: "agent_hotel",
//     extension: "111",
//     location: "Enugu, Nigeria",
//     status: "Inactive",
//   },
//   {
//     id: 9,
//     name: "+23491 332 991 22",
//     email: "agent_india@example.com",
//     username: "agent_india",
//     extension: "106",
//     location: "Owerri, Nigeria",
//     status: "Active",
//   },
//   {
//     id: 10,
//     name: "Olivia Harris",
//     email: "olivia.harris@example.com",
//     username: "agent_juliet",
//     extension: "104",
//     location: "Jos, Nigeria",
//     status: "Inactive",
//   },
// ];

// constants/ticketsDummy.ts

export const activeTickets = [
  {
    ticketId: "A1B2C3",
    user: "+23491 332 991 22",
    email: "",
    title: "Problem with my Payment",
    channel: "Phone",
    priority: "High",
    status: "Pending",
    updated: "1/20/24, 10:00 AM",
  },
  {
    ticketId: "D4E5F6",
    user: "Sophie Carter",
    email: "sophie.carter@example.com",
    title: "Authorization Difficulty for Transaction",
    channel: "Walk-In",
    priority: "Low",
    status: "Active",
    updated: "4/15/23, 2:30 PM",
  },
  // ... add the rest from screenshot
];

export const closedTickets = [
  {
    ticketId: "A1B2C3",
    user: "Maya Thompson",
    email: "maya.thompson@example.com",
    title: "Processing Challenge for Transactions",
    channel: "Portal",
    priority: "High",
    updated: "1/20/24, 10:00 AM",
  },
  // ... add the rest
];

export const agents2 = [
  {
    id: 1,
    name: "Maya Thompson",
    email: "maya.thompson@example.com",
    username: "agent_alpha",
    extension: "112",
    location: "Abuja, Nigeria",
    status: "Inactive",

    agentId: "AGT-001",
    avatar: "/images/profile.png",

    totalCalls: 1247,
    resolved: 123,
    csScore: 3.2,

    extensionHistory: [
      {
        number: 112,
        location: "PTAD Abuja HQ",
        date: "Nov 14, 2024",
        duration: "4 days",
        status: "Inactive",
      },
      {
        number: 110,
        location: "Lagos Branch",
        date: "Dec 03, 2024",
        duration: "5 days",
        status: "Inactive",
      },
      {
        number: 109,
        location: "Kano HQ",
        date: "Jan 22, 2024",
        duration: "7 days",
        status: "Inactive",
      },
    ],

    callHistory: [
      {
        number: "+234 555-0101",
        date: "10:42 AM",
        duration: "00:00:53",
        status: "Closed",
        ticket: "N/A",
      },
      {
        number: "+234 555-0102",
        date: "09:17 PM",
        duration: "00:02:17",
        status: "Active",
        ticket: "N/A",
      },
      {
        number: "+234 355-0105",
        date: "01:59 PM",
        duration: "00:00:28",
        status: "Closed",
        ticket: "TK-00512",
      },
    ],
  },

  {
    id: 2,
    name: "Sophie Carter",
    email: "sophie.carter@example.com",
    username: "agent_bravo",
    extension: "110",
    location: "Port Harcourt, Nigeria",
    status: "Active",

    agentId: "AGT-002",
    avatar: "/images/profile.png",

    totalCalls: 988,
    resolved: 743,
    csScore: 4.6,

    extensionHistory: [
      {
        number: 110,
        location: "PHC Zonal HQ",
        date: "Dec 01, 2024",
        duration: "5 days",
        status: "Active",
      },
      {
        number: 109,
        location: "Kano HQ",
        date: "Jan 12, 2024",
        duration: "6 days",
        status: "Inactive",
      },
    ],

    callHistory: [
      {
        number: "+234 555-0110",
        date: "11:12 AM",
        duration: "00:01:12",
        status: "Closed",
        ticket: "N/A",
      },
      {
        number: "+234 555-0220",
        date: "03:44 PM",
        duration: "00:02:55",
        status: "Active",
        ticket: "TK-00341",
      },
    ],
  },

  {
    id: 3,
    name: "Ella Martinez",
    email: "ella.martinez@example.com",
    username: "agent_charlie",
    extension: "109",
    location: "Kano, Nigeria",
    status: "Active",

    agentId: "AGT-003",
    avatar: "/images/profile.png",

    totalCalls: 1333,
    resolved: 1120,
    csScore: 4.9,

    extensionHistory: [
      {
        number: 109,
        location: "Kano HQ",
        date: "Feb 03, 2024",
        duration: "7 days",
        status: "Active",
      },
      {
        number: 104,
        location: "Kaduna HQ",
        date: "Aug 11, 2024",
        duration: "3 days",
        status: "Inactive",
      },
    ],

    callHistory: [
      {
        number: "+234 777-3301",
        date: "09:10 AM",
        duration: "00:02:03",
        status: "Active",
        ticket: "N/A",
      },
      {
        number: "+234 555-9910",
        date: "07:22 PM",
        duration: "00:01:55",
        status: "Closed",
        ticket: "TK-00192",
      },
    ],
  },

  {
    id: 4,
    name: "+23491 332 991 22",
    email: "agent_delta@example.com",
    username: "agent_delta",
    extension: "113",
    location: "Ibadan, Nigeria",
    status: "Inactive",

    agentId: "AGT-004",
    avatar: "/images/profile.png",

    totalCalls: 441,
    resolved: 212,
    csScore: 2.3,

    extensionHistory: [
      {
        number: 113,
        location: "Ibadan HQ",
        date: "Mar 14, 2024",
        duration: "5 days",
        status: "Inactive",
      },
    ],

    callHistory: [
      {
        number: "+234 885-5511",
        date: "01:55 PM",
        duration: "00:01:00",
        status: "Closed",
        ticket: "N/A",
      },
    ],
  },

  {
    id: 5,
    name: "Zoe Wilson",
    email: "zoe.wilson@example.com",
    username: "agent_echo",
    extension: "105",
    location: "Kaduna, Nigeria",
    status: "Active",

    agentId: "AGT-005",
    avatar: "/images/profile.png",

    totalCalls: 584,
    resolved: 499,
    csScore: 4.1,

    extensionHistory: [
      {
        number: 105,
        location: "Kaduna HQ",
        date: "Oct 23, 2024",
        duration: "4 days",
        status: "Active",
      },
    ],

    callHistory: [
      {
        number: "+234 123-7788",
        date: "03:17 PM",
        duration: "00:02:11",
        status: "Active",
        ticket: "N/A",
      },
    ],
  },

  {
    id: 6,
    name: "Ava Brown",
    email: "ava.brown@example.com",
    username: "agent_foxtrot",
    extension: "108",
    location: "Benin City, Nigeria",
    status: "Inactive",

    agentId: "AGT-006",
    avatar: "/images/profile.png",

    totalCalls: 211,
    resolved: 98,
    csScore: 2.0,

    extensionHistory: [
      {
        number: 108,
        location: "Benin HQ",
        date: "Jan 14, 2024",
        duration: "7 days",
        status: "Inactive",
      },
    ],

    callHistory: [
      {
        number: "+234 882-0011",
        date: "11:55 AM",
        duration: "00:00:34",
        status: "Closed",
        ticket: "N/A",
      },
    ],
  },

  {
    id: 7,
    name: "Isabella Lee",
    email: "isabella.lee@example.com",
    username: "agent_golf",
    extension: "107",
    location: "Maiduguri, Nigeria",
    status: "Inactive",

    agentId: "AGT-007",
    avatar: "/images/profile.png",

    totalCalls: 712,
    resolved: 554,
    csScore: 3.5,

    extensionHistory: [
      {
        number: 107,
        location: "Maiduguri HQ",
        date: "Apr 21, 2024",
        duration: "6 days",
        status: "Inactive",
      },
    ],

    callHistory: [
      {
        number: "+234 889-3344",
        date: "02:41 PM",
        duration: "00:01:11",
        status: "Closed",
        ticket: "TK-00632",
      },
    ],
  },

  {
    id: 8,
    name: "+23491 332 991 22",
    email: "agent_hotel@example.com",
    username: "agent_hotel",
    extension: "111",
    location: "Enugu, Nigeria",
    status: "Inactive",

    agentId: "AGT-008",
    avatar: "/images/profile.png",

    totalCalls: 129,
    resolved: 44,
    csScore: 1.7,

    extensionHistory: [
      {
        number: 111,
        location: "Enugu HQ",
        date: "Jun 05, 2024",
        duration: "6 days",
        status: "Inactive",
      },
    ],

    callHistory: [
      {
        number: "+234 771-0002",
        date: "10:22 AM",
        duration: "00:00:40",
        status: "Closed",
        ticket: "N/A",
      },
    ],
  },

  {
    id: 9,
    name: "+23491 332 991 22",
    email: "agent_india@example.com",
    username: "agent_india",
    extension: "106",
    location: "Owerri, Nigeria",
    status: "Active",

    agentId: "AGT-009",
    avatar: "/images/profile.png",

    totalCalls: 933,
    resolved: 640,
    csScore: 3.9,

    extensionHistory: [
      {
        number: 106,
        location: "Owerri HQ",
        date: "Apr 28, 2024",
        duration: "7 days",
        status: "Active",
      },
    ],

    callHistory: [
      {
        number: "+234 577-2299",
        date: "09:42 AM",
        duration: "00:02:22",
        status: "Active",
        ticket: "TK-00981",
      },
    ],
  },

  {
    id: 10,
    name: "Olivia Harris",
    email: "olivia.harris@example.com",
    username: "agent_juliet",
    extension: "104",
    location: "Jos, Nigeria",
    status: "Inactive",

    agentId: "AGT-010",
    avatar: "/images/profile.png",

    totalCalls: 321,
    resolved: 212,
    csScore: 3.1,

    extensionHistory: [
      {
        number: 104,
        location: "Jos HQ",
        date: "Mar 27, 2024",
        duration: "5 days",
        status: "Inactive",
      },
    ],

    callHistory: [
      {
        number: "+234 991-7790",
        date: "11:33 AM",
        duration: "00:01:24",
        status: "Closed",
        ticket: "N/A",
      },
    ],
  },
];

export const locations = [
  {
    id: 1,
    status: "Online",
    node: "AbaCall-Node-007",
    title: "PTAD HQ – Abuja DC",
    ip: "192.168.1.105",
    mac: "2A:1B:C3:D4:E5:F6",
    name: "call_router_01",
    date: "Dec 24, 2023",
  },
  {
    id: 2,
    status: "Inactive",
    node: "AbaCall-Node-008",
    title: "Eko Hotel – Lagos center",
    ip: "192.168.1.106",
    mac: "3B:2C:D4:E5:F6:G7",
    name: "call_router_02",
    date: "Jan 15, 2024",
  },
  {
    id: 3,
    status: "Online",
    node: "AbaCall-Node-009",
    title: "Murtala Muhammed Airport – Lagos",
    ip: "192.168.1.107",
    mac: "4C:3D:E5:F6:G7:H8",
    name: "call_router_03",
    date: "Feb 28, 2024",
  },
  {
    id: 4,
    status: "Online",
    node: "AbaCall-Node-010",
    title: "Nnamdi Azikiwe Airport Center",
    ip: "192.168.1.108",
    mac: "5D:4E:F6:G7:H8:I9",
    name: "call_router_04",
    date: "Mar 01, 2024",
  },
  {
    id: 5,
    status: "Online",
    node: "AbaCall-Node-011",
    title: "Port Harcourt - HQ",
    ip: "192.168.1.109",
    mac: "6E:5F:G7:H8:I9:J0",
    name: "call_router_05",
    date: "Apr 12, 2024",
  },
  {
    id: 6,
    status: "Inactive",
    node: "AbaCall-Node-011",
    title: "Aba HQ Mogoro",
    ip: "192.168.1.109",
    mac: "6E:5F:G7:H8:I9:J0",
    name: "call_router_06",
    date: "Apr 12, 2024",
  },
];

export const extensions = [
  {
    extension: "13201",
    username: "agent_alpha",
    password: "GS$t_89Kl",
    status: "Inactive",
    date: "2024-01-20",
  },
  {
    extension: "23214",
    username: "agent_bravo",
    password: "H7%u-23Mv",
    status: "Active",
    date: "2023-04-15",
  },
  {
    extension: "34215",
    username: "agent_charlie",
    password: "J9*w+64Nx",
    status: "Active",
    date: "2023-11-10",
  },
  {
    extension: "46556",
    username: "agent_delta",
    password: "K28y=19Pz",
    status: "Inactive",
    date: "2024-03-05",
  },
  {
    extension: "56877",
    username: "agent_echo",
    password: "L4!i02Qa",
    status: "Active",
    date: "2023-09-01",
  },
  {
    extension: "69878",
    username: "agent_foxtrot",
    password: "M6()57Rs",
    status: "Inactive",
    date: "2024-02-29",
  },
  {
    extension: "78769",
    username: "agent_golf",
    password: "N1!p(91Tb",
    status: "Inactive",
    date: "2024-02-29",
  },
  {
    extension: "89430",
    username: "agent_hotel",
    password: "P3#4)48Uc",
    status: "Inactive",
    date: "2023-11-10",
  },
  {
    extension: "91762",
    username: "agent_india",
    password: "Q8?x>75Ve",
    status: "Active",
    date: "2024-01-20",
  },
  {
    extension: "01298",
    username: "agent_juliet",
    password: "RO>d/36Wf",
    status: "Inactive",
    date: "2024-03-05",
  },
];

export const agents = [
  {
    agentId: "AGT-001",
    name: "John Alpha",
    email: "alpha@company.com",
    status: "Active",
    joined: "2024-01-10",
  },
  {
    agentId: "AGT-002",
    name: "Brenda Bravo",
    email: "bravo@company.com",
    status: "Inactive",
    joined: "2023-06-22",
  },
  {
    agentId: "AGT-003",
    name: "Charles Charlie",
    email: "charlie@company.com",
    status: "Active",
    joined: "2023-09-15",
  },
  {
    agentId: "AGT-004",
    name: "Deborah Delta",
    email: "delta@company.com",
    status: "Inactive",
    joined: "2024-03-02",
  },
  {
    agentId: "AGT-005",
    name: "Edward Echo",
    email: "echo@company.com",
    status: "Active",
    joined: "2023-11-01",
  },
  {
    agentId: "AGT-006",
    name: "Francis Foxtrot",
    email: "foxtrot@company.com",
    status: "Inactive",
    joined: "2024-02-11",
  },
  {
    agentId: "AGT-007",
    name: "Grace Golf",
    email: "golf@company.com",
    status: "Inactive",
    joined: "2023-12-19",
  },
  {
    agentId: "AGT-008",
    name: "Henry Hotel",
    email: "hotel@company.com",
    status: "Active",
    joined: "2023-10-04",
  },
  {
    agentId: "AGT-009",
    name: "Isabel India",
    email: "india@company.com",
    status: "Active",
    joined: "2024-01-20",
  },
  {
    agentId: "AGT-010",
    name: "Jason Juliet",
    email: "juliet@company.com",
    status: "Inactive",
    joined: "2024-03-05",
  },
];
