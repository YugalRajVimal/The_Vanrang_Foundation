import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa6";
import GalleryCarousel from "./GalleryCarousel";

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
      tel: "tel:+919785720688",

    },
    {
      number: "+91 92567 41759",
      tel: "tel:+919256741759",
    }
  ];
  const emails = [
    { email: "foundervanrang.org@gmail.com" },
    { email: "info@thevanrangfoundation.org" }
  ];

  return (
    <section className="bg-[#E8F5E9] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-[#2E7D32] font-semibold text-lg font-serif">Contact The Vanrang Foundation</p>
          <h2 className="text-4xl font-bold text-[#2E7D32] font-serif">
            Let's Grow a Greener Tomorrow, Together.
          </h2>
          <p className="mt-3 text-[#4CAF50] max-w-2xl">
            Whether you want to volunteer, collaborate, or support our mission of tree plantation, environmental education, or rural development — we look forward to connecting with you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT CONTACT OPTIONS */}
          <div className="space-y-6">
            {/* Combined WhatsApp & Phone */}
            <ContactCard
              icon={(
                <span className="flex gap-2 items-center">
                  <FaPhoneAlt className="text-[#2E7D32]" />
                </span>
              )}
              title="Call or WhatsApp – Start a Green Conversation"
              subtitle={
                <span className="flex flex-col gap-1">
                  {contactNumbers.map(c => (
                    <span key={c.tel}>
                      <a
                        href={c.tel}
                        className="hover:underline mr-2"
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
                          <FaWhatsapp className="inline text-[#25d366] ml-1 align-text-bottom" title="WhatsApp" />
                        </a>
                      )}
                    </span>
                  ))}
                </span>
              }
            />

            {/* Email */}
            <ContactCard
              icon={<FaEnvelope className="text-[#2E7D32]" />}
              title="Email – Inspire Eco Change"
              subtitle={
                <span className="flex flex-col">
                  {emails.map(e => (
                    <a key={e.email} href={`mailto:${e.email}`} className="hover:underline">
                      {e.email}
                    </a>
                  ))}
                </span>
              }
            />

            {/* Location */}
            <ContactCard
              icon={<FaMapMarkerAlt className="text-[#2E7D32]" />}
              title="Registered Office"
              subtitle={
                <span>
                  189, Adarsh Colony, Daudpur<br />
                  Alwar, Rajasthan, India – 301001
                </span>
              }
            />
            <ContactCard
              icon={<FaMapMarkerAlt className="text-[#2E7D32]" />}
              title="Sub Office"
              subtitle={
                <span>
                  245, Malan Ki Gali, Hindu Pada<br />
                  Vikas Path, Alwar, Rajasthan, India – 301001
                </span>
              }
            />

            {/* SOCIAL MEDIA SECTION: Like Footer */}
            <div className="flex items-center gap-5 flex-wrap justify-center md:justify-start pt-6">
              <a
                href="https://www.facebook.com/share/1AixPGcMh9/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#388E3C] p-3 rounded-full text-white hover:bg-[#A5D6A7] hover:text-[#14351c] transition-colors"
                title="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.instagram.com/thevanrangfoundation?igsh=ZG1sa20yN2kzcHdp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#388E3C] p-3 rounded-full text-white hover:bg-[#A5D6A7] hover:text-[#14351c] transition-colors"
                title="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              {/* Threads logo image */}
              <a
                href="https://www.threads.com/@thevanrangfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#388E3C] p-3 rounded-full text-white hover:bg-[#A5D6A7] hover:text-[#14351c] transition-colors flex items-center justify-center"
                title="Threads"
                style={{ display: "inline-block" }}
              >
                <img src="/threads.png" alt="Threads" className="w-5 h-5" style={{ filter: "invert(97%) sepia(0%) saturate(0%) hue-rotate(66deg) brightness(128%) contrast(99%)" }} />
              </a>
              <a
                href="https://x.com/vanrangofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#388E3C] p-3 rounded-full text-white hover:bg-[#A5D6A7] hover:text-[#14351c] transition-colors"
                title="X (Twitter)"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="https://linkedin.com/company/the-vanrang-foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#388E3C] p-3 rounded-full text-white hover:bg-[#A5D6A7] hover:text-[#14351c] transition-colors"
                title="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://youtube.com/@vanrangfoundation?si=MEivV0bBvFrxjFTP"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#388E3C] p-3 rounded-full text-white hover:bg-[#A5D6A7] hover:text-[#14351c] transition-colors"
                title="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT CONTACT FORM */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#A5D6A7]">

            <h3 className="text-2xl font-semibold text-center mb-6 text-[#2E7D32] font-serif">
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
                <label className="block mb-2 font-medium text-[#2E7D32]">
                  How would you like to help?*
                </label>
                <textarea
                  placeholder="Share how you’d like to support, ask questions, or tell us about your interest in volunteering, tree plantation, awareness programs, or community work."
                  className="w-full border border-[#A5D6A7] rounded-lg p-3 h-32 focus:ring-2 focus:ring-[#4CAF50] outline-none"
                />
              </div>

              {/* Fake captcha placeholder */}
              <div className="border border-[#A5D6A7] rounded-lg p-4 w-fit bg-[#E8F5E9]">
                <input type="checkbox" className="mr-2 accent-[#2E7D32]" />
                I'm not a robot
              </div>

              <button
                type="submit"
                className="w-full bg-[#2E7D32] hover:bg-[#388E3C] text-white py-3 rounded-lg font-semibold transition"
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
    <div className="flex items-center justify-between bg-white rounded-lg p-5 shadow hover:shadow-lg border border-[#A5D6A7] transition">

      <div className="flex items-center gap-4">
        <div className="text-2xl">{icon}</div>

        <div>
          <p className="font-medium text-[#2E7D32] font-serif">{title}</p>
          {subtitle && (
            <p className="text-sm text-[#4CAF50]">{subtitle}</p>
          )}
        </div>
      </div>

      {/* <span className="text-[#A5D6A7] text-xl font-bold">›</span> */}
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block mb-2 font-medium text-[#2E7D32]">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-[#A5D6A7] rounded-lg p-3 focus:ring-2 focus:ring-[#4CAF50] outline-none bg-[#F8FAF8]"
      />
    </div>
  );
}