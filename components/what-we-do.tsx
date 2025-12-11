"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

interface CardData {
  title: string;
  description: string;
  image: string;
}

const cards: CardData[] = [
  {
    title: "Web Design",
    description: "Creating modern and responsive designs that delight users.",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "App Development",
    description: "Building fast and reliable mobile and web applications.",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Brand Strategy",
    description: "Helping brands stand out with compelling messaging.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Marketing",
    description: "Driving growth with smart, targeted campaigns.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "SEO Optimization",
    description: "Improving search rankings and driving organic traffic.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
];

export default function WhatWeDo() {
  return (
    <div className="w-full h-full py-8">
        <div className="flex flex-col sm:flex-row mb-10 max-w-2xl sm:max-w-none mx-auto items-center sm:items-start text-center sm:text-left gap-4 px-4">
      <h2 className="text-lg sm:basis-1/4 md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
        What We Do
      </h2>
<p className="sm:basis-2/4 text-base sm:text-lg sm:items-center text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetuer adipiscing
elit, sed diam nonummy nibh euismod tincidunt ut
laoreet dolore magna aliquam erat volutpat.
        </p>
        <div className="sm:basis-1/4 sm:flex sm:justify-end w-full">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
            >
              LEARN MORE <ArrowUpRight className="h-5! w-5!" />
            </Button>
        </div>
        </div>
      <Carousel
        opts={{ align: "start" }}
        className="w-full px-4"
      >
        <CarouselContent>
          {cards.map((card, index) => (
            <CarouselItem key={index} className="sm:basis-4/5 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="relative overflow-hidden rounded-2xl cursor-pointer group h-[300px] md:h-[350px]">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />

                  {/* Overlay for darkening */}
                  <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/40" />

                  <CardContent className="relative h-full flex flex-col justify-end p-6">
                    <h3 className="text-white text-2xl font-bold transition-all duration-500 group-hover:translate-y-[-100%]">
                      {card.title}
                    </h3>
                    <p className="text-white opacity-0 mt-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-[-20px]">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    
    </div>
  );
}
