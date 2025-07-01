import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black border-b border-yellow-500/30 py-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="/sao_ped.jpeg" 
            alt="São Pedro Madeiras Logo" 
            className="h-16 w-auto"
          />
          <div>
            <h1 className="text-2xl font-bold text-yellow-400">São Pedro Madeiras</h1>
            <p className="text-yellow-300 text-sm">Qualidade e Tradição</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">Início</a>
          <a href="#about" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">Sobre</a>
          <a href="#contact" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;