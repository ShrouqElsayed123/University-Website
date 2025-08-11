import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import coverImg from "../../assets/images/slider-image-3.jfif";
import { Play } from "lucide-react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Trans } from "react-i18next";

const testimonials = [
    {
        id: 1,
        name: "Emily Peterson",
        role: "CEO",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        quote:
            "It’s a super product with professional support team. I can’t wait to see the future features.",
    },
    {
        id: 2,
        name: "Adrien Jacob",
        role: "Head of Sales",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        quote:
            "We’ve been looking for a great product since the creation of our business.",
    },
    {
        id: 3,
        name: "Veronika Valenta",
        role: "Designer",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        quote: "One of the best for exporting results. Clean, fast and free.",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval);
    }, []);

    const handlers = useSwipeable({
        onSwipedLeft: next,
        onSwipedRight: prev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <section className="bg-gray-50 py-16 px-4">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-12">
                <Trans
                    i18nKey="feedback"
                    components={{ highlight: <span className="text-mainColor" /> }}
                />
            </h2>

            <div
                className="max-w-3xl mx-auto flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg"
                {...handlers}
            >
                {/* 🎥 الفيديو */}
                <div className="md:w-1/3 relative group">
                    {isPlaying ? (
                        <iframe
                            src="https://www.youtube.com/embed/U0_thfqT0Fg?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className="w-full h-full aspect-video"
                        />
                    ) : (
                        <div
                            className="relative overflow-hidden h-full"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img
                                src={coverImg}
                                alt="Video cover"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 transition-opacity" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className={`group relative w-20 h-20 bg-mainColor rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform ${isHovered ? "scale-110" : "scale-100"
                                        }`}
                                >
                                    <div className="absolute inset-0 rounded-full bg-mainColor animate-ping opacity-20"></div>
                                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/*  التستيمونيال */}
                <div className="md:w-2/3 p-10 flex flex-col justify-between relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col justify-between h-full"
                        >
                            <FaQuoteLeft className="text-3xl text-secondaryColor mb-4" />
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {testimonials[index].quote}
                            </p>



                            <div className="flex items-center mt-4">
                                <img
                                    src={testimonials[index].avatar}
                                    alt={testimonials[index].name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">
                                        {testimonials[index].name}
                                    </p>
                                    <p className="text-sm text-secondaryColor">{testimonials[index].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* ⇽ ⇾ الأزرار الجانبية */}
                    <button
                        onClick={prev}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition"
                    >
                        &lsaquo;
                    </button>

                    <button
                        onClick={next}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition"
                    >
                        &rsaquo;
                    </button>

                    {/* Pagination Dots */}
                    <div className="mt-6 flex justify-start space-x-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`h-2 w-2 rounded-full transition-all ${i === index ? "bg-secondaryColor" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
}
