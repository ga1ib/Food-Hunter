import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import organicIcon from '../assets/icons/organic.svg';
import freshIcon from '../assets/icons/fresh.svg';
import sustainableIcon from '../assets/icons/sustainable.svg';
import qualityIcon from '../assets/icons/quality.svg';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: organicIcon,
      title: '100% Organic',
      description: 'All our products are certified organic, grown without harmful pesticides or chemicals.',
      color: 'green',
    },
    {
      icon: freshIcon,
      title: 'Farm Fresh',
      description: 'Harvested daily and delivered within 24 hours to ensure maximum freshness and nutrition.',
      color: 'blue',
    },
    {
      icon: sustainableIcon,
      title: 'Sustainable',
      description: 'Eco-friendly farming practices that protect our planet for future generations.',
      color: 'yellow',
    },
    {
      icon: qualityIcon,
      title: 'Premium Quality',
      description: 'Rigorous quality control ensures only the finest produce reaches your table.',
      color: 'pink',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            We're committed to delivering the highest quality organic produce with sustainable practices
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <img src={feature.icon} alt={feature.title} className="w-16 h-16" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed font-light">
                {feature.description}
              </p>

              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                className={`h-1 bg-${feature.color}-500 rounded-full mt-6`}
                style={{
                  backgroundColor: 
                    feature.color === 'green' ? '#22c55e' :
                    feature.color === 'blue' ? '#3b82f6' :
                    feature.color === 'yellow' ? '#f59e0b' :
                    '#ec4899'
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Ready to Experience Fresh?
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90 font-light">
              Join thousands of satisfied customers enjoying farm-fresh organic produce
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Start Shopping Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

