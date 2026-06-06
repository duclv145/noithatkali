"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const paragraph =
  "Không đơn thuần là một nghề, nội thất với KALI là nơi để thổi hồn, để kiến tạo nên những không gian sống chạm tới cảm xúc. Chúng tôi đồng hành cùng gia chủ từ ý tưởng đầu tiên đến khi mái ấm hoàn thiện — bằng sự tận tâm, tinh tế và một tiêu chuẩn thẩm mỹ riêng.";

export default function Intro() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Word-by-word reveal
      gsap.from(".intro-word", {
        opacity: 0.12,
        ease: "none",
        stagger: 0.4,
        scrollTrigger: {
          trigger: ".intro-copy",
          start: "top 75%",
          end: "bottom 65%",
          scrub: true,
        },
      });

      gsap.from(".intro-img-wrap", {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: { trigger: ".intro-img-wrap", start: "top 85%" },
      });
      gsap.to(".intro-img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".intro-img-wrap",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".intro-tag", {
        yPercent: 130,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".intro-tag", start: "top 90%" },
      });
    },
    { scope: root }
  );

  return (
    <section
      id="intro"
      ref={root}
      className="relative bg-cream px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 overflow-hidden">
          <span className="intro-tag block text-xs uppercase tracking-[0.35em] text-clay">
            (Giới thiệu) — Về KALI
          </span>
        </div>

        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="intro-copy font-display text-[6.5vw] font-medium leading-[1.18] tracking-tight text-umber md:text-[2.9vw]">
              {paragraph.split(" ").map((w, i) => (
                <span key={i} className="intro-word inline-block">
                  {w}&nbsp;
                </span>
              ))}
            </p>

            <div className="mt-12 grid max-w-lg grid-cols-2 gap-8 border-t border-umber/15 pt-8">
              <div>
                <p className="text-sm leading-relaxed text-umber/70">
                  Phương châm hoạt động
                </p>
                <p className="mt-2 font-display text-2xl text-umber">
                  Khách hàng là thượng đế
                </p>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-umber/70">
                  Cam kết
                </p>
                <p className="mt-2 font-display text-2xl text-umber">
                  Chất lượng 100% sản phẩm
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="intro-img-wrap relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/hero/hero-6.jpg"
                alt="Phong cách thiết kế Kali"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="intro-img scale-110 object-cover"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-umber/50">
              ↳ Mỗi không gian — một ngôn ngữ thẩm mỹ riêng
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
