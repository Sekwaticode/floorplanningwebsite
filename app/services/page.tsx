import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Epoxy and resin, PU, polished concrete, floor sealing, decorative flooring, terrazzo, repairs and maintenance.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Every surface, the right system."
        intro="From seamless epoxy to terrazzo and polished concrete, we install, repair and maintain floors that are built to perform."
        surface="metallic"
        image="/images/services-image.jpg"
        imageAlt="Terrazzo sample tiles in a range of colours and aggregates"
      />
      <Services />
      <Projects />
      <CallToAction />
    </>
  );
}
