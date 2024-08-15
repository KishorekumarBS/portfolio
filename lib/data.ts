import React from "react";
import { FaUserTie, FaLaptopCode, FaServer } from 'react-icons/fa';

import wiresharkImg from "@/public/wireshark.png";
import csrfImg from "@/public/csrf.jpeg";
import cloudsecImg from "@/public/cloudsec.png";
import testingImg from "@/public/testing.jpeg";
import blogImg from "@/public/blog.png";
import designIMG from "@/public/designpattern.png";
import flashTypImg from "@/public/flashtype.png";
import blog from "@/public/BlogMERN.png";

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
    name: "Education",
    hash: "#education"
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
  title: "Instructor - CyberSecurity Certificate, Beginner Program",
  location: "California State University, Fresno",
  description:
  "I taught cybersecurity principles, focusing on beginner-level concepts and software architecture. I guided students through hands-on modules, empowering them with practical skills in Python, cloud computing, and legal aspects for future career success.",
  icon: React.createElement(FaUserTie),
  date: "Jan 2024 - Present",
  },
  {
  title: "Software Engineer I Intern",
  location: "Cognizant Technology Solutions, Chennai, India",
  description:
  "I acquired comprehensive web technology skills, including HTML, CSS, JavaScript, Python, Java, and data structures. I successfully executed and led a full-stack project using Django, MongoDB, and Python, increasing user satisfaction by 25%.",
  icon: React.createElement(FaLaptopCode),
  date: "Feb 2022 - July 2022",
  },
  {
  title: "Junior Software DevOps",
  location: "Ruchi Soya Industries Ltd, Tiruvallur, India",
  description:
  "I gained exposure to various web technologies and learned to use modern development tools like Docker and AWS for deploying and managing web applications. I contributed to a cloud-based project using Docker, AWS, and Python, increasing system efficiency by 15%.",
  icon: React.createElement(FaServer),
  date: "Aug 2021 - Dec 2021",
  },
  ]as const;

  export const educationData = [
    {
      title: "Master of Science, Computer Science",
      location: "California State University, Fresno, USA",
      description: "GPA: 3.67/4.00",
      tags: ["Principles of Programming Languages", "Combinatorial Algorithms", "Software Engineering", "Human Computer Interaction", "Advanced Database Systems"],
      icon: React.createElement(FaUserTie),
      date: "Aug 2022 - Present",
    },
    {
      title: "Bachelors of Engineering, Computer Science and Engineering",
      location: "Anna University, Chennai, India",
      description: "GPA: 8.49/10.00",
      tags: ["Programming", "Database Systems", "Computer Networks", "Operating Systems"],
      icon: React.createElement(FaLaptopCode),
      date: "Aug 2018 - May 2022",
    },
  ] as const;

  export const projectsData = [
    {
      title: "MERN Stack Blog",
      description:
        "Engineered a full-stack blog platform using the MERN stack. Features include user authentication, rich text editing, and responsive design.",
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "RESTful API"],
      imageUrl: blog, 
      liveUrl: "https://blog-mern-ten.vercel.app/",
    },
    {
      title: "Flash Typing",
      description:
        "Developed an interactive typing speed test website using React, JavaScript (ES6), CSS, and API integration, providing real-time feedback and detailed results.",
      tags: ["React", "JavaScript", "CSS", "API"],
      imageUrl: flashTypImg,
      liveUrl: "https://flashtypetest.vercel.app/", 
    },
    {
      title: "Design Pattern-Driven Online Marketplace",
      description:
        "Orchestrated end-to-end SDLC implementation for a dynamic Python-Django marketplace, applying SOLID principles.",
      tags: ["Python", "JavaScript", "Django", "SOLID", "Design Patterns"],
      imageUrl: designIMG,
      liveUrl: null, // This project is not live yet
    },
    {
      title: "Blog API",
      description:
        "Developed a RESTful API for a blog using Python and Django, supporting CRUD operations and JSON responses.",
      tags: ["Python", "Django", "REST", "PostgreSQL", "JWT"],
      imageUrl: blogImg,
      liveUrl: null, // This project is not live yet
    },
    {
      title: "Automated Testing Framework",
      description:
        "Developed an automated testing framework using Python and Selenium to efficiently test web applications.",
      tags: ["Python", "Selenium", "Jenkins", "CI/CD", "Testing"],
      imageUrl: testingImg,
      liveUrl: null, // This project is not live yet
    },
    {
      title: "Cybersecurity Attack Analysis",
      description:
        "Analyzed session hijacking, CSRF, and packet sniffing, enhancing threat awareness and response time.",
      tags: ["Cybersecurity", "Threat Analysis", "Incident Response"],
      imageUrl: csrfImg,
      liveUrl: null, // This project is not live yet
    },
    {
      title: "Cloud Security Fundamentals Project",
      description:
        "Participated in designing a secure cloud environment on AWS, emphasizing privacy and data protection.",
      tags: ["Cloud Security", "AWS", "Access Control", "Encryption", "DevOps"],
      imageUrl: cloudsecImg,
      liveUrl: null, // This project is not live yet
    },
    {
      title: "Wireshark Traffic Analysis",
      description:
        "Utilized Wireshark for in-depth analysis of network traffic, dissecting protocols and implementing security measures.",
      tags: ["Wireshark", "Network Security", "Incident Response", "Threat Mitigation"],
      imageUrl: wiresharkImg,
      liveUrl: null, // This project is not live yet
    },
    
  ] as const;
  
  

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
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