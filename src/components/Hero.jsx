import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-new.jpg';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroBg} 
                    alt="Casa del Niño Background" 
                    className="w-full h-full object-cover"
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Un hogar, un futuro y una familia <br className="hidden md:block" />
                        para quienes más lo necesitan.
                    </h1>

                    <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                        Garantizamos cuidado individualizado y profesional las 24 horas,
                        los 365 días del año en Unquillo, Córdoba.
                    </p>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
