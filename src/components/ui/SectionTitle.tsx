import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: '100%' },
  };

  const alignment = centered ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <motion.h2
        className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={titleVariants}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={subtitleVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        className={`h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mt-3 ${centered ? 'mx-auto' : ''}`}
        style={{ width: centered ? '80px' : '60px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={underlineVariants}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
    </div>
  );
};

export default SectionTitle;