"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Split text nodes into word spans — uses clipPath instead of overflow:hidden
// so Vietnamese diacritics above the cap-height are never clipped.
function splitTextNodes(el: Element): HTMLSpanElement[] {
  const words: HTMLSpanElement[] = [];

  function walk(node: Node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent ?? "";
      if (!text.trim()) return;
      const frag = document.createDocumentFragment();
      text.split(/(\s+)/).forEach((part) => {
        if (!part.trim()) {
          frag.appendChild(document.createTextNode(part));
          return;
        }
        const word = document.createElement("span");
        word.className = "w-inner";
        word.style.cssText = "display:inline-block;";
        word.textContent = part;
        frag.appendChild(word);
        words.push(word);
      });
      node.parentNode?.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      Array.from(node.childNodes).forEach(walk);
    }
  }

  Array.from(el.childNodes).forEach(walk);
  return words;
}

export default function ScrollReveal() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headings — word-by-word fly up (no overflow mask so Vietnamese diacritics never clip)
      gsap.utils.toArray<Element>(".reveal-heading").forEach((el) => {
        const words = splitTextNodes(el);
        if (!words.length) return;
        gsap.from(words, {
          y: "0.6em",
          opacity: 0,
          duration: 0.9,
          stagger: 0.045,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      // Body text — simple fade + slide (no DOM split, avoids nested tag issues)
      gsap.utils.toArray<Element>(".reveal-text").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
        });
      });

      // Images — clip-path reveal from bottom + subtle inner scale
      gsap.utils.toArray<Element>(".reveal-img").forEach((wrapper) => {
        const inner = wrapper.querySelector(".reveal-img-inner");
        gsap.fromTo(
          wrapper,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: { trigger: wrapper, start: "top 90%", once: true },
          }
        );
        if (inner) {
          gsap.fromTo(
            inner,
            { scale: 1.12 },
            {
              scale: 1,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: { trigger: wrapper, start: "top 90%", once: true },
            }
          );
        }
      });

      // Staggered items — scale + fade
      gsap.utils.toArray<Element>(".reveal-group").forEach((group) => {
        gsap.from(group.querySelectorAll(".reveal-item"), {
          opacity: 0,
          y: 48,
          scale: 0.95,
          duration: 1.0,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 88%",
            once: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
