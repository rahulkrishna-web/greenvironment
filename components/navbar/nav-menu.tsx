"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

interface NavMenuProps extends NavigationMenuProps {
  onLinkClick?: () => void; // optional callback for closing sheet
  isScrolled?: boolean;
}

const buildLinkClass = (isScrolled?: boolean) => {
  const desktopColor = isScrolled
    ? "md:text-foreground md:hover:text-foreground/70 md:focus-visible:ring-foreground/50"
    : "md:text-white md:hover:text-white/80 md:focus-visible:ring-white/60";

  return [
    "text-foreground transition-colors hover:text-foreground/70",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    desktopColor,
  ].join(" ");
};

export const NavMenu = ({ onLinkClick, isScrolled, ...props }: NavMenuProps) => {
  const linkClass = buildLinkClass(isScrolled);
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link className={linkClass} href="/" onClick={onLinkClick}>HOME</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link className={linkClass} href="/about" onClick={onLinkClick}>ABOUT US</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link className={linkClass} href="/services" onClick={onLinkClick}>SERVICES</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link className={linkClass} href="/blog" onClick={onLinkClick}>BLOGS</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link className={linkClass} href="/contact" onClick={onLinkClick}>CONTACT</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
