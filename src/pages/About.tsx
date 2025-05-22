import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Clock, Shield, Star } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
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
              About Harmonize
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover our journey, mission, and the healing philosophy behind our energy practice.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2010, Harmonize began as a small practice dedicated to helping people find balance in their increasingly stressful lives. What started as a single practitioner offering reiki sessions has grown into a comprehensive energy healing center.
                </p>
                <p>
                  Our founder, Sarah Johnson, discovered the transformative power of energy healing after experiencing burnout in her corporate career. After training with masters across the globe, she dedicated herself to bringing these ancient healing practices to those seeking holistic wellness.
                </p>
                <p>
                  Today, Harmonize is recognized as a leading center for energy healing, combining traditional wisdom with modern techniques to create personalized healing experiences for our clients.
                </p>
              </div>
              
              <div className="mt-8 flex items-center space-x-6">
                <img 
                  src="https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Sarah Johnson, Founder" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Sarah Johnson</p>
                  <p className="text-primary-600 dark:text-primary-400">Founder & Lead Practitioner</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/7108415/pexels-photo-7108415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Harmonize healing center" 
                className="rounded-lg shadow-lg z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary-100 dark:bg-secondary-900 rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-100 dark:bg-primary-900 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* Our Mission Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Our Mission" 
              subtitle="We are dedicated to helping people achieve balance, harmony, and wellness through the power of energy healing."
            />
            
            <div className="mt-8 p-8 bg-white dark:bg-gray-700 rounded-lg shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary-500" />
              
              <p className="text-xl italic text-gray-600 dark:text-gray-300">
                "Our mission is to empower individuals on their healing journey by providing authentic, transformative energy healing experiences that address the whole person – mind, body, and spirit."
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Compassionate Care</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We approach each client with empathy, understanding, and genuine care for their wellbeing.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We maintain the highest standards of practice and continually expand our knowledge and skills.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Community</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We foster a supportive community where individuals can connect, share, and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Our Team Section */}
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Healing Team" 
            subtitle="Meet our experienced practitioners dedicated to supporting your wellness journey."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Sarah Johnson" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Sarah Johnson</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-3">Founder & Reiki Master</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  With over 15 years of experience in energy healing, Sarah combines traditional reiki techniques with intuitive guidance to create transformative healing experiences.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded">Reiki</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded">Chakra Balancing</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded">Meditation</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Michael Chen" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Michael Chen</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-3">Sound Healer & Crystal Therapist</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Michael specializes in vibrational healing using crystal bowls, tuning forks, and gemstones to create powerful energy shifts and deep relaxation.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded">Sound Therapy</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded">Crystal Healing</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Lisa Rodriguez" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Lisa Rodriguez</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-3">Guided Meditation Specialist</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Lisa combines her background in psychology with meditation techniques to help clients achieve mental clarity and emotional balance.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded">Meditation</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded">Chakra Balancing</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* Why Choose Us Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Why Choose Harmonize" 
            subtitle="We provide a unique, personalized approach to energy healing that sets us apart."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Certified Practitioners</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All our practitioners are certified in their specialties and have years of experience in energy healing modalities.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Personalized Approach</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We tailor each session to your unique needs, ensuring you receive the most effective healing experience.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Safe, Nurturing Space</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our center is designed to create a calming atmosphere where you can fully relax and open to healing.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Holistic Approach</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We address the whole person – physical, emotional, mental, and spiritual – for comprehensive healing.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Community Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Beyond individual sessions, we offer workshops and events to foster connection and community healing.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Client-Centered Care</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your comfort, privacy, and healing journey are our top priorities in everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Begin Your Healing Journey With Us
              </h2>
              <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
                Experience the transformative power of energy healing and restore balance to your life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  as={Link} 
                  to="/booking" 
                  variant="outline" 
                  size="lg"
                  className="bg-white text-primary-600 border-white hover:bg-primary-50"
                >
                  Book a Session
                </Button>
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="ghost" 
                  size="lg"
                  className="text-white border-white hover:bg-primary-700"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;