import { gallery, sgd, site, studio, treatments, withBase } from "@/lib/site";

const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Book" },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <input id="nav-toggle" className="nav-toggle" type="checkbox" />
        <div className="header-bar">
          <a className="brand" href="#top">
            <strong>Sofia</strong>
            <span>Aesthetic Spa</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="book" href={site.whatsapp()}>
              WhatsApp
            </a>
          </nav>
          <label className="burger" htmlFor="nav-toggle" aria-label="Open menu">
            <i />
          </label>
        </div>
        <label className="nav-backdrop" htmlFor="nav-toggle" aria-label="Close menu" />
        <nav className="side-menu" aria-label="Mobile">
          <a className="brand" href="#top">
            <strong>Sofia</strong>
            <span>Aesthetic Spa</span>
          </a>
          <div className="side-links">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="book" href={site.whatsapp()} style={{ marginTop: "1.5rem" }}>
            WhatsApp {site.phoneDisplay}
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div>
            <p style={{ margin: 0, letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "0.75rem", color: "var(--clay)" }}>
              Singapore · WhatsApp booking
            </p>
            <h1>
              Sofia’s
              <br />
              <em>Aesthetic Spa</em>
            </h1>
            <p className="lede">
              Cupping, laser, Rejuran, and brow embroidery, priced the way the spa lists them on WhatsApp. Pick a treatment and send a booking message.
            </p>
            <a className="book" href={site.whatsapp()}>
              Book on WhatsApp · {site.phoneDisplay}
            </a>
          </div>
          <figure className="hero-photo">
            <img src={withBase("/gallery/shop.jpg")} alt="Sofia's Secret at 810 Geylang Road, City Plaza unit 01-115" />
            <figcaption>City Plaza · #01-115</figcaption>
          </figure>
        </section>

        <div className="film" aria-label="Studio photographs">
          {studio.slice(1, 5).map((shot) => (
            <figure key={shot.src}>
              <img src={withBase(shot.src)} alt={shot.alt} />
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>

        <section className="menu" id="menu">
          <div className="section-title">
            <h2>The menu</h2>
            <p>Promo price beside the usual price. All in SGD.</p>
          </div>
          <p className="swipe-hint">Swipe across the treatments</p>
          <div className="menu-rail">
            {treatments.map((item) => (
              <article key={item.name} className={item.image ? "treatment has-photo" : "treatment"}>
                {item.image ? <img src={withBase(item.image)} alt={item.imageAlt ?? item.name} /> : null}
                <div>
                  <h3>{item.name}</h3>
                  <p className="blurb">{item.blurb}</p>
                </div>
                <div className="prices">
                  <span className="promo">{sgd(item.promo)}</span>
                  <span className="was">{sgd(item.was)}</span>
                </div>
                <a className="mini-book" href={site.whatsapp(item.name)}>
                  Book
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery" id="gallery">
          <div className="section-title">
            <h2>Lookbook</h2>
            <p>Light, linen, and the treatments on the menu.</p>
          </div>
          <div className="studio-grid">
            {studio.map((shot) => (
              <figure key={shot.src}>
                <img src={withBase(shot.src)} alt={shot.alt} />
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="section-title" style={{ marginTop: "2.5rem" }}>
            <h2>In the room</h2>
            <p>Sessions as they happen.</p>
          </div>
          <div className="shots">
            {gallery.map((shot) => (
              <figure key={shot.src}>
                <img src={withBase(shot.src)} alt={shot.alt} />
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="visit" id="visit">
          <div className="visit-card">
            <div>
              <h2>Book a time</h2>
              <p>
                {site.address}. Tell us which treatment you want and we confirm the time on WhatsApp.
              </p>
              <a className="maps-link" href={site.maps}>
                Open in Google Maps
              </a>
            </div>
            <div style={{ display: "grid", gap: "0.7rem", justifyItems: "start" }}>
              <a className="phone-link" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
              <a className="book" href={site.whatsapp()}>
                Open WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>© 2026 Sofia’s Aesthetic Spa</footer>
      <a className="float-wa" href={site.whatsapp()}>
        WhatsApp
      </a>
    </>
  );
}
