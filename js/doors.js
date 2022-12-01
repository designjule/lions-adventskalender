/*
{
  sponsor: "Ristorante-Pizzeria Da Mimmo, Weil der Stadt",
  text: "1 Gutschein für 2 Pizzen + 2 Getränke",
  winner: "K1890",
}
*/

const doors = [
  {
    row: 0,
    col: 0,
    number: "15",
    prices: [
      {
        sponsor: "BOPPEL MEDICAL ENGINEERING Weil der Stadt",
        text: "1 Gutschein für eine Schlafuntersuchung Standard im Wert von 59,- €",
        winner: "K0110",
      },
      {
        sponsor: "Julianes natürlich schöne mode, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K0410",
      },
      {
        sponsor: "Julianes natürlich schöne mode, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K0307",
      },
      {
        sponsor: "Apero Event- und Weinkeller, Weil der Stadt",
        text: "1 Genussgutschein im Wert von 30,- €",
        winner: "K0071",
      },
      {
        sponsor: "Apero Event- und Weinkeller, Weil der Stadt",
        text: "1 Genussgutschein im Wert von 30,- €",
        winner: "K0887",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K1630",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K1574",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0830",
      },
      {
        sponsor: "Sanitätshaus Fünfer, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K2306",
      }
    ],
  },
  {
    row: 0,
    col: 1,
    number: "2",
    prices: [
      {
        sponsor: "SZ/BZ - Sindelfinger Zeitung/Böblinger Zeitung",
        text: "1 Gutschein für ein Halbjahres-Abo für die SZ/BZ-Digital im Wert von 149,- €",
        winner: "K0340",
      },
      {
        sponsor: "Bäckerei & Konditorei Raisch GmbH & Co. KG, Weil der Stadt",
        text: "4 Gutscheine im Gesamtwert von 20,- €",
        winner: "K1585",
      },
      {
        sponsor: "Mosterei Franz Decker, Weil der Stadt",
        text: "1 Gutschein für 3 Pack Weil der Städter Apfelsaft (5 Liter Bag in Box)",
        winner: "K1662",
      },
      {
        sponsor: "Mosterei Franz Decker, Weil der Stadt",
        text: "1 Gutschein für 3 Pack Weil der Städter Apfelsaft (5 Liter Bag in Box)",
        winner: "K2184",
      },
      {
        sponsor: "Mosterei Franz Decker, Weil der Stadt",
        text: "1 Gutschein für 3 Pack Weil der Städter Apfelsaft (5 Liter Bag in Box)",
        winner: "K0579",
      },
      {
        sponsor: "Mosterei Franz Decker, Weil der Stadt",
        text: "1 Gutschein für 3 Pack Weil der Städter Apfelsaft (5 Liter Bag in Box)",
        winner: "K1183",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "Buch „BAO & Dim Sum“ im Wert von 26,- €",
        winner: "K2357",
      }
    ],
  },
  {
    row: 0,
    col: 2,
    number: "16",
    prices: [
      {
        sponsor: "BOPPEL MEDICAL ENGINEERING Weil der Stadt",
        text: "1 Gutschein für eine Schlafuntersuchung Standard im Wert von 59,- €",
        winner: "K0501",
      },
      {
        sponsor: "Hechtbräu KG, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 25,- €",
        winner: "K1679",
      },
      {
        sponsor: "Hechtbräu KG, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 25,- €",
        winner: "K1669",
      },
      {
        sponsor: "Jürgen Roeßle Versicherungsbüro, Weil der Stadt - Merklingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K1638",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K2295",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0454",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0025",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0008",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0299",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0052",
      },
      {
        sponsor: "café konditorei KÖNIGSTOR, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 25,- € ",
        winner: "K0381",
      }
    ],
  },
  {
    row: 0,
    col: 3,
    number: "20",
    prices: [
      {
        sponsor: "Benny Blanko Partystadl & Club, Sindelfingen",
        text: "1 x Weiler Taler im Wert von 50,- €",
        winner: "",
      },
      {
        sponsor: "INNENARCHITEKTIN JACQUELINE MÖRK, Weil der Stadt",
        text: "1 Gutschein für eine Einrichtungberatung oder Home Staging im Wert von 700,-Euro",
        winner: "",
      }
    ],
  },
  {
    row: 1,
    col: 0,
    number: "19",
    prices: [
      {
        sponsor: "Landgasthof 1610, Weil der Stadt - Merklingen",
        text: "1 Verzehrgutschein im Wert von 25,- €",
        winner: "",
      },
      {
        sponsor: "Landgasthof 1610, Weil der Stadt - Merklingen",
        text: "1 Verzehrgutschein im Wert von 25,- €",
        winner: "",
      },
      {
        sponsor: "FLEMMIG'S FLAKON, Weil der Stadt",
        text: "1 Kosmetikbehandlungsgutschein im Wert von 45,- €",
        winner: "",
      },
      {
        sponsor: "INNENARCHITEKTIN JACQUELINE MÖRK, Weil der Stadt",
        text: "1 Gutschein für eine Einrichtungberatung oder Home Staging im Wert von 700,-Euro",
        winner: "",
      }
    ],
  },
  {
    row: 1,
    col: 1,
    number: "4",
    prices: [
      {
        sponsor: "Vibratec Verdichtungstechnik GmbH, Weil der Stadt",
        text: "1 x Weiler Taler im Wert von 50,- €",
        winner: "K1246",
      },
      {
        sponsor: "Vibratec Verdichtungstechnik GmbH, Weil der Stadt",
        text: "1 x Weiler Taler im Wert von 50,- €",
        winner: "K1613",
      },
      {
        sponsor: "STADT-APOTHEKE AM NARRENBRUNNEN, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K0310",
      },
      {
        sponsor: "STADT-APOTHEKE AM NARRENBRUNNEN, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K0825",
      },
      {
        sponsor: "STADT-APOTHEKE AM NARRENBRUNNEN, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K1821",
      },
      {
        sponsor: "STADT-APOTHEKE AM NARRENBRUNNEN, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K2161",
      },
      {
        sponsor: "STADT-APOTHEKE AM NARRENBRUNNEN, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K1403",
      },
      {
        sponsor: "KEVIN KUGEL® CHOCOLATIER, Sindelfingen",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K1277",
      },
      {
        sponsor: "KEVIN KUGEL® CHOCOLATIER, Sindelfingen",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K1385",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "Buch „Meine vegane Bäckerei“ im Wert von 24,-€",
        winner: "K0761",
      }
    ],
  },
  {
    row: 1,
    col: 2,
    number: "10",
    prices: [
      {
        sponsor: "Larissas Nagelstudio, Weil der Stadt - Merklingen",
        text: "1 Gutschein im Wert von 25,- €",
        winner: "K1122",
      },
      {
        sponsor: "Larissas Nagelstudio, Weil der Stadt - Merklingen",
        text: "1 Gutschein im Wert von 25,- €",
        winner: "K1242",
      },
      {
        sponsor: "Larissas Nagelstudio, Weil der Stadt - Merklingen",
        text: "1 Gutschein im Wert von 25,- €",
        winner: "K0986",
      },
      {
        sponsor: "Larissas Nagelstudio, Weil der Stadt - Merklingen",
        text: "1 Gutschein im Wert von 25,- €",
        winner: "K0095",
      },
      {
        sponsor: "Ernst Heller e.K. Gebäudeenergieberater, Weil der Stadt - Merklingen",
        text: "1 Gutschein für eine Bauthermografie im Wert von 125,- €",
        winner: "K1274",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "2 Bücher<ul><li>„Killing me Soufflé“</li><li>„Säfte und Smoothies“</li>im Gesamtwert von 29,- €",
        winner: "K0546",
      }
    ],
  },
  {
    row: 1,
    col: 3,
    number: "8",
    prices: [
      {
        sponsor: "KEVIN KUGEL Chocolaterie, Nufringen",
        text: "1 Gutschein für 1 Pralinen-Workshop für 1 Person",
        winner: "K0017",
      },
      {
        sponsor: "Rössle Reha, Weil der Stadt",
        text: "Gutschein für 3 Monat Gerätetraining im Wert von 55,- €",
        winner: "K0359",
      },
      {
        sponsor: "Ristorante Pizzeria Da Nono, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 25,- €",
        winner: "K1027",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "Buch „Weiberwirtschaften Baden-Württemberg“ im Wert von 22,- €",
        winner: "K0154",
      }
    ],
  },
  {
    row: 2,
    col: 0,
    number: "3",
    prices: [
    {
      sponsor: "Scheurer & Decker Steuerberater, Leonberg",
      text: "Gutschein für eine Einkommensteuererklärung",
      winner: "K0361",
    },
    {
      sponsor: "BOPPEL MEDICAL ENGINEERING Weil der Stadt",
      text: "1 Gutschein für eine Schlafuntersuchung Standard im Wert von 59,- €",
      winner: "K2304",
    },
    {
      sponsor: "HÄDECKE VERLAG, Weil der Stadt",
      text: "2 Bücher<br />„Heiße Schokolade“<br />„Crackers & Grissini“<br />im Gesamtwert von 28,- €",
      winner: "K0073",
    }
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
      winner: "K0562",
    },
    {
      sponsor: "Kreissparkasse Böblingen",
      text: "1 x Weiler Taler im Wert von 20,- €",
      winner: "K1508",
    },
    {
      sponsor: "Kreissparkasse Böblingen",
      text: "1 x Weiler Taler im Wert von 20,- €",
      winner: "K1854",
    },
    {
      sponsor: "Kreissparkasse Böblingen",
      text: "1 x Weiler Taler im Wert von 20,- €",
      winner: "K0464",
    },
    {
      sponsor: "Kreissparkasse Böblingen",
      text: "1 x Weiler Taler im Wert von 20,- €",
      winner: "K2351",
    },
    {
      sponsor: "Kreissparkasse Böblingen",
      text: "1 x Weiler Taler im Wert von 20,- €",
      winner: "K1199",
    },
    {
      sponsor: "Kreissparkasse Böblingen",
      text: "1 x Weiler Taler im Wert von 20,- €",
      winner: "K0674",
    },
    {
      sponsor: "SZ/BZ - Sindelfinger Zeitung/Böblinger Zeitung",
      text: "1 Gutschein für ein Halbjahres-Abo für die SZ/BZ-Digital im Wert von 149,- €",
      winner: "K1844",
    },
    {
      sponsor: "HÄDECKE VERLAG, Weil der Stadt",
      text: "Buch „Frühstücksglück“ im Wert von 26,- €",
      winner: "K2205",
    }
    ],
  },
  {
    row: 2,
    col: 2,
    number: "24",
    prices: [
      {
        sponsor: "NUSSBAUM MEDIEN, Weil der Stadt",
        text: "1 Gutschein für eine private Kleinanzeige im Wert von max. 30,- €",
        winner: "",
      },
      {
        sponsor: "NUSSBAUM MEDIEN, Weil der Stadt",
        text: "1 Gutschein für eine private Kleinanzeige im Wert von max. 30,- €",
        winner: "",
      },
      {
        sponsor: "NUSSBAUM MEDIEN, Weil der Stadt",
        text: "1 Gutschein für eine private Kleinanzeige im Wert von max. 30,- €",
        winner: "",
      },
      {
        sponsor: "NUSSBAUM MEDIEN, Weil der Stadt",
        text: "1 Gutschein für eine private Kleinanzeige im Wert von max. 30,- €",
        winner: "",
      },
      {
        sponsor: "NUSSBAUM MEDIEN, Weil der Stadt",
        text: "1 Gutschein für eine private Kleinanzeige im Wert von max. 30,- €",
        winner: "",
      },
      {
        sponsor: "NUSSBAUM MEDIEN, Weil der Stadt",
        text: "1 Gutschein für eine private Kleinanzeige im Wert von max. 30,- €",
        winner: "",
      },
      {
        sponsor: "NUSSBAUM MEDIEN, Weil der Stadt",
        text: "1 Gutschein für eine private Kleinanzeige im Wert von max. 30,- €",
        winner: "",
      },
      {
        sponsor: "NUSSBAUM MEDIEN, Weil der Stadt",
        text: "1 Gutschein für eine private Kleinanzeige im Wert von max. 30,- €",
        winner: "",
      },
      {
        sponsor: "NUSSBAUM MEDIEN, Weil der Stadt",
        text: "1 Gutschein für eine private Kleinanzeige im Wert von max. 30,- €",
        winner: "",
      },
      {
        sponsor: "NUSSBAUM MEDIEN, Weil der Stadt",
        text: "1 Gutschein für eine private Kleinanzeige im Wert von max. 30,- €",
        winner: "",
      },
      {
        sponsor: "Derichsweiler Umzüge, Sindelfingen",
        text: "1 x Weiler Taler im Wert von 100,- €",
        winner: "",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "2 Kochbücher<ul><li>Brotaufstriche vegan & vollwertig</li><li>Suppen, Aufläufe und Eintöpfe vegan & vollwertig</li></ul>im Gesamtwert von 25,60 €",
        winner: "",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "2 Bücher<ul><li>Trüffeltang, Ananas-Ameisen und die Fässer des Herrn Takahashi</li><li>Der kleine Restaurantkritiker, Notizbuch</li></ul>im Gesamtwert von 35,- €",
        winner: "",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "2 Kochbücher<ul><li>Knuspermüsli & Granola</li><li>Säfte & Smoothies</li></ul>im Gesamtwert von 25,90 €",
        winner: "",
      }
    ],
  },
  {
    row: 2,
    col: 3,
    number: "11",
    prices: [
      {
        sponsor: "KEVIN KUGEL® CHOCOLATIER, Sindelfingen",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K0804",
      },
      {
        sponsor: "KEVIN KUGEL® CHOCOLATIER, Sindelfingen",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K0748",
      },
      {
        sponsor: "KEVIN KUGEL® CHOCOLATIER, Sindelfingen",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K0998",
      },
      {
        sponsor: "KEVIN KUGEL® CHOCOLATIER, Sindelfingen",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K0839",
      },
      {
        sponsor: "FIT AVENUE, Weil der Stadt",
        text: "Gutschein für einen All-inclusive Trainingsmonat",
        winner: "K0666",
      },
      {
        sponsor: "Fruchtkörble, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K0935",
      },
      {
        sponsor: "Fruchtkörble, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K1586",
      },
      {
        sponsor: "Metzgerei Heinkele und Partyservice , Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K0649",
      },
      {
        sponsor: "Café Da Luana, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 20,- €",
        winner: "K1646",
      }
    ],
  },
  {
    row: 3,
    col: 0,
    number: "7",
    prices: [
      {
        sponsor: "KEVIN KUGEL® CHOCOLATIER, Sindelfingen",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K0419",
      },
      {
        sponsor: "KEVIN KUGEL® CHOCOLATIER, Sindelfingen",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K1790",
      },
      {
        sponsor: "KEVIN KUGEL® CHOCOLATIER, Sindelfingen",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K0990",
      },
      {
        sponsor: "KEVIN KUGEL® CHOCOLATIER, Sindelfingen",
        text: "1 Gutschein für 1 Pralinen-Workshop für 1 Person",
        winner: "K0838",
      },
      {
        sponsor: "Stadt Weil der Stadt",
        text: "1 x Weiler Taler im Wert von 50,- €",
        winner: "K0532",
      },
      {
        sponsor: "Schreinerei Lutz, Weil der Stadt - Merlingen",
        text: "1 x Weiler Taler im Wert von 30,- €",
        winner: "K1480",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "Buch „Original schwäbisch backen“ im Wert von 22,-€",
        winner: "K0187",
      }
    ],
  },
  {
    row: 3,
    col: 1,
    number: "14",
    prices: [
      {
        sponsor: "BOPPEL MEDICAL ENGINEERING Weil der Stadt",
        text: "1 Gutschein für eine Schlafuntersuchung Standard im Wert von 59,- €",
        winner: "K0346",
      },
      {
        sponsor: "Diefenbach Bäckerei & Konditorei, Weil der Stadt",
        text: "1 Backwaren-Gutschein im Wert von 20,- €",
        winner: "K1380",
      },
      {
        sponsor: "Parkrestaurant Stadthalle Sindelfingen",
        text: "1 Gutschein für ein Essen für 2 Personen",
        winner: "K1344",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0821",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0977",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0486",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K1527",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K1841",
      },
      {
        sponsor: "Sanitätshaus Fünfer, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K1724",
      }
    ],
  },
  {
    row: 3,
    col: 2,
    number: "17",
    prices: [
      {
        sponsor: "WIDMAIER AUGENOPTIK JUWELIER, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "WIDMAIER AUGENOPTIK JUWELIER, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "CORRADO IMBISS, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 25,- €",
        winner: "",
      },
      {
        sponsor: "GOFIT…mein Studio, Weil der Stadt - Merklingen",
        text: "1 Gutschein für 1 Monat Fitness-Wellness-Kurse im Wert von 40,- €",
        winner: "",
      },
      {
        sponsor: "GOFIT…mein Studio, Weil der Stadt - Merklingen",
        text: "1 Gutschein für 1 Monat Fitness-Wellness-Kurse im Wert von 40,- €",
        winner: "",
      },
      {
        sponsor: "GOFIT…mein Studio, Weil der Stadt - Merklingen",
        text: "1 Gutschein für 1 Monat Fitness-Wellness-Kurse im Wert von 40,- €",
        winner: "",
      },
      {
        sponsor: "GOFIT…mein Studio, Weil der Stadt - Merklingen",
        text: "1 Gutschein für 1 Monat Fitness-Wellness-Kurse im Wert von 40,- €",
        winner: "",
      }
    ],
  },
  {
    row: 3,
    col: 3,
    number: "6",
    prices: [
      {
        sponsor: "KEVIN KUGEL® CHOCOLATIER, Sindelfingen",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K1193",
      },
      {
        sponsor: "KEVIN KUGEL® CHOCOLATIER, Sindelfingen",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K1850",
      },
      {
        sponsor: "KEVIN KUGEL® CHOCOLATIER, Sindelfingen",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K0141",
      },
      {
        sponsor: "OX und Q Die Landwirtschaft, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 25,- €",
        winner: "K1000",
      },
      {
        sponsor: "OX und Q Die Landwirtschaft, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 25,- €",
        winner: "K1825",
      },
      {
        sponsor: "WIDMAIER AUGENOPTIK JUWELIER, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K0013",
      },
      {
        sponsor: "WIDMAIER AUGENOPTIK JUWELIER, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K0189",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "Buch „Gut Brot will Weile haben“ im Wert von 26,-€",
        winner: "K0907",
      }
    ],
  },
  {
    row: 4,
    col: 0,
    number: "18",
    prices: [
      {
        sponsor: "Ernst Heller e.K. Gebäudeenergieberater, Weil der Stadt - Merklingen",
        text: "1 Gutschein für eine Bauthermografie im Wert von 125,- €",
        winner: "",
      },
      {
        sponsor: "Radhaus Weber, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Radhaus Weber, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Radhaus Weber, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Radhaus Weber, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Radhaus Weber, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Sabine Schreiber Fotografie, Weil der Stadt",
        text: "1 Gutschein für Passfotos im Wert von 18,- €",
        winner: "",
      }
    ],
  },
  {
    row: 4,
    col: 1,
    number: "5",
    prices: [
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0300",
      },
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0725",
      },
      {
        sponsor: "Kreissparkasse Böblingen",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0600",
      },
      {
        sponsor: "RAUM-IDEEN-RAUM ANDREA BLUM, Weil der Stadt",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0093",
      },
      {
        sponsor: "RAUM-IDEEN-RAUM ANDREA BLUM, Weil der Stadt",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K0797",
      },
      {
        sponsor: "RAUM-IDEEN-RAUM ANDREA BLUM, Weil der Stadt",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K1190",
      },
      {
        sponsor: "RAUM-IDEEN-RAUM ANDREA BLUM, Weil der Stadt",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K1029",
      },
      {
        sponsor: "RAUM-IDEEN-RAUM ANDREA BLUM, Weil der Stadt",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "K1721",
      },
      {
        sponsor: "Lufthansa City Center Reisebüro Reeg GmbH, Weil der Stadt",
        text: "1 Reisegutschein im Wert von 50,- €",
        winner: "K2009",
      },
      {
        sponsor: "KEVIN KUGEL® CHOCOLATIER, Sindelfingen",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K1635",
      },
      {
        sponsor: "KEVIN KUGEL® CHOCOLATIER, Sindelfingen",
        text: "1 Einkaufsgutschein im Wert von 25,- €",
        winner: "K0362",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "Buch „Irish Whiskey“ im Wert von 22,- €",
        winner: "K0982",
      },
      {
        sponsor: "Autohaus Weeber, Weil der Stadt",
        text: "1 Gutschein für die Waschanlage im Wert von je 25,- €",
        winner: "K1275",
      }
    ],
  },
  {
    row: 4,
    col: 2,
    number: "21",
    prices: [
      {
        sponsor: "WIDMAIER AUGENOPTIK JUWELIER, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Gasthaus zum Stern, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 25,- €",
        winner: "",
      },
      {
        sponsor: "Gasthaus zum Stern, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 25,- €",
        winner: "",
      },
      {
        sponsor: "engesser marketing gmbh, Weil der Stadt",
        text: "2 x Tickets für „Das Escape Dinner“",
        winner: "",
      },
    ],
  },
  {
    row: 4,
    col: 3,
    number: "23",
    prices: [
      {
        sponsor: "KÖRPERWERK Ergo I Physio I Fitness, Weil der Stadt - Merklingen",
        text: "1 Gutschein für 1 Monate Training im Wert von je 59,- €",
        winner: "",
      },
      {
        sponsor: "KÖRPERWERK Ergo I Physio I Fitness, Weil der Stadt - Merklingen",
        text: "1 Gutschein für 1 Monate Training im Wert von je 59,- €",
        winner: "",
      },
      {
        sponsor: "KÖRPERWERK Ergo I Physio I Fitness, Weil der Stadt - Merklingen",
        text: "1 Gutschein für 1 Monate Training im Wert von je 59,- €",
        winner: "",
      },
      {
        sponsor: "Kosmetikstudio Sabine Albrecht, Bad Liebenzell - Möttlingen",
        text: "2 x 1 Verwöhngesichtsbehandlung im Wert von je 49,-€ ",
        winner: "",
      },
      {
        sponsor: "Kosmetikstudio Sabine Albrecht, Bad Liebenzell - Möttlingen",
        text: "2 x 1 Verwöhngesichtsbehandlung im Wert von je 49,-€ ",
        winner: "",
      }
    ],
  },
  {
    row: 5,
    col: 0,
    number: "22",
    prices: [
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Mitglieder des Lions Club Johannes Kepler",
        text: "1 x Weiler Taler im Wert von 20,- €",
        winner: "",
      },
      {
        sponsor: "Hotel Nachtquartier Weil der Stadt-Merklingen",
        text: "Gutschein für 1 x Frühstücksbuffet für 2 Personen",
        winner: "",
      }
    ],
  },
  {
    row: 5,
    col: 1,
    number: "12",
    prices: [
      {
        sponsor: "FIT AVENUE, Weil der Stadt",
        text: "Gutschein für einen All-inclusive Trainingsmonat",
        winner: "K2056",
      },
      {
        sponsor: "FIT AVENUE, Weil der Stadt",
        text: "Gutschein für einen All-inclusive Trainingsmonat",
        winner: "K0144",
      },
      {
        sponsor: "EINE-WELT-LADEN, Weil der Stadt",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K1524",
      },
      {
        sponsor: "Familie Fiedler, Leonberg",
        text: "1 Bosch Temperaturmessgerät UniversalTemp im Wert von 40,- €",
        winner: "K1308",
      },
      {
        sponsor: "Café Da Luana, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 20,- €",
        winner: "K0569",
      }
    ],
  },
  {
    row: 5,
    col: 2,
    number: "9",
    prices: [
      {
        sponsor: "Bekleidungshaus Friedrich Schirott, Weil der Stadt am Rathaus",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K0621",
      },
      {
        sponsor: "Bekleidungshaus Friedrich Schirott, Weil der Stadt am Rathaus",
        text: "1 Einkaufsgutschein im Wert von 20,- €",
        winner: "K0662",
      },
      {
        sponsor: "FIT AVENUE, Weil der Stadt",
        text: "Gutschein für einen All-inclusive Trainingsmonat",
        winner: "K0016",
      },
      {
        sponsor: "FIT AVENUE, Weil der Stadt",
        text: "Gutschein für einen All-inclusive Trainingsmonat",
        winner: "K0669",
      },
      {
        sponsor: "HÄDECKE VERLAG, Weil der Stadt",
        text: "Buch „Tajines“ im Wert von 20,- €",
        winner: "K2204",
      }
    ],
  },
  {
    row: 5,
    col: 3,
    number: "13",
    prices: [
      {
        sponsor: "Ernst Heller e.K. Gebäudeenergieberater, Weil der Stadt - Merklingen",
        text: "1 Gutschein für eine Bauthermografie im Wert von 125,- €",
        winner: "K0593",
      },
      {
        sponsor: "QuerPass, Holzgerlingen",
        text: "1 Kalas Weinkühler im Wert von 49,95 €",
        winner: "K1007",
      },
      {
        sponsor: "Lichtblick Kommunikation, Leonberg",
        text: "1 x Weiler Taler im Wert von 50,- €",
        winner: "K0964",
      },
      {
        sponsor: "RESTAURANT SAMOWAR, Weil der Stadt",
        text: "1 Verzehrgutschein im Wert von 20,- €",
        winner: "K0906",
      }
    ],
  },
];
