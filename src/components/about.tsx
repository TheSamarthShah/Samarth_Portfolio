"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
  className="max-w-[45rem] text-center leading-8 scroll-mt-28"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.175 }}
  id="about"
>
  <SectionHeading>About Me</SectionHeading>

  <p className="mb-3">
    By day, I craft enterprise-grade solutions using{" "}
    <span className="font-medium">.NET WebAPI, MVC, and AngularJS</span>, backed by{" "}
    <span className="font-medium">Oracle</span> and{" "}
    <span className="font-medium">SQL Server</span>, all served through{" "}
    <span className="font-medium">NGINX</span>. By night (and on weekends!), I freelance to build fast, modern apps using{" "}
    <span className="font-medium">Next.js</span>,{" "}
    <span className="font-medium">Node.js</span>, and{" "}
    <span className="font-medium">.NET</span>.
  </p>

  <p className="mb-3">
    <span className="italic">JavaScript is my playground</span>—from wrangling complex front-end logic to shaping resilient APIs and fine-tuning databases.
    I’ve also dabbled in{" "}
    <span className="font-medium">React Native</span> and{" "}
    <span className="font-medium">Android Studio</span>, because{" "}
    <span className="italic">why limit creativity to one platform?</span>
  </p>

  <p>
    I thrive on solving real-world problems with{" "}
    <span className="font-medium">technology that delivers</span>—no fluff, just results.
    <span className="italic"> Let's connect</span> and build something amazing together.{" "}
    <span className="text-xl">🚀</span>
  </p>
</motion.section>

  );
}
