import { useTranslation } from 'react-i18next';
import img1 from '../../../assets/images/slider-image-1.jfif';
import img2 from '../../../assets/images/slider-image-2.jfif';
import img3 from '../../../assets/images/slider-image-3.jfif';
import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, School } from "lucide-react";
import { NavLink } from 'react-router-dom';
import StatsSection from '../../HomeComponent/StatsSection/StatsSection';

// eslint-disable-next-line no-unused-vars
export default function AboutSection() {
    const { t } = useTranslation();


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
                            Menoufia Community University is located on an area of 18 acres, and its construction and equipment cost about 3
                            He pointed out that the university includes a main building with
                            Main offices, banquet and conference rooms, a theater, a university council hall, and all the halls
                            equipped with the latest technical and audio technologies, in addition to a number of facilities equipped with state-of-the-art equipment.
                            They include (Medical Sciences Building, Engineering Sciences Building, Humanities Building, Laboratories Building), as well as
                            A recreational area and cafeteria.
                        </p>
                        <p className="text-lg text-gray-400">
                            The university includes (10) faculties (Medicine and Surgery - Dentistry - Physiotherapy - Pharmacy - Health Sciences Technology - Nursing - Engineering - Computer and Artificial Intelligence - Veterinary Medicine - Humanities and Social Sciences) with a capacity of approximately 9500 students.


                        </p>



                    </div>
                    {/* نهايه عمود المحتوي  */}
                </div>

            </div>
        </section>

    )
}
