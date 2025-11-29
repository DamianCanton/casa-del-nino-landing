import React from 'react';
import { Users, Heart, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const features = [
        {
            icon: <Clock className="w-8 h-8 text-secondary" />,
            title: "Atención 24/7",
            description: "Cuidado profesional garantizado las 24 horas, los 365 días del año."
        },
        {
            icon: <Shield className="w-8 h-8 text-secondary" />,
            title: "Espacio Seguro",
            description: "Instalaciones confortables y habilitadas para el bienestar integral."
        },
        {
            icon: <Heart className="w-8 h-8 text-secondary" />,
            title: "Misión",
            description: "Brindar estímulos para el desarrollo pleno de jóvenes con discapacidad."
        },
        {
            icon: <Users className="w-8 h-8 text-secondary" />,
            title: "Equipo Profesional",
            description: "Médicos, psicólogos, terapeutas y enfermeros dedicados."
        }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Quiénes Somos</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            Un hogar para 31 residentes
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Desde abril de 2019, nos consolidamos como un espacio seguro y confortable con todas las habilitaciones necesarias.
                            Nuestra misión es brindar la totalidad de estímulos para el desarrollo pleno de jóvenes con discapacidad en situación de vulnerabilidad extrema y abandono.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            En Casa del Niño, no solo ofrecemos un techo, sino un verdadero hogar donde cada residente recibe atención personalizada,
                            amor y las herramientas necesarias para mejorar su calidad de vida.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {features.map((feature, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="mb-4">{feature.icon}</div>
                                <h4 className="text-lg font-semibold text-primary mb-2">{feature.title}</h4>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
