const WA_LINK = "https://wa.me/94767282513";

export default function Refund() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f5f5f3", minHeight: "100vh", color: "#1a1a1a" }}>
      <nav style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "0 clamp(16px,5vw,60px)", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ display: "flex", alignItems: "flex-start", gap: 0, textDecoration: "none", color: "inherit" }}>
          <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.5px" }}>CLICKMYFARE</span>
          <span style={{ display: "inline-block", width: 9, height: 9, background: "#e63329", borderRadius: 2, marginLeft: 3, marginTop: 4 }} />
        </a>
      </nav>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "clamp(32px,6vw,64px) clamp(16px,5vw,40px)" }}>
        <h1 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, marginBottom: 8, letterSpacing: "-0.5px" }}>Refund Policy</h1>
        <p style={{ fontSize: 13, color: "#888", marginBottom: 36 }}>Last updated: June 2025</p>

        <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444", marginBottom: 28 }}>
          This Refund Policy applies to all bookings made through <strong>CLICKMYFARE.com</strong>, operated by Global Knowledge Travel Services, IATA accredited, Colombo, Sri Lanka.
        </p>

        {[
          {
            title: "1. Airline Refund Rules",
            body: `Refunds are governed by the fare rules of the ticket purchased. Promotional and economy fares are often non-refundable. Business Class and Premium Economy fares may allow partial or full refunds subject to the airline's conditions and cancellation fees. Fare rules will always be communicated to you before your ticket is issued.`
          },
          {
            title: "2. Service Fees",
            body: `Global Knowledge Travel Services charges a service fee for processing bookings. This service fee is non-refundable once a ticket has been issued, regardless of whether the airline fare itself is refundable.`
          },
          {
            title: "3. How to Request a Refund",
            body: `All refund requests must be submitted in writing via WhatsApp (+94 76 728 2513) within the timeframe specified by the airline's fare rules. Requests received after the deadline will not be eligible for refund. Please have your booking reference and ticket number ready.`
          },
          {
            title: "4. Processing Time",
            body: `Once a refund request is approved by the airline, processing can take between 7 to 30 business days depending on the airline and your payment method. We will keep you updated on the status of your refund throughout the process.`
          },
          {
            title: "5. Involuntary Cancellations",
            body: `If an airline cancels or significantly changes your flight, you are entitled to a full refund of the air fare under airline consumer protection rules. In such cases, Global Knowledge Travel Services will process your refund claim with the airline on your behalf at no additional charge.`
          },
          {
            title: "6. No-Show Policy",
            body: `If you miss your flight without prior notice (no-show), the ticket is generally forfeited and no refund is applicable. Some fare types may allow a partial refund of taxes — please check with our staff at the time of booking.`
          },
          {
            title: "7. Amendments & Date Changes",
            body: `If you wish to change your travel dates rather than cancel, amendment fees may apply as per the fare rules. Contact us as early as possible — changes made well in advance generally attract lower fees than last-minute changes.`
          },
          {
            title: "8. Contact Us",
            body: `To initiate a refund or for any queries: WhatsApp +94 76 728 2513 | Global Knowledge Travel Services, Colombo, Sri Lanka. Our team is available Monday–Saturday, 9am–6pm (Colombo time).`
          },
        ].map(s => (
          <div key={s.title} style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{s.title}</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "#555" }}>{s.body}</p>
          </div>
        ))}

        <div style={{ background: "#1a1a1a", borderRadius: 11, padding: "24px 28px", marginTop: 40, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Need help with a refund?</div>
            <div style={{ fontSize: 13, color: "#888" }}>Our team will handle it for you, step by step.</div>
          </div>
          <a href={WA_LINK} target="_blank" rel="noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25d366", color: "#fff", padding: "11px 22px", borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 700 }}>
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
