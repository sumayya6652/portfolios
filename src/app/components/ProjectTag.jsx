// components/ProjectTag.jsx
"use client";
import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const styles = isSelected
    ? "text-white border-primary-500 bg-white/5"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      type="button"
      className={`${styles} rounded-full border-2 px-5 py-2 text-base sm:text-lg cursor-pointer transition`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
