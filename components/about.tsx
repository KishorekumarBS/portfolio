"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After graduating with a degree in{" "}
  <span className="font-medium">Computer Science and Engineering</span>, I decided to pursue my passion for{" "}
  <span className="font-medium">cybersecurity and software development</span>. I enrolled in a{" "}
  <span className="font-medium">Master's program in Computer Science</span> to further enhance my skills. My studies and projects have focused on strengthening digital security. {" "}
  <span className="italic">My favorite aspect of cybersecurity</span> is the opportunity to identify vulnerabilities and create robust solutions that prevent exploitation. I {" "}
  <span className="underline">enjoy</span> the challenge of architecting systems that are both efficient and secure. My core skills include{" "}
  <span className="font-medium">network security, Python, Java, JavaScript, React, and SpringBoot</span>.
</p>
<p>
  <span className="italic">Beyond coding and security analysis</span>, I find great satisfaction in{" "}
  <span className="font-medium">mentoring and teaching</span>. I served as an{" "}
  <span className="font-medium">instructor for a cybersecurity principles course</span>, supporting my deep interest in the field. Additionally, my experience as a{" "}
  <span className="font-medium">security intern at Fresno State</span> reinforced my passion for protecting digital ecosystems.
</p>
<p>
  <span className="italic">In my free time</span>, I enjoy participating in{" "}
  <span className="font-medium">CTFs (Capture The Flag) challenges and solving security puzzles</span>. These activities allow me to continuously improve my problem-solving skills and stay ahead in the fast-evolving cybersecurity landscape. I am currently seeking a{" "}
  <span className="font-medium">full-time position</span> where I can contribute my skills and grow professionally in the area of cybersecurity.
</p>

    </motion.section>
  );
}
