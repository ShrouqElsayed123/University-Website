import { useTranslation } from 'react-i18next';
import img1 from '../../../assets/images/slider-image-1.jfif';
import img2 from '../../../assets/images/slider-image-2.jfif';
import img3 from '../../../assets/images/slider-image-3.jfif';
import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, School } from "lucide-react";
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
export default function HomeAbout({ content }) {
    const { t } = useTranslation();
    const { i18n } = useTranslation();


    return (

        <section

            className="  transition-colors duration-300 my-home-section-margin p-home-section-padding"

            data-aos="fade-up"
        >
            <div className="max-w-7xl mx-auto flex justify-center items-center flex-col gap-home-section-gap">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* العمود الأول - الصور */}
                    <div className="space-y-4">
                        {/* الصورة الأولى - صف كامل */}
                        <img
                            src={img1}
                            alt="Main"
                            className="w-full rounded-xl shadow-md"
                        />

                        {/* الصف الثاني - صورتين جنب بعض */}
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src={img2}
                                alt="Sub 1"
                                className="w-full h-full rounded-xl shadow-md"
                            />
                            <img
                                src={img3}
                                alt="Sub 2"
                                className="w-full h-full rounded-xl shadow-md"
                            />
                        </div>
                    </div>
                    {/* نهاية العمود الاول  */}
                    {/* العمود الثاني - النص */}
                    <div className="text-gray-800 dark:text-gray-200 space-y-4">
                        <div className={`flex items-center  gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit`}>
                            <BookOpen className="w-6 h-6" />
                            <span className="text-sm  tracking-widest uppercase">
                                {t('about')}
                            </span>
                        </div>
                        <h1 className='text-2xl font-semibold'>{t('universityname')}</h1>
                        <p className="text-lg text-gray-400">
                            {content.content[0]}

                        </p>
                        <p className="text-lg text-gray-400">
                            {content.content[1]}

                        </p>
                        {/* <StatsSection size1={35} textsize='text-3xl' numberSize="text-2xl" pSize='py-5' display1='hidden' /> */}
                        <div className="flex w-full  gap-3 justify-center flex-col md:flex-row items-center ">
                            <div className="border border-mainColor rounded-md p-6 flex items-center gap-4 w-full " >
                                <GraduationCap className="w-10 h-10 text-mainColor" />
                                <div className="text-mainColor">
                                    <h3 className="text-lg font-semibold">{content.mission.title}</h3>
                                    <p className="text-base">{content.mission.content}</p>
                                </div>
                            </div>
                            <div className="border border-mainColor rounded-md p-6 flex items-center gap-4 w-full " >
                                <School className="w-10 h-10 text-mainColor" />
                                <div className="text-mainColor">
                                    <h3 className="text-lg font-semibold">{content.vision.title}</h3>
                                    <p className="text-base">{content.vision.content}</p>
                                </div>
                            </div>


                        </div>

                        <NavLink
                            to="/about"
                            className="bg-mainColor w-fit hover:bg-secondaryColor text-white btn-filled2 flex items-center gap-2 group px-4 py-2 rounded"
                        >
                            {t('more')}
                            {
                                i18n.language === "ar" ?
                                    <ArrowLeft className="w-4 h-4 transform transition-transform duration-200 group-hover:-translate-x-1" /> :
                                    <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                            }
                        </NavLink>
                    </div>
                    {/* نهايه عمود المحتوي  */}
                </div>

            </div>
        </section>

    )
}
