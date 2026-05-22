/* global React, PageHero */

/* ============================================================
   CONTACT
   ============================================================ */
function ContactPage({ go }) {
  return (
    <main>
      <PageHero
        crumb="06 · Contact"
        title='Loop binnen,<br/><span class="italic">of bel ons voor een tafel.</span>'
        lead="Reserveren doet u bij ons telefonisch, ook handig voor groepen, een High-Tea of burger-vrijdag. U bent natuurlijk ook van harte welkom om gewoon binnen te lopen."
      />

      <section className="section bg-paper" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact__grid">
            <div className="contact__info">
              <div className="contact__block reveal">
                <span className="label">Bezoek ons</span>
                <span className="value">Hof van den Houte<br/>Etten-Leur</span>
                <p>U vindt ons in de winkelstraat Hof van den Houte, met terrassen in de winkelstraat én in het winkelcentrum.</p>
              </div>
              <div className="contact__block reveal delay-1">
                <span className="label">Bel of mail</span>
                <span className="value">
                  <a href="tel:+31765041234">076 - 504 12 34</a><br/>
                  <a href="mailto:info@donkerenblond.nl">info@donkerenblond.nl</a>
                </span>
                <p>Reserveren? Bel ons gerust tijdens openingstijden. Voor catering-vragen kunt u ook mailen naar <a href="mailto:catering@donkerenblond.nl" style={{ color: "var(--espresso)", borderBottom: "1px solid var(--line)" }}>catering@donkerenblond.nl</a>.</p>
              </div>
              <div className="contact__block reveal delay-2">
                <span className="label">Openingstijden</span>
                <div className="footer__hours" style={{ color: "var(--ink-2)" }}>
                  <div className="row" style={{ justifyContent: "space-between" }}><span style={{ color: "var(--muted)" }}>Maandag</span><span>11.00 - 17.30</span></div>
                  <div className="row" style={{ justifyContent: "space-between" }}><span style={{ color: "var(--muted)" }}>Di t/m Vr</span><span>9.30 - 17.30</span></div>
                  <div className="row" style={{ justifyContent: "space-between" }}><span style={{ color: "var(--muted)" }}>Zaterdag</span><span>9.30 - 17.00</span></div>
                  <div className="row" style={{ justifyContent: "space-between" }}><span style={{ color: "var(--muted)" }}>Zondag</span><span>11.00 - 17.00*</span></div>
                </div>
                <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>*Alleen geopend met koopzondagen en evenementen. Onze keuken sluit een half uur voor sluitingstijd.</p>
                <a href="#/openingstijden" onClick={(e) => { e.preventDefault(); go("openingstijden"); }} className="btn btn--text" style={{ marginTop: 6 }}>
                  Volledig overzicht <span className="arrow">→</span>
                </a>
              </div>
              <div className="contact__block reveal delay-3">
                <span className="label">Volg ons</span>
                <div style={{ display: "flex", gap: 16, marginTop: 4 }}>
                  <a href="#" className="btn btn--text">Instagram</a>
                  <a href="#" className="btn btn--text">Facebook</a>
                </div>
              </div>
            </div>

            <div className="contact-call reveal delay-1">
              <span className="eyebrow" style={{ color: "var(--blond-deep)" }}>Reserveren</span>
              <h3>Reserveert<br/><span style={{ fontStyle: "italic", color: "var(--blond-deep)" }}>u telefonisch?</span></h3>
              <p>Als kleinere zaak in het winkelcentrum houden we het persoonlijk. Bel ons even, dan zoeken we samen een geschikt moment, een tafel die bij uw gezelschap past, en bespreken we eventuele wensen.</p>

              <div className="contact-call__points">
                <div className="contact-call__point">
                  <span className="contact-call__num">01</span>
                  <div>
                    <h5>Met een groep</h5>
                    <p>Voor grotere gezelschappen denken we graag mee met een passend menu of een aangepaste tijd.</p>
                  </div>
                </div>
                <div className="contact-call__point">
                  <span className="contact-call__num">02</span>
                  <div>
                    <h5>High-Tea op aanvraag</h5>
                    <p>Onze gezellige High-Tea boekt u vooraf telefonisch, zodat we alles netjes voor u klaarzetten.</p>
                  </div>
                </div>
                <div className="contact-call__point">
                  <span className="contact-call__num">03</span>
                  <div>
                    <h5>Burger-vrijdag</h5>
                    <p>Vrijdagavond is het meestal druk. Een tafeltje vooraf is geen overbodige luxe.</p>
                  </div>
                </div>
              </div>

              <div className="contact-call__cta">
                <a href="tel:+31765041234" className="btn btn--primary">
                  Bel 076 - 504 12 34 <span className="arrow">→</span>
                </a>
                <span className="contact-call__hint">tijdens openingstijden</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="map reveal" style={{ marginTop: 64 }}>
            <svg viewBox="0 0 1200 480" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(74,42,27,0.06)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="1200" height="480" fill="url(#grid)"/>
              {/* roads */}
              <path d="M 0 240 L 1200 200" stroke="rgba(74,42,27,0.18)" strokeWidth="22" fill="none" strokeLinecap="round"/>
              <path d="M 600 0 L 580 480" stroke="rgba(74,42,27,0.18)" strokeWidth="18" fill="none" strokeLinecap="round"/>
              <path d="M 200 80 Q 400 200 800 480" stroke="rgba(74,42,27,0.10)" strokeWidth="10" fill="none"/>
              <path d="M 100 380 L 1100 400" stroke="rgba(74,42,27,0.12)" strokeWidth="14" fill="none" strokeLinecap="round"/>
              {/* labels */}
              <text x="120" y="225" fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="20" fill="rgba(74,42,27,0.5)">Hof van den Houte</text>
              <text x="620" y="100" fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="20" fill="rgba(74,42,27,0.5)">Winkelcentrum</text>
              <text x="900" y="420" fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="20" fill="rgba(74,42,27,0.5)">Etten-Leur centrum</text>
            </svg>
            <div className="map__pin"><span>D&amp;B</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}

window.ContactPage = ContactPage;
