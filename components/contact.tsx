import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/60 to-white py-16 pt-28 lg:pt-32">
    <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
      <b className="text-emerald-700 uppercase font-semibold text-sm tracking-[0.18em]">
        Contact Us
      </b>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
        Chat with our friendly team!
      </h2>
      <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl">
        We&apos;d love to hear from you. Please fill out this form or shoot us an email.
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
              href="mailto:mail@greenvironmentindia.com"
            >
              mail@greenvironmentindia.com
            </Link>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-emerald-100 text-emerald-800 rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Offices</h3>
            <p className="my-2.5 text-muted-foreground">
              Come say hello at Our Office HQ.
            </p>
            <div className="space-y-3 text-emerald-800">
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
            <form>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    placeholder="First name"
                    id="firstName"
                    className="mt-2 bg-white h-10 shadow-none"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    placeholder="Last name"
                    id="lastName"
                    className="mt-2 bg-white h-10 shadow-none"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="mt-2 bg-white h-10 shadow-none"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    placeholder="Company"
                    id="company"
                    className="mt-2 bg-white h-10 shadow-none"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Message"
                    className="mt-2 bg-white shadow-none"
                    rows={6}
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
              <Button className="mt-6 w-full rounded-full" size="lg">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Contact;
