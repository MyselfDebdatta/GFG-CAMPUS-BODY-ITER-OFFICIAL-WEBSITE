"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function HeroGallerySection() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Zer0ne CTF · Chakravyuh Genesis",
    link: "/events",
    thumbnail: "/showcase/zerone-ctf.png",
  },
  {
    title: "Founders Unplugged with Zahid Akhtar",
    link: "/events",
    thumbnail: "/showcase/founders-unplugged.png",
  },
  {
    title: "Chai-Links Episode 01 · AIC SOA",
    link: "/events",
    thumbnail: "/showcase/chai-links-ep1.png",
  },
  {
    title: "Rachitva Design & Pitch Competition",
    link: "/events",
    thumbnail: "/showcase/rachitva-design.png",
  },
  {
    title: "Chapter Launch & Orientation",
    link: "/events",
    thumbnail: "/showcase/chapter-launch.png",
  },
  {
    title: "Agentic AI & GenAI Workshop",
    link: "/events",
    thumbnail: "/showcase/agentic-ai-workshop.jpg",
  },
  {
    title: "Raw & Ready Personality Session",
    link: "/events",
    thumbnail: "/showcase/raw-and-ready.png",
  },
  {
    title: "GFG ITER Community Cohort",
    link: "/team",
    thumbnail: "/showcase/community-cohort.png",
  },
  {
    title: "DevOps & CI/CD Cloud Workshop",
    link: "/events",
    thumbnail: "/showcase/devops-pipelines.png",
  },
  {
    title: "AI Automation with n8n",
    link: "/events",
    thumbnail: "/showcase/ai-automation-n8n.jpg",
  },
  {
    title: "Linux, Cloud & OS Internals",
    link: "/events",
    thumbnail: "/showcase/linux-cloud-systems.png",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    link: "/events",
    thumbnail: "/showcase/cybersecurity-hacking.png",
  },
  {
    title: "Chai-Links Episode 0 · Networking",
    link: "/events",
    thumbnail: "/showcase/chai-links-ep0.png",
  },
  {
    title: "Chakravyuh Genesis Ideathon",
    link: "/events",
    thumbnail: "/showcase/chakravyuh-genesis.png",
  },
  {
    title: "Tech Innovation & Student Ventures",
    link: "/events",
    thumbnail: "/showcase/tech-innovation.png",
  },
];
