"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

export default function SubPageModal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Slide up on mount
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(el,
      { y: "100vh" },
      { y: 0, duration: 0.65, ease: "power4.out" }
    );
  }, []);

  const handleClose = () => {
    const el = ref.current;
    if (!el) { router.back(); return; }
    gsap.to(el, {
      y: "100vh",
      duration: 0.5,
      ease: "power4.in",
      onComplete: () => router.back(),
    });
  };

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[8000] overflow-y-auto bg-[#f7f6f1]"
      style={{ transform: "translateY(100vh)" }}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        aria-label="Đóng"
        className="fixed right-5 top-5 z-[8100] flex h-11 w-11 items-center justify-center rounded-full bg-umber text-cream shadow-lg transition-all duration-300 hover:scale-110 hover:bg-umber/80 md:right-8 md:top-8"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {children}
    </div>
  );
}
