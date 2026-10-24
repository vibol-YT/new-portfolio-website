"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "../ui/sheet";
import { TextAlignEnd } from "lucide-react";
import Link from "next/link";
import { NavLinks } from "@/constants/constant";
import { usePathname } from "next/navigation";
import { SiCodefresh } from "react-icons/si";

export default function MobileNav() {
  const pathname = usePathname();
  const [isOpenMenu, setOpenMenu] = useState(false);
  return (
    <Sheet open={isOpenMenu} onOpenChange={setOpenMenu}>
      <SheetTrigger asChild>
        <TextAlignEnd onClick={()=> setOpenMenu(true)} className="text-cyan-400 cursor-pointer hover:text-cyan-600 transition-all duration-300" />
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>
              <Link href="/" className='flex text-3xl items-center font-bold space-x-2 text-white
              '>
                <SiCodefresh className='border bg-white/20 rounded-full'/>
                <h1 className='hidden md:flex'>VIBOL<span className='text-green-400'>.</span></h1>
            </Link>
          </SheetTitle>
          <SheetDescription>Building clean, scalable web applications.</SheetDescription>
        </SheetHeader>

        <div className="p-4 mt-20">
          <nav className="flex flex-col items-center justify-center gap-8 text-lg">
            {NavLinks.map((link, index) => (
              
                <SheetClose asChild key={index}>
                  <Link
                  href={link.url}
                  className={`${
                    link.url === pathname &&
                    "text-cyan-400 hover:text-cyan-600 transition-all duration-300 border-b-2 border-cyan-400"
                  }`}
                >
                  {link.label}
                </Link>
                </SheetClose>
              
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
