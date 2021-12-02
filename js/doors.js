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
        winner: "K1132",
      },
      {
        sponsor: "Engesser Marketing GmbH, Weil der Stadt",
        text: "1 Gutschein für Das Kriminal Dinner im Wert von 79,90 €",
        winner: "K0621",
      },
      {
        sponsor: "FIT AVENUE, Weil der Stadt",
        text: "1 Gutschein für einen Trainingsmonat im Wert von 100,- €",
        winner: "K0528",
      },
      {
        sponsor: "FIT AVENUE, Weil der Stadt",
        text: "1 Gutschein für einen Trainingsmonat im Wert von 100,- €",
        winner: "K1430",
      },
      {
        sponsor: "café konditorei KÖNIGSTOR, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 25,- €",
        winner: "K0549",
      },
      {
        sponsor: "Hotel Nachtquartier Weil der Stadt-Merklingen",
        text: "1 Gutschein für 2 x 2 Frühstücke",
        winner: "K0890",
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
    prices: [
      {
        sponsor: "Scheurer & Decker Steuerberater, Leonberg",
        text: "1 Gutschein für eine Einkommensteuererklärung",
        winner: "K0510",
      },
      {
        sponsor: "Sabine Schreiber Fotografie, Weil der Stadt",
        text: "1 Gutschein für Passfotos im Wert von 15,- €",
        winner: "K1428",
      },
      {
        sponsor: "BLUMENHAUS RENZ, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K0824",
      },
    ],
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
        sponsor:
          "Friedrich Schirott Bekleidungshaus, Weil der Stadt am Rathaus",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K1876",
      },
      {
        sponsor: "Mosterei Franz Decker, Weil der Stadt",
        text:
          "1 Gutschein für 3 Pack Weil der Städter Apfelsaft (5 Liter Bag in Box)",
        winner: "K0231",
      },
      {
        sponsor: "Mosterei Franz Decker, Weil der Stadt",
        text:
          "1 Gutschein für 3 Pack Weil der Städter Apfelsaft (5 Liter Bag in Box)",
        winner: "K1855",
      },
      {
        sponsor: "Mosterei Franz Decker, Weil der Stadt",
        text:
          "1 Gutschein für 3 Pack Weil der Städter Apfelsaft (5 Liter Bag in Box)",
        winner: "K1134",
      },
      {
        sponsor: "Mosterei Franz Decker, Weil der Stadt",
        text:
          "1 Gutschein für 3 Pack Weil der Städter Apfelsaft (5 Liter Bag in Box)",
        winner: "K1115",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text:
          "2 Kochbücher <ul><li>Pizza originale</li><li>Mozzarella originale</li></ul> im Gesamtwert von 34,95 €",
        winner: "K0217",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text:
          "2 Bücher<ul><li>Meze: Orientalische Gaumengeschenke</li><li>Santorin: Rezepte & Bilder aus der Ägäis</li></ul>im Gesamtwert von 31,95 €",
        winner: "K1712",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text:
          "2 Bücher<ul><li>Das Männerkochbuch</li><li>Das Männerkochbuch – Crossover</li></ul>Im Gesamtwert von 41,90  €",
        winner: "K0199",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text:
          "2 Bücher<ul><li>Die Sprache der Küche</li><li>Der kleine Restaurantkritiker, Notizbuch</li></ul>Im Gesamtwert von 34,90  €",
        winner: "K0952",
      },
      {
        sponsor: "café konditorei KÖNIGSTOR, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 25,- €",
        winner: "K1606",
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
        winner: "K0843",
      },
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K1796",
      },
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0531",
      },
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0189",
      },
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0677",
      },
      {
        sponsor: "Scheurer & Decker Steuerberater, Leonberg",
        text: "1 Gutschein für eine Einkommens<wbr>steuererklärung",
        winner: "K0833",
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
    prices: [
      {
        sponsor: "WIDMAIER JUWELIER OPTIK AKUSTIK Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K0255",
      },
      {
        sponsor: "WIDMAIER JUWELIER OPTIK AKUSTIK Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K0663",
      },
      {
        sponsor: "WIDMAIER JUWELIER OPTIK AKUSTIK Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K1152",
      },
      {
        sponsor: "WIDMAIER JUWELIER OPTIK AKUSTIK Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K1202",
      },
      {
        sponsor: "WIDMAIER JUWELIER OPTIK AKUSTIK Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K0351",
      },
      {
        sponsor: "Reisebüro Reeg GmbH, Weil der Stadt",
        text: "1 Reisegutschein im Wert von 50,- €",
        winner: "K0111",
      },
      {
        sponsor: "Schreinerei Lutz, Weil der Stadt - Merlingen",
        text: "1 x Weiler Taler im Wert von 40,- €",
        winner: "K0933",
      },
      {
        sponsor: "Vibratec Verdichtungstechnik GmbH, Weil der Stadt",
        text: "1 x Weiler Taler im Wert von 50,- €",
        winner: "K1800",
      },
      {
        sponsor: "Fruchtkörble, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K1719",
      },
    ],
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
    prices: [
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text:
          "Bodenseelust: Eine kulinarische Reise mit Rezepten der Region im Wert von 32,- €",
        winner: "K0396",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text:
          "2 Bücher<ul><li>Die 12 wichtigsten essbaren Wildpflanzen: Bestimmen, sammeln und zubereiten</li><li>Die 12 besten essbaren Pionierpflanzen: Bestimmen, sammeln und zubereiten</li></ul> inkl. einem Sammelbeutel im Wert von 24,80 €",
        winner: "K1404",
      },
      {
        sponsor: "SZ/BZ - Sindelfinger Zeitung/Böblinger Zeitung",
        text:
          "1 Gutschein für ein Halbjahres-Abo für das  SZ/BZ-E-Paper im Wert von 137,- €",
        winner: "K1437",
      },
      {
        sponsor: "SZ/BZ - Sindelfinger Zeitung/Böblinger Zeitung",
        text:
          "1 Gutschein für ein Halbjahres-Abo für das  SZ/BZ-E-Paper im Wert von 137,- €",
        winner: "K0128",
      },
    ],
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
    prices: [
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text:
          "2 Bücher<ul><li>Trüffeltang, Ananas-Ameisen und die Fässer des Herrn Takahashi</li><li>Der kleine Restaurantkritiker, Notizbuch</li></ul> im Gesamtwert von 35,- €",
        winner: "K0789",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text:
          "2 Kochbücher<ul><li>Brotaufstriche vegan & vollwertig</li><li>Suppen, Aufläufe und Eintöpfe vegan & vollwertig</li></ul> im Gesamtwert von 25,60 €",
        winner: "K0031",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "Meine vegane Bäckerei im Wert von 24,-€",
        winner: "K1018",
      },
      {
        sponsor:
          "enBer Ingenieurbüro für Energieberatung - Klaus Hofbauer, Weil der Stadt - Merklingen",
        text: "1 Gutschein für eine Gebäudethermografie Im Wert von 150,- €",
        winner: "K1079",
      },
      {
        sponsor:
          "enBer Ingenieurbüro für Energieberatung - Klaus Hofbauer, Weil der Stadt - Merklingen",
        text: "1 Gutschein für eine Gebäudethermografie Im Wert von 150,- €",
        winner: "K0020",
      },
    ],
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
