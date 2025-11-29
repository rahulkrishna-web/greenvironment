"use client";

import { useEffect, useState } from "react";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStateClasses = isScrolled
    ? "fixed bg-background/90 backdrop-blur-md border-b border-accent shadow-sm"
    : "absolute bg-transparent";

  return (
    <nav
      className={`left-0 top-0 z-50 h-20 w-full transition-all duration-300 ${navStateClasses}`}
    >
      <div className="h-full flex items-center gap-6 max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6">
        <Link href="/">
          <Image
            src="/greenvironment-logo.png"
            alt="Greenvironment logo"
            width={240}
            height={70}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu aligned right */}
        <NavMenu className="hidden md:ml-auto md:block" isScrolled={isScrolled} />

        {/* Mobile Menu */}
        <div className="ml-auto md:hidden">
          <NavigationSheet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
