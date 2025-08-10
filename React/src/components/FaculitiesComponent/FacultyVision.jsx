
import { Eye, Flag } from "lucide-react";


const iconMap = {
    Eye: <Eye className="w-12 h-12 text-mainColor" />,
    Flag: <Flag className="w-12 h-12 text-mainColor" />,
};

export default function FacultyVision({ vision, mission }) {







    // نجهز بيانات الخطوات (الرؤية والرسالة) مع الأيقونات والنصوص
    const steps = [
        {
            id: 1,
            title: vision.title,
            text: vision.text,
            icon: iconMap[vision.icon] || null,
        },
        {
            id: 2,
            title: mission.title,
            text: mission.text,
            icon: iconMap[mission.icon] || null,
        },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 py-10 px-4">
            {steps.map(({ id, title, text, icon }) => (
                <div
                    key={id}
                    className="relative bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-full md:w-80 flex flex-col items-center text-center px-6 py-10 transition-transform hover:scale-105"
                >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-mainColor text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-md">
                        {title}
                    </div>

                    <div className="flex flex-col items-center justify-start space-y-4 flex-grow">
                        {icon}
                        <p className="text-gray-500 text-sm w-full">{text}</p>
                    </div>

                    <div className="absolute top-1/2 left-0 -translate-y-1/2 h-10 w-2 bg-mainColor rounded-r-md hidden md:block"></div>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 h-10 w-2 bg-mainColor rounded-l-md hidden md:block"></div>
                </div>
            ))}
        </div>
    );
}
