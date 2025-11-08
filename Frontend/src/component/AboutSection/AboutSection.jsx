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
            className={`p-10 rounded-lg shadow-xl relative w-full max-w-md bottom-14 ${className}`}
            style={{
                transform: 'rotate(-15deg)',
                backgroundImage: `url(${Page})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '250px',
            }}
            transition={{ duration: 0.3 }}
        // Removed whileInView and viewport
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
            <div className="absolute -top-6 -right-5 z-10">
                <img
                    src={Pin}
                    alt="pin"
                    className="w-20 h-20"
                />
            </div>
            <p className="text-brand-blue font-halant font-semibold leading-relaxed text-lg relative z-5">
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
            position: 'top-10 left-1/2 -translate-x-1/2',
            arrowClass: 'top-10 left-1/2 -translate-x-1/2 w-24 h-24'
        },
        {
            title: 'Art Curators',
            arrow: rightArrow,
            position: 'top-19 -right-3',
            arrowClass: 'top-12 right-6 w-24 h-32'
        },
        {
            title: 'Branding Experts',
            arrow: leftArrow,
            position: '-bottom-10 -left-60',
            arrowClass: 'bottom-9 left-24 w-48 h-48'
        },
    ];
    return (
        <div className="relative h-[450px] flex items-end  bottom-6 justify-center pb-8">
            {/* People SVG */}
            <motion.div
                className="w-[400px] h-auto relative z-10"
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
                    <p className="font-island  italic text-4xl text-brand-blue whitespace-nowrap">
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
        <section className="relative  min-h-screen py-20 px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Top Section with Sticky Note and Team */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-0">
                    {/* Sticky Note - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center lg:justify-start"
                    >
                        <StickyNote content={aboutText} className="max-w-md" />
                    </motion.div>
                    {/* Team Section - Right Side */}
                    <div>
                        <TeamSection />
                    </div>
                </div>
                {/* Bottom Section: 1/2 and 1/2 layout with Taj Mahal and CTA */}
                <div className="flex flex-col lg:flex-row items-start justify-center mt-0 gap-12">
                    {/* Decorative Monument Illustration - Left Half */}
                    <motion.div
                        className="w-full lg:w-1/2 relative -left-50 bottom-20 flex justify-center lg:justify-center "
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 0.8, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={tajmehal}
                            alt=""
                            className="w-[300px] h-[300px] object-contain"
                        />
                    </motion.div>
                    {/* Bottom Text and CTA - Right Half */}
                    <motion.div
                        className="w-full lg:w-1/2 text-center lg:text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2 className="text-2xl text-brand-blue font-halant font-medium mb-8 max-w-3xl mx-auto leading-tight">
                            Take a closer look at the stories V bring to life.
                        </h2>
                        <motion.button
                            className="bg-[#FF5733] text-white font-instrument  px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
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
