import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
// import img1 from '../../assets/images/slider-image-3.jfif'
import { FaBookOpen, FaUserGraduate, FaChalkboardTeacher, FaTrophy } from 'react-icons/fa';
import { Trans, useTranslation } from 'react-i18next';
import { BookOpen } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
export default function StatsSection({ size1 = 40, textsize = "text-4xl", numberSize = "text-3xl", pSize = "py-10", display1 = "block", content }) {
  const icons = {
    "book-open": <FaBookOpen size={size1} />,
    "user-graduate": <FaUserGraduate size={size1} />,
    "building-columns": <i className={`fa-solid fa-building-columns ${textsize}	`}></i>,
    "chalkboard-user": <i className={`fa-solid fa-chalkboard-user ${textsize}`}></i>,
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // يحصل مرة واحدة بس
    threshold: 0.2,     // لما 20% من العنصر يدخل الشاشة
  });
  const { t } = useTranslation();



  return (
    <section
      ref={ref}
      className="  transition-colors duration-300 my-home-section-margin p-home-section-padding"

      data-aos="fade-down"

    >
      <div className="max-w-7xl mx-auto flex justify-center items-center flex-col gap-home-section-gap">

        <div className={`flex items-center ${display1} gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit`}>
          <BookOpen className="w-6 h-6" />
          <span className="text-sm  tracking-widest uppercase">
            {t('stats')}
          </span>
        </div>


        <div className={`text-center ${display1}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <Trans
              i18nKey="statistics"
              components={{ highlight: <span className="text-mainColor" /> }}
            />
          </h2>
        </div>


        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center ">
            {content.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`flex  items-center flex-col gap-3 justify-center bg-white rounded-sm shadow-lg px-2 ${pSize} `}
              >
                <div className="text-mainColor ">
                  {icons[item.icon]}
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className={`${numberSize} font-bold`}>
                    {inView && <CountUp end={item.number} duration={2} />}+
                  </h2>
                  <p className="font-semibold text-gray-500 text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
