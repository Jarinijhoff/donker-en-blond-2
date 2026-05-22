/* global React, PageHero, SecHead */
const { useState: useState_m } = React;

/* ============================================================
   MENU
   ============================================================ */
const MENU = [
  {
    id: "broodjes",
    title: "Broodjes",
    italic: "& warme klassiekers",
    sub: "Ambachtelijk bakkersbrood van Van Wijk, belegd met liefde en verse ingrediënten van de markt.",
    items: [
      { name: "Brioche · brie & vijg", desc: "Gesmolten Klaver brie, gegrilde vijg, honing en peperige rucola.", price: "12,50", tags: ["Vega", "Huisspecial"] },
      { name: "Carpaccio van rund", desc: "Op rustico met truffelmayonaise, pijnboompit, parmezaan en geconfijte tomaat.", price: "13,75", tags: [] },
      { name: "Gerookte zalm · dille", desc: "Op zuurdesem met roomkaas, kappertjes, rode ui en verse dille.", price: "13,50", tags: [] },
      { name: "Gegrilde kip · pesto", desc: "Sappige kip, zelfgemaakte pesto, zongedroogde tomaat en oude kaas.", price: "11,75", tags: [] },
      { name: "Geitenkaas · walnoot", desc: "Warme geitenkaas, honing, walnoten en handgeplukte sla op rustico.", price: "11,25", tags: ["Vega"] },
      { name: "Tonijnsalade van het huis", desc: "Met augurk, kappertjes en bieslook. Onveranderd sinds 2009.", price: "10,50", tags: [] },
      { name: "Soep van de dag", desc: "Wisselend per seizoen, met huisgebakken brood en kruidenboter.", price: "7,25", tags: ["Vega"] },
      { name: "Twaalf-uurtje Donker & Blond", desc: "Soep, een kroket op brood en een huisgemaakte salade.", price: "14,50", tags: ["Klassiek"] },
    ],
  },
  {
    id: "ontbijt",
    title: "Ontbijt",
    italic: "tot in de middag",
    sub: "Voor wie laat is opgestaan of gewoon zin heeft in iets zoets-met-zout. Ontbijt schenken we tot 12:00.",
    items: [
      { name: "De Blonde", desc: "Yoghurt, granola van het huis, vers fruit, honing en pompoenpit.", price: "8,75", tags: ["Vega"] },
      { name: "De Donkere", desc: "Twee gepocheerde eieren, avocado, gerookte zalm en sourdough toast.", price: "13,50", tags: [] },
      { name: "Eggs Royale", desc: "Twee eieren benedict met zalm en huisgemaakte hollandaise.", price: "13,25", tags: [] },
      { name: "Pannenkoekjes · ricotta", desc: "Drie ricotta-pannenkoekjes met ahornsiroop, blauwe bessen en mascarpone.", price: "10,50", tags: ["Vega"] },
      { name: "Boterham met spek & ei", desc: "Knapperig spek, gebakken ei, op zuurdesemtoast.", price: "9,50", tags: [] },
      { name: "Croissant · jam", desc: "Vers uit eigen oven met huisgemaakte abrikozenconfituur.", price: "4,25", tags: ["Vega"] },
    ],
  },
  {
    id: "zoet",
    title: "Zoet",
    italic: "uit eigen oven",
    sub: "Elke ochtend bakken we vers. Wat op is, is op. Vraag gerust naar de specials van vandaag.",
    items: [
      { name: "Muffin van het huis", desc: "Chocolade, blauwe bes of appel-kaneel. Elke ochtend vers.", price: "3,75", tags: ["Vega"] },
      { name: "Worteltaart", desc: "Met roomkaas-topping en walnoot. Onze meest gevraagde.", price: "5,25", tags: ["Vega"] },
      { name: "Tiramisu", desc: "Klassiek bereid met mascarpone, espresso en amaretti.", price: "6,75", tags: [] },
      { name: "Bossche Bol", desc: "Gevuld met slagroom, in pure chocolade gedoopt.", price: "4,50", tags: ["Vega"] },
      { name: "Brownie · zeezout", desc: "Fudgy, met een snufje Maldon, verwarmd op verzoek.", price: "4,75", tags: ["Vega"] },
      { name: "Plank van het huis", desc: "Drie soorten gebak op een plankje. Voor twee.", price: "13,50", tags: ["Voor 2"] },
    ],
  },
  {
    id: "koffie",
    title: "Koffie & dranken",
    italic: "fluweelzacht",
    sub: "Specialty bonen van een kleine Amsterdamse brander, gezet met liefde en een zekere precisie.",
    items: [
      { name: "Espresso", desc: "Enkel · dubbel.", price: "3,00", tags: [] },
      { name: "Cappuccino", desc: "Met fluweelzacht melkschuim.", price: "3,75", tags: [] },
      { name: "Latte Macchiato", desc: "Drie lagen, traag opgebouwd.", price: "4,20", tags: ["Huisfavoriet"] },
      { name: "Flat White", desc: "Dubbele espresso, dunnere melklaag.", price: "4,25", tags: [] },
      { name: "Chai latte", desc: "Met huisgemaakte kruidenmix en steranijs.", price: "4,50", tags: ["Vega"] },
      { name: "Verse muntthee", desc: "Verse munt, gember en honing.", price: "3,50", tags: ["Vega"] },
      { name: "Versgeperste sinaasappel", desc: "Glas of karaf.", price: "4,50", tags: [] },
      { name: "Smoothie van het huis", desc: "Wisselend per seizoen.", price: "5,75", tags: ["Vega"] },
    ],
  },
  {
    id: "high-tea",
    title: "High Tea",
    italic: "vanaf 2 personen",
    sub: "Geniet van een heerlijke middag bijkletsen. Geserveerd in drie gangen: huisgemaakt soepje met mini toasty, hartige versnaperingen, en donkere & blonde lekkernijen.",
    items: [
      { name: "High Tea", desc: "", price: "22,50", tags: [] },
      { name: "Kids High Tea (tot 10 jaar)", desc: "Met ranja.", price: "16,95", tags: [] },
    ],
    info: [
      "Maandag t/m donderdag: vanaf 14.00 uur",
      "Vrijdag: vanaf 14.30 uur",
      "Minimaal 2 personen · graag een dag van tevoren reserveren",
      "Niet mogelijk in het weekend, op feestdagen of op het terras",
    ],
  },
  {
    id: "specials",
    title: "Specials",
    italic: "van de week",
    sub: "Vier wisselende gerechten, samengesteld door onze keuken op basis van wat er die week binnenkomt.",
    items: [
      { name: "Burrata · groene asperge", desc: "Met geblancheerde asperge, citroenolie en zoete erwt, april.", price: "14,50", tags: ["Vega", "Seizoen"] },
      { name: "Pasta van de week", desc: "Vraag het aan onze keuken, wisselt elke week.", price: "13,75", tags: [] },
      { name: "Vegan bowl", desc: "Quinoa, geroosterde groenten, hummus en pittige dressing.", price: "12,50", tags: ["Vegan"] },
      { name: "Borrelplank klein", desc: "Voor twee · kazen, charcuterie, olijven, tapenades.", price: "16,75", tags: ["Voor 2"] },
    ],
  },
];

function MenuPage({ go }) {
  const [active, setActive] = useState_m("broodjes");

  const onTab = (id) => {
    setActive(id);
    const el = document.getElementById("sec-" + id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <main>
      <PageHero
        crumb="03 · Menukaart"
        title='Vers, eerlijk,<br/><span class="italic">en met overgave.</span>'
        lead="Onze kaart wisselt mee met de seizoenen, maar de klassiekers staan er altijd op. Hieronder vind je een selectie, kom langs voor de complete kaart en de dagspecials op de schoolbordmuur."
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
                {m.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {MENU.map((sec) => (
          <section key={sec.id} id={"sec-" + sec.id} className="menu-section">
            <div className="menu-section__head">
              <h2 className="menu-section__title reveal">
                {sec.title}<br/>
                <span className="italic" style={{ fontSize: "0.7em" }}>{sec.italic}</span>
              </h2>
              <p className="menu-section__sub reveal delay-1">{sec.sub}</p>
            </div>
            <div className="menu-list">
              {sec.items.map((it, i) => (
                <div key={i} className="menu-item reveal" style={{ transitionDelay: `${(i % 4) * 50}ms` }}>
                  <div className="menu-item__top">
                    <span className="menu-item__name">{it.name}</span>
                    <span className="menu-item__leader"></span>
                    <span className="menu-item__price">€&nbsp;{it.price}</span>
                  </div>
                  {it.desc && <p className="menu-item__desc">{it.desc}</p>}
                  {it.tags && it.tags.length > 0 && (
                    <div className="menu-item__tags">
                      {it.tags.map((t) => <span key={t} className="menu-item__tag">{t}</span>)}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {sec.info && (
              <div className="reveal" style={{ marginTop: 28, background: "var(--bone)", border: "1px solid var(--line)", borderRadius: 4, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
                {sec.info.map((line, i) => (
                  <span key={i} style={{ fontSize: 13, color: "var(--ink-2)", letterSpacing: "0.01em" }}>
                    {i < 2 ? <strong style={{ color: "var(--espresso)", fontWeight: 500 }}>{line}</strong> : line}
                  </span>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      <section className="section catering" style={{ marginTop: 40 }}>
        <div className="container">
          <div className="catering__grid">
            <div className="catering__media reveal">
              <img src="assets/dish-platter.jpg" alt="Een rijk gedekte tafel bij Donker & Blond" style={{ objectPosition: "50% 50%" }} />
            </div>
            <div className="catering__copy reveal delay-1">
              <span className="eyebrow" style={{ color: "var(--blond)" }}>Allergieën &amp; dieet</span>
              <h2 className="catering__title">Iets <span className="italic">aan te geven?</span></h2>
              <p>Glutenvrij, lactosevrij, noten, geef het door bij je bestelling. We hebben voor de meeste wensen een goed alternatief, en denken graag met je mee.</p>
              <a href="#/contact" onClick={(e) => { e.preventDefault(); go("contact"); }} className="btn btn--ghost">
                Stel je vraag <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   CATERING / HORECA
   ============================================================ */
function CateringPage({ go }) {
  return (
    <main>
      <PageHero
        crumb="05 · Horeca & Catering"
        title='Onze keuken<br/><span class="italic">bij u op locatie.</span>'
        lead="Van vergaderlunch tot bedrijfsborrel, van high tea tot uitvaartcatering. We brengen dezelfde versheid, gastvrijheid en kwaliteit van onze zaak. Bij u op kantoor of evenement."
      />

      <section className="section bg-paper">
        <div className="container">
          <SecHead
            eyebrow="Hoe we werken"
            title='Drie stappen,<br/><span class="italic">geen ruis.</span>'
            body="Een duidelijke offerte binnen 24 uur, persoonlijk overleg met onze cateringcoördinator, en op de dag zelf een team dat het zo aanvoelt alsof we er altijd al waren."
          />
          <div className="cat-pillars">
            <div className="cat-pillar reveal">
              <div className="cat-pillar__icon">i.</div>
              <h4>Vertel uw wensen</h4>
              <p>Bel, mail of vul het formulier in. We bespreken aantal gasten, dieetwensen, en wat voor sfeer u zoekt, zakelijk, feestelijk, of iets ertussenin.</p>
            </div>
            <div className="cat-pillar reveal delay-1">
              <div className="cat-pillar__icon">ii.</div>
              <h4>Voorstel op maat</h4>
              <p>Binnen één werkdag krijgt u een voorstel met menu-suggesties, prijsindicatie en logistiek. Geen verrassingen, geen verborgen kosten.</p>
            </div>
            <div className="cat-pillar reveal delay-2">
              <div className="cat-pillar__icon">iii.</div>
              <h4>Wij regelen de rest</h4>
              <p>Op de dag zelf bezorgen, opbouwen en (indien gewenst) bedienen wij. U geniet, wij doen de rest, inclusief afruimen.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cat-packages">
        <div className="container">
          <SecHead
            eyebrow="Onze pakketten"
            title='Drie startpunten,<br/><span class="italic">altijd maatwerk.</span>'
            body="Onze meest aangevraagde formules. Iedere lunch, borrel of buffet is uiteindelijk op maat, dit zijn de meest comfortabele uitgangspunten."
          />
          <div className="cat-packages__grid">
            <article className="cat-pkg reveal">
              <h4>Lunchpakket</h4>
              <div className="cat-pkg__price">€ 14,50 <span className="unit">/ persoon</span></div>
              <ul>
                <li>Twee verse broodjes p.p.</li>
                <li>Soep van de dag</li>
                <li>Verse jus &amp; mineraalwater</li>
                <li>Fruit &amp; muffin</li>
                <li>Bezorging in Etten-Leur e.o.</li>
              </ul>
              <a
                href="#/contact"
                onClick={(e) => { e.preventDefault(); go("contact"); }}
                className="btn btn--outline"
              >
                Vraag offerte aan <span className="arrow">→</span>
              </a>
            </article>

            <article className="cat-pkg cat-pkg--featured reveal delay-1">
              <span className="cat-pkg__tag">Meest gekozen</span>
              <h4>Vergaderbuffet</h4>
              <div className="cat-pkg__price">€ 22,50 <span className="unit">/ persoon</span></div>
              <ul>
                <li>Uitgebreid broodjesbuffet</li>
                <li>Twee warme soepen</li>
                <li>Twee verse salades</li>
                <li>Koffie, thee &amp; jus</li>
                <li>Gebak van het huis</li>
                <li>Opbouw &amp; afruimen inbegrepen</li>
              </ul>
              <a
                href="#/contact"
                onClick={(e) => { e.preventDefault(); go("contact"); }}
                className="btn"
                style={{ background: "var(--blond)", color: "var(--espresso-deep)", borderColor: "var(--blond)" }}
              >
                Vraag offerte aan <span className="arrow">→</span>
              </a>
            </article>

            <article className="cat-pkg reveal delay-2">
              <h4>High Tea</h4>
              <div className="cat-pkg__price">€ 28,50 <span className="unit">/ persoon</span></div>
              <ul>
                <li>Drie etages versgebakken zoet</li>
                <li>Hartige hapjes &amp; mini sandwiches</li>
                <li>Onbeperkt thee &amp; koffie</li>
                <li>Op locatie of bij ons in de zaak</li>
                <li>Vanaf 6 personen</li>
              </ul>
              <a
                href="#/contact"
                onClick={(e) => { e.preventDefault(); go("contact"); }}
                className="btn btn--outline"
              >
                Vraag offerte aan <span className="arrow">→</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <SecHead
            eyebrow="Waar we voor staan"
            title='Wat catering bij ons<br/><span class="italic">anders maakt.</span>'
            body="Dezelfde versheid en aandacht die we in de zaak geven, gewoon, ergens anders."
          />
          <div className="cat-pillars">
            <div className="cat-pillar reveal">
              <div className="cat-pillar__icon">✦</div>
              <h4>Vers, niet vacuüm</h4>
              <p>Wij bezorgen wat we 's ochtends maken. Geen voorraad, geen plastic-trays.</p>
            </div>
            <div className="cat-pillar reveal delay-1">
              <div className="cat-pillar__icon">✦</div>
              <h4>Eigen team</h4>
              <p>De mensen die bij ons op de zaak werken, staan ook bij u. Geen uitzendkrachten.</p>
            </div>
            <div className="cat-pillar reveal delay-2">
              <div className="cat-pillar__icon">✦</div>
              <h4>Lokaal &amp; eerlijk</h4>
              <p>We werken met dezelfde leveranciers als in de zaak, bakkerij Van Wijk, Klaver Kaas, en de markt.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ background: "var(--espresso)", color: "var(--cream)", padding: "clamp(48px, 6vw, 88px)", borderRadius: 4, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
            <span className="eyebrow reveal" style={{ color: "var(--blond)" }}>Klaar om te boeken?</span>
            <h2 className="reveal delay-1" style={{ fontFamily: "var(--serif)", fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1.05, color: "var(--cream)", margin: 0, fontWeight: 500, maxWidth: "18ch" }}>
              Plan een gesprek met <span style={{ fontStyle: "italic", color: "var(--blond-soft)" }}>onze cateringcoördinator.</span>
            </h2>
            <p className="reveal delay-2" style={{ maxWidth: 540, color: "rgba(250,246,239,0.78)", margin: 0, fontSize: 16, lineHeight: 1.7 }}>
              Korte lijntjes, snelle reactie. We helpen u graag verder, een offerte op maat in maximaal 24 uur.
            </p>
            <div className="reveal delay-3" style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
              <a
                href="#/contact"
                onClick={(e) => { e.preventDefault(); go("contact"); }}
                className="btn"
                style={{ background: "var(--blond)", color: "var(--espresso-deep)", borderColor: "var(--blond)" }}
              >
                Vraag offerte aan <span className="arrow">→</span>
              </a>
              <a href="tel:+31765041234" className="btn btn--ghost">
                Bel 076 - 504 12 34
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

window.MenuPage = MenuPage;
window.CateringPage = CateringPage;
