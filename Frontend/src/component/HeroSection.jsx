import FullCircle from "../assets/hero/full-mandala.svg";
import { motion } from 'framer-motion';
import Logo from "../assets/logo.svg";


const HeroSection = () => {
    return (
        <section
            className="min-h-screen bg-background flex items-center justify-center px-6 md:px-12 lg:px-24"
            style={{
                backgroundColor: '#FDD0C1',
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E")`,
            }}
        >
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Logo and Chakra */}
                <div className="flex items-center justify-center relative">
                    <div className="relative w-full max-w-md aspect-square">

                        <motion.div
                            className="w-full h-full"
                            style={{
                                backgroundColor: '#FF6B3D',
                                opacity: 0.9,
                                maskImage: `url(${FullCircle})`,
                                WebkitMaskImage: `url(${FullCircle})`,
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center'
                            }}
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img 
                                src={Logo} 
                                alt="Varnam Films Logo" 
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right side - Content */}
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-foreground leading-tight">
                        Varnan is where stories find their voice and form
                    </h2>

                    <div className="flex gap-4 text-primary text-lg font-medium">
                        <span>Films</span>
                        <span>.</span>
                        <span>Brands</span>
                        <span>.</span>
                        <span>Art</span>
                    </div>

                    <p className="text-foreground/80 text-sm md:text-base leading-relaxed max-w-lg">
                        Since 2009, V've been telling stories - stories of people, their journeys, and the places that shape them.
                        Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by
                        listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
                        V doesn't just tell stories - V honors them.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;