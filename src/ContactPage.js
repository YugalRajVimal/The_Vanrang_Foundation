import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaLeaf
} from "react-icons/fa";
import GalleryCarousel from "./Component/GalleryCarousel";

export default function ContactVolunteer() {
  return (
    <section className="bg-[#E8F5E9] py-20 pt-32 ">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2E7D32] font-serif">
            Connect with The Vanrang Foundation
          </h1>
          <p className="text-[#A5D6A7] font-medium">
            Home <span className="mx-2 text-[#4CAF50]">›</span> Contact / Volunteer
          </p>
          <div className="mt-2 text-[#4CAF50] text-lg font-semibold">
            One World One Family
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT CONTACT SECTION */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#2E7D32] font-serif">
              Reach Out • Volunteer • Plant Hope
            </h2>

            {/* Country Badge */}
            <div className="bg-[#2E7D32] text-white rounded-full inline-flex items-center gap-3 px-5 py-2 mb-6 font-semibold">
              <span>🇮🇳 India</span>
            </div>

            {/* Address */}
            <div className="mb-8 leading-relaxed text-[#2E7D32]">
              <div className="mb-3">
                <span className="font-semibold text-[#4CAF50]">Registered Office:</span>
                <br />
                189, Adarsh Colony, Daudpur<br />
                Alwar, Rajasthan, India – 301001
              </div>
              <div>
                <span className="font-semibold text-[#4CAF50]">Sub Office:</span>
                <br />
                245, Malan Ki Gali, Hindu Pada<br />
                Vikas Path, Alwar, Rajasthan, India – 301001
              </div>
            </div>

            {/* Phones */}
            <div className="flex items-start gap-4 mb-4">
              <FaPhone className="text-[#2E7D32] mt-1" />
              <div>
                <p className="font-semibold text-[#2E7D32]">Call Us for Green Collaboration</p>
                <div className="flex flex-col space-y-1 text-[#4CAF50] font-medium">
                  <a href="tel:+919783068493" className="hover:underline">+91 9783068493</a>
                  <a href="tel:+919785720688" className="hover:underline">+91 9785720688</a>
                  <a href="tel:+919256741759" className="hover:underline">+91 9256741759</a>
                </div>
              </div>
            </div>

            {/* Emails */}
            <div className="flex items-start gap-4 mb-8">
              <FaEnvelope className="text-[#2E7D32] mt-1" />
              <div>
                <p className="font-semibold text-[#2E7D32]">Email for Enquiries or Ideas</p>
                <div className="flex flex-col space-y-1 text-[#4CAF50] font-medium break-all">
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
              className="flex items-center gap-4 mb-10 text-[#2E7D32] font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              WhatsApp – Start a Green Conversation
            </a>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap gap-5 text-[#2E7D32] font-medium items-center">
              <a 
                href="https://www.instagram.com/thevanrangfoundation?igsh=ZG1sa20yN2kzcHdp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#4CAF50] transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://www.threads.com/@thevanrangfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4CAF50] transition-colors"
              >
                Threads
              </a>
              <a 
                href="https://x.com/vanrangofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4CAF50] transition-colors"
              >
                X (Twitter)
              </a>
              <a 
                href="https://youtube.com/@vanrangfoundation?si=MEivV0bBvFrxjFTP"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4CAF50] transition-colors"
              >
                YouTube
              </a>
              <a 
                href="https://www.facebook.com/share/1AixPGcMh9/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4CAF50] transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://linkedin.com/company/the-vanrang-foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4CAF50] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border-t-8 border-[#2E7D32]">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#2E7D32] font-serif">
              Volunteer / Contact Form
            </h2>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-[#A5D6A7] rounded-lg p-3 w-full focus:border-[#2E7D32] focus:ring-2 focus:ring-[#A5D6A7] outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-[#A5D6A7] rounded-lg p-3 w-full focus:border-[#2E7D32] focus:ring-2 focus:ring-[#A5D6A7] outline-none"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border border-[#A5D6A7] rounded-lg p-3 w-full focus:border-[#2E7D32] focus:ring-2 focus:ring-[#A5D6A7] outline-none"
                />
                <input
                  type="text"
                  placeholder="City / Village"
                  className="border border-[#A5D6A7] rounded-lg p-3 w-full focus:border-[#2E7D32] focus:ring-2 focus:ring-[#A5D6A7] outline-none"
                />
              </div>
              <textarea
                placeholder="How would you like to support? (Volunteer, join plantation drives, lead school awareness, build greener communities...)"
                className="border border-[#A5D6A7] rounded-lg p-3 w-full h-32 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#A5D6A7] outline-none"
              />

              {/* Checkbox */}
              <div className="flex items-center gap-2 text-sm text-[#4CAF50]">
                <input type="checkbox" id="agree" className="accent-[#4CAF50]" />
                <label htmlFor="agree">
                  I agree to receive updates regarding environmental programs and events.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#4CAF50] transition"
              >
                Send Your Message
              </button>
            </form>

            {/* CTA */}
            <div className="text-center mt-6">
              <button className="inline-flex items-center gap-2 text-[#2E7D32] font-semibold hover:text-[#4CAF50] transition-colors">
                <FaLeaf size={18} />
                Join the Plantation Drive
              </button>
              <div className="mt-3 text-[#A5D6A7] text-sm italic">
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
          <h3 className="text-lg font-semibold text-[#2E7D32] mb-2">
            Registered Office
          </h3>
          <div className="rounded-lg overflow-hidden shadow-md border border-[#A5D6A7]">
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
          <h3 className="text-lg font-semibold text-[#2E7D32] mb-2">
            Sub Office
          </h3>
          <div className="rounded-lg overflow-hidden shadow-md border border-[#A5D6A7]">
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