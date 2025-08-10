import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/images/slider-image-1.jfif";
import img2 from "../../../assets/images/slider-image-2.jfif";
import img3 from "../../../assets/images/slider-image-3.jfif";
import img4 from "../../../assets/images/slider-image-1.jfif";
import img5 from "../../../assets/images/slider-image-2.jfif";
import { Trans, useTranslation } from "react-i18next";
import { BookOpen, MoveUpRight, ArrowRight, MoveUpLeft } from "lucide-react";
// import img6 from "../../assets/images/slider-image-3.jfif";
import { NavLink } from 'react-router-dom';


// ⬅️ alias لمكون الصورة
const MotionImg = motion.img;

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  // ✅ Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPositionIndexes((prevIndexes) =>
        prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
      );
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // تنظيف الـ interval
  }, []);

  const images = [img1, img2, img3, img4, img5];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (

    <section className=" bg-gray-50 dark:bg-gray-900 transition-colors duration-300 my-home-section-margin p-home-section-padding h-[80vh] "
      data-aos="zoom-in">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-row gap-home-section-gap">
        {/* Header */}
        <div className="">
          <div className="flex items-center gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
            <BookOpen className="w-6 h-6" />
            <span className="text-sm  tracking-widest uppercase">
              {t('tgallery')}
            </span>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <Trans
                i18nKey="gallery"
                components={{ highlight: <span className="text-mainColor" /> }}
              />
            </h2>
          </div>
        </div>
        <div>
          <NavLink className='group text-secondaryColorLight1 flex items-center gap-1 border-b border-secondaryColorLight1 w-fit'>
            <span>{t('view')}</span>
            {
              i18n.language == 'ar'
                ? <MoveUpLeft
                  size={20}
                  className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                />
                : <MoveUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
            }
          </NavLink>

        </div>
      </div>
      <div className="flex items-center flex-col mt-6 justify-center h-3/4 relative overflow-hidden">
        {images.map((image, index) => (
          <MotionImg
            key={index}
            src={image}
            alt={`image-${index}`}
            className="rounded-[12px]"
            initial="center"
            animate={positions[positionIndexes[index % 5]]}
            variants={imageVariants}
            transition={{ duration: 0.6 }}
            style={{ width: "40%", position: "absolute" }}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
