import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { db, collection, addDoc, serverTimestamp } from '../lib/firebase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Darvoza',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await addDoc(collection(db, 'submissions'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'pending'
      });
      setIsSuccess(true);
      setFormData({ name: '', phone: '', service: 'Darvoza', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      setError('Xabar yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib koʻring.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-steel/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Biz bilan bogʻlaning</h2>
            <p className="text-white/60 mb-12 text-lg font-light leading-relaxed">
              Loyihangizni muhokama qilish yoki buyurtma berish uchun bizga xabar yozing. Biz har qanday murakkablikdagi ishlarni oʻz zimmamizga olamiz.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-gold border border-white/10 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white/90">Manzil</h4>
                  <p className="text-white/50 text-sm">Toshkent viloyati, Nazarbek tumani, Temir yoʻl</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-gold border border-white/10 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white/90">Telefon</h4>
                  <p className="text-white/50 text-sm">+998 95 660 77 77</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-gold border border-white/10 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white/90">Ish vaqti</h4>
                  <p className="text-white/50 text-sm">Har kuni 6:00 dan 23:00 gacha</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href="https://instagram.com/marvel_kovka_tash"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://t.me/fisakov"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Send size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-steel p-8 md:p-12 border-t-2 border-gold shadow-2xl relative"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-serif">Xabaringiz qabul qilindi!</h3>
                <p className="text-white/40 max-w-sm">
                  Tez orada mutaxassislarimiz siz bilan bogʻlanishadi. Marvel Kovka mahsulotlariga qiziqish bildirganingiz uchun tashakkur.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-gold uppercase tracking-widest text-xs font-bold border-b border-gold pb-1 hover:text-white hover:border-white transition-all"
                >
                  Yana bir xabar yuborish
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Ismingiz</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-dark border border-white/5 px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/10"
                      placeholder="Ali Valiyev"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Telefon</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-dark border border-white/5 px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/10"
                      placeholder="+998 90 ..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Xizmat turi</label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-dark border border-white/5 px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors appearance-none"
                    >
                      <option>Darvoza</option>
                      <option>Panjara</option>
                      <option>Reshotka</option>
                      <option>Boshqa</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gold">↓</div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Xabar</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-dark border border-white/5 px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/10"
                    placeholder="Loyihangiz haqida yozing..."
                  />
                </div>
                {error && <p className="text-red-500 text-xs italic">{error}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold text-dark font-bold py-5 hover:bg-gold/90 transition-all uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    'Xabarni Yuborish'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
