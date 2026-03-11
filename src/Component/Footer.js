import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

/**
 * Footer for The Vanrang Foundation
 * Uses global Tailwind color variables for warm, modern NGO theme.
 * - Primary:   var(--clr-primary)   | Tailwind: bg-primary / text-primary
 * - Secondary: var(--clr-secondary) | Tailwind: bg-secondary / text-secondary
 * - Accent:    var(--clr-accent)    | Tailwind: bg-accent / text-accent
 * - Background:var(--clr-background)| Tailwind: bg-background / text-background
 * - Surface:   var(--clr-surface)   | Tailwind: bg-surface / text-surface
 */

export default function Footer() {
  // All icons use the primary color on white/neutral background for accessibility and theme
  const iconColor = "var(--clr-primary)";
  const iconBgColor = "bg-accent/80"; // warm yellow with some opacity
  const hoverAccent =
    "hover:bg-primary-dark/95 hover:text-white hover:shadow-lg";
  const focusAccent =
    "focus:outline-none focus:ring focus:ring-primary/30 focus:ring-offset-2";
  const iconCommon =
    "p-3 rounded-full text-primary shadow transition-colors duration-200 " +
    iconBgColor +
    " " +
    hoverAccent +
    " " +
    focusAccent +
    " flex items-center justify-center";

  return (
    <footer className="bg-background text-text-primary pt-16 pb-8 transition-colors">
      <div className="mx-auto px-6 max-w-7xl">
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo, tagline, contact */}
          <div>
            <img
              src="/logo.png"
              alt="The Vanrang Foundation logo"
              className="h-24 mb-2"
            />
            <p className="mb-3 font-black text-2xl font-serif text-primary">
              The Vanrang Foundation
              <div className="text-accent text-base font-bold">
                <span>One World One Family</span>
              </div>
            </p>
            <div className="mb-2 mt-2 text-text-secondary text-base">
              <span className="font-semibold text-secondary">E-mail:</span>
              <br />
              <span className="break-all">
                <a
                  href="mailto:foundervanrang.org@gmail.com"
                  className="underline hover:text-primary-dark transition-colors"
                >
                  foundervanrang.org@gmail.com
                </a>
                <br />
                <a
                  href="mailto:info@thevanrangfoundation.org"
                  className="underline hover:text-primary-dark transition-colors"
                >
                  info@thevanrangfoundation.org
                </a>
              </span>
            </div>
            <div className="mb-0 mt-2 text-text-secondary text-base">
              <span className="font-semibold text-secondary">Phone:</span>
              <br />
              <span className="break-all">
                <a
                  href="tel:+919783068493"
                  className="underline hover:text-primary-dark transition-colors"
                >
                  +91 9783068493
                </a>
                <br />
                <a
                  href="tel:+919785720688"
                  className="underline hover:text-primary-dark transition-colors"
                >
                  +91 9785720688
                </a>
                <br />
                <a
                  href="tel:+919256741759"
                  className="underline hover:text-primary-dark transition-colors"
                >
                  +91 9256741759
                </a>
              </span>
            </div>
          </div>

          {/* Get Involved section */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-secondary font-serif tracking-wide">
              Get Involved
            </h3>
            <ul className="space-y-3 text-base text-text-secondary">
              <li className="hover:text-primary-dark cursor-pointer transition-colors">
                <Link to="/contact">Volunteer Opportunities</Link>
              </li>
              <li className="hover:text-primary-dark cursor-pointer transition-colors">
                <Link to="/about">School Programs</Link>
              </li>
              <li className="hover:text-primary-dark cursor-pointer transition-colors">
                <Link to="/plantation-drives">Community Drives</Link>
              </li>
              <li className="hover:text-primary-dark cursor-pointer transition-colors">
                <Link to="/about">Youth Green Leaders</Link>
              </li>
              <li className="hover:text-primary-dark cursor-pointer transition-colors">
                <Link to="/plantation-drives">Tree Plantation Events</Link>
              </li>
              <li className="hover:text-primary-dark cursor-pointer transition-colors">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-secondary font-serif tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base text-text-secondary">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary-dark transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary-dark transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/plantation-drives"
                  className="hover:text-primary-dark transition-colors"
                >
                  Plantation Drives
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-primary-dark transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary-dark transition-colors"
                >
                  Contact / Volunteer
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="hover:text-primary-dark transition-colors"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-secondary font-serif tracking-wide">
              Office
            </h3>
            <div className="mt-8">
              <div className="mb-4 text-text-secondary text-base">
                <span className="font-semibold text-primary">
                  Registered Office:
                </span>
                <br />
                189, Adarsh Colony, Daudpur
                <br />
                Alwar, Rajasthan, India – 301001
                <br />
                <br />
                <span className="font-semibold text-primary">
                  Sub Office:
                </span>
                <br />
                245, Malan Ki Gali, Hindu Pada
                <br />
                Vikas Path, Alwar, Rajasthan, India – 301001
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-5 flex-wrap justify-center mt-10">
          <a
            href="https://www.facebook.com/share/1AixPGcMh9/"
            target="_blank"
            rel="noopener noreferrer"
            className={iconCommon}
            title="Facebook"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} color={iconColor} />
          </a>
          <a
            href="https://www.instagram.com/thevanrangfoundation?igsh=ZG1sa20yN2kzcHdp"
            target="_blank"
            rel="noopener noreferrer"
            className={iconCommon}
            title="Instagram"
            aria-label="Instagram"
          >
            <FaInstagram size={18} color={iconColor} />
          </a>
          {/* Threads logo as img */}
          <a
            href="https://www.threads.com/@thevanrangfoundation"
            target="_blank"
            rel="noopener noreferrer"
            className={iconCommon}
            title="Threads"
            aria-label="Threads"
            style={{ display: "inline-flex" }}
          >
            <img
              src="/threads.png"
              alt="Threads"
              className="w-5 h-5"
              style={{
                filter:
                  "invert(39%) sepia(80%) saturate(591%) hue-rotate(340deg) brightness(100%) contrast(95%)",
              }}
            />
          </a>
          <a
            href="https://x.com/vanrangofficial"
            target="_blank"
            rel="noopener noreferrer"
            className={iconCommon}
            title="X (Twitter)"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={18} color={iconColor} />
          </a>
          <a
            href="https://linkedin.com/company/the-vanrang-foundation"
            target="_blank"
            rel="noopener noreferrer"
            className={iconCommon}
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} color={iconColor} />
          </a>
          <a
            href="https://youtube.com/@vanrangfoundation?si=MEivV0bBvFrxjFTP"
            target="_blank"
            rel="noopener noreferrer"
            className={iconCommon}
            title="YouTube"
            aria-label="YouTube"
          >
            <FaYoutube size={18} color={iconColor} />
          </a>
        </div>

        {/* Divider/Bottom Bar */}
        <div className="border-t border-accent/30 mt-12 pt-6 text-center text-text-secondary text-base">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-semibold">
            The Vanrang Foundation
          </span>{" "}
          — One World One Family. All Rights Reserved.
          <br />
          <span className="text-sm text-secondary">
            Tech Partner:{" "}
            <a
              href="https://gowappily.in"
              className="underline hover:text-primary-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              GoWappily Infotech
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}