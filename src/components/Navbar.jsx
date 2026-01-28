import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-indigo-950 text-white fixed w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
        <img src="/assets/logo.png" alt="Coruja Alerta" className="h-10 w-10 rounded-full" />
        <span className="font-bold text-xl tracking-wider">CORUJA ALERTA</span>
        </div>
        <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
        <a href="#home" className="hover:text-cyan-400 px-3 py-2 rounded-md transition">Início</a>
        <a href="#services" className="hover:text-cyan-400 px-3 py-2 rounded-md transition">Serviços</a>
        <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-full font-bold transition">Fale Conosco</a>
        </div>
        </div>
        </div>
        </div>
        </nav>
    );
};

export default Navbar;
