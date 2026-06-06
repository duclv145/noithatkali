"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const links = [
  { label: "Giới thiệu", href: "#intro" },
  { label: "Dịch vụ", href: "#services" },
  { label: "Dự án", href: "#projects" },
  { label: "Xưởng", href: "#workshop" },
  { label: "Liên hệ", href: "#contact" },
];

export default function Nav({ ready }: { ready: boolean }) {
  const root = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 80);

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useGSAP(
    () => {
      if (!ready) return;
      gsap.set(root.current, { visibility: "visible" });
      gsap.from(".nav-item", {
        yPercent: -140,
        opacity: 0,
        duration: 0.9,
        stagger: 0.07,
        ease: "power4.out",
        delay: 0.2,
      });
    },
    { scope: root, dependencies: [ready] }
  );

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    const lenis = (window as unknown as { lenis?: { scrollTo: (t: Element, o?: object) => void } }).lenis;
    if (el && lenis) lenis.scrollTo(el, { offset: 0 });
    else el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      ref={root}
      className={`fouc-hide fixed inset-x-0 top-0 z-[9000] transition-all duration-1000 ease-out ${
        isScrolled
          ? "pointer-events-none -translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-5 md:px-10">
        <div className="overflow-hidden">
          <a
            href="#top"
            onClick={(e) => go(e, "#top")}
            className="nav-item block"
            aria-label="KALI Furniture — về đầu trang"
          >
            <Image
              src="/images/brand/Logo-Kali.png"
              alt="KALI Furniture"
              width={148}
              height={57}
              priority
              className="h-9 w-auto md:h-11 [filter:brightness(0)_invert(94%)_sepia(15%)_brightness(0.95)]"
            />
          </a>
        </div>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href} className="overflow-hidden">
              <a
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className="nav-item group relative block text-xs uppercase tracking-[0.2em] text-cream"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-cream transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="overflow-hidden md:hidden">
          <a
            href="#contact"
            onClick={(e) => go(e, "#contact")}
            className="nav-item block text-xs uppercase tracking-[0.2em] text-cream"
          >
            Menu
          </a>
        </div>

      </nav>
    </header>
  );
}
