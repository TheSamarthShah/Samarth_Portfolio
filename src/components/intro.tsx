'use client'
import Image from 'next/image';
import React from 'react';
import PpLight from '../../public/pp-light.jpg';
//import PpDark from '../../public/pp-dark.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
  return (
    <section className='select-none mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className="flex items-center justify-center">
        <div className="relative">
            <motion.div
            initial ={{opacity:0, scale:0}}
            animate = {{opacity:1, scale:1}}
            transition={{
                type:"tween",
                duration:0.8
            }}
            >
          <Image
            height="192"
            width="192"
            src={PpLight}
            alt="Profile picture"
            className="rounded-full object-cover border-[0.35rem] border-white shadow-xl w-[7rem] h-[7rem]"
            objectFit="cover" 
            priority={true}
          />
            </motion.div>

          <motion.span className='absolute text-4xl bottom-0 right-0'
                      initial ={{opacity:0, scale:0}}
                      animate = {{opacity:1, scale:1}}
                      transition={{
                          type:"spring",
                          stiffness:125,
                          delay:1,
                          duration:0.8
                      }}>🙏</motion.span>
        </div>
      </div>

      <motion.h1
  className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-xl"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
  }}
>
<span>
  <span className="font-bold">Hello, I&apos;m Samarth Shah.</span> I&apos;m a{" "}
  <span className="font-bold">full-stack developer</span> who loves turning
  ideas into <span className="italic">clean, efficient code</span>.<br /> I&apos;m currently
  looking for a <span className="font-bold">full-time stable role</span> to grow
  and contribute long-term, but I&apos;m also open to exciting{" "}
  <span className="font-bold">freelance projects</span> on the side. Let&apos;s connect
  and discuss how I can help bring your ideas to life, whether it&apos;s through a full-time
  position or a freelance collaboration!
</span>


</motion.h1>

<motion.div
  className='flex flex-col sm:flex-row items-center justify-center gap-2 font-medium'
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    type: "tween"
  }}
>
<Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full hover:scale-105 active:scale-100 transition">
  Contact me here
  <BsArrowRight className="group-hover:icon-back-and-forth" />
</Link>


<a href="/SamarthResueme.pdf" target='_blank' rel="noopener noreferrer" className="group bg-white text-grey-900 px-7 py-3 flex items-center justify-center gap-2 rounded-full hover:scale-105  active:scale-100 transition border border-black/10">
  Download CV
  <HiDownload className="group-hover:move-up-and-down transition-all" />
</a>

    <a href="https://www.linkedin.com/in/thesamarthshah/" target='_blank' className='group bg-white text-grey-700 p-4 flex items-center justify-center gap-2 rounded-full hover:scale-105 active:scale-100 transition border border-black/10'><BsLinkedin className="group-hover:rotate-360 transition duration-1000"/></a>
    <a href="https://github.com/TheSamarthShah" target='_blank' className='group bg-white text-grey-700 p-4 flex items-center justify-center gap-2 rounded-full hover:scale-105 active:scale-100 transition border border-black/10'><BsGithub className="group-hover:rotate-360 transition duration-1000"/></a>
</motion.div>

    </section>
  )
}
