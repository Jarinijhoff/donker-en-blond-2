/* global React, PageHero */
const { useState: useState_m } = React;

const MENU = [
  {
    id: "warme-dranken",
    label: "Warme dranken",
    sections: [
      {
        title: "Warme dranken",
        items: [
          { name: "Koffie",                                    price: "1,75" },
          { name: "Cappuccino",                                price: "1,80" },
          { name: "Koffie verkeerd",                           price: "1,75" },
          { name: "Wiener melange",                            price: "4,50" },
          { name: "Latte Macchiato",                           price: "3,25" },
          { name: "Latte Macchiato met siroop (caramel / hazelnoot / speculoos / kinder bueno / witte chocolade)", price: "4,50" },
          { name: "Grote koffie",                              price: "2,75" },
          { name: "Espresso",                                  price: "2,25" },
          { name: "Dubbele espresso",                          price: "3,00" },
          { name: "Flat white",                                price: "3,25" },
          { name: "Warme chocolamel van Nutricia",             price: "1,75" },
          { name: "— met slagroom",                            price: "+ 1,00" },
        ],
      },
      {
        title: "Koffie specials",
        items: [
          { name: "Blonde koffie met caramel siroop",          price: "3,25" },
          { name: "Roast / Hazelnut koffie",                   price: "4,25" },
          { name: "Kinder Boeno koffie",                       price: "5,25" },
          { name: "Lotus Speculoos koffie",                    price: "5,25" },
          { name: "Kitkat White koffie",                       price: "5,25" },
          { name: "Smaak van de Maand",                        price: "3,25" },
          { name: "IJskoffie als koffiespecial (seizoen)",      price: "6,95" },
          { name: "Irish / Spanish / Italian Coffee",          price: "6,95" },
          { name: "Koffie Likeur",                             price: "4,75" },
        ],
      },
    ],
  },
  {
    id: "dranken",
    label: "Frisdranken & Sappen",
    sections: [
      {
        title: "Frisdranken",
        items: [
          { name: "Coca Cola / Cola zero / Fanta orange",      price: "2,09" },
          { name: "Cassis / Sprite zero",                      price: "2,09" },
          { name: "Bruisend water klein",                      price: "1,35" },
          { name: "Bruisend water king",                       price: "2,45" },
          { name: "Stille water klein",                        price: "1,35" },
          { name: "Stille water king",                         price: "2,45" },
          { name: "Lipton green / sparkling",                  price: "2,35" },
          { name: "Lipton tea mango / chamomille",             price: "3,35" },
          { name: "Royal Bliss signature tonic / bitter lemon", price: "3,25" },
          { name: "Royal Bliss aromatic berry / ginger ale",   price: "3,25" },
          { name: "Chocomel / chocolat frist",                 price: "1,75" },
          { name: "Rivella",                                   price: "2,25" },
        ],
      },
      {
        title: "Sappen",
        items: [
          { name: "Verse jus d'orange",                        price: "4,95" },
          { name: "Smoothie aardbei of mango",                 price: "5,25" },
        ],
      },
    ],
  },
  {
    id: "lunch",
    label: "Lunch",
    sections: [
      {
        title: "Dagverse soep",
        note: "Geserveerd met huisgebakken brood",
        items: [
          { name: "Soep van de dag",                           price: "6,75" },
        ],
      },
      {
        title: "Maaltijdsalades",
        items: [
          { name: "Salade Donker",                             price: "13,00" },
          { name: "Salade Blond",                              price: "13,00" },
        ],
      },
      {
        title: "Smakelijke kroketten",
        note: "Per 2 stuks, geserveerd met brood",
        items: [
          { name: "Brabants assortement kroketten",            price: "8,50" },
          { name: "Garnalen kroketten",                        price: "10,50" },
          { name: "Kaas kroketten",                            price: "8,00" },
          { name: "Goulash kroketten",                         price: "8,50" },
        ],
      },
      {
        title: "Snacks",
        note: "Geserveerd met friet",
        items: [
          { name: "Frikandel of Lekker met friet",             price: "6,25" },
          { name: "Frikandel of Lekker met pla",               price: "6,25" },
          { name: "Crispy chicken met friet",                  price: "7,50" },
        ],
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    sections: [
      {
        title: "Sandwiches",
        items: [
          { name: "Donker",                                    price: "10,75" },
          { name: "Blond",                                     price: "10,75" },
        ],
      },
      {
        title: "Lekker bij de tafel",
        items: [
          { name: "Nachos",                                    price: "3,99" },
          { name: "Borrelplankje Deluxe",                      price: "13,50" },
          { name: "Bittergarnituur",                           price: "3,50" },
          { name: "Ritterballen (6 stuks)",                    price: "5,00" },
          { name: "Crispy chicken (6 stuks)",                  price: "6,50" },
          { name: "Mini frikandellen (6 stuks)",               price: "5,50" },
        ],
      },
    ],
  },
  {
    id: "pannenkoeken",
    label: "Pannenkoeken",
    sections: [
      {
        title: "Pannenkoeken & Crêpes",
        items: [
          { name: "Kinderpannenkoek naturel",                  price: "4,75" },
          { name: "— met stroop",                              price: "4,75" },
          { name: "— met spek",                                price: "5,50" },
          { name: "— met appel en kaneel",                     price: "5,50" },
          { name: "— met nootella / pindakaas",                price: "5,50" },
          { name: "Crêpe Donker",                              price: "7,95" },
          { name: "Crêpe Blond",                               price: "8,95" },
          { name: "IJsfricandelletjes",                        price: "8,95" },
        ],
      },
    ],
  },
  {
    id: "high-tea",
    label: "High Tea",
    sections: [
      {
        title: "High Tea",
        note: "Geserveerd in drie gangen: huisgemaakt soepje met mini toasty, hartige versnaperingen en donkere & blonde lekkernijen. Vanaf 2 personen · graag een dag van tevoren reserveren · niet mogelijk in weekenden, op feestdagen of op het terras.",
        items: [
          { name: "High Tea",                                  price: "22,50" },
          { name: "Kids High Tea met ranja (tot 10 jaar)",     price: "16,95" },
        ],
      },
      {
        title: "Tijden",
        items: [
          { name: "Maandag t/m donderdag",  price: "vanaf 14.00 uur", noEuro: true },
          { name: "Vrijdag",                price: "vanaf 14.30 uur", noEuro: true },
        ],
      },
    ],
  },
];

function MenuPage({ go }) {
  const [active, setActive] = useState_m("warme-dranken");

  const onTab = (id) => {
    setActive(id);
    const el = document.getElementById("sec-" + id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <main>
      <PageHero
        crumb="03 · Menukaart"
        title='Onze kaart,<br/><span class="italic">vers en eerlijk.</span>'
        lead="Hieronder vindt u onze volledige menukaart. Vraag gerust naar de dagspecials."
      />

      <div className="menu-tabs">
        <div className="container">
          <div className="menu-tabs__inner">
            {MENU.map((m) => (
              <button
                key={m.id}
                className={"menu-tab " + (active === m.id ? "active" : "")}
                onClick={() => onTab(m.id)}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: "clamp(40px, 6vw, 80px) var(--gutter)" }}>
        {MENU.map((cat) => (
          <div key={cat.id} id={"sec-" + cat.id} style={{ marginBottom: 64 }}>
            {cat.sections.map((sec, si) => (
              <div key={si} style={{ marginBottom: 40 }}>
                <h2 style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 500,
                  color: "var(--espresso)",
                  margin: "0 0 4px",
                  paddingBottom: 10,
                  borderBottom: "2px solid var(--blond)",
                  display: "inline-block"
                }}>
                  {sec.title}
                </h2>
                {sec.note && (
                  <p style={{
                    fontSize: 13,
                    color: "var(--muted)",
                    margin: "8px 0 16px",
                    fontStyle: "italic",
                    maxWidth: "70ch"
                  }}>
                    {sec.note}
                  </p>
                )}
                <div style={{ marginTop: sec.note ? 0 : 16 }}>
                  {sec.items.map((it, i) => (
                    <div key={i} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      padding: "10px 0",
                      borderBottom: "1px dashed var(--line)",
                      gap: 16
                    }}>
                      <span style={{
                        fontFamily: it.name.startsWith("—") ? "var(--sans)" : "var(--serif)",
                        fontSize: it.name.startsWith("—") ? 14 : "clamp(15px, 1.5vw, 18px)",
                        color: it.name.startsWith("—") ? "var(--ink-2)" : "var(--ink)",
                        fontStyle: it.name.startsWith("—") ? "italic" : "normal"
                      }}>
                        {it.name}
                      </span>
                      <span style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(15px, 1.5vw, 18px)",
                        color: "var(--espresso)",
                        whiteSpace: "nowrap",
                        flexShrink: 0
                      }}>
                        {it.noEuro ? it.price : `€ ${it.price}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

function CateringPage({ go }) { return <main />; }

window.MenuPage = MenuPage;
window.CateringPage = CateringPage;
