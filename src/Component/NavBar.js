
import { useState } from "react";
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

const navLinks = [
  { name: "Home", to: "/", icon: FaHome },
  { name: "About", to: "/about", icon: FaInfoCircle },
  { name: "Plantation Drives", to: "/plantation-drives", icon: FaTree },
  { name: "Gallery", to: "/gallery", icon: FaImages },
  { name: "Contact / Volunteer", to: "/contact", icon: FaUsers },
];

const DONATE_URL = "/contact";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="w-full flex justify-center py-3 bg-transparent fixed top-0 z-50">
        <div className="bg-white w-[95%]  rounded-full md:rounded shadow-lg px-5 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-12" alt="Vanrang Foundation Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 font-medium text-[#2E7D32]">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={
                  location.pathname === link.to
                    ? "border-b-2 border-[#4CAF50]"
                    : ""
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Donate */}
          <a
            href={DONATE_URL}
            className="hidden lg:block bg-[#2E7D32] text-white px-5 py-2 rounded-lg"
          >
            Donate <span role="img" aria-label="sapling">🌱</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#2E7D32]"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FaBars size={28} />
          </button>
        </div>
      </nav>

      {/* SIDE DRAWER MENU (Hamburger, mobile view) */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-white shadow-lg z-50 transform transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center">
          <img src="/logo.png" className="h-10" alt="Vanrang Foundation Logo" />
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <FaTimes size={26} />
          </button>
        </div>

        <nav className="px-8 mt-12 flex flex-col gap-8 text-lg font-medium text-[#2E7D32]">
          {navLinks.map(({ name, to, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={
                location.pathname === to
                  ? "flex items-center gap-3 text-[#1E88E5] font-bold"
                  : "flex items-center gap-3"
              }
            >
              <Icon size={20} />
              {name}
            </Link>
          ))}
        </nav>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
          aria-label="Backdrop"
        />
      )}

      {/* MOBILE BOTTOM NAV: 5 nav items, Home in center with Icon */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] bg-white rounded-full shadow-lg flex justify-between items-center px-3 py-2 z-40">
        {/* About */}
        <Link
          to="/about"
          className={`flex flex-col items-center text-xs px-2 py-1 ${
            location.pathname === "/about"
              ? "text-[#1E88E5] font-semibold"
              : "text-gray-500"
          }`}
        >
          <FaInfoCircle size={20} />
          About
        </Link>
        {/* Plantation Drives */}
        <Link
          to="/plantation-drives"
          className={`flex flex-col items-center text-xs px-2 py-1 ${
            location.pathname === "/plantation-drives"
              ? "text-[#1E88E5] font-semibold"
              : "text-gray-500"
          }`}
        >
          <FaTree size={20} />
          Drives
        </Link>
        {/* Home - Center with emphasis */}
        <Link
          to="/"
          className={`bg-[#1E88E5] text-white p-4 rounded-full shadow-lg -mt-6 flex flex-col items-center justify-center z-10 border-2 border-white ${
            location.pathname === "/" ? "ring-2 ring-[#4CAF50]" : ""
          }`}
          style={{ minWidth: 64 }}
        >
          <FaHome size={24} />
          <span className="text-xs mt-0.5">Home</span>
        </Link>
        {/* Gallery */}
        <Link
          to="/gallery"
          className={`flex flex-col items-center text-xs px-2 py-1 ${
            location.pathname === "/gallery"
              ? "text-[#1E88E5] font-semibold"
              : "text-gray-500"
          }`}
        >
          <FaImages size={20} />
          Gallery
        </Link>
        {/* Contact / Volunteer */}
        <Link
          to="/contact"
          className={`flex flex-col items-center text-xs px-2 py-1 ${
            location.pathname === "/contact"
              ? "text-[#1E88E5] font-semibold"
              : "text-gray-500"
          }`}
        >
          <FaUsers size={20} />
          Contact
        </Link>
      </div>
    </>
  );
}
