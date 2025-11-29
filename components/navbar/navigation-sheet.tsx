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
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import Link from "next/link";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";

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
        <Logo />
        <NavMenu orientation="vertical" className="mt-12" onLinkClick={handleClose} isScrolled />

        <div className="mt-8 space-y-4">
          <Link href="/contact" onClick={onLinkClick}>
          <Button variant="default" className="w-full sm:hidden">
            CONTACT
          </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
