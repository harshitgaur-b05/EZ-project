import React from "react";
import { motion } from "framer-motion";

// Local Assets
import papertaper from "../assets/storyboard/papertaper.svg";
import leftimagee from "../assets/storyboard/leftimagee.svg";
import middleimagee from "../assets/storyboard/middleimagee.svg";
import rightimagee from "../assets/storyboard/rightimagee.svg";
import FrameBordere from "../assets/storyboard/FrameBordere.svg";
import underlinee from "../assets/storyboard/underlinee.svg";

// Data for the polaroids
const showcaseData = [
  {
    id: 0,
    title: "Film Production",
    description: `Who says films are just an escape?
We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.
V crafts:
Documentaries
Corporate Videos
2D Animation Videos
3D Animation Videos`,
    svgImage: leftimagee,
    imageTitle: "Film Production",
  },
  {
    id: 1,
    title: "Branding",
    description: `A brand isn't just what you see - it's what you remember, what you carry home, and what you trust.
We shape brands that people remember, return to, and fall in love with.
V creates:
Branding & Communication
Market Mapping
Content Management
Social Media Management
Rebranding`,
    svgImage: middleimagee,
    imageTitle: "Brand Identity",
  },
  {
    id: 2,
    title: "Art Curation",
    description: `Art isn't meant to sit on distant walls - it's meant to breathe, to travel, to belong.
Through every festival, every performance, and every gathering, we help stories find their stage and their people.
V curates:
Art Festivals
Live Performances
Community Events
Cultural Storytelling`,
    svgImage: rightimagee,
    imageTitle: "Art Curation",
  },
];

export default function AllServices({ onPolaroidClick }) {
  const handlePolaroidClick = (polaroidData) => {
    onPolaroidClick(polaroidData);
  };

  return (
    <section
      className="relative min-h-screen bg-background  flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden"
     
    >
      <div className="min-h-screen flex flex-col py-8 sm:py-12 lg:py-0">
        {/* Header */}
        <div className="text-center mt-4 sm:mt-6 lg:mt-12 relative top-4 sm:top-6 lg:top-10">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-halant mb-2 px-4 sm:px-0">
            The storyboard reveals the breadth of our craft.
          </h1>
          <img
            src={underlinee}
            alt="underline"
            className="mx-auto max-w-full"
            style={{ 
              width: "878px", 
              height: "28px",
              maxWidth: "90vw"
            }}
          />
        </div>

        {/* Polaroids and Preview Container */}
        <div className="relative grow flex items-center justify-center">
          {/* Polaroid photoframes - Smaller cards to fit in row */}
          <div className="flex flex-row justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 w-full px-2 sm:px-4 lg:px-0">
            {showcaseData.map((feat, index) => (
              <div
                key={feat.id}
                className="relative"
              >
                <motion.div
                  className={`bg-white shadow-lg border border-gray-200 w-28 sm:w-36 md:w-44 lg:w-56 flex flex-col items-center ${
                    index === 0 ? "lg:rotate-8" : index === 2 ? "lg:-rotate-8" : ""
                  } transition-transform duration-300 cursor-pointer hover:scale-105`}
                  style={{ boxShadow: "0 8px 24px 0 rgb(0 0 0 / 0.07)" }}
                  onClick={() => handlePolaroidClick(feat)}
                >
                  <img
                    src={papertaper}
                    alt="tape"
                    className={`absolute w-14 sm:w-18 md:w-22 lg:w-28 ${
                      index === 0
                        ? "-left-4 sm:-left-5 md:-left-7 lg:-left-10 -top-4 sm:-top-5 md:-top-6 lg:-top-7 -rotate-10"
                        : index === 1
                        ? "left-1/2 -translate-x-1/2 -top-3 sm:-top-4 md:-top-5 lg:-top-6 rotate-3"
                        : "-right-4 sm:-right-5 md:-right-6 lg:-right-8 -top-4 sm:-top-5 md:-top-6 lg:-top-7 rotate-35"
                    } z-20`}
                  />
                  <motion.img
                    src={feat.svgImage}
                    alt={feat.imageTitle}
                    className="w-full h-auto object-contain relative z-10"
                    style={{ 
                      maxHeight: index === 1 ? '180px sm:220px md:250px lg:280px' : '200px sm:250px md:280px lg:320px', 
                      rotate: index === 0 ? '-7.5deg' : index === 2 ? '7.5deg' : '0deg',
                      transformOrigin: 'center'
                    }}
                    initial={{ scale: index === 1 ? 0.9 : 1 }}
                  />
                  <div className="text-center font-serif mb-1 sm:mb-2 text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2 px-1 sm:px-2">
                    {feat.title}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed lower border - Increased height for better visibility */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 lg:h-24"
        style={{
          backgroundImage: `url(${FrameBordere})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "bottom",
          zIndex: 50,
        }}
      />
    </section>
  );
}