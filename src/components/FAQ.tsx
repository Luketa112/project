import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: 'O que é o StarRed?',
      answer: 'O StarRed é uma plataforma premium para elevar sua gameplay a outro nível, que oferece diversas funcionalidades avançadas para melhorar sua experiência de jogo, com interface moderna e recursos exclusivos.'
    },
    {
      question: 'É seguro usar o StarRed?',
      answer: 'Sim, nossa plataforma possui sistema anti-detecção avançado que minimiza os riscos de banimento. No entanto, recomendamos sempre usar com moderação e seguir nossas diretrizes de uso para máxima segurança.'
    },
    {
      question: 'Como funciona o processo de compra?',
      answer: 'Após a compra, você receberá um código de ativação por email ou discord, ou poderá acessá-lo diretamente em nosso site. Este código deve ser usado em nossa plataforma para ativar seu acesso ao programa.'
    },
    {
      question: 'Posso usar em mais de um computador?',
      answer: 'Cada licença permite o uso em apenas um computador por vez. Não é possível utilizar a mesma licença em múltiplos computadores simultaneamente.'
    },
    {
      question: 'Vocês oferecem reembolso?',
      answer: 'Oferecemos reembolso em até 24 horas após a compra, desde que o serviço não tenha sido utilizado. Entre em contato com nosso suporte para mais informações sobre nossa política de reembolso.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Tire suas dúvidas sobre o StarRed
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/30 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
              >
                <span className="text-lg font-semibold text-white hover:text-purple-300 transition-colors duration-300">
                  {faq.question}
                </span>
                <div className="ml-4 flex-shrink-0">
                  {openItem === index ? (
                    <ChevronUp className="h-5 w-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;