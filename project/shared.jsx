/* global React */
const { useState, useEffect, useRef } = React;

/* ============================================================
   ROUTING - simple hash-based router
   ============================================================ */
const ROUTES = [
  { path: "home",        label: "Home",            num: "01" },
  { path: "over-ons",    label: "Over Ons",        num: "02" },
  { path: "menu",        label: "Menu",            num: "03" },
  { path: "openingstijden", label: "Openingstijden", num: "04" },
  { path: "catering",    label: "Catering", num: "05", longLabel: "Horeca · Catering" },
  { path: "contact",     label: "Contact",         num: "06" },
];

function useRoute() {
  const [route, setRoute] = useState(() => (window.location.hash.replace("#/", "") || "home"));
  useEffect(() => {
    const onHash = () => {
      const r = window.location.hash.replace("#/", "") || "home";
      setRoute(r);
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return [route, (r) => { window.location.hash = "#/" + r; }];
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* ============================================================
   LOGO - recreated as SVG-ish text for nav
   ============================================================ */
function Logo({ light }) {
  return (
    <span className="nav__logo" aria-label="Donker en Blond">
      <span className="donker">Donker</span>
      <span className="amp">&amp;</span>
      <span className="blond">Blond</span>
    </span>
  );
}

/* ============================================================
   NAVBAR
   ============================================================ */
function Navbar({ route, go, transparentAllowed }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const transparent = transparentAllowed && !scrolled && !menuOpen;
  const navClass = "nav " + (transparent ? "nav--transparent" : "nav--solid");

  const handleClick = (path) => (e) => {
    e.preventDefault();
    go(path);
    setMenuOpen(false);
  };

  return (
    <React.Fragment>
      <nav className={navClass}>
        <div className="container nav__inner">
          <a href="#/home" onClick={handleClick("home")}>
            <Logo />
          </a>
          <div className="nav__links">
            {ROUTES.map((r) => (
              <a
                key={r.path}
                href={`#/${r.path}`}
                onClick={handleClick(r.path)}
                className={"nav__link " + (route === r.path ? "active" : "")}
              >
                {r.label}
              </a>
            ))}
          </div>
          <a
            href="tel:+31765041234"
            className="nav__cta btn btn--outline"
          >
            Bel ons
          </a>
          <button className="nav__burger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={"menu-overlay " + (menuOpen ? "open" : "")}>
        <div className="menu-overlay__top">
          <Logo />
          <button className="menu-overlay__close" onClick={() => setMenuOpen(false)} aria-label="Sluit menu">×</button>
        </div>
        <div className="menu-overlay__links">
          {ROUTES.map((r) => (
            <a
              key={r.path}
              href={`#/${r.path}`}
              onClick={handleClick(r.path)}
              className="menu-overlay__link"
            >
              <span>{r.longLabel || r.label}</span>
              <span className="num">{r.num}</span>
            </a>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer({ go }) {
  const handleClick = (path) => (e) => {
    e.preventDefault();
    go(path);
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3>Donker <span className="blond">&amp; Blond</span></h3>
            <p>Een gezellige lunchroom in de winkelstraat Hof van den Houte in Etten-Leur. Koffie, lunch, terrassen en op vrijdag onze burgers.</p>
          </div>
          <div className="footer__col">
            <h5>Bezoek</h5>
            <ul>
              <li><a href="#/contact" onClick={handleClick("contact")}>Hof van den Houte<br/>Etten-Leur</a></li>
              <li><a href="tel:+31765041234">076 - 504 12 34</a></li>
              <li><a href="mailto:info@donkerenblond.nl">info@donkerenblond.nl</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Openingstijden</h5>
            <div className="footer__hours">
              <div className="row"><span className="day">Maandag</span><span>11.00 - 17.30</span></div>
              <div className="row"><span className="day">Di t/m Vr</span><span>9.30 - 17.30</span></div>
              <div className="row"><span className="day">Zaterdag</span><span>9.30 - 17.00</span></div>
              <div className="row"><span className="day">Zondag</span><span>11.00 - 17.00*</span></div>
            </div>
          </div>
          <div className="footer__col">
            <h5>Verder kijken</h5>
            <ul>
              <li><a href="#/menu" onClick={handleClick("menu")}>Menukaart</a></li>
              <li><a href="#/catering" onClick={handleClick("catering")}>Horeca &amp; Catering</a></li>
              <li><a href="#/over-ons" onClick={handleClick("over-ons")}>Ons verhaal</a></li>
              <li><a href="#/contact" onClick={handleClick("contact")}>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Donker &amp; Blond · Etten-Leur</span>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   MARQUEE STRIP
   ============================================================ */
function Strip({ items }) {
  const content = (
    <span>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          {t}<span className="dot"></span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="strip">
      <div className="strip__track">
        {content}{content}
      </div>
    </div>
  );
}

/* ============================================================
   SECTION HEADER
   ============================================================ */
function SecHead({ eyebrow, title, body }) {
  return (
    <div className="sec-head">
      <div className="sec-head__left">
        <span className="eyebrow reveal">{eyebrow}</span>
        <h2 className="sec-head__title reveal delay-1" dangerouslySetInnerHTML={{__html: title}} />
      </div>
      <p className="sec-head__right reveal delay-2">{body}</p>
    </div>
  );
}

/* ============================================================
   PAGE HERO (sub pages)
   ============================================================ */
function PageHero({ crumb, title, lead }) {
  return (
    <section className="phero">
      <div className="container">
        <div className="phero__crumb reveal">{crumb}</div>
        <h1 className="phero__title reveal delay-1" dangerouslySetInnerHTML={{__html: title}} />
        {lead && <p className="phero__lead reveal delay-2">{lead}</p>}
      </div>
    </section>
  );
}

/* ============================================================
   EXPORT
   ============================================================ */
Object.assign(window, {
  useRoute, useScrollReveal, ROUTES,
  Logo, Navbar, Footer, Strip, SecHead, PageHero,
});
