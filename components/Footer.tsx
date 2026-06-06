"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="overflow-hidden bg-black text-cream"
    >
      {/* Bottom bar */}
      <div className="flex items-center justify-between border-t border-cream/10 px-4 py-5 md:px-6 lg:px-10">
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
