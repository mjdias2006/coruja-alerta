import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="bg-gradient-to-b from-indigo-900 to-purple-900 h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
        Seus dados são o <span className="text-yellow-400">Novo Ouro</span>.
        </h1>
        <p className="text-xl text-gray-300">
        Segurança Cibernética, Inteligência Artificial e Nuvem. A Coruja vigia seu negócio 24/7.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105">
        Diagnóstico Gratuito
        </button>
        <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 font-bold py-3 px-8 rounded-full transition">
        Ver Planos
        </button>
        </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        {/* Use a imagem da Coruja Voando ou com Escudo aqui */}
        <img src="/assets/hero-owl.png" alt="Mascote Coruja" className="w-3/4 animate-float" />
        </div>
        </div>
        </section>
    );
};

export default Hero;
