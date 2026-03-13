import { useState } from "react";
import {
  FaUniversity,
  FaQrcode,
  FaLock,
  FaArrowRight,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe
} from "react-icons/fa";

// Use these colors from ContactPage.js (11-19), orange theme as it is
const COLORS = {
  primary: "#F4A261",        // Orange
  accent: "#E76F51",         // Deep Orange
  secondary: "#264653",      // Dark Blueish Green
  background: "#FFF7ED",     // Very light orange-beige
  surface: "#FAE1CB",        // Light Orange
  textPrimary: "#22223B",    // Contrast Dark for headings/text
  textSecondary: "#6B6B6B"   // Muted Text
};

const amounts = [100, 250, 500, 1000, 2500, 5000];

// Footer Quicklinks and Get Involved options
const getInvolved = [
  "Volunteer Opportunities",
  "School Programs",
  "Community Drives",
  "Youth Green Leaders",
  "Tree Plantation Events"
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Plantation Drives", href: "/plantation-drives" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact / Volunteer", href: "/contact" },
  { name: "Our Team", href: "/team" }
];

export default function DonationPage() {
  const [selected, setSelected] = useState(250);
  const [customAmount, setCustomAmount] = useState("");

  const sectionStyle = {
    background: COLORS.background,
    padding: "6rem 1.5rem 4rem 1.5rem",
    minHeight: "100vh"
  };

  const cardStyle = {
    background: COLORS.surface,
    borderRadius: "1rem",
    boxShadow: "0 1px 10px 2px #0001",
    padding: "2rem"
  };

  // Main heading style: accent (#E76F51)
  const headerTextStyle = {
    color: COLORS.accent,
    fontFamily: "serif",
    letterSpacing: "0.03em"
  };

  const mutedTextStyle = {
    color: COLORS.textSecondary
  };

  const buttonSelectedStyle = {
    background: COLORS.primary,
    color: "#fff",
    border: `2px solid ${COLORS.primary}`
  };

  const buttonUnselectedStyle = {
    background: COLORS.surface,
    color: COLORS.textPrimary,
    border: `2px solid ${COLORS.primary}`
  };

  const donateButtonStyle = {
    background: COLORS.accent,
    color: "#fff",
    width: "100%",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontSize: "1.15rem",
    border: "none",
    marginTop: "0.5rem",
    transition: "background 0.2s"
  };

  // --- Custom Footer style ---
  const footerContainerStyle = {
    marginTop: "6rem",
    background: COLORS.surface,
    borderTop: `1px solid ${COLORS.accent}33`,
    color: COLORS.textPrimary,
    padding: "3rem 0 0 0"
  };

  const footerInnerStyle = {
    maxWidth: 1160,
    margin: "0 auto",
    padding: "0 1rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(226px, 1fr))",
    gap: "2.5rem 2.5rem"
  };

  // Footer sections titles: keep primary color
  const footerTitle = {
    color: COLORS.primary,
    fontWeight: 700,
    fontSize: "1.22rem",
    marginBottom: "1.05rem",
    letterSpacing: "0.01em",
    fontFamily: "serif"
  };

  return (
    <section style={sectionStyle}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>

        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1 style={{ ...headerTextStyle, fontSize: "2.25rem", fontWeight: 700 }}>
            Support Our Mission
          </h1>
          <p style={{ ...mutedTextStyle, marginTop: "0.75rem" }}>
            Your contribution helps us create a positive impact in society.
          </p>
        </div>

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT - Bank Details */}
          <div style={cardStyle}>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 600, marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem", color: COLORS.accent }}>
              <FaUniversity style={{ color: COLORS.accent }} />
              Bank Account Details
            </h2>
            <ul style={{ marginBottom: 0, color: COLORS.textPrimary, listStyle: "none", padding: 0, marginBlockEnd: "auto", fontSize: "1.05rem" }}>
              <li style={{ marginBottom: "1rem" }}>
                <b>Account Name:</b> The Vanrang Foundation
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <b>Bank Name:</b> PNB, Alwar (Rajasthan)
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <b>IFSC Code:</b> ----------
              </li>
              <li>
                <b>Account No:</b> ----------------
              </li>
            </ul>

            <div style={{ marginTop: "2rem" }}>
              <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", color: COLORS.accent }}>
                <FaQrcode style={{ color: COLORS.accent }} />
                Scan to Pay
              </h3>
              <img
                src="/qr.png"
                alt="QR Payment"
                style={{
                  width: 240,
                  borderRadius: "0.5rem",
                  border: `1px solid ${COLORS.accent}33`
                }}
              />
            </div>
          </div>

          {/* RIGHT - Online Donation */}
          <div style={cardStyle}>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 600, marginBottom: "1.2rem", color: COLORS.accent }}>
              Donate Online
            </h2>
            <p style={{ ...mutedTextStyle, marginBottom: "1.5rem" }}>
              Choose a donation amount to support our initiatives.
            </p>

            {/* Amount Options */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => {
                    setSelected(amt);
                    setCustomAmount("");
                  }}
                  style={{
                    borderRadius: "0.5rem",
                    padding: "0.75rem 0",
                    fontWeight: 600,
                    fontSize: "1rem",
                    transition: "background 0.2s, color 0.2s",
                    cursor: "pointer",
                    marginBottom: 0,
                    ...(selected === amt && !customAmount ? buttonSelectedStyle : buttonUnselectedStyle),
                  }}
                >
                  ₹{amt}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <input
              type="number"
              placeholder="Enter custom amount"
              value={customAmount}
              min="1"
              onChange={e => {
                setCustomAmount(e.target.value);
                setSelected(""); // Deselect amount buttons
              }}
              style={{
                width: "100%",
                border: `1px solid ${COLORS.accent}`,
                borderRadius: "0.5rem",
                padding: "0.75rem",
                marginBottom: "1.5rem",
                fontSize: "1rem",
                color: COLORS.textPrimary,
                background: "#fff"
              }}
            />

            {/* Donate Button */}
            <button style={donateButtonStyle}>
              Donate Now
              <FaArrowRight />
            </button>

            <p style={{
              fontSize: "0.95rem",
              color: COLORS.textSecondary,
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <FaLock style={{ color: COLORS.accent }} /> 100% Secure Donation
            </p>
          </div>
        </div>

        {/* Donation Categories */}
        <div
          style={{
            marginTop: "4.5rem",
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <DonationSection
            title="Membership"
            items={[
              "Monthly Membership – ₹100 per month",
              "Annual Membership – ₹5100 per year",
              "Life Time Membership – ₹51000 one time",
              "Patron Membership – ₹250001 one time"
            ]}
          />
          <DonationSection
            title="Food Sponsorship (Bhojan Seva)"
            items={[
              "One time meal for 200 people – ₹3000"
            ]}
          />
          
          
        </div>
      </div>

    </section>
  );
}

function DonationSection({ title, items }) {
  return (
    <div style={{
      background: COLORS.background,
      border: `1px solid ${COLORS.primary}`,
      borderRadius: "1rem",
      padding: "2rem"
    }}>
      <h3 style={{
        fontSize: "1.17rem",
        fontWeight: 700,
        color: COLORS.accent,
        marginBottom: "1rem",
        fontFamily: "serif",
        letterSpacing: "0.02em"
      }}>
        {title}
      </h3>
      <ul style={{ color: COLORS.textPrimary, padding: 0, listStyle: "none", margin: 0 }}>
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.5rem",
              fontSize: "1.04rem"
            }}
          >
            <FaCheckCircle style={{ color: COLORS.primary, minWidth: 21 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}