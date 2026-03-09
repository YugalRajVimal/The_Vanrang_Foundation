import { useState } from "react";

// THEME COLORS
const COLORS = {
  primary: "#E76F51",         // Warm NGO Red
  secondary: "#F4A261",       // Soft Orange
  accent: "#E9C46A",          // Warm Yellow
  background: "#FDF6EC",      // Light Beige
  surface: "#FFFFFF",         // Card
  textPrimary: "#2D2D2D",
  textSecondary: "#6B6B6B",
};

// Images from AboutUsPage.js (lines 5-12)
const localImages = [
  "/assets/Img1.jpeg",
  "/assets/Img2.jpeg",
  "/assets/Img3.jpeg",
  "/assets/Img4.jpeg",
  "/assets/Img5.jpeg",
];

const categories = [
  "ALL IMAGES",
  "PLANTATION DRIVES",
  "VOLUNTEERS",
  "SCHOOL PROGRAMS",
  "NATURE RESTORATION",
];

// Map local images to gallery items with categories and descriptions
const images = [
  {
    category: "PLANTATION DRIVES",
    title: "Empowering Rural Reforestation",
    src: localImages[0],
  },
  {
    category: "VOLUNTEERS",
    title: "Youth Leaders for a Greener Tomorrow",
    src: localImages[1],
  },
  {
    category: "SCHOOL PROGRAMS",
    title: "Eco-Awareness at Schools",
    src: localImages[2],
  },
  {
    category: "NATURE RESTORATION",
    title: "Restoring Native Forests",
    src: localImages[3],
  },
  {
    category: "PLANTATION DRIVES",
    title: "Green Drives in Villages",
    src: localImages[4],
  },
  {
    category: "VOLUNTEERS",
    title: "Community Volunteer Action",
    src: localImages[2],
  },
];

export default function PlantationGallery() {
  const [active, setActive] = useState("ALL IMAGES");

  const filtered =
    active === "ALL IMAGES"
      ? images
      : images.filter((img) => img.category === active);

  return (
    <section
      className="py-20 pt-32 px-6"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2
          className="text-3xl md:text-6xl font-bold mb-2 font-serif"
          style={{
            color: COLORS.primary,
            textShadow: "0 1px 16px rgba(231,111,81,0.04)",
          }}
        >
          The Vanrang Foundation Gallery
        </h2>

        <p
          className="mt-2 max-w-2xl font-serif"
          style={{
            color: COLORS.secondary,
          }}
        >
          Inspiring change through tree plantation, community action, youth leadership, and nature restoration. Explore our ongoing impact across India!
        </p>
      </div>

      {/* Category Filter */}
      <div
        className="max-w-7xl mx-auto border-t border-b py-4 mb-14"
        style={{
          borderColor: COLORS.accent,
        }}
      >
        <div className="flex flex-wrap gap-6 text-sm font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`transition pb-1 font-serif ${
                active === cat
                  ? ""
                  : "hover:opacity-80"
              }`}
              style={{
                color:
                  active === cat ? COLORS.primary : COLORS.secondary,
                borderBottom:
                  active === cat
                    ? `2px solid ${COLORS.primary}`
                    : "2px solid transparent",
                fontWeight: active === cat ? 700 : 500,
                background: "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtered.map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-3xl shadow"
            style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.accent}`,
            }}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
              style={{ backgroundColor: COLORS.accent }}
            />

            {/* Hover Overlay */}
            <div
              className="absolute inset-0 transition flex items-end p-6 opacity-0 group-hover:opacity-100"
              style={{
                background: `rgba(231,111,81,0.86)`, // primary w/ strong overlay
              }}
            >
              <div>
                <span
                  className="text-xs px-3 py-1 rounded-full font-serif font-semibold"
                  style={{
                    background: COLORS.accent,
                    color: COLORS.textPrimary,
                    letterSpacing: "0.03em",
                  }}
                >
                  {img.category}
                </span>
                <h3
                  className="text-lg font-semibold mt-2 font-serif"
                  style={{ color: COLORS.surface }}
                >
                  {img.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}