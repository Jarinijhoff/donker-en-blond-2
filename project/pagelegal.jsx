/* global React, PageHero */

/* ============================================================
   SHARED STYLES (injected once)
   ============================================================ */
(function injectLegalStyles() {
  if (document.getElementById("legal-styles")) return;
  const style = document.createElement("style");
  style.id = "legal-styles";
  style.textContent = `
    .legal-content {
      max-width: 72ch;
      margin: 0 auto;
      color: var(--ink-2);
      line-height: 1.75;
      font-size: 15px;
    }
    .legal-content h2 {
      font-family: var(--serif);
      font-size: clamp(20px, 2.2vw, 26px);
      font-weight: 500;
      color: var(--ink);
      margin: 2.6em 0 0.5em;
      padding-bottom: 0.3em;
      border-bottom: 1px solid var(--line);
      letter-spacing: -0.01em;
      line-height: 1.15;
    }
    .legal-content h2:first-child { margin-top: 0; }
    .legal-content h3 {
      font-family: var(--serif);
      font-size: clamp(16px, 1.6vw, 19px);
      font-weight: 500;
      color: var(--ink);
      margin: 1.8em 0 0.4em;
      line-height: 1.2;
    }
    .legal-content p { margin: 0.6em 0 0; }
    .legal-content ul {
      margin: 0.6em 0 0;
      padding-left: 1.5em;
    }
    .legal-content ul li { margin: 0.3em 0; }
    .legal-content address {
      font-style: normal;
      background: var(--bone);
      border-left: 3px solid var(--blond);
      padding: 14px 20px;
      border-radius: var(--radius);
      margin-top: 1em;
      line-height: 1.9;
    }
    .legal-content .legal-meta {
      font-size: 12px;
      color: var(--muted);
      margin-top: 3em;
      padding-top: 1em;
      border-top: 1px solid var(--line);
    }
    .legal-content a {
      color: var(--espresso);
      border-bottom: 1px solid var(--line);
      transition: border-color 0.2s;
    }
    .legal-content a:hover { border-color: var(--blond); }
  `;
  document.head.appendChild(style);
}());

/* ============================================================
   ALGEMENE VOORWAARDEN
   ============================================================ */
function AlgVoorwaardenPage() {
  return (
    <main>
      <PageHero
        crumb="Juridisch"
        title='Algemene<br/><span class="italic">Voorwaarden.</span>'
        lead="Hieronder vindt u de algemene voorwaarden die van toepassing zijn bij het bezoeken van en bestellen bij Donker & Blond in Etten-Leur."
      />

      <section className="section bg-paper" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="legal-content">

            <h2>Artikel 1 — Identificatie</h2>
            <p>
              Deze algemene voorwaarden zijn van toepassing op de diensten van:
            </p>
            <address>
              <strong>Donker &amp; Blond</strong><br />
              Hof van den Houte<br />
              4871 AA Etten-Leur<br />
              Telefoon: <a href="tel:+31765041234">076 - 504 12 34</a><br />
              E-mail: <a href="mailto:info@donkerenblond.nl">info@donkerenblond.nl</a><br />
              KvK-nummer: [INVULLEN]<br />
              BTW-nummer: [INVULLEN]
            </address>

            <h2>Artikel 2 — Toepasselijkheid</h2>
            <p>
              Deze algemene voorwaarden zijn van toepassing op alle bezoeken aan en overeenkomsten met Donker &amp; Blond, waaronder het verlenen van horeca-diensten, het verwerken van reserveringen, cateringopdrachten en arrangementen. Door gebruik te maken van onze diensten verklaart u kennis te hebben genomen van deze voorwaarden en daarmee in te stemmen.
            </p>
            <p>
              Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien deze schriftelijk of per e-mail zijn overeengekomen.
            </p>

            <h2>Artikel 3 — Reserveringen</h2>
            <h3>3.1 Telefonische reservering</h3>
            <p>
              Reserveren bij Donker &amp; Blond geschiedt uitsluitend telefonisch, bereikbaar op{" "}
              <a href="tel:+31765041234">076 - 504 12 34</a> tijdens onze openingstijden. Een reservering is definitief zodra deze mondeling is bevestigd door een medewerker.
            </p>
            <h3>3.2 Groepen</h3>
            <p>
              Voor gezelschappen vanaf <strong>6 personen</strong> dient de reservering uiterlijk de <strong>dag vóór het bezoek</strong> te worden gemaakt. Dit stelt ons in staat voldoende ruimte, personeel en ingrediënten te reserveren. Voor grotere groepen kunnen aanvullende afspraken worden gemaakt.
            </p>
            <h3>3.3 High-Tea</h3>
            <p>
              Een High-Tea bij Donker &amp; Blond dient eveneens uiterlijk de <strong>dag vóór het gewenste bezoek</strong> telefonisch te worden gereserveerd. De High-Tea wordt op aanvraag samengesteld en vereist een minimale groepsgrootte; neem contact met ons op voor de actuele beschikbaarheid en voorwaarden.
            </p>
            <h3>3.4 No-show en annulering</h3>
            <p>
              Bij annulering van een reservering voor een groep of arrangement verzoeken wij u dit zo vroeg mogelijk telefonisch te melden. Bij het niet tijdig annuleren of niet verschijnen (no-show) behoudt Donker &amp; Blond zich het recht voor eventuele gemaakte kosten in rekening te brengen.
            </p>

            <h2>Artikel 4 — Prijzen</h2>
            <p>
              Alle vermelde prijzen zijn in euro's en zijn <strong>inclusief BTW</strong>. Prijzen gelden zowel voor consumptie binnen als op het terras; er wordt geen toeslag berekend voor een terrasplaats. Donker &amp; Blond behoudt zich het recht voor om prijzen te wijzigen. Op lopende reserveringen zijn de bij boeking gecommuniceerde prijzen van toepassing.
            </p>

            <h2>Artikel 5 — Betaling</h2>
            <p>
              Betaling dient te geschieden bij het verlaten van de zaak. Wij accepteren de volgende betaalmiddelen:
            </p>
            <ul>
              <li>Pinpas (debitcard)</li>
              <li>Contant geld</li>
            </ul>
            <p>
              Betaling met creditcard is niet mogelijk. Voor cateringopdrachten en arrangementen kan een aanbetaling worden gevraagd; de resterende betaling geschiedt op de dag van levering of afname tenzij schriftelijk anders overeengekomen.
            </p>

            <h2>Artikel 6 — Aansprakelijkheid</h2>
            <p>
              Donker &amp; Blond spant zich in om haar diensten zorgvuldig en naar beste vermogen uit te voeren. Onze aansprakelijkheid is beperkt tot het bedrag dat de bezoeker of opdrachtgever daadwerkelijk heeft betaald voor de desbetreffende dienst of het desbetreffende arrangement.
            </p>
            <p>
              Donker &amp; Blond is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst. Evenmin zijn wij aansprakelijk voor verlies of beschadiging van eigendommen van gasten in of rondom ons etablissement, tenzij er sprake is van opzet of grove schuld aan onze zijde.
            </p>
            <p>
              Gasten met (voedsel)allergieën of specifieke dieetwensen dienen dit voorafgaand aan hun bezoek of bestelling kenbaar te maken. Hoewel wij ons best doen rekening te houden met allergieën, kunnen wij kruisbesmetting niet in alle gevallen uitsluiten.
            </p>

            <h2>Artikel 7 — Klachten</h2>
            <p>
              Heeft u een klacht over onze service of producten? Wij stellen het op prijs als u dit direct en bij voorkeur ter plaatse kenbaar maakt, zodat we samen tot een oplossing kunnen komen. Klachten kunnen ook worden ingediend via{" "}
              <a href="mailto:info@donkerenblond.nl">info@donkerenblond.nl</a>. Wij streven ernaar klachten binnen <strong>14 dagen</strong> na ontvangst te behandelen.
            </p>

            <h2>Artikel 8 — Privacy</h2>
            <p>
              Donker &amp; Blond verwerkt persoonsgegevens uitsluitend ten behoeve van het uitvoeren van onze dienstverlening (zoals het beheren van reserveringen en het beantwoorden van vragen) en handelt in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG). Uw gegevens worden nooit verkocht aan derden. Zie ook ons{" "}
              <a href="#/cookiebeleid">Cookiebeleid</a> voor meer informatie over het gebruik van cookies op onze website.
            </p>

            <p className="legal-meta">
              Versie: mei 2026 · Donker &amp; Blond, Etten-Leur. Wijzigingen worden gepubliceerd op onze website.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   COOKIEBELEID
   ============================================================ */
function CookiebeleidPage() {
  return (
    <main>
      <PageHero
        crumb="Juridisch"
        title='Cookie&shy;beleid.<br/><span class="italic">Transparant over tracking.</span>'
        lead="Donker & Blond maakt beperkt gebruik van cookies op haar website. Op deze pagina leggen wij uit welke cookies wij plaatsen, waarom, en hoe u deze kunt beheren."
      />

      <section className="section bg-paper" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="legal-content">

            <h2>Wat zijn cookies?</h2>
            <p>
              Cookies zijn kleine tekstbestanden die door een website worden opgeslagen op uw computer, tablet of smartphone. Via cookies kan een website informatie onthouden over uw bezoek, zoals uw taalinstellingen of de inhoud van een winkelwagentje. Cookies kunnen ook worden ingezet om het gebruik van een website te meten of om gerichte advertenties te tonen.
            </p>
            <p>
              Er bestaat onderscheid tussen <strong>sessiecookies</strong> (tijdelijk, worden verwijderd als u uw browser sluit) en <strong>permanente cookies</strong> (blijven bewaard totdat ze verlopen of u ze verwijdert).
            </p>

            <h2>Welke cookies gebruiken wij?</h2>
            <h3>Functionele cookies</h3>
            <p>
              Functionele cookies zijn noodzakelijk voor het correct functioneren van onze website. Zij onthouden bijvoorbeeld uw cookievoorkeur en zorgen voor een stabiele browsesessie. Deze cookies zijn altijd actief en vereisen geen toestemming, omdat zij strikt noodzakelijk zijn voor de werking van de site.
            </p>
            <h3>Analytische cookies</h3>
            <p>
              Wij kunnen gebruik maken van geanonimiseerde analytische cookies (zoals een privacy-vriendelijke configuratie van Google Analytics of een alternatief) om inzicht te krijgen in het bezoekersgedrag op onze website — zoals welke pagina's het meest bezocht worden en hoe lang bezoekers op de site blijven. De gegevens zijn niet herleidbaar tot individuele personen en worden niet gedeeld met derden voor commerciële doeleinden.
            </p>
            <h3>Geen tracking of advertentie-cookies zonder toestemming</h3>
            <p>
              Donker &amp; Blond plaatst <strong>geen</strong> tracking- of advertentie-cookies zonder uw uitdrukkelijke toestemming. Wij werken niet samen met advertentienetwerken die uw surfgedrag over meerdere websites volgen.
            </p>

            <h2>Cookies beheren en verwijderen</h2>
            <p>
              U kunt via de instellingen van uw browser cookies uitschakelen of verwijderen. Houd er rekening mee dat het uitschakelen van functionele cookies de werking van onze website negatief kan beïnvloeden. Hieronder vindt u instructies voor de meest gebruikte browsers:
            </p>
            <ul>
              <li>
                <strong>Google Chrome:</strong> Instellingen → Privacy en beveiliging → Cookies en andere sitegegevens.
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Instellingen → Privacy &amp; Beveiliging → Cookies en sitegegevens.
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Instellingen → Cookies en sitemachtigingen → Cookies en opgeslagen gegevens beheren.
              </li>
              <li>
                <strong>Apple Safari:</strong> Voorkeuren → Privacy → Cookies en websitegegevens.
              </li>
            </ul>
            <p>
              Meer informatie over cookies en hoe u ze kunt beheren vindt u ook op{" "}
              <a href="https://www.consuwijzer.nl/telecom-en-post/internet/privacy/uitleg-cookies" target="_blank" rel="noopener noreferrer">ConsuWijzer</a>{" "}
              of de website van de{" "}
              <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">Autoriteit Persoonsgegevens</a>.
            </p>

            <h2>Contactgegevens</h2>
            <p>
              Heeft u vragen of opmerkingen over ons cookiebeleid of de verwerking van uw persoonsgegevens? Neem dan contact met ons op:
            </p>
            <address>
              <strong>Donker &amp; Blond</strong><br />
              Hof van den Houte<br />
              4871 AA Etten-Leur<br />
              Telefoon: <a href="tel:+31765041234">076 - 504 12 34</a><br />
              E-mail: <a href="mailto:info@donkerenblond.nl">info@donkerenblond.nl</a>
            </address>

            <p className="legal-meta">
              Versie: mei 2026 · Donker &amp; Blond, Etten-Leur. Dit cookiebeleid kan worden aangepast bij wijzigingen in onze website of de toepasselijke wetgeving.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   EXPORT
   ============================================================ */
window.AlgVoorwaardenPage = AlgVoorwaardenPage;
window.CookiebeleidPage = CookiebeleidPage;
