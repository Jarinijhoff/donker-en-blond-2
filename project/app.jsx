/* global React, ReactDOM, useRoute, useScrollReveal, Navbar, Footer, CookieBanner,
   HomePage, AboutPage, HoursPage, MenuPage, CateringPage, ContactPage,
   AlgVoorwaardenPage, CookiebeleidPage */

function App() {
  const [route, go] = useRoute();
  useScrollReveal();

  const transparent = route === "home";

  let Page;
  switch (route) {
    case "over-ons":              Page = AboutPage; break;
    case "menu":                  Page = MenuPage; break;
    case "openingstijden":        Page = HoursPage; break;
    case "catering":              Page = CateringPage; break;
    case "contact":               Page = ContactPage; break;
    case "algemene-voorwaarden":  Page = AlgVoorwaardenPage; break;
    case "cookiebeleid":          Page = CookiebeleidPage; break;
    default:                      Page = HomePage; break;
  }

  return (
    <React.Fragment>
      <Navbar route={route} go={go} transparentAllowed={transparent} />
      <Page key={route} go={go} />
      <Footer go={go} />
      <CookieBanner go={go} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
