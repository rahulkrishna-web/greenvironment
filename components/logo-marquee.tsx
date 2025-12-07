'use client'; 
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import Image from "next/image";

const clientLogos = [
  { src: "/clients/amazon logo.png", alt: "Amazon" },
  { src: "/clients/ambuja logo.png", alt: "Ambuja" },
  { src: "/clients/apollo hospital logo.png", alt: "Apollo Hospitals" },
  { src: "/clients/bagmane logo.png", alt: "Bagmane" },
  { src: "/clients/bmh logo.png", alt: "BMH" },
  { src: "/clients/Bmm logo.png", alt: "BMM" },
  { src: "/clients/brigade group logo.png", alt: "Brigade Group" },
  { src: "/clients/brookflied logo.png", alt: "Brookfield" },
  { src: "/clients/club mahindra logo.png", alt: "Club Mahindra" },
  { src: "/clients/conrad logo.png", alt: "Conrad" },
  { src: "/clients/danfoss logo.png", alt: "Danfoss" },
  { src: "/clients/embassy logo.png", alt: "Embassy" },
  { src: "/clients/four seasons logo.png", alt: "Four Seasons" },
  { src: "/clients/holiday inn logo.png", alt: "Holiday Inn" },
  { src: "/clients/ibis logo.png", alt: "Ibis" },
  { src: "/clients/ifb logo.png", alt: "IFB" },
  { src: "/clients/jsw logo.png", alt: "JSW" },
  { src: "/clients/kirloskar logo.png", alt: "Kirloskar" },
  { src: "/clients/lancor logo.png", alt: "Lancor" },
  { src: "/clients/mahindra logo.png", alt: "Mahindra" },
  { src: "/clients/marriott logo.png", alt: "Marriott" },
  { src: "/clients/novotel logo.png", alt: "Novotel" },
  { src: "/clients/nucleus logo.png", alt: "Nucleus" },
  { src: "/clients/prestige logo.png", alt: "Prestige" },
  { src: "/clients/purvankara logo.png", alt: "Puravankara" },
  { src: "/clients/ramaiah hospital logo.png", alt: "Ramaiah Hospital" },
  { src: "/clients/rane logo.png", alt: "Rane" },
  { src: "/clients/rmz logo.png", alt: "RMZ" },
  { src: "/clients/sheraton logo.png", alt: "Sheraton" },
  { src: "/clients/taj logo.png", alt: "Taj" },
  { src: "/clients/tcs logo.png", alt: "TCS" },
  { src: "/clients/the leela logo.png", alt: "The Leela" },
  { src: "/clients/trident logo.png", alt: "Trident" },
];

interface LogoMarqueeProps {
  className?: string;
}

const LogoMarquee = ({ className }: LogoMarqueeProps) => (
  <section className={`relative isolate flex w-full flex-col items-center justify-center py-10 ${className ?? ""}`}>
    <div className="relative w-full max-w-6xl px-6">
      <div className="flex flex-col items-center gap-6 rounded-3xl border border-[#02696b]/10 bg-white/80 px-6 py-8 shadow-[0_20px_80px_-60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-[#02696b]">Trusted by</h3>
        <div className="w-full">
          <Marquee>
            <MarqueeContent>
              {clientLogos.map((logo) => (
                <MarqueeItem key={logo.src} className="h-auto w-auto px-10">
                  <Image
                    src={logo.src}
                    alt={`${logo.alt} logo`}
                    width={720}
                    height={320}
                    className="h-24 w-auto object-contain"
                  />
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        </div>
      </div>
    </div>
  </section>
);

export default LogoMarquee;
