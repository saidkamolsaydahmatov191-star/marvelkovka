export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 py-12 px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] text-white/40">
          <div className="flex flex-col">
            <span className="mb-1">Manzil</span>
            <span className="text-white">Toshkent vil., Nazarbek tumani</span>
          </div>
          <div className="flex flex-col">
            <span className="mb-1">Ish vaqti</span>
            <span className="text-white">06:00 — 23:00</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="w-12 h-[1px] bg-white/10"></div>
          <a href="https://instagram.com/marvel_kovka_tash" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.2em] text-white hover:text-gold transition-colors">Instagram</a>
          <a href="https://t.me/fisakov" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.2em] text-white hover:text-gold transition-colors">Telegram</a>
        </div>

        <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
          © {new Date().getFullYear()} Marvel Kovka
        </p>
      </div>
    </footer>
  );
}
