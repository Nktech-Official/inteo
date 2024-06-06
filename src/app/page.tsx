import Awards from "@/components/Awards";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Metrics from "@/components/Metrics";
import Services from "@/components/Service";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main>
      <Hero />
      <Awards />
      <About />
      <Metrics />
      <Services />
      <Works />
    </main>
  );
}
