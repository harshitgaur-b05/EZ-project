import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Asset Imports
import Arrow from "../assets/VFilmsLanding/Arrow.svg";
import Icon from "../assets/VFilmsLanding/Icon.svg";
import Vector5 from "../assets/VFilmsLanding/Vector5.svg";

// Film Production Assets
import Camera01 from "../assets/VFilmsLanding/Camera01.svg";
import Camera02 from "../assets/VFilmsLanding/Camera02.svg";
import Camera03 from "../assets/VFilmsLanding/Camera03.svg";
import Camera04 from "../assets/VFilmsLanding/Camera04.svg";
import FilmFrame from "../assets/VFilmsLanding/Frame.svg";

// Branding Assets
import BrandingVector01 from "../assets/VFilmsLanding/BrandingVector01.svg";
import BrandingVector02 from "../assets/VFilmsLanding/BrandingVector02.svg";
import BrandingVector03 from "../assets/VFilmsLanding/BrandingVector03.svg";
import BrandingVector04 from "../assets/VFilmsLanding/BrandingVector04.svg";
import BrandingFrame from "../assets/VFilmsLanding/Frame2.svg";

// Art Curation Assets
import ArtCurationIcons01 from "../assets/VFilmsLanding/ArtCurationIcons01.svg";
import ArtCurationIcons02 from "../assets/VFilmsLanding/ArtCurationIcons02.svg";
import ArtCurationIcons03 from "../assets/VFilmsLanding/ArtCurationIcons03.svg";
import ArtCurationIcons04 from "../assets/VFilmsLanding/ArtCurationIcons04.svg";
import ArtFrame from "../assets/VFilmsLanding/Frame3.svg";

// --- Content Mapping ---
// This object maps the polaroid ID to its specific assets and quote.
// This makes the component scalable. Adding a new category only requires a new entry here.
const contentMap = {
  0: {
    quote: `"Filmmaking is a chance to live many lifetimes." - Robert Altman`,
    mainImage: FilmFrame,
    decorativeImages: [
      { id: 1, src: Camera01, alt: "Decorative Film Reel", className: "fixed top-[15%] right-[8%] opacity-30 w-24 h-auto hidden lg:block", style: { transform: 'rotate(-5deg)' } },
      { id: 2, src: Camera03, alt: "Decorative Video Camera", className: "fixed top-[45%] right-[14%] opacity-30 w-28 h-auto hidden lg:block", style: { transform: 'rotate(10deg)' } },
      { id: 3, src: Camera04, alt: "Decorative Camera", className: "fixed bottom-[10%] left-[12%] opacity-30 w-28 h-auto hidden lg:block", style: { transform: 'rotate(0deg)' } },
      { id: 4, src: Camera02, alt: "Decorative Tripod", className: "fixed bottom-[8%] right-[10%] opacity-30 w-24 h-auto hidden lg:block", style: { transform: 'rotate(5deg)' } },
    ],
  },
  1: {
    quote: `"Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs`,
    mainImage: BrandingFrame,
    decorativeImages: [
      { id: 1, src: BrandingVector01, alt: "Decorative Branding Vector", className: "fixed top-[15%] left-[10%] opacity-30 w-24 h-auto hidden lg:block", style: { transform: 'rotate(15deg)' } },
      { id: 2, src: BrandingVector02, alt: "Decorative Branding Vector", className: "fixed top-[50%] right-[12%] opacity-30 w-28 h-auto hidden lg:block", style: { transform: 'rotate(-10deg)' } },
      { id: 3, src: BrandingVector03, alt: "Decorative Branding Vector", className: "fixed bottom-[12%] right-[8%] opacity-30 w-20 h-auto hidden lg:block", style: { transform: 'rotate(5deg)' } },
      { id: 4, src: BrandingVector04, alt: "Decorative Branding Vector", className: "fixed bottom-[15%] left-[15%] opacity-30 w-32 h-auto hidden lg:block", style: { transform: 'rotate(-5deg)' } },
    ],
  },
  2: {
    quote: `"Art is not what you see, but what you make others see." - Edgar Degas`,
    mainImage: ArtFrame,
    decorativeImages: [
      { id: 1, src: ArtCurationIcons01, alt: "Decorative Art Icon", className: "fixed top-[20%] right-[10%] opacity-30 w-24 h-auto hidden lg:block", style: { transform: 'rotate(10deg)' } },
      { id: 2, src: ArtCurationIcons02, alt: "Decorative Art Icon", className: "fixed top-[55%] left-[14%] opacity-30 w-28 h-auto hidden lg:block", style: { transform: 'rotate(-15deg)' } },
      { id: 3, src: ArtCurationIcons03, alt: "Decorative Art Icon", className: "fixed bottom-[15%] left-[10%] opacity-30 w-20 h-auto hidden lg:block", style: { transform: 'rotate(20deg)' } },
      { id: 4, src: ArtCurationIcons04, alt: "Decorative Art Icon", className: "fixed bottom-[10%] right-[12%] opacity-30 w-32 h-auto hidden lg:block", style: { transform: 'rotate(-5deg)' } },
    ],
  },
};

// --- Default Data ---
// Provides fallback content to prevent crashes on refresh or direct navigation.
const defaultPolaroidData = {
  id: 0,
  title: "Film Production",
  description: `Who says films are just an escape?
We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.
V crafts:
Documentaries
Corporate Videos
2D Animation Videos
3D Animation Videos`,
  imageTitle: "Film Production",
};


const VFilmsLanding = ({ onBackClick, polaroidData: propPolaroidData }) => {
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Safely access polaroidData from props first, then from location state, and finally fallback to default.
  const polaroidData = propPolaroidData || location.state?.polaroidData || defaultPolaroidData;
  
  // Use a valid ID to select content, defaulting to 0 if the ID is invalid.
  const content = contentMap[polaroidData.id] || contentMap[0];

  const handleBackClick = () => {
    // If onBackClick function is provided by the parent component (App.jsx state-based navigation)
    if (onBackClick) {
      onBackClick();
    } 
    // Otherwise, use browser history navigation
    else {
      // Check if there's a previous page in history
      if (window.history.state && window.history.state.idx > 0) {
        navigate(-1); // Navigate back to the previous page
      } else {
        // If no previous page, navigate to the showcase page or home
        navigate('/'); // Assuming root route is the showcase page
      }
    }
  };

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6 md:px-12 lg:px-24"
    style={{
        backgroundColor: "#FDD0C1",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="min-h-screen relative overflow-x-hidden font-serif w-full">
        {/* Decorative Images: Rendered dynamically based on ID */}
        {content.decorativeImages.map(img => (
          <img key={img.id} src={img.src} alt={img.alt} className={img.className} style={img.style} />
        ))}

        {/* Quote Section */}
        <div className="text-center px-5 pt-16 pb-10 relative">
          <p className="text-2xl md:text-3xl italic text-gray-800 max-w-4xl mx-auto font-halant">
            {content.quote}
          </p>
          <div className="flex justify-center mt-4">
            <img src={Vector5} alt="decorative line" className="w-full max-w-3xl" />
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="absolute left-40 top-44 px-6 py-2 border-2 border-[#d35400] bg-transparent text-[#d35400] rounded-full hover:cursor-pointer duration-300 flex items-center gap-2 text-sm"
        >
          <img src={Icon} alt="Back icon" />
          <span>Back</span>
        </button>

        {/* Main Content */}
        <div className="flex flex-wrap justify-center items-start px-10 py-16 gap-10 lg:gap-20">
          {/* Polaroid Card */}
          <div
            className={`relative bg-white overflow-hidden mx-auto transition-all duration-500 ${isCardHovered ? "-translate-y-4 rotate-1" : "rotate-0"}`}
            style={{
              maxWidth: '340px',
              padding: "10px 16px 15px 16px",
              boxShadow: isCardHovered
                ? "0 25px 50px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.15)"
                : "0 15px 35px rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
          >
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src={content.mainImage}
                alt={polaroidData.imageTitle}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-6 text-center">
              <h3 className="text-xl text-gray-900 font-halant tracking-wide">
                {polaroidData.title}
              </h3>
            </div>
          </div>

          {/* Info Section */}
          <div className="max-w-lg relative">
            <h2 className="text-xl md:text-2xl mb-10 text-gray-800 relative right-60 font-instrument whitespace-pre-line">
              {polaroidData.description}
            </h2>
            <div
              className="flex flex-col items-start gap-4 cursor-pointer group"
              onMouseEnter={() => setIsExploreHovered(true)}
              onMouseLeave={() => setIsExploreHovered(false)}
              onClick={() => alert("Exploring projects...")}
            >
              <span className="text-lg text-[#d35400] font-instrument">
                Explore Now
              </span>
              <img
                src={Arrow}
                alt="arrow"
                className={`transition-transform duration-300 ${isExploreHovered ? "translate-x-2" : ""} w-18 h-6`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VFilmsLanding;