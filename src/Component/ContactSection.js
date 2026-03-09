import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram
} from "react-icons/fa6";
import GalleryCarousel from "./GalleryCarousel";

/*
  ---- THEME SYSTEM ----
  Assumes Tailwind is globally configured with these variables in tailwind.config.js:
    colors: {
      primary: '#E76F51',    // warm NGO red
      secondary: '#F4A261',  // soft orange
      accent: '#E9C46A',     // warm yellow
      bg: '#FDF6EC',         // light beige
      surface: '#FFFFFF',    // white
      text: '#2D2D2D',
      textSecondary: '#6B6B6B',
      primaryDark: '#CB4A25',// Accent for hover
      secondaryDark: '#DF8939', // Accent for hover
      border: '#E9C46A',     // Soft yellow for border
      fieldBg: '#FCF3E8'     // Slightly off-white for fields
    }
  All color classes below reference these variables by Tailwind theme names or use CSS variables.
*/

export default function ContactSection() {
  // Contact numbers object
  const contactNumbers = [
    {
      number: "+91 97830 68493",
      tel: "tel:+919783068493",
      wa: "https://wa.me/919783068493"
    },
    {
      number: "+91 97857 20688",
      tel: "tel:+919785720688"
    },
    {
      number: "+91 92567 41759",
      tel: "tel:+919256741759"
    }
  ];
  const emails = [
    { email: "foundervanrang.org@gmail.com" },
    { email: "info@thevanrangfoundation.org" }
  ];

  return (
    <section className="bg-bg py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12 text-center md:text-left">
          <p className="text-primary font-semibold text-lg font-serif tracking-wide">
            Contact The Vanrang Foundation
          </p>
          <h2 className="text-4xl font-bold text-primary font-serif mb-2">
            Together for a Better Tomorrow.
          </h2>
          <p className="mt-3 text-secondary max-w-2xl mx-auto md:mx-0 text-base font-medium">
            Whether you want to volunteer, collaborate, or support our mission of social impact, rural development, women & youth empowerment, education, or environment – we look forward to connecting with you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT CONTACT OPTIONS */}
          <div className="space-y-6">
            {/* Combined WhatsApp & Phone */}
            <ContactCard
              icon={(
                <span className="flex gap-2 items-center">
                  <FaPhoneAlt className="text-primary" />
                </span>
              )}
              title="Call or WhatsApp – Start a Conversation"
              subtitle={
                <span className="flex flex-col gap-1">
                  {contactNumbers.map(c => (
                    <span key={c.tel}>
                      <a
                        href={c.tel}
                        className="hover:underline text-text font-medium mr-2"
                        title={`Call ${c.number}`}
                      >
                        {c.number}
                      </a>
                      {c.wa && (
                        <a
                          href={c.wa}
                          className="hover:underline text-xl"
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`WhatsApp ${c.number}`}
                          aria-label={`WhatsApp ${c.number}`}
                        >
                          <FaWhatsapp
                            className="inline text-primary ml-1 align-text-bottom"
                            title="WhatsApp"
                          />
                        </a>
                      )}
                    </span>
                  ))}
                </span>
              }
            />

            {/* Email */}
            <ContactCard
              icon={<FaEnvelope className="text-primary" />}
              title="Email – Make an Impact"
              subtitle={
                <span className="flex flex-col">
                  {emails.map(e => (
                    <a
                      key={e.email}
                      href={`mailto:${e.email}`}
                      className="hover:underline text-text font-medium"
                    >
                      {e.email}
                    </a>
                  ))}
                </span>
              }
            />

            {/* Location */}
            <ContactCard
              icon={<FaMapMarkerAlt className="text-primary" />}
              title="Registered Office"
              subtitle={
                <span className="text-textSecondary">
                  189, Adarsh Colony, Daudpur<br />
                  Alwar, Rajasthan, India – 301001
                </span>
              }
            />
            <ContactCard
              icon={<FaMapMarkerAlt className="text-primary" />}
              title="Sub Office"
              subtitle={
                <span className="text-textSecondary">
                  245, Malan Ki Gali, Hindu Pada<br />
                  Vikas Path, Alwar, Rajasthan, India – 301001
                </span>
              }
            />

            {/* SOCIAL MEDIA SECTION */}
            <div className="flex items-center gap-5 flex-wrap justify-center md:justify-start pt-6">
              <SocialButton
                href="https://www.facebook.com/share/1AixPGcMh9/"
                label="Facebook"
                color="bg-primary"
                icon={<FaFacebookF size={18} />}
              />
              <SocialButton
                href="https://www.instagram.com/thevanrangfoundation?igsh=ZG1sa20yN2kzcHdp"
                label="Instagram"
                color="bg-primary"
                icon={<FaInstagram size={18} />}
              />
              <a
                href="https://www.threads.com/@thevanrangfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primaryDark p-3 rounded-full text-white flex items-center justify-center transition-colors"
                title="Threads"
                style={{ display: "inline-block" }}
              >
                <img
                  src="/threads.png"
                  alt="Threads"
                  className="w-5 h-5"
                  style={{
                    filter: "invert(39%) sepia(67%) saturate(4387%) hue-rotate(335deg) brightness(102%) contrast(89%)"
                  }}
                />
              </a>
              <SocialButton
                href="https://x.com/vanrangofficial"
                label="X (Twitter)"
                color="bg-primary"
                icon={<FaXTwitter size={18} />}
              />
              <SocialButton
                href="https://linkedin.com/company/the-vanrang-foundation"
                label="LinkedIn"
                color="bg-primary"
                icon={<FaLinkedinIn size={18} />}
              />
              <SocialButton
                href="https://youtube.com/@vanrangfoundation?si=MEivV0bBvFrxjFTP"
                label="YouTube"
                color="bg-primary"
                icon={<FaYoutube size={18} />}
              />
            </div>
          </div>

          {/* RIGHT CONTACT FORM */}
          <div className="bg-surface rounded-xl shadow-lg p-8 border border-border">

            <h3 className="text-2xl font-semibold text-center mb-6 text-primary font-serif">
              Send Us a Message
            </h3>

            <form className="space-y-5">

              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Name*" placeholder="Your Full Name" />
                <Input label="Email*" placeholder="Your Email Address" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Phone*" placeholder="Your Contact Number" />
                <Input label="City / Village*" placeholder="Your Location" />
              </div>

              <div>
                <label className="block mb-2 font-medium text-primary">
                  How would you like to help?*
                </label>
                <textarea
                  placeholder="Share how you’d like to support, ask questions, or tell us about your interest in volunteering, tree plantation, awareness programs, or community work."
                  className="w-full border border-border rounded-lg p-3 h-32 focus:ring-2 focus:ring-secondary outline-none bg-fieldBg text-text"
                />
              </div>

              {/* Fake captcha placeholder */}
              <div className="border border-border rounded-lg p-4 w-fit bg-bg flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 accent-primary"
                  id="not-robot"
                  />
                <label htmlFor="not-robot" className="text-textSecondary cursor-pointer">
                  I'm not a robot
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primaryDark text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, subtitle }) {
  return (
    <div className="flex items-center justify-between bg-surface rounded-lg p-5 shadow hover:shadow-lg border border-border transition">

      <div className="flex items-center gap-4">
        <div className="text-2xl">{icon}</div>

        <div>
          <p className="font-medium text-primary font-serif">{title}</p>
          {subtitle && (
            <p className="text-sm text-textSecondary font-medium mt-1">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block mb-2 font-medium text-primary">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-border rounded-lg p-3 focus:ring-2 focus:ring-secondary outline-none bg-fieldBg text-text"
        autoComplete="off"
      />
    </div>
  );
}

function SocialButton({ href, icon, label, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${color} hover:bg-primaryDark p-3 rounded-full text-white flex items-center justify-center transition-colors`}
      title={label}
      aria-label={label}
    >
      {icon}
    </a>
  );
}