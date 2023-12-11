"use client";
import QuoteModal from "@/components/modal/QuoteModal";
import Hero from "@/components/sections/Hero";
import TextImage from "@/components/sections/expectoo/TextImage";
import FeedBacks from "@/components/sections/feedbacks/FeedBacks";
import ClientMap from "@/components/sections/ourclients/ClientMap";
import Services from "@/components/sections/ourservices/Services";
import Team from "@/components/sections/ourteam/Team";
import OurProjects from "@/components/sections/projects/OurProjects";
import Values from "@/components/sections/values/Values";
import { useModalToggle } from "@/store";

export default function Home() {
  const openModal = useModalToggle((state) => state.openModal);
  const toggleModal = useModalToggle((state) => state.toggleModal);

  return (
    <main className="z-0">
      <Hero />
      <Values />
      <Services />
      <OurProjects />
      <ClientMap />
      <FeedBacks />
      <Team />
      <TextImage />

      <QuoteModal onClose={() => toggleModal(false)} open={openModal} />
    </main>
  );
}
