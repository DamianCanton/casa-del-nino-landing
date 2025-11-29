import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src="/assets/logo.jpg"
                                alt="Casa del Niño Logo"
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                            <span className="font-bold text-lg">CASA DEL NIÑO</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Un hogar, un futuro y una familia para quienes más lo necesitan.
                        </p>
                    </div>

                    {/* Transparency */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Transparencia</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Rendición de Cuentas</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Derechos Humanos (ONU 2006)</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Nuestros Aliados</a></li>
                        </ul>
                    </div>

                    {/* Legal & FAQ */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Información</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Seguinos</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Casa del Niño. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
