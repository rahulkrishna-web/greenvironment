"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    sector: "",
    requirements: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
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
          name: formData.fullName,
          email: formData.email,
          mobile: formData.phone,
          company: formData.companyName,
          sector: formData.sector,
          message: formData.requirements,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setStatus("success");
      setFormData({ fullName: "", email: "", phone: "", companyName: "", sector: "", requirements: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/60 to-white py-16 pt-28 lg:pt-32">
      <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
        <b className="text-emerald-700 uppercase font-semibold text-sm tracking-[0.18em]">
          Get in Touch
        </b>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Get in Touch
        </h2>
        <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl">
          Connect with Greenvironment to explore how AI-driven sustainability solutions can support your organization’s goals.
        </p>

        <div className="mt-16 grid lg:grid-cols-2 gap-16 md:gap-10 items-start">
          <div className="grid grid-cols-1 gap-y-12">
            <div className="relative w-full rounded-2xl overflow-hidden ring-1 ring-emerald-100 shadow-sm">
              <Image
                src="/gv-group.webp"
                width={1200}
                height={900}
                alt="Greenvironment Team"
                className="h-auto w-full object-cover aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3]"
              />
            </div>
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-emerald-100 text-emerald-800 rounded-full">
                <MailIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">Contact Information</h3>
              <p className="mt-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">General Inquiries</p>
              <Link
                className="font-medium text-emerald-800"
                href="mailto:info@greenvironment.ai"
              >
                info@greenvironment.ai
              </Link>
              
              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Phone</p>
                <p className="font-medium text-emerald-800">
                  <a href="tel:+919739733255">+91 97397 33255</a>
                </p>
              </div>
            </div>

            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-emerald-100 text-emerald-800 rounded-full">
                <MapPinIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">Office Locations</h3>
              
              <div className="mt-6 space-y-6 text-emerald-800">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Chennai</p>
                  <p className="font-medium">
                    5th Floor, C-Block, C-507, IIT Madras Research Park, Kanagam Road, Taramani, Chennai – 600113.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Bangalore</p>
                  <p className="font-medium">
                    Cloud Block (Block C), 3rd Floor, Brigade Padmini Tech Valley, Brookefield, Bengaluru, Karnataka – 560066.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Coimbatore</p>
                  <p className="font-medium">
                    626-1, Regus, Thudiyalur – Saravanampatti Rd, Saravanampatti, Coimbatore, Tamil Nadu – 641049.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Kerala</p>
                  <p className="font-medium">
                    Harisree, Aravinda Ghosh Road, Puduppanam Post, Vadakara, Kozhikode, Kerala – 673105.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">UAE</p>
                  <p className="font-medium">
                    Burjuman Office Tower, Mankhool, Dubai, UAE.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="bg-white/80 backdrop-blur shadow-sm border border-emerald-100">
            <CardContent className="p-6 md:p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-900">Request a Consultation</h3>
                <p className="mt-2 text-muted-foreground">
                  Provide your details and our team will respond promptly.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-x-8 gap-y-6">
                  <div className="col-span-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      placeholder="Full name"
                      id="fullName"
                      className="mt-2 bg-white h-10 shadow-none"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      placeholder="Company name"
                      id="companyName"
                      className="mt-2 bg-white h-10 shadow-none"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      id="email"
                      className="mt-2 bg-white h-10 shadow-none"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      id="phone"
                      className="mt-2 bg-white h-10 shadow-none"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="sector">Sector</Label>
                    <Input
                      placeholder="e.g. Residential, Commercial, Industrial, etc."
                      id="sector"
                      className="mt-2 bg-white h-10 shadow-none"
                      value={formData.sector}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="requirements">Brief Description of Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Tell us about your requirements"
                      className="mt-2 bg-white shadow-none"
                      rows={4}
                      value={formData.requirements}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    <Checkbox id="acceptTerms" className="bg-background" />
                    <Label htmlFor="acceptTerms" className="gap-0 text-sm">
                      You agree to our
                      <Link href="#" className="underline ml-1">
                        terms and conditions
                      </Link>
                      <span>.</span>
                    </Label>
                  </div>
                </div>

                {status === "success" && (
                  <div className="mt-4 p-3 rounded-lg bg-emerald-500/20 text-emerald-800 text-sm font-medium border border-emerald-500/30">
                    Thank you! We've received your request.
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-4 p-3 rounded-lg bg-red-500/20 text-red-800 text-sm font-medium border border-red-500/30">
                    {errorMessage}
                  </div>
                )}

                <Button className="mt-6 w-full rounded-full" size="lg" disabled={status === "submitting" || status === "success"}>
                  {status === "submitting" ? "Submitting..." : status === "success" ? "Sent!" : "Request Consultation"}
                </Button>
                
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  We aim to respond to all inquiries within 1–2 business days.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
