import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import FoldHeading from "@/components/FoldHeading";
import SurfaceSwatch, { SurfaceVariant } from "@/components/SurfaceSwatch";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro: string;
  surface: SurfaceVariant;
  /** Photo for the banner; falls back to the generated surface swatch. */
  image?: string;
  imageAlt?: string;
};

/** Opening banner for inner pages: breadcrumb, headline and a surface swatch. */
const PageHeader: FC<PageHeaderProps> = ({
  eyebrow,
  title,
  intro,
  surface,
  image,
  imageAlt = "",
}) => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)] gap-12 lg:gap-16 items-end">
        <div>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-stone-600">
              <li>
                <Link href="/" className="hover:text-stone-900 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-stone-900">
                {eyebrow}
              </li>
            </ol>
          </nav>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter max-w-[14ch]">
            <FoldHeading text={title} />
          </h1>
          <p className="mt-8 text-lg md:text-xl text-stone-600 max-w-[48ch]">
            {intro}
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl aspect-[4/3] max-lg:max-w-[480px]">
          {image ? (
            <Image
              src={image}
              alt={imageAlt}
              fill
              preload
              sizes="(min-width: 1024px) 38vw, 480px"
              className="object-cover"
            />
          ) : (
            <SurfaceSwatch variant={surface} className="size-full" />
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
