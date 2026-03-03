// components/ProjectsSection.jsx
"use client";
import React, { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

// Images are Unsplash "images.unsplash.com" links (free under Unsplash License on their pages).
// Parkinson/ML image: :contentReference[oaicite:0]{index=0}
// Clinic/health image: :contentReference[oaicite:1]{index=1}
// Study image: :contentReference[oaicite:2]{index=2}
// Ingestion/pipeline image: :contentReference[oaicite:3]{index=3}

const PROJECTS = [
  {
    id: 1,
    title: "Janata Diagnostic Centre Website",
    description:
      "Production Next.js website for a diagnostic centre with responsive UI, service pages, and clean navigation; deployed on Vercel.",
    image:
      "https://images.unsplash.com/photo-1763198302243-51142ba5b24a?auto=format&fit=crop&fm=jpg&q=80&w=1400",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sumayya6652/janatadiagnosticcentre",
    previewUrl: "https://janatadiagnosticcentre.vercel.app/",
    meta: {
      timeframe: "2–3 weeks",
      teamSize: "Solo",
      role: "Full-stack (Next.js) + UI",
      status: "Deployed",
      highlights: [
        "Component reuse to keep pages consistent and maintainable",
        "Clean routing and responsive layout across devices",
        "Deployed to Vercel for fast global delivery",
      ],
    },
  },
  {
    id: 2,
    title: "StudyMate (AI Notes + Quiz Generator)",
    description:
      "NLP study assistant that turns notes into summaries and quizzes; designed to support revision and planning workflows.",
    image:
      "https://images.unsplash.com/photo-1771357871525-23b189673615?auto=format&fit=crop&fm=jpg&q=80&w=1400",
    tag: ["All", "AI/NLP"],
    gitUrl: "https://github.com/sumayya6652/buddystudy",
    previewUrl: "https://github.com/sumayya6652/buddystudy",
    meta: {
      timeframe: "3–4 weeks",
      teamSize: "Solo",
      role: "NLP workflow + app logic",
      status: "Prototype / Iterating",
      highlights: [
        "Notes → summary + question generation workflow",
        "Designed outputs to be actionable (quiz + key points)",
        "Structured features around revision efficiency",
      ],
    },
  },
  {
    id: 3,
    title: "Parkinson’s Disease Prediction (ML Notebook)",
    description:
      "ML notebook exploring preprocessing and classification for Parkinson’s prediction; evaluation documented in Colab.",
    image:
      "https://images.unsplash.com/photo-1711409645921-ef3db0501f96?auto=format&fit=crop&fm=jpg&q=80&w=1400",
    tag: ["All", "ML"],
    gitUrl: null,
    previewUrl:
      "https://colab.research.google.com/drive/1n5ggefdNOoGIZdwljaZxcbkiHKrgamr3?usp=sharing",
    meta: {
      timeframe: "1–2 weeks",
      teamSize: "Solo",
      role: "Data prep + modeling + evaluation",
      status: "Completed",
      highlights: [
        "Feature preprocessing + baseline classification models",
        "Model comparison using standard metrics",
        "Reproducible notebook workflow in Colab",
      ],
    },
  },
  {
    id: 4,
    title: "Email → API → Spreadsheet Ingestion Pipeline",
    description:
      "Automation pipeline that reads structured data from email, processes via API, and writes normalized outputs into spreadsheets for reporting.",
    image:
      "https://images.unsplash.com/photo-1718202248477-c5f770d6c8b9?auto=format&fit=crop&fm=jpg&q=80&w=1400",
    tag: ["All", "Data Engineering"],
    gitUrl: null,
    previewUrl: null,
    meta: {
      timeframe: "3–5 weeks",
      teamSize: "2 developers",
      role: "API integration + automation",
      status: "Internal / Private",
      highlights: [
        "Automated ingestion to reduce manual copy/paste",
        "Normalized fields into consistent spreadsheet columns",
        "Designed for repeatable runs and clean outputs",
      ],
    },
  },
];

const TAGS = ["All", "Web", "AI/NLP", "ML", "Data Engineering"];

const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => p.tag.includes(selectedTag));
  }, [selectedTag]);

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
        {filtered.map((p) => (
          <ProjectCard
            key={p.id}
            imgUrl={p.image}
            title={p.title}
            description={p.description}
            gitUrl={p.gitUrl}
            previewUrl={p.previewUrl}
            meta={p.meta}
          />
        ))}
      </div>

      <p className="text-white/40 text-xs mt-4">
        Project images are pulled from Unsplash (free under Unsplash License).
      </p>
    </section>
  );
};

export default ProjectsSection;
