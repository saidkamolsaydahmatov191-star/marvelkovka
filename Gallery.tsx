import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { HERO_IMAGE } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-pattern">
      {/* Background Image with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
          src={HERO_IMAGE}
          alt="Luxury Wrought Iron"
          className="w-full h-full object-cover opacity-20 filter grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40" />
      </div>

      {/* Decorative Geometric Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block overflow-hidden">
        <div className="w-full h-full border-l border-white/20 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-screen h-screen border border-white/10 rotate-45 flex items-center justify-center"
          >
            <div className="w-2/3 h-2/3 border border-white/10 rotate-12" />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-12 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-serif italic text-2xl mb-8 tracking-wide">Premium darajadagi badiiy temirchilik</p>
            <h1 className="text-7xl md:text-9xl font-serif leading-[0.9] font-light italic uppercase tracking-tighter mb-10">
              Temirga <br/>
              <span className="ml-0 md:ml-24 text-gold not-italic font-bold">Jon</span> <br/>
              Bag'ishlaymiz
            </h1>
            
            <p className="max-w-md text-sm leading-relaxed text-white/40 mb-12">
              Bizning ustaxonamiz 2019-yildan buyon eng murakkab badiiy kovka ishlarini amalga oshirib kelmoqda. Har bir detal qo'lda, mahorat bilan ishlanadi.
            </p>

            <div className="flex items-center flex-wrap gap-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#gallery"
                className="px-12 py-5 bg-gold text-dark uppercase text-[11px] font-bold tracking-[0.2em] hover:bg-gold/90 transition-all"
              >
                Katalogga o'tish
              </motion.a>
              
              <div className="flex flex-col border-l border-white/20 pl-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Konsultatsiya:</span>
                <span className="text-xl font-serif text-white tracking-widest">+998 (95) 660 77 77</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
