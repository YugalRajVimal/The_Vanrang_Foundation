import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Color theme:
// Primary: #2E7D32
// Secondary: #4CAF50
// Accent: #A5D6A7
// Background: white

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Plantation Drives", to: "/plantation-drives" },
  { name: "Gallery", to: "/gallery" },
  { name: "Contact / Volunteer", to: "/contact" },
];

// Replace with your external donation link:
const DONATE_URL = "/contact";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="w-full border-b overflow-hidden w-screen"
      style={{ backgroundColor: "#fff", borderColor: "#A5D6A7" }}
    >
      <div className="mx-auto md:px-4">
        <div className="flex items-center justify-between py-2 h-fit">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="The Vanrang Foundation Logo - Green tree"
              className="h-16 rounded-sm"
            />
            <span className="flex flex-col leading-tight">
              <span
                className="font-bold text-lg tracking-wide"
                style={{ color: "#2E7D32" }}
              >
                The Vanrang Foundation
              </span>
              <span
                className="text-xs font-semibold tracking-wider"
                style={{ color: "#4CAF50" }}
              >
                One World One Family
              </span>
            </span>
          </div>
          {/* Desktop Menu */}
          <div
            className="hidden lg:flex items-center gap-8 font-medium"
            style={{ color: "#2E7D32" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={
                  "hover:text-[#4CAF50] transition" +
                  (location.pathname === link.to
                    ? " text-[#4CAF50] border-b-2 border-[#4CAF50]"
                    : "")
                }
                style={{
                  transition: "color 0.2s",
                  paddingBottom: "2px",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={DONATE_URL}
              className="px-5 py-2 rounded-lg font-semibold flex items-center gap-2 shadow"
              style={{
                backgroundColor: "#2E7D32",
                color: "white",
                boxShadow: "0 1px 8px 0 #A5D6A722",
                textDecoration: "none",
              }}
              type="button"
            >
              Donate to Green Causes{" "}
              <span role="img" aria-label="heart">
                🌱
              </span>
            </a>
          </div>
          {/* Mobile Button */}
          <button
            className="lg:hidden scale-[2] text-[#2E7D32] mr-4"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            type="button"
          >
            {open ? (
              <span role="img" aria-label="close" title="Close">
                &times;
              </span>
            ) : (
              <span role="img" aria-label="menu" title="Menu">
                &#9776;
              </span>
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {open && (
          <div
            className="lg:hidden py-4 space-y-4 px-4"
            style={{ backgroundColor: "#E8F5E9" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={
                  "block font-medium" +
                  (location.pathname === link.to
                    ? " text-[#4CAF50] font-semibold"
                    : "")
                }
                style={{ color: "#2E7D32" }}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/contact"
              className="w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-1"
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                boxShadow: "0 1px 8px 0 rgba(214, 253, 215, 0.33)",
                textDecoration: "none",
              }}
              // onClick={() => setOpen(false)}
            >
              Donate to Green Causes{" "}
              <span role="img" aria-label="heart">
                🌱
              </span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}