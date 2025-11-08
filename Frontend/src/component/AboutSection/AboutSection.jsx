// components/AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import leftArrow from '../../assets/about/left-arrow.svg';
import people from '../../assets/about/people.svg';
import rightArrow from '../../assets/about/right-arrow.svg';
import tajmehal from '../../assets/about/tajmehal.svg';
import topArrow from '../../assets/about/top-arrow.svg';
import Page from '../../assets/about/Page.png'
import Pin from '../../assets/about/Pin.png'

const StickyNote = ({ content, className = '' }) => {
    return (
        <motion.div
            className={`p-6 sm:p-8 md:p-10 rounded-lg shadow-xl relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md ${className}`}
            style={{
                transform: 'rotate(-15deg) ',
                backgroundImage: `url(${Page})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '200px sm:min-h-220 md:min-h-250',
            }}
            transition={{ duration: 0.3 }}
        >
            {/* Yellow filter overlay */}
            <div
                className="absolute inset-0 pointer-events-none rounded-lg"
                style={{
                    backgroundColor: 'rgba(249, 232, 155, 0.6)',
                    mixBlendMode: 'multiply',
                }}
            />
            {/* Pin decoration */}
            <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 lg:-top-6 lg:-right-5 z-10">
                <img
                    src={Pin}
                    alt="pin"
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                />
            </div>
            <p className="text-brand-blue font-halant font-semibold leading-relaxed text-sm sm:text-base md:text-lg lg:text-lg relative z-5">
                {content}
            </p>
        </motion.div>
    );
};

const TeamSection = () => {
    const roles = [
        {
            title: 'Film Makers',
            arrow: topArrow,
            position: 'top-2 sm:top-4 md:top-6 lg:top-10 left-1/2 -translate-x-1/2',
            arrowClass: 'top-2 sm:top-4 md:top-6 lg:top-10 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24',
            textSize: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl'
        },
        {
            title: 'Art Curators',
            arrow: rightArrow,
            position: 'top-8 sm:top-12 md:top-16 lg:top-19 -right-2 sm:-right-3 md:-right-3 lg:-right-15',
            arrowClass: 'top-6 sm:top-8 md:top-10 lg:top-12 right-2 sm:right-4 md:right-5 lg:right-6 w-12 h-16 sm:w-16 sm:h-20 md:w-20 md:h-28 lg:w-24 lg:h-32',
            textSize: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl'
        },
        {
            title: 'Branding Experts',
            arrow: leftArrow,
            position: '-bottom-0 hidden -left-8 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 sm:-left-32 md:-left-40 lg:-left-60 lg:block',
            arrowClass: 'bottom-6 left-16 sm:bottom-4 md:bottom-6 lg:bottom-9 sm:left-12 md:left-16 lg:left-24 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48',
            textSize: 'text-lg sm:text-2xl md:text-3xl lg:text-4xl'
        },
    ];
    return (
        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] flex items-end bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 justify-center pb-4 sm:pb-6 md:pb-8 lg:pb-8">
            {/* People SVG */}
            <motion.div
                className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto relative z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src={people}
                    alt="Team silhouettes"
                    className="w-100 h-auto"
                />
            </motion.div>
            {/* Role Labels with Arrows */}
            {roles.map((role, index) => (
                <motion.div
                    key={role.title}
                    className={`absolute ${role.position}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                >
                    <p className={`font-island italic ${role.textSize} text-brand-blue whitespace-nowrap`}>
                        {role.title}
                    </p>
                    {/* Arrow SVG */}
                    <div className={`absolute ${role.arrowClass}`}>
                        <img
                            src={role.arrow}
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const AboutSection = () => {
    const aboutText = `Some craft films. Some build brands. Some curate art. We bring it all together  –  a collective of storytellers driven by one belief: every project deserves to be more than just a message; it should become a masterpiece. From first spark to final frame, from raw ideas to timeless visuals – we shape stories that stay with you.`;
    return (
        <section className="relative min-h-screen py-12 sm:py-18 md:py-18 lg:py-13 px-4 sm:px-6 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Top Section with Sticky Note and Team */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-12 items-center mb-0">
                    {/* Sticky Note - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center lg:justify-start"
                    >
                        <StickyNote content={aboutText} className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md" />
                    </motion.div>
                    {/* Team Section - Right Side */}
                    <div className="">
                        <TeamSection />
                    </div>
                </div>
                {/* Bottom Section: 1/2 and 1/2 layout with Taj Mahal and CTA */}
                <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start  mt-4 sm:mt-6 md:mt-8 lg:mt-0 gap-8 sm:gap-10 md:gap-12 lg:gap-12">
                    {/* Decorative Monument Illustration - Left Half */}
                    <motion.div
                        className="w-full lg:w-1/2 relative left-0 sm:left-0 md:left-0 lg:-left-30 bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-10 flex justify-center lg:justify-center"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 0.8, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={tajmehal}
                            alt=""
                            className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] object-contain"
                        />
                    </motion.div>
                    {/* Bottom Text and CTA - Right Half */}
                    <motion.div
                        className="w-full lg:w-1/2 text-center lg:text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-brand-blue font-halant font-medium mb-6 sm:mb-7 md:mb-8 lg:mb-8 max-w-3xl mx-auto leading-tight">
                            Take a closer look at the stories V bring to life.
                        </h2>
                        <motion.button
                            className="bg-[#FF5733] text-white font-instrument px-6 py-3 sm:px-8 sm:py-3 md:px-9 md:py-4 lg:px-10 lg:py-4 rounded-full text-sm sm:text-base md:text-lg lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const portfolioSection = document.getElementById('services');
                                if (portfolioSection) {
                                    portfolioSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            View Portfolio
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;