import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const branches = [
  { title: "Faculty of Medicine" },
  { title: "Faculty of Dentistry" },
  { title: "Faculty of Physical Therapy" },
  { title: "Faculty of Pharmacy" },
  { title: "Faculty of Veterinary Medicine" },
  { title: "Faculty of Applied Health Sciences Technology" },
  { title: "Faculty of Nursing" },
  { title: "Faculty of Engineering" },
  { title: "Faculty of Computer Science and Artificial Intelligence" },
  { title: "Faculty of Humanities and Social Sciences" },
];

const UniversityFaculties = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const center = {
    x: dimensions.width / 2,
    y: dimensions.height / 2,
  };

  const radius =
    dimensions.width < 640 ? 100 : dimensions.width < 1024 ? 180 : 250;

  const boxWidth = dimensions.width < 640 ? 140 : 200;
  const fontSize = dimensions.width < 640 ? "0.75rem" : "0.875rem";

  return (
    <div
      ref={ref}
      className="relative min-h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden"
    >
      {/* Connecting lines */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {branches.map((_, i) => {
          const angle = (i / branches.length) * 2 * Math.PI;
          const x = center.x + radius * Math.cos(angle);
          const y = center.y + radius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={center.x}
              y1={center.y}
              x2={x}
              y2={y}
              stroke="gray"
              strokeWidth="1.5"
            />
          );
        })}
      </svg>

      {/* Center label */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute rounded-lg bg-mainColor text-white flex items-center justify-center text-center font-bold shadow-lg z-10"
        style={{
          width: 160,
          height: 128,
          top: center.y - 64,
          left: center.x - 80,
          fontSize: "1rem",
        }}
      >
        University Faculties
      </motion.div>

      {/* Branches */}
      {branches.map((branch, i) => {
        const angle = (i / branches.length) * 2 * Math.PI;
        const x = center.x + radius * Math.cos(angle);
        const y = center.y + radius * Math.sin(angle);
        const isLeft = Math.cos(angle) < 0;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: inView ? 0.5 + i * 0.1 : 0,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="absolute z-10 rounded-lg shadow flex items-center gap-2 p-2 bg-white"
            style={{
              top: y - 24,
              left: isLeft ? x - boxWidth : x,
              width: boxWidth,
              fontSize,
            }}
          >
            <div className="text-xl">🏛️</div>
            <div className="font-bold dark:text-gray-900">{branch.title}</div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default UniversityFaculties;
