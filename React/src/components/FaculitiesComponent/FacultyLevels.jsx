import React, { useState } from "react";
const facultyLevels = [
  {
    id: 1,
    name: "Level 1",
    semesters: {
      "First Semester": ["Biology", "Mathematics", "Chemistry"],
      "Second Semester": ["Physics", "Computer Science", "English"],
    },
  },
  {
    id: 2,
    name: "Level 2", 
    semesters: {
      "First Semester": ["Anatomy", "Genetics", "Biostatistics"],
      "Second Semester": ["Microbiology", "Pathology"],
    },
  },
  {
    id: 3,
    name: "Level 3",
    semesters: {
      "First Semester": ["Pharmacology", "Medical Ethics"],
      "Second Semester": ["Clinical Skills", "Health Systems"],
    },
  },
  {
    id: 4,
    name: "Level 4",
    semesters: {
      "First Semester": ["Surgery I", "Internal Medicine I"],
      "Second Semester": ["Surgery II", "Internal Medicine II"],
    },
  },
];

export default function FacultyLevels() {
  const [openLevel, setOpenLevel] = useState(null);

  const toggleLevel = (id) => {
    setOpenLevel(openLevel === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      {facultyLevels.map((level) => {
        const semesters = Object.entries(level.semesters);
        const maxCourses = Math.max(...semesters.map(([_, courses]) => courses.length));

        return (
          <div key={level.id} className="bg-white border rounded-lg shadow-md">
            {/* Accordion Header */}
            <button
              onClick={() => toggleLevel(level.id)}
              className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center text-lg font-bold text-mainColor"
            >
              {level.name}
              <span>{openLevel === level.id ? "−" : "+"}</span>
            </button>

            {/* Accordion Content */}
            {openLevel === level.id && (
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {semesters.map(([semesterName, courses]) => (
                    <div key={semesterName} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                      <h3 className="text-center font-semibold text-secondaryColor border-b pb-2 mb-3">
                        {semesterName}
                      </h3>
                      <ul className="space-y-2">
                        {courses.length > 0 ? (
                          courses.map((course, index) => (
                            <li
                              key={index}
                              className="border-b pb-1 text-gray-700 hover:text-mainColor transition"
                            >
                              📘 {course}
                            </li>
                          ))
                        ) : (
                          <li className="text-gray-400 italic">No courses</li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
