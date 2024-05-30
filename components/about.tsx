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
<span className="font-medium">software development and cybersecurity</span>. I enrolled in a{" "}
<span className="font-medium">Master's program in Computer Science</span> to further enhance my skills.{" "}
<span className="italic">My favorite aspect of programming</span> is the opportunity to solve complex problems and create innovative solutions. I{" "}
<span className="underline">love</span> the challenge of architecting efficient and scalable systems. My core stack includes{" "}
<span className="font-medium">Python, Java, JavaScript, React, and Django</span>. I am also passionate about{" "}
<span className="font-medium">data analysis</span> and enjoy leveraging data to drive insights.
</p>
<p>
<span className="italic">Beyond coding</span>, I find great satisfaction in{" "}
<span className="font-medium">mentoring and teaching</span>. I served as an{" "}
<span className="font-medium">instructor for a beginner cybersecurity program</span>, supporting my deep interest in the field. Additionally, my experience as a{" "}
<span className="font-medium">software engineer intern at Cognizant</span> reinforced my passion for software development.
</p>
<p>
<span className="italic">In my free time</span>, I enjoy participating in{" "}
<span className="font-medium">coding competitions and solving problems on LeetCode</span>. These activities allow me to continuously improve my problem-solving skills and stay sharp. I am currently seeking a{" "}
<span className="font-medium">full-time position</span> where I can contribute my skills and grow professionally in the areas of software engineering, cybersecurity, and data analysis.

      </p>
    </motion.section>
  );
}
