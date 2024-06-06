"use client";
import Awards from "@/components/Awards";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Metrics from "@/components/Metrics";
import Services from "@/components/Service";
import Works from "@/components/Works";
import ContactUs from "@/components/Contact";
import { useState } from "react";
import Header from "@/components/Header";

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <main id="main">
      <Header openModal={openModal} />
      <Hero />
      <Awards />
      <About />
      <Metrics />
      <Services />
      <Works openModal={openModal} />
      <ContactUs modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </main>
  );
}
