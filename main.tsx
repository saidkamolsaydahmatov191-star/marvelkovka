import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-gold/40 z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-gold/40 z-0" />
            <div className="relative z-10 w-full h-[600px] overflow-hidden shadow-2xl border border-white/5 bg-dark">
              <iframe
                src="https://www.instagram.com/reel/DT96YEWjEd4/embed"
                className="w-full h-full border-none"
                scrolling="no"
                allowTransparency={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Hunarmandchilikning <br /> Oliy Darajasi</h2>
            <div className="space-y-6 text-white/60 leading-relaxed font-light">
              <p>
                "Marvel Kovka" – 2019-yildan buyon nafaqat ishlab chiqarish, balki har bir buyurtmaga jon bagʻishlaydigan ijodiy ustaxonadir. Biz faqatgina temir buyumlarini yasashga ixtisoslashganmiz va har qanday turdagi murakkab metal ishlarini bajara olamiz.
              </p>
              <p>
                Biz har bir detalga alohida eʼtibor qaratamiz. Bizning darvozalarimiz uyingizning tashrif qogʻozi boʻlib xizmat qilsa, panjaralarimiz va boshqa temir buyumlarimiz xavfsizlik bilan birga goʻzallikni ham taʼminlaydi.
              </p>
              <ul className="grid grid-cols-2 gap-4 mt-8">
                <li className="flex items-center gap-2 text-white italic">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" /> 12 viloyatga yetkazib berish
                </li>
                <li className="flex items-center gap-2 text-white italic">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" /> 1 hafta ichida tayyor
                </li>
                <li className="flex items-center gap-2 text-white italic">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" /> Arzon va yuqori sifat
                </li>
                <li className="flex items-center gap-2 text-white italic">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" /> Tekin yetkazib berish
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
