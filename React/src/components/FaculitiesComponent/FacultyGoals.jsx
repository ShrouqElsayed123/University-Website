import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { FaBookOpen } from "react-icons/fa";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

const tabs = [
  {
    id: "1",
    label: "Program Objectives",
    icon: <FaBookOpen size={20} />,
    title: "Courses of Level 1",
    content: [
      "تطوير البرامج الأكاديمية لتتناسب مع متطلبات سوق العمل.",
      "تعزيز البحث العلمي ودعم الابتكار.",
      "توسيع الشراكات المجتمعية والإقليمية.",
      "تأهيل الطلاب ليكونوا قادة في المستقبل.",
      "تطبيق معايير الجودة والاعتماد الأكاديمي.",
      "تشجيع الأنشطة الطلابية وتنمية المهارات.",
      "تعزيز التعاون الدولي وتبادل الخبرات.",
      "استخدام التكنولوجيا الحديثة في التعليم.",
    ],
  },
  {
    id: "2",
    label: "Career Path and Job Opportunities ",
    icon: <FaBookOpen size={20} />,
    title: "Courses of Level 2",
    content: [
      "تطوير البرامج الأكاديمية لتتناسب مع متطلبات سوق العمل.",
      "تعزيز البحث العلمي ودعم الابتكار.",
      "توسيع الشراكات المجتمعية والإقليمية.",
      "تأهيل الطلاب ليكونوا قادة في المستقبل.",
      "تطبيق معايير الجودة والاعتماد الأكاديمي.",
      "تشجيع الأنشطة الطلابية وتنمية المهارات.",
      "تعزيز التعاون الدولي وتبادل الخبرات.",
      "استخدام التكنولوجيا الحديثة في التعليم.",
    ],
  },
];

export default function FacultyGoals() {
  const [activeTab, setActiveTab] = useState("1");
  const { t } = useTranslation();

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
       {/* Header */}
      <div className="text-center flex items-center flex-col gap-3 mb-8">
        <div className="flex items-center gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
          <HiOutlineBuildingLibrary className="w-6 h-6" />
          <span className="text-sm tracking-widest uppercase">
            {t("tgoal")}
          </span>
        </div>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <Trans
              i18nKey="goal"
              components={{ highlight: <span className="text-mainColor" /> }}
            />
          </h2>
        </div>
      </div>

      <div className="flex flex-col border rounded-xl shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="flex md:flex-row border-b md:border-b-0 md:border-r bg-gray-50 w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 md:gap-3 p-4 w-full text-sm font-medium transition 
                ${
                  activeTab === tab.id
                    ? "text-mainColor border-b-4 border-mainColor bg-white"
                    : "text-gray-700 hover:text-gray-800"
                }`}
            >
              {tab.icon}
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 p-6 bg-white">
          {tabs
            .filter((tab) => tab.id === activeTab)
            .map((tab) => (
              <div key={tab.id}>
                <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                  {tab.title}
                </h3>

                <ul className="space-y-4">
                  {tab.content.map((goal, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow hover:shadow-md transition"
                    >
                      <CheckCircle className="w-6 h-6 text-mainColor flex-shrink-0" />
                      <span className="text-gray-800">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
