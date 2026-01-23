import React from 'react';
import { MapPin, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {


    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contacto</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Estamos en Unquillo</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-secondary mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-700">Dirección</h4>
                                    <p className="text-gray-600">Unquillo, Provincia de Córdoba, Argentina.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-secondary mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-700">Email</h4>
                                    <p className="text-gray-600">info@casadelninio.org@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-sm">
                            <iframe 
                                title="Ubicación Casa del Niño"
                                width="100%" 
                                height="100%" 
                                frameBorder="0" 
                                scrolling="no" 
                                marginHeight="0" 
                                marginWidth="0" 
                                src="https://maps.google.com/maps?q=Deán+Funes+350,+Unquillo,+Córdoba,+Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center justify-center text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Comunicate con nosotros</h3>
                        <p className="text-gray-600 mb-8">
                            ¿Tenés dudas o querés colaborar? Escribinos directamente por WhatsApp y te responderemos a la brevedad.
                        </p>
                        <a 
                            href="https://wa.me/54903543480267" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-lg shadow-lg"
                        >
                            <MessageCircle className="w-6 h-6" />
                            Contactar por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
