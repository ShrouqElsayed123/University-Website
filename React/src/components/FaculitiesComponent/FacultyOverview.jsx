import { BookOpen } from "lucide-react";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { FaEye, FaFlag } from 'react-icons/fa';
import {
    FaTooth,
    FaHeartbeat,
    FaCapsules,
    FaUserNurse,
    FaLaptopCode,
    FaBrain,
    FaPagelines,
    FaPaw,
    FaUsers,
    FaPalette,
    FaChartLine,
    FaTools,
} from "react-icons/fa"
export default function FacultyOverview() {
    const { t } = useTranslation();
    return (
        <section className=" bg-gray-0 dark:bg-gray-900 transition-colors duration-300 my-home-section-margin p-home-section-padding"
            data-aos="fade-top"
        >
            <div className="max-w-7xl mx-auto flex justify-center items-center flex-col gap-home-section-gap">
                {/* <div className={`flex items-center  gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit`}>
                    <BookOpen className="w-6 h-6" />
                    <span className="text-sm  tracking-widest uppercase">
                        Overview
                    </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">

                    Overview
                </h2> */}


                {/* Header */}
                <div className="text-center flex items-center flex-col gap-3">
                    <div className="flex items-center gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
                        <BookOpen className="w-6 h-6" />
                        <span className="text-sm  tracking-widest uppercase">
                            {t('toverview')}
                        </span>
                    </div>
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            {t('overview')}
                        </h2>
                    </div>
                </div>




                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Faculty of Medicine */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                Faculty of Medicine
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The Faculty of Medicine was established to train highly qualified doctors capable of meeting the healthcare needs of society while emphasizing compassionate, evidence-based medical care. The faculty offers an integrated academic program that combines basic medical education with clinical training.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed mt-4">
                                The four-year focus on providing doctors equipped with clinical expertise, strong ethics, collaboration, & commitment to lifelong learning, aims to provide innovation in medical education and research, through a supportive and collaborative learning environment.
                            </p>
                        </div>

                        {/* Medicine and Surgery Program */}
                        <div className="bg-gray-50 p-4 rounded-lg border border-[#a5d1be]">
                            <h4 className="text-xl font-semibold inline-block text-mainColor mb-1">
                                <FaHeartbeat size={24} className="text-mainColor mr-2 inline-block" />

                                <span> Medicine and Surgery Program</span>
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                The Medicine and Surgery Program comprises 5 educational levels
                                that include core biomedical, integrated clinical and clinical
                                clerkships. It provides students with advanced basic science
                                modules and intensive clinical training in hospitals and healthcare
                                centers.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Vision & Mission */}
                    <div className="space-y-6">
                        {/* Vision */}
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#a5d1be]">
                            <h4 className="text-xl font-semibold text-mainColor flex items-center mb-2">
                                <FaEye size={24} className="text-mainColor mr-2" />
                                Vision
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                To become a leading program in delivering outstanding medical education, recognized globally by promoting a culture of integrity, professionalism, innovation and academic excellence.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#a5d1be]">
                            <h4 className="text-xl font-semibold text-mainColor flex items-center mb-2">
                                <FaFlag size={24} className="text-mainColor mr-2" />
                                Mission
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                The Medicine and Surgery Program aims to provide comprehensive medical education that equips newly graduated physicians with clinical skills and professional communication.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    // return (
    //     <div className="p-6 bg-gray-100 flex flex-col items-center">
    //         <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">🎯 {goals.title}</h2>
    //         <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center">🎯 {goals.subtitle}</h2>

    //         <div className="grid gap-4 w-full max-w-4xl sm:grid-cols-2 md:grid-cols-3">
    //             {goals.desc.map((goal, index) => {
    //                 // تحقق إذا العنصر هو كائن وله title
    //                 const isObject = typeof goal === "object" && goal !== null && "title" in goal;

    //                 return (
    //                     <div
    //                         key={isObject ? goal.id : index}
    //                         className="bg-white shadow-md rounded-2xl p-4 text-center border-l-4 border-mainColor"
    //                     >
    //                         <div className="text-2xl mb-2">🎯</div>
    //                         {isObject ? (
    //                             <>
    //                                 <h3 className="font-semibold mb-1">{goal.title}</h3>
    //                                 <p className="text-gray-700">{goal.description}</p>
    //                             </>
    //                         ) : (
    //                             <p className="text-gray-700">{goal}</p>
    //                         )}
    //                     </div>
    //                 );
    //             })}
    //         </div>
    //     </div>
    // );
}
