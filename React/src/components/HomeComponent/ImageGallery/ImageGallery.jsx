
import { useState } from "react"
import { X } from "lucide-react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"
import img1 from '../../../assets/images/slider-image-1.jfif';
import img2 from '../../../assets/images/slider-image-2.jfif';
import img3 from '../../../assets/images/slider-image-3.jfif';
import img4 from '../../../assets/images/slider-image-1.jfif';
import img5 from '../../../assets/images/slider-image-2.jfif';
// import img6 from '../../../assets/images/slider-image-3.jfif';
const galleryImages = [
  {
    id: 1,
    src: img1,
    alt: "Students collaborating on a project",
    className: "row-span-2",
  },
  {
    id: 2,
    src: img2,
    alt: "Team meeting discussion",
    className: "row-span-1",
  },
  {
    id: 3,
    src: img3,
    alt: "Student studying outdoors",
    className: "row-span-2",
  },
  {
    id: 4,
    src: img4,
    alt: "Group study session",
    className: "row-span-2",
  },
  {
    id: 5,
    src: img5,
    alt: "Students walking together",
    className: "row-span-1",
  },
  {
    id: 6,
    src: img5,
    alt: "Campus life",
    className: "row-span-2",
  },
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-8 h-0.5 bg-mainColor"></div>
            <span className="text-mainColor font-semibold tracking-wider uppercase text-sm">Gallery</span>
            <div className="w-8 h-0.5 bg-mainColor"></div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our <span className="text-mainColor">Photo Gallery</span>
          </motion.h1>

          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            It is a long established fact that a reader will be distracted by the readable content of a page...
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${image.className}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>

              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                whileHover={{ scale: 1.05 }}
              />

              <motion.div
                className="absolute inset-0 bg-mainColor/20 opacity-0 group-hover:opacity-100 transition-all duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-20">
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal/Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-mainColor transition-colors duration-200 z-10"
              >
                <X size={32} />
              </button>

              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
                layoutId={`image-${selectedImage.id}`}
              />

              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.alt}</h3>
                <p className="text-gray-300 text-sm">Click outside or press the X button to close</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}













































// import React from 'react';

// // استيراد الصور
// import img1 from '../../assets/images/slider-image-1.jfif';
// import img2 from '../../assets/images/slider-image-2.jfif';
// import img3 from '../../assets/images/slider-image-3.jfif';
// import img4 from '../../assets/images/slider-image-1.jfif';
// import img5 from '../../assets/images/slider-image-2.jfif';
// import img6 from '../../assets/images/slider-image-3.jfif';
// import img7 from '../../assets/images/slider-image-1.jfif';
// import img8 from '../../assets/images/slider-image-2.jfif';
// import img10 from '../../assets/images/slider-image-3.jfif';
// import img11 from '../../assets/images/slider-image-1.jfif';
// import img12 from '../../assets/images/slider-image-2.jfif';

// const images = [img1, img2, img3, img4, img5, img6, img7, img8, img10, img11, img12];

// export default function ImageGallery() {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//       {images.map((img, id) => (
//         <div key={id} className="w-full h-full">
//           <img
//             src={img}
//             alt={`gallery-image-${id}`}
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }
