
import { useState, useEffect } from "react";
import { FaTree, FaLeaf, FaHandsHelping, FaUserFriends } from "react-icons/fa";

// images taken from GalleryCarousel.js (lines 3-11)
const images = [
  "/assets/Img1.jpeg",
  "/assets/Img2.jpeg",
  "/assets/Img3.jpeg",
  "/assets/Img4.jpeg",
  "/assets/Img5.jpeg",
  "/assets/Img6.jpeg",
];

export default function AboutUs() {
  // Handler to scroll to top on link click
  const handleLinkClick = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Carousel state for About image
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      // fade-out handled in CSS transition classes
    }, 3500); // Image visible for ~3.5s

    const timeout2 = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Fade and change every 4s

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [index]);

  return (
    <section className="bg-green-50 pt-16 sm:pt-20">
      <div className="mx-auto max-w-7xl px-2 xs:px-3 sm:px-4">
        <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center gap-8 xs:gap-10 lg:gap-14 xl:gap-20 mb-8 sm:mb-10">
          {/* Left content */}
          <div className="flex-1 w-full lg:w-1/2 text-left order-2 lg:order-1">
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2">
              The Vanrang Foundation
            </h2>
            <p className="font-serif text-green-700 font-semibold mt-2 text-lg xs:text-xl md:text-2xl mb-4 xs:mb-6">
              One World One Family
            </p>
            <h3 className="font-serif text-xl xs:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 xs:mb-6">
              Greening Communities, Inspiring Change
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-xl mb-7 xs:mb-8 text-sm xs:text-base sm:text-lg">
              The Vanrang Foundation is a non-profit dedicated to creating a sustainable future through tree plantation, environmental awareness, and community-led programs.
              <br />
              <br />
              We engage youth, schools, and rural communities in transformative projects that nurture green spaces, spread eco-consciousness, and empower collective action for our planet. Join us in growing forests, uplifting lives, and building a greener tomorrow—One World, One Family.
            </p>
            <div className="mb-0">
              <a
                href="/about"
                className="inline-block px-5 xs:px-7 py-2.5 xs:py-3 rounded-lg font-semibold bg-[#388E3C] hover:bg-[#25672c] text-white shadow-lg transition text-base xs:text-lg"
                style={{ letterSpacing: "0.03em" }}
                onClick={handleLinkClick}
              >
                Know More
              </a>
            </div>
          </div>

          {/* Right image with fading slider */}
          <div className="flex-1 w-full lg:w-1/2 flex justify-center items-center min-h-[180px] xs:min-h-[200px] sm:min-h-[240px] md:min-h-[260px] lg:min-h-[280px] order-1 lg:order-2 mb-6 lg:mb-0">
            <div
              className="
                relative w-full 
                max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg 
                aspect-[5/4] xs:aspect-[16/10] sm:aspect-[16/9] 
                h-[170px] xs:h-[210px] sm:h-[260px] md:h-[300px] lg:h-[320px] 
                flex items-center justify-center
              "
              style={{ minHeight: 140 }}
            >
              {images.map((img, i) => (
                <img
                  key={img}
                  src={img}
                  alt={`The Vanrang Foundation Work ${i + 1}`}
                  className={
                    `rounded-xl shadow-2xl w-full h-full object-cover absolute top-0 left-0
                    transition-opacity duration-700 ease-in-out
                    ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`
                  }
                  style={{
                    minHeight: 140,
                    transition: "opacity 0.7s ease-in-out"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Stats Bar */}
      <div className="relative w-full bg-[#1B5E20] mt-12 xs:mt-16">
        <div className="
          max-w-7xl mx-auto 
          grid grid-cols-2 sm:grid-cols-4 
          gap-4 xs:gap-6 md:gap-8 
          py-5 xs:py-6 md:py-7 
          px-2 xs:px-4
        ">
          <Stat
            icon={<FaTree className="text-[#A5D6A7]" />}
            number={<span className="text-white">200K+</span>}
            label={<span className="text-[#A5D6A7]">{`Trees Planted`}</span>}
          />
          <Stat
            icon={<FaUserFriends className="text-[#A5D6A7]" />}
            number={<span className="text-white">10K+</span>}
            label={
              <span className="text-[#A5D6A7]">{`Youth & Volunteer Force`}</span>
            }
          />
          <Stat
            icon={<FaHandsHelping className="text-[#A5D6A7]" />}
            number={<span className="text-white">350+</span>}
            label={<span className="text-[#A5D6A7]">{`Community Programs`}</span>}
          />
          <Stat
            icon={<FaLeaf className="text-[#A5D6A7]" />}
            number={<span className="text-white">100+</span>}
            label={<span className="text-[#A5D6A7]">{`Schools Reached`}</span>}
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, number, label }) {
  return (
    <div className="flex flex-col items-center text-center gap-2 min-w-0">
      <div className="text-2xl xs:text-3xl sm:text-4xl">{icon}</div>
      <h4 className="font-serif font-bold text-base xs:text-lg sm:text-xl text-[#2E7D32]">{number}</h4>
      <p className="text-[#4CAF50] text-xs xs:text-sm sm:text-base font-semibold break-words">{label}</p>
    </div>
  );
}

/*
Optional CSS if you want finer control (e.g. add to your global or component stylesheet):

.fade-ani-in { animation: fadeIn 0.8s; }
.fade-ani-out { animation: fadeOut 0.7s; }
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes fadeOut {
  from { opacity: 1; }
  to   { opacity: 0; }
}
*/
