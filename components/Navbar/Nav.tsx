"use client";

import { NavLinks } from '@/constants/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import React from 'react'

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className='flex items-center space-x-6'> 
      {NavLinks.map((link, index) => {
        const isActive = link.url === pathname;
        return (
          <Link
            href={link.url}
            key={index}
            className={`capitalize transition-all duration-300 font-medium hover:text-green-400 ${isActive ? 'text-green-400 border-b-2 border-green-400' : ''}`}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
