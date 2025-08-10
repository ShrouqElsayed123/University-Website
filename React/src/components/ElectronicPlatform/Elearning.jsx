

import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function Elearning() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const [elearning, setElearning] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:1337/api/electronicplatforms1?locale=${currentLang}`)
      .then((res) => {
        const data = res.data.data[0]?.data;
        setElearning(data);
        console.log(data)
      })
      .catch((err) => {
        console.error("Error fetching e-learning data:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentLang]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!elearning) return <div className="text-center py-10 text-red-500">No data found</div>;

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-800 mb-6">
          {elearning.title}
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-2">
          {elearning.paragraph1}
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-2">
          {elearning.paragraph2}
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
          {elearning.paragraph3}
        </p>

        <a
          href={elearning.button_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold btn-filled transition duration-300 text-sm sm:text-base"
        >
          {elearning.button_text}
        </a>
      </div>
    </section>
  );
}















// import React from 'react'

// export default function Elearning() {
//   return (
//     <>

//   <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 text-center">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-800 mb-6">
//           E-learning platform
//         </h2>

//         <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-2">
//           The e-learning platform was launched on the Modell platform, which serves students in completing the educational and study process.
//         </p>

//         <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-2">
//           It is where courses are uploaded and is the means of communication between the student and the faculty member.
//         </p>

//         <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
//           Online lectures and research papers are also offered to students.
//         </p>

//         <a
//           href="https://mnulms.menofia.education/login/index.php"
//           target='_blank'
//           className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold btn-filled transition duration-300 text-sm sm:text-base"
//         >
//           E-learning platform
//         </a>
//       </div>
//     </section>






//     </>
//   )
// }
