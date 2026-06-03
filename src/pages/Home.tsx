import { useState, useRef } from "react";

const WA_NUMBER = "94767282513";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;
const MARKER = "535931";

function whatsapp(msg: string) {
  return `${WA_LINK}?text=${encodeURIComponent(msg)}`;
}
function hotelLink(slug: string) {
  return `https://www.hotellook.com/search?destination=${slug}&adults=2&marker=${MARKER}`;
}
function toMMDD(date: string) {
  if (!date) return "";
  const [, mm, dd] = date.split("-");
  return mm + dd;
}
function aviasalesUrl(origin: string, dest: string, departDate = "", returnDate = "", pax = 1) {
  const dep = toMMDD(departDate);
  const ret = toMMDD(returnDate);
  const path = dep
    ? `${origin}${dest}${dep}${ret}${pax}`
    : `${origin}${dest}${pax}`;
  return `https://www.aviasales.com/search/${path}?marker=${MARKER}`;
}

const AIRPORTS = [
  { code: "DXB", city: "Dubai", country: "UAE" },
  { code: "LHR", city: "London Heathrow", country: "UK" },
  { code: "LGW", city: "London Gatwick", country: "UK" },
  { code: "SIN", city: "Singapore", country: "Singapore" },
  { code: "NRT", city: "Tokyo Narita", country: "Japan" },
  { code: "HND", city: "Tokyo Haneda", country: "Japan" },
  { code: "SYD", city: "Sydney", country: "Australia" },
  { code: "MEL", city: "Melbourne", country: "Australia" },
  { code: "YYZ", city: "Toronto", country: "Canada" },
  { code: "YVR", city: "Vancouver", country: "Canada" },
  { code: "BKK", city: "Bangkok Suvarnabhumi", country: "Thailand" },
  { code: "DMK", city: "Bangkok Don Mueang", country: "Thailand" },
  { code: "CDG", city: "Paris Charles de Gaulle", country: "France" },
  { code: "ORY", city: "Paris Orly", country: "France" },
  { code: "FRA", city: "Frankfurt", country: "Germany" },
  { code: "MUC", city: "Munich", country: "Germany" },
  { code: "MLE", city: "Male", country: "Maldives" },
  { code: "JFK", city: "New York JFK", country: "USA" },
  { code: "EWR", city: "New York Newark", country: "USA" },
  { code: "LAX", city: "Los Angeles", country: "USA" },
  { code: "AUH", city: "Abu Dhabi", country: "UAE" },
  { code: "DOH", city: "Doha", country: "Qatar" },
  { code: "KWI", city: "Kuwait City", country: "Kuwait" },
  { code: "BAH", city: "Bahrain", country: "Bahrain" },
  { code: "RUH", city: "Riyadh", country: "Saudi Arabia" },
  { code: "JED", city: "Jeddah", country: "Saudi Arabia" },
  { code: "KUL", city: "Kuala Lumpur", country: "Malaysia" },
  { code: "CGK", city: "Jakarta", country: "Indonesia" },
  { code: "DPS", city: "Bali Denpasar", country: "Indonesia" },
  { code: "HKG", city: "Hong Kong", country: "Hong Kong" },
  { code: "PEK", city: "Beijing", country: "China" },
  { code: "PVG", city: "Shanghai Pudong", country: "China" },
  { code: "ICN", city: "Seoul Incheon", country: "South Korea" },
  { code: "BOM", city: "Mumbai", country: "India" },
  { code: "DEL", city: "New Delhi", country: "India" },
  { code: "MAA", city: "Chennai", country: "India" },
  { code: "BLR", city: "Bengaluru", country: "India" },
  { code: "TRV", city: "Thiruvananthapuram", country: "India" },
  { code: "COK", city: "Kochi", country: "India" },
  { code: "AMD", city: "Ahmedabad", country: "India" },
  { code: "IST", city: "Istanbul", country: "Turkey" },
  { code: "AMS", city: "Amsterdam", country: "Netherlands" },
  { code: "ZRH", city: "Zurich", country: "Switzerland" },
  { code: "GVA", city: "Geneva", country: "Switzerland" },
  { code: "MAD", city: "Madrid", country: "Spain" },
  { code: "BCN", city: "Barcelona", country: "Spain" },
  { code: "FCO", city: "Rome", country: "Italy" },
  { code: "MXP", city: "Milan Malpensa", country: "Italy" },
  { code: "VIE", city: "Vienna", country: "Austria" },
  { code: "BRU", city: "Brussels", country: "Belgium" },
  { code: "CPH", city: "Copenhagen", country: "Denmark" },
  { code: "OSL", city: "Oslo", country: "Norway" },
  { code: "ARN", city: "Stockholm", country: "Sweden" },
  { code: "HEL", city: "Helsinki", country: "Finland" },
  { code: "SVO", city: "Moscow Sheremetyevo", country: "Russia" },
  { code: "MEX", city: "Mexico City", country: "Mexico" },
  { code: "GRU", city: "São Paulo", country: "Brazil" },
  { code: "JNB", city: "Johannesburg", country: "South Africa" },
  { code: "NBO", city: "Nairobi", country: "Kenya" },
  { code: "DAR", city: "Dar es Salaam", country: "Tanzania" },
  { code: "CAI", city: "Cairo", country: "Egypt" },
  { code: "ADD", city: "Addis Ababa", country: "Ethiopia" },
  { code: "MNL", city: "Manila", country: "Philippines" },
  { code: "SGN", city: "Ho Chi Minh City", country: "Vietnam" },
  { code: "HAN", city: "Hanoi", country: "Vietnam" },
  { code: "PNH", city: "Phnom Penh", country: "Cambodia" },
  { code: "RGN", city: "Yangon", country: "Myanmar" },
  { code: "DAC", city: "Dhaka", country: "Bangladesh" },
  { code: "KTM", city: "Kathmandu", country: "Nepal" },
  { code: "CMB", city: "Colombo", country: "Sri Lanka" },
  { code: "AKL", city: "Auckland", country: "New Zealand" },
  { code: "PER", city: "Perth", country: "Australia" },
  { code: "BNE", city: "Brisbane", country: "Australia" },
  { code: "ORD", city: "Chicago O'Hare", country: "USA" },
  { code: "SFO", city: "San Francisco", country: "USA" },
  { code: "MIA", city: "Miami", country: "USA" },
  { code: "IAD", city: "Washington DC Dulles", country: "USA" },
  { code: "YUL", city: "Montreal", country: "Canada" },
  { code: "LCA", city: "Larnaca", country: "Cyprus" },
  { code: "OTP", city: "Bucharest", country: "Romania" },
  { code: "WAW", city: "Warsaw", country: "Poland" },
  { code: "PRG", city: "Prague", country: "Czech Republic" },
  { code: "BUD", city: "Budapest", country: "Hungary" },
  { code: "ATH", city: "Athens", country: "Greece" },
  { code: "MED", city: "Madinah", country: "Saudi Arabia" },
];

function filterAirports(q: string) {
  if (q.length < 2) return [];
  const s = q.toLowerCase();
  return AIRPORTS.filter(a =>
    a.code.toLowerCase().startsWith(s) ||
    a.city.toLowerCase().includes(s) ||
    a.country.toLowerCase().startsWith(s)
  ).slice(0, 8);
}

const ROUTES = [
  { dest: "Dubai",       code: "DXB", economy: "LKR 48,200",  premium: "LKR 89,500",  business: "LKR 198,000", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=70" },
  { dest: "London",      code: "LHR", economy: "LKR 123,500", premium: "LKR 198,000", business: "LKR 485,000", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=70" },
  { dest: "Singapore",   code: "SIN", economy: "LKR 61,800",  premium: "LKR 112,000", business: "LKR 245,000", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=70" },
  { dest: "Tokyo",       code: "NRT", economy: "LKR 152,454", premium: "LKR 248,000", business: "LKR 520,000", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=70" },
  { dest: "Sydney",      code: "SYD", economy: "LKR 198,000", premium: "LKR 320,000", business: "LKR 680,000", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=70" },
  { dest: "Toronto",     code: "YYZ", economy: "LKR 210,000", premium: "LKR 345,000", business: "LKR 720,000", img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=70" },
  { dest: "Bangkok",     code: "BKK", economy: "LKR 42,500",  premium: "LKR 78,000",  business: "LKR 185,000", img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=70" },
  { dest: "Paris",       code: "CDG", economy: "LKR 118,000", premium: "LKR 192,000", business: "LKR 465,000", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=70" },
  { dest: "Melbourne",   code: "MEL", economy: "LKR 195,000", premium: "LKR 315,000", business: "LKR 670,000", img: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600&q=70" },
  { dest: "New York",    code: "JFK", economy: "LKR 225,000", premium: "LKR 365,000", business: "LKR 780,000", img: "https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?w=600&q=70" },
  { dest: "Frankfurt",   code: "FRA", economy: "LKR 112,000", premium: "LKR 188,000", business: "LKR 450,000", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=70" },
  { dest: "Male",        code: "MLE", economy: "LKR 28,500",  premium: "LKR 54,000",  business: "LKR 125,000", img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=70" },
];

const HOTELS = [
  { city: "Dubai",        country: "UAE",         slug: "Dubai",        from: "LKR 14,200/night", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=70" },
  { city: "Singapore",    country: "Singapore",   slug: "Singapore",    from: "LKR 18,500/night", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=70" },
  { city: "London",       country: "UK",          slug: "London",       from: "LKR 32,000/night", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=70" },
  { city: "Bangkok",      country: "Thailand",    slug: "Bangkok",      from: "LKR 8,400/night",  img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=600&q=70" },
  { city: "Kuala Lumpur", country: "Malaysia",    slug: "Kuala+Lumpur", from: "LKR 9,800/night",  img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=70" },
  { city: "Male",         country: "Maldives",    slug: "Male",         from: "LKR 52,000/night", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=70" },
  { city: "Tokyo",        country: "Japan",       slug: "Tokyo",        from: "LKR 28,500/night", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=70" },
  { city: "Bali",         country: "Indonesia",   slug: "Bali",         from: "LKR 11,200/night", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=70" },
  { city: "Paris",        country: "France",      slug: "Paris",        from: "LKR 38,000/night", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=70" },
  { city: "Sydney",       country: "Australia",   slug: "Sydney",       from: "LKR 34,500/night", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=70" },
  { city: "New York",     country: "USA",         slug: "New+York",     from: "LKR 48,000/night", img: "https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?w=600&q=70" },
  { city: "Istanbul",     country: "Turkey",      slug: "Istanbul",     from: "LKR 12,800/night", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=70" },
];

type CabinTab = "economy" | "premium" | "business";

const CABIN_INFO: Record<CabinTab, { label: string; desc: string; color: string }> = {
  economy:  { label: "Economy",         desc: "Best value fares from Colombo worldwide",             color: "#1a1a1a" },
  premium:  { label: "Premium Economy", desc: "More space & comfort at a fraction of business class", color: "#7c3aed" },
  business: { label: "Business Class",  desc: "Lie-flat beds, lounges & finest dining in the sky",   color: "#b45309" },
};

const TRUST_TEXT = [
  "💳 Visa Accepted",
  "💳 Mastercard Accepted",
  "💳 Amex Accepted",
  "🌍 33 Years of International Travel Expertise",
  "📍 Colombo, Sri Lanka",
  "☎ WhatsApp +94 76 728 2513",
];
const TRUST_ITEMS = [...TRUST_TEXT, ...TRUST_TEXT];

function IATABadge() {
  return (
    <svg viewBox="0 0 124 34" height="20" style={{ flexShrink: 0, display: "inline-block", verticalAlign: "middle" }}>
      <rect x="1" y="1" width="122" height="32" rx="4" fill="none" stroke="white" strokeWidth="1.5"/>
      <text x="62" y="14.5" textAnchor="middle" fill="white" fontSize="12" fontWeight="900" fontFamily="Inter,Arial,sans-serif" letterSpacing="3">IATA</text>
      <line x1="8" y1="18" x2="116" y2="18" stroke="white" strokeWidth="0.6" opacity="0.4"/>
      <text x="62" y="27" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="700" fontFamily="Inter,Arial,sans-serif" letterSpacing="1.8">ACCREDITED AGENT</text>
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<CabinTab>("economy");
  const [tripType, setTripType] = useState<"return" | "oneway">("return");
  const [to, setTo] = useState("");
  const [toSelected, setToSelected] = useState<{ code: string; city: string; country: string } | null>(null);
  const [showSug, setShowSug] = useState(false);
  const toRef = useRef<HTMLDivElement>(null);
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [hotelDest, setHotelDest] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [hotelGuests, setHotelGuests] = useState("2");
  const cabin = CABIN_INFO[activeTab];

  const today = new Date().toISOString().split("T")[0];

  function handleGetFare() {
    const destText = toSelected
      ? `${toSelected.city} (${toSelected.code})`
      : to || "my destination";
    const dateText = departDate ? `, departing ${departDate}` : "";
    const retText = tripType === "return" && returnDate ? `, returning ${returnDate}` : "";
    const msg = `Hi! I need a ${CABIN_INFO[activeTab].label} fare from Colombo (CMB) to ${destText}${dateText}${retText} (${tripType === "return" ? "Round-trip" : "One-way"}). Please confirm availability and price.`;
    window.open(whatsapp(msg), "_blank");
  }

  function handleHotelSearch() {
    const slug = hotelDest.trim() || "";
    let url = `https://www.hotellook.com/search?adults=${hotelGuests}&marker=${MARKER}`;
    if (slug) url += `&destination=${encodeURIComponent(slug)}`;
    if (checkIn) url += `&checkIn=${checkIn}`;
    if (checkOut) url += `&checkOut=${checkOut}`;
    window.open(url, "_blank");
  }

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f5f5f3", minHeight: "100vh", color: "#1a1a1a" }}>

      {/* ── SCROLLING TRUST BAR ── */}
      <div style={{ background: "#1a1a1a", color: "#ccc", fontSize: "clamp(10px,1.4vw,11px)", fontWeight: 500, letterSpacing: "0.06em", overflow: "hidden", height: 36, display: "flex", alignItems: "center" }}>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(28px,4vw,52px)", whiteSpace: "nowrap", animation: "marquee 44s linear infinite", flexShrink: 0 }}>
          {TRUST_ITEMS.map((item, i) => (
            <>
              {i % TRUST_TEXT.length === 0 && (
                <span key={`badge-${i}`} style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                  <IATABadge />
                </span>
              )}
              <span key={i} style={{ flexShrink: 0 }}>{item}</span>
            </>
          ))}
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(245,245,243,0.97)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "0 clamp(16px,4vw,48px)", height: "58px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
          <span style={{ fontSize: "clamp(17px,3vw,22px)", fontWeight: 800, letterSpacing: "-0.5px" }}>CLICKMYFARE</span>
          <span style={{ display: "inline-block", width: 9, height: 9, background: "#e63329", borderRadius: 2, marginLeft: 3, marginTop: 4, flexShrink: 0 }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px,2.5vw,32px)" }}>
          <a href="#hotels" style={{ fontSize: 13, color: "#555", fontWeight: 500, textDecoration: "none" }}>Hotels</a>
          <a href={WA_LINK} target="_blank" rel="noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 7, background: "#1a1a1a", color: "#fff", padding: "8px clamp(12px,2vw,18px)", borderRadius: 7, textDecoration: "none", fontSize: "clamp(12px,2vw,13px)", fontWeight: 600 }}>
            <WhatsAppIcon size={15} />
            <span>+94 76 728 2513</span>
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "clamp(56px,8vw,96px) clamp(16px,4vw,40px) clamp(40px,6vw,60px)" }}>
        <div style={{ fontSize: "clamp(9px,1.5vw,11px)", letterSpacing: "0.18em", color: "#888", fontWeight: 600, marginBottom: 18, display: "flex", alignItems: "center", gap: 8 }}>
          IATA ACCREDITED
          <span style={{ display: "inline-block", width: 5, height: 5, borderRadius: "50%", background: "#e63329" }} />
          SRI LANKA'S FARE EXPERTS SINCE 1992
        </div>
        <h1 style={{ fontSize: "clamp(32px,6vw,64px)", fontWeight: 300, lineHeight: 1.05, color: "#1a1a1a", marginBottom: 28, maxWidth: 720, letterSpacing: "-2px" }}>
          Find the lowest fare,<br /><span style={{ fontWeight: 900 }}>guaranteed.</span>
        </h1>
        <p style={{ fontSize: "clamp(14px,1.8vw,16px)", color: "#666", marginBottom: 36, maxWidth: 420, lineHeight: 1.65 }}>
          Economy · Premium Economy · Business Class<br />We search every airline. You call us. We beat the price.
        </p>

        {/* ── SEARCH BOX ── */}
        <div style={{ background: "#fff", borderRadius: 16, padding: 8, boxShadow: "0 2px 32px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04)", width: "100%", maxWidth: 860 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 10px 0", borderBottom: "1px solid #f0f0f0", flexWrap: "wrap", gap: 4 }}>
            <div style={{ display: "flex" }}>
              {(["return", "oneway"] as const).map(t => (
                <button key={t} onClick={() => setTripType(t)}
                  style={{ background: "none", border: "none", fontSize: 12, fontWeight: tripType === t ? 700 : 400, color: tripType === t ? "#1a1a1a" : "#aaa", padding: "6px 10px", cursor: "pointer", borderBottom: tripType === t ? "2px solid #1a1a1a" : "2px solid transparent", marginBottom: -1 }}>
                  {t === "return" ? "Round-trip" : "One-way"}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 4, padding: "4px 0" }}>
              {(Object.keys(CABIN_INFO) as CabinTab[]).map(c => (
                <button key={c} onClick={() => setActiveTab(c)}
                  style={{ fontSize: "clamp(10px,1.5vw,12px)", fontWeight: 600, padding: "4px 12px", borderRadius: 20, border: "1.5px solid", cursor: "pointer", transition: "all 0.15s",
                    background: activeTab === c ? CABIN_INFO[c].color : "transparent",
                    color: activeTab === c ? "#fff" : CABIN_INFO[c].color,
                    borderColor: CABIN_INFO[c].color }}>
                  {CABIN_INFO[c].label}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "stretch", padding: "8px 6px", gap: 0, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 140px", padding: "8px 14px", borderRight: "1px solid #f0f0f0", minWidth: 0 }}>
              <div style={{ fontSize: 10, color: "#aaa", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 3 }}>FROM</div>
              <div style={{ fontSize: "clamp(14px,2vw,17px)", fontWeight: 800 }}>Colombo</div>
              <div style={{ fontSize: 11, color: "#999" }}>CMB — Bandaranaike</div>
            </div>
            <div style={{ padding: "0 8px", display: "flex", alignItems: "center", color: "#bbb" }}>
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div ref={toRef} style={{ flex: "1 1 140px", padding: "8px 14px", borderRight: "1px solid #f0f0f0", minWidth: 0, position: "relative" }}>
              <div style={{ fontSize: 10, color: "#aaa", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 3 }}>TO</div>
              <input
                value={toSelected ? `${toSelected.city} (${toSelected.code})` : to}
                onChange={e => { setTo(e.target.value); setToSelected(null); setShowSug(true); }}
                onFocus={() => setShowSug(true)}
                onBlur={() => setTimeout(() => setShowSug(false), 150)}
                placeholder="Where to?"
                style={{ fontSize: "clamp(13px,1.8vw,16px)", fontWeight: toSelected ? 800 : 400, color: toSelected ? "#1a1a1a" : "#888", border: "none", outline: "none", background: "transparent", width: "100%", padding: 0 }}
              />
              <div style={{ fontSize: 11, color: "#ddd" }}>City or airport code</div>
              {/* Dropdown */}
              {showSug && filterAirports(toSelected ? "" : to).length > 0 && (
                <div style={{ position: "absolute", top: "100%", left: -1, right: -1, background: "#fff", border: "1px solid #e8e8e8", borderRadius: "0 0 12px 12px", boxShadow: "0 8px 32px rgba(0,0,0,0.13)", zIndex: 999, overflow: "hidden" }}>
                  {filterAirports(to).map(a => (
                    <div key={a.code}
                      onMouseDown={() => { setToSelected(a); setTo(""); setShowSug(false); }}
                      style={{ padding: "10px 16px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f5f5f5", transition: "background 0.1s" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#f8f8f8")}
                      onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
                    >
                      <div>
                        <span style={{ fontWeight: 700, fontSize: 14, color: "#1a1a1a" }}>{a.city}</span>
                        <span style={{ fontSize: 11, color: "#999", marginLeft: 6 }}>{a.country}</span>
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 800, background: "#1a1a1a", color: "#fff", borderRadius: 5, padding: "2px 8px", letterSpacing: 1 }}>{a.code}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div style={{ flex: "1 1 110px", padding: "8px 14px", borderRight: "1px solid #f0f0f0", minWidth: 0 }}>
              <div style={{ fontSize: 10, color: "#aaa", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 3 }}>DEPART</div>
              <input type="date" min={today} value={departDate} onChange={e => setDepartDate(e.target.value)}
                style={{ fontSize: "clamp(12px,1.8vw,15px)", fontWeight: departDate ? 700 : 400, color: departDate ? "#1a1a1a" : "#bbb", border: "none", outline: "none", background: "transparent", width: "100%", padding: 0, cursor: "pointer" }} />
            </div>
            {tripType === "return" && (
              <div style={{ flex: "1 1 110px", padding: "8px 14px", minWidth: 0 }}>
                <div style={{ fontSize: 10, color: "#aaa", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 3 }}>RETURN</div>
                <input type="date" min={departDate || today} value={returnDate} onChange={e => setReturnDate(e.target.value)}
                  style={{ fontSize: "clamp(12px,1.8vw,15px)", fontWeight: returnDate ? 700 : 400, color: returnDate ? "#1a1a1a" : "#bbb", border: "none", outline: "none", background: "transparent", width: "100%", padding: 0, cursor: "pointer" }} />
              </div>
            )}
            <button onClick={handleGetFare}
              style={{ background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 10, padding: "0 clamp(16px,2.5vw,28px)", fontSize: "clamp(12px,1.5vw,14px)", fontWeight: 700, cursor: "pointer", letterSpacing: "0.04em", flexShrink: 0, marginLeft: 6, minHeight: 58 }}>
              GET FARE
            </button>
          </div>
        </div>
        <p style={{ marginTop: 14, fontSize: 12, color: "#aaa", fontStyle: "italic" }}>{cabin.desc}</p>
      </div>

      {/* ── FLIGHT DESTINATION CARDS ── */}
      <div style={{ background: "#fff", padding: "clamp(40px,6vw,64px) clamp(16px,5vw,60px)" }}>
        <div style={{ fontSize: "clamp(9px,1.4vw,11px)", letterSpacing: "0.14em", color: "#aaa", fontWeight: 600, marginBottom: 10 }}>FROM COLOMBO (CMB) — INDICATIVE FARES</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
          <h2 style={{ fontSize: "clamp(22px,3.5vw,32px)", fontWeight: 900, letterSpacing: "-1px" }}>
            {activeTab === "economy" ? "Popular destinations" : activeTab === "premium" ? "Premium Economy" : "Business Class"}
          </h2>
          <a href={WA_LINK} target="_blank" rel="noreferrer"
            style={{ fontSize: 13, color: "#1a1a1a", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
            <WhatsAppIcon size={14} /> Get best price
          </a>
        </div>

        <style>{`
          .cmf-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
          @media (max-width: 1100px) { .cmf-grid { grid-template-columns: repeat(3, 1fr); } }
          @media (max-width: 720px)  { .cmf-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 480px)  { .cmf-grid { grid-template-columns: 1fr; } }
        `}</style>
        <div className="cmf-grid">
          {ROUTES.map(r => {
            const price = activeTab === "economy" ? r.economy : activeTab === "premium" ? r.premium : r.business;
            const msg = `Hi! I'm interested in a ${CABIN_INFO[activeTab].label} fare from Colombo (CMB) to ${r.dest} (${r.code}). Price shown: ${price}. Can you confirm availability?`;
            return (
              <a key={r.code} href={whatsapp(msg)} target="_blank" rel="noreferrer"
                style={{ borderRadius: 14, overflow: "hidden", cursor: "pointer", textDecoration: "none", color: "inherit", display: "block", position: "relative", transition: "transform 0.18s, box-shadow 0.18s", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(0,0,0,0.14)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)"; }}>
                <div style={{ height: 160, overflow: "hidden", position: "relative" }}>
                  <img src={r.img} alt={r.dest} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", bottom: 12, left: 14, color: "#fff" }}>
                    <div style={{ fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 900, letterSpacing: "-0.5px" }}>{r.dest}</div>
                    <div style={{ fontSize: 11, opacity: 0.85 }}>CMB → {r.code}</div>
                  </div>
                  {activeTab === "business" && <span style={{ position: "absolute", top: 10, right: 10, fontSize: 10, background: "#1a1a1a", color: "#fff", padding: "3px 9px", borderRadius: 20, fontWeight: 700 }}>Business</span>}
                  {activeTab === "premium" && <span style={{ position: "absolute", top: 10, right: 10, fontSize: 10, background: "#7c3aed", color: "#fff", padding: "3px 9px", borderRadius: 20, fontWeight: 700 }}>Premium</span>}
                </div>
                <div style={{ background: "#fff", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: 10, color: "#aaa", fontWeight: 600, letterSpacing: "0.08em" }}>FROM</div>
                    <div style={{ fontSize: "clamp(15px,2vw,17px)", fontWeight: 900 }}>{price}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#25d366", fontWeight: 700 }}>
                    <WhatsAppIcon size={13} /> Book
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* ── HOTELS ── */}
      <div id="hotels" style={{ background: "#f5f5f3", padding: "clamp(40px,6vw,64px) clamp(16px,5vw,60px)" }}>
        <div style={{ fontSize: "clamp(9px,1.4vw,11px)", letterSpacing: "0.14em", color: "#aaa", fontWeight: 600, marginBottom: 10 }}>BOOKING.COM · AGODA · EXPEDIA · HOTELS.COM — ALL IN ONE SEARCH</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
          <h2 style={{ fontSize: "clamp(22px,3.5vw,32px)", fontWeight: 900, letterSpacing: "-1px" }}>Hotels — bundle your stay</h2>
        </div>

        {/* Hotel Search Box */}
        <div style={{ background: "#fff", borderRadius: 14, padding: 8, boxShadow: "0 2px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)", marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "stretch", gap: 0, flexWrap: "wrap", padding: "4px 6px" }}>
            <div style={{ flex: "2 1 160px", padding: "8px 14px", borderRight: "1px solid #f0f0f0", minWidth: 0 }}>
              <div style={{ fontSize: 10, color: "#aaa", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 3 }}>DESTINATION</div>
              <input value={hotelDest} onChange={e => setHotelDest(e.target.value)} placeholder="City or hotel name"
                style={{ fontSize: "clamp(13px,1.8vw,16px)", fontWeight: hotelDest ? 700 : 400, color: hotelDest ? "#1a1a1a" : "#bbb", border: "none", outline: "none", background: "transparent", width: "100%", padding: 0 }} />
              <div style={{ fontSize: 11, color: "#ddd" }}>e.g. Dubai, Bangkok</div>
            </div>
            <div style={{ flex: "1 1 110px", padding: "8px 14px", borderRight: "1px solid #f0f0f0", minWidth: 0 }}>
              <div style={{ fontSize: 10, color: "#aaa", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 3 }}>CHECK-IN</div>
              <input type="date" min={today} value={checkIn} onChange={e => setCheckIn(e.target.value)}
                style={{ fontSize: "clamp(11px,1.5vw,14px)", fontWeight: checkIn ? 700 : 400, color: checkIn ? "#1a1a1a" : "#bbb", border: "none", outline: "none", background: "transparent", width: "100%", padding: 0, cursor: "pointer" }} />
            </div>
            <div style={{ flex: "1 1 110px", padding: "8px 14px", borderRight: "1px solid #f0f0f0", minWidth: 0 }}>
              <div style={{ fontSize: 10, color: "#aaa", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 3 }}>CHECK-OUT</div>
              <input type="date" min={checkIn || today} value={checkOut} onChange={e => setCheckOut(e.target.value)}
                style={{ fontSize: "clamp(11px,1.5vw,14px)", fontWeight: checkOut ? 700 : 400, color: checkOut ? "#1a1a1a" : "#bbb", border: "none", outline: "none", background: "transparent", width: "100%", padding: 0, cursor: "pointer" }} />
            </div>
            <div style={{ flex: "0 1 90px", padding: "8px 14px", borderRight: "1px solid #f0f0f0", minWidth: 0 }}>
              <div style={{ fontSize: 10, color: "#aaa", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 3 }}>GUESTS</div>
              <select value={hotelGuests} onChange={e => setHotelGuests(e.target.value)}
                style={{ fontSize: "clamp(13px,1.8vw,15px)", fontWeight: 700, border: "none", outline: "none", background: "transparent", padding: 0, cursor: "pointer", width: "100%" }}>
                {["1","2","3","4"].map(n => <option key={n} value={n}>{n} {n === "1" ? "Guest" : "Guests"}</option>)}
              </select>
            </div>
            <button onClick={handleHotelSearch}
              style={{ background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 10, padding: "0 clamp(14px,2vw,24px)", fontSize: "clamp(12px,1.5vw,14px)", fontWeight: 700, cursor: "pointer", letterSpacing: "0.04em", flexShrink: 0, marginLeft: 4, minHeight: 58 }}>
              SEARCH HOTELS
            </button>
          </div>
        </div>

        <div className="cmf-grid">
          {HOTELS.map(h => (
            <a key={h.city} href={hotelLink(h.slug)} target="_blank" rel="noreferrer"
              style={{ borderRadius: 14, overflow: "hidden", cursor: "pointer", textDecoration: "none", color: "inherit", display: "block", position: "relative", transition: "transform 0.18s, box-shadow 0.18s", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(0,0,0,0.14)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)"; }}>
              <div style={{ height: 160, overflow: "hidden", position: "relative" }}>
                <img src={h.img} alt={h.city} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", bottom: 12, left: 14, color: "#fff" }}>
                  <div style={{ fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 900, letterSpacing: "-0.5px" }}>{h.city}</div>
                  <div style={{ fontSize: 11, opacity: 0.85 }}>{h.country}</div>
                </div>
              </div>
              <div style={{ background: "#fff", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 10, color: "#aaa", fontWeight: 600, letterSpacing: "0.08em" }}>FROM</div>
                  <div style={{ fontSize: "clamp(15px,2vw,17px)", fontWeight: 900 }}>{h.from}</div>
                </div>
                <div style={{ fontSize: 11, color: "#3b82f6", fontWeight: 700 }}>Browse →</div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", fontSize: 11, color: "#bbb", marginTop: 20 }}>
          Prices are indicative. Compare across Booking.com, Agoda, Expedia &amp; more via Hotellook — one search.
        </div>
      </div>

      {/* ── WHY CLICKMYFARE ── */}
      <div style={{ background: "#fff", padding: "clamp(40px,6vw,64px) clamp(16px,5vw,60px)" }}>
        <h2 style={{ fontSize: "clamp(22px,3.5vw,32px)", fontWeight: 900, letterSpacing: "-1px", marginBottom: 32, textAlign: "center" }}>Why CLICKMYFARE?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto" }}>
          {[
            { title: "33 Years of Expertise", body: "Global Knowledge Travel Services — IATA accredited since 1992. We know every fare trick in the book." },
            { title: "Economy to Business", body: "One place for all cabin classes. Economy, Premium Economy and Business Class from Colombo to anywhere." },
            { title: "Human Experts", body: "No robots. Real travel experts who know your route, your airline and can negotiate the best price." },
            { title: "Best Price Promise", body: "Found it cheaper elsewhere? WhatsApp us — we'll beat it or match it. That's our commitment." },
          ].map(w => (
            <div key={w.title} style={{ background: "#f5f5f3", borderRadius: 12, padding: "22px 20px", border: "1px solid #ebebeb" }}>
              <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>{w.title}</div>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.65 }}>{w.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHATSAPP CTA ── */}
      <div style={{ background: "#1a1a1a", color: "#fff", padding: "clamp(40px,6vw,64px) clamp(16px,5vw,60px)", textAlign: "center" }}>
        <div style={{ fontSize: "clamp(9px,1.4vw,11px)", letterSpacing: "0.14em", color: "#888", fontWeight: 600, marginBottom: 14 }}>AVAILABLE MON–SAT 9AM–6PM · COLOMBO TIME</div>
        <h2 style={{ fontSize: "clamp(22px,4vw,40px)", fontWeight: 300, marginBottom: 8, letterSpacing: "-1.5px" }}>Ready to fly? <span style={{ fontWeight: 900 }}>Talk to us.</span></h2>
        <p style={{ fontSize: 14, color: "#777", marginBottom: 28 }}>Share your route and travel dates — we'll find the best fare in minutes.</p>
        <a href={WA_LINK} target="_blank" rel="noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#25d366", color: "#fff", padding: "15px 36px", borderRadius: 10, textDecoration: "none", fontSize: "clamp(14px,2vw,16px)", fontWeight: 700 }}>
          <WhatsAppIcon size={20} /> WhatsApp +94 76 728 2513
        </a>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ background: "#111", color: "#fff", padding: "40px clamp(16px,5vw,60px) 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32, marginBottom: 32 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 10 }}>
              <span style={{ fontSize: 18, fontWeight: 900, letterSpacing: "-0.5px" }}>CLICKMYFARE</span>
              <span style={{ display: "inline-block", width: 9, height: 9, background: "#e63329", borderRadius: 2, marginLeft: 3, marginTop: 3 }} />
            </div>
            <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, marginBottom: 12 }}>
              An OTA site of<br />
              <strong style={{ color: "#999" }}>Global Knowledge Travel Services</strong><br />
              33 Years of Experience in International Travel
            </p>
            <p style={{ fontSize: 11, color: "#555" }}>IATA Accredited · Agent Code: 07303284</p>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#555", marginBottom: 14 }}>QUICK LINKS</div>
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Refund Policy", href: "/refund-policy" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Search Hotels", href: `https://www.hotellook.com/?marker=${MARKER}` },
            ].map(l => (
              <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                style={{ display: "block", fontSize: 13, color: "#666", textDecoration: "none", marginBottom: 9 }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#666")}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#555", marginBottom: 14 }}>CONTACT</div>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>
              WhatsApp: +94 76 728 2513<br />
              Colombo, Sri Lanka<br />
              Mon–Sat 9am–6pm
            </p>
          </div>

          {/* We Accept */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#555", marginBottom: 14 }}>WE ACCEPT</div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              {/* Visa */}
              <svg viewBox="0 0 72 24" width="52" height="17" aria-label="Visa">
                <text x="1" y="20" fill="white" fontSize="21" fontWeight="900" fontFamily="Arial,sans-serif" fontStyle="italic" letterSpacing="-0.5">VISA</text>
              </svg>
              {/* Mastercard */}
              <svg viewBox="0 0 46 30" width="40" height="26" aria-label="Mastercard">
                <circle cx="16" cy="15" r="14" fill="white" opacity="0.9"/>
                <circle cx="30" cy="15" r="14" fill="white" opacity="0.5"/>
                <text x="23" y="19" textAnchor="middle" fill="#111" fontSize="6" fontWeight="800" fontFamily="Arial,sans-serif">MC</text>
              </svg>
              {/* Amex */}
              <svg viewBox="0 0 68 28" width="52" height="20" aria-label="American Express">
                <rect x="1" y="1" width="66" height="26" rx="4" fill="none" stroke="white" strokeWidth="1.2"/>
                <text x="34" y="12" textAnchor="middle" fill="white" fontSize="7" fontWeight="800" fontFamily="Arial,sans-serif" letterSpacing="1">AMERICAN</text>
                <text x="34" y="22" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="900" fontFamily="Arial,sans-serif" letterSpacing="2">EXPRESS</text>
              </svg>
              {/* Bank Transfer */}
              <div style={{ color: "#888", fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", borderLeft: "1px solid #333", paddingLeft: 10 }}>BANK<br/>TRANSFER</div>
            </div>
            <p style={{ fontSize: 11, color: "#555", marginTop: 10, lineHeight: 1.6 }}>
              Secure payments processed by<br />your trusted travel experts.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #222", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <div style={{ fontSize: 11, color: "#444" }}>© 2025 CLICKMYFARE · Global Knowledge Travel Services · All rights reserved.</div>
          <div style={{ fontSize: 11, color: "#444" }}>Fares subject to availability and change. Terms apply.</div>
        </div>
      </div>

    </div>
  );
}
