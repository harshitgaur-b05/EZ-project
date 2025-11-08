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
        <div className="w-full relative py-8 sm:py-12 lg:py-16 px-4">
            {/* Main Container */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                {/* Title */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-0">
                    <h2 className="font-halant text-2xl sm:text-3xl lg:text-4xl text-brand-blue mb-2">
                        The Highlight Reel
                    </h2>
                    <p className="text-gray-600 font-instrument text-base sm:text-lg">
                        Watch the magic we've captured.
                    </p>
                </div>

                {/* Full Width Container - Camera + Reel */}
                <div className="relative w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:pl-8">
                    {/* Left - Camera Icon - Hidden on sm to lg, shown on lg+ */}
                    <div className="hidden lg:block shrink-0 relative lg:bottom-15">
                        <img
                            src={CameraIcon}
                            alt="Camera"
                            className="w-80 h-100 object-contain drop-shadow-lg"
                        />
                    </div>

                    {/* Right - Reel with Video */}
                    <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-200 lg:right-2 h-auto sm:h-auto lg:h-150  flex items-center justify-center">
                        {/* Background Image - acts as container */}
                        <img
                            src={ReelBg}
                            alt="Film reel background"
                            className="w-full   lg:w-190 lg:h-130 xl:w-190 xl:h-140 object-contain"
                        />

                        {/* Cover Image - centered on background */}
                        <img
                            src={Coverimage}
                            alt="Cover image"
                            className="absolute w-[70%] sm:w-[65%] lg:w-150 h-auto sm:h-auto lg:h-75 object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />

                        {/* Left Arrow - positioned on left side */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-2 sm:left-4 lg:left-7 top-1/2 transform -translate-y-1/2 w-12 sm:w-14 lg:w-16 h-12 sm:h-16 lg:h-70 flex items-center rounded-lg justify-center bg-white hover:opacity-80 transition-opacity z-10 cursor-pointer"
                        >
                            <img
                                src={LeftArrow}
                                alt="Previous"
                                className="w-8 sm:w-10 lg:w-13 h-8 sm:h-10 lg:h-40"
                            />
                        </button>

                        {/* Right Arrow - positioned on right side */}
                        <button
                            onClick={goToNext}
                            className="absolute right-2 sm:right-4 lg:right-7 top-1/2 transform -translate-y-1/2 w-12 sm:w-14 lg:w-16 h-12 sm:h-16 lg:h-70 flex items-center rounded-lg justify-center bg-white hover:opacity-80 transition-opacity z-10 cursor-pointer"
                        >
                            <img
                                src={RightArrow}
                                alt="Next"
                                className="w-8 sm:w-10 lg:w-13 h-8 sm:h-10 lg:h-40"
                            />
                        </button>
                    </div>

                    {/* Right Corner - bottom-right positioning */}
                    <div className="hidden sm:block absolute bottom-0 sm:bottom-4 lg:bottom-6 right-0 sm:-right-10 lg:-right-25 flex justify-end items-end shrink-0">
                        <img
                            src={RightCorner}
                            alt="Decorative corner"
                            className="w-16 sm:w-20 md:w-24 lg:w-100 h-16 sm:h-20 md:h-24 lg:h-100 object-contain drop-shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioHighlightReel;
