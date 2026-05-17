import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-steel/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Bizning Xizmatlar</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-6" />
            <p className="text-white/50 max-w-2xl mx-auto italic">
              Har bir mahsulot qoʻlda yasalgan va takrorlanmasdir. Biz sizning gʻoyalaringizni metallda jonlantiramiz.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-steel border-l-4 border-gold group hover:bg-[#222] transition-colors h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-serif text-2xl group-hover:text-gold transition-colors">{category.name}</h3>
                  <category.icon className="text-gold/30 group-hover:text-gold transition-colors" size={24} />
                </div>
                <p className="text-white/40 text-[13px] leading-relaxed mb-8">
                  {category.description}
                </p>
              </div>
              
              <div className="flex justify-between items-end">
                <span className="text-[10px] uppercase tracking-widest text-white/20">Artisan Crafted</span>
                <span className="text-gold text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
