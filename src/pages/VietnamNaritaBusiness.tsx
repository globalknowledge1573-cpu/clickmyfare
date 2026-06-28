import { useEffect } from "react";

const WA_NUMBER = "94767282513";
function wa(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const MONTHS = [
  { m: "Jan", temp: "6°C",  rating: 3, note: "Cold, clear" },
  { m: "Feb", temp: "7°C",  rating: 3, note: "Plum blossoms" },
  { m: "Mar", temp: "11°C", rating: 5, note: "Cherry blossom!" },
  { m: "Apr", temp: "17°C", rating: 5, note: "Peak sakura" },
  { m: "May", temp: "21°C", rating: 4, note: "Warm & pleasant" },
  { m: "Jun", temp: "24°C", rating: 2, note: "Rainy season" },
  { m: "Jul", temp: "28°C", rating: 4, note: "Summer festivals" },
  { m: "Aug", temp: "30°C", rating: 4, note: "Fireworks & Obon" },
  { m: "Sep", temp: "26°C", rating: 3, note: "Typhoon season" },
  { m: "Oct", temp: "20°C", rating: 5, note: "Fall foliage" },
  { m: "Nov", temp: "14°C", rating: 5, note: "Peak autumn" },
  { m: "Dec", temp: "9°C",  rating: 3, note: "Cold, illuminations" },
];

const ratingColor = (r: number) =>
  r === 5 ? "#15803d" : r === 4 ? "#65a30d" : r === 3 ? "#d97706" : "#94a3b8";

const WA_MSG = "Hi! I'd like to enquire about Vietnam Airlines CMB→SGN→NRT Business Class — LKR 349,000 One Way (from Aug 17). Please confirm availability and seat details.";

export default function VietnamNaritaBusiness() {
  useEffect(() => {
    document.title = "Vietnam Airlines Business Class Colombo to Tokyo — LKR 349,000 | CLICKMYFARE";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Vietnam Airlines Business Class from Colombo (CMB) to Tokyo Narita (NRT) via Ho Chi Minh City — LKR 349,000 one way. New route from August 17, 2026. IATA agent 07303284. WhatsApp +94 76 728 2513.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://clickmyfare.com/vietnam-airlines-colombo-narita");
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "page-schema";
    schema.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "CLICKMYFARE", "item": "https://clickmyfare.com" },
          { "@type": "ListItem", "position": 2, "name": "Business Class from Colombo", "item": "https://clickmyfare.com/#flights" },
          { "@type": "ListItem", "position": 3, "name": "Vietnam Airlines — Colombo to Tokyo Business Class", "item": "https://clickmyfare.com/vietnam-airlines-colombo-narita" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Vietnam Airlines Business Class — Colombo to Tokyo Narita via Ho Chi Minh City",
        "description": "Vietnam Airlines Business Class from Colombo (CMB) to Tokyo Narita (NRT) via Ho Chi Minh City (SGN). New route from August 17, 2026. LKR 349,000 one way. Includes lounge access at CMB, SGN and NRT.",
        "brand": { "@type": "Brand", "name": "CLICKMYFARE" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "LKR",
          "price": "349000",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-08-17",
          "seller": { "@type": "TravelAgency", "name": "CLICKMYFARE — Global Knowledge Travel Services", "url": "https://clickmyfare.com" }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does Vietnam Airlines fly from Colombo to Tokyo?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes — Vietnam Airlines launched a new route from Colombo (CMB) to Tokyo Narita (NRT) via Ho Chi Minh City (SGN) from August 17, 2026. Business Class is available from LKR 349,000 one way. CLICKMYFARE is one of the first IATA agents in Sri Lanka to offer this new route — WhatsApp +94 76 728 2513 to book." }
          },
          {
            "@type": "Question",
            "name": "How much is Vietnam Airlines Business Class from Colombo to Tokyo?",
            "acceptedAnswer": { "@type": "Answer", "text": "Vietnam Airlines Business Class from Colombo (CMB) to Tokyo Narita (NRT) via Ho Chi Minh City is LKR 349,000 one way. This is a new route launching August 17, 2026. As an introductory fare, prices are expected to increase once the route is established. WhatsApp CLICKMYFARE on +94 76 728 2513 to lock in this fare now." }
          },
          {
            "@type": "Question",
            "name": "What is the Vietnam Airlines Business Class like on the Colombo to Tokyo route?",
            "acceptedAnswer": { "@type": "Answer", "text": "Vietnam Airlines Business Class features fully flat-bed seats, premium dining with Vietnamese and international cuisine, noise-cancelling headphones and personal entertainment screens. The business class cabin operates on their wide-body aircraft on the Ho Chi Minh City to Tokyo Narita sector. Lounge access is included at all three airports — Colombo, Ho Chi Minh City and Narita." }
          },
          {
            "@type": "Question",
            "name": "What lounges does Vietnam Airlines Business Class include?",
            "acceptedAnswer": { "@type": "Answer", "text": "Vietnam Airlines Business Class passengers departing Colombo access the Serendib Lounge at BIA before departure. During the layover at Tan Son Nhat Airport (SGN), Ho Chi Minh City, passengers enjoy the Vietnam Airlines Lotus Lounge — a premium lounge with Vietnamese cuisine, spa services and relaxation zones. At Tokyo Narita, partner lounge access is provided at Terminal 2." }
          },
          {
            "@type": "Question",
            "name": "How do I book Vietnam Airlines Business Class from Colombo to Tokyo?",
            "acceptedAnswer": { "@type": "Answer", "text": "WhatsApp CLICKMYFARE on +94 76 728 2513. We are an IATA-accredited travel agent (Code: 07303284) with 33 years of experience. As Vietnam Airlines' new CMB–NRT route launches August 17, 2026, seats are limited — especially in Business Class. Contact us now to secure your seat at the introductory LKR 349,000 fare before prices increase." }
          }
        ]
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
          <a href="/business-class-colombo-narita" style={{ fontSize: 13, color: "#555", textDecoration: "none", fontWeight: 500 }}>All CMB–NRT Options</a>
          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 7, background: "#25d366", color: "#fff", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
        </div>
      </nav>

      {/* ── HERO with VN Business Class card inside ── */}
      <div style={{ position: "relative", height: "clamp(380px,52vw,600px)", overflow: "hidden" }}>
        {/* Background: Ho Chi Minh City skyline — the layover city */}
        <img
          src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1600&q=90"
          alt="Ho Chi Minh City skyline"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(0,30,80,0.82) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.1) 100%)" }} />

        {/* Hero text — left side */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: "clamp(24px,4vw,52px) clamp(20px,5vw,64px)", gap: "clamp(24px,4vw,60px)", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 20, padding: "5px 14px", marginBottom: 14 }}>
              <span style={{ width: 8, height: 8, background: "#4ade80", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 0 3px rgba(74,222,128,0.3)" }} />
              <span style={{ fontSize: "clamp(10px,1.3vw,12px)", color: "rgba(255,255,255,0.9)", fontWeight: 700, letterSpacing: "0.14em" }}>NEW ROUTE · FROM AUG 17, 2026</span>
            </div>
            <h1 style={{ fontSize: "clamp(26px,4.5vw,54px)", fontWeight: 300, color: "#fff", margin: "0 0 8px", letterSpacing: "-1px", lineHeight: 1.1 }}>
              Vietnam Airlines<br />
              <span style={{ fontWeight: 800 }}>Colombo → Tokyo</span>
            </h1>
            <p style={{ fontSize: "clamp(13px,1.5vw,16px)", color: "rgba(255,255,255,0.75)", margin: "12px 0 20px", lineHeight: 1.6, fontWeight: 300, maxWidth: 480 }}>
              Business Class · Via Ho Chi Minh City (SGN) · ~11h total · Flat bed &amp; Lotus Lounge
            </p>
            <a href={wa(WA_MSG)} target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#25d366", color: "#fff", borderRadius: 10, padding: "13px 26px", fontSize: "clamp(13px,1.5vw,15px)", fontWeight: 700, textDecoration: "none" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book My Seat Now
            </a>
          </div>

          {/* ── AIRLINE CARD INSIDE IMAGE ── */}
          <div style={{ flexShrink: 0, width: "clamp(240px,28vw,320px)", background: "rgba(255,255,255,0.10)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.35)" }}>
            {/* VN brand top stripe */}
            <div style={{ height: 4, background: "linear-gradient(90deg, #0066B3 0%, #D4AF37 100%)" }} />
            <div style={{ padding: "20px 22px" }}>
              {/* Airline logo */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div style={{ width: 72, height: 40, background: "rgba(255,255,255,0.92)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", padding: 6, flexShrink: 0 }}>
                  <img src="https://pics.avs.io/200/80/VN.png" alt="Vietnam Airlines" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      t.style.display = "none";
                      const p = t.parentElement;
                      if (p) { p.innerText = "Vietnam Airlines"; p.style.fontSize = "10px"; p.style.fontWeight = "800"; p.style.color = "#0066B3"; p.style.textAlign = "center"; }
                    }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>Vietnam Airlines</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>Business Class</div>
                </div>
              </div>

              {/* Route visual */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(18px,2.2vw,22px)", fontWeight: 900, color: "#fff", lineHeight: 1 }}>CMB</div>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>COLOMBO</div>
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "0 4px" }}>
                  <div style={{ fontSize: 9, color: "#D4AF37", fontWeight: 700, letterSpacing: "0.08em" }}>VIA SGN</div>
                  <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.25)", position: "relative" }}>
                    <div style={{ position: "absolute", top: -5, left: "50%", transform: "translateX(-50%)", fontSize: 10 }}>✈</div>
                  </div>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)" }}>~11h total</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(18px,2.2vw,22px)", fontWeight: 900, color: "#fff", lineHeight: 1 }}>NRT</div>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>TOKYO</div>
                </div>
              </div>

              {/* Price */}
              <div style={{ background: "rgba(0,102,179,0.35)", borderRadius: 12, padding: "14px 16px", marginBottom: 14, border: "1px solid rgba(0,102,179,0.4)" }}>
                <div style={{ fontSize: 10, color: "#D4AF37", fontWeight: 700, letterSpacing: "0.12em", marginBottom: 4 }}>BUSINESS CLASS · ONE WAY</div>
                <div style={{ fontSize: "clamp(24px,3vw,30px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.5px" }}>LKR 349,000</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Indicative · Subj. to change</div>
              </div>

              {/* Features */}
              {["Fully flat-bed seat", "Lotus Lounge at SGN", "Vietnamese fine dining"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                  <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#0066B3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", fontWeight: 400 }}>{f}</span>
                </div>
              ))}

              <a href={wa(WA_MSG)} target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#25d366", color: "#fff", borderRadius: 9, padding: "11px 0", fontSize: 13, fontWeight: 700, textDecoration: "none", marginTop: 14, width: "100%" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                GET FARE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#1a1a1a", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "18px clamp(16px,4vw,48px)", display: "flex", gap: "clamp(20px,4vw,60px)", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { label: "AIRLINE", val: "Vietnam Airlines" },
            { label: "ROUTE", val: "CMB → SGN → NRT" },
            { label: "FROM", val: "LKR 349,000" },
            { label: "EFFECTIVE", val: "Aug 17, 2026" },
            { label: "CABIN", val: "Business Class" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 10, letterSpacing: "0.14em", color: "#888", fontWeight: 600 }}>{s.label}</div>
              <div style={{ fontSize: "clamp(13px,1.7vw,16px)", fontWeight: 700, marginTop: 3 }}>{s.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FARE CARD ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(36px,5vw,64px) clamp(16px,4vw,48px)" }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: "clamp(10px,1.2vw,12px)", letterSpacing: "0.16em", color: "#aaa", fontWeight: 600, marginBottom: 8 }}>INDICATIVE FARE · FROM AUG 17, 2026 · SUBJ. TO AVAILABILITY</div>
          <h2 style={{ fontSize: "clamp(22px,3.5vw,38px)", fontWeight: 300, margin: 0, letterSpacing: "-0.5px" }}>
            Vietnam Airlines — <span style={{ fontWeight: 700 }}>Business Class Fare</span>
          </h2>
          <p style={{ fontSize: "clamp(13px,1.5vw,15px)", color: "#666", marginTop: 10, fontWeight: 300, lineHeight: 1.6, maxWidth: 680 }}>
            Vietnam Airlines operates a new direct service from Colombo to Ho Chi Minh City with onward connection to Tokyo Narita. This is an introductory Business Class fare — seats are limited and prices are expected to rise once the route is fully established.
          </p>
        </div>

        <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 24px rgba(0,0,0,0.09)", border: "1px solid #ebebeb" }}>
          <div style={{ height: 4, background: "linear-gradient(90deg, #0066B3 0%, #D4AF37 100%)" }} />
          <div style={{ padding: "clamp(20px,3vw,36px)", display: "flex", alignItems: "flex-start", gap: 28, flexWrap: "wrap" }}>
            {/* Logo */}
            <div style={{ width: 130, height: 60, background: "#f5f5f3", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: 10 }}>
              <img src="https://pics.avs.io/200/80/VN.png" alt="Vietnam Airlines"
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.display = "none";
                  const p = t.parentElement;
                  if (p) { p.innerText = "Vietnam Airlines"; p.style.fontSize = "11px"; p.style.fontWeight = "800"; p.style.color = "#0066B3"; p.style.textAlign = "center"; }
                }}
              />
            </div>

            {/* Details */}
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                <span style={{ fontSize: "clamp(17px,2vw,21px)", fontWeight: 800, color: "#1a1a1a" }}>Vietnam Airlines</span>
                <span style={{ background: "#dcfce7", color: "#15803d", fontSize: 11, fontWeight: 700, borderRadius: 6, padding: "3px 10px", letterSpacing: "0.06em" }}>NEW ROUTE</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px", fontSize: 13, color: "#555", marginBottom: 14 }}>
                <span>✈ Colombo (CMB) → Ho Chi Minh City (SGN) → Tokyo Narita (NRT)</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[
                  { icon: "🛫", text: "Via Ho Chi Minh City (SGN)" },
                  { icon: "⏱", text: "~11h total journey" },
                  { icon: "🛋", text: "Fully flat-bed Business Class" },
                  { icon: "📅", text: "From August 17, 2026" },
                  { icon: "🏛", text: "Terminal 2, Narita (NRT)" },
                ].map(b => (
                  <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 6, background: "#f5f5f3", borderRadius: 8, padding: "6px 12px", fontSize: 12, color: "#555" }}>
                    <span>{b.icon}</span><span>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price + CTA */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10, flexShrink: 0 }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 10, color: "#aaa", fontWeight: 700, letterSpacing: "0.12em" }}>BUSINESS CLASS · ONE WAY</div>
                <div style={{ fontSize: "clamp(28px,3.5vw,38px)", fontWeight: 900, color: "#0066B3", letterSpacing: "-1px", lineHeight: 1 }}>LKR 349,000</div>
                <div style={{ fontSize: 11, color: "#bbb", marginTop: 2 }}>Indicative · Subject to availability</div>
              </div>
              <a href={wa(WA_MSG)} target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 9, background: "#25d366", color: "#fff", borderRadius: 10, padding: "13px 22px", fontSize: 15, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                GET FARE
              </a>
            </div>
          </div>

          {/* Lounge bar */}
          <div style={{ borderTop: "1px solid #f0f0f0", padding: "12px 24px", background: "#fafafa", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontSize: 15 }}>🛋</span>
            <span style={{ fontSize: 12, color: "#666" }}>
              <strong style={{ color: "#1a1a1a" }}>Lounge access included:</strong> Serendib Lounge at CMB · Vietnam Airlines Lotus Lounge at SGN · Partner lounge at NRT T2
            </span>
          </div>
        </div>

        {/* intro notice */}
        <div style={{ marginTop: 16, background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 12, padding: "14px 20px", display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span style={{ fontSize: 18, flexShrink: 0 }}>⚡</span>
          <div style={{ fontSize: 13, color: "#92400e", lineHeight: 1.6 }}>
            <strong>Introductory Launch Fare.</strong> Vietnam Airlines has launched this new CMB–SGN–NRT service from August 17, 2026. Business Class seats at LKR 349,000 are introductory and strictly limited. Book early through CLICKMYFARE to secure this price before the airline adjusts fares once the route matures.
          </div>
        </div>
      </div>

      {/* ── LOUNGES ── */}
      <div style={{ background: "#fff", borderTop: "1px solid #ebebeb", borderBottom: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(36px,5vw,56px) clamp(16px,4vw,48px)" }}>
          <div style={{ fontSize: "clamp(10px,1.2vw,12px)", letterSpacing: "0.16em", color: "#aaa", fontWeight: 600, marginBottom: 8 }}>YOUR JOURNEY · LOUNGE BY LOUNGE</div>
          <h2 style={{ fontSize: "clamp(20px,3vw,34px)", fontWeight: 300, margin: "0 0 28px", letterSpacing: "-0.5px" }}>
            Business Class — <span style={{ fontWeight: 700 }}>Lounge Access</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              {
                airport: "CMB · Departure",
                city: "Colombo, Sri Lanka",
                name: "Serendib Lounge — Bandaranaike International",
                detail: "Depart in comfort from BIA's premier Business Class lounge. Extensive hot and cold Sri Lankan and international buffet, premium bar, shower suites, complimentary Wi-Fi and business facilities.",
                icon: "🌿",
                accent: "#1a1a1a",
              },
              {
                airport: "SGN · Layover",
                city: "Ho Chi Minh City, Vietnam",
                name: "Vietnam Airlines Lotus Lounge — Tan Son Nhat",
                detail: "Experience Vietnam Airlines' signature Lotus Lounge during your Ho Chi Minh City layover. Authentic Vietnamese cuisine, à la carte dining, spa and massage services, nap rooms and stunning views of this vibrant city's airport.",
                icon: "🪷",
                accent: "#0066B3",
              },
              {
                airport: "NRT · Arrival",
                city: "Tokyo, Japan",
                name: "Partner Business Lounge — Narita Terminal 2",
                detail: "Vietnam Airlines Business Class passengers access a partner lounge at Narita Terminal 2. Hot buffet, premium beverages, shower rooms and quiet rest areas before onward travel or exploring Tokyo.",
                icon: "🗼",
                accent: "#c53030",
              },
            ].map(l => (
              <div key={l.airport} style={{ background: "#f8f8f6", borderRadius: 14, padding: "22px 22px", border: "1px solid #ebebeb", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: l.accent }} />
                <div style={{ fontSize: 28, marginBottom: 10 }}>{l.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.1em", marginBottom: 4 }}>{l.airport}</div>
                <div style={{ fontSize: "clamp(13px,1.5vw,15px)", fontWeight: 700, marginBottom: 2 }}>{l.name}</div>
                <div style={{ fontSize: 11, color: "#aaa", marginBottom: 12 }}>📍 {l.city}</div>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, margin: 0, fontWeight: 300 }}>{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BEST MONTHS ── */}
      <div style={{ background: "#f5f5f3" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(36px,5vw,56px) clamp(16px,4vw,48px)" }}>
          <div style={{ fontSize: "clamp(10px,1.2vw,12px)", letterSpacing: "0.16em", color: "#aaa", fontWeight: 600, marginBottom: 8 }}>TRAVEL PLANNING</div>
          <h2 style={{ fontSize: "clamp(20px,3vw,34px)", fontWeight: 300, margin: "0 0 28px", letterSpacing: "-0.5px" }}>
            Best Time to Fly — <span style={{ fontWeight: 700 }}>Tokyo, Japan</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10 }}>
            {MONTHS.map(m => (
              <div key={m.m} style={{ background: m.m === "Aug" ? "#eff6ff" : "#fff", borderRadius: 12, padding: "14px 10px", textAlign: "center", border: `2px solid ${m.m === "Aug" ? "#0066B3" : m.rating >= 4 ? ratingColor(m.rating) : "#ebebeb"}` }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a" }}>{m.m}</div>
                <div style={{ fontSize: 11, color: "#888", margin: "3px 0" }}>{m.temp}</div>
                <div style={{ display: "flex", justifyContent: "center", gap: 2, margin: "6px 0" }}>
                  {[1,2,3,4,5].map(i => (
                    <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i <= m.rating ? ratingColor(m.rating) : "#e0e0e0" }} />
                  ))}
                </div>
                <div style={{ fontSize: 9, color: m.m === "Aug" ? "#0066B3" : "#999", lineHeight: 1.4, fontWeight: m.m === "Aug" ? 700 : 400 }}>{m.note}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 10, background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 10, padding: "12px 18px" }}>
            <span style={{ fontSize: 20 }}>✈</span>
            <span style={{ fontSize: 13, color: "#1e40af" }}><strong>August travel:</strong> Vietnam Airlines' new CMB–NRT route launches August 17, 2026. August is summer in Tokyo — expect warm temperatures (28–30°C), the Obon festival period, spectacular fireworks every weekend and a lively city atmosphere. Book now to secure your seat on the inaugural season.</span>
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
              { icon: "🎫", title: "IATA Accredited Agent", desc: "We hold IATA accreditation (07303284) giving us direct access to airline inventory — including new routes before they're widely available." },
              { icon: "⚡", title: "First to Offer VN CMB–NRT", desc: "As Vietnam Airlines launches this new route, CLICKMYFARE is one of the first IATA agents in Sri Lanka to secure Business Class at introductory fares." },
              { icon: "📱", title: "Instant WhatsApp Booking", desc: "WhatsApp us and get a confirmed seat within minutes. No forms, no queues, no waiting." },
              { icon: "💰", title: "Agent Fares, Not Retail", desc: "We access unpublished and consolidator Business Class fares — often significantly cheaper than the airline's own website." },
            ].map(w => (
              <div key={w.title} style={{ background: "#242424", borderRadius: 14, padding: "22px 20px" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{w.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{w.title}</div>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, margin: 0, fontWeight: 300 }}>{w.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, textAlign: "center" }}>
            <a href={wa(WA_MSG)} target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#25d366", color: "#fff", borderRadius: 12, padding: "16px 36px", fontSize: "clamp(14px,1.6vw,17px)", fontWeight: 700, textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp — Secure My Vietnam Airlines Seat
            </a>
          </div>
          {/* Cross link */}
          <div style={{ marginTop: 20, textAlign: "center" }}>
            <a href="/business-class-colombo-narita" style={{ fontSize: 13, color: "#555", textDecoration: "none" }}>
              ← Compare all Business Class options CMB→NRT (Malaysia Airlines · Cathay Pacific · SriLankan)
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
          <a href="/terms" style={{ color: "#555", textDecoration: "none" }}>Terms &amp; Conditions</a>
        </div>
        <div style={{ color: "#444" }}>© 2025 CLICKMYFARE · Indicative fares · Subject to availability</div>
      </footer>
    </div>
  );
}
