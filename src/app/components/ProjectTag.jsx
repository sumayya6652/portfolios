// import React from "react";

// const ProjectTag = ({ name, onClick, isSelected }) => {
//   const buttonStyles = isSelected
//     ? "text-white border-primary-500"
//     : "text-[#ADB7BE] border-slate-600 hover:border-white";
//   return (
//     <button
//       className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
//       onClick={() => onClick(name)}
//     >
//       {name}
//     </button>
//   );
// };

// export default ProjectTag;

// components/ProjectTag.jsx
"use client";
import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500 bg-white/5"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      type="button"
      className={`${buttonStyles} rounded-full border-2 px-5 py-2 text-base sm:text-lg cursor-pointer transition`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
