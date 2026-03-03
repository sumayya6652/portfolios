// components/ProjectsSection.jsx
"use client";
import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const PROJECTS = [
  {
    id: 1,
    title: "Janata Diagnostic Centre Website",
    description:
      "Production Next.js site for a diagnostic centre with responsive UI, clean navigation, and service-focused pages; deployed on Vercel.",
    image: "/images/projects/janata.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sumayya6652/janatadiagnosticcentre",
    previewUrl: "https://janatadiagnosticcentre.vercel.app/",
    stack: ["Next.js", "React", "Vercel", "Responsive UI"],
    highlights: [
      "Built responsive pages and reusable components to reduce duplication.",
      "Improved navigation and page structure for a cleaner user journey.",
      "Deployed to production on Vercel with stable routing and fast loads.",
    ],
    screenshots: [
      "/images/projects/janata-1.png",
      "/images/projects/janata-2.png",
    ],
  },
  {
    id: 2,
    title: "StudyMate (AI Notes + Quiz Generator)",
    description:
      "NLP-based study assistant that turns notes into summaries, quizzes, and study prompts to support revision workflows.",
    image: "/images/projects/studymate.png",
    tag: ["All", "AI/NLP"],
    gitUrl: "https://github.com/sumayya6652/buddystudy",
    previewUrl: "https://github.com/sumayya6652/buddystudy",
    stack: ["Python", "NLP", "Prompting", "App Workflow"],
    highlights: [
      "Converted notes into concise summaries and question sets for practice.",
      "Designed a workflow for deadlines and structured study outputs.",
      "Focused on usability: fast input → actionable learning artifacts.",
    ],
    screenshots: ["/images/projects/studymate-1.png"],
  },
  {
    id: 3,
    title: "Parkinson’s Disease Prediction",
    description:
      "ML notebook exploring preprocessing and classification for Parkinson’s prediction; evaluation and results documented in Colab.",
    image: "/images/projects/parkinsons.png",
    tag: ["All", "ML"],
    gitUrl: null,
    previewUrl:
      "https://colab.research.google.com/drive/1n5ggefdNOoGIZdwljaZxcbkiHKrgamr3?usp=sharing",
    stack: ["Python", "scikit-learn", "Pandas", "Model evaluation"],
    highlights: [
      "Explored feature processing and trained baseline classifiers.",
      "Evaluated models with standard metrics and validation approach.",
      "Documented methodology and results in a shareable Colab notebook.",
    ],
    screenshots: ["/images/projects/parkinsons-1.png"],
  },
  {
    id: 4,
    title: "Email → API → Spreadsheet Ingestion Pipeline",
    description:
      "Automated ingestion workflow that reads data from email, processes via APIs, and writes structured outputs into spreadsheets for reporting.",
    image: "/images/projects/ingestion.png",
    tag: ["All", "Data Engineering"],
    gitUrl: null,
    previewUrl: null,
    stack: ["APIs", "Automation", "Data cleaning", "Spreadsheets"],
    highlights: [
      "Automated ingestion from email into a structured spreadsheet output.",
      "Used APIs to parse and transform incoming data into consistent columns.",
      "Reduced manual copy/paste by standardizing the flow end-to-end.",
    ],
    screenshots: ["/images/projects/ingestion-1.png"],
  },
];

const TAGS = ["All", "Web", "AI/NLP", "ML", "Data Engineering"];

const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [activeProjectId, setActiveProjectId] = useState(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => p.tag.includes(selectedTag));
  }, [selectedTag]);

  const activeProject = useMemo(() => {
    return PROJECTS.find((p) => p.id === activeProjectId) || null;
  }, [activeProjectId]);

  // Close drawer on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveProjectId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="projects" className="py-10 px-4 xl:px-16">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-4xl font-bold text-white">Projects</h2>
          <p className="text-white/70 mt-2">
            Selected work across full-stack, data engineering, and applied ML.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <ProjectTag
              key={t}
              name={t}
              onClick={setSelectedTag}
              isSelected={selectedTag === t}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredProjects.map((p) => (
          <ProjectCard
            key={p.id}
            imgUrl={p.image}
            title={p.title}
            description={p.description}
            gitUrl={p.gitUrl}
            previewUrl={p.previewUrl}
            onOpen={() => setActiveProjectId(p.id)}
          />
        ))}
      </div>

      {/* Drawer / transition panel */}
      <AnimatePresence>
        {activeProject ? (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProjectId(null)}
            />

            <motion.aside
              className="fixed right-0 top-0 h-full w-full sm:w-[540px] bg-[#0b0b0f] z-50 border-l border-white/10 overflow-y-auto"
              initial={{ x: 560 }}
              animate={{ x: 0 }}
              exit={{ x: 560 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              aria-label="Project details"
            >
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-white text-2xl font-bold">
                      {activeProject.title}
                    </h3>
                    <p className="text-white/70 mt-1">
                      {activeProject.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveProjectId(null)}
                    className="text-white/70 hover:text-white border border-white/15 rounded-full px-3 py-1"
                  >
                    Close
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {activeProject.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs text-white/80 border border-white/15 rounded-full px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <h4 className="text-white font-semibold text-lg">Highlights</h4>
                  <ul className="list-disc pl-5 text-white/80 space-y-2">
                    {activeProject.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {activeProject.previewUrl ? (
                    <Link
                      href={activeProject.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white hover:opacity-90"
                    >
                      Live / Preview
                    </Link>
                  ) : null}
                  {activeProject.gitUrl ? (
                    <Link
                      href={activeProject.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full border border-white/15 text-white hover:bg-white/5"
                    >
                      GitHub
                    </Link>
                  ) : null}
                </div>

                {/* Screenshots */}
                {activeProject.screenshots?.length ? (
                  <div className="mt-8">
                    <h4 className="text-white font-semibold text-lg mb-3">
                      Screenshots
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {activeProject.screenshots.map((src) => (
                        <div
                          key={src}
                          className="relative w-full h-56 rounded-xl overflow-hidden border border-white/10"
                        >
                          <Image
                            src={src}
                            alt={`${activeProject.title} screenshot`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 540px"
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-white/50 text-xs mt-2">
                      Add your screenshots under /public/images/projects/
                    </p>
                  </div>
                ) : null}
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
