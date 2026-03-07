import { FaRegFileAlt } from "react-icons/fa";
import { GiTreeGrowth, GiReceiveMoney } from "react-icons/gi";
import { RiMedalLine } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

// Responsive hero heading for transparency section
function TransparencyHeroHeading() {
  return (
    <div className="text-center mb-10 xs:mb-14 sm:mb-16 md:mb-20 px-2">
      <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-[#215c2f] drop-shadow-md tracking-tight leading-tight">
        Radical Transparency in Action
      </h2>
      <div className="flex justify-center">
        <span className="bg-[#E8F5E9] shadow-md border border-[#388E3C]/10 rounded-full px-4 py-2 sm:px-8 sm:py-3 mt-4 sm:mt-5 inline-block text-[#2E7D32] font-bold text-base xs:text-lg sm:text-2xl tracking-wide font-serif">
          See Every Impact, Every Tree
        </span>
      </div>
      <p className="mt-5 sm:mt-8 text-base xs:text-lg sm:text-xl max-w-sm xs:max-w-lg sm:max-w-2xl mx-auto text-[#388E3C] font-medium px-2">
        Witness detailed evidence, verified stories, and clear community outcomes—because our forests, schools, and green drives deserve open trust.
      </p>
    </div>
  );
}

export default function TransparencySection() {
  const items = [
    {
      icon: (
        <span className="bg-gradient-to-tr from-[#81c784] to-[#2e7d32] flex items-center justify-center rounded-full shadow-xl w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 mb-2 border-4 border-[#e8f5e9]">
          <GiTreeGrowth size={32} className="text-white drop-shadow-lg xs:hidden" />
          <GiTreeGrowth size={42} className="text-white drop-shadow-lg hidden xs:inline-block sm:hidden" />
          <GiTreeGrowth size={50} className="text-white drop-shadow-lg hidden sm:inline-block" />
        </span>
      ),
      title: "Transparent Tree Plantation",
      desc: "Every sapling you support is geo-tagged, photographed, and accounted for. Track your tree’s journey to ensure real and visible green impact.",
    },
    {
      icon: (
        <span className="bg-gradient-to-tr from-[#a5d6a7] to-[#4caf50] flex items-center justify-center rounded-full shadow-xl w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 mb-2 border-4 border-[#e8f5e9]">
          <RiMedalLine size={32} className="text-white drop-shadow-lg xs:hidden" />
          <RiMedalLine size={42} className="text-white drop-shadow-lg hidden xs:inline-block sm:hidden" />
          <RiMedalLine size={50} className="text-white drop-shadow-lg hidden sm:inline-block" />
        </span>
      ),
      title: "Verified Initiatives, Real Stories",
      desc: "All campaigns and school programs are validated with event photos, stories, and testimonials, fostering confidence and direct donor engagement.",
    },
    {
      icon: (
        <span className="bg-gradient-to-tr from-[#388e3c] to-[#a5d6a7] flex items-center justify-center rounded-full shadow-xl w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 mb-2 border-4 border-[#e8f5e9]">
          <BsPeopleFill size={32} className="text-white drop-shadow-lg xs:hidden" />
          <BsPeopleFill size={42} className="text-white drop-shadow-lg hidden xs:inline-block sm:hidden" />
          <BsPeopleFill size={50} className="text-white drop-shadow-lg hidden sm:inline-block" />
        </span>
      ),
      title: "Open Community Impact Reports",
      desc: "We publish transparent reports on every project. Community development, youth engagement, and rural greening projects are openly documented.",
    },
  ];

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-[#e8f5e9] via-[#f3fbf5] to-[#e8f5e9] py-12 xs:py-16 sm:py-20 md:py-24 px-2 xs:px-4 sm:px-6 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Heading for Transparency Section */}
        <TransparencyHeroHeading />
        {/* Responsive Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 text-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 xs:gap-4 px-4 xs:px-5 sm:px-6 py-7 xs:py-10 rounded-2xl sm:rounded-3xl bg-white shadow-lg transition hover:shadow-2xl hover:-translate-y-2 ring-1 ring-[#a5d6a7]/40"
            >
              {item.icon}
              <h3 className="font-serif text-lg xs:text-xl sm:text-2xl font-semibold text-[#2E7D32] mb-1 sm:mb-2 group-hover:text-[#25672c] transition">
                {item.title}
              </h3>
              <p className="text-[#388e3c] max-w-[19rem] xs:max-w-xs leading-relaxed font-medium text-sm xs:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        {/* Plantation Drives Button - Responsive */}
        <div className="mt-10 xs:mt-14 sm:mt-16 md:mt-20 flex justify-center">
          <Link
            to="/plantation-drives"
            className="inline-block px-6 xs:px-8 sm:px-10 py-3 xs:py-3.5 sm:py-4 rounded-lg sm:rounded-xl font-bold bg-gradient-to-tr from-[#388e3c] to-[#81c784] hover:from-[#2e7d32] hover:to-[#66bb6a] text-white shadow-xl transition text-lg xs:text-xl tracking-wide focus:outline-none ring-2 ring-[#A5D6A7]/50 font-serif"
            onClick={handleLinkClick}
          >
            View Plantation Drives
          </Link>
        </div>
      </div>
    </section>
  );
}