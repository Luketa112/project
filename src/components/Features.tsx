import React from 'react';
import { Shield, Zap, Users, Lock, Layers, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Anti-Detecção',
      description: 'Sistema avançado que evita banimentos globais e mantém seu computador seguro durante o uso.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Performance Otimizada',
      description: 'Desenvolvido para funcionar sem impactar significativamente o desempenho do jogo.',
      gradient: 'from-purple-600 to-purple-700'
    },
    {
      icon: Users,
      title: 'Suporte Premium',
      description: 'Atendimento exclusivo para clientes com respostas rápidas e eficientes.',
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      icon: Lock,
      title: 'Atualizações Constantes',
      description: 'Receba novas funcionalidades e correções de segurança regularmente.',
      gradient: 'from-purple-600 to-purple-800'
    },
    {
      icon: Layers,
      title: 'Comunidade Estabelecida',
      description: 'Estamos há mais de 4 anos na comunidade, construindo confiança e excelência.',
      gradient: 'from-purple-500 to-purple-800'
    },
    {
      icon: Sparkles,
      title: 'Pagamento Automatizado',
      description: 'Sistema de pagamento totalmente automatizado para sua conveniência.',
      gradient: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Funcionalidades{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Poderosas
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nossa plataforma oferece recursos avançados para melhorar sua experiência 
            de jogo com tecnologia de última geração
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg shadow-purple-500/20`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;