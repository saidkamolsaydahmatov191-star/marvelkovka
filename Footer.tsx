import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Ishlarimiz Galereyasi</h2>
            <p className="text-white/50 italic">Sifat va nafosat uygʻunligi</p>
          </div>
          <div className="flex gap-4">
            <button className="text-sm font-bold border-b-2 border-gold pb-1">Hammasi</button>
            <button className="text-sm font-bold text-white/40 hover:text-white transition-colors pb-1">Darvozalar</button>
            <button className="text-sm font-bold text-white/40 hover:text-white transition-colors pb-1">Panjaralar</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-[450px] overflow-hidden border border-white/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark/40 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Decorative Frame */}
                <div className="absolute inset-4 border border-white/10 group-hover:border-gold/30 transition-colors duration-500 pointer-events-none" />
                
                <div className="absolute top-8 left-8 right-8">
                  <div className="flex justify-between items-center">
                    <span className="bg-dark/80 backdrop-blur-sm px-4 py-1 text-[10px] uppercase tracking-widest text-[#E0E0E0] border border-white/10">
                      Loyiha #{product.id.padStart(3, '0')}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-serif text-white mb-2">{product.name}</h3>
                  <p className="text-white/60 text-sm italic font-light">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
