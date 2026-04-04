"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getTestimonials, getStrapiURL } from "@/lib/strapi";

interface TestimonialData {
  id: string;
  name: string;
  designation: string;
  company: string;
  content: string;
  avatar: string;
}

const Testimonial = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const strapiData = await getTestimonials();
        const formatted = (strapiData?.data || []).map((item: any) => {
          const attr = item.attributes || item;
          const avatar = attr.avatar?.url || attr.avatar?.data?.attributes?.url;
          return {
            id: item.id.toString(),
            name: attr.name,
            designation: attr.designation,
            company: attr.company,
            content: attr.content,
            avatar: avatar ? getStrapiURL(avatar) : "",
          };
        });
        setTestimonials(formatted);
      } catch (error) {
        console.error("Error fetching testimonials for homepage:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Handle case with no testimonials yet
  if (!loading && testimonials.length === 0) {
    return null; // Gracefully hide on homepage if empty
  }

  return (
    <div
      id="testimonials"
      className="w-full max-w-(--breakpoint-xl) mx-auto py-6 xs:py-12 px-6"
    >
      <h2 className="mb-8 xs:mb-14 text-4xl md:text-5xl font-bold text-center tracking-tight">
        Client Feedback
      </h2>
      <div className="container w-full mx-auto">
        {loading ? (
          <div className="w-full h-64 bg-slate-50 rounded-xl animate-pulse flex items-center justify-center">
            <p className="text-slate-300 font-medium">Loading testimonials...</p>
          </div>
        ) : (
          <>
            <Carousel setApi={setApi}>
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id}>
                    <TestimonialCard testimonial={testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn("h-3.5 w-3.5 rounded-full border-2 transition-all", {
                    "bg-[#02696b] border-[#02696b] w-6": current === index + 1,
                    "border-slate-300": current !== index + 1,
                  })}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialData;
}) => (
  <div className="mb-8 bg-accent rounded-xl py-8 px-6 sm:py-6">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
      <div className="hidden lg:block relative shrink-0 aspect-3/4 max-w-[18rem] w-full bg-muted-foreground/20 rounded-xl overflow-hidden border-4 border-white shadow-xl">
        {testimonial.avatar ? (
           <Image
            src={testimonial.avatar}
            fill
            alt={testimonial.name}
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#02696b] text-white text-6xl font-black">
            {testimonial.name.charAt(0)}
          </div>
        )}

        <div className="absolute top-1/4 right-0 translate-x-1/2 h-12 w-12 bg-[#0ab8c9] rounded-full flex items-center justify-center shadow-lg">
           <QuoteIcon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="flex flex-col justify-center flex-grow">
        <div className="flex items-center justify-between gap-1 w-full">
          <div className="flex items-center gap-4">
             <div className="lg:hidden">
              <Avatar className="w-12 h-12 border-2 border-white shadow-md">
                {testimonial.avatar ? (
                  <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="object-cover" />
                ) : (
                  <AvatarFallback className="text-xl font-bold bg-[#02696b] text-white">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                )}
              </Avatar>
             </div>
            <div className="text-left">
              <p className="text-xl font-bold text-slate-900 leading-none">{testimonial.name}</p>
              <p className="text-sm text-[#0ab8c9] font-medium mt-1">{testimonial.designation}, {testimonial.company}</p>
            </div>
          </div>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
            ))}
          </div>
        </div>
        <p className="mt-8 text-xl sm:text-2xl lg:text-[1.75rem] xl:text-3xl leading-relaxed font-semibold tracking-tight text-slate-800 italic">
          &quot;{testimonial.content}&quot;
        </p>
      </div>
    </div>
  </div>
);

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg
    width="102"
    height="102"
    viewBox="0 0 102 102"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M26.0063 19.8917C30.0826 19.8625 33.7081 20.9066 36.8826 23.024C40.057 25.1414 42.5746 28.0279 44.4353 31.6835C46.2959 35.339 47.2423 39.4088 47.2744 43.8927C47.327 51.2301 44.9837 58.4318 40.2444 65.4978C35.4039 72.6664 28.5671 78.5755 19.734 83.2249L2.54766 74.1759C8.33598 71.2808 13.2548 67.9334 17.3041 64.1335C21.2515 60.3344 23.9203 55.8821 25.3105 50.7765C20.5179 50.4031 16.6348 48.9532 13.6612 46.4267C10.5864 44.0028 9.03329 40.5999 9.00188 36.2178C8.97047 31.8358 10.5227 28.0029 13.6584 24.7192C16.693 21.5381 20.809 19.9289 26.0063 19.8917ZM77.0623 19.5257C81.1387 19.4965 84.7641 20.5406 87.9386 22.6581C91.1131 24.7755 93.6306 27.662 95.4913 31.3175C97.3519 34.9731 98.2983 39.0428 98.3304 43.5268C98.383 50.8642 96.0397 58.0659 91.3004 65.1319C86.4599 72.3005 79.6231 78.2095 70.79 82.859L53.6037 73.8099C59.392 70.9149 64.3108 67.5674 68.3601 63.7676C72.3075 59.9685 74.9763 55.5161 76.3665 50.4105C71.5739 50.0372 67.6908 48.5873 64.7172 46.0608C61.6424 43.6369 60.0893 40.2339 60.0579 35.8519C60.0265 31.4698 61.5787 27.6369 64.7145 24.3532C67.7491 21.1722 71.865 19.563 77.0623 19.5257Z"
      fill="currentColor"
    />
  </svg>
);

export default Testimonial;
