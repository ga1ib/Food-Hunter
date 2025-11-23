import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import agriculturalField from '../assets/agricultural-field-ai-generated.jpg';
import healthyFood from '../assets/agriculture-healthy-food.jpg';
import farmerOnions from '../assets/farmer-harvesting-onions-field.jpg';
import farmerTomato from '../assets/farmer-picking-fresh-ripe-tomato-vegetables-putting-into-wooden-crate.jpg';
import handsPlants from '../assets/hands-cupping-small-plants-soil.jpg';
import farmerRice from '../assets/male-farmer-who-is-using-shovel-dig-soil-his-rice-fields.jpg';
import vegetables from '../assets/so-many-vegetables-this-field.jpg';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { src: agriculturalField, title: 'Agricultural Fields', description: 'Vast organic farmlands' },
    { src: healthyFood, title: 'Healthy Produce', description: 'Fresh organic vegetables' },
    { src: farmerOnions, title: 'Harvesting Onions', description: 'Farmers at work' },
    { src: farmerTomato, title: 'Fresh Tomatoes', description: 'Ripe and ready' },
    { src: handsPlants, title: 'Nurturing Growth', description: 'Care from seed to harvest' },
    { src: farmerRice, title: 'Rice Fields', description: 'Traditional farming methods' },
    { src: vegetables, title: 'Vegetable Garden', description: 'Abundant harvest' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="products" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Farm Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Explore our beautiful farms and the fresh produce we cultivate with care
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedImage(image)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all aspect-square bg-gray-100"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 tracking-tight">{image.title}</h3>
                  <p className="text-sm lg:text-base text-gray-200 font-light">{image.description}</p>
                </div>
              </div>

              {/* Zoom Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8 rounded-b-2xl">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-base md:text-xl text-gray-200 font-light">{selectedImage.description}</p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

