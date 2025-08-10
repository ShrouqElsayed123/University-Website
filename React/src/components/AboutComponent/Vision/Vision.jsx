import React, { useEffect, useState } from "react";
import { Eye, Flag } from "lucide-react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const iconMap = {
  Eye: <Eye className="w-12 h-12 text-mainColor" />,
  Flag: <Flag className="w-12 h-12 text-mainColor" />,
};

export default function Vision() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:1337/api/university-infos?locale=${currentLang}`)
      .then((res) => {
        const item = res.data.data[0]; // حسب شكل API، نأخذ أول عنصر
        if (item && item.visionmission) {
          setData(item.visionmission);
        } else {
          setData(null);
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentLang]);

  if (loading) return <p className="text-center py-10">جاري التحميل...</p>;
  if (!data) return <p className="text-center py-10">لا توجد بيانات للعرض</p>;

  // نجهز بيانات الخطوات (الرؤية والرسالة) مع الأيقونات والنصوص
  const steps = [
    {
      id: 1,
      title: currentLang === "ar" ? "الرؤية" : "Vision",
      text: data.vision.text,
      icon: iconMap[data.vision.icon] || null,
    },
    {
      id: 2,
      title: currentLang === "ar" ? "الرسالة" : "Mission",
      text: data.mission.text,
      icon: iconMap[data.mission.icon] || null,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-stretch gap-6 py-10 px-4 max-w-screen-xl mx-auto">
      {steps.map(({ id, title, text, icon }) => (
        <div
          key={id}
          className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-full flex-1 min-w-[250px] max-w-[500px] flex flex-col items-center text-center px-6 py-10 transition-transform hover:scale-105"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-mainColor text-white px-6 py-1.5 rounded-full text-xl font-medium shadow-md">
            {title}
          </div>
          <div className="flex flex-col items-center justify-start space-y-4 flex-grow">
            {icon}
            <p className="text-gray-500 dark:text-white text-sm w-full">{text}</p>
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 h-10 w-2 bg-mainColor rounded-r-md hidden md:block"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 h-10 w-2 bg-mainColor rounded-l-md hidden md:block"></div>
        </div>
      ))}
    </div>

  );
}
