const doors = [
  {
    row: 0,
    col: 0,
    number: "15",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 0,
    col: 1,
    number: "2",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 0,
    col: 2,
    number: "16",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 0,
    col: 3,
    number: "20",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 1,
    col: 0,
    number: "19",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 1,
    col: 1,
    number: "4",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 1,
    col: 2,
    number: "10",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 1,
    col: 3,
    number: "8",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 2,
    col: 0,
    number: "3",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 2,
    col: 1,
    number: "1",
    prices: [
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "123"
      },
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "123"
      },
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "123"
      },
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "123"
      },
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "123"
      },
      {
        sponsor: "Scheurer & Decker Steuerberater, Leonberg",
        text: "1 Gutschein für eine Einkommens<wbr>steuererklärung",
        winner: "123"
      }
    ],
  },
  {
    row: 2,
    col: 2,
    number: "24",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 2,
    col: 3,
    number: "11",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 3,
    col: 0,
    number: "7",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 3,
    col: 1,
    number: "14",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 3,
    col: 2,
    number: "17",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 3,
    col: 3,
    number: "6",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 4,
    col: 0,
    number: "18",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 4,
    col: 1,
    number: "5",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 4,
    col: 2,
    number: "21",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 4,
    col: 3,
    number: "23",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 5,
    col: 0,
    number: "22",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 5,
    col: 1,
    number: "12",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 5,
    col: 2,
    number: "9",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
  {
    row: 5,
    col: 3,
    number: "13",
    prices: [
      { sponsor: "Deutsche Bank", text: "100 mal Schulden im Wert von 3000€" },
      { sponsor: "Deutsche Bahn", text: "10 Fahrkarten im Wert von 3,99€" },
    ],
  },
];