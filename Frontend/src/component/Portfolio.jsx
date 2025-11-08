import { useState } from 'react';
import { motion } from 'framer-motion';

// Import your SVGs
import CameraIcon from '../assets/portfolio/cam-three.svg';
import LeftArrow from '../assets/portfolio/left-slider.svg';
import RightArrow from '../assets/portfolio/right-slider.svg';
import ReelBg from '../assets/portfolio/reel.svg';
import RightCorner from '../assets/portfolio/right-corner.svg';
import Coverimage from "../assets/portfolio/image.svg"

const PortfolioHighlightReel = ({ videos = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full relative py-16 px-4">
            {/* Main Container */}
            <div className="relative z-10 flex flex-col items-center justify-center ">
                {/* Title */}
                <div className="text-center">
                    <h2 className="font-halant text-4xl  text-brand-blue mb-2">
                        The Highlight Reel
                    </h2>
                    <p className="text-gray-600 font-instrument text-lg">
                        Watch the magic we've captured.
                    </p>
                </div>

                {/* Full Width Container - Camera + Reel */}
                <div className="relative w-full flex items-center justify-start gap-4 pl-8">
                    {/* Left - Camera Icon */}
                    <div className="shrink-0 relative bottom-15">
                        <img
                            src={CameraIcon}
                            alt="Camera"
                            className="w-80 h-100 object-contain drop-shadow-lg"
                        />
                    </div>

                    {/* Right - Reel with Video */}
                    <div className="relative w-200 right-2 h-150 flex items-center justify-center">
                        {/* Background Image - acts as container */}
                        <img
                            src={ReelBg}
                            alt="Film reel background"
                            className="w-190 h-130 object-contain"
                        />

                        {/* Cover Image - centered on background */}
                        <img
                            src={Coverimage}
                            alt="Cover image"
                            className="absolute w-150 h-75 object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-2xl"
                        />

                        {/* Left Arrow - positioned on left side */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-7 top-1/2 transform -translate-y-1/2 w-16 h-70 flex items-center rounded-lg justify-center bg-white  hover:opacity-80 transition-opacity z-10 cursor-pointer"
                        >
                            <img
                                src={LeftArrow}
                                alt="Previous"
                                className="w-13 h-40"
                            />
                        </button>

                        {/* Right Arrow - positioned on right side */}
                        <button
                            onClick={goToNext}
                            className="absolute right-7 top-1/2 transform -translate-y-1/2 w-16 h-70 flex items-center rounded-lg justify-center bg-white  hover:opacity-80 transition-opacity z-10 cursor-pointer"
                        >
                            <img
                                src={RightArrow}
                                alt="Next"
                                className="w-13 h-40"
                            />
                        </button>
                    </div>

                    {/* Right Corner - bottom-right positioning */}
                    <div className="absolute bottom-6 -right-25 flex justify-end items-end  shrink-0">
                        <img
                            src={RightCorner}
                            alt="Decorative corner"
                            className="w-100 h-100 object-contain drop-shadow-lg"
                        />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PortfolioHighlightReel;
