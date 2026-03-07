import { FaMapMarkerAlt, FaTree, FaUsers } from "react-icons/fa";

// Use images as in AboutUsPage.js lines 5-12
const images = [
  "/assets/Img1.jpeg",
  "/assets/Img2.jpeg",
  "/assets/Img3.jpeg",
  "/assets/Img4.jpeg",
  "/assets/Img5.jpeg",
  "/assets/Img6.jpeg",
];

export default function PlantationDrives() {
  // Updated recent drives with local brand images
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
    // Optionally, if you want to showcase all 6, add more drives as examples:
    // {
    //   title: "Riverbank Restoration",
    //   location: "Cauvery Delta",
    //   trees: "900 Saplings",
    //   volunteers: "60 Local Volunteers",
    //   image: images[3],
    // },
    // {
    //   title: "Neighbourhood Avenue Planting",
    //   location: "Madurai Streets",
    //   trees: "550 Avenue Trees",
    //   volunteers: "40 Residents",
    //   image: images[4],
    // },
    // {
    //   title: "School Nature Clubs Launch",
    //   location: "Trichy Rural Schools",
    //   trees: "600 Saplings",
    //   volunteers: "75 Students & Teachers",
    //   image: images[5],
    // },
  ];

  return (
    <section className="bg-[#F3F6F4] pt-20">

      {/* HERO */}
      <div
        className="relative text-white py-20 text-center px-6"
        style={{
          backgroundColor: "#2E7D32",
          backgroundImage: `linear-gradient(rgba(46, 125, 50, 0), rgba(46, 125, 50, 0)), url('/assets/Img1.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay moved below text for correct stacking order */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(rgba(46, 125, 50, 0.35), rgba(46, 125, 50, 0.58))",
            zIndex: 0,
          }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Plantation Drives by The Vanrang Foundation
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-2 text-[#A5D6A7] font-serif">
            One World One Family
          </h2>
          <p className="max-w-2xl mx-auto opacity-90 md:text-lg mt-4">
            United for a greener India: organizing plantation drives to restore nature, empower youth, and create eco-aware communities. Every tree by The Vanrang Foundation is a step towards a sustainable tomorrow.
          </p>
        </div>
      </div>

      {/* DRIVE TYPES */}
      <div className="max-w-7xl mx-auto py-20 px-6">

        <h2 className="text-3xl font-bold text-center mb-14 text-[#2E7D32] font-serif">
          Our Focus Areas
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">

          <div className="bg-white p-8 rounded-xl shadow border border-[#A5D6A7]">
            <h3 className="text-xl font-semibold mb-3 text-[#2E7D32] font-serif">
              School Plantation Programs
            </h3>
            <p className="text-[#4CAF50]">
              Inspiring young minds to nurture the planet—hands-on tree plantation and environmental education in schools.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow border border-[#A5D6A7]">
            <h3 className="text-xl font-semibold mb-3 text-[#2E7D32] font-serif">
              Rural Greening Initiatives
            </h3>
            <p className="text-[#4CAF50]">
              Reviving biodiversity in rural communities and supporting sustainable livelihoods through afforestation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow border border-[#A5D6A7]">
            <h3 className="text-xl font-semibold mb-3 text-[#2E7D32] font-serif">
              Community Urban Drives
            </h3>
            <p className="text-[#4CAF50]">
              Community volunteers transform parks and public lands, promoting green urban environments and awareness.
            </p>
          </div>

        </div>
      </div>

      {/* DRIVES LIST */}
      <div className="max-w-7xl mx-auto pb-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-14 text-[#2E7D32] font-serif">
          Recent Plantation Drives
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {drives.map((drive, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow overflow-hidden border border-[#A5D6A7]"
            >
              <img
                src={drive.image}
                alt={drive.title}
                className="h-56 w-full object-cover"
                style={{ backgroundColor: "#A5D6A7" }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#2E7D32] font-serif">
                  {drive.title}
                </h3>
                <div className="space-y-2 text-[#4CAF50] text-sm">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt size={16} className="text-[#A5D6A7]" />
                    {drive.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTree size={16} className="text-[#4CAF50]" />
                    {drive.trees}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers size={16} className="text-[#2E7D32]" />
                    {drive.volunteers}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMMUNITY IMPACT */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#2E7D32] font-serif">
            The Impact We Make Together
          </h2>
          <p className="text-[#4CAF50] leading-relaxed text-lg">
            Every Vanrang Foundation drive leaves a mark—restoring ecosystems, spreading environmental literacy, and fostering the spirit of “One World One Family”. By engaging youth, schools, and communities, we’re growing forests while building a culture of responsibility and hope for future generations.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#2E7D32] text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#A5D6A7] font-serif">
          Become a Part of Our Green Movement!
        </h2>
        <p className="mb-8 opacity-90 text-lg">
          Volunteer or collaborate with The Vanrang Foundation—together, let's create greener villages, schools, and cities for all.
        </p>
        <a
          href="/contact"
          className="bg-[#A5D6A7] text-[#2E7D32] px-8 py-3 rounded-lg font-semibold hover:bg-[#4CAF50] hover:text-white transition inline-block"
        >
          Join as a Volunteer
        </a>
      </div>
    </section>
  );
}