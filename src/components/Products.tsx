import React from 'react';

const Products: React.FC = () => {
  const products = [
    {
      name: 'Pisos de Madeira',
      description: 'Pisos em Tauari, Cumaru e outras madeiras nobres',
      image: 'https://images.pexels.com/photos/1571741/pexels-photo-1571741.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Decks',
      description: 'Decks em Ipê e Garapa para áreas externas',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Madeira Estrutural',
      description: 'Vigas e estruturas em Peroba Rosa',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Acabamentos',
      description: 'Forros, lambris e acabamentos diversos',
      image: 'https://images.pexels.com/photos/1571741/pexels-photo-1571741.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="products" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 text-center mb-12">
          Nosso Catálogo
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-black border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                {product.name}
              </h3>
              <p className="text-yellow-200 text-sm">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;