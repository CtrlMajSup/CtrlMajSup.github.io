import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Heart, Zap, Cloud, Moon, Users } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ServiceCard from '../components/services/ServiceCard';
import TestimonialSlider from '../components/testimonials/TestimonialSlider';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-950 dark:to-secondary-950 -z-10" />
        <div className="absolute inset-0 opacity-30 dark:opacity-10 -z-10">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern 
                id="grid" 
                width="8" 
                height="8" 
                patternUnits="userSpaceOnUse"
              >
                <path 
                  d="M 8 0 L 0 0 0 8" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeOpacity="0.2" 
                  className="text-primary-500"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 md:pr-12">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Reconnect With Your
                <span className="text-primary-600 dark:text-primary-400 block mt-2">Inner Balance</span>
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover the healing power of energy work to restore harmony to your mind, body, and spirit. Personalized sessions designed to release blockages and revitalize your natural energy flow.
              </motion.p>
              
              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button 
                  as={Link} 
                  to="/booking" 
                  variant="primary" 
                  size="lg"
                  icon={<Play size={16} />}
                >
                  Start Your Journey
                </Button>
                <Button 
                  as={Link} 
                  to="/services" 
                  variant="outline" 
                  size="lg"
                >
                  Explore Services
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-12 md:mt-0 md:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Energy healing session" 
                  className="rounded-lg shadow-xl z-10 relative"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary-100 dark:bg-secondary-900 rounded-full -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-100 dark:bg-primary-900 rounded-full -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Healing Services" 
            subtitle="Discover our range of energy healing modalities designed to address your unique needs and restore balance to your life."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Heart className="h-8 w-8 text-primary-500" />}
              title="Reiki Healing"
              description="A gentle hands-on energy healing technique that promotes relaxation and reduces stress, anxiety, and physical pain."
              delay={0.1}
              link="/services#reiki"
            />
            <ServiceCard 
              icon={<Zap className="h-8 w-8 text-primary-500" />}
              title="Chakra Balancing"
              description="Clear blockages and restore the flow of energy through your seven main chakras to improve overall wellbeing."
              delay={0.3}
              link="/services#chakra"
            />
            <ServiceCard 
              icon={<Cloud className="h-8 w-8 text-primary-500" />}
              title="Guided Meditation"
              description="Personalized meditation sessions to calm the mind, reduce anxiety, and connect with your inner wisdom."
              delay={0.5}
              link="/services#meditation"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button as={Link} to="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </Section>
      
      {/* About Preview Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Energy practitioner" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary-500 rounded-lg -z-10" />
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Meet Your Practitioner
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                With over 15 years of experience in energy healing modalities, I'm dedicated to helping you achieve balance and harmony in all aspects of your life.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                My approach combines traditional healing wisdom with modern techniques to create personalized sessions that address your unique needs.
              </p>
              
              <div className="mt-6">
                <Button as={Link} to="/about" variant="primary">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* Benefits Section */}
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Benefits of Energy Healing" 
            subtitle="Experience profound improvements in your wellbeing through our holistic energy healing practices."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Moon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Reduced Stress & Anxiety</h3>
              <p className="text-gray-600 dark:text-gray-400">Experience deep relaxation and a profound sense of calm that helps manage stress and anxiety.</p>
            </Card>
            
            <Card className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Emotional Healing</h3>
              <p className="text-gray-600 dark:text-gray-400">Release emotional blockages and heal past trauma to achieve greater emotional balance.</p>
            </Card>
            
            <Card className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Increased Energy</h3>
              <p className="text-gray-600 dark:text-gray-400">Revitalize your natural energy flow, reducing fatigue and enhancing overall vitality.</p>
            </Card>
            
            <Card className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Improved Relationships</h3>
              <p className="text-gray-600 dark:text-gray-400">Develop greater compassion and understanding, leading to healthier relationships.</p>
            </Card>
            
            <Card className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Cloud className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Mental Clarity</h3>
              <p className="text-gray-600 dark:text-gray-400">Clear mental fog and enhance focus, supporting better decision-making and creativity.</p>
            </Card>
            
            <Card className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Moon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Better Sleep</h3>
              <p className="text-gray-600 dark:text-gray-400">Improve sleep quality and patterns, allowing for deeper rest and rejuvenation.</p>
            </Card>
          </div>
        </div>
      </Section>
      
      {/* Testimonials Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Client Experiences" 
            subtitle="Hear from those who have experienced the transformative effects of our energy healing sessions."
          />
          
          <TestimonialSlider />
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Begin Your Healing Journey Today
              </h2>
              <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
                Take the first step toward balance, harmony, and renewed energy. Schedule your personalized session now.
              </p>
              <Button 
                as={Link} 
                to="/booking" 
                variant="outline" 
                size="lg"
                className="bg-white text-primary-600 border-white hover:bg-primary-50"
              >
                Book Your Session
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;