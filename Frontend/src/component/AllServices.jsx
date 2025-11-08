import React from "react";
import { motion } from "framer-motion";

// Local Assets
import underline from "../assets/storyboard/underline-asset.svg";
import PaperTape from "../assets/storyboard/PaperTape.svg";
import LeftImage from "../assets/storyboard/Leftimage.svg";
import MiddleImage from "../assets/storyboard/Middleimage.svg";
import RightImage from "../assets/storyboard/Rightimage.svg";
import FrameBorder from "../assets/storyboard/FrameBorder.svg";

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
    svgImage: LeftImage,
    imageTitle: "Film Production",
  },
  {
    id: 1,
    title: "Branding",
    description: `A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust.
We shape brands that people remember, return to, and fall in love with.
V creates:
Branding & Communication
Market Mapping
Content Management
Social Media Management
Rebranding`,
    svgImage: MiddleImage,
    imageTitle: "Brand Identity",
  },
  {
    id: 2,
    title: "Art Curation",
    description: `Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong.
Through every festival, every performance, and every gathering, we help stories find their stage and their people.
V curates:
Art Festivals
Live Performances
Community Events
Cultural Storytelling`,
    svgImage: RightImage,
    imageTitle: "Art Curation",
  },
];

export default function AllServices({ onPolaroidClick }) {
  const handlePolaroidClick = (polaroidData) => {
    onPolaroidClick(polaroidData);
  };

  return (
    <section
      className="relative min-h-screen bg-background flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="text-center mt-12 relative top-10">
          <h1 className="text-4xl font-halant mb-2">
            The storyboard reveals the breadth of our craft.
          </h1>
          <img
            src={underline}
            alt="underline"
            className="mx-auto"
            style={{ width: "878px", height: "28px" }}
          />
        </div>

        {/* Polaroids and Preview Container */}
        <div
          className="relative grow flex items-center justify-center"
        >
          {/* Polaroid photoframes */}
          <div className="flex justify-center gap-10">
            {showcaseData.map((feat, index) => (
              <div
                key={feat.id}
                className="relative" // Container for polaroid
              >
                <motion.div
                  className={`bg-white shadow-lg border border-gray-200 w-56  flex flex-col items-center ${
                    index === 0 ? "rotate-8" : index === 2 ? "-rotate-8" : ""
                  } transition-transform duration-300 cursor-pointer hover:scale-105`}
                  style={{ boxShadow: "0 8px 24px 0 rgb(0 0 0 / 0.07)" }}
                  onClick={() => handlePolaroidClick(feat)}
                >
                  <img
                    src={PaperTape}
                    alt="tape"
                    className={`absolute w-28 ${
                      index === 0
                        ? "-left-10 -top-7 -rotate-10"
                        : index === 1
                        ? "left-1/2 -translate-x-1/2 -top-6 rotate-3"
                        : "-right-8 -top-7 rotate-35"
                    } z-20`}
                  />
                  <motion.img
                    src={feat.svgImage}
                    alt={feat.imageTitle}
                    className="w-full h-auto object-contain  relative z-10"
                    style={{ maxHeight: index === 1 ? '280px' : '320px', 
                      rotate: index === 0 ? '-7.5deg' : index === 2 ? '7.5deg' : '0deg',
                      transformOrigin: 'center'
                    }}
                    initial={{ scale: index === 1 ? 0.9 : 1 }}
                  />
                  <div className="text-center font-serif mb-2 text-lg mt-2">
                    {feat.title}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed lower border */}
      <div
        className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 lg:h-24"
        style={{
          backgroundImage: `url(${FrameBorder})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "bottom",
          zIndex: 50,
        }}
      />
    </section>
  );
}