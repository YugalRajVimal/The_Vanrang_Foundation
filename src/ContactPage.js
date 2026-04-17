import React, { useState, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaLeaf,
  FaBug
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

function BugReportModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    screenshot: null,
    description: ""
  });
  const [screenshotName, setScreenshotName] = useState("");
  const fileInputRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div
      className="fixed z-50 inset-0 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.35)" }}
      aria-modal="true"
      tabIndex={-1}
    >
      <div
        className="relative bg-white rounded-xl p-8 max-w-xl w-full shadow-2xl border-t-8"
        style={{ borderTopColor: COLORS.primary }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close bug report modal"
          className="absolute right-4 top-4 text-xl text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <div className="flex items-center gap-2 mb-4">
          <FaBug style={{ color: COLORS.primary }} size={22} />
          <h2 className="font-bold text-xl" style={{ color: COLORS.primary }}>
            Report a Bug
          </h2>
        </div>
        {submitted ? (
          <div className="text-green-600 font-bold text-center py-4">
            Thank you! Your bug report has been submitted.
          </div>
        ) : (
        <form
          className="space-y-4"
          onSubmit={e => {
            e.preventDefault();
            setSubmitted(true);
            setTimeout(() => {
              setSubmitted(false);
              onClose();
              setForm({
                name: "",
                email: "",
                phone: "",
                title: "",
                screenshot: null,
                description: ""
              });
              setScreenshotName("");
            }, 1600);
            // Here you would handle the bug report form submission
          }}
        >
          <div>
            <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="rounded-lg p-2 w-full outline-none"
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              style={{
                border: `1.5px solid ${COLORS.accent}`,
                color: COLORS.textPrimary,
              }}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="rounded-lg p-2 w-full outline-none"
              placeholder="you@email.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              style={{
                border: `1.5px solid ${COLORS.accent}`,
                color: COLORS.textPrimary,
              }}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
              Phone Number
            </label>
            <input
              type="tel"
              className="rounded-lg p-2 w-full outline-none"
              placeholder="Your phone number"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              style={{
                border: `1.5px solid ${COLORS.accent}`,
                color: COLORS.textPrimary,
              }}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
              Bug Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="rounded-lg p-2 w-full outline-none"
              placeholder="Short bug summary"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
              style={{
                border: `1.5px solid ${COLORS.accent}`,
                color: COLORS.textPrimary,
              }}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
              Screenshot (optional)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="block"
                style={{ border: "none", padding: 0 }}
                onChange={e => {
                  setForm({
                    ...form,
                    screenshot: e.target.files && e.target.files[0] || null,
                  });
                  setScreenshotName(
                    e.target.files && e.target.files[0] ? e.target.files[0].name : ""
                  );
                }}
              />
              {screenshotName && (
                <span className="text-sm text-green-600">{screenshotName}</span>
              )}
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
              Bug Description <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              className="rounded-lg p-2 w-full outline-none h-24"
              placeholder="Please describe the bug in detail"
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              style={{
                border: `1.5px solid ${COLORS.accent}`,
                color: COLORS.textPrimary,
              }}
            />
          </div>
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="bg-[#E76F51] hover:bg-[#F4A261] text-white px-4 py-2 rounded-lg font-semibold transition"
              style={{
                backgroundColor: COLORS.primary
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = COLORS.secondary)}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = COLORS.primary)}
            >
              Submit Bug
            </button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
}

export default function ContactVolunteer() {
  const [bugModalOpen, setBugModalOpen] = useState(false);

  return (
    <section
      className="py-20 pt-32"
      style={{ backgroundColor: COLORS.background }}
    >
      <BugReportModal open={bugModalOpen} onClose={() => setBugModalOpen(false)} />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Report a Bug Button (top right corner, mobile fixed bottom right) */}
        <div className="relative">
          <button
            className="absolute right-0 top-0 flex items-center gap-2 px-4 py-2 bg-[#E76F51] text-white rounded-lg font-semibold shadow-md hover:bg-[#F4A261] transition z-20"
            style={{
              backgroundColor: COLORS.primary
            }}
            onClick={() => setBugModalOpen(true)}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = COLORS.secondary)}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = COLORS.primary)}
          >
            <FaBug size={18} />
            Report a Bug
          </button>
        </div>
        <div className="grid lg:grid-cols-1 gap-16 mt-12">
          {/* LEFT INFO PANEL */}
          <div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
            style={{ color: COLORS.primary }}
          >

            Connect with The Vanrang Foundation
          </h1>
            <h2
              className="text-3xl font-bold mb-8 font-serif"
              style={{ color: COLORS.primary }}
            >
              Connect, Contribute, Create Change
            </h2>
            {/* Country Badge */}
            <div
              className="rounded-full inline-flex items-center gap-3 px-5 py-2 mb-6 font-semibold"
              style={{ backgroundColor: COLORS.primary, color: COLORS.surface }}
            >
              <span>🇮🇳 India</span>
            </div>
            {/* Responsive 2 column info - 1 col on mobile, 2 col on md+ */}
            <div className="mb-8 leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-8" style={{ color: COLORS.textPrimary }}>
              <div className="flex flex-col justify-between">
                <div className="mb-3">
                  <span className="font-semibold" style={{ color: COLORS.secondary }}>
                    Registered Office:
                  </span>
                  <br />
                  189, Adarsh Colony, Daudpur<br />
                  Alwar, Rajasthan, India – 301001
                </div>
                {/* Phones */}
                <div className="flex items-start gap-3 mt-6">
                  <FaPhone style={{ color: COLORS.primary }} className="mt-1" />
                  <div>
                    <p className="font-semibold" style={{ color: COLORS.primary }}>
                      Call Us For Queries
                    </p>
                    <div className="flex flex-col space-y-1 font-medium" style={{ color: COLORS.secondary }}>
                      <a href="tel:+919783068493" className="hover:underline">{"+91 9783068493"}</a>
                      <a href="tel:+919785720688" className="hover:underline">{"+91 9785720688"}</a>
                      <a href="tel:+919256741759" className="hover:underline">{"+91 9256741759"}</a>
                    </div>
                  </div>
                </div>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919783068493"
                  className="flex items-center gap-3 mt-5 font-semibold hover:underline"
                  style={{ color: COLORS.primary }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                  WhatsApp – Start a Green Conversation
                </a>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="font-semibold" style={{ color: COLORS.secondary }}>
                    Sub Office:
                  </span>
                  <br />
                  245, Malan Ki Gali, Hindu Pada<br />
                  Vikas Path, Alwar, Rajasthan, India – 301001
                </div>
                {/* Emails */}
                <div className="flex items-start gap-3 mt-6">
                  <FaEnvelope style={{ color: COLORS.primary }} className="mt-1" />
                  <div>
                    <p className="font-semibold" style={{ color: COLORS.primary }}>
                      Email for Enquiries
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
            </div>
          </div>

           {/* Header */}
        <div className="mt-4">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
            style={{ color: COLORS.primary }}
          >
            Volunteer Registration Form – The Vanrang Foundation

          </h1>
          <div className="font-medium mb-3" style={{ color: COLORS.textSecondary }}>
            Thank you for your interest in volunteering with The Vanrang Foundation.
          </div>
          <div className="mb-1" style={{ color: COLORS.textSecondary, fontSize: 16 }}>
            Please fill out this form to register as a volunteer. Our team will contact you shortly.
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
              Volunteer Registration Form
            </h2>

            <form className="space-y-5">
              {/* Email */}
              <div>
                <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="rounded-lg p-3 w-full outline-none"
                  placeholder="Your Email"
                  style={{
                    border: `1.5px solid ${COLORS.accent}`,
                    color: COLORS.textPrimary
                  }}
                />
              </div>
              {/* Full Name */}
              <div>
                <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="rounded-lg p-3 w-full outline-none"
                  placeholder="Your Full Name"
                  style={{
                    border: `1.5px solid ${COLORS.accent}`,
                    color: COLORS.textPrimary
                  }}
                />
              </div>
              {/* Mother's/Father's Name */}
              <div>
                <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                  Mother Name / Father Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="rounded-lg p-3 w-full outline-none"
                  placeholder="Parent Name"
                  style={{
                    border: `1.5px solid ${COLORS.accent}`,
                    color: COLORS.textPrimary
                  }}
                />
              </div>
              {/* Date of Birth */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    className="rounded-lg p-3 w-full outline-none"
                    style={{
                      border: `1.5px solid ${COLORS.accent}`,
                      color: COLORS.textPrimary
                    }}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                    Date
                  </label>
                  <input
                    type="date"
                    className="rounded-lg p-3 w-full outline-none"
                    style={{
                      border: `1.5px solid ${COLORS.accent}`,
                      color: COLORS.textPrimary
                    }}
                  />
                </div>
              </div>
              {/* Gender */}
              <div>
                <label className="block font-semibold mb-2" style={{ color: COLORS.textPrimary }}>
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-6 items-center">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      required
                      value="Male"
                      className="accent-orange-600"
                    />
                    Male
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="accent-orange-600"
                    />
                    Female
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="Prefer not to say"
                      className="accent-orange-600"
                    />
                    Prefer not to say
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      className="accent-orange-600"
                    />
                    Other
                  </label>
                </div>
              </div>
              {/* Mobile Number */}
              <div>
                <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="rounded-lg p-3 w-full outline-none"
                  placeholder="Your Mobile Number"
                  style={{
                    border: `1.5px solid ${COLORS.accent}`,
                    color: COLORS.textPrimary
                  }}
                />
              </div>
              {/* Current Address */}
              <div>
                <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                  Current Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  className="rounded-lg p-3 w-full outline-none h-20"
                  placeholder="Enter your full current address"
                  style={{
                    border: `1.5px solid ${COLORS.accent}`,
                    color: COLORS.textPrimary
                  }}
                />
              </div>
              {/* City & State */}
              <div>
                <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                  City &amp; State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="rounded-lg p-3 w-full outline-none"
                  placeholder="City & State"
                  style={{
                    border: `1.5px solid ${COLORS.accent}`,
                    color: COLORS.textPrimary
                  }}
                />
              </div>
              {/* Current Occupation */}
              <div>
                <label className="block font-semibold mb-2" style={{ color: COLORS.textPrimary }}>
                  Current Occupation <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-6 items-center">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="occupation"
                      value="Student"
                      required
                      className="accent-orange-600"
                    />
                    Student
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="occupation"
                      value="Working Professional"
                      className="accent-orange-600"
                    />
                    Working Professional
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="occupation"
                      value="Self-employed"
                      className="accent-orange-600"
                    />
                    Self-employed
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="occupation"
                      value="Other"
                      className="accent-orange-600"
                    />
                    Other
                  </label>
                </div>
              </div>
              {/* Areas of Interest */}
              <div>
                <label className="block font-semibold mb-2" style={{ color: COLORS.textPrimary }}>
                  Areas of Interest <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-6 items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="areas" value="Education Support" required className="accent-orange-600"/>
                    Education Support
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="areas" value="Social Media & Content" className="accent-orange-600"/>
                    Social Media &amp; Content
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="areas" value="Event Management" className="accent-orange-600"/>
                    Event Management
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="areas" value="Fundraising" className="accent-orange-600"/>
                    Fundraising
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="areas" value="Field Work" className="accent-orange-600"/>
                    Field Work
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="areas" value="Administration" className="accent-orange-600"/>
                    Administration
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="areas" value="Graphic Design" className="accent-orange-600"/>
                    Graphic Design
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="areas" value="Other" className="accent-orange-600"/>
                    Other
                  </label>
                </div>
              </div>
              {/* Preferred Mode of Volunteering */}
              <div>
                <label className="block font-semibold mb-2" style={{ color: COLORS.textPrimary }}>
                  Preferred Mode of Volunteering <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-6 items-center">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="mode" value="Online" required className="accent-orange-600"/>
                    Online
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="mode" value="Offline" className="accent-orange-600"/>
                    Offline
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="mode" value="Both" className="accent-orange-600"/>
                    Both
                  </label>
                </div>
              </div>
              {/* Availability */}
              <div>
                <label className="block font-semibold mb-2" style={{ color: COLORS.textPrimary }}>
                  Availability <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-6 items-center">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="availability" value="Weekdays" required className="accent-orange-600"/>
                    Weekdays
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="availability" value="Weekends" className="accent-orange-600"/>
                    Weekends
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="availability" value="Flexible" className="accent-orange-600"/>
                    Flexible
                  </label>
                </div>
              </div>
              {/* Hours per week */}
              <div>
                <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                  How many hours can you volunteer per week? <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  required
                  className="rounded-lg p-3 w-full outline-none"
                  placeholder="e.g. 5"
                  style={{
                    border: `1.5px solid ${COLORS.accent}`,
                    color: COLORS.textPrimary
                  }}
                />
              </div>
              {/* Prior volunteering experience */}
              <div>
                <label className="block font-semibold mb-2" style={{ color: COLORS.textPrimary }}>
                  Do you have prior volunteering experience? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-8">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="prior-volunteering" value="Yes" required className="accent-orange-600" />
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="prior-volunteering" value="No" className="accent-orange-600" />
                    No
                  </label>
                </div>
              </div>
              {/* If yes, describe briefly */}
              <div>
                <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                  If yes, please describe briefly
                </label>
                <textarea
                  className="rounded-lg p-3 w-full outline-none h-20"
                  placeholder="Tell us about your experience"
                  style={{
                    border: `1.5px solid ${COLORS.accent}`,
                    color: COLORS.textPrimary
                  }}
                />
              </div>
              {/* Why volunteer */}
              <div>
                <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                  Why do you want to volunteer with The Vanrang Foundation?
                </label>
                <textarea
                  className="rounded-lg p-3 w-full outline-none h-20"
                  placeholder="What inspires you to volunteer with us?"
                  style={{
                    border: `1.5px solid ${COLORS.accent}`,
                    color: COLORS.textPrimary
                  }}
                />
              </div>
              {/* Special Skills */}
              <div>
                <label className="block font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                  Any special skills you have?
                </label>
                <textarea
                  className="rounded-lg p-3 w-full outline-none h-20"
                  placeholder="List any relevant skills"
                  style={{
                    border: `1.5px solid ${COLORS.accent}`,
                    color: COLORS.textPrimary
                  }}
                />
              </div>
              {/* Agreement */}
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: COLORS.primary }}
              >
                <input
                  type="checkbox"
                  id="agree"
                  required
                  className="accent-orange-600"
                  style={{
                    accentColor: COLORS.primary
                  }}
                />
                <label htmlFor="agree">
                  I confirm that the information provided above is true and I agree to volunteer with The Vanrang Foundation as per organizational guidelines. <span className="text-red-500">*</span>
                </label>
              </div>
              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold transition mt-2"
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.surface
                }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = COLORS.secondary)}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = COLORS.primary)}
              >
                Submit Registration
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
      <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-7xl mx-auto mx-4 px-4">
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