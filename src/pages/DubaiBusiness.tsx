import { useEffect } from "react";

const WA_NUMBER = "94767282513";
function wa(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const AIRLINES = [
  {
    name: "flydubai",
    iata: "FZ",
    color: "#e4002b",
    via: "Direct",
    duration: "~3h 50m",
    terminal: "Terminal 2, DXB",
    lounge: "Smart Lounge, T2 Dubai Airport",
    price: "LKR 255,000",
    note: "Direct Business Class from Colombo — best value to Dubai",
  },
  {
    name: "Etihad Airways",
    iata: "EY",
    color: "#c5a64a",
    via: "Via Abu Dhabi + Coach",
    duration: "~5h 30m total",
    terminal: "Arrives AUH — coach to Dubai",
    lounge: "Etihad Business Lounge, AUH",
    price: "LKR 260,000",
    note: "Fly CMB→AUH in Business Class, luxury coach transfer to Dubai",
  },
  {
    name: "SriLankan Airlines",
    iata: "UL",
    color: "#003580",
    via: "Direct",
    duration: "~3h 50m",
    terminal: "Terminal 1, DXB",
    lounge: "Marhaba Lounge, T1 Dubai Airport",
    price: "LKR 288,000",
    note: "Direct service from Colombo — comfortable Business Class",
  },
  {
    name: "Qatar Airways",
    iata: "QR",
    color: "#5c0632",
    via: "Via Doha (DOH)",
    duration: "~6h 30m total",
    terminal: "Terminal 1, DXB",
    lounge: "Al Mourjan Business Lounge, DOH",
    price: "LKR 335,000",
    note: "Award-winning Qsuite Business Class via Doha",
  },
  {
    name: "Emirates",
    iata: "EK",
    color: "#c60c30",
    via: "Direct",
    duration: "~3h 50m",
    terminal: "Terminal 3, DXB",
    lounge: "Emirates Business Lounge, T3 Dubai",
    price: "LKR 389,000",
    note: "Emirates flagship home terminal — fully flat bed, fine dining",
  },
];

const MONTHS = [
  { m: "Jan", temp: "20°C", rating: 5, note: "Shopping Festival" },
  { m: "Feb", temp: "21°C", rating: 5, note: "Perfect weather" },
  { m: "Mar", temp: "25°C", rating: 5, note: "Ideal outdoors" },
  { m: "Apr", temp: "30°C", rating: 4, note: "Warm & sunny" },
  { m: "May", temp: "37°C", rating: 2, note: "Getting hot" },
  { m: "Jun", temp: "40°C", rating: 1, note: "Very hot" },
  { m: "Jul", temp: "43°C", rating: 1, note: "Extremely hot" },
  { m: "Aug", temp: "43°C", rating: 1, note: "Extreme heat" },
  { m: "Sep", temp: "40°C", rating: 1, note: "Still very hot" },
  { m: "Oct", temp: "34°C", rating: 3, note: "Cooling down" },
  { m: "Nov", temp: "27°C", rating: 5, note: "Great weather" },
  { m: "Dec", temp: "22°C", rating: 5, note: "Peak season" },
];

const ratingColor = (r: number) =>
  r === 5 ? "#15803d" : r === 4 ? "#65a30d" : r === 3 ? "#d97706" : "#94a3b8";

export default function DubaiBusiness() {
  useEffect(() => {
    document.title = "Business Class Colombo to Dubai — From LKR 255,000 | CLICKMYFARE";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Business Class flights from Colombo (CMB) to Dubai (DXB) from LKR 255,000 one way. flydubai, Etihad fly+bus, SriLankan Airlines, Qatar Airways, Emirates. IATA accredited agent. WhatsApp +94 76 728 2513.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://clickmyfare.com/business-class-colombo-dubai");
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "page-schema";
    schema.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "CLICKMYFARE", "item": "https://clickmyfare.com" },
          { "@type": "ListItem", "position": 2, "name": "Business Class Flights from Colombo", "item": "https://clickmyfare.com/#flights" },
          { "@type": "ListItem", "position": 3, "name": "Colombo to Dubai Business Class", "item": "https://clickmyfare.com/business-class-colombo-dubai" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Business Class — Colombo to Dubai (DXB)",
        "description": "Business Class flights from Colombo Bandaranaike International Airport (CMB) to Dubai International Airport (DXB). Includes lounge access, flat bed, premium dining. Airlines: flydubai, Etihad Airways, SriLankan Airlines, Qatar Airways, Emirates.",
        "brand": { "@type": "Brand", "name": "CLICKMYFARE" },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "LKR",
          "lowPrice": "255000",
          "highPrice": "389000",
          "offerCount": "5",
          "availability": "https://schema.org/InStock",
          "seller": { "@type": "TravelAgency", "name": "CLICKMYFARE — Global Knowledge Travel Services", "url": "https://clickmyfare.com" }
        }
      }
    ]);
    document.head.appendChild(schema);
    return () => {
      document.title = "Low Business Class Fares from Colombo | CLICKMYFARE";
      if (desc) desc.setAttribute("content", "Low business class fares & premium economy fares from Colombo (CMB). IATA-accredited, 33 years experience. Emirates, Qatar, Etihad & more. WhatsApp +94 76 728 2513.");
      if (canonical) canonical.setAttribute("href", "https://clickmyfare.com/");
      document.getElementById("page-schema")?.remove();
    };
  }, []);
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#f5f5f3", minHeight: "100vh", color: "#1a1a1a" }}>

      {/* ── NAV ── */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #ebebeb", position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 clamp(16px,4vw,48px)", height: 58 }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontSize: "clamp(17px,2.2vw,21px)", fontWeight: 900, color: "#1a1a1a", letterSpacing: "-0.5px" }}>CLICKMYFARE</span>
          <span style={{ width: 9, height: 9, background: "#e53935", borderRadius: 2, marginLeft: 2, flexShrink: 0 }} />
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="/#flights" style={{ fontSize: 13, color: "#555", textDecoration: "none", fontWeight: 500 }}>All Routes</a>
          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 7, background: "#25d366", color: "#fff", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div style={{ position: "relative", height: "clamp(320px,45vw,520px)", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1600&q=90"
          alt="Dubai skyline at sunset"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.65) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(24px,4vw,52px) clamp(20px,5vw,64px)" }}>
          <div style={{ fontSize: "clamp(11px,1.4vw,13px)", letterSpacing: "0.18em", color: "rgba(255,255,255,0.72)", fontWeight: 500, marginBottom: 10, textTransform: "uppercase" }}>
            Business Class · CMB → DXB
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,58px)", fontWeight: 300, color: "#fff", margin: 0, letterSpacing: "-1px", lineHeight: 1.12 }}>
            Colombo to Dubai<br />
            <span style={{ fontWeight: 700 }}>Business Class Fares</span>
          </h1>
          <p style={{ fontSize: "clamp(13px,1.6vw,17px)", color: "rgba(255,255,255,0.78)", marginTop: 14, fontWeight: 300, maxWidth: 560, lineHeight: 1.6 }}>
            5 airlines · Direct & connecting · Flat beds & lounge access · From LKR 255,000 one way
          </p>
          <a href={wa("Hi! I'd like a Business Class fare from Colombo to Dubai (DXB). Please send me the best available options.")}
            target="_blank" rel="noreferrer"
            style={{ marginTop: 22, display: "inline-flex", alignItems: "center", gap: 9, background: "#25d366", color: "#fff", borderRadius: 10, padding: "14px 28px", fontSize: "clamp(13px,1.5vw,16px)", fontWeight: 700, textDecoration: "none", alignSelf: "flex-start" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Get My Business Class Fare
          </a>
        </div>
      </div>

      {/* ── QUICK STATS ── */}
      <div style={{ background: "#1a1a1a", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "18px clamp(16px,4vw,48px)", display: "flex", gap: "clamp(20px,4vw,60px)", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { label: "AIRLINES", val: "5 options" },
            { label: "FASTEST", val: "~3h 50m direct" },
            { label: "FROM", val: "LKR 255,000" },
            { label: "ARRIVAL", val: "Dubai Intl (DXB)" },
            { label: "CABIN", val: "Business Class" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 10, letterSpacing: "0.14em", color: "#888", fontWeight: 600 }}>{s.label}</div>
              <div style={{ fontSize: "clamp(14px,1.8vw,17px)", fontWeight: 700, marginTop: 3 }}>{s.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FARE TABLE ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(36px,5vw,64px) clamp(16px,4vw,48px)" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: "clamp(10px,1.2vw,12px)", letterSpacing: "0.16em", color: "#aaa", fontWeight: 600, marginBottom: 8 }}>INDICATIVE FARES · SUBJ. TO AVAILABILITY · CONFIRM VIA WHATSAPP</div>
          <h2 style={{ fontSize: "clamp(22px,3.5vw,38px)", fontWeight: 300, margin: 0, letterSpacing: "-0.5px" }}>
            Business Class — <span style={{ fontWeight: 700 }}>Colombo to Dubai</span>
          </h2>
          <p style={{ fontSize: "clamp(13px,1.5vw,16px)", color: "#666", marginTop: 10, fontWeight: 300, lineHeight: 1.6 }}>
            Fares shown are one-way, per person, in Business Class. All include lounge access at Colombo and Dubai.
            Prices are indicative — WhatsApp us to get your exact fare and availability.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {AIRLINES.map((a) => {
            const msg = `Hi! I'd like to enquire about ${a.name} CMB→DXB Business Class — ${a.price} One Way. Please confirm availability and seat details.`;
            return (
              <div key={a.iata} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", border: "1px solid #ebebeb", display: "flex", flexDirection: "column" }}>
                <div style={{ height: 3, background: a.color }} />
                <div style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                  <div style={{ width: 110, height: 48, display: "flex", alignItems: "center", justifyContent: "center", background: "#f8f8f8", borderRadius: 10, flexShrink: 0, overflow: "hidden", padding: 8 }}>
                    <img
                      src={`https://pics.avs.io/200/80/${a.iata}.png`}
                      alt={a.name}
                      style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                      onError={(e) => {
                        const t = e.currentTarget as HTMLImageElement;
                        t.style.display = "none";
                        const p = t.parentElement;
                        if (p) { p.innerText = a.name; p.style.fontSize = "11px"; p.style.fontWeight = "700"; p.style.color = "#1a1a1a"; p.style.textAlign = "center"; }
                      }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: 180 }}>
                    <div style={{ fontSize: "clamp(15px,1.8vw,18px)", fontWeight: 700, color: "#1a1a1a" }}>{a.name}</div>
                    <div style={{ fontSize: 13, color: "#666", marginTop: 4, display: "flex", flexWrap: "wrap", gap: "4px 16px" }}>
                      <span>✈ {a.via}</span>
                      <span>⏱ {a.duration}</span>
                      <span>🛬 {a.terminal}</span>
                    </div>
                    <div style={{ fontSize: 12, color: "#999", marginTop: 5, fontStyle: "italic" }}>{a.note}</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                    <div>
                      <div style={{ fontSize: 10, color: "#aaa", fontWeight: 600, letterSpacing: "0.1em", textAlign: "right" }}>BUSINESS CLASS · ONE WAY</div>
                      <div style={{ fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 900, color: "#1a1a1a", letterSpacing: "-0.5px", textAlign: "right" }}>{a.price}</div>
                      <div style={{ fontSize: 10, color: "#bbb", textAlign: "right" }}>Indicative · Subj. to change</div>
                    </div>
                    <a href={wa(msg)} target="_blank" rel="noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 8, background: "#25d366", color: "#fff", borderRadius: 9, padding: "11px 20px", fontSize: 14, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      GET FARE
                    </a>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid #f0f0f0", padding: "10px 24px", background: "#fafafa", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 14 }}>🛋</span>
                  <span style={{ fontSize: 12, color: "#666" }}><strong style={{ color: "#1a1a1a" }}>Dubai Lounge:</strong> {a.lounge}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 16, fontSize: 12, color: "#bbb", textAlign: "center" }}>
          All fares are indicative one-way Business Class. Subject to availability and airline fare conditions. WhatsApp to confirm exact pricing.
        </div>
      </div>

      {/* ── COLOMBO LOUNGES ── */}
      <div style={{ background: "#fff", borderTop: "1px solid #ebebeb", borderBottom: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(36px,5vw,56px) clamp(16px,4vw,48px)" }}>
          <div style={{ fontSize: "clamp(10px,1.2vw,12px)", letterSpacing: "0.16em", color: "#aaa", fontWeight: 600, marginBottom: 8 }}>BEFORE YOU FLY</div>
          <h2 style={{ fontSize: "clamp(20px,3vw,34px)", fontWeight: 300, margin: "0 0 28px", letterSpacing: "-0.5px" }}>
            Colombo Airport — <span style={{ fontWeight: 700 }}>Business Class Lounges</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { name: "SriLankan Airlines Serendib Lounge", where: "Departures, Bandaranaike International Airport", details: "Open to all Business Class passengers departing CMB. Extensive hot & cold buffet, à la carte options, premium bar, shower facilities, business centre, free Wi-Fi. One of the finest airport lounges in South Asia.", access: "Automatic with any Business Class ticket booked through CLICKMYFARE", icon: "🌿" },
              { name: "The Lounge by Airport Premier", where: "International Departures, CMB", details: "Premium independent lounge accessible to Business Class passengers across all airlines. International cuisine, quiet rest zones, private meeting areas, premium spirits.", access: "Accessible with most Business Class boarding passes", icon: "✦" },
            ].map(l => (
              <div key={l.name} style={{ background: "#f8f8f6", borderRadius: 14, padding: "24px 24px", border: "1px solid #ebebeb" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{l.icon}</div>
                <div style={{ fontSize: "clamp(14px,1.6vw,17px)", fontWeight: 700, marginBottom: 4 }}>{l.name}</div>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 12 }}>📍 {l.where}</div>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, margin: "0 0 12px", fontWeight: 300 }}>{l.details}</p>
                <div style={{ fontSize: 12, color: "#25d366", fontWeight: 600 }}>✓ {l.access}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DUBAI LOUNGES ── */}
      <div style={{ background: "#f5f5f3" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(36px,5vw,56px) clamp(16px,4vw,48px)" }}>
          <div style={{ fontSize: "clamp(10px,1.2vw,12px)", letterSpacing: "0.16em", color: "#aaa", fontWeight: 600, marginBottom: 8 }}>ON ARRIVAL IN DUBAI</div>
          <h2 style={{ fontSize: "clamp(20px,3vw,34px)", fontWeight: 300, margin: "0 0 28px", letterSpacing: "-0.5px" }}>
            Dubai Airport — <span style={{ fontWeight: 700 }}>Business Class Lounges</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { airline: "Emirates", terminal: "T3", name: "Emirates Business Lounge, T3", detail: "The iconic Emirates Business Lounge at Terminal 3 — world-class buffet with live cooking stations, premium bar, à la carte dining, spa treatments, jacuzzi and cigar lounge. Widely regarded as the world's best airline lounge.", icon: "👑" },
              { airline: "flydubai", terminal: "T2", name: "Smart Lounge, T2", detail: "flydubai's Smart Lounge at Terminal 2. Comfortable seating, hot and cold buffet, bar and business facilities. A solid lounge experience before your short 4-hour flight home.", icon: "✈" },
              { airline: "SriLankan Airlines", terminal: "T1", name: "Marhaba Lounge, T1", detail: "Marhaba Lounge at Terminal 1 — hot and cold buffet, premium bar, shower facilities and comfortable seating for Business Class passengers. Popular with South Asian carriers at T1.", icon: "🌿" },
              { airline: "Qatar Airways", terminal: "T1", name: "Qatar Airways Business Lounge, T1", detail: "Qatar Airways Business Class lounge at Terminal 1. During your Doha layover you also enjoy the award-winning Al Mourjan Business Lounge — one of the world's finest transit lounges.", icon: "🌟" },
              { airline: "Etihad fly+bus", terminal: "AUH", name: "Etihad Business Lounge, AUH", detail: "Etihad Business Class lounge at Abu Dhabi Airport. After landing at AUH, a comfortable luxury coach transfers you to Dubai (~1h 30m). A unique and scenic arrival into Dubai.", icon: "🚌" },
            ].map(l => (
              <div key={l.airline} style={{ background: "#fff", borderRadius: 14, padding: "20px 22px", border: "1px solid #ebebeb", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <span style={{ fontSize: 24 }}>{l.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, background: "#f0f0f0", borderRadius: 6, padding: "3px 8px", color: "#666" }}>{l.terminal}</span>
                </div>
                <div style={{ fontSize: "clamp(13px,1.5vw,15px)", fontWeight: 700, marginBottom: 4 }}>{l.name}</div>
                <div style={{ fontSize: 11, color: "#aaa", marginBottom: 10 }}>{l.airline}</div>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, margin: 0, fontWeight: 300 }}>{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BEST MONTHS ── */}
      <div style={{ background: "#fff", borderTop: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(36px,5vw,56px) clamp(16px,4vw,48px)" }}>
          <div style={{ fontSize: "clamp(10px,1.2vw,12px)", letterSpacing: "0.16em", color: "#aaa", fontWeight: 600, marginBottom: 8 }}>TRAVEL PLANNING</div>
          <h2 style={{ fontSize: "clamp(20px,3vw,34px)", fontWeight: 300, margin: "0 0 28px", letterSpacing: "-0.5px" }}>
            Best Time to Visit — <span style={{ fontWeight: 700 }}>Dubai</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10 }}>
            {MONTHS.map(m => (
              <div key={m.m} style={{ background: "#f8f8f6", borderRadius: 12, padding: "14px 10px", textAlign: "center", border: `2px solid ${m.rating >= 4 ? ratingColor(m.rating) : "#ebebeb"}` }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a" }}>{m.m}</div>
                <div style={{ fontSize: 11, color: "#888", margin: "3px 0" }}>{m.temp}</div>
                <div style={{ display: "flex", justifyContent: "center", gap: 2, margin: "6px 0" }}>
                  {[1,2,3,4,5].map(i => (
                    <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i <= m.rating ? ratingColor(m.rating) : "#e0e0e0" }} />
                  ))}
                </div>
                <div style={{ fontSize: 9, color: "#999", lineHeight: 1.4 }}>{m.note}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { label: "Peak", desc: "Nov – Mar", color: "#15803d" },
              { label: "Good", desc: "Apr", color: "#65a30d" },
              { label: "Warm", desc: "Oct", color: "#d97706" },
              { label: "Avoid", desc: "May – Sep (extreme heat)", color: "#94a3b8" },
            ].map(k => (
              <div key={k.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#555" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: k.color }} />
                <strong>{k.label}:</strong> {k.desc}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY CLICKMYFARE ── */}
      <div style={{ background: "#1a1a1a", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(36px,5vw,56px) clamp(16px,4vw,48px)" }}>
          <div style={{ fontSize: "clamp(10px,1.2vw,12px)", letterSpacing: "0.16em", color: "#666", fontWeight: 600, marginBottom: 8 }}>IATA ACCREDITED · AGENT CODE 07303284</div>
          <h2 style={{ fontSize: "clamp(20px,3vw,34px)", fontWeight: 300, margin: "0 0 28px", letterSpacing: "-0.5px" }}>
            Why book with <span style={{ fontWeight: 700 }}>CLICKMYFARE?</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {[
              { icon: "🎫", title: "IATA Accredited", desc: "Authorised travel agent (07303284) with direct access to airline inventory and consolidator fares not available online." },
              { icon: "💰", title: "Nett Agent Fares", desc: "We access unpublished Business Class fares — often 20–35% cheaper than booking direct with the airline." },
              { icon: "📱", title: "Instant WhatsApp Reply", desc: "No forms, no waiting. WhatsApp us and get a real fare from a real person within minutes." },
              { icon: "🛋", title: "Lounge Access Included", desc: "All Business Class tickets booked through us include lounge access at Colombo and your destination." },
            ].map(w => (
              <div key={w.title} style={{ background: "#242424", borderRadius: 14, padding: "22px 20px" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{w.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{w.title}</div>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, margin: 0, fontWeight: 300 }}>{w.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <a href={wa("Hi! I'd like a Business Class fare from Colombo to Dubai (DXB). Please send me the best available options.")}
              target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#25d366", color: "#fff", borderRadius: 12, padding: "16px 36px", fontSize: "clamp(14px,1.6vw,17px)", fontWeight: 700, textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp — Get My Dubai Fare Now
            </a>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#111", color: "#777", padding: "28px clamp(16px,4vw,48px)", textAlign: "center", fontSize: 12 }}>
        <div style={{ marginBottom: 8 }}>
          <a href="/" style={{ color: "#fff", fontWeight: 900, fontSize: 16, textDecoration: "none", letterSpacing: "-0.5px" }}>CLICKMYFARE<span style={{ display: "inline-block", width: 7, height: 7, background: "#e53935", borderRadius: 1, marginLeft: 2, verticalAlign: "middle" }} /></a>
        </div>
        <div style={{ marginBottom: 6 }}>Global Knowledge Travel Services · IATA Agent Code: 07303284 · WhatsApp: +94 76 728 2513</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", marginBottom: 6 }}>
          <a href="/privacy" style={{ color: "#555", textDecoration: "none" }}>Privacy Policy</a>
          <a href="/refund-policy" style={{ color: "#555", textDecoration: "none" }}>Refund Policy</a>
          <a href="/terms" style={{ color: "#555", textDecoration: "none" }}>Terms & Conditions</a>
        </div>
        <div style={{ color: "#444" }}>© 2025 CLICKMYFARE · Indicative fares · Subject to availability</div>
      </footer>
    </div>
  );
}
