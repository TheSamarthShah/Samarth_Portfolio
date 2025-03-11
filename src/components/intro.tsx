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
                duration:0.2
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
                          delay:0.2,
                          duration:0.8
                      }}>🙏</motion.span>
        </div>
      </div>

      <motion.h1
  className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-xl"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
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

<div className='flex flex-col sm:flex-row items-center justify-center gap-2 font-medium'>
    <Link href="#contact" className='bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full'>Contact me here<BsArrowRight />
    </Link>
    <a href="" className='bg-white text-grey-900 px-7 py-3 flex items-center justify-center gap-2 rounded-full'>Download CV <HiDownload/></a>
    <a href=""className='bg-white text-grey-700 p-4 flex items-center justify-center gap-2 rounded-full'><BsLinkedin/></a>
    <a href=""className='bg-white text-grey-700 p-4 flex items-center justify-center gap-2 rounded-full'><BsGithub/></a>
</div>



    </section>
  )
}
