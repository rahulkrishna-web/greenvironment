"use client";

import { useEffect, useState } from "react";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";
import Image from "next/image";

type NavbarMode = "fixed" | "dynamic";

interface NavbarProps {
  mode?: NavbarMode;
}

const Navbar = ({ mode = "fixed" }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const enableScrollEffect = mode === "dynamic";

  useEffect(() => {
    if (!enableScrollEffect) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableScrollEffect]);

  const isActiveScrolled = mode === "fixed" ? true : isScrolled;

  const navStateClasses = isActiveScrolled
    ? "fixed bg-background/90 backdrop-blur-md border-b border-accent shadow-sm"
    : "absolute bg-transparent";

  return (
    <nav
      className={`left-0 top-0 z-50 h-20 w-full transition-all duration-300 ${navStateClasses}`}
    >
      <div className="h-full flex items-center gap-6 max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6">
        <Link href="/">
          <Image
            src="/gv-logo.png"
            alt="Greenvironment logo"
            width={120}
            height={35}
            className="h-6 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu aligned right */}
        <NavMenu
          className="hidden md:ml-auto md:block"
          isScrolled={isActiveScrolled}
        />

        {/* Mobile Menu */}
        <div className="ml-auto md:hidden">
          <NavigationSheet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
