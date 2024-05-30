"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const { ref } = useSectionInView("Education");
  const { theme } = useTheme();

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Education</SectionHeading>
      <div className="space-y-8">
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${
              theme === "light" ? "bg-white" : "bg-gray-800"
            }`}
          >
            <div className="flex items-center mb-4">
              <FaGraduationCap
                className={`text-4xl mr-4 ${
                  theme === "light" ? "text-gray-600" : "text-white"
                }`}
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {item.location}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {item.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {item.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}