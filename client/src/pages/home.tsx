import Hero from "@/components/sections/hero";
import ValueProposition from "@/components/sections/value-proposition";
import GrowPhilosophy from "@/components/sections/grow-philosophy";
import ConditionsTreated from "@/components/sections/conditions-treated";
import AboutDrPotter from "@/components/sections/about-dr-potter";
import ForParents from "@/components/sections/for-parents";
import Testimonials from "@/components/sections/testimonials";
import ContactScheduling from "@/components/sections/contact-scheduling";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <GrowPhilosophy />
      <ConditionsTreated />
      <AboutDrPotter />
      <ForParents />
      <Testimonials />
      <ContactScheduling />
    </>
  );
}
