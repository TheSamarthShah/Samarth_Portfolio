"use client";

import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Project({ title, description, tags }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="max-w-[45rem] mx-auto text-center leading-7 scroll-mt-24 mb-16 px-4 sm:px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h3>
      
      <p className="mb-4 text-gray-700">{description}</p>

      <ul className="flex flex-wrap justify-center gap-2">
        {tags.map((tag: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
          <li
            key={index}
            className="bg-black/70 text-white dark:text-white/80 px-3 py-1 text-xs rounded-full tracking-wider uppercase"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
