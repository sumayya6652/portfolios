// "use client";
// import React, { useTransition, useState, useRef } from "react";
// import Image from "next/image";
// import TabButton from "./TabButton";

// const TAB_DATA = [
//   {
//     title: "Skills",
//     id: "skills",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Node.js</li>
//         <li>Express</li>
//         <li>Machine Learning</li>
//         <li>Cloud Computing</li>
//         <li>SQL</li>
//         <li>JavaScript</li>
//         <li>React.js</li>
//         <li>Next.js</li>
//         <li>PowerBI</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Education",
//     id: "education",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Mahatma Gandhi Institute of Technology</li>
//         <li>University of Technology, Sydney</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Certifications",
//     id: "certifications",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>AWS Cloud Practitioner</li>
//         <li>Google Professional Cloud Developer</li>
//       </ul>
//     ),
//   },
// ];

// const AboutSection = () => {
//   const [tab, setTab] = useState("skills");
//   const [isPending, startTransition] = useTransition();
//   const backgroundRef = useRef(null);

//   const handleTabChange = (id) => {
//     startTransition(() => {
//       setTab(id);
//     });
//   };

//   const handleMouseMove = (e) => {
//     if (backgroundRef.current) {
//       const { clientX, clientY } = e;
//       const { offsetWidth, offsetHeight } = backgroundRef.current;

//       const x = (clientX / offsetWidth) * 50; // Adjust the multiplier for movement intensity
//       const y = (clientY / offsetHeight) * 50;

//       backgroundRef.current.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
//     }
//   };

//   return (
//     <section
//       className="relative text-white"
//       id="about"
//       onMouseMove={handleMouseMove}
//       ref={backgroundRef}
//       style={{
//         backgroundImage: 'url("https://images.unsplash.com/photo-1503264116251-35a269479413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080")',
//         backgroundSize: "cover",
//         backgroundAttachment: "fixed",
//         backgroundPosition: "50% 50%",
//       }}
//     >
//       <div className="relative md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//         <Image src="/images/about-image.png" width={500} height={500} />
//         <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
//           <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
//           <p className="text-base lg:text-lg">
//             I am a dedicated full-stack web developer with a passion for
//             crafting interactive and responsive web applications that deliver
//             exceptional user experiences. My expertise spans a wide range of
//             technologies, including JavaScript, React, Redux, Node.js, Express,
//             PostgreSQL, Sequelize, HTML, CSS, and Git.
//             <br />
//             <br />
//             As a quick learner with a growth-oriented mindset, I thrive on
//             exploring new tools and frameworks to continuously expand my
//             knowledge and refine my skill set. I excel in collaborative
//             environments, bringing strong problem-solving abilities and a
//             team-first attitude to every project.
//             <br />
//             <br />
//             I am eager to contribute to innovative teams, pushing boundaries to
//             create impactful, high-quality applications that make a difference.
//           </p>
//           <div className="flex flex-row text-black justify-start mt-8">
//             <TabButton
//               selectTab={() => handleTabChange("skills")}
//               active={tab === "skills"}
//             >
//               {" "}
//               Skills{" "}
//             </TabButton>
//             <TabButton
//               selectTab={() => handleTabChange("education")}
//               active={tab === "education"}
//             >
//               {" "}
//               Education{" "}
//             </TabButton>
//             <TabButton
//               selectTab={() => handleTabChange("certifications")}
//               active={tab === "certifications"}
//             >
//               {" "}
//               Certifications{" "}
//             </TabButton>
//           </div>
//           <div className="mt-8">
//             {TAB_DATA.find((t) => t.id === tab).content}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-4">
        <div>
          <p className="text-white/80 font-semibold mb-2">Frontend</p>
          <ul className="list-disc pl-5 text-white/80">
            <li>React, Next.js</li>
            <li>JavaScript</li>
            <li>Responsive UI, accessibility basics</li>
          </ul>
        </div>
        <div>
          <p className="text-white/80 font-semibold mb-2">Backend & Data</p>
          <ul className="list-disc pl-5 text-white/80">
            <li>Node.js, Express</li>
            <li>Python, SQL</li>
            <li>APIs, ETL / data pipelines</li>
          </ul>
        </div>
        <div>
          <p className="text-white/80 font-semibold mb-2">Analytics / ML</p>
          <ul className="list-disc pl-5 text-white/80">
            <li>scikit-learn, evaluation (precision/recall, ROC-AUC)</li>
            <li>Predictive analytics</li>
            <li>Power BI (dashboards)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 text-white/80">
        <li>
          <span className="font-semibold">Master’s in Data Science</span> — University
          of Technology Sydney (UTS)
        </li>
        <li>
          <span className="font-semibold">B.Tech (Computer Science)</span> — Mahatma
          Gandhi Institute of Technology (MGIT)
        </li>
      </ul>
    ),
  },
  {
    title: "Focus",
    id: "focus",
    content: (
      <ul className="list-disc pl-5 text-white/80">
        <li>Building full-stack apps with Next.js</li>
        <li>Data pipelines + analytics for business decisions</li>
        <li>Applied ML projects with clean evaluation</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => startTransition(() => setTab(id));

  return (
    <section className="relative text-white" id="about">
      <div className="relative md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Sumayya"
          sizes="(max-width: 768px) 320px, 500px"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

          {/* Replace generic copy with accurate + concise positioning */}
          <p className="text-base lg:text-lg text-white/80">
            I’m a Master’s student in Data Science at UTS with experience in building
            full-stack web applications and working on data analysis projects. I enjoy
            shipping clean user experiences and backing them with solid data workflows
            and measurable results.
          </p>

          <div className="flex flex-row text-black justify-start mt-8 gap-3 flex-wrap">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("focus")} active={tab === "focus"}>
              Focus
            </TabButton>
          </div>

          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
