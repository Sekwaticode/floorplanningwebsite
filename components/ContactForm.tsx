"use client";

import { FC, FormEvent } from "react";
import Button from "@/components/Button";
import FoldHeading from "@/components/FoldHeading";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

const fieldClass =
  "mt-2 w-full rounded-xl border border-stone-400 bg-stone-100 px-4 py-3 text-base placeholder:text-stone-500 focus:border-stone-900 focus:outline-2 focus:outline-offset-2 focus:outline-hazard";
const labelClass = "text-sm font-semibold uppercase tracking-[0.14em]";

/**
 * Quote request form. There is no backend yet, so submitting opens the
 * visitor's email app with the details filled in, addressed to `site.email`.
 */
export const QuoteForm: FC<{ className?: string }> = ({
  className = "border border-stone-300 bg-stone-100/60",
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone") || "-"}`,
      `Service: ${get("service") || "Not sure yet"}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Site assessment request"
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`grid sm:grid-cols-2 gap-x-6 gap-y-6 rounded-[20px] p-6 md:p-10 ${className}`}
    >
      <label className="block">
        <span className={labelClass}>Name</span>
        <input name="name" required autoComplete="name" className={fieldClass} />
      </label>
      <label className="block">
        <span className={labelClass}>Email</span>
        <input name="email" type="email" required autoComplete="email" className={fieldClass} />
      </label>
      <label className="block">
        <span className={labelClass}>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
      </label>
      <label className="block">
        <span className={labelClass}>Service</span>
        <select name="service" defaultValue="" className={fieldClass}>
          <option value="">Not sure yet</option>
          {services.map(({ title }) => (
            <option key={title}>{title}</option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className={labelClass}>About the project</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Size of the area, current surface, how the space is used…"
          className={fieldClass}
        />
      </label>
      <div className="sm:col-span-2">
        <Button type="submit">Send Request</Button>
      </div>
    </form>
  );
};

/** Contact page section: contact details beside the quote form. */
const ContactForm: FC = () => {
  return (
    <section className="pb-24 md:pb-32">
      <div className="container grid lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] gap-12 lg:gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">
            <FoldHeading text="Tell us about your floor" />
          </h2>
          <p className="mt-5 text-lg text-stone-600 max-w-[40ch]">
            Share a few details about the space and we&apos;ll get back to you
            to arrange a site assessment.
          </p>
          <dl className="mt-10 space-y-6">
            <div>
              <dt className={labelClass}>Email</dt>
              <dd className="mt-1 text-xl">
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className={labelClass}>Phone</dt>
              <dd className="mt-1 text-xl">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:underline">
                  {site.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
};

export default ContactForm;
