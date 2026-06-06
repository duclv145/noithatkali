"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const shots = [
  { src: "/images/workshop/4.jpg", className: "col-span-7 aspect-[16/9]" },
  { src: "/images/workshop/1.jpg", className: "col-span-5 aspect-[4/3]" },
  { src: "/images/workshop/2.jpg", className: "col-span-5 aspect-[4/3]" },
  { src: "/images/workshop/3.jpg", className: "col-span-7 aspect-[16/9]" },
];

export default function Workshop() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".ws-img-wrap").forEach((wrap) => {
        gsap.from(wrap, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1.3,
          ease: "power4.out",
          scrollTrigger: { trigger: wrap, start: "top 88%" },
        });
        const img = wrap.querySelector(".ws-img");
        gsap.fromTo(
          img,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      gsap.from(".ws-head", {
        yPercent: 130,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".ws-head-wrap", start: "top 90%" },
      });
    },
    { scope: root }
  );

  return (
    <section
      id="workshop"
      ref={root}
      className="relative bg-cream px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="ws-head-wrap overflow-hidden">
              <h2 className="ws-head py-[0.06em] text-[11vw] uppercase leading-[1.06] text-umber md:text-[6vw]">
                <span className="font-grotesk font-extrabold tracking-[-0.03em]">
                  Xưởng sản xuất
                </span>
                <br />
                <span className="font-display font-semibold italic tracking-normal text-clay">
                  của riêng chúng tôi
                </span>
              </h2>
            </div>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm leading-relaxed text-umber/70">
              Mỗi sản phẩm được gia công trực tiếp tại xưởng riêng ở KCN Tây Bắc
              Ga — kiểm soát chất lượng từng chi tiết, đảm bảo độ chính xác và
              hoàn thiện đúng tiêu chuẩn KALI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {shots.map((s, i) => (
            <div key={i} className={s.className}>
              <div className="ws-img-wrap relative h-full w-full overflow-hidden">
                <Image
                  src={s.src}
                  alt="Xưởng sản xuất Kali"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="ws-img scale-110 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
