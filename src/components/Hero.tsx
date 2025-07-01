import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-black via-gray-900 to-black py-20" style={{
      backgroundImage: "url('fundo_madeira.jpg')",
      backgroundRepeat: 'repeat',
      backgroundSize: 'auto',
    }}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <img 
            src="/sao_ped.jpeg" 
            alt="São Pedro Madeiras Logo" 
            className="h-40 w-auto mx-auto mb-6 hover:scale-105 transition-transform duration-500 drop-shadow-2xl filter brightness-110"
          />
        </div>
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6">
          Madeiras de Qualidade
        </h2>
        <p className="text-lg text-yellow-300 mb-12">
          📍 Avenida Gastão Vidigal, 953 - Jardim Matilde | 📞 (14) 99855-2803
        </p>
        
        <div className="space-y-12">
          <a href="/catalog1.pdf" target="_blank" className="cursor-pointer px-12 py-4  bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-xl rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 transform hover:scale-105">
            Ver Catálogo Completo
          </a>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-yellow-400 text-3xl mb-3">🏗️</div>
              <h3 className="text-yellow-400 font-semibold mb-2">Madeira Estrutural</h3>
              <p className="text-yellow-200 text-sm">Vigas e estruturas de alta qualidade</p>
            </div>
            
            <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-yellow-400 text-3xl mb-3">🏠</div>
              <h3 className="text-yellow-400 font-semibold mb-2">Pisos & Decks</h3>
              <p className="text-yellow-200 text-sm">Pisos e decks em madeiras nobres</p>
            </div>
            
            <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-yellow-400 text-3xl mb-3">✨</div>
              <h3 className="text-yellow-400 font-semibold mb-2">Acabamentos</h3>
              <p className="text-yellow-200 text-sm">Forros, lambris e acabamentos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;