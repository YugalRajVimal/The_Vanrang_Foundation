import { FaMapMarkerAlt, FaTree, FaUsers } from "react-icons/fa";

// Theme color palette
const COLORS = {
  primary: "#E76F51",      // Warm NGO Red
  secondary: "#F4A261",    // Soft Orange
  accent: "#E9C46A",       // Warm Yellow
  background: "#FDF6EC",   // Light Beige
  surface: "#FFFFFF",      // Card Color
  textPrimary: "#2D2D2D",
  textSecondary: "#6B6B6B"
};

const images = [
  "/assets/Img1.jpeg",
  "/assets/Img2.jpeg",
  "/assets/Img3.jpeg",
  "/assets/Img4.jpeg",
  "/assets/Img5.jpeg",
  "/assets/Img6.jpeg",
];

export default function PlantationDrives() {
  const drives = [
    {
      title: "Green Schools Initiative",
      location: "Chennai Municipal School",
      trees: "700 Trees Planted",
      volunteers: "130 Youth & Volunteers",
      image: images[0],
    },
    {
      title: "Village Afforestation Drive",
      location: "Villupuram Community Fields",
      trees: "1,500 Native Trees",
      volunteers: "95 Community Members",
      image: images[1],
    },
    {
      title: "Urban Parks Greening",
      location: "Coimbatore City Park",
      trees: "420 Trees & Shrubs",
      volunteers: "75 Environmental Volunteers",
      image: images[2],
    },
    // More drives can be added as above.
  ];

  return (
    <section
      className="pt-20"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* HERO */}
      <div
        className="relative text-white py-20 text-center px-6"
        style={{
          backgroundColor: COLORS.primary,
          backgroundImage: `linear-gradient(rgba(231,111,81,0.54),rgba(244,162,97,0.44)), url('/assets/Img1.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay: subtle warm gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(rgba(231, 111, 81, 0.28), rgba(233, 196, 106,0.44))`,
            zIndex: 0,
          }}
        ></div>
        <div className="relative z-10">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
            style={{ color: COLORS.surface, textShadow: '0 1px 24px rgba(231,111,81,0.10)' }}
          >
            Plantation Drives by The Vanrang Foundation
          </h1>
          <h2
            className="text-xl md:text-2xl font-medium mb-2 font-serif"
            style={{ color: COLORS.accent }}
          >
            One World One Family
          </h2>
          <p
            className="max-w-2xl mx-auto opacity-90 md:text-lg mt-4"
            style={{ color: COLORS.surface, textShadow: '0 1px 24px rgba(231,111,81,0.06)' }}
          >
            United for a greener India: organizing plantation drives to restore nature, empower youth, and create eco-aware communities. Every tree by The Vanrang Foundation is a step towards a sustainable tomorrow.
          </p>
        </div>
      </div>

      {/* DRIVE TYPES */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <h2
          className="text-3xl font-bold text-center mb-14 font-serif"
          style={{ color: COLORS.primary }}
        >
          Our Focus Areas
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div
            className="p-8 rounded-xl shadow border"
            style={{
              backgroundColor: COLORS.surface,
              borderColor: COLORS.accent
            }}
          >
            <h3
              className="text-xl font-semibold mb-3 font-serif"
              style={{ color: COLORS.primary }}
            >
              School Plantation Programs
            </h3>
            <p style={{ color: COLORS.secondary }}>
              Inspiring young minds to nurture the planet—hands-on tree plantation and environmental education in schools.
            </p>
          </div>

          <div
            className="p-8 rounded-xl shadow border"
            style={{
              backgroundColor: COLORS.surface,
              borderColor: COLORS.accent
            }}
          >
            <h3
              className="text-xl font-semibold mb-3 font-serif"
              style={{ color: COLORS.primary }}
            >
              Rural Greening Initiatives
            </h3>
            <p style={{ color: COLORS.secondary }}>
              Reviving biodiversity in rural communities and supporting sustainable livelihoods through afforestation.
            </p>
          </div>

          <div
            className="p-8 rounded-xl shadow border"
            style={{
              backgroundColor: COLORS.surface,
              borderColor: COLORS.accent
            }}
          >
            <h3
              className="text-xl font-semibold mb-3 font-serif"
              style={{ color: COLORS.primary }}
            >
              Community Urban Drives
            </h3>
            <p style={{ color: COLORS.secondary }}>
              Community volunteers transform parks and public lands, promoting green urban environments and awareness.
            </p>
          </div>
        </div>
      </div>

      {/* DRIVES LIST */}
      <div className="max-w-7xl mx-auto pb-20 px-6">
        <h2
          className="text-3xl font-bold text-center mb-14 font-serif"
          style={{ color: COLORS.primary }}
        >
          Recent Plantation Drives
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {drives.map((drive, index) => (
            <div
              key={index}
              className="rounded-xl shadow overflow-hidden border"
              style={{
                backgroundColor: COLORS.surface,
                borderColor: COLORS.accent
              }}
            >
              <img
                src={drive.image}
                alt={drive.title}
                className="h-56 w-full object-cover"
                style={{ backgroundColor: COLORS.accent }}
              />
              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-4 font-serif"
                  style={{ color: COLORS.primary }}
                >
                  {drive.title}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2" style={{ color: COLORS.textSecondary }}>
                    <FaMapMarkerAlt size={16} style={{ color: COLORS.secondary }} />
                    <span>{drive.location}</span>
                  </div>
                  <div className="flex items-center gap-2" style={{ color: COLORS.secondary }}>
                    <FaTree size={16} style={{ color: COLORS.primary }} />
                    <span>{drive.trees}</span>
                  </div>
                  <div className="flex items-center gap-2" style={{ color: COLORS.primary }}>
                    <FaUsers size={16} style={{ color: COLORS.accent }} />
                    <span>{drive.volunteers}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMMUNITY IMPACT */}
      <div
        className="py-20 px-6"
        style={{ backgroundColor: COLORS.surface }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-6 font-serif"
            style={{ color: COLORS.primary }}
          >
            The Impact We Make Together
          </h2>
          <p
            className="leading-relaxed text-lg"
            style={{ color: COLORS.secondary }}
          >
            Every Vanrang Foundation drive leaves a mark—restoring ecosystems, spreading environmental literacy, and fostering the spirit of “One World One Family”. By engaging youth, schools, and communities, we’re growing forests while building a culture of responsibility and hope for future generations.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div
        className="py-20 text-center"
        style={{ backgroundColor: COLORS.primary, color: COLORS.surface }}
      >
        <h2
          className="text-3xl font-bold mb-4 font-serif"
          style={{ color: COLORS.accent }}
        >
          Become a Part of Our Green Movement!
        </h2>
        <p className="mb-8 opacity-90 text-lg" style={{ color: COLORS.surface }}>
          Volunteer or collaborate with The Vanrang Foundation—together, let's create greener villages, schools, and cities for all.
        </p>
        <a
          href="/contact"
          className="px-8 py-3 rounded-lg font-semibold transition inline-block shadow-lg"
          style={{
            backgroundColor: COLORS.accent,
            color: COLORS.primary
          }}
          onMouseOver={e => {
            e.currentTarget.style.backgroundColor = COLORS.primary;
            e.currentTarget.style.color = COLORS.surface;
          }}
          onMouseOut={e => {
            e.currentTarget.style.backgroundColor = COLORS.accent;
            e.currentTarget.style.color = COLORS.primary;
          }}
        >
          Join as a Volunteer
        </a>
      </div>
    </section>
  );
}