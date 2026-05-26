/* global React, SecHead, Strip */

function Hero({ go }) {
  return (
    <section className="hero">
      <div className="hero__media">
        <img src="assets/hero.jpg" alt="Donker en Blond. Gastvrije ontvangst met muffins, koffie en versgeperste sinaasappelsap" />
      </div>
      <div className="hero__content">
        <div className="hero__inner">
          <div className="hero__text">
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
      </div>
      <div className="hero__meta">
        <span className="dot"></span>
        <span>Nu geopend · tot 17:30</span>
      </div>
    </section>
  );
}

/* ---------- Sfeer / Ons verhaal ---------- */
function Sfeer() {
  return (
    <section className="sfeer-split">
      <div className="sfeer-split__photo reveal">
        <img src="assets/interior-dining.jpg" alt="Eetzaal Donker & Blond met houten tafels en warm licht" />
      </div>
      <div className="sfeer-split__text reveal delay-1">
        <span className="eyebrow">Onze plek</span>
        <h2 className="sfeer-split__title">
          Warm hout, zacht licht,<br/>
          <span className="italic">en de geur van vers brood.</span>
        </h2>
        <p className="sfeer-split__body">
          Een eigentijdse lunchroom met een frisse, trendy inrichting. Voor een breed publiek toegankelijk. Loop binnen voor koffie, blijf voor een lange tafel met vrienden.
        </p>
        <blockquote className="sfeer-split__quote">
          <div className="sfeer-split__quote-mark">"</div>
          <p>Het voelt elke keer alsof we thuiskomen, bij de buren die de allerbeste koffie zetten.</p>
          <cite>Maaike, vaste gast sinds 2014</cite>
        </blockquote>
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

/* ---------- Instagram ---------- */
/*
 * Voeg hier je eigen Instagram-posts toe of vervang ze.
 * img: pad naar afbeelding (lokaal of URL)
 * caption: tekst die op hover verschijnt
 * link: URL naar de Instagram-post
 */
const INSTAGRAM_POSTS = [
  { img: "uploads/image(71).jpg", caption: "Voeg hier je caption toe", link: "#" },
  { img: "uploads/image(72).jpg", caption: "Voeg hier je caption toe", link: "#" },
  { img: "uploads/image(73).jpg", caption: "Voeg hier je caption toe", link: "#" },
];

function Instagram() {
  return (
    <section className="section instagram">
      <div className="container">
        <SecHead
          eyebrow="Volg ons op Instagram"
          title='Elke dag verse<br/><span class="italic">momenten van ons.</span>'
          body="Een kijkje achter de schermen, nieuwe gerechten en gezellige terrasjes. Volg ons voor dagelijkse inspiratie."
        />
        <div className="instagram__grid">
          {INSTAGRAM_POSTS.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram__post reveal"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img src={p.img} alt={p.caption} />
              <div className="instagram__post__overlay">
                <span className="instagram__post__caption">{p.caption}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="instagram__follow reveal">
          <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            Volg @donkerenblond <span className="arrow">→</span>
          </a>
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
];

function Reviews() {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const trackRef = React.useRef(null);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return;
    const cardW = el.firstElementChild.offsetWidth + 16;
    setActiveIdx(Math.round(el.scrollLeft / cardW));
  };

  const scrollToIdx = (idx) => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return;
    const cardW = el.firstElementChild.offsetWidth + 16;
    el.scrollTo({ left: idx * cardW, behavior: "smooth" });
  };

  return (
    <section className="section reviews">
      <div className="container">
        <SecHead
          eyebrow="Wat gasten zeggen"
          title='Onze mooiste recensies<br/><span class="italic">komen van de buren.</span>'
          body="Een gemiddelde van 4,8 sterren op Google, en bijna 1.200 enthousiaste reacties. Hier een paar die ons aan het hart gaan."
        />
        <div className="reviews__scroll-wrap">
          <div className="reviews__grid" ref={trackRef} onScroll={handleScroll}>
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
          <div className="reviews__dots">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                className={"reviews__dot" + (i === activeIdx ? " active" : "")}
                onClick={() => scrollToIdx(i)}
                aria-label={`Recensie ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Hours preview ---------- */
function HoursPreview({ go }) {
  const now = new Date();
  const today = now.getDay();
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

/* ---------- Contact CTA ---------- */
function ContactCTA({ go }) {
  return (
    <section className="section contact-cta-section">
      <div className="container">
        <div className="contact-cta__inner reveal">
          <span className="eyebrow">Kom langs</span>
          <h2>
            Reserveer een tafel<br/>
            <span className="italic">of loop gewoon binnen.</span>
          </h2>
          <p>
            Als kleinere zaak houden we het persoonlijk. Bel ons tijdens openingstijden voor een tafel, een High‑Tea of burger‑vrijdag. U bent altijd van harte welkom.
          </p>
          <div className="contact-cta__btns">
            <a href="tel:+31765041234" className="btn btn--ghost">
              Bel 076 - 504 12 34 <span className="arrow">→</span>
            </a>
            <a
              href="#/contact"
              onClick={(e) => { e.preventDefault(); go("contact"); }}
              className="btn btn--outline"
              style={{ color: "var(--blond-soft)", borderColor: "rgba(250,246,239,0.35)" }}
            >
              Route &amp; info <span className="arrow">→</span>
            </a>
          </div>
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
      <Reviews />
      <Instagram />
      <HoursPreview go={go} />
      <ContactCTA go={go} />
    </main>
  );
}

window.HomePage = HomePage;
