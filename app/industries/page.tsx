import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Flooring for industrial, logistics, hospitality, healthcare, commercial, retail, education and residential spaces.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Floors for the way you work."
        intro="Every environment puts different demands on a floor. We specify systems for the traffic, chemicals, hygiene and finish each space needs."
        surface="epoxy"
        image="/images/services-pu_flooring.jpeg"
        imageAlt="Seamless matte PU floor in a bright open-plan living room"
      />
      <Industries />
      <Testimonials />
      <CallToAction title="Not sure which system fits?" />
    </>
  );
}
