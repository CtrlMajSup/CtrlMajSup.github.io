import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

enum BookingStep {
  SelectService,
  SelectDateTime,
  CustomerInfo,
  Confirmation
}

interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
}

const services: Service[] = [
  {
    id: 'reiki',
    name: 'Reiki Healing',
    description: 'A gentle hands-on energy healing technique that promotes relaxation and reduces stress.',
    duration: '60 min',
    price: '$95',
  },
  {
    id: 'chakra',
    name: 'Chakra Balancing',
    description: 'Restore harmony to your energy centers to improve physical, emotional, and spiritual wellbeing.',
    duration: '75 min',
    price: '$120',
  },
  {
    id: 'meditation',
    name: 'Guided Meditation',
    description: 'Personalized meditation sessions to calm the mind and connect with your inner wisdom.',
    duration: '45 min',
    price: '$75',
  },
  {
    id: 'crystal',
    name: 'Crystal Healing',
    description: 'Harness the natural energetic properties of crystals to restore balance and promote healing.',
    duration: '60 min',
    price: '$95',
  },
  {
    id: 'sound',
    name: 'Sound Therapy',
    description: 'Use resonant sounds and vibrations to release energetic blockages and promote deep relaxation.',
    duration: '60 min',
    price: '$95',
  },
];

// Generate dates for the next 14 days
const generateDates = () => {
  const dates = [];
  const today = new Date();
  
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }
  
  return dates;
};

// Generate time slots
const generateTimeSlots = () => {
  const timeSlots = [];
  const startHour = 9; // 9 AM
  const endHour = 17; // 5 PM
  
  for (let hour = startHour; hour <= endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      if (hour === endHour && minute > 0) continue;
      
      const hourFormatted = hour % 12 === 0 ? 12 : hour % 12;
      const period = hour < 12 ? 'AM' : 'PM';
      const minuteFormatted = minute === 0 ? '00' : minute;
      
      timeSlots.push(`${hourFormatted}:${minuteFormatted} ${period}`);
    }
  }
  
  return timeSlots;
};

const dates = generateDates();
const timeSlots = generateTimeSlots();

const Booking: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>(BookingStep.SelectService);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNextStep();
    // In a real application, you would send this data to your backend/API
    console.log({
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      customer: formData,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case BookingStep.SelectService:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <Card 
                    className={`cursor-pointer h-full transition-all duration-300 ${
                      selectedService?.id === service.id 
                        ? 'border-2 border-primary-500' 
                        : 'hover:border hover:border-primary-300'
                    }`}
                    hoverEffect={false}
                    onClick={() => handleServiceSelect(service)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {service.description}
                        </p>
                      </div>
                      {selectedService?.id === service.id && (
                        <CheckCircle className="text-primary-600 dark:text-primary-400 h-6 w-6 flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{service.duration}</span>
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">{service.price}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <Button 
                onClick={handleNextStep} 
                variant="primary"
                disabled={!selectedService}
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                Select Date & Time
              </Button>
            </div>
          </div>
        );
        
      case BookingStep.SelectDateTime:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                  Select Date
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {dates.map((date, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      <button
                        className={`p-3 rounded-lg text-center w-full transition-all duration-200 ${
                          selectedDate && date.toDateString() === selectedDate.toDateString()
                            ? 'bg-primary-600 text-white'
                            : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                        }`}
                        onClick={() => handleDateSelect(date)}
                      >
                        <div className="text-xs font-medium">
                          {date.toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                        <div className="text-lg font-bold">
                          {date.getDate()}
                        </div>
                        <div className="text-xs">
                          {date.toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                  Select Time
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((time, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      <button
                        className={`p-3 rounded-lg text-center w-full transition-all duration-200 ${
                          selectedTime === time
                            ? 'bg-primary-600 text-white'
                            : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                        }`}
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <Button onClick={handlePrevStep} variant="outline">
                Back
              </Button>
              <Button 
                onClick={handleNextStep} 
                variant="primary"
                disabled={!selectedDate || !selectedTime}
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                Continue
              </Button>
            </div>
          </div>
        );
        
      case BookingStep.CustomerInfo:
        return (
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Your Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Special Requests or Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Appointment Summary
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Service:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{selectedService?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Date:</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {selectedDate ? formatDate(selectedDate) : ''}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Time:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{selectedService?.duration}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-gray-900 dark:text-white font-bold">Total:</span>
                    <span className="font-bold text-gray-900 dark:text-white">{selectedService?.price}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <Button type="button" onClick={handlePrevStep} variant="outline">
                  Back
                </Button>
                <Button 
                  type="submit" 
                  variant="primary"
                  disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                >
                  Confirm Booking
                </Button>
              </div>
            </form>
          </div>
        );
        
      case BookingStep.Confirmation:
        return (
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-6"
            >
              <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-primary-600 dark:text-primary-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Booking Confirmed!
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Thank you for booking your session with us. We've sent a confirmation email to <span className="font-medium">{formData.email}</span> with all the details.
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-left mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Appointment Details
                </h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Service:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{selectedService?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Date:</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {selectedDate ? formatDate(selectedDate) : ''}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Time:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{selectedService?.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2"><strong>Need to make changes?</strong></p>
                <p>Please contact us at least 24 hours before your appointment if you need to reschedule or cancel.</p>
              </div>
            </motion.div>
            
            <Button as="a" href="/" variant="primary">
              Return to Home
            </Button>
          </div>
        );
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-950 dark:to-secondary-950 -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Book Your Session
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Take the first step on your healing journey by scheduling a personalized session.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Booking Steps */}
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {['Select Service', 'Date & Time', 'Your Details', 'Confirmation'].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index <= currentStep ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {index < currentStep ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </div>
                    <span className={`text-xs mt-2 hidden sm:block ${
                      index <= currentStep ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {step}
                    </span>
                  </div>
                  
                  {index < 3 && (
                    <div 
                      className={`flex-1 h-1 ${
                        index < currentStep ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {renderStepContent()}
        </div>
      </Section>
    </>
  );
};

export default Booking;