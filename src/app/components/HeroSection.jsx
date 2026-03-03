// "use client";
// import React from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const HeroSection = () => {
//   return (
//     <section className="lg:py-16">
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
//         >
//           <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
//               Hello, I&apos;m{" "}
//             </span>
//             <br></br>
//             <TypeAnimation
//               sequence={[
//                 "Sumayya",
//                 1000,
//                 "FullStack Developer",
//                 1000,
//                 "Data Scientist",
//                 1000,
//                 "Data Engineer",
//                 1000,
//                 "UI/UX Designer",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </h1>
//           <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
//   A passionate front-end developer with a
//   strong foundation in Machine Learning
//   and Data Science. I hold a Bachelor&apos;s
//   degree in Computer Science with an 8.0
//   GPA and have hands-on experience in
//   building intuitive interfaces and
//   data-driven applications. Driven by curiosity and creativity, I aim to craft
//   digital experiences that leave a lasting impact.
// </p>

//           <div>
//             <Link
//               href="https://www.linkedin.com/in/sumayya-maqdoom/"
//               className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
//             >
//               Hire Me
//             </Link>
//             <Link
//               href="/resume.pdf"
//               className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
//             >
//               <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
//                 Download CV
//               </span>
//             </Link>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-4 place-self-center mt-4 lg:mt-0"
//         >
//           <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
//             <Image
//               src="/images/hero-image.png"
//               alt="hero image"
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               width={300}
//               height={300}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          {/* Change 1: Make H1 your role; keep name secondary.
              This aligns better with SWE applications and avoids role mismatch. */}
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hi, I&apos;m Sumayya
            </span>
            <br />
            <span className="block">
              Software Engineer
              <span className="sr-only"> — </span>
              {/* Change 2: Animation becomes “specialties”, not contradictory titles */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-500">
                {" "}
                <TypeAnimation
                  sequence={[
                    " • Full-Stack (Next.js)",
                    1200,
                    " • Data Pipelines (Python)",
                    1200,
                    " • Applied ML",
                    1200,
                  ]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                />
              </span>
            </span>
          </h1>

          {/* Change 3: Remove GPA + shorten to 2 lines with proof-oriented phrasing */}
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-2xl">
            I build production web apps and data products—clean UI, reliable
            pipelines, and measurable outcomes—using Next.js, Python, and modern
            tooling.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Change 4: Primary CTA goes to Projects (better than “Hire Me” -> LinkedIn) */}
            <Link
              href="#projects"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-90 text-white text-center"
            >
              View Projects
            </Link>

            {/* Change 5: Resume should open in new tab and be clearly labeled */}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full border border-white/20 hover:bg-white/5 text-white text-center"
            >
              Download Resume
            </Link>

            {/* Optional: keep LinkedIn as a tertiary link, not the main CTA */}
            <Link
              href="https://www.linkedin.com/in/sumayya-maqdoom/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-[#121212] hover:bg-slate-800 text-white text-center border border-white/10"
            >
              LinkedIn
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-6 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[380px] lg:h-[380px] relative overflow-hidden">
            {/* Change 6: improve image semantics + cropping; avoid “hero image” alt */}
            <Image
              src="/images/hero-image.png"
              alt="Portrait illustration of Sumayya"
              fill
              priority
              sizes="(max-width: 1024px) 250px, 380px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
