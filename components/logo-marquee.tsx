'use client';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
import { Logo01, Logo02, Logo03, Logo04, Logo05, Logo06, Logo07, Logo08 } from './logos';

const logos = [
    <Logo01 />,
    <Logo02 />,
    <Logo03 />,
    <Logo04 />,
    <Logo05 />,
    <Logo06 />,
    <Logo07 />,
    <Logo08 />,
]
const LogoMarquee = () => (
  <div className="flex size-full py-8 items-center justify-center bg-background">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent>
        {logos.map((logo, index) => (
          <MarqueeItem className="h-auto w-auto" key={index}>
            {logo}
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);
export default LogoMarquee;