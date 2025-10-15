import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Image from "next/image";

const BlogHero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] mt-6 lg:mt-16 w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <div className="max-w-(--breakpoint-xl) w-full flex flex-col-reverse lg:flex-row mx-auto items-center justify-between gap-y-3 gap-x-10 px-6 py-12 lg:py-0">
        <div className="max-w-xl">
          <h1 className="max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.2]! tracking-tight">
            Blogs
          </h1>
          <p className="mt-3 max-w-[60ch] xs:text-lg">
            Greenvironment is a global water & environmental sustainability company, delivering integrated IoT - and AI-driven
real-time monitoring solutions for water & energy management across buildings & businesses. 
          </p>
          <div className="mt-3 flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
            >
              LEARN MORE <ArrowUpRight className="h-5! w-5!" />
            </Button>
          </div>
        </div>
        <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square">
          <Image
            src="/placeholder.svg"
            fill
            alt=""
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
