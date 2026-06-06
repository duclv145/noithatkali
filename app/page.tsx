"use client";

import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import ScrollReveal from "@/components/ScrollReveal";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EditorialSections from "@/components/EditorialSections";
import ConsultForm from "@/components/ConsultForm";
import Footer from "@/components/Footer";

export default function Home() {
  // No preloader — content animates in immediately on load
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <ScrollReveal />

      <Nav ready />

      <main>
        <Hero ready />
        <EditorialSections />
        <ConsultForm />
      </main>

      <Footer />
    </>
  );
}
