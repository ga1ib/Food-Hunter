import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      title: 'Fresh Vegetables',
      description: 'Seasonal organic vegetables harvested at peak ripeness for maximum flavor and nutrition.',
      price: 'From $15/box',
      features: ['Seasonal variety', 'Pesticide-free', 'Weekly delivery'],
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      title: 'Organic Fruits',
      description: 'Sweet, juicy fruits grown naturally without synthetic chemicals or GMOs.',
      price: 'From $20/box',
      features: ['Tree-ripened', 'Non-GMO', 'Premium quality'],
      gradient: 'from-orange-400 to-red-500',
    },
    {
      title: 'Herb Garden',
      description: 'Fresh culinary herbs and medicinal plants grown with traditional methods.',
      price: 'From $10/bundle',
      features: ['Aromatic & fresh', 'Organic certified', 'Custom bundles'],
      gradient: 'from-lime-400 to-green-500',
    },
    {
      title: 'Farm Subscription',
      description: 'Monthly subscription box with a curated selection of seasonal produce.',
      price: 'From $50/month',
      features: ['Flexible plans', 'Free delivery', 'Cancel anytime'],
      gradient: 'from-purple-400 to-pink-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Products & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Choose from our wide selection of organic produce and flexible delivery options
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-br ${service.gradient} p-8 text-white`}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-12 h-12 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight">{service.title}</h3>
                <p className="text-3xl font-bold">{service.price}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  Order Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

