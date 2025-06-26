import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6">
              Sobre a São Pedro Madeiras
            </h2>
            <p className="text-yellow-200 mb-4 leading-relaxed">
              Fundada em 2003, a São Pedro Madeiras é uma empresa familiar 
              especializada no fornecimento de madeiras nobres e materiais 
              de construção de alta qualidade.
            </p>
            <p className="text-yellow-200 mb-6 leading-relaxed">
              Localizada na Avenida Gastão Vidigal, no Jardim Matilde, 
              atendemos clientes em toda a região com produtos certificados 
              e atendimento personalizado há mais de 20 anos.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <p className="text-yellow-300 font-medium">Madeiras certificadas</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <p className="text-yellow-300 font-medium">Entrega rápida</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <p className="text-yellow-300 font-medium">Preços competitivos</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <p className="text-yellow-300 font-medium">Atendimento especializado</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-900 border border-yellow-500/30 rounded-lg">
              <h3 className="text-yellow-400 font-semibold mb-2">Contato Direto</h3>
              <p className="text-yellow-200 text-sm mb-1">📞 (14) 99855-2803</p>
              <p className="text-yellow-200 text-sm">📧 saopedromadeiras@outlook.com</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Loja São Pedro Madeiras"
              className="w-full rounded-lg shadow-2xl border border-yellow-500/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;