import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Usando Formspree para enviar para saopedromadeiras@outlook.com
      const response = await fetch('https://formspree.io/f/xdkogkpv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _replyto: formData.email,
          _subject: 'Nova solicitação de orçamento - São Pedro Madeiras',
          _to: 'saopedromadeiras@outlook.com'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de solicitar um orçamento para madeiras.

*Nome:* ${formData.name || '[Nome]'}
*Email:* ${formData.email || '[Email]'}
*Telefone:* ${formData.phone || '[Telefone]'}
*Projeto:* ${formData.message || '[Descrição do projeto]'}`;
    
    const whatsappUrl = `https://wa.me/5514998552803?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const quickWhatsappMessage = `Olá! Gostaria de solicitar um orçamento para madeiras.`;
  const quickWhatsappUrl = `https://wa.me/5514998552803?text=${encodeURIComponent(quickWhatsappMessage)}`;

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 text-center mb-12">
          Entre em Contato
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 p-4 bg-black border border-yellow-500/30 rounded-lg">
              <div className="p-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg">
                <MapPin className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Endereço</h3>
                <p className="text-yellow-200">
                  Avenida Gastão Vidigal, 953<br />
                  Jardim Matilde<br />
                  CEP: 19901-010
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-black border border-yellow-500/30 rounded-lg">
              <div className="p-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg">
                <Phone className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Telefone</h3>
                <p className="text-yellow-200">
                  (14) 99855-2803
                </p>
                <a 
                  href={quickWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-black border border-yellow-500/30 rounded-lg">
              <div className="p-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg">
                <Mail className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">E-mail</h3>
                <p className="text-yellow-200">
                  saopedromadeiras@outlook.com
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-black border border-yellow-500/30 rounded-lg">
              <div className="p-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg">
                <Clock className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Horário</h3>
                <p className="text-yellow-200">
                  Segunda a Sexta: 7:00 - 18:00<br />
                  Sábado: 7:00 - 12:00
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-black border border-yellow-500/30 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
              Solicite um Orçamento
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-400 mb-2">
                  Mensagem Enviada!
                </h4>
                <p className="text-yellow-200 mb-4">
                  Recebemos sua solicitação e entraremos em contato em breve.
                </p>
                <p className="text-yellow-300 text-sm">
                  ✉️ Enviado para: saopedromadeiras@outlook.com
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-yellow-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-yellow-200 placeholder-yellow-400/60"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Seu e-mail"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-yellow-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-yellow-200 placeholder-yellow-400/60"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Seu telefone"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-yellow-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-yellow-200 placeholder-yellow-400/60"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Descreva seu projeto (tipo de madeira, quantidade, uso, etc.)"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-yellow-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-yellow-200 placeholder-yellow-400/60 resize-none"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="h-5 w-5" />
                        <span>Enviar por Email</span>
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>💬</span>
                    <span>Enviar WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
            
            <div className="mt-6 pt-6 border-t border-yellow-500/30">
              <p className="text-yellow-300 text-sm text-center mb-3">
                📧 Os orçamentos são enviados para: <strong>saopedromadeiras@outlook.com</strong>
              </p>
              <p className="text-yellow-300 text-xs text-center">
                💬 WhatsApp: (14) 99855-2803
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;