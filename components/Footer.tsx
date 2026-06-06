"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="overflow-hidden bg-black text-cream"
    >
      {/* Contact info — icons + text */}
      <div className="border-b border-cream/10 px-4 py-8 md:px-6 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:gap-12">
          {/* Hotline */}
          <a
            href="tel:0848616688"
            className="flex items-center gap-3 text-sm text-cream/70 transition-opacity hover:text-cream"
          >
            <span className="text-lg">☎</span>
            <span>0848 61 6688</span>
          </a>

          {/* Showroom */}
          <div className="flex items-center gap-3 text-sm text-cream/70">
            <span className="text-lg">📍</span>
            <span>08 Nguyễn Duy Hiệu, TP Thanh Hóa</span>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-3 text-sm text-cream/70">
            <span className="text-lg">🕐</span>
            <span>08:00 — 22:00 · Tất cả các ngày</span>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="flex items-center justify-between px-4 py-5 md:px-6 lg:px-10">
        <span className="text-[11px] uppercase tracking-[0.16em] text-cream/30">
          © Kali Furniture {year}
        </span>
        <a
          href="#top"
          className="text-[11px] font-medium uppercase tracking-[0.18em] text-cream/50 transition-opacity hover:text-cream"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
