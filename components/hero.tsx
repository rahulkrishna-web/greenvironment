"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] mt-6 lg:mt-16 w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <div className="max-w-(--breakpoint-xl) w-full flex flex-col-reverse lg:flex-row mx-auto items-center justify-between gap-y-3 gap-x-10 px-6 py-12 lg:py-0">
        <div className="max-w-xl">
          <motion.h1 
          initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.2]! tracking-tight">
            Welcome to Greenvironment
          </motion.h1>
          <motion.p 
          initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-3 max-w-[60ch] xs:text-lg">
            Greenvironment is a global water & environmental sustainability company, delivering integrated IoT - and AI-driven
real-time monitoring solutions for water & energy management across buildings & businesses. 
          </motion.p>
          <motion.div 
          initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-3 flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
            >
              LEARN MORE <ArrowUpRight className="h-5! w-5!" />
            </Button>
          </motion.div>
        </div>
        <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
            fill
            alt=""
            className="object-cover rounded-xl"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
