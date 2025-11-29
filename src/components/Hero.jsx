import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative bg-primary min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Gradient/Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-900 opacity-90 z-0"></div>

            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

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

                    <motion.a
                        href="#help"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-secondary hover:bg-orange-600 text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
                    >
                        Cómo Ayudar
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
