import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next';
import { FaBook, FaCogs, FaFlask, FaMicroscope } from 'react-icons/fa';

export default function Building() {
    const [content, setContent] = useState([]);
    const { i18n } = useTranslation();
    const iconMap = {
        "medical": <FaMicroscope className="text-white text-xl" />,
        "engineering": <FaCogs className="text-white text-xl" />,
        "humanities": <FaBook className="text-white text-xl" />,
        "laboratories": <FaFlask className="text-white text-xl" />
    }
    const colorMap = {
        "medical": "bg-blue-200",
        "engineering": "bg-yellow-200",
        "humanities": "bg-green-200",
        "laboratories": "bg-purple-200",
    }


    // const facilities = [
    //     {
    //         icon: <FaFlask className="text-white text-xl" />,
    //         title: "مبنى المعامل",
    //         desc: "معامل علمية متخصصة ومتطورة",
    //         bgColor: "bg-purple-200",
    //     },
    //     {
    //         icon: <FaBook className="text-white text-xl" />,
    //         title: "مبنى العلوم الإنسانية",
    //         desc: "قاعات دراسية مجهزة لأحدث التقنيات",
    //         bgColor: "bg-green-200",
    //     },
    //     {
    //         icon: <FaCogs className="text-white text-xl" />,
    //         title: "مبنى العلوم الهندسية",
    //         desc: "معامل متقدمة للهندسة والتكنولوجيا",
    //         bgColor: "bg-yellow-200",
    //     },
    //     {
    //         icon: <FaMicroscope className="text-white text-xl" />,
    //         title: "مبنى العلوم الطبية",
    //         desc: "معمل لأحدث التجهيزات الطبية والمعدات المتطورة",
    //         bgColor: "bg-blue-200",
    //     },
    // ];
    useEffect(() => {
        const fetchData = async () => {
            const option = {
                method: "GET",
                url: `http://localhost:1337/api/about-universities?locale=${i18n.language}`
            }
            const res = await axios.request(option)
            const data = res.data.data[0]?.Buildings?.facilities || [];
            setContent(data)

        }
        fetchData();
    }, [i18n.language])
    return (
        <>
            <section className="py-12 bg-gray-50 text-center">
                <div className={`text-center `}>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        <Trans
                            i18nKey="building"
                            components={{ highlight: <span className="text-mainColor" /> }}
                        />
                    </h2>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center transition hover:shadow-xl duration-300"
                        >
                            <div
                                className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${colorMap[item.code]}`}
                            >
                                {iconMap[item.code]}
                            </div>
                            <h3 className="font-semibold text-gray-700 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}
