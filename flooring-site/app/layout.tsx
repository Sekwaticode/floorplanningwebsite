import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description:
    "South African specialist flooring and surface solutions: epoxy, PU, polished concrete, floor sealing, decorative flooring, terrazzo and floor refurbishment.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" className={interTight.variable}>
      <body>{children}</body>
    </html>
  );
}
