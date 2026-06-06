"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Contact() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".contact-line span", {
        yPercent: 120,
        duration: 1.1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".contact-title", start: "top 85%" },
      });
      gsap.from(".contact-info", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-grid", start: "top 85%" },
      });
    },
    { scope: root }
  );

  return (
    <section
      id="contact"
      ref={root}
      className="relative overflow-hidden bg-umber px-6 pb-16 pt-28 text-cream md:px-10 md:pt-40"
    >
      <div className="mx-auto max-w-7xl">
        <span className="mb-10 block text-xs uppercase tracking-[0.35em] text-gold">
          (Liên hệ) — Bắt đầu dự án
        </span>

        <h2 className="contact-title uppercase">
          <span className="contact-line block overflow-hidden">
            <span className="block font-grotesk text-[13.5vw] font-extrabold leading-[1] tracking-[-0.03em] pt-[0.16em] pb-[0.1em] md:text-[10vw]">
              Cùng kiến tạo
            </span>
          </span>
          <span className="contact-line -mt-[0.24em] block overflow-hidden">
            <span className="block font-display text-[14.5vw] font-semibold italic leading-[1] tracking-[0.005em] pt-[0.16em] pb-[0.1em] text-gold md:text-[11.5vw]">
              mái ấm của bạn
            </span>
          </span>
        </h2>

        <a
          href="tel:0848616688"
          data-cursor="Gọi"
          className="contact-info group mt-12 inline-flex items-center gap-4 text-2xl md:text-4xl"
        >
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-cream/30 text-xl transition-colors duration-500 group-hover:bg-gold group-hover:text-umber md:h-20 md:w-20">
            ↗
          </span>
          <span className="font-display tracking-tight underline-offset-8 group-hover:underline">
            0848 61 6688
          </span>
        </a>

        <div className="contact-grid mt-24 grid gap-12 border-t border-cream/15 pt-12 md:grid-cols-4">
          <div className="contact-info">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cream/40">
              Showroom
            </p>
            <p className="text-sm leading-relaxed text-cream/80">
              Số 08 Nguyễn Duy Hiệu
              <br />
              P. Đông Hương, TP Thanh Hóa
            </p>
          </div>
          <div className="contact-info">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cream/40">
              Xưởng sản xuất
            </p>
            <p className="text-sm leading-relaxed text-cream/80">
              KCN Tây Bắc Ga
              <br />
              Thanh Hóa
            </p>
          </div>
          <div className="contact-info">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cream/40">
              Liên hệ
            </p>
            <p className="text-sm leading-relaxed text-cream/80">
              noithatkali@gmail.com
              <br />
              noithatkali.com
            </p>
          </div>
          <div className="contact-info">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cream/40">
              Giờ mở cửa
            </p>
            <p className="text-sm leading-relaxed text-cream/80">
              08:00 — 22:00
              <br />
              Tất cả các ngày trong tuần
            </p>
          </div>
        </div>
      </div>

      {/* Giant watermark */}
      <div className="pointer-events-none mt-16 select-none overflow-hidden">
        <p className="text-stroke-cream whitespace-nowrap text-center font-display text-[26vw] font-bold leading-none opacity-20">
          KALI
        </p>
      </div>
    </section>
  );
}
