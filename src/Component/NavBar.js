
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

  return (
    <>
      {/* TOP NAVBAR */}
      <nav
        className={
          `fixed top-0 left-0 right-0 z-50 ` +
          (isAtTop
            ? "w-full flex justify-center py-3 bg-transparent"
            : "w-full flex justify-center py-3 bg-transparent"
          )
        }
        style={isAtTop ? { margin: 0, padding: 0 } : undefined}
      >
        <div
          className={
            isAtTop
              ? "bg-white w-full rounded-none shadow-lg px-5 py-3 flex items-center justify-between"
              : "bg-white w-[95%] rounded-full md:rounded shadow-lg px-5 py-3 flex items-center justify-between"
          }
          style={isAtTop ? { borderTopLeftRadius: 0, borderTopRightRadius: 0 } : undefined}
        >
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
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </nav>

      {/* SIDE DRAWER MENU (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-fit bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          // Make sidebar max width and overflow scrollable for small screens only.
          maxWidth: '85vw',
          width: '320px',
          // On small screens only, make it scrollable
          height: '100vh',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {/* Header */}
        <div className="p-6 flex items-center bg-white">
          <img src="/logo.png" className="h-10" alt="Vanrang Foundation Logo" />
          {/* Removed Close button from sidebar itself */}
        </div>

        <p className="text-gray-900 text-xl font-bold mb-4 pl-6 px-2 font-serif tracking-wide">
          THE VANRANG 
          <br/>
          FOUNDATION
        </p>

        <div className="flex flex-col gap-5"></div>
        <div className="px-6 pb-6 space-y-8">
          {/* TOP 5 LINKS */}
          <div className="flex flex-col gap-5">
            {/* Home */}
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <FaHome size={18} />
              </div>
              <span className="text-gray-700 font-medium">Home</span>
            </Link>

            {/* About */}
            <Link to="/about" onClick={() => setOpen(false)} className="flex items-center gap-4">
              <div className="bg-pink-100 text-pink-500 p-3 rounded-full">
                <FaInfoCircle size={18} />
              </div>
              <span className="text-gray-700 font-medium">About</span>
            </Link>

            {/* Plantation Drives */}
            <Link to="/plantation-drives" onClick={() => setOpen(false)} className="flex items-center gap-4">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <FaTree size={18} />
              </div>
              <span className="text-gray-700 font-medium">Plantation Drives</span>
            </Link>

            {/* Gallery */}
            <Link to="/gallery" onClick={() => setOpen(false)} className="flex items-center gap-4">
              <div className="bg-blue-100 text-blue-500 p-3 rounded-full">
                <FaImages size={18} />
              </div>
              <span className="text-gray-700 font-medium">Gallery</span>
            </Link>

            {/* Contact / Volunteer */}
            <Link to="/contact" onClick={() => setOpen(false)} className="flex items-center gap-4">
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
                <FaUsers size={18} />
              </div>
              <span className="text-gray-700 font-medium">Contact / Volunteer</span>
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-[#E0E0E0] my-4"></div>

          {/* CONTACT DETAILS */}
          <div>
            <p className="text-gray-900 text-sm font-semibold mb-3 tracking-wide">
              CONTACT DETAILS
            </p>
            <div className="flex flex-col gap-3">
              {/* Phones */}
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                  <FaUsers size={18} />
                </div>
                <div>
                  <div className="text-gray-700 font-medium">Phone:</div>
                  <a href="tel:+919783068493" className="block text-sm text-blue-800 hover:underline">+91 9783068493</a>
                  <a href="tel:+919785720688" className="block text-sm text-blue-800 hover:underline">+91 9785720688</a>
                  <a href="tel:+919256741759" className="block text-sm text-blue-800 hover:underline">+91 9256741759</a>
                </div>
              </div>
              {/* Emails */}
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                  <FaUsers size={18} />
                </div>
                <div>
                  <div className="text-gray-700 font-medium">E-mail:</div>
                  <a href="mailto:foundervanrang.org@gmail.com" className="block text-sm text-purple-800 hover:underline">
                    foundervanrang.org@gmail.com
                  </a>
                  <a href="mailto:info@thevanrangfoundation.org" className="block text-sm text-purple-800 hover:underline">
                    info@thevanrangfoundation.org
                  </a>
                </div>
              </div>
              {/* Office Location */}
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 p-3 rounded-full">
                  <FaTree size={18} />
                </div>
                <div>
                  <div className="text-gray-700 font-medium">Registered Office:</div>
                  <a
                    href="https://www.google.com/maps/place/THE+VANRANG+FOUNDATION/@27.572082,76.623481,14z/data=!4m6!3m5!1s0x39729954614bb1cd:0xa27c9c1ee1eab08b!8m2!3d27.5720816!4d76.6234807!16s%2Fg%2F11ylzs1klg?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-green-800 hover:underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 p-3 rounded-full">
                  <FaTree size={18} />
                </div>
                <div>
                  <div className="text-gray-700 font-medium">Sub Office:</div>
                  <a
                    href="https://www.google.com/maps?ll=27.569098,76.60414&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=9009522746295580750"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-green-800 hover:underline"
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

      {/* MOBILE BOTTOM NAV: 5 nav items, Home in center with Icon */}
      <div className="lg:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-[92%] bg-white rounded-full shadow-lg flex justify-between items-center px-3 py-2 z-40">
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
