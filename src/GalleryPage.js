import { useState } from "react";

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
    <section className="bg-[#F3F6F4] py-20 pt-32 px-6">

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl md:text-6xl font-bold mb-2 text-[#2E7D32] font-serif">
          The Vanrang Foundation Gallery
        </h2>
       
        <p className="mt-2 text-[#4CAF50] max-w-2xl font-serif">
          Inspiring change through tree plantation, community action, youth leadership, and nature restoration. Explore our ongoing impact across India!
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto border-t border-b border-[#A5D6A7] py-4 mb-14">
        <div className="flex flex-wrap gap-6 text-sm font-medium">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`transition ${
                active === cat
                  ? "text-[#2E7D32] border-b-2 border-[#4CAF50]"
                  : "text-[#4CAF50] hover:text-[#2E7D32]"
              } pb-1 font-serif`}
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
            className="relative group overflow-hidden rounded-3xl shadow bg-white"
          >

            <img
              src={img.src}
              alt={img.title}
              className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
              style={{ backgroundColor: "#A5D6A7" }}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#2E7D32]/70 opacity-0 group-hover:opacity-100 transition flex items-end p-6">

              <div>
                <span className="text-xs bg-[#4CAF50] text-white px-3 py-1 rounded-full font-serif">
                  {img.category}
                </span>

                <h3 className="text-white text-lg font-semibold mt-2 font-serif">
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