"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden as VisuallyHiddenPrimitive } from "radix-ui";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";
import Link from "next/link";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Image from "next/image";

interface NavMenuProps extends NavigationMenuProps {
  onLinkClick?: () => void; // optional callback for closing sheet
}

export const NavigationSheet = ({ onLinkClick, ...props }: NavMenuProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <VisuallyHiddenPrimitive.Root>
        <SheetTitle>Navigation Drawer</SheetTitle>
      </VisuallyHiddenPrimitive.Root>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Link href="/" onClick={handleClose} className="inline-flex">
          <Image
            src="/gv-logo.png"
            alt="Greenvironment logo"
            width={120}
            height={35}
            className="h-6 w-auto"
            priority
          />
        </Link>
        <NavMenu orientation="vertical" className="mt-12" onLinkClick={handleClose} isScrolled />

        <div className="mt-8 space-y-4" />
      </SheetContent>
    </Sheet>
  );
};
