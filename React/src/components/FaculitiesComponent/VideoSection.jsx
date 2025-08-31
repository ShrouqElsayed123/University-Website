
import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
export default function VideoSection() {
return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/your-video.mp4" type="video/mp4" />
        متصفحك لا يدعم الفيديو
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        {/* Play Button */}
        <button className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 text-gray-800 hover:scale-105 transition-transform shadow-lg">
          <Play size={28} />
        </button>

        {/* Text */}
        <h2 className="mt-6 text-lg md:text-2xl font-light text-white max-w-2xl">
          Today a reader. Tomorrow a{" "}
          <span className="text-green-400 font-semibold">leader.</span>
        </h2>
      </motion.div>
    </section>
  );
}





