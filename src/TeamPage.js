import { useState } from "react";
import {
  FaLeaf,
  FaLinkedin,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";

// --- Color palette from HeroSection.js (5-14) ---
const COLORS = {
  primary: "#E76F51",
  secondary: "#F4A261",
  accent: "#E9C46A",
  background: "#FDF6EC",
  surface: "#FFFFFF",
  textPrimary: "#2D2D2D",
  textSecondary: "#6B6B6B",
};

const theme = {
  gridBg: "",
  card: "",
  name: "",
  role: "",
  bioBtn: "",
  socialIconWrap: "flex justify-center gap-3 mt-4",
  linkedinIcon: "",
  instagramIcon: "",
  headerLeaf: "",
  headerTitle: "",
  headerDesc: "",
  modalBg: "fixed inset-0 bg-black/40 flex items-center justify-center z-50",
  modalCard: "",
  modalClose: "",
  modalName: "",
  modalRole: "",
  modalImg: "",
  modalBio: "",
  modalBlog: "",
};

// Tailwind utility classes with inline style overrides for color palette usage
theme.gridBg = "min-h-screen py-20 px-6";
theme.card =
  "rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center border"
theme.name =
  "text-xl font-semibold mb-1"
theme.role =
  "text-sm mb-3"
theme.bioBtn =
  "text-sm hover:underline focus:outline-none font-medium"
theme.linkedinIcon =
  "p-2 rounded-full text-lg hover:bg-primary transition"
theme.instagramIcon =
  "p-2 rounded-full text-lg hover:bg-accent-dark transition"
theme.headerLeaf =
  "mx-auto mb-4"
theme.headerTitle =
  "text-4xl md:text-5xl font-bold"
theme.headerDesc =
  "mt-3 max-w-xl mx-auto"
theme.modalCard =
  "rounded-xl max-w-xl p-8 relative shadow-lg border"
theme.modalClose =
  "absolute top-4 right-4 transition text-2xl focus:outline-none"
theme.modalName =
  "text-2xl font-bold text-center mb-1"
theme.modalRole =
  "text-center mb-4"
theme.modalImg =
  "w-28 h-28 rounded-full mx-auto mb-4 object-cover"
theme.modalBio =
  "mb-4 leading-normal"
theme.modalBlog =
  "text-sm leading-relaxed"

const teamMembers = [
  {
    name: "Arjun Verma",
    role: "Founder & Environmentalist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Arjun founded The Vanrang Foundation with the vision of restoring nature and creating greener communities. He has led large-scale plantation drives and environmental awareness campaigns.",
    blog: "Arjun believes that planting trees is one of the most powerful actions individuals can take to combat climate change. Through community participation and youth leadership, he aims to build a sustainable future.",
  },
  {
    name: "Meera Nair",
    role: "Program Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Meera coordinates plantation drives, school eco-programs, and volunteer activities across rural and urban communities.",
    blog: "Environmental education is the foundation of lasting change. Meera leads programs that inspire students to protect nature and take responsibility for the environment.",
  },
  {
    name: "Rahul Iyer",
    role: "Volunteer Coordinator",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Rahul manages volunteer engagement and ensures smooth execution of plantation events.",
    blog: "Volunteers are the heartbeat of our foundation. Rahul believes empowering young people to plant trees builds lifelong environmental stewardship.",
  },
  {
    name: "Priya Sharma",
    role: "Community Outreach Lead",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Priya connects with schools and rural communities to expand plantation initiatives.",
    blog: "Community-led plantation drives create real environmental impact. Priya works to bring people together to restore degraded land.",
  },
];

export default function TeamPage() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      className={theme.gridBg}
      style={{ background: COLORS.background }} // palette background
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
         
          <h1
            className={theme.headerTitle}
            style={{ color: COLORS.primary }}
          >
            Meet Our Team
          </h1>
          <p
            className={theme.headerDesc}
            style={{ color: COLORS.secondary }}
          >
            The passionate people behind The Vanrang Foundation working
            together to restore nature and empower communities.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={theme.card}
              style={{
                background: COLORS.surface,
                borderColor: COLORS.primary + "33"
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className={theme.modalImg + " border-4"}
                style={{
                  borderColor: COLORS.accent + "66"
                }}
              />
              <h3
                className={theme.name}
                style={{ color: COLORS.primary }}
              >
                {member.name}
              </h3>
              <p
                className={theme.role}
                style={{ color: COLORS.secondary }}
              >
                {member.role}
              </p>
              <button
                onClick={() => setSelected(member)}
                className={theme.bioBtn}
                style={{ color: COLORS.accent, fontWeight: 500 }}
              >
                View Bio
              </button>
              <div className={theme.socialIconWrap}>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  tabIndex={-1}
                  className={theme.linkedinIcon}
                  style={{
                    background: COLORS.primary + "1A",
                    color: COLORS.primary
                  }}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  tabIndex={-1}
                  className={theme.instagramIcon}
                  style={{
                    background: COLORS.accent + "22",
                    color: "#C89F23"
                  }}
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Bio */}
      {selected && (
        <div className={theme.modalBg}>
          <div
            className={theme.modalCard}
            style={{
              background: COLORS.surface,
              borderColor: COLORS.primary + "55"
            }}
          >
            <button
              className={theme.modalClose}
              onClick={() => setSelected(null)}
              aria-label="Close bio modal"
              style={{
                color: COLORS.primary
              }}
              onMouseOver={e => (e.currentTarget.style.color = "#c85033")}
              onMouseOut={e => (e.currentTarget.style.color = COLORS.primary)}
            >
              <FaTimes />
            </button>
            <img
              src={selected.image}
              alt={selected.name}
              className={theme.modalImg}
              style={{
                border: "4px solid " + COLORS.accent + "44"
              }}
            />
            <h2
              className={theme.modalName}
              style={{ color: COLORS.primary }}
            >
              {selected.name}
            </h2>
            <p
              className={theme.modalRole}
              style={{ color: COLORS.secondary }}
            >
              {selected.role}
            </p>
            <p
              className={theme.modalBio}
              style={{ color: COLORS.textPrimary }}
            >
              {selected.bio}
            </p>
            <p
              className={theme.modalBlog}
              style={{ color: "#C89F23" }}
            >
              {selected.blog}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}