// "use client";
// import React from "react";
// import dynamic from "next/dynamic";

// const AnimatedNumbers = dynamic(
//   () => {
//     return import("react-animated-numbers");
//   },
//   { ssr: false }
// );

// const achievementsList = [
//   {
//     metric: "Projects",
//     value: "50",
//     postfix: "+",
//   },
//   {
//     postfix: "+",
//     metric: "Users Visited",
//     value: "20",
//   },
//   {
//     metric: "Awards",
//     value: "3",
//   },
//   {
//     metric: "Years",
//     value: "2",
//   },
// ];

// const AchievementsSection = () => {
//   return (
//     <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//       <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
//         {achievementsList.map((achievement, index) => {
//           return (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
//             >
//               <h2 className="text-white text-4xl font-bold flex flex-row">
//                 {achievement.prefix}
//                 <AnimatedNumbers
//                   includeComma
//                   animateToNumber={parseInt(achievement.value)}
//                   locale="en-US"
//                   className="text-white text-4xl font-bold"
//                   configs={(_, index) => {
//                     return {
//                       mass: 1,
//                       friction: 100,
//                       tensions: 140 * (index + 1),
//                     };
//                   }}
//                 />
//                 {achievement.postfix}
//               </h2>
//               <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AchievementsSection;
// components/AchievementsSection.jsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

/**
 * Keep the component name AchievementsSection, but change content to Experience.
 * “Stairs going up” effect: each card is slightly higher than the previous one
 * + staggered animation on load.
 *
 * IMPORTANT: Replace/adjust titles/dates to match your real timeline.
 */
const experienceList = [
  {
    company: "DataBeat",
    role: "Custom Front-End Developer • Data Analyst",
    location: "Hyderabad, India",
    timeframe: "Feb 2024 — Jan 2025",
    level: 1,
    bullets: [
      "Built Next.js/React features and internal tools for faster operations.",
      "Worked with APIs + spreadsheets for ingestion and reporting workflows.",
      "Collaborated cross-functionally to deliver production-ready releases.",
    ],
  },
  {
    company: "Janata Diagnostic Centre",
    role: "SDE • Web Developer",
    location: "Remote",
    timeframe: "2024 — 2025",
    level: 2,
    bullets: [
      "Built and deployed a production Next.js website (responsive UI + clean routing).",
      "Improved information architecture for services and navigation clarity.",
      "Shipped to Vercel with stable builds and performance-focused pages.",
    ],
    links: {
      live: "https://janatadiagnosticcentre.vercel.app/",
      repo: "https://github.com/sumayya6652/janatadiagnosticcentre",
    },
  },
  {
    company: "Camp Australia",
    role: "Inclusion Support Educator (OSHC)",
    location: "NSW, Australia",
    timeframe: "Mar 2025 — Present",
    level: 3,
    bullets: [
      "Supported children requiring additional learning/development assistance.",
      "Planned and delivered inclusive activities in a safety-first environment.",
      "Worked with educators and families to support individual needs.",
    ],
  },
  {
    company: "Academic Tutor",
    role: "Tutor (Math/CS/Physics)",
    location: "Sydney, Australia",
    timeframe: "Feb 2025 — Present",
    level: 4,
    bullets: [
      "Tutored students in programming and problem-solving with structured guidance.",
      "Created simplified explanations and practice plans to improve outcomes.",
      "Adapted teaching approach to student level and learning style.",
    ],
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-8 px-4 sm:py-14 xl:px-16" id="experience">
      <div className="sm:border-[#33353F] sm:border rounded-md py-10 px-6 sm:px-10">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-white text-3xl sm:text-4xl font-bold">
              Experience
            </h2>
            <p className="text-[#ADB7BE] mt-2">
              Timeline-style highlights (click links where available).
            </p>
          </div>
        </div>

        {/* Stairs container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-end">
          {experienceList.map((item, idx) => {
            // “stairs”: each next card is raised a bit more on large screens
            const stairOffset = item.level * 10; // adjust if you want steeper
            return (
              <motion.div
                key={`${item.company}-${idx}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
                style={{
                  // stairs effect (only meaningful on wider layouts)
                  transform: `translateY(-${stairOffset}px)`,
                }}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-white font-semibold text-lg">
                        {item.company}
                      </p>
                      <p className="text-white/80 text-sm mt-1">{item.role}</p>
                      <p className="text-[#ADB7BE] text-xs mt-2">
                        {item.location} • {item.timeframe}
                      </p>
                    </div>

                    {/* Animated “level” badge */}
                    <div className="flex items-center gap-1">
                      <span className="text-white/60 text-xs">Lvl</span>
                      <span className="text-white text-sm font-bold">
                        <AnimatedNumbers
                          animateToNumber={item.level}
                          includeComma={false}
                          locale="en-US"
                          className="text-white text-sm font-bold"
                          configs={() => ({
                            mass: 1,
                            friction: 90,
                            tension: 160,
                          })}
                        />
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 list-disc pl-5 text-white/75 text-sm space-y-2">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>

                  {item.links ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.links.live ? (
                        <a
                          href={item.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-full text-sm bg-gradient-to-br from-primary-500 to-secondary-500 text-white hover:opacity-90"
                        >
                          Live
                        </a>
                      ) : null}
                      {item.links.repo ? (
                        <a
                          href={item.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-full text-sm border border-white/15 text-white hover:bg-white/5"
                        >
                          GitHub
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                {/* subtle bottom bar for visual hierarchy */}
                <div className="h-1 w-full bg-gradient-to-r from-primary-500/70 to-secondary-500/70" />
              </motion.div>
            );
          })}
        </div>

        <p className="text-white/40 text-xs mt-6">
          Tip: Replace placeholder timeframes/bullets with exact dates and
          measurable outcomes where possible.
        </p>
      </div>
    </section>
  );
};

export default AchievementsSection;
