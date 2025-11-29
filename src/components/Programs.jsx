import React from 'react';
import { HeartPulse, BookOpen, UserPlus, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const Programs = () => {
    const programs = [
        {
            icon: <HeartPulse className="w-12 h-12 text-white" />,
            title: "Salud Integral",
            description: "Atención especializada de patologías crónicas y complejas, garantizando el bienestar físico y emocional de cada residente.",
            color: "bg-blue-500"
        },
        {
            icon: <BookOpen className="w-12 h-12 text-white" />,
            title: "Educación y Formación",
            description: "Traslado diario en unidades adaptadas al Centro de Día CEPAD, donde participan en talleres educativos y de autonomía.",
            color: "bg-green-500"
        },
        {
            icon: <UserPlus className="w-12 h-12 text-white" />,
            title: "Deporte e Inclusión",
            description: "Clases de Karate inclusivo con el 'Dojo Unión Unquillo', fomentando valores de respeto, igualdad y superación personal.",
            color: "bg-orange-500"
        },
        {
            icon: <Music className="w-12 h-12 text-white" />,
            title: "Cultura y Recreación",
            description: "Participación activa en actos patrios, eventos culturales y salidas recreativas para fortalecer la integración social.",
            color: "bg-purple-500"
        }
    ];

    return (
        <section id="programs" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Qué Hacemos</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Desarrollamos programas integrales para potenciar las capacidades y mejorar la calidad de vida de nuestros residentes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className={`${program.color} p-6 flex justify-center items-center`}>
                                {program.icon}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {program.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
