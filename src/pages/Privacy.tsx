export default function Privacy() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f5f5f3", minHeight: "100vh", color: "#1a1a1a" }}>
      <nav style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "0 clamp(16px,5vw,60px)", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ display: "flex", alignItems: "flex-start", gap: 0, textDecoration: "none", color: "inherit" }}>
          <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.5px" }}>CLICKMYFARE</span>
          <span style={{ display: "inline-block", width: 9, height: 9, background: "#e63329", borderRadius: 2, marginLeft: 3, marginTop: 4 }} />
        </a>
      </nav>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "clamp(32px,6vw,64px) clamp(16px,5vw,40px)" }}>
        <h1 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, marginBottom: 8, letterSpacing: "-0.5px" }}>Privacy Policy</h1>
        <p style={{ fontSize: 13, color: "#888", marginBottom: 36 }}>Last updated: June 2025</p>

        <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444", marginBottom: 28 }}>
          CLICKMYFARE is operated by <strong>Global Knowledge Travel Services</strong>, an IATA accredited travel agency in Sri Lanka. We are committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights.
        </p>

        {[
          {
            title: "1. Information We Collect",
            body: `We collect information you provide when you contact us via WhatsApp or any enquiry form, including your name, contact number, travel dates and preferences. We do not collect payment card details — all bookings are handled through our secure ticketing process.`
          },
          {
            title: "2. How We Use Your Information",
            body: `Your information is used solely to assist with flight enquiries, send fare quotes, process bookings, and communicate with you about your travel. We do not sell or share your personal data with third parties except where required to complete your booking (e.g., airlines, GDS systems).`
          },
          {
            title: "3. WhatsApp Communication",
            body: `When you contact us on WhatsApp (+94 76 728 2513), your messages are processed via WhatsApp's platform. Please review WhatsApp's own privacy policy at whatsapp.com/legal/privacy-policy. We store conversation records for booking reference purposes only.`
          },
          {
            title: "4. Travelpayouts Affiliate Links",
            body: `This website uses Travelpayouts affiliate links and tracking (Marker ID 535931). When you click these links, Travelpayouts may use cookies to track referrals. This does not affect the price you pay. Please review Travelpayouts' privacy policy at travelpayouts.com.`
          },
          {
            title: "5. Cookies",
            body: `We use minimal cookies for analytics and to improve site performance. Affiliate tracking uses cookies as described above. You may disable cookies in your browser settings, though this may affect some site functionality.`
          },
          {
            title: "6. Data Retention",
            body: `We retain booking records for up to 7 years as required by Sri Lankan commercial law. Enquiry records not resulting in a booking are deleted after 12 months.`
          },
          {
            title: "7. Your Rights",
            body: `You may request access to, correction of, or deletion of your personal data at any time by contacting us on WhatsApp or by email. We will respond within 30 days.`
          },
          {
            title: "8. Contact",
            body: `For privacy-related queries: WhatsApp +94 76 728 2513 | Global Knowledge Travel Services, Colombo, Sri Lanka.`
          },
        ].map(s => (
          <div key={s.title} style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{s.title}</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "#555" }}>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
