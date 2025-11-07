import { motion } from 'framer-motion';
import MountainImage from '../assets/aboutus/mountain-image.svg';
import CircularRing from '../assets//aboutus/circular-ring.svg';
import PageAsset from '../assets/about/Page.png';

const Aboutus = () => {
    const stats = [
        { number: '85+', label: 'Projects' },
        { number: '50+', label: 'Happy Clients' },
        { number: '10+', label: 'Experts Team' }
    ];
    return (
        <section className="min-h-screen px-6 md:px-12 lg:px-24 py-10">
            <div className="max-w-7xl mx-auto">
                {/* Header Text */}
                <div className="grid lg:grid-cols-2 gap-6 mb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="font-halant text-brand-blue text-2xl mb-3">
                            A montage of familiar faces and names.
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                            Some stories come from the biggest names. Others begin with bold, rising voices.
                            We've been fortunate to walk alongside both - listening, creating, and building stories that matter.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="font-island text-primary text-3xl md:text-4xl italic leading-relaxed">
                            Every project is more than just a brief - it's a new chapter waiting to be written.
                            Together, we've crafted tales that inspire, connect, and endure.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Cards and Mountain Section - Side by Side */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Stats Cards */}
          <div className="flex flex-row gap-8">
    {stats.map((stat, index) => (
        <motion.div
            key={index}
            className="p-10 rounded-lg shadow-lg max-w-sm relative overflow-visible"
            style={{
                backgroundImage: `url(${PageAsset})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `rotate(${index === 0 ? '5deg' : index === 1 ? '0deg' : '-5deg'})`,
                zIndex: index,
                marginLeft: index === 0 ? '0' : '-70px',
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
        >
            {/* Yellow filter overlay */}
            <div
                className="absolute inset-0 pointer-events-none rounded-lg"
                style={{
                    backgroundColor: 'rgba(249, 232, 155, 0.6)',
                    mixBlendMode: 'multiply',
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                <p className="text-brand-blue font-halant text-6xl font-bold">
                    {stat.number}
                </p>
                <p className="text-primary font-instrument text-xl mt-2">
                    {stat.label}
                </p>
            </div>
        </motion.div>
    ))}
</div>


                    {/* Right Side - Mountain with Full Circle Ring */}
                    <div className="relative w-full h-[600px] flex items-center justify-center">
                        {/* Wrapper Container - Centered */}
                        <div className="absolute w-[450px] h-[450px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            {/* Top Semicircle - Rotates and grows */}
                            <motion.div
                                className="absolute w-full h-1/2 top-0 left-0 overflow-hidden origin-bottom"
                                initial={{ scale: 0, rotate: 0, opacity: 0 }}
                                whileInView={{ scale: 1, rotate: -540, opacity: 1 }}
                                transition={{
                                    duration: 8.5,
                                    ease: [0.22, 1, 0.36, 1] // Custom ease-out curve
                                }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={CircularRing}
                                    alt="Semicircular Ring Top"
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>

                            {/* Bottom Semicircle (Mirrored 180°) - Rotates and grows */}
                            <motion.div
                                className="absolute w-full h-1/2 bottom-0 left-0 overflow-hidden origin-top"
                                initial={{ scale: 0, rotate: 0, opacity: 0 }}
                                whileInView={{ scale: 1, rotate: -540, opacity: 1 }}
                                transition={{
                                    duration: 8.5,
                                    ease: [0.22, 1, 0.36, 1] // Custom ease-out curve
                                }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={CircularRing}
                                    alt="Semicircular Ring Bottom"
                                    className="w-full h-full object-contain scale-y-[-1]"
                                />
                            </motion.div>
                        </div>

                        {/* Mountain in Center - Centered & Animated */}
                        <motion.div
                            className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={MountainImage}
                                alt="Mountain"
                                className="h-80 object-contain"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Aboutus;
