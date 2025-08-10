// Slider.jsx
import React from 'react';
import Slider from 'react-slick';
import { FaBullseye, FaPenNib, FaShareAlt, FaSearch } from 'react-icons/fa';

const items = [
    { icon: "✱", label: 'Data Sciences' },
    { icon: "✱", label: 'Machine Intelligence' },
    { icon: "✱", label: 'Internet of Things and Big Data Analytics ' },
    { icon: "✱", label: 'Medical Laboratory Technology ' },
    { icon: "✱", label: ' Radiology and Medical Imaging Technology' },
    { icon: "✱", label: 'Smart Cities Planning and Construction ' },
    { icon: "✱", label: 'Materials Engineering and Manufacturing  ' },
    { icon: "✱", label: 'Computer Engineering ' },
    // تقدر تضيفي أكتر هنا عادي
];
export default function UniversityProgram() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000, // سرعة السلايدر
        slidesToShow: 3, // كام عنصر يبان في الشاشة
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // نخليه 0 عشان يبقي continuous
        cssEase: 'linear', // حركة ناعمة مستمرة
        arrows: false, // بدون اسهم
        pauseOnHover: false,
    };

    return (
        <div className="bg-mainColor py-3" >
            <Slider {...settings} className="flex items-center">
                {items.map((item, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <div className="flex items-center gap-2 text-white text-xl font-medium px-4">
                            <span className="text-secondaryColorDark1 text-2xl">{item.icon}</span>
                            <span>{item.label}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
