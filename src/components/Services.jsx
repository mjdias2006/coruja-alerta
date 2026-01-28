import React from 'react';

const services = [
    {
        title: "Assessoria em IA",
        desc: "Automatize processos e escale com inteligência.",
        img: "/assets/service-ia.png" // Corte 1 do banner
    },
{
    title: "Segurança Cibernética",
    desc: "Proteção blindada contra ataques e invasões.",
    img: "/assets/service-sec.png" // Corte 2 do banner
},
{
    title: "Nuvem & Backups",
    desc: "Mobilidade segura e dados sempre disponíveis.",
    img: "/assets/service-cloud.png" // Corte 3 do banner
}
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
        Nossos Pilares de <span className="text-purple-500">Proteção</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition duration-300 border border-gray-700">
            <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.desc}</p>
            </div>
            </div>
        ))}
        </div>
        </div>
        </section>
    );
};

export default Services;
