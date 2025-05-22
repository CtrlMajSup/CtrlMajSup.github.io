import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Yoga Instructor',
    content: 'The energy healing sessions have completely transformed my practice. I feel more centered, balanced, and connected to my students. It\'s been a life-changing experience.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Executive',
    content: 'As a skeptic, I was surprised by how effective the chakra balancing sessions were. My stress levels have decreased significantly, and I\'m sleeping better than I have in years.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Healthcare Professional',
    content: 'After dealing with chronic anxiety for years, the combination of reiki and guided meditation has given me tools to manage my symptoms naturally. I\'m so grateful.',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute -top-12 -left-8 text-6xl text-primary-300 dark:text-primary-900 opacity-50">
        <Quote />
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12 relative z-10">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="flex flex-col md:flex-row items-center md:items-start gap-6"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary-100 dark:border-primary-900">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                "{currentTestimonial.content}"
              </p>
              
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {currentTestimonial.name}
                </p>
                <p className="text-primary-600 dark:text-primary-400">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex justify-center mt-6 space-x-3">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} className="text-gray-700 dark:text-gray-300" />
        </button>
        
        <div className="flex items-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                index === currentIndex
                  ? 'bg-primary-600'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} className="text-gray-700 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;