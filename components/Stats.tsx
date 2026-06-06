"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { value: 8, suffix: "+", label: "Năm kinh nghiệm" },
  { value: 250, suffix: "+", label: "Công trình bàn giao" },
  { value: 100, suffix: "%", label: "Vật liệu chính hãng" },
  { value: 24, suffix: "/7", label: "Đồng hành cùng bạn" },
];

export default function Stats() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
        const end = Number(el.dataset.value);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        });
      });

      gsap.from(".stat-col", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 85%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-umber px-6 py-24 text-cream md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-14 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="stat-col text-center md:text-left">
            <p className="font-display text-6xl font-medium leading-none text-gold md:text-8xl">
              <span data-value={s.value} className="stat-num">
                0
              </span>
              {s.suffix}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-cream/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
