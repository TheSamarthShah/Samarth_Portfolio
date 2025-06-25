import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const featuredProjects = [
  {
    title: "Virtual Painter",
    description:
      "Developed a Virtual Painter tool where users can try different color combinations on their own room photo. Built using the MERN stack and jQuery, it’s now evolving with Machine Learning to become the first of its kind.",
    tags: ["MongoDB", "Express", "React", "Node.js", "jQuery", "Machine Learning"],
  },
  {
    title: "Gantt-Chart Editor",
    description:
      "An advanced task and project scheduling tool built on the MVC architecture, featuring an interactive Gantt chart with rich functionalities.",
    tags: [".NET MVC", "JavaScript", "SQL"],
  },
  {
    title: "Management System Framework",
    description:
      "Building a reusable framework tailored for large-scale organizational systems using AngularJS and .NET WebAPI.",
    tags: ["AngularJS", ".NET WebAPI"],
  },
  {
    title: "Ceedmy E-learning Platform",
    description:
      "Crafted a full-featured website for the Ceedmy Institute using the MERN stack to deliver seamless educational experiences.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Rooming",
    description:
      "A MERN-based platform helping students and professionals find ideal roommates or flatmates based on preferences.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "RentalHub",
    description:
      "Designed the front-end for a car rental platform enabling users to browse and rent vehicles with ease.",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Public Chatting App",
    description:
      "An open discussion chat platform built to explore the T3 Stack, enabling users to chat publicly and explore user-specific message histories.",
    tags: ["Next.js", "tRPC", "Tailwind", "TypeScript", "Prisma"],
  },
] as const;

export const supportingProjects = [
  {
    title: "Smart Bench (IoT Project)",
    description:
      "An IoT-integrated student bench featuring facial recognition attendance, sleep detection, and real-time email alerts for monitoring exams.",
    tags: ["IoT", "OpenCV", "Python", "Raspberry Pi"],
  },
  {
    title: "Target Distance Measurement",
    description:
      "A microcontroller-based project using ultrasonic sensors to measure the distance of objects—simple yet precise.",
    tags: ["Arduino", "Ultrasonic Sensor", "Embedded"],
  },
  {
    title: "Temperature & Humidity Monitor",
    description:
      "Built using the DHT11 sensor, this project provides real-time temperature and humidity readings with digital display.",
    tags: ["DHT11", "Arduino", "Sensor", "Embedded"],
  },
  {
    title: "Ni-Rog Clinic & Employee System",
    description:
      "Developed a basic clinic and employee management system using the MVC architecture as part of my learning journey.",
    tags: [".NET MVC", "SQL"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;