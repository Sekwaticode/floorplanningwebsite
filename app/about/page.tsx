import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import ValuesGrid from "@/components/ValuesGrid";
import Process from "@/components/Process";
import FAQs from "@/components/FAQs";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "About",
  description:
    "A South African specialist flooring and surface-solutions company providing high-performance flooring systems.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Flooring specialists, start to finish."
        intro="Technical expertise, quality materials, professional surface preparation and skilled installation, combined to deliver floors built for long-term performance."
        surface="sealed"
        image="/images/about-image.jpeg"
        imageAlt="Installer spreading a fresh grey floor coating with a squeegee"
      />
      <About />
      <ValuesGrid />
      <Process />
      <FAQs />
      <CallToAction />
    </>
  );
}
