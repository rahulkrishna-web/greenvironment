"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useId, useState } from "react";

export const ContactFormSection = () => {
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

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const nameId = useId();
  const companyId = useId();
  const emailId = useId();
  const detailsId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.details,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setStatus("success");
      setFormData({ name: "", company: "", email: "", details: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-[28px] bg-gradient-to-br from-[#0ab8c9] via-[#0aa4b7] to-[#02696b] p-5 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.35)] text-white"
    >
      <FormField id={nameId} name="name" label="Name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required />
      <FormField id={companyId} name="company" label="Company" type="text" placeholder="Company name" value={formData.company} onChange={handleChange} />
      <FormField id={emailId} name="email" label="E-mail" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
      <FormField
        id={detailsId}
        name="details"
        label="Additional details (if any)"
        type="textarea"
        placeholder="Tell us about your project, location, or goals."
        value={formData.details}
        onChange={handleChange}
      />

      {status === "success" && (
        <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-100 text-sm font-medium border border-emerald-500/30">
          Thank you! We've received your message and will get back to you soon.
        </div>
      )}

      {status === "error" && (
        <div className="p-3 rounded-lg bg-red-500/20 text-red-100 text-sm font-medium border border-red-500/30">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting" || status === "success"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-[#f58e22] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#f58e22]/30 transition hover:translate-y-[-1px] hover:shadow-xl hover:shadow-[#f58e22]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting..." : status === "success" ? "Sent!" : "Submit"}
      </button>
    </motion.form>
  );
};

interface FormFieldProps {
  id: string;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
}

function FormField({ id, label, type, placeholder, name, value, onChange, required }: FormFieldProps) {
  const commonClasses =
    "w-full rounded-xl border border-white/15 bg-gradient-to-r from-white/60 to-white/40 px-3 py-3 text-sm text-[#0d3a3b] placeholder:text-[#0d3a3b]/70 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent";

  return (
    <label className="grid gap-1 text-sm font-medium text-white" htmlFor={id}>
      {label}
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`${commonClasses} min-h-[120px]`}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={commonClasses}
          placeholder={placeholder}
          required={required}
        />
      )}
    </label>
  );
}
