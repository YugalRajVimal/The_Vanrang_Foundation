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
  "mt-3 max-w-6xl mx-auto"
theme.modalCard =
  "rounded-xl max-w-6xl  p-8 relative shadow-lg border"
theme.modalClose =
  "absolute top-4 right-4 transition text-2xl focus:outline-none"
theme.modalName =
  "text-2xl font-bold text-center mb-1"
theme.modalRole =
  "text-center mb-4"
theme.modalImg =
  "w-32 aspect-[1/1] rounded-full mx-auto mb-4 object-cover"
theme.modalBio =
  "mb-4 leading-normal"
theme.modalBlog =
  "text-sm leading-relaxed"

// IMAGES here for demo; use proper photos in production!
const teamMembers = [
  {
    name: "Jatin Kodwani",
    role: "Volunteer",
    image: "/team/JatinKodwani.jpeg",
    bio: `Jatin Kodwani is a dedicated volunteer at The Vanrang Foundation. A 12th Commerce pass-out, he is currently pursuing B.Com and preparing as a CA aspirant. Passionate about social work, Jatin also enjoys sketching, dancing, and watching movies in his free time.`,
    blog: "",
  },
  {
    name: "Shaurya Goyal",
    role: "National Secretary",
    image: "/team/ShauryaGoyal.jpeg",
    bio: `Shaurya Goyal is a Finance Analyst specializing in Banking and Finance, driven by a strong passion for financial insights, continuous learning, and meaningful social impact. As the National Secretary of the Vanrang Foundation, he actively contributes to social initiatives and community development. Alongside his professional journey, he nurtures his entrepreneurial vision as the Founder of Netrayi, combining finance, leadership, and innovation to create value for society.`,
    blog: "",
  },
  {
    name: "Bhavya Narang",
    role: "Business & Social Service Volunteer",
    image: "/team/BhavyaNarang.jpeg",
    bio: `I am Bhavya Narang, currently managing and expanding my family business with a vision for growth. Alongside Businessman, I am passionate about social service and animal welfare. As an active volunteer with The Vanrang Foundation and the Art of Living Foundation, I contribute to community initiatives, charitable works, and the well-being of street dogs.`,
    blog: "",
  },
  {
    name: "Ms. Chhavi Khanna",
    role: "Managing Director",
    image: "/team/MsChhaviKhanna.jpeg",
    bio: `Ms. Chhavi Khanna is the Managing Director of The Vanrang Foundation and works in the field of fashion designing. She is also a Certified Art of Living Instructor, dedicated to spreading positivity, awareness, and service in society.

Alongside her creative work in fashion designing, she actively contributes to social initiatives and community upliftment through her commitment to service. Passionate about creativity and artistic expression, Chhavi enjoys painting, singing, and other forms of art, which reflect her vibrant and compassionate personality.

Through her leadership, creativity, and dedication to service, she continues to inspire and positively impact the lives of many.`,
    blog: "",
  },
];

// Mentor data
const mentor = {
  name: "Mr. Deependra Choudhary",
  role: "Mentor",
  image: "/team/MrDeependraChoudhary.jpeg",
  bio: `Mr. Deependra Choudhary is an accomplished educationist, with a diverse academic background including a B.E. (IT), LL.B., M.A. (English), and a Ph.D. (pursuing). Alongside his administrative career, he has dedicated himself to the Art of Living Foundation as a Senior Teacher, guiding individuals towards inner peace, resilience, and holistic well-being.

With a passion for education, personal growth, and social transformation, Mr. Choudhary integrates his professional expertise with spiritual wisdom to inspire students, colleagues, and communities alike. His work reflects a commitment to nurturing not only intellectual excellence but also emotional balance and human values.`,
  blog: "",
};

// Inspiration data
const inspiration = {
  name: "Gurudev Sri Sri Ravi Shankar",
  role: "Inspiration",
  image: "/team/GurudevJi.jpeg",
  bio: `Gurudev Sri Sri Ravi Shankar is a globally respected spiritual leader, humanitarian, and the founder of the Art of Living Foundation. Through his teachings on meditation, human values, and the powerful breathing technique Sudarshan Kriya, he has inspired millions of people in over 180 countries to live a stress-free and peaceful life. Honored with India’s prestigious Padma Vibhushan, Gurudev continues to promote peace, compassion, and service across the world. His vision of a stress-free, violence-free society serves as a guiding inspiration for the mission and humanitarian work of The Vanrang Foundation.`,
  blog: "",
};

// Founder (Special, separate from generic team grid)
const founder = {
  name: "Mr. Dikshant Lalwani",
  role: "Founder, Chairman & Director",
  image: "/team/founder.jpeg",
  bio: `Mr. Dikshant Lalwani is the Founder, Chairman & Director of The Vanrang Foundation, a Section 8 non-profit organization devoted to selfless service, youth empowerment, and community development. Guided by the belief that seva is the highest form of contribution, he has led impactful initiatives including plantation drives, blood donation camps, food distribution drives, and child-focused education projects aimed at creating meaningful social impact.

With over three years of leadership experience in the social sector, Mr. Lalwani also serves as a certified Art of Living Instructor, inspiring individuals toward inner peace and personal growth through meditation, yoga, and holistic living. He draws deep inspiration from the teachings of spiritual leader Gurudev Sri Sri Ravi Shankar, whose philosophy of service, peace, and human values has significantly influenced his journey in social service and personal development.

Beyond his social impact work, Mr. Lalwani is an Entrepreneur and Investor, passionate about building sustainable ventures. He is a certified Music Producer and Sound Engineer, an Independent Artist, and the Founder & CEO (under registration) of Lalwani Music Company (LMC)—an independent record label dedicated to supporting and nurturing emerging artists.

Academically, he is pursuing his Bachelor’s Degree in Classical Music (Vocal) from University of Rajasthan, combining academic excellence with his passion for music, creativity, and service. A strong advocate of fitness and healthy living, Mr. Lalwani believes in maintaining harmony between mind, body, and spirit.`,
  blog: `Vision of The Vanrang Foundation:

To build a compassionate, inclusive, and empowered society where individuals come together in the spirit of service, unity, and humanity—working towards the ideal of “One World, One Family.”`,
};

export default function TeamPage() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      className={theme.gridBg}
      style={{ background: COLORS.background }}
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

        {/* Founder Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: COLORS.accent }}>
            Founder
          </h2>
          <div className={theme.card + " max-w-2xl mx-auto"}>
            <img
              src={founder.image}
              alt={founder.name}
              className={theme.modalImg}
              style={{
                border: "4px solid " + COLORS.accent + "44",
                width: "10rem",          // Increased from 8rem (w-32=8rem) to 10rem
                height: "10rem",         // To keep it square
                objectFit: "cover",
              }}
            />
            <h3
              className={theme.name}
              style={{ color: COLORS.primary }}
            >
              {founder.name}
            </h3>
            <p
              className={theme.role}
              style={{ color: COLORS.secondary }}
            >
              {founder.role}
            </p>
            <button
              onClick={() => setSelected(founder)}
              className={theme.bioBtn}
              style={{ color: COLORS.accent, fontWeight: 500 }}
            >
              View Bio
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:justify-between ">
          {/* Inspiration Section */}
          <div className="mb-16 h-full">
            <h2 className="text-2xl font-bold text-center mb-6" style={{ color: COLORS.accent }}>
              Inspiration
            </h2>
            <div className={theme.card + " max-w-2xl mx-auto"}>
              <img
                src={inspiration.image}
                alt={inspiration.name}
                className={theme.modalImg}
                style={{
                  border: "4px solid " + COLORS.accent + "44",
                  width: "10rem",      // Increased size
                  height: "10rem",
                  objectFit: "cover",
                }}
              />
              <h3
                className={theme.name}
                style={{ color: COLORS.primary }}
              >
                {inspiration.name}
              </h3>
              <p
                className={theme.role}
                style={{ color: COLORS.secondary }}
              >
                {inspiration.role}
              </p>
              <p className={theme.modalBio} style={{ color: COLORS.textPrimary }}>
                {inspiration.bio}
              </p>
            </div>
          </div>

          {/* Mentor Section */}
          <div className="mb-16 h-full">
            <h2 className="text-2xl font-bold text-center mb-6" style={{ color: COLORS.accent }}>
              Mentor
            </h2>
            <div className={theme.card + " max-w-2xl mx-auto"}>
              <img
                src={mentor.image}
                alt={mentor.name}
                className={theme.modalImg}
                style={{
                  border: "4px solid " + COLORS.accent + "44",
                  width: "10rem",      // Increased size
                  height: "10rem",
                  objectFit: "cover",
                }}
              />
              <h3
                className={theme.name}
                style={{ color: COLORS.primary }}
              >
                {mentor.name}
              </h3>
              <p
                className={theme.role}
                style={{ color: COLORS.secondary }}
              >
                {mentor.role}
              </p>
              <p className={theme.modalBio} style={{ color: COLORS.textPrimary }}>
                {mentor.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <h2 className="text-2xl font-bold text-center mb-8" style={{ color: COLORS.accent }}>
          Core Team
        </h2>
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
              {/* <div className={theme.socialIconWrap}>
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
              </div> */}
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
                border: "4px solid " + COLORS.accent + "44",
                ...(selected === founder || selected === mentor || selected === inspiration
                  ? { width: "10rem", height: "10rem", objectFit: "cover" }
                  : {}),
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
            {selected.blog && (
              <p
                className={theme.modalBlog}
                style={{ color: "#C89F23" }}
              >
                {selected.blog}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}