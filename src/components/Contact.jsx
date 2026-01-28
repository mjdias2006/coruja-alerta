import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-indigo-950">
        <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
        Fale com a <span className="text-cyan-400">Coruja</span>
        </h2>

        <form className="space-y-6 bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
        <div>
        <label className="block text-gray-300 mb-2 font-medium">Nome</label>
        <input
        type="text"
        className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
        placeholder="Seu nome ou da sua empresa"
        />
        </div>

        <div>
        <label className="block text-gray-300 mb-2 font-medium">E-mail</label>
        <input
        type="email"
        className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
        placeholder="seu@email.com"
        />
        </div>

        <div>
        <label className="block text-gray-300 mb-2 font-medium">Como podemos ajudar?</label>
        <textarea
        rows="4"
        className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
        placeholder="Descreva seu desafio de TI..."
        ></textarea>
        </div>

        <button
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold py-4 rounded-lg shadow-lg transform transition hover:scale-[1.02]"
        >
        Enviar Mensagem
        </button>
        </form>
        </div>
        </section>
    );
};

export default Contact;
