"use client";

import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="bg-black text-cream overflow-hidden"
    >
      {/* Top section */}
      <div className="px-4 pt-16 md:px-6 md:pt-28 lg:px-10">

        {/* CTA heading */}
        <p className="reveal-heading font-display text-4xl font-semibold uppercase leading-[1.12] tracking-normal text-cream md:text-4xl lg:text-5xl">
          Bắt đầu dự án<br />của bạn hôm nay.
        </p>

        {/* CTA button */}
        <a
          href="tel:0848616688"
          className="mt-8 inline-flex items-center gap-3 border border-cream/20 px-6 py-4 text-sm font-medium uppercase tracking-[0.12em] transition-colors hover:bg-cream hover:text-black"
        >
          Gọi 0848 61 6688
          <span className="text-gold">→</span>
        </a>

        {/* Address + email row */}
        <div className="mt-12 border-t border-cream/10 pt-6 text-[13px] text-cream/40">
          <p>Số 08 Nguyễn Duy Hiệu, P. Đông Hương, TP Thanh Hóa</p>
          <p className="mt-1">noithatkali@gmail.com · 0848 61 6688</p>
        </div>

        {/* Nav columns — hidden on mobile, shown on desktop */}
        <div className="hidden md:mt-16 md:grid md:grid-cols-12 md:gap-8">
          <div className="col-span-5 col-start-8 grid grid-cols-3 gap-8">
            <FooterColumn
              title="Trang"
              items={[
                ["Home", "#top"],
                ["Giới thiệu", "#intro"],
                ["Dự án", "#projects"],
                ["Xưởng", "#workshop"],
                ["Liên hệ", "#contact"],
              ]}
            />
            <FooterColumn
              title="Dịch vụ"
              items={[
                ["Thiết kế", "#services"],
                ["Thi công", "#services"],
                ["Xưởng gỗ", "#workshop"],
                ["Bảo hành", "#contact"],
              ]}
            />
            <FooterColumn
              title="Social"
              items={[
                ["Facebook", "#contact"],
                ["Instagram", "#contact"],
                ["TikTok", "#contact"],
                ["Youtube", "#contact"],
              ]}
            />
          </div>
        </div>

        {/* Mobile nav — compact horizontal list */}
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[12px] uppercase tracking-[0.16em] text-cream/40 md:hidden">
          {[["Giới thiệu","#intro"],["Dự án","#projects"],["Xưởng","#workshop"],["Facebook","#contact"],["Instagram","#contact"]].map(([l,h]) => (
            <a key={l} href={h} className="transition-opacity hover:text-cream/70">{l}</a>
          ))}
        </div>

      </div>

      {/* Giant brand name */}
      <div className="relative mt-4 flex items-end justify-between px-2 md:px-3 lg:px-4">
        <span className="font-display text-[22vw] font-semibold uppercase leading-[0.82] tracking-tight select-none" style={{ color: "rgba(241,233,218,0.07)" }}>
          KALI
        </span>
        <div className="absolute bottom-[1.5vw] right-4 flex items-center gap-6 text-[11px] text-cream/30 md:right-6 lg:right-10">
          <span>© Kali Furniture {year}</span>
          <a href="#top" className="transition-opacity hover:opacity-70">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <div>
      <p className="mb-6 text-[10px] uppercase tracking-[0.2em] text-cream/30">{title}</p>
      <ul className="space-y-3 text-sm text-cream/60">
        {items.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="transition-opacity hover:opacity-100 hover:text-cream">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
