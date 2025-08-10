import axios from 'axios';
import { BookOpen, Microscope } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next';
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
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function HomeFaculties() {
    // const faculties = [
    //     { name: "الطب والجراحة", icon: <FaHeartbeat /> },
    //     { name: "طب وجراحة الأسنان", icon: <FaTooth /> },
    //     { name: "العلاج الطبيعي", icon: <FaTools /> },
    //     { name: "الطب البيطري", icon: <FaPaw /> },
    //     { name: "الصيدلة", icon: <FaCapsules /> },
    //     { name: "التمريض", icon: <FaUserNurse /> },
    //     { name: "العلوم الصحية", icon: <Microscope /> },
    //     { name: "الحاسوب والذكاء الاصطناعي", icon: <FaBrain /> },
    //     { name: "العلوم الإنسانية والاجتماعية", icon: <FaUsers /> },
    //     { name: "الهندسة", icon: <FaLaptopCode /> },

    // ];
    const { t } = useTranslation();
    const [faculties, setFaculties] = useState([]);

    const { i18n } = useTranslation();


    //fetch data from api
    useEffect(() => {
        const fetchData = async () => {
            try {
                const option = {
                    method: "GET",
                    url: `http://localhost:1337/api/navbar-lists1?locale=${i18n.language}`
                }
                const res = await axios.request(option);
                const navbarList = res.data.data[0]?.navbarlist || [];
                const facultiesItem = navbarList.find(item => item.maincode === 'colleges');
                console.log(facultiesItem);
                const iconMap = {
                    "med": <FaHeartbeat />,
                    "dent": <FaTooth />,
                    "phy": <FaTools />,
                    "vet": <FaPaw />,
                    "phar": <FaCapsules />,
                    "nur": <FaUserNurse />,
                    "hci": <Microscope />,
                    "ai": <FaBrain />,
                    "hc": <FaUsers />,
                    "eng": <FaLaptopCode />,
                }

                const finalList = facultiesItem?.submenu.map(item => ({
                    name: item.title,
                    path: item.path,
                    icon: iconMap[item.code] || <FaChartLine />
                }));

                setFaculties(finalList || []);

            }
            catch (error) {
                console.log(error);

            }
        }


        fetchData();
    }, [i18n.language])
    return (
        <section

            className="  transition-colors duration-300 my-home-section-margin p-home-section-padding"

            data-aos="zoom-in-up"
        >
            <div className="max-w-7xl mx-auto flex justify-center items-center flex-col gap-home-section-gap">

                <div className={`flex items-center  gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit`}>
                    <BookOpen className="w-6 h-6" />
                    <span className="text-sm  tracking-widest uppercase">
                        {t('tfaculty')}
                    </span>
                </div>


                <div className={`text-center `}>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        <Trans
                            i18nKey="faculty"
                            components={{ highlight: <span className="text-mainColor" /> }}
                        />
                    </h2>
                </div>


                <div className="w-full mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {faculties.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className="flex items-center justify-start gap-3 bg-gray-50 rounded-lg px-4 py-3 shadow-sm hover:shadow-md hover:cursor-pointer transition"
                            >
                                <div className="text-mainColor text-xl">{item.icon}</div>
                                <span className="text-lg  font-semibold text-gray-600">{item.name}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    )
}
