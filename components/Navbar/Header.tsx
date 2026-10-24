
"use client"

import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'

import { SiCodefresh } from "react-icons/si";



export default function Header() {
  return (
    <header className='py-4 xl:py-8 text-white relative px-16' >
        <div className='max-w-6xl w-full mx-auto flex justify-between items-center px-4'>

            <Link href="/" className='flex text-3xl items-center font-bold space-x-2'>
                <SiCodefresh className='border bg-white/20 rounded-full'/>
                <h1 className='hidden md:flex'>VIBOL<span className='text-green-400'>.</span></h1>
            </Link>


            <div className='hidden lg:flex items-center gap-10'>
                <Nav />
                <Link href={'/Contact'} className='hover:scale-95 transition-all duration-300 cursor-pointer'>
                    <Button variant={`secondary`}>Contact Me</Button>
                </Link>
            </div>
            <div className='lg:hidden'>

                <MobileNav />
            </div>
        </div>
    </header>
  )
}
