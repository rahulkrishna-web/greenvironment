"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useId } from "react";

export const ContactFormSection = () => {
  const nameId = useId();
  const companyId = useId();
  const emailId = useId();
  const detailsId = useId();

  return (
    <section className="relative isolate overflow-hidden bg-white py-20 text-[#02696b]">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-[#1f2933]"
        >
          Connect With Us
        </motion.h2>

        <div className="grid gap-6 rounded-[28px] bg-white md:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[28px] shadow-[0_24px_80px_-40px_rgba(0,0,0,0.35)]"
          >
            <Image
              src="/contact-img.webp"
              alt="Sustainable cityscape"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true }}
            className="grid gap-4 rounded-[28px] bg-gradient-to-br from-[#0ab8c9] via-[#0aa4b7] to-[#02696b] p-5 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.35)] text-white"
          >
            <FormField id={nameId} label="Name" type="text" placeholder="Your name" />
            <FormField id={companyId} label="Company" type="text" placeholder="Company name" />
            <FormField id={emailId} label="E-mail" type="email" placeholder="you@example.com" />
            <FormField
              id={detailsId}
              label="Additional details (if any)"
              type="textarea"
              placeholder="Tell us about your project, location, or goals."
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#f58e22] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#f58e22]/30 transition hover:translate-y-[-1px] hover:shadow-xl hover:shadow-[#f58e22]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

interface FormFieldProps {
  id: string;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder?: string;
}

function FormField({ id, label, type, placeholder }: FormFieldProps) {
  const commonClasses =
    "w-full rounded-xl border border-white/15 bg-gradient-to-r from-white/60 to-white/40 px-3 py-3 text-sm text-[#0d3a3b] placeholder:text-[#0d3a3b]/70 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent";

  return (
    <label className="grid gap-1 text-sm font-medium text-white" htmlFor={id}>
      {label}
      {type === "textarea" ? (
        <textarea id={id} className={`${commonClasses} min-h-[120px]`} placeholder={placeholder} />
      ) : (
        <input id={id} type={type} className={commonClasses} placeholder={placeholder} />
      )}
    </label>
  );
}
