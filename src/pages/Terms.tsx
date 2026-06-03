export default function Terms() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f5f5f3", minHeight: "100vh", color: "#1a1a1a" }}>
      <nav style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "0 clamp(16px,5vw,60px)", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ display: "flex", alignItems: "flex-start", gap: 0, textDecoration: "none", color: "inherit" }}>
          <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.5px" }}>CLICKMYFARE</span>
          <span style={{ display: "inline-block", width: 9, height: 9, background: "#e63329", borderRadius: 2, marginLeft: 3, marginTop: 4 }} />
        </a>
      </nav>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "clamp(32px,6vw,64px) clamp(16px,5vw,40px)" }}>
        <h1 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, marginBottom: 8, letterSpacing: "-0.5px" }}>Terms & Conditions</h1>
        <p style={{ fontSize: 13, color: "#888", marginBottom: 36 }}>Last updated: June 2025</p>

        <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444", marginBottom: 28 }}>
          By using CLICKMYFARE.com ("the Site"), you agree to the following terms. This Site is operated by <strong>Global Knowledge Travel Services</strong>, IATA accredited, Colombo, Sri Lanka.
        </p>

        {[
          {
            title: "1. Fare Accuracy",
            body: `All fares displayed on this Site are indicative and subject to availability at the time of booking. Prices shown are based on published and negotiated fares in LKR (Sri Lankan Rupees) and may change without notice. A confirmed fare is only guaranteed once a booking is processed and ticketed.`
          },
          {
            title: "2. Booking Process",
            body: `CLICKMYFARE operates as an enquiry and booking assistance service. Bookings are processed by Global Knowledge Travel Services staff upon customer request via WhatsApp. You will receive a written confirmation with full fare details before any payment is required.`
          },
          {
            title: "3. Airline & GDS Terms",
            body: `All flights are subject to the terms and conditions of the operating airline. Fare rules (including baggage allowance, change fees, and cancellation penalties) vary by airline and fare class and will be communicated to you at time of booking.`
          },
          {
            title: "4. Payments",
            body: `Payment terms will be communicated at the time of booking. Payments must be received within the time stipulated on your booking confirmation. Global Knowledge Travel Services accepts bank transfer and approved online payment methods.`
          },
          {
            title: "5. Cancellations & Changes",
            body: `Cancellation and change policies are dictated by the fare rules of the ticket purchased. Many promotional fares are non-refundable and non-changeable. Please confirm the fare rules with our staff before purchasing. Our service fee is non-refundable once a ticket is issued.`
          },
          {
            title: "6. Affiliate Links",
            body: `This Site contains Travelpayouts affiliate links (Marker ID 535931). These links may direct you to third-party travel booking platforms. We earn a commission when a booking is made through these links at no extra cost to you.`
          },
          {
            title: "7. Limitation of Liability",
            body: `Global Knowledge Travel Services acts as an agent for airlines and other travel suppliers. We are not liable for schedule changes, cancellations, delays, or other disruptions caused by airlines or third parties. Our liability is limited to the service fees charged by us.`
          },
          {
            title: "8. Governing Law",
            body: `These terms are governed by the laws of Sri Lanka. Any disputes will be subject to the jurisdiction of the courts of Sri Lanka.`
          },
          {
            title: "9. Contact",
            body: `Questions about these terms: WhatsApp +94 76 728 2513 | Global Knowledge Travel Services, Colombo, Sri Lanka.`
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
