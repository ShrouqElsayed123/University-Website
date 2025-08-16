// Gallery.jsx
import React from "react";
import bg from '../../../assets/images/medicine.jpg'
import bg2 from '../../../assets/images/slider-image-3.jfif'
import bg3 from '../../../assets/images/faculty.jpg'
import { Trans, useTranslation } from "react-i18next";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
const images = [bg, bg2, bg3, bg, bg3];



export default function FacultyGallery() {

    const { t } = useTranslation();

    return (
        <section className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center flex items-center flex-col gap-3">
                <div className="flex items-center gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
                    <HiOutlineBuildingLibrary className="w-6 h-6" />
                    <span className="text-sm  tracking-widest uppercase">
                        {t('tgallery')}
                    </span>
                </div>
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        <Trans
                            i18nKey="fgallery"
                            components={{ highlight: <span className="text-mainColor" /> }}
                        />
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={index === 0 ? "row-span-2 " : ""}
                    >
                        <img
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </section>

    );
}
