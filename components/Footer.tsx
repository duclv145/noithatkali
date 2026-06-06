"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="overflow-hidden bg-black text-cream"
    >
      {/* Giant brand name */}
      <div className="relative flex items-end justify-between px-2 pt-10 md:px-3 md:pt-14 lg:px-4">
        <span
          className="select-none font-display text-[22vw] font-semibold uppercase leading-[0.82] tracking-tight"
          style={{ color: "rgba(241,233,218,0.07)" }}
        >
          KALI
        </span>

        {/* Copyright + back to top */}
        <div className="absolute bottom-[1.5vw] right-4 flex items-center gap-6 md:right-6 lg:right-10">
          <span className="text-xs text-cream/30">© Kali Furniture {year}</span>
          <a
            href="#top"
            className="text-sm font-medium uppercase tracking-[0.14em] text-cream/60 transition-opacity hover:text-cream"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
