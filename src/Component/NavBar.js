
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaTree,
  FaImages,
  FaUsers,
  FaBars,
  FaTimes,
} from "react-icons/fa";

// Color definitions for icon backgrounds (using CSS vars)
// Adjusted, adding "Team" (using suitable color mapping)
const iconBgMap = [
  "bg-primary/10 text-primary",          // Home
  "bg-secondary/10 text-secondary",      // About
  "bg-accent/10 text-accent-dark",       // Plantation Drives
  "bg-orange-200 text-secondary",        // Gallery (closer to secondary)
  "bg-green-100 text-primary",           // Team (example green palette, tweak as needed)
  "bg-yellow-100 text-accent-dark",      // Contact / Volunteer
];

const navLinks = [
  { name: "Home", to: "/", icon: FaHome },
  { name: "About", to: "/about", icon: FaInfoCircle },
  { name: "Plantation Drives", to: "/plantation-drives", icon: FaTree },
  { name: "Gallery", to: "/gallery", icon: FaImages },
  { name: "Team", to: "/team", icon: FaUsers },
  { name: "Contact / Volunteer", to: "/contact", icon: FaUsers },
];

const DONATE_URL = "/contact";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For active states
  const activeLink =
    "border-b-2 border-primary text-primary font-semibold";
  const navLink =
    "hover:text-primary transition-colors duration-150 text-text-secondary px-1 pb-1";
  const donateBtn =
    "hidden lg:block bg-primary text-white hover:bg-primary-dark transition-colors duration-150 px-6 py-2 rounded-lg font-semibold shadow-md focus:ring-2 focus:ring-primary-dark focus:outline-none";
  const menuBtn =
    "lg:hidden text-primary hover:text-primary-dark focus:outline-none";
  // Mobile nav item
  const sideNavItem = (idx, path) =>
    `flex items-center gap-4 group ${location.pathname === path
      ? "text-primary font-semibold"
      : "text-text-secondary"
    }`;

  return (
    <>
      {/* -- GLOBAL THEME -- */}
      {/* This should ideally go to index.css or App.js, but included for reference */}
      {/* Theme is included via App.js */}
      {/* TOP NAVBAR */}
      <nav
        className={
          `fixed top-0 left-0 right-0 z-50 ` +
          "w-full flex justify-center py-3 bg-transparent"
        }
        style={isAtTop ? { margin: 0, padding: 0 } : undefined}
        aria-label="Main navigation"
      >
        <div
          className={
            isAtTop
              ? "bg-surface w-full rounded-none shadow-theme px-5 py-3 flex items-center justify-between"
              : "w-[95%] rounded-full md:rounded shadow-theme px-5 py-3 flex items-center justify-between backdrop-blur-md bg-surface/70"
          }
          style={
            isAtTop
              ? { borderTopLeftRadius: 0, borderTopRightRadius: 0 }
              : {
                  backgroundColor: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                }
          }
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              className="h-12"
              style={{ borderRadius: 6, background: "var(--bg)" }}
              alt="Vanrang Foundation Logo"
            />
            {/* Optionally, logo text */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 font-medium text-text-secondary">
            {navLinks.map((link, idx) => (
              <Link
                key={link.to}
                to={link.to}
                className={
                  (location.pathname === link.to ? activeLink : navLink) +
                  " transition-all duration-200"
                }
              >
                {link.name === "Contact / Volunteer" ? "Contact" : link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Donate */}
          <a
            href={DONATE_URL}
            className={donateBtn}
            style={{ letterSpacing: "0.04em" }}
          >
            Donate <span role="img" aria-label="heart">❤️</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className={menuBtn}
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open
              ? <FaTimes size={28} />
              : <FaBars size={28} />
            }
          </button>
        </div>
      </nav>

      {/* SIDE DRAWER MENU (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-fit bg-surface shadow-theme z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          maxWidth: "85vw",
          width: "320px",
          height: "100vh",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="p-6 flex items-center bg-surface border-b border-bg">
          <img src="/logo.png" className="h-10" style={{borderRadius: 5, background: 'var(--bg)'}} alt="Vanrang Foundation Logo" />
        </div>
        <p className="text-text-primary text-xl font-bold mb-4 pl-6 px-2 font-serif tracking-wide">
          THE VANRANG 
          <br/>
          FOUNDATION
        </p>

        <div className="flex flex-col gap-5"></div>
        <div className="px-6 pb-6 space-y-8">
          {/* TOP nav links */}
          <div className="flex flex-col gap-5">
            {navLinks.map(({ to, name, icon: Icon }, idx) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={sideNavItem(idx, to)}
              >
                <span
                  className={
                    iconBgMap[idx] +
                    " p-3 rounded-full shadow-sm group-hover:scale-105 transition-transform duration-150"
                  }
                >
                  <Icon size={18} />
                </span>
                <span className="font-medium">
                  {name === "Contact / Volunteer" ? "Contact" : name}
                </span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-bg my-4"></div>

          {/* CONTACT DETAILS */}
          <div>
            <p className="text-text-primary text-sm font-semibold mb-3 tracking-wide">
              CONTACT DETAILS
            </p>
            <div className="flex flex-col gap-3">
              {/* Phones */}
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <FaUsers size={18} />
                </div>
                <div>
                  <div className="text-text-secondary font-medium">Phone:</div>
                  <a href="tel:+919783068493" className="block text-sm text-primary hover:underline hover:text-primary-dark">+91 9783068493</a>
                  <a href="tel:+919785720688" className="block text-sm text-primary hover:underline hover:text-primary-dark">+91 9785720688</a>
                  <a href="tel:+919256741759" className="block text-sm text-primary hover:underline hover:text-primary-dark">+91 9256741759</a>
                </div>
              </div>
              {/* Emails */}
              <div className="flex items-start gap-3">
                <div className="bg-secondary/10 text-secondary p-3 rounded-full">
                  <FaUsers size={18} />
                </div>
                <div>
                  <div className="text-text-secondary font-medium">E-mail:</div>
                  <a href="mailto:foundervanrang.org@gmail.com" className="block text-sm text-secondary hover:underline hover:text-secondary-dark">
                    foundervanrang.org@gmail.com
                  </a>
                  <a href="mailto:info@thevanrangfoundation.org" className="block text-sm text-secondary hover:underline hover:text-secondary-dark">
                    info@thevanrangfoundation.org
                  </a>
                </div>
              </div>
              {/* Office Location */}
              <div className="flex items-start gap-3">
                <div className="bg-accent/10 text-accent-dark p-3 rounded-full">
                  <FaTree size={18} />
                </div>
                <div>
                  <div className="text-text-secondary font-medium">Registered Office:</div>
                  <a
                    href="https://www.google.com/maps/place/THE+VANRANG+FOUNDATION/@27.572082,76.623481,14z/data=!4m6!3m5!1s0x39729954614bb1cd:0xa27c9c1ee1eab08b!8m2!3d27.5720816!4d76.6234807!16s%2Fg%2F11ylzs1klg?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-accent-dark hover:underline hover:text-accent"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-accent/10 text-accent-dark p-3 rounded-full">
                  <FaTree size={18} />
                </div>
                <div>
                  <div className="text-text-secondary font-medium">Sub Office:</div>
                  <a
                    href="https://www.google.com/maps?ll=27.569098,76.60414&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=9009522746295580750"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-accent-dark hover:underline hover:text-accent"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
          aria-label="Backdrop"
        />
      )}

      {/* MOBILE BOTTOM NAV: Now 6 items, Home in center with Icon */}
      <div
        className="lg:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-[96%] rounded-full shadow-theme flex justify-between items-center px-2 py-2 z-40"
        style={{
          backgroundColor: "rgba(253,246,236,0.85)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      >
        {/* First two after Home */}
        {navLinks.slice(1, 3).map(({to, icon: Icon, name}, idx) => (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center text-xs px-2 py-1 ${
              location.pathname === to
                ? "text-primary font-semibold"
                : "text-text-secondary hover:text-primary"
            }`}
          >
            <Icon size={20} />
            {name === "Plantation Drives" ? "Drives" : name}
          </Link>
        ))}

        {/* Home - Center */}
        <Link
          to="/"
          className={`bg-primary text-white p-4 rounded-full shadow-theme -mt-6 flex flex-col items-center justify-center z-10 border-2 border-surface hover:bg-primary-dark focus:ring-2 focus:ring-primary-dark transition-all duration-200 ${
            location.pathname === "/" ? "ring-2 ring-primary-dark" : ""
          }`}
          style={{ minWidth: 64 }}
        >
          <FaHome size={24} />
          <span className="text-xs mt-0.5">Home</span>
        </Link>

        {/* Next items: Gallery, Team, Contact */}
        {navLinks.slice(3).map(({to, icon: Icon, name}) => (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center text-xs px-2 py-1 ${
              location.pathname === to
                ? "text-primary font-semibold"
                : "text-text-secondary hover:text-primary"
            }`}
          >
            <Icon size={20} />
            {
              name === "Contact / Volunteer"
                ? "Contact"
                : name
            }
          </Link>
        ))}
      </div>
    </>
  );
}

