const doors = [
  {
    row: 0,
    col: 0,
    number: "15",
    prices: [],
  },
  {
    row: 0,
    col: 1,
    number: "2",
    prices: [
      {
        sponsor: "Engesser Marketing GmbH, Weil der Stadt",
        text: "1 Gutschein für Das Kriminal Dinner im Wert von 79,90 €",
        winner: "",
      },
      {
        sponsor: "Engesser Marketing GmbH, Weil der Stadt",
        text: "1 Gutschein für Das Kriminal Dinner im Wert von 79,90 €",
        winner: "",
      },
      {
        sponsor: "FIT AVENUE, Weil der Stadt",
        text: "1 Gutschein für einen Trainingsmonat im Wert von 100,- €",
        winner: "",
      },
      {
        sponsor: "FIT AVENUE, Weil der Stadt",
        text: "1 Gutschein für einen Trainingsmonat im Wert von 100,- €",
        winner: "",
      },
      {
        sponsor: "café konditorei KÖNIGSTOR, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 25,- €",
        winner: "",
      },
      {
        sponsor: "Hotel Nachtquartier Weil der Stadt-Merklingen",
        text: "1 Gutschein für 2 x 2 Frühstücke",
        winner: "",
      },
    ],
  },
  {
    row: 0,
    col: 2,
    number: "16",
    prices: [],
  },
  {
    row: 0,
    col: 3,
    number: "20",
    prices: [],
  },
  {
    row: 1,
    col: 0,
    number: "19",
    prices: [],
  },
  {
    row: 1,
    col: 1,
    number: "4",
    prices: [],
  },
  {
    row: 1,
    col: 2,
    number: "10",
    prices: [],
  },
  {
    row: 1,
    col: 3,
    number: "8",
    prices: [],
  },
  {
    row: 2,
    col: 0,
    number: "3",
    prices: [
      {
        sponsor: "Friedrich Schirott Bekleidungshaus, Weil der Stadt am Rathaus",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "",
      },
      {
        sponsor: "Mosterei Franz Decker, Weil der Stadt",
        text: "1 Gutschein für 3 Pack Weil der Städter Apfelsaft (5 Liter Bag in Box)",
        winner: "",
      },
      {
        sponsor: "Mosterei Franz Decker, Weil der Stadt",
        text: "1 Gutschein für 3 Pack Weil der Städter Apfelsaft (5 Liter Bag in Box)",
        winner: "",
      },
      {
        sponsor: "Mosterei Franz Decker, Weil der Stadt",
        text: "1 Gutschein für 3 Pack Weil der Städter Apfelsaft (5 Liter Bag in Box)",
        winner: "",
      },
      {
        sponsor: "Mosterei Franz Decker, Weil der Stadt",
        text: "1 Gutschein für 3 Pack Weil der Städter Apfelsaft (5 Liter Bag in Box)",
        winner: "",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "2 Kochbücher <ul><li>Pizza originale</li><li>Mozzarella originale</li></ul> im Gesamtwert von 34,95 €",
        winner: "",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "2 Kochbücher <ul><li>Pizza originale</li><li>Mozzarella originale</li></ul> im Gesamtwert von 34,95 €",
        winner: "",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "2 Kochbücher <ul><li>Pizza originale</li><li>Mozzarella originale</li></ul> im Gesamtwert von 34,95 €",
        winner: "",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "2 Kochbücher <ul><li>Pizza originale</li><li>Mozzarella originale</li></ul> im Gesamtwert von 34,95 €",
        winner: "",
      },
      {
        sponsor: "café konditorei KÖNIGSTOR, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 25,- €",
        winner: "",
      },
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
        winner: "",
      },
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Scheurer & Decker Steuerberater, Leonberg",
        text: "1 Gutschein für eine Einkommens<wbr>steuererklärung",
        winner: "",
      },
    ],
  },
  {
    row: 2,
    col: 2,
    number: "24",
    prices: [],
  },
  {
    row: 2,
    col: 3,
    number: "11",
    prices: [],
  },
  {
    row: 3,
    col: 0,
    number: "7",
    prices: [],
  },
  {
    row: 3,
    col: 1,
    number: "14",
    prices: [],
  },
  {
    row: 3,
    col: 2,
    number: "17",
    prices: [],
  },
  {
    row: 3,
    col: 3,
    number: "6",
    prices: [],
  },
  {
    row: 4,
    col: 0,
    number: "18",
    prices: [],
  },
  {
    row: 4,
    col: 1,
    number: "5",
    prices: [],
  },
  {
    row: 4,
    col: 2,
    number: "21",
    prices: [],
  },
  {
    row: 4,
    col: 3,
    number: "23",
    prices: [],
  },
  {
    row: 5,
    col: 0,
    number: "22",
    prices: [],
  },
  {
    row: 5,
    col: 1,
    number: "12",
    prices: [],
  },
  {
    row: 5,
    col: 2,
    number: "9",
    prices: [],
  },
  {
    row: 5,
    col: 3,
    number: "13",
    prices: [],
  },
];
