import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a site assessment or quote for your flooring project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk floors."
        intro="Request a site assessment or quote. We'll look at the existing surface, discuss your requirements and recommend the right solution."
        surface="terrazzo"
        image="/images/contact-image.jpg"
        imageAlt="Bright room with a seamless white floor and floor-to-ceiling windows"
      />
      <ContactForm />
      <FAQs />
      <Contact />
    </>
  );
}
