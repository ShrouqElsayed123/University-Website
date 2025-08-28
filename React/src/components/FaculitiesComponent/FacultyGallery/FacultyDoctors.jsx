
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

const team = [
    {
        name: "Samanta Smith",
        role: "Head manager",

        image: "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMGluJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Colin Power",
        role: "Partner",

        image: "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMGluJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Lucy Albea",
        role: "Investor",

        image: "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMGluJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Lucy Albea",
        role: "Investor",

        image: "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMGluJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
];
export default function FacultyDoctors() {
    const { t } = useTranslation();

    return (
        <section className="px-6 py-12 max-w-7xl mx-auto">
            <div className="text-center flex items-center flex-col gap-3">
                <div className="flex items-center gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
                    <HiOutlineBuildingLibrary className="w-6 h-6" />
                    <span className="text-sm  tracking-widest uppercase">
                        {t('tdoctors')}
                    </span>
                </div>
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        <Trans
                            i18nKey="doctors"
                            components={{ highlight: <span className="text-mainColor" /> }}
                        />
                    </h2>
                </div>
            </div>
            {/* الشبكة */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {team.map((member, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center text-center shadow-lg rounded-2xl py-2 hover:shadow-xl transition 
                            ${index % 2 === 0 ? "translate-y-3" : "-translate-y-3"}`}
                    >
                        <div className="relative mb-4 z-20 border rounded-full border-t-secondaryColor border-l-secondaryColor border-mainColor">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-40 h-40 object-cover rounded-full  z-20 p-2"
                            />
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900">
                            {member.name}
                        </h3>
                        <p className="text-mainColor font-medium">{member.role}</p>
                    </div>
                ))}
            </div>

        </section>
    );

}







