"use client";

import { useEffect } from "react";
import Cursor from "@/components/Cursor";

export default function ArticleShell() {
  useEffect(() => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (t: number, o?: object) => void } }).lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, []);

  return <Cursor />;
}
