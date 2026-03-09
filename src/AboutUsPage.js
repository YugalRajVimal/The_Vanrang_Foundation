import { useState, useEffect } from "react";
import { FaLeaf } from "react-icons/fa";

// Theme Colors
const COLORS = {
  primary: "#E76F51",
  secondary: "#F4A261",
  accent: "#E9C46A",
  background: "#FDF6EC",
  card: "#FFFFFF",
  textPrimary: "#2D2D2D",
  textSecondary: "#6B6B6B",
  // For borders/shadows, using slightly darker accent/secondary as needed
  border: "#F4A261",
  surfaceShadow: "rgba(231, 111, 81, 0.15)",
};

// Images reused from GalleryCarousel.js (lines 3-11)
const images = [
  "/assets/Img1.jpeg",
  "/assets/Img2.jpeg",
  "/assets/Img3.jpeg",
  "/assets/Img4.jpeg",
  "/assets/Img5.jpeg",
  "/assets/Img6.jpeg",
];

export default function AboutPage() {
  // Handler to smoothly scroll to top (for anchor links)
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  // State for fade animation and image index
  const [index, setIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  // Image carousel logic
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setFadeState("fade-out");
    }, 3500);

    const timeout2 = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFadeState("fade-in");
    }, 4000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [index]);

  return (
    <section
      className="pt-20 min-h-[100vh]"
      style={{
        backgroundColor: COLORS.background,
        color: COLORS.textPrimary,
      }}
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-16 gap-10 items-center">
        <div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 text-center font-serif"
            style={{
              color: COLORS.primary,
            }}
          >
            The Vanrang Foundation
            <br />
            <span
              className="text-2xl md:text-3xl font-semibold block mt-2 font-serif"
              style={{
                color: COLORS.secondary,
              }}
            >
              One World One Family
            </span>
          </h1>
        </div>
        {/* Stats (unchanged, but style below) */}
      </div>

      {/* STORY SECTION with fading image carousel */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full max-w-md h-[320px] flex items-center justify-center mx-auto">
          {images.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`The Vanrang Foundation Work ${i + 1}`}
              className={`rounded-2xl shadow-lg object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-700 ease-in-out 
                ${i === index ? "opacity-100 z-10 fade-ani-in" : "opacity-0 z-0 fade-ani-out"}`}
              style={{
                minHeight: 280,
                maxHeight: 350,
                boxShadow: `0 4px 32px 0 ${COLORS.surfaceShadow}`,
                border: `3px solid ${COLORS.accent}`,
                transition: "opacity 0.7s ease-in-out",
              }}
            />
          ))}
          <style>
            {`
              .fade-ani-in { animation: fadeIn 0.8s; }
              .fade-ani-out { animation: fadeOut 0.8s; }
              @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
              @keyframes fadeOut { from { opacity:1; } to { opacity:0; } }
            `}
          </style>
        </div>
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 font-serif"
            style={{
              color: COLORS.primary,
            }}
          >
            Greening Communities. Inspiring Change.
          </h2>
          <p
            className="mb-6 leading-relaxed"
            style={{
              color: COLORS.textSecondary,
              opacity: 0.95,
              fontSize: '1.12rem',
            }}
          >
            The Vanrang Foundation is driven by a belief that collective action can create thriving green spaces for everyone. By planting trees, nurturing young minds, and empowering communities, we build a future where people and nature flourish together.
          </p>
          <p
            className="leading-relaxed mb-8"
            style={{
              color: COLORS.textSecondary,
              opacity: 0.92,
              fontSize: '1.08rem',
            }}
          >
            Our initiatives unite rural and urban communities, inspire youth to take climate action, and foster lasting stewardship for our planet through education and real-world impact.
          </p>
          {/* CTA: Volunteer/Contact in the story section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-lg font-semibold shadow-lg transition text-base"
              style={{
                background: COLORS.primary,
                color: "#fff",
                letterSpacing: "0.03em",
                boxShadow: `0px 2px 18px 0px ${COLORS.surfaceShadow}`,
                border: `2px solid ${COLORS.primary}`,
              }}
              onClick={scrollToTop}
            >
              Become a Volunteer
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-lg font-semibold shadow transition text-base border"
              style={{
                background: COLORS.card,
                color: COLORS.primary,
                border: `2px solid ${COLORS.secondary}`,
                letterSpacing: "0.03em",
              }}
              onClick={scrollToTop}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center mb-10">
        <div>
          <h2
            className="text-4xl font-bold font-serif"
            style={{ color: COLORS.primary }}
          >
            200K+
          </h2>
          <p
            className="mt-2 font-medium"
            style={{ color: COLORS.secondary }}
          >
            Trees Planted
          </p>
        </div>
        <div>
          <h2
            className="text-4xl font-bold font-serif"
            style={{ color: COLORS.primary }}
          >
            10K+
          </h2>
          <p
            className="mt-2 font-medium"
            style={{ color: COLORS.secondary }}
          >
            Youth & Volunteers
          </p>
        </div>
        <div>
          <h2
            className="text-4xl font-bold font-serif"
            style={{ color: COLORS.primary }}
          >
            350+
          </h2>
          <p
            className="mt-2 font-medium"
            style={{ color: COLORS.secondary }}
          >
            Community Programs
          </p>
        </div>
        <div>
          <h2
            className="text-4xl font-bold font-serif"
            style={{ color: COLORS.primary }}
          >
            100+
          </h2>
          <p
            className="mt-2 font-medium"
            style={{ color: COLORS.secondary }}
          >
            Schools Reached
          </p>
        </div>
      </div>

      {/* MISSION & VISION */}
      <div
        className="py-20"
        style={{ background: COLORS.accent + "22" }} // very subtle accent yellow bg
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div
            className="p-10 rounded-xl shadow flex flex-col justify-between border-2"
            style={{
              background: COLORS.card,
              borderColor: COLORS.accent,
              boxShadow: `0 2px 18px 0 ${COLORS.surfaceShadow}`,
            }}
          >
            <div>
              <FaLeaf
                className="mb-4"
                size={30}
                style={{
                  color: COLORS.primary,
                }}
              />
              <h3
                className="text-2xl font-bold mb-4 font-serif"
                style={{
                  color: COLORS.secondary,
                }}
              >
                Our Mission
              </h3>
              <p
                style={{
                  color: COLORS.textSecondary,
                  opacity: 0.92,
                }}
              >
                To restore, protect, and sustain nature by leading large-scale tree plantation drives, promoting environmental education, and empowering communities—especially youth—to be champions of a greener, healthier world for all.
              </p>
            </div>
            {/* CTA: Plantation Drives under mission */}
            <div className="mt-6">
              <a
                href="/plantation-drives"
                className="inline-block px-5 py-2 rounded-lg font-semibold shadow transition text-base"
                style={{
                  background: COLORS.secondary,
                  color: "#fff",
                  letterSpacing: "0.02em",
                  border: `2px solid ${COLORS.secondary}`,
                }}
                onClick={scrollToTop}
              >
                See Plantation Drives
              </a>
            </div>
          </div>
          <div
            className="p-10 rounded-xl shadow flex flex-col justify-between border-2"
            style={{
              background: COLORS.card,
              borderColor: COLORS.accent,
              boxShadow: `0 2px 18px 0 ${COLORS.surfaceShadow}`,
            }}
          >
            <div>
              <FaLeaf
                className="mb-4"
                size={30}
                style={{
                  color: COLORS.secondary,
                }}
              />
              <h3
                className="text-2xl font-bold mb-4 font-serif"
                style={{
                  color: COLORS.primary,
                }}
              >
                Our Vision
              </h3>
              <p
                style={{
                  color: COLORS.textSecondary,
                  opacity: 0.92,
                }}
              >
                A world where every community values trees, protects biodiversity, and works together to nurture the environment—ensuring a safe, green planet for generations to come.
              </p>
            </div>
            {/* CTA: Gallery under vision */}
            <div className="mt-6">
              <a
                href="/gallery"
                className="inline-block px-5 py-2 rounded-lg font-semibold shadow transition text-base"
                style={{
                  background: COLORS.primary,
                  color: "#fff",
                  border: `2px solid ${COLORS.primary}`,
                }}
                onClick={scrollToTop}
              >
                View Our Gallery
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WHY TREE PLANTATION */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 font-serif"
          style={{
            color: COLORS.primary,
          }}
        >
          Why Tree Plantation Matters
        </h2>
        <p
          className="max-w-3xl mx-auto leading-relaxed mb-8"
          style={{
            color: COLORS.textSecondary,
            opacity: 0.9,
          }}
        >
          Trees are the heart of thriving ecosystems. They clean our air, provide vital habitats, enrich soil, regulate water cycles, and strengthen communities. Tree plantation drives combat climate change, restore hope to degraded lands, and inspire cooperation for a greener future—starting with today's actions.
        </p>
        {/* CTA: Plantation Drives & Volunteer */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/plantation-drives"
            className="inline-block px-7 py-3 rounded-lg font-semibold shadow-lg transition text-base"
            style={{
              background: COLORS.secondary,
              color: "#fff",
              letterSpacing: "0.03em",
              border: `2px solid ${COLORS.secondary}`,
              boxShadow: `0px 2px 18px 0px ${COLORS.surfaceShadow}`,
            }}
            onClick={scrollToTop}
          >
            Explore Plantation Drives
          </a>
          <a
            href="/contact"
            className="inline-block px-7 py-3 rounded-lg font-semibold shadow transition text-base border"
            style={{
              background: COLORS.card,
              color: COLORS.primary,
              border: `2px solid ${COLORS.primary}`,
            }}
            onClick={scrollToTop}
          >
            Join as a Volunteer
          </a>
        </div>
      </div>
    </section>
  );
}