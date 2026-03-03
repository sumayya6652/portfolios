// components/ProjectCard.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  meta, // { timeframe, role, teamSize, status, highlights[] }
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#121212]">
      <div
        className="h-52 md:h-72 relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label={`${title} thumbnail`}
      >
        <div className="absolute inset-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-75 transition-all duration-300 items-center justify-center">
          {gitUrl ? (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
              aria-label="Open GitHub repository"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white" />
            </Link>
          ) : null}

          {previewUrl ? (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
              aria-label="Open live preview"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white" />
            </Link>
          ) : null}
        </div>
      </div>

      <div className="bg-[#181818] py-6 px-4">
        <h5 className="text-white text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm leading-relaxed">{description}</p>

        {/* Buttons row */}
        <div className="mt-4 flex flex-wrap gap-2">
          {previewUrl ? (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-sm hover:opacity-90"
            >
              Live / Preview
            </Link>
          ) : null}

          {gitUrl ? (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-white/15 text-white text-sm hover:bg-white/5"
            >
              GitHub
            </Link>
          ) : null}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="px-4 py-2 rounded-full border border-white/15 text-white text-sm hover:bg-white/5 inline-flex items-center gap-2"
            aria-expanded={open}
          >
            <InformationCircleIcon className="h-5 w-5" />
            {open ? "Hide details" : "More details"}
          </button>
        </div>

        {/* Expandable details (smooth transition) */}
        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-white/60">Timeframe</p>
                    <p className="text-white">{meta?.timeframe || "—"}</p>
                  </div>
                  <div>
                    <p className="text-white/60">Team size</p>
                    <p className="text-white">{meta?.teamSize || "—"}</p>
                  </div>
                  <div>
                    <p className="text-white/60">Role</p>
                    <p className="text-white">{meta?.role || "—"}</p>
                  </div>
                  <div>
                    <p className="text-white/60">Status</p>
                    <p className="text-white">{meta?.status || "—"}</p>
                  </div>
                </div>

                {meta?.highlights?.length ? (
                  <div className="mt-3">
                    <p className="text-white/60 text-sm mb-2">Key highlights</p>
                    <ul className="list-disc pl-5 text-white/80 text-sm space-y-1">
                      {meta.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <p className="text-white/40 text-xs mt-3">
                  Note: Edit these details to match your exact timeline/team.
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectCard;
