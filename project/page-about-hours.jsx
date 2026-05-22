/* global React, PageHero, SecHead */

/* ============================================================
   OVER ONS
   ============================================================ */
function AboutPage({ go }) {
  return (
    <main>
      <PageHero
        crumb="02 · Over ons"
        title='Een leuke horecazaak<br/><span class="italic">in het hart van Etten-Leur.</span>'
        lead="Donker en Blond is een gezellige plek voor koffie, lunch, borrel en alles ertussenin. U vindt ons in de winkelstraat Hof van den Houte, met twee fijne terrassen en een grote speelhoek voor de kleine gasten."
      />

      <section className="section bg-paper">
        <div className="container">
          <div className="about-intro__grid">
            <div className="about-intro__copy">
              <span className="eyebrow reveal">Wie wij zijn</span>
              <h2 className="reveal delay-1" style={{ marginTop: 14 }}>
                Koffie, lunch en<br/>
                <span className="italic">een warm welkom.</span>
              </h2>
              <p className="reveal delay-2">
                Donker en Blond is een leuke horecazaak met diverse koffie- en biersoorten, lekkernijen en lunchspecialiteiten. Waar ook voor de kleine gasten een grote speelhoek is. Wij zijn te vinden in de winkelstraat Hof van den Houte in Etten-Leur.
              </p>
              <p className="reveal delay-2">
                Ons terras in de winkelstraat biedt een gezellige sfeer. Tevens hebben wij een terras in het winkelcentrum waar u ook heerlijk kunt genieten van al onze lekkers. Onze inrichting is fris, trendy en gezellig, dus voor een breed publiek toegankelijk.
              </p>
              <p className="reveal delay-2">
                Bij ons kunt u terecht voor koffie met een lekkernij, voor een heerlijke lunch, een gezellige High&#8209;Tea, een borrel op onze sfeervolle terrassen en burgers op vrijdagavond.
              </p>
            </div>
            <div className="about-intro__media reveal delay-1">
              <img src="assets/dish-platter.jpg" alt="Een rijk gedekte tafel bij Donker en Blond" />
              <span className="about-intro__caption">Aan tafel bij Donker &amp; Blond</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section values">
        <div className="container">
          <SecHead
            eyebrow="Wat u bij ons vindt"
            title='Vier dingen die<br/><span class="italic">Donker &amp; Blond maken.</span>'
            body="Kleine zaak, breed publiek. Hieronder een paar dingen die u bij ons mag verwachten."
          />
          <div className="values__grid">
            <div className="value-card reveal">
              <span className="num">i.</span>
              <h4>Koffie &amp; bier</h4>
              <p>Diverse koffiesoorten en een verzorgde bierkaart. Vers gezet, met aandacht, en altijd iets om bij weg te zakken.</p>
            </div>
            <div className="value-card reveal delay-1">
              <span className="num">ii.</span>
              <h4>Lunch &amp; lekkernijen</h4>
              <p>Onze lunchspecialiteiten, taart, gebak en een gezellige High&#8209;Tea op aanvraag. Vrijdagavond staan de burgers klaar.</p>
            </div>
            <div className="value-card reveal delay-2">
              <span className="num">iii.</span>
              <h4>Twee terrassen</h4>
              <p>Een sfeervol terras in de winkelstraat en een tweede terras in het winkelcentrum, voor wie liever even uit de wind zit.</p>
            </div>
            <div className="value-card reveal delay-3">
              <span className="num">iv.</span>
              <h4>Grote speelhoek</h4>
              <p>Voor de kleine gasten is er bij ons een ruime speelhoek, zodat iedereen aan tafel even tot rust komt.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <div className="team__grid">
            <div className="team__media reveal">
              <img src="assets/dish-broodjes.jpg" alt="Luxe broodjes bij Donker en Blond" />
            </div>
            <div className="team__copy reveal delay-1">
              <span className="eyebrow">Kom langs</span>
              <h2 style={{ marginTop: 14 }}>
                Loop binnen in<br/>
                <span className="italic">Hof van den Houte.</span>
              </h2>
              <p>
                We zien u graag op de koffie. Reserveren kan telefonisch, ook handig voor groepen, een High&#8209;Tea of een burger&#8209;vrijdag.
              </p>
              <a
                href="#/contact"
                onClick={(e) => { e.preventDefault(); go("contact"); }}
                className="btn btn--outline"
                style={{ marginTop: 12 }}
              >
                Bekijk contact en route <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   OPENINGSTIJDEN
   ============================================================ */
function HoursPage({ go }) {
  const days = [
    { day: "Maandag",   time: "11.00 - 17.30" },
    { day: "Dinsdag",   time: "9.30 - 17.30" },
    { day: "Woensdag",  time: "9.30 - 17.30" },
    { day: "Donderdag", time: "9.30 - 17.30" },
    { day: "Vrijdag",   time: "9.30 - 17.30" },
    { day: "Zaterdag",  time: "9.30 - 17.00" },
    { day: "Zondag",    time: "11.00 - 17.00", note: "alleen geopend met koopzondagen en evenementen" },
  ];
  const todayIdx = (new Date().getDay() + 6) % 7; // 0=Monday

  return (
    <main>
      <PageHero
        crumb="04 · Openingstijden"
        title='Wanneer u<br/><span class="italic">aan tafel kunt.</span>'
        lead="Onze openingstijden zijn hieronder te vinden. Onze keuken sluit een half uur voor sluitingstijd."
      />

      <section className="section bg-paper" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="hours-full__grid">
            <div className="hours-full__panel reveal">
              <div className="hours__status" style={{ marginBottom: 36 }}>
                <span className="dot"></span>
                <span>Onze keuken sluit een half uur voor sluitingstijd</span>
              </div>
              {days.map((d, i) => (
                <div key={d.day} className={"hours-day " + (i === todayIdx ? "today" : "")}>
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  <span className="day">
                    {d.day}
                    {i === todayIdx && <span className="badge">vandaag</span>}
                  </span>
                  <span className="time">{d.time}{d.note && <span className="note"> · {d.note}</span>}</span>
                </div>
              ))}
            </div>

            <div className="hours-side">
              <div className="hours-info-card reveal delay-1">
                <span className="eyebrow" style={{ color: "var(--blond)" }}>Telefonisch reserveren</span>
                <h4>Met een <span className="italic">groep</span> komen?</h4>
                <p>Voor grotere groepen, een High&#8209;Tea of burger&#8209;vrijdag belt u ons even van tevoren. We helpen u graag verder.</p>
                <a href="#/contact" onClick={(e) => { e.preventDefault(); go("contact"); }} className="btn btn--ghost" style={{ marginTop: 12, alignSelf: "flex-start" }}>
                  Bekijk contact <span className="arrow">→</span>
                </a>
              </div>

              <div className="hours-tip reveal delay-2">
                <span className="eyebrow">Burger-vrijdag</span>
                <p>Elke vrijdagavond staan onze burgers op de kaart. Een gezellige avond uit met het hele gezin.</p>
              </div>

              <div className="hours-tip reveal delay-2" style={{ borderLeftColor: "var(--espresso)" }}>
                <span className="eyebrow">Op het terras</span>
                <p>Twee terrassen: een sfeervol terras in de winkelstraat en een tweede terras in het winkelcentrum. Geopend zodra het weer het toelaat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

window.AboutPage = AboutPage;
window.HoursPage = HoursPage;
