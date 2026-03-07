import { motion } from "framer-motion";

const images = [
  "/assets/Img1.jpeg",
  "/assets/Img2.jpeg",
  "/assets/Img3.jpeg",
  "/assets/Img4.jpeg",
  "/assets/Img5.jpeg",
  "/assets/Img6.jpeg",
];

export default function GalleryCarousel() {
  // Handler to scroll to top on link click
  const handleGalleryButtonClick = (e) => {
    // For internal navigation, allow the link to proceed, but scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-[#E8F5E9] pb-16 relative overflow-hidden">
      {/* Center Badge */}
      <div className=" md:hidden    z-20 w-fit mx-auto">
        <div className="bg-white/95 shadow-xl px-7 py-3 rounded-2xl flex items-center gap-3 border-2 border-[#2E7D32]">
          {/* <span className="text-2xl text-[#2E7D32]">🌱</span> */}
          <div>
            <span className="block font-bold text-[#2E7D32] text-2xl md:text-[34px] leading-none font-serif">
              The Vanrang Foundation
            </span>
            <span className="block font-semibold text-[#4CAF50] text-center text-sm md:text-base tracking-wide mt-1 font-serif">
              One World One Family
            </span>
          </div>
        </div>
      </div>

      <div className="relative ribbon-mask">
        {/* Center Badge */}
        <div className="hidden md:block  absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white/95 shadow-xl px-7 py-3 rounded-2xl flex items-center gap-3 border-2 border-[#2E7D32]">
            {/* <span className="text-2xl text-[#2E7D32]">🌱</span> */}
            <div>
              <span className="block font-bold text-[#2E7D32] text-2xl md:text-[34px] leading-none font-serif">
                The Vanrang Foundation
              </span>
              <span className="block font-semibold text-[#4CAF50] text-center text-sm md:text-base tracking-wide mt-1 font-serif">
                One World One Family
              </span>
            </div>
          </div>
        </div>

        {/* Moving Images */}
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        >
          {[...images, ...images].map((img, i) => (
            <div key={i} className="min-w-[280px] md:min-w-[360px] lg:min-w-[440px] p-2">
              <img
                src={img}
                alt="Tree plantation, environmental awareness or youth participation"
                className="w-full h-[170px] md:h-[400px] object-cover rounded-2xl border-2 border-[#A5D6A7] shadow-md"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        {/* Gallery Button */}
        <div className="flex justify-center mt-10 absolute left-0 right-0 bottom-6 md:bottom-10 z-30">
          <a
            href="/gallery"
            className="inline-block px-8 py-3 rounded-lg font-semibold bg-[#388E3C] hover:bg-[#25672c] text-white shadow-lg transition text-lg"
            style={{ letterSpacing: "0.03em" }}
            onClick={handleGalleryButtonClick}
          >
            See Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
