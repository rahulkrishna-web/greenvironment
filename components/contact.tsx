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

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          mobile: formData.mobile,
          company: formData.company,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", mobile: "", company: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/60 to-white py-16 pt-28 lg:pt-32">
      <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
        <b className="text-emerald-700 uppercase font-semibold text-sm tracking-[0.18em]">
          Contact Us
        </b>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Ready to improve water and energy performance?
        </h2>
        <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl">
          Connect with Greenenvironment to explore how intelligent systems can support your operational and sustainability goals.
        </p>

        <div className="mt-16 grid lg:grid-cols-2 gap-16 md:gap-10 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-emerald-100 text-emerald-800 rounded-full">
                <MailIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">Email</h3>
              <p className="my-2.5 text-muted-foreground">
                Our friendly team is here to help.
              </p>
              <Link
                className="font-medium text-emerald-800"
                href="mailto:sales@greenvironmentindia.com"
              >
                sales@greenvironmentindia.com
              </Link>
            </div>
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-emerald-100 text-emerald-800 rounded-full">
                <MapPinIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">Our Office HQ</h3>
              <p className="my-2.5 text-muted-foreground">
                Come say hello at Our Office HQ.
              </p>
              <div className="space-y-3 text-emerald-800">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Greenenvironment</p>
                  <p className="font-medium">
                    Greenenvironment Innovation & Marketing India Pvt. Ltd.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Phone</p>
                  <p className="font-medium">
                    <a href="tel:+919739733255">+91 97397 33255</a>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">India</p>
                  <p className="font-medium">
                    5th floor, C-block, C-507, IIT Madras Research Park, Kanagam Road, Taramani, Chennai - 600113.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">UAE</p>
                  <p className="font-medium">
                    Burjuman Office Tower, Mankhool, Dubai UAE.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="bg-white/80 backdrop-blur shadow-sm border border-emerald-100">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      placeholder="First name"
                      id="firstName"
                      className="mt-2 bg-white h-10 shadow-none"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      placeholder="Last name"
                      id="lastName"
                      className="mt-2 bg-white h-10 shadow-none"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      type="tel"
                      placeholder="Mobile Number"
                      id="mobile"
                      className="mt-2 bg-white h-10 shadow-none"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      placeholder="Email"
                      id="email"
                      className="mt-2 bg-white h-10 shadow-none"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      placeholder="Company"
                      id="company"
                      className="mt-2 bg-white h-10 shadow-none"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Message"
                      className="mt-2 bg-white shadow-none"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    <Checkbox id="acceptTerms" className="bg-background" />
                    <Label htmlFor="acceptTerms" className="gap-0">
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
                    Thank you! We've received your message.
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-4 p-3 rounded-lg bg-red-500/20 text-red-800 text-sm font-medium border border-red-500/30">
                    {errorMessage}
                  </div>
                )}

                <Button className="mt-6 w-full rounded-full" size="lg" disabled={status === "submitting" || status === "success"}>
                  {status === "submitting" ? "Submitting..." : status === "success" ? "Sent!" : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
