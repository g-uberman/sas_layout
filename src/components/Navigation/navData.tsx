interface NavData {
    title: string;
    sections: {
        header: string;
        pages: string[];
    }[];
}

export const navData: NavData[] = [
  {
    title: "About SAS",
    sections: [
      {
        header: "This is SAS",
        pages: [
          "SAS Community support",
          "SAS Code of Conduct",
          "Financial goals"
        ]
      },
      {
        header: "Strategic priorities for a changing market",
        pages: []
      },
      {
        header: "Business model",
        pages: []
      },
      {
        header: "Fleet",
        pages: [
            "Airbus A320neo/A321LR",
            "Airbus A319/A320/A321",
            "Airbus A330-300/A350-900",
            "Boeing 737-700/800",
            "E195LR",
            "CRJ900",
            "ATR-72-600",
            "Aircraft on order",
            "Alliances and partners – Star Alliance"
        ],
      },
      {
        header: "Board and management",
        pages: [
            "SAS Board of Directors",
            "SAS Group Management"
        ],
      },
      {
        header: "Corporate governance",
        pages: [
            "Legal structure",
            "Reports",
            "Shareholder meeting",
            "Nomination committee",
            "Board of Directors",
            "Group Management",
            "Remuneration principles",
            "Auditors",
            "Internal control",
            "Financial information and reporting",
            "Articles of Association"
        ],
      },
      {
        header: "Bolagsstyrning",
        pages: [
            "Legal struktur",
            "Rapporter",
            "Bolagsstämma",
            "Valberedning",
            "Styrelse",
            "Koncernledning",
            "Ersättningsprinciper",
            "Revisorer",
            "Intern kontroll",
            "Rapportering av finansiell information",
            "Bolagsordning"
        ],
      },
      {
        header: "SAS History",
        pages: [
            "History milestones",
            "Presidents of SAS, beginning in 1946",
            "The SAS Museum"
        ],
      },
    ],
  },
];
