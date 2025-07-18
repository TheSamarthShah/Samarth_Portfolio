'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function SectionDivider() {
  return (
    <motion.div className='bg-gray-200 my-11 h-16 w-1 rounded-full hidden sm:block'
    initial={{scale:0}}
    animate={{scale:1}}
    transition={{
        duration: 0.5
    }}
    ></motion.div>
  )
}