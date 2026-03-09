import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaLeaf
} from "react-icons/fa";
import GalleryCarousel from "./Component/GalleryCarousel";

// Color Palette from instructions
const COLORS = {
  primary: "#E76F51",      // Warm NGO Red
  secondary: "#F4A261",    // Soft Orange
  accent: "#E9C46A",       // Warm Yellow
  background: "#FDF6EC",   // Light Beige
  surface: "#FFFFFF",      // Card Color
  textPrimary: "#2D2D2D",
  textSecondary: "#6B6B6B"
};

export default function ContactVolunteer() {
  return (
    <section
      className="py-20 pt-32"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-14">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
            style={{ color: COLORS.primary }}
          >
            Connect with The Vanrang Foundation
          </h1>
          <p className="font-medium" style={{ color: COLORS.textSecondary }}>
            Home <span className="mx-2" style={{ color: COLORS.primary }}>›</span> Contact / Volunteer
          </p>
          <div className="mt-2 text-lg font-semibold" style={{ color: COLORS.secondary }}>
            One World One Family
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT CONTACT SECTION */}
          <div>
            <h2
              className="text-3xl font-bold mb-8 font-serif"
              style={{ color: COLORS.primary }}
            >
              Reach Out • Volunteer • Plant Hope
            </h2>

            {/* Country Badge */}
            <div
              className="rounded-full inline-flex items-center gap-3 px-5 py-2 mb-6 font-semibold"
              style={{ backgroundColor: COLORS.primary, color: COLORS.surface }}
            >
              <span>🇮🇳 India</span>
            </div>

            {/* Address */}
            <div className="mb-8 leading-relaxed" style={{ color: COLORS.textPrimary }}>
              <div className="mb-3">
                <span className="font-semibold" style={{ color: COLORS.secondary }}>
                  Registered Office:
                </span>
                <br />
                189, Adarsh Colony, Daudpur<br />
                Alwar, Rajasthan, India – 301001
              </div>
              <div>
                <span className="font-semibold" style={{ color: COLORS.secondary }}>
                  Sub Office:
                </span>
                <br />
                245, Malan Ki Gali, Hindu Pada<br />
                Vikas Path, Alwar, Rajasthan, India – 301001
              </div>
            </div>

            {/* Phones */}
            <div className="flex items-start gap-4 mb-4">
              <FaPhone style={{ color: COLORS.primary }} className="mt-1" />
              <div>
                <p className="font-semibold" style={{ color: COLORS.primary }}>
                  Call Us for Green Collaboration
                </p>
                <div className="flex flex-col space-y-1 font-medium" style={{ color: COLORS.secondary }}>
                  <a href="tel:+919783068493" className="hover:underline">{"+91 9783068493"}</a>
                  <a href="tel:+919785720688" className="hover:underline">{"+91 9785720688"}</a>
                  <a href="tel:+919256741759" className="hover:underline">{"+91 9256741759"}</a>
                </div>
              </div>
            </div>

            {/* Emails */}
            <div className="flex items-start gap-4 mb-8">
              <FaEnvelope style={{ color: COLORS.primary }} className="mt-1" />
              <div>
                <p className="font-semibold" style={{ color: COLORS.primary }}>
                  Email for Enquiries or Ideas
                </p>
                <div className="flex flex-col space-y-1 font-medium break-all" style={{ color: COLORS.secondary }}>
                  <a href="mailto:foundervanrang.org@gmail.com" className="hover:underline">
                    foundervanrang.org@gmail.com
                  </a>
                  <a href="mailto:info@thevanrangfoundation.org" className="hover:underline">
                    info@thevanrangfoundation.org
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919783068493"
              className="flex items-center gap-4 mb-10 font-semibold hover:underline"
              style={{ color: COLORS.primary }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              WhatsApp – Start a Green Conversation
            </a>

            {/* Social Links */}
            <div
              className="mt-8 flex flex-wrap gap-5 font-medium items-center"
              style={{ color: COLORS.textPrimary }}
            >
              <a
                href="https://www.instagram.com/thevanrangfoundation?igsh=ZG1sa20yN2kzcHdp"
                target="_blank"
                rel="noopener noreferrer"
                style={{ transition: "color 0.2s" }}
                className="hover:underline"
                onMouseOver={e => (e.currentTarget.style.color = COLORS.primary)}
                onMouseOut={e => (e.currentTarget.style.color = COLORS.textPrimary)}
              >
                Instagram
              </a>
              <a
                href="https://www.threads.com/@thevanrangfoundation"
                target="_blank"
                rel="noopener noreferrer"
                style={{ transition: "color 0.2s" }}
                className="hover:underline"
                onMouseOver={e => (e.currentTarget.style.color = COLORS.primary)}
                onMouseOut={e => (e.currentTarget.style.color = COLORS.textPrimary)}
              >
                Threads
              </a>
              <a
                href="https://x.com/vanrangofficial"
                target="_blank"
                rel="noopener noreferrer"
                style={{ transition: "color 0.2s" }}
                className="hover:underline"
                onMouseOver={e => (e.currentTarget.style.color = COLORS.primary)}
                onMouseOut={e => (e.currentTarget.style.color = COLORS.textPrimary)}
              >
                X (Twitter)
              </a>
              <a
                href="https://youtube.com/@vanrangfoundation?si=MEivV0bBvFrxjFTP"
                target="_blank"
                rel="noopener noreferrer"
                style={{ transition: "color 0.2s" }}
                className="hover:underline"
                onMouseOver={e => (e.currentTarget.style.color = COLORS.primary)}
                onMouseOut={e => (e.currentTarget.style.color = COLORS.textPrimary)}
              >
                YouTube
              </a>
              <a
                href="https://www.facebook.com/share/1AixPGcMh9/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ transition: "color 0.2s" }}
                className="hover:underline"
                onMouseOver={e => (e.currentTarget.style.color = COLORS.primary)}
                onMouseOut={e => (e.currentTarget.style.color = COLORS.textPrimary)}
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com/company/the-vanrang-foundation"
                target="_blank"
                rel="noopener noreferrer"
                style={{ transition: "color 0.2s" }}
                className="hover:underline"
                onMouseOver={e => (e.currentTarget.style.color = COLORS.primary)}
                onMouseOut={e => (e.currentTarget.style.color = COLORS.textPrimary)}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className="rounded-2xl shadow-lg p-10 border-t-8"
            style={{
              backgroundColor: COLORS.surface,
              borderTopColor: COLORS.primary
            }}
          >
            <h2
              className="text-2xl font-bold mb-6 text-center font-serif"
              style={{ color: COLORS.primary }}
            >
              Volunteer / Contact Form
            </h2>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-lg p-3 w-full outline-none"
                  style={{
                    border: `1.5px solid ${COLORS.accent}`,
                    color: COLORS.textPrimary
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-lg p-3 w-full outline-none"
                  style={{
                    border: `1.5px solid ${COLORS.accent}`,
                    color: COLORS.textPrimary
                  }}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-lg p-3 w-full outline-none"
                  style={{
                    border: `1.5px solid ${COLORS.accent}`,
                    color: COLORS.textPrimary
                  }}
                />
                <input
                  type="text"
                  placeholder="City / Village"
                  className="rounded-lg p-3 w-full outline-none"
                  style={{
                    border: `1.5px solid ${COLORS.accent}`,
                    color: COLORS.textPrimary
                  }}
                />
              </div>
              <textarea
                placeholder="How would you like to support? (Volunteer, join plantation drives, lead school awareness, build greener communities...)"
                className="rounded-lg p-3 w-full h-32 outline-none"
                style={{
                  border: `1.5px solid ${COLORS.accent}`,
                  color: COLORS.textPrimary
                }}
              />

              {/* Checkbox */}
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: COLORS.primary }}
              >
                <input
                  type="checkbox"
                  id="agree"
                  style={{
                    accentColor: COLORS.primary
                  }}
                />
                <label htmlFor="agree">
                  I agree to receive updates regarding environmental programs and events.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold transition"
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.surface
                }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = COLORS.secondary)}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = COLORS.primary)}
              >
                Send Your Message
              </button>
            </form>

            {/* CTA */}
            <div className="text-center mt-6">
              <button
                className="inline-flex items-center gap-2 font-semibold transition-colors"
                style={{ color: COLORS.primary }}
                onMouseOver={e => (e.currentTarget.style.color = COLORS.secondary)}
                onMouseOut={e => (e.currentTarget.style.color = COLORS.primary)}
              >
                <FaLeaf size={18} />
                Join the Plantation Drive
              </button>
              <div
                className="mt-3 text-sm italic"
                style={{ color: COLORS.textSecondary }}
              >
                We welcome youth, schools, and communities to partner for a greener, sustainable India. Every tree, every hand, every voice counts!
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Location Maps */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-7xl mx-auto mx-4">
        {/* Registered Office Map */}
        <div>
          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: COLORS.primary }}
          >
            Registered Office
          </h3>
          <div
            className="rounded-lg overflow-hidden shadow-md border"
            style={{ borderColor: COLORS.accent }}
          >
            <iframe
              title="Registered Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7073.479267533285!2d76.6086606959559!3d27.57058990504498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39729954614bb1cd%3A0xa27c9c1ee1eab08b!2sTHE%20VANRANG%20FOUNDATION!5e0!3m2!1sen!2sin!4v1772962674709!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Sub Office Map */}
        <div>
          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: COLORS.primary }}
          >
            Sub Office
          </h3>
          <div
            className="rounded-lg overflow-hidden shadow-md border"
            style={{ borderColor: COLORS.accent }}
          >
            <iframe
              title="Sub Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7073.575408013053!2d76.59538566977537!3d27.5690984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397299484a3e6e77%3A0x7d08413408bff84e!2sTHE%20VANRANG%20FOUNDATION!5e0!3m2!1sen!2sin!4v1772962692982!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-24"></div>
      <GalleryCarousel />
    </section>
  );
}