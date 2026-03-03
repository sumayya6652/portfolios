// components/AchievementsSection.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * LinkedIn-style vertical timeline (cooler “ladder” while scrolling)
 * - Keeps component name AchievementsSection
 * - Scroll reveals each role with staggered animation
 * - Uses a center line + “steps” dots
 * - Looks good on both mobile + desktop
 *
 * Edit the experience data to match your exact truth (dates/location/bullets).
 */

const EXPERIENCE = [
  {
    company: "DataBeat",
    role: "Custom Front-End Developer • Data Analyst",
    timeframe: "Feb 2024 — Jan 2025",
    location: "Hyderabad, India",
    bullets: [
      "Built Next.js/React features and internal tools for product + ops workflows.",
      "Integrated APIs and automated ingestion into spreadsheets for reporting.",
      "Collaborated cross-functionally to ship production releases.",
    ],
    links: [],
  },
  {
    company: "Janata Diagnostic Centre",
    role: "SDE • Web Developer",
    timeframe: "2022 — 2024",
    location: "Remote",
    bullets: [
      "Built and deployed a production Next.js website with responsive UI and clean routing.",
      "Improved site structure for service discovery and navigation clarity.",
      "Deployed on Vercel with stable builds and performance-focused pages.",
    ],
    links: [
      { label: "Live", href: "https://janatadiagnosticcentre.vercel.app/" },
      { label: "GitHub", href: "https://github.com/sumayya6652/janatadiagnosticcentre" },
    ],
  },
  {
    company: "Camp Australia",
    role: "Inclusion Support Educator (OSHC)",
    timeframe: "Mar 2025 — Present",
    location: "NSW, Australia",
    bullets: [
      "Supported children requiring additional learning/development assistance.",
      "Delivered inclusive programs with safety-first routines and clear communication.",
      "Coordinated with educators and families to support individual needs.",
    ],
    links: [],
  },
  {
    company: "Academic Tutor",
    role: "Tutor (Math / CS / Physics)",
    timeframe: "Feb 2025 — Present",
    location: "Sydney, Australia",
    bullets: [
      "Tutored students with structured plans and step-by-step explanations.",
      "Created practice sets and feedback loops to improve performance.",
      "Adapted teaching style to different student needs and levels.",
    ],
    links: [],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const AchievementsSection = () => {
  return (
    <section id="experience" className="py-10 px-4 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-10 px-6 sm:px-10 bg-black/10">
        <div className="mb-8">
          <h2 className="text-white text-3xl sm:text-4xl font-bold">
            Experience
          </h2>
          <p className="text-[#ADB7BE] mt-2">
            LinkedIn-style timeline — scroll to see roles step down the ladder.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-8">
            {EXPERIENCE.map((item, idx) => {
              const isLeft = idx % 2 === 0; // alternate on desktop
              return (
                <motion.div
                  key={`${item.company}-${idx}`}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="relative"
                >
                  {/* Dot / step */}
                  <div
                    className="
                      absolute left-4 sm:left-1/2 top-6
                      -translate-x-1/2
                      h-4 w-4 rounded-full
                      bg-gradient-to-br from-primary-500 to-secondary-500
                      ring-4 ring-black/40
                    "
                  />

                  {/* Card */}
                  <div
                    className={[
                      "ml-10 sm:ml-0",
                      "rounded-2xl border border-white/10 bg-white/5",
                      "p-5 sm:p-6",
                      "shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
                      "backdrop-blur",
                      // Desktop alternating layout
                      "sm:w-[calc(50%-2.25rem)]",
                      isLeft ? "sm:mr-[calc(50%+2.25rem)]" : "sm:ml-[calc(50%+2.25rem)]",
                    ].join(" ")}
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-white font-semibold text-lg">
                            {item.company}
                          </p>
                          <p className="text-white/80 text-sm mt-1">
                            {item.role}
                          </p>
                          <p className="text-[#ADB7BE] text-xs mt-2">
                            {item.location} • {item.timeframe}
                          </p>
                        </div>

                        {/* step badge */}
                        <div className="shrink-0">
                          <span className="text-xs text-white/70 border border-white/15 rounded-full px-2 py-1">
                            Step {idx + 1}
                          </span>
                        </div>
                      </div>

                      <ul className="mt-4 list-disc pl-5 text-white/75 text-sm space-y-2">
                        {item.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>

                      {item.links?.length ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.links.map((l) => (
                            <a
                              key={l.href}
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={
                                l.label === "Live"
                                  ? "px-3 py-1.5 rounded-full text-sm bg-gradient-to-br from-primary-500 to-secondary-500 text-white hover:opacity-90"
                                  : "px-3 py-1.5 rounded-full text-sm border border-white/15 text-white hover:bg-white/5"
                              }
                            >
                              {l.label}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
