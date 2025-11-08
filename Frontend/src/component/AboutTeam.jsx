import { motion } from 'framer-motion';
import MountainImage from '../assets/aboutus/mountain-image.svg';
import CircularRing from '../assets//aboutus/circular-ring.svg';
import PageAsset from '../assets/about/Page.png';

const AboutTeam = () => {
    const stats = [
        { number: '85+', label: 'Projects' },
        { number: '50+', label: 'Happy Clients' },
        { number: '10+', label: 'Experts Team' }
    ];
    return (
        <section className="min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-10 md:py-10 lg:py-10">
            <div className="w-full">
                {/* Header Text */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-0 mb-8 sm:mb-10 md:mb-12 lg:mb-0">
                    <motion.div className='flex items-center flex-col pt-12 sm:pt-16 md:pt-18 lg:pt-20'>
                        <h3 className="font-halant text-brand-blue text-xl sm:text-2xl md:text-3xl lg:text-3xl mb-3 text-center">
                            A montage of familiar faces and names.
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-lg font-instrument text-center leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md">
                            Some stories come from the biggest names. Others begin with bold, rising voices.
                            We've been fortunate to walk alongside both - listening, creating, and building stories that matter.
                        </p>
                    </motion.div>

                    <motion.div>
                        <p className="font-island text-brand-blue text-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-5xl italic leading-relaxed">
                            Every project is more than just a brief - it's a new chapter waiting to be written.
                            Together, we've crafted tales that inspire, connect, and endure.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Cards and Mountain Section - Side by Side */}
                <div className="grid lg:grid-cols-2  gap-0 items-center">
                    {/* Left Side - Stats Cards */}
                    <div className="flex flex-row gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="p-10 rounded-lg  shadow-[0_12px_40px_0_rgba(0,0,0,0.15)] relative w-full max-w-sm"
                                style={{
                                    transform: "rotateX(10deg) rotateY(10deg) rotateZ(5deg)", // Tilted towards left
                                    transformStyle: "preserve-3d",
                                    backgroundImage: `url(${PageAsset})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    zIndex: index,
                                    marginLeft: index === 0 ? "0" : "-70px",
                                }}
                            >
                                {/* Yellow filter overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none rounded-lg"
                                    style={{
                                        backgroundColor: "rgba(249, 232, 155, 0.6)",
                                        mixBlendMode: "multiply",
                                    }}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    <p className="text-brand-blue font-instrument text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
                                        {stat.number}
                                    </p>
                                    <p className="text-primary font-instrument text-base sm:text-lg md:text-xl lg:text-xl mt-2">
                                        {stat.label}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side - Mountain with Full Circle Ring */}
                    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                        {/* Wrapper Container - Centered */}
                        <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            {/* Top Semicircle - Scale once, then rotate slowly */}
                            <motion.div
                                className="absolute w-full h-1/2 top-0 left-0 overflow-hidden origin-bottom"
                                initial={{
                                    scale: 0,
                                    rotate: 0
                                }}
                                animate={{
                                    scale: [0, 1, 1],
                                    rotate: [0, -360, -720]
                                }}
                                transition={{
                                    scale: {
                                        duration: 2,
                                        times: [0, 1, 1],
                                        ease: "easeOut"
                                    },
                                    rotate: {
                                        duration: 12,
                                        times: [0, 0.17, 1],
                                        ease: "linear",
                                        repeat: Infinity
                                    }
                                }}
                            >
                                <img
                                    src={CircularRing}
                                    alt="Semicircular Ring Top"
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>

                            {/* Bottom Semicircle - Scale once, then rotate slowly */}
                            <motion.div
                                className="absolute w-full h-1/2 bottom-0 left-0 overflow-hidden origin-top"
                                initial={{
                                    scale: 0,
                                    rotate: 0
                                }}
                                animate={{
                                    scale: [0, 1, 1],
                                    rotate: [0, -360, -720]
                                }}
                                transition={{
                                    scale: {
                                        duration: 2,
                                        times: [0, 1, 1],
                                        ease: "easeOut"
                                    },
                                    rotate: {
                                        duration: 12,
                                        times: [0, 0.17, 1],
                                        ease: "linear",
                                        repeat: Infinity
                                    }
                                }}
                            >
                                <img
                                    src={CircularRing}
                                    alt="Semicircular Ring Bottom"
                                    className="w-full h-full object-contain scale-y-[-1]"
                                />
                            </motion.div>
                        </div>

                        {/* Mountain in Center - Fades in after rings */}
                        <motion.div
                            className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 1.5,
                                ease: "easeOut"
                            }}
                        >
                            <img
                                src={MountainImage}
                                alt="Mountain"
                                className="h-40 sm:h-48 md:h-60 lg:h-80 object-contain"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;