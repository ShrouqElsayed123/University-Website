import React, { useRef, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  FaBell,
  FaCheckCircle,
  FaClock,
  FaHourglass,
  FaSpinner,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const iconMap = {
  FaBell: <FaBell size={20} />,
  FaCheckCircle: <FaCheckCircle size={20} />,
  FaClock: <FaClock size={20} />,
  FaHourglass: <FaHourglass size={20} />,
  FaSpinner: <FaSpinner size={20} />,
};

export default function Timeline1() {
  const [events, setEvents] = useState([]);
  const containerRef = useRef(null);

  // جلب اللغة الحالية من i18next
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  useEffect(() => {
    async function fetchData() {
      try {
        // استخدم اللغة في رابط الـ API
        const res = await fetch(
          `http://localhost:1337/api/university-histories?locale=${currentLang}`
        );
        const json = await res.json();
        if (json.data && json.data.length > 0) {
          setEvents(json.data[0].TimeLine);
        }
      } catch (error) {
        console.error("Failed to fetch timeline data:", error);
      }
    }

    fetchData();
  }, [currentLang]); // يعيد الجلب عند تغيير اللغة

  // ترتيب التواريخ
  const sortedEvents = [...events].sort((a, b) => {
    const parseDate = (str) => {
      const [datePart] = str.split(" ");
      const [day, month, year] = datePart.split("/");
      return new Date(`${year}-${month}-${day}`);
    };
    return parseDate(a.date) - parseDate(b.date);
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  function TimelineItem({ item, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: "-50px" });
    const isRight = index % 2 === 0;

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 + index * 0.2, ease: "easeOut" }}
        className={`relative flex items-center ${isRight ? "justify-start" : "justify-end"
          } z-10`}
      >
        <div
          className={`hidden absolute left-1/2 w-10 h-10 rounded-full text-white md:flex items-center justify-center shadow-md transform -translate-x-1/2 z-20 ${item.color}`}
        >
          {iconMap[item.icon]}
        </div>

        <div
          className={`bg-white shadow-lg rounded-lg p-4 max-w-xl w-full ${isRight ? "ml-1" : "mr-1"
            }`}
        >
          <div className="text-gray-500 text-sm mb-2">{item.date}</div>
          {item.image && (
            <img
              src={item.image}
              alt="img"
              className="mb-3 rounded shadow-sm"
              width={200}
            />
          )}
          <p className="text-gray-700 text-sm mb-3">{item.text}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="relative max-w-7xl mx-auto p-4 mb-0">
      <h2 className="text-2xl font-bold mb-10 text-center">
        {currentLang === "ar"
          ? "تاريخ الجامعة"
          : "The History of the university"}
      </h2>

      <div ref={containerRef} className="relative flex flex-col gap-4">
        <svg
          className="absolute left-1/2 top-[32px] bottom-[32px] -translate-x-1/2 z-0"
          width="20"
          height="99%"
          viewBox="0 0 20 1000"
          preserveAspectRatio="none"
        >
          <path
            d="M10 0 Q0 50 10 100 Q20 150 10 200 Q0 250 10 300 Q20 350 10 400 Q0 450 10 500 Q20 550 10 600 Q0 650 10 700 Q20 750 10 800 Q0 850 10 900 Q20 950 10 1000"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          <motion.path
            d="M10 0 Q0 50 10 100 Q20 150 10 200 Q0 250 10 300 Q20 350 10 400 Q0 450 10 500 Q20 550 10 600 Q0 650 10 700 Q20 750 10 800 Q0 850 10 900 Q20 950 10 1000"
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ pathLength }}
          />
        </svg>

        {sortedEvents.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
