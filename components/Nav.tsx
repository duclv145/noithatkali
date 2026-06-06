"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const links = [
  { label: "Giới thiệu", href: "#intro" },
  { label: "Dịch vụ", href: "#services" },
  { label: "Dự án", href: "#projects" },
  { label: "Xưởng", href: "#workshop" },
  { label: "Tư vấn", href: "#consult" },
];

export default function Nav({ ready, theme = "dark" }: { ready: boolean; theme?: "light" | "dark" }) {
  const root = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const animatingRef = useRef(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 80);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Animate overlay when menuOpen changes
  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    if (menuOpen) {
      // Show overlay
      el.style.display = "flex";
      document.body.style.overflow = "hidden";
      const items = el.querySelectorAll(".menu-link");
      const meta = el.querySelectorAll(".menu-meta");
      animatingRef.current = true;
      gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.fromTo(
        items,
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: "power4.out", delay: 0.1 }
      );
      gsap.fromTo(
        meta,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out", delay: 0.4, onComplete: () => { animatingRef.current = false; } }
      );
    } else {
      // Hide overlay
      animatingRef.current = true;
      gsap.to(el, {
        opacity: 0, duration: 0.25, ease: "power2.in",
        onComplete: () => {
          el.style.display = "none";
          document.body.style.overflow = "";
          animatingRef.current = false;
        },
      });
    }
  }, [menuOpen]);

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
    setMenuOpen(false);
    setTimeout(() => {
      const lenis = (window as unknown as { lenis?: { scrollTo: (t: Element | number, o?: object) => void } }).lenis;
      if (href === "#top") {
        if (lenis) lenis.scrollTo(0, { duration: 1.2 });
        else window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.querySelector(href);
      if (el && lenis) lenis.scrollTo(el, { offset: 0 });
      else el?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <header
        ref={root}
        className={`fouc-hide fixed inset-x-0 top-0 z-[9000] transition-all duration-1000 ease-out ${
          isScrolled && !menuOpen
            ? "pointer-events-none -translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-5 md:px-10">
          {/* Logo */}
          <div className="overflow-hidden">
            {theme === "light" ? (
              <Link href="/" className="nav-item block" aria-label="KALI Furniture">
                <Image
                  src="/images/brand/Logo-Kali.png"
                  alt="KALI Furniture"
                  width={148}
                  height={57}
                  priority
                  className="h-9 w-auto transition-all duration-300 md:h-11 [filter:brightness(0)_sepia(20%)_saturate(0.4)]"
                />
              </Link>
            ) : (
              <a
                href="#top"
                onClick={(e) => go(e, "#top")}
                className="nav-item block"
                aria-label="KALI Furniture"
              >
                <Image
                  src="/images/brand/Logo-Kali.png"
                  alt="KALI Furniture"
                  width={148}
                  height={57}
                  priority
                  className={`h-9 w-auto transition-all duration-300 md:h-11 ${
                    menuOpen
                      ? "[filter:brightness(0)_sepia(20%)_saturate(0.4)]"
                      : "[filter:brightness(0)_invert(94%)_sepia(15%)_brightness(0.95)]"
                  }`}
                />
              </a>
            )}
          </div>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href} className="overflow-hidden">
                <a
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  className={`nav-item group relative block text-xs uppercase tracking-[0.2em] ${theme === "light" ? "text-ink" : "text-cream"}`}
                >
                  {l.label}
                  <span className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-500 group-hover:w-full ${theme === "light" ? "bg-ink" : "bg-cream"}`} />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => !animatingRef.current && setMenuOpen((v) => !v)}
            className={`nav-item text-xs uppercase tracking-[0.2em] transition-colors duration-300 md:hidden ${
              menuOpen ? "text-umber" : theme === "light" ? "text-ink" : "text-cream"
            }`}
          >
            {menuOpen ? "Đóng" : "Menu"}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[8999] flex-col justify-between bg-[#f7f5f0] px-6 pb-10 pt-28"
        style={{ display: "none", opacity: 0 }}
      >
        <nav>
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href} className="border-b border-umber/10">
                <a
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  className="menu-link block py-5 font-display text-4xl font-semibold uppercase leading-none tracking-tight text-umber"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu-meta space-y-1 text-xs uppercase tracking-[0.18em] text-umber/40">
          <p>Số 08 Nguyễn Duy Hiệu, TP Thanh Hóa</p>
          <p>0848 61 6688</p>
        </div>
      </div>
    </>
  );
}
