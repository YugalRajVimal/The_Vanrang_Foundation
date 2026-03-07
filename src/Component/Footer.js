import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  // All icons will use white color in dark bg
  const iconColor = "#FFFFFF";
  // Slightly lighter dark green for icon backgrounds
  const iconBgColor = "bg-[#388e3c]";
  // For hover accent
  const hoverAccent = "hover:bg-[#66bb6a]";
  return (
    <footer className="bg-[#14351c] text-white pt-16 pb-8">
      <div className="mx-auto px-6">
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Only */}
          <div>
            <img
              src="/logo.png"
              alt="The Vanrang Foundation logo"
              className="h-24 mb-2"
            />
            <p className="mb-3 font-bold text-white text-xl">
              The Vanrang Foundation
              <div className="text-[#A5D6A7] text-base">
                <span>One World One Family</span>
              </div>
            </p>
            <div className="mb-2 mt-2 text-[#A5D6A7]">
              <span className="font-semibold text-[#A5D6A7]">E-mail:</span>{" "}
              <br />
              <span className="break-all">
                <a href="mailto:foundervanrang.org@gmail.com" className="underline hover:text-[#81c784] transition-colors">foundervanrang.org@gmail.com</a>
                <br />
                <a href="mailto:info@thevanrangfoundation.org" className="underline hover:text-[#81c784] transition-colors">info@thevanrangfoundation.org</a>
              </span>
            </div>
            <div className="mb-0 mt-2 text-[#A5D6A7]">
              <span className="font-semibold text-[#A5D6A7]">Phone:</span>{" "}
              <br />
              <span className="break-all">
                <a href="tel:+919783068493" className="underline hover:text-[#81c784] transition-colors">+91 9783068493</a>
                <br />
                <a href="tel:+919785720688" className="underline hover:text-[#81c784] transition-colors">+91 9785720688</a>
                <br />
                <a href="tel:+919256741759" className="underline hover:text-[#81c784] transition-colors">+91 9256741759</a>
              </span>
            </div>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#A5D6A7] font-serif">
              Get Involved
            </h3>
            <ul className="space-y-3">
              <li className="hover:text-[#81c784] cursor-pointer">Volunteer Opportunities</li>
              <li className="hover:text-[#81c784] cursor-pointer">School Programs</li>
              <li className="hover:text-[#81c784] cursor-pointer">Community Drives</li>
              <li className="hover:text-[#81c784] cursor-pointer">Youth Green Leaders</li>
              <li className="hover:text-[#81c784] cursor-pointer">Tree Plantation Events</li>
              <li className="hover:text-[#81c784] cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#A5D6A7] font-serif">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="hover:text-[#81c784] cursor-pointer transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-[#81c784] cursor-pointer transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/plantation-drives"
                  className="hover:text-[#81c784] cursor-pointer transition-colors"
                >
                  Plantation Drives
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-[#81c784] cursor-pointer transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#81c784] cursor-pointer transition-colors"
                >
                  Contact / Volunteer
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Address (Office Address only) */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#A5D6A7] font-serif">
              Office
            </h3>
            {/* Office Address only */}
            <div className="mt-8">
              <div className="mb-4 text-[#A5D6A7]">
                <span className="font-semibold">Registered Office:</span>
                <br />
                189, Adarsh Colony, Daudpur<br />
                Alwar, Rajasthan, India – 301001
                <br />
                <br />
                <span className="font-semibold">Sub Office:</span>
                <br />
                245, Malan Ki Gali, Hindu Pada<br />
                Vikas Path, Alwar, Rajasthan, India – 301001
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 flex-wrap justify-center mt-10">
          <a
            href="https://www.facebook.com/share/1AixPGcMh9/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconBgColor} p-3 rounded-full text-white ${hoverAccent} hover:text-[#14351c] transition-colors`}
            title="Facebook"
          >
            <FaFacebookF size={18} color={iconColor} />
          </a>
          <a
            href="https://www.instagram.com/thevanrangfoundation?igsh=ZG1sa20yN2kzcHdp"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconBgColor} p-3 rounded-full text-white ${hoverAccent} hover:text-[#14351c] transition-colors`}
            title="Instagram"
          >
            <FaInstagram size={18} color={iconColor} />
          </a>
          {/* Using a Threads logo image for Threads instead of an icon */}
          <a
            href="https://www.threads.com/@thevanrangfoundation"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconBgColor} p-3 rounded-full text-white ${hoverAccent} hover:text-[#14351c] transition-colors flex items-center justify-center`}
            title="Threads"
            style={{ display: "inline-block" }}
          >
            <img src="/threads.png" alt="Threads" className="w-5 h-5" style={{ filter: "invert(97%) sepia(0%) saturate(0%) hue-rotate(66deg) brightness(128%) contrast(99%)" }} />
            {/* The filter sets the Threads logo light for use on dark bg; adjust if image has built-in color */}
          </a>
          <a
            href="https://x.com/vanrangofficial"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconBgColor} p-3 rounded-full text-white ${hoverAccent} hover:text-[#14351c] transition-colors`}
            title="X (Twitter)"
          >
            <FaXTwitter size={18} color={iconColor} />
          </a>
          <a
            href="https://linkedin.com/company/the-vanrang-foundation"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconBgColor} p-3 rounded-full text-white ${hoverAccent} hover:text-[#14351c] transition-colors`}
            title="LinkedIn"
          >
            <FaLinkedinIn size={18} color={iconColor} />
          </a>
          <a
            href="https://youtube.com/@vanrangfoundation?si=MEivV0bBvFrxjFTP"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconBgColor} p-3 rounded-full text-white ${hoverAccent} hover:text-[#14351c] transition-colors`}
            title="YouTube"
          >
            <FaYoutube size={18} color={iconColor} />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-[#225527] mt-12 pt-6 text-center text-[#A5D6A7]">
          © {new Date().getFullYear()} <span className="text-white font-semibold">
            The Vanrang Foundation
          </span>{" "}
          — One World One Family. All Rights Reserved.
          <br />
          <span className="text-sm text-[#81c784]">
            Tech Partner: <a href="https://gowappily.in" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">GoWappily Infotech</a>
          </span>
        </div>
      </div>
    </footer>
  );
}