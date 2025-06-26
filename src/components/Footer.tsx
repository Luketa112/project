import React from 'react';
import { Star, MessageSquare, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="inline-flex items-center space-x-2 mb-4">
              <Star className="h-8 w-8 text-purple-500 fill-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                StarRed
              </span>
            </a>
            <p className="mb-4 text-gray-400">
              Plataforma premium com qualidade e segurança para sua experiência de jogo.
            </p>
            <div className="flex space-x-4">
              <a
                href="#discord"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a
                href="#youtube"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Funcionalidades
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Preços
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#discord"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#help"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="#documentation"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Documentação
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#terms"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#refund"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Política de Reembolso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 StarRed. Todos os direitos reservados. Desenvolvido com excelência.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;