'use client'
import { motion } from 'framer-motion'
import React from 'react'
import {links} from "../../lib/data"
import Link from 'next/link'

export default function Header() {
  return (
    <header className='z-[900] relative'>
        <motion.div className='fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
        initial={{y: -100,opacity:0}}
        animate={{y:0, opacity:0.9}}
        transition={{
        }}></motion.div>
        
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className='select-none flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map(link => (
            <motion.li key={link.hash} className='h-3/4 flex items-center justify-center'initial={{y: -100,opacity:0}}
            animate={{y:0, opacity:1}} transition={{
            }}>
              <Link href={link.hash} className='flex w-full items-center justify-center p-3 hover:text-gray-950 transition'>
                {link.name}
              </Link>
            </motion.li>
          )) }
        </ul>
        </nav>
    </header>
  )
}
