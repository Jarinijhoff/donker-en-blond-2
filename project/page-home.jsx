/* global React, SecHead, Strip */

function Hero({ go }) {
  return (
    <section className="hero">
      <div className="hero__media">
        <img src="assets/hero.jpg" alt="Donker en Blond. Gastvrije ontvangst met muffins, koffie en versgeperste sinaasappelsap" />
      </div>
      <div className="hero__content">
        <div className="hero__inner">
          <h1 className="hero__title">
            Een plek om<br/>
            <span className="italic">te blijven</span> hangen.
          </h1>
          <p className="hero__sub">
            Een gezellige lunchroom in de winkelstraat Hof van den Houte in Etten-Leur. Koffie, lekkernijen, lunch, en op vrijdag de burgers. Twee terrassen, een grote speelhoek voor de kleine gasten.
          </p>
          <div className="hero__ctas">
            <a href="#/menu" onClick={(e) => { e.preventDefault(); go("menu"); }} className="btn btn--primary">
              Bekijk de kaart <span className="arrow">→</span>
            </a>
            <a href="tel:+31765041234" className="btn btn--ghost">
              Bel voor een tafel
            </a>
          </div>
        </div>
      </div>
      <div className="hero__scroll">Scroll</div>
      <div className="hero__meta">
        <span className="dot"></span>
        <span>Nu geopend · tot 17:30</span>
      </div>
    </section>
  );
}

/* ---------- Sfeer (editorial image grid + quote) ---------- */
function Sfeer() {
  return (
    <section className="section sfeer">
      <div className="container">
        <SecHead
          eyebrow="Onze plek"
          title='Warm hout, zacht licht,<br/><span class="italic">en de geur van vers brood.</span>'
          body="Een eigentijdse lunchroom met een frisse, trendy inrichting. Voor een breed publiek toegankelijk. Loop binnen voor koffie, blijf voor een lange tafel met vrienden."
        />
        <div className="sfeer__grid">
          <div className="sfeer__cell sfeer__cell--a reveal">
            <img src="assets/interior-dining.jpg" alt="Eetzaal Donker & Blond met houten tafels en cork-pendants" />
          </div>
          <div className="sfeer__cell sfeer__cell--b reveal delay-1">
            <img src="assets/interior-bar.jpg" alt="Barfront met espressomachine en signing" />
          </div>
          <div className="sfeer__cell sfeer__cell--quote reveal delay-2">
            <div className="mark">"</div>
            <p>Het voelt elke keer alsof we thuiskomen, bij de buren die de allerbeste koffie zetten.</p>
            <div className="cite">Maaike, vaste gast sinds 2014</div>
          </div>
          <div className="sfeer__cell sfeer__cell--c reveal delay-1">
            <img src="assets/team.jpg" alt="Het team van Donker & Blond" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Specials ---------- */
const SPECIALS = [
  {
    n: "I",
    tag: "Huisspecial",
    title: "Donker & Blond burger",
    desc: "Sappige burger met spiegelei, krokante uitjes, mayonaise en eigen friet. Onze meest gevraagde van het huis.",
    price: "€ 13,75",
    img: "assets/dish-burger.jpg",
    pos: "50% 50%"
  },
  {
    n: "II",
    tag: "Lunchplank",
    title: "Drie luxe broodjes",
    desc: "Plank met carpaccio, gerookte ham en gezonde topping. Vers belegd, rijk gegarneerd en mooi opgemaakt.",
    price: "€ 16,50",
    img: "assets/dish-broodjes.jpg",
    pos: "50% 50%"
  },
  {
    n: "III",
    tag: "Zoet",
    title: "Wafel met aardbei",
    desc: "Verse Luikse wafel, slagroom, aardbeien en een lichte dusting poedersuiker. Ook met seizoensfruit.",
    price: "€ 7,25",
    img: "assets/dish-wafels.jpg",
    pos: "50% 50%"
  },
];

function Specials({ go }) {
  return (
    <section className="section specials">
      <div className="container">
        <SecHead
          eyebrow="Op de kaart"
          title='Vandaag, <span class="italic">bijzonder lekker.</span>'
          body="Drie van onze huisfavorieten, samengesteld met seizoensproducten van leveranciers uit de buurt. De volledige kaart vind je in de menukaart."
        />
        <div className="specials__grid">
          {SPECIALS.map((s, i) => (
            <article
              key={i}
              className="spcard reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => go("menu")}
            >
              <div className="spcard__media">
                <span className="spcard__tag">{s.tag}</span>
                <img src={s.img} alt={s.title} style={{ objectPosition: s.pos }} />
              </div>
              <span className="spcard__num">No. {s.n}</span>
              <h3 className="spcard__title">{s.title}</h3>
              <p className="spcard__desc">{s.desc}</p>
              <div className="spcard__foot">
                <span className="spcard__price">{s.price}</span>
                <span className="spcard__more">Op de kaart <span>→</span></span>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 56, display: "flex", justifyContent: "center" }} className="reveal">
          <a href="#/menu" onClick={(e) => { e.preventDefault(); go("menu"); }} className="btn btn--outline">
            Bekijk de hele kaart <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Hours preview ---------- */
function HoursPreview({ go }) {
  const now = new Date();
  const today = now.getDay(); // 0 = Sunday
  const dayKeys = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
  const hours = {
    "Maandag":   "11.00 - 17.30",
    "Dinsdag":   "9.30 - 17.30",
    "Woensdag":  "9.30 - 17.30",
    "Donderdag": "9.30 - 17.30",
    "Vrijdag":   "9.30 - 17.30",
    "Zaterdag":  "9.30 - 17.00",
    "Zondag":    "11.00 - 17.00*",
  };
  const days = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
  const todayName = dayKeys[today];

  return (
    <section className="section hours">
      <div className="container">
        <div className="hours__grid">
          <div className="hours__panel reveal">
            <div className="hours__status">
              <span className="dot"></span>
              <span>Nu geopend · tot 17:30</span>
            </div>
            <ul className="hours__list">
              {days.map((d) => (
                <li key={d} className={d === todayName ? "today" : ""}>
                  <span className="day">{d}</span>
                  <span className="time">{hours[d]}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal delay-1">
            <span className="eyebrow">Altijd welkom</span>
            <h2 className="sec-head__title" style={{ marginTop: 14, marginBottom: 22 }}>
              Loop binnen,<br/>
              <span className="italic">koffie staat klaar.</span>
            </h2>
            <p className="lead" style={{ marginBottom: 28 }}>
              We zijn zes dagen per week open, van vroege koffie tot late lunch. Voor groepen vanaf zes personen reserveer je eenvoudig vooraf.
            </p>
            <a
              href="#/openingstijden"
              onClick={(e) => { e.preventDefault(); go("openingstijden"); }}
              className="btn btn--outline"
            >
              Alle openingstijden <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Catering teaser ---------- */
function CateringTeaser({ go }) {
  return (
    <section className="section catering">
      <div className="container">
        <div className="catering__grid">
          <div className="catering__media reveal">
            <img src="assets/team.jpg" alt="Catering team" />
          </div>
          <div className="catering__copy reveal delay-1">
            <span className="eyebrow">Horeca &amp; Catering</span>
            <h2 className="catering__title">
              Lekker, <span className="italic">overal</span><br/>
              waar u bent.
            </h2>
            <p>
              Van bestuursvergadering tot bedrijfsborrel, van werklunch tot bruiloft. Wij verzorgen ambachtelijke broodjes, salades, soepen en gebak op locatie of voor afhaal.
            </p>
            <ul className="catering__bullets">
              <li>Lunchbuffetten op locatie</li>
              <li>Vergaderlunches &amp; -ontbijten</li>
              <li>Catering voor events</li>
              <li>Borrelplanken &amp; high tea</li>
            </ul>
            <a
              href="#/catering"
              onClick={(e) => { e.preventDefault(); go("catering"); }}
              className="btn btn--primary"
              style={{ background: "var(--blond)", borderColor: "var(--blond)", color: "var(--espresso-deep)" }}
            >
              Vraag een offerte aan <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews ---------- */
const REVIEWS = [
  {
    text: "Eerste keer hier, wát een verrassing. De brie-brioche is een feestje en de koffie écht goed. Hartelijk personeel, mooie inrichting.",
    name: "Sanne v. d. Berg",
    src: "Google · 5 sterren",
    init: "S"
  },
  {
    text: "Onze vaste lunchplek in Etten-Leur. Altijd druk, altijd lekker, altijd dezelfde glimlach achter de bar. Voor de muffins kom ik terug.",
    name: "Mark Janssen",
    src: "TripAdvisor",
    init: "M"
  },
  {
    text: "Catering geregeld voor onze bedrijfslunch (40 pers.). Op tijd, prachtig opgemaakt, en collega's praten er nóg over. Aanrader.",
    name: "Linda · Witteveen+Bos",
    src: "Google · 5 sterren",
    init: "L"
  },
];

function Reviews() {
  return (
    <section className="section reviews">
      <div className="container">
        <SecHead
          eyebrow="Wat gasten zeggen"
          title='Onze mooiste recensies<br/><span class="italic">komen van de buren.</span>'
          body="Een gemiddelde van 4,8 sterren op Google, en bijna 1.200 enthousiaste reacties. Hier een paar die ons aan het hart gaan."
        />
        <div className="reviews__grid">
          {REVIEWS.map((r, i) => (
            <article key={i} className="review reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="review__stars">★ ★ ★ ★ ★</div>
              <p className="review__text">"{r.text}"</p>
              <div className="review__foot">
                <div className="review__avatar">{r.init}</div>
                <div className="review__meta">
                  <span className="review__name">{r.name}</span>
                  <span className="review__src">{r.src}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HOME ---------- */
function HomePage({ go }) {
  return (
    <main>
      <Hero go={go} />
      <Strip items={["Koffie & lekkernijen", "Verse lunch", "Twee terrassen", "Burger-vrijdag", "Speelhoek voor de kids", "Gezellige High-Tea"]} />
      <Sfeer />
      <Specials go={go} />
      <HoursPreview go={go} />
      <CateringTeaser go={go} />
      <Reviews />
    </main>
  );
}

window.HomePage = HomePage;
