import React, { useState, useEffect } from "react";

// Example certificate PNG URLs (replace with your real PNG paths)
// Ensure each id/title is unique for React keys and accessibility
const certificates = [
  {
    id: "cert0",
    title: "Certificate of License ",
    url: "/pdfs/pdf0.png",
  },
  {
    id: "cert1",
    title: "Certificate of Incorporation ",
    url: "/pdfs/pdf1.png",
  },
  {
    id: "cert2",
    title: "Permanent Account Number (PAN)",
    url: "/pdfs/pdf2.png",
  },
  {
    id: "cert3",
    title: "Tax Deduction Account Number (TAN)",
    url: "/pdfs/pdf3.png",
  },
  {
    id: "cert3",
    title: "NGO DARPAN ID ( NITI AYOG )",
    url: "/pdfs/pdf4.png",
  },
];

// Simple error boundary for the Image Viewer
class ImgErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: "" };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMsg: error?.message || "Unknown error" };
  }
  componentDidCatch(error, errorInfo) {
    // Optionally log error
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-500 text-center font-bold p-4">
          Failed to load certificate image. <br />
          <span className="text-xs">{this.state.errorMsg}</span>
        </div>
      );
    }
    return this.props.children;
  }
}

const CertificationPage = () => {
  const [selected, setSelected] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Preload images for smoother user experience (optional)
  useEffect(() => {
    certificates.forEach(cert => {
      const img = new window.Image();
      img.src = cert.url;
    });
  }, []);

  // Reset loading state on change
  useEffect(() => {
    setImgLoaded(false);
  }, [selected]);

  return (
    <div className="min-h-screen pt-32 flex flex-col items-center bg-[#FDF6EC] py-12 px-2">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#E76F51]">
        Our Certifications
      </h1>
      <div className="mb-8 flex flex-wrap gap-4 justify-center w-full max-w-7xl">
        {certificates.map((cert, idx) => (
          <button
            key={cert.id}
            onClick={() => setSelected(idx)}
            aria-current={idx === selected ? "page" : undefined}
            className={`flex-1 min-w-[180px] max-w-xs px-4 py-2 rounded-lg font-semibold border transition ${
              idx === selected
                ? "bg-[#E76F51] text-white border-[#E76F51]"
                : "bg-white text-[#E76F51] border-[#E76F51] hover:bg-[#F4A261] hover:text-white"
            }`}
            aria-label={cert.title}
            style={{
              flexBasis: "calc(20% - 1rem)", // 5 per row on large screens, with gap
            }}
          >
            {cert.title}
          </button>
        ))}
      </div>
 
 
      <div
        className="bg-white rounded shadow-lg p-4 flex justify-center items-center"
        style={{ maxWidth: "600px", minHeight: "400px", width: "100%" }}
      >
        <ImgErrorBoundary>
          {!imgLoaded && (
            <span className="text-[#E76F51]">Loading certificate...</span>
          )}
          <img
            src={certificates[selected].url}
            alt={certificates[selected].title}
            style={{
              display: imgLoaded ? "block" : "none",
              borderRadius: "12px",
              boxShadow: "0px 2px 16px rgba(0,0,0,0.05)",
              objectFit: "contain",
            }}
            onLoad={() => setImgLoaded(true)}
            onError={() => {
              // Set loaded to true so loading spinner disappears,
              // error boundary still handles fatal errors
              setImgLoaded(true);
            }}
          />
        </ImgErrorBoundary>
      </div>
    </div>
  );
};

export default CertificationPage;