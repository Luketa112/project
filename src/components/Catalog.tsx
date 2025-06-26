import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const Catalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Todos os Produtos' },
    { id: 'pisos', name: 'Pisos de Madeira' },
    { id: 'decks', name: 'Decks' },
    { id: 'estruturas', name: 'Madeira Estrutural' },
    { id: 'finishing', name: 'Acabamentos' },
  ];

  const products = [
    {
      id: 1,
      name: 'Piso Tauari',
      category: 'pisos',
      image: 'https://images.pexels.com/photos/1571741/pexels-photo-1571741.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Piso de madeira Tauari, ideal para ambientes internos',
      specifications: '19x130mm - Acabamento UV',
      price: 'Consulte'
    },
    {
      id: 2,
      name: 'Deck Ipê',
      category: 'decks',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Deck em madeira Ipê, perfeito para áreas externas',
      specifications: '20x100mm - Resistente à umidade',
      price: 'Consulte'
    },
    {
      id: 3,
      name: 'Viga Peroba Rosa',
      category: 'estruturas',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Viga estrutural em Peroba Rosa',
      specifications: '6x12cm - 3 metros',
      price: 'Consulte'
    },
    {
      id: 4,
      name: 'Piso Cumaru',
      category: 'pisos',
      image: 'https://images.pexels.com/photos/1571741/pexels-photo-1571741.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Piso de madeira Cumaru, alta durabilidade',
      specifications: '19x130mm - Verniz fosco',
      price: 'Consulte'
    },
    {
      id: 5,
      name: 'Forro de Cedrinho',
      category: 'finishing',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Forro em madeira de Cedrinho',
      specifications: '10x100mm - Macho e fêmea',
      price: 'Consulte'
    },
    {
      id: 6,
      name: 'Deck Garapa',
      category: 'decks',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Deck em madeira Garapa, ótimo custo-benefício',
      specifications: '20x100mm - Tratado',
      price: 'Consulte'
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Nosso Catálogo
          </h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            Explore nossa ampla variedade de madeiras nobres, pisos, decks e materiais 
            de construção para seu projeto.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-500" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                    : 'bg-white text-amber-700 hover:bg-amber-50 border border-amber-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-amber-700 text-sm mb-3">
                  {product.description}
                </p>
                <p className="text-amber-600 text-sm font-medium mb-3">
                  {product.specifications}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-900">
                    {product.price}
                  </span>
                  <button className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg text-sm font-medium hover:from-amber-700 hover:to-orange-700 transition-all duration-200">
                    Orçamento
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="p-4 bg-amber-100 rounded-full w-fit mx-auto mb-4">
              <Filter className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-amber-900 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-amber-700">
              Tente ajustar os filtros ou termo de busca.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;