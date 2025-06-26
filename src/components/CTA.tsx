import React from 'react';
import { MessageSquare } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-purple-950/30 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rounded-3xl"></div>
          
          <div className="relative z-10 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para elevar sua{' '}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                experiência?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Junte-se a milhares de jogadores que já estão usando o StarRed 
              para uma experiência de jogo superior e profissional.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#shop">
                <button className="group inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white h-12 rounded-lg px-8 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105 text-lg">
                  Comprar Agora
                  <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </div>
                </button>
              </a>
              
              <a href="#discord">
                <button className="group inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-transparent backdrop-blur-sm hover:bg-purple-500/20 h-12 rounded-lg px-8 border-purple-400 text-white hover:border-purple-300 text-lg">
                  <MessageSquare className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Falar com Suporte
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;