import React from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';

const News = () => {
    return (
        <section id="news" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Noticias y Actualidad</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto bg-red-50 border-l-4 border-accent rounded-r-xl p-8 shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <AlertCircle className="w-8 h-8 text-accent" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Emergencia en Discapacidad
                            </h3>
                            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
                                Fuente: Agencia Presentes, 2025
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                En el contexto actual, enfrentamos desafíos críticos debido a los recortes presupuestarios,
                                la falta de transporte adecuado y la lucha constante por el mantenimiento de las pensiones no contributivas.
                                Esta situación pone en riesgo la continuidad de tratamientos y la calidad de vida de las personas con discapacidad.
                            </p>
                            <a
                                href="https://agenciapresentes.org/2025/08/19/por-que-hablar-de-emergencia-en-discapacidad-y-como-la-agravo-el-ajuste/"
                                className="inline-flex items-center text-accent font-semibold hover:text-red-700 transition-colors duration-200"
                            >
                                Leer nota completa <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
