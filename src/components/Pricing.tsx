import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Semanal',
      description: 'Tem direito de acesso por 7 dias ao programa',
      price: 'R$20.00',
      period: '/ único',
      popular: false,
      features: [
        'Total acesso ao menu',
        'Suporte em nosso discord',
        'Ideal para players que ainda não conhecem o programa'
      ]
    },
    {
      name: 'Mensal',
      description: 'Tem direito de acesso por 31 dias ao programa',
      price: 'R$40.00',
      period: '/ único',
      popular: true,
      features: [
        'Total acesso ao menu',
        'Suporte em nosso discord',
        'Possibilidade de aproveitar por mais tempo'
      ]
    },
    {
      name: 'Trimestral',
      description: 'Tem direito de acesso por 91 dias ao programa',
      price: 'R$80.00',
      period: '/ único',
      popular: false,
      features: [
        'Total acesso ao menu',
        'Suporte em nosso discord',
        'Diversão completa e sem pressa'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Planos e{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Preços
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Escolha o plano ideal para suas necessidades e comece sua jornada premium
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl text-card-foreground shadow-2xl transition-all duration-500 hover:transform hover:scale-105 ${
                plan.popular
                  ? 'border-2 border-purple-500 bg-gradient-to-b from-purple-900/20 to-gray-900'
                  : 'border border-gray-800 bg-gray-900/50 hover:border-purple-500/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Mais Popular</span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#shop" className="block">
                  <button
                    className={`w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40'
                        : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-purple-500/50'
                    }`}
                  >
                    Comprar Agora
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;