import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  padding = 'md',
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300';
  const hoverClasses = hoverEffect ? 'hover:shadow-lg' : '';
  const paddingClass = paddingClasses[padding];
  
  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${paddingClass} ${className}`}
      whileHover={hoverEffect ? { y: -5 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;