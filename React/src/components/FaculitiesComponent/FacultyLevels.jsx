import { useState } from "react";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { FaBookOpen } from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";

const tabs = [
  {
    id: "1",
    label: "Level 1",
    icon: <FaBookOpen size={20} />,
    title: "Courses of Level 1",
    content: [
      {
        title: "Semester 1",
        courses: [
          "Orientation & Preparation to Medical school",
          "Musculoskeletal System",
          "Foundation 1",
          "Blood and Lymph",
          "Foundation 2",
          "Communication Skills and Medical Professionalism",
          "Medical Terminology",
          "Faculty Elective 2",
          "Quality Orientation",
          "Faculty Elective 1",
        ],
      },
      {
        title: "Semester 2",
        courses: [
          "Biochemistry Basics",
          "Genetics",
          "Physiology",
          "Faculty Elective 3",
          "Faculty Elective 4",
        ],
      },
    ],
  },
  {
    id: "2",
    label: "Level 2",
    icon: <FaBookOpen size={20} />,
    title: "Courses of Level 2",
    content: [
      {
        title: "Semester 1",
        courses: [
          "Pathology 1",
          "Pharmacology 1",
          "Microbiology",
          "Faculty Elective 5",
        ],
      },
      {
        title: "Semester 2",
        courses: ["Pathology 2", "Pharmacology 2", "Parasitology"],
      },
    ],
  },
  {
    id: "3",
    label: "Level 3",
    icon: <FaBookOpen size={20} />,
    title: "Courses of Level 3",
    content: [
      {
        title: "Semester 1",
        courses: ["Internal Medicine 1", "Surgery 1", "OB/GYN 1"],
      },
      {
        title: "Semester 2",
        courses: ["Internal Medicine 2", "Surgery 2", "OB/GYN 2"],
      },
    ],
  },
  {
    id: "4",
    label: "Level 4",
    icon: <FaBookOpen size={20} />,
    title: "Courses of Level 4",
    content: [
      {
        title: "Internship Year",
        courses: [
          "Internal Medicine Rotation",
          "Surgery Rotation",
          "Pediatrics Rotation",
          "OB/GYN Rotation",
          "Electives",
        ],
      },
    ],
  },
];

export default function FacultyLevels() {
  const [activeTab, setActiveTab] = useState("1");
  const { t } = useTranslation();

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center flex items-center flex-col gap-3 mb-8">
        <div className="flex items-center gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
          <HiOutlineBuildingLibrary className="w-6 h-6" />
          <span className="text-sm tracking-widest uppercase">
            {t("tcourse")}
          </span>
        </div>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <Trans
              i18nKey="course"
              components={{ highlight: <span className="text-mainColor" /> }}
            />
          </h2>
        </div>
      </div>

      {/* Tabs Wrapper */}
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
        <div className="flex-1 p-6 text-center md:text-left bg-white">
          {tabs
            .filter((tab) => tab.id === activeTab)
            .map((tab) => (
              <div key={tab.id}>
                <h3 className="text-xl font-semibold mb-4">{tab.title}</h3>

                {/* Show semesters */}
                <div className="space-y-6">
                  {tab.content.map((section, i) => (
                    <div key={i} className="border rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-medium mb-2 text-mainColor">
                        {section.title}
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {section.courses.map((course, idx) => (
                          <li key={idx}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
