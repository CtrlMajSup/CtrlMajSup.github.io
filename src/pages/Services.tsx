import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Cloud, Music, Sparkles } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

interface ServiceDetailProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  price: string;
  image: string;
  isReversed?: boolean;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  id,
  icon,
  title,
  description,
  benefits,
  duration,
  price,
  image,
  isReversed = false,
}) => {
  return (
    <Section id={id} className="scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                {icon}
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white">{title}</h2>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Benefits:</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{duration}</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">Price</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{price}</p>
              </div>
            </div>
            
            <Button as={Link} to="/booking" variant="primary">
              Book This Service
            </Button>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={image} 
              alt={title} 
              className="rounded-lg shadow-lg w-full object-cover h-80 sm:h-96"
            />
            <div className={`absolute -${isReversed ? 'left' : 'right'}-4 -bottom-4 w-full h-full border-2 border-primary-500 rounded-lg -z-10`} />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

const Services: React.FC = () => {
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
              Our Healing Services
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover our range of specialized energy healing modalities designed to restore balance and harmony to your life.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Services Overview Cards */}
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Find Your Perfect Healing Experience" 
            subtitle="Explore our comprehensive range of services and discover which healing modality resonates with your needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col h-full">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Reiki Healing</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">A gentle, non-invasive energy healing technique that promotes relaxation and reduces stress.</p>
              <Button as="a" href="#reiki" variant="outline" className="mt-auto">
                Learn More
              </Button>
            </Card>
            
            <Card className="flex flex-col h-full">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-7 w-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Chakra Balancing</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">Restore harmony to your energy centers to improve physical, emotional, and spiritual wellbeing.</p>
              <Button as="a" href="#chakra" variant="outline" className="mt-auto">
                Learn More
              </Button>
            </Card>
            
            <Card className="flex flex-col h-full">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Cloud className="h-7 w-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Guided Meditation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">Personalized meditation sessions to calm the mind and connect with your inner wisdom.</p>
              <Button as="a" href="#meditation" variant="outline" className="mt-auto">
                Learn More
              </Button>
            </Card>
            
            <Card className="flex flex-col h-full">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-7 w-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Crystal Healing</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">Harness the natural energetic properties of crystals to restore balance and promote healing.</p>
              <Button as="a" href="#crystal" variant="outline" className="mt-auto">
                Learn More
              </Button>
            </Card>
            
            <Card className="flex flex-col h-full">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Music className="h-7 w-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Sound Therapy</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">Use resonant sounds and vibrations to release energetic blockages and promote deep relaxation.</p>
              <Button as="a" href="#sound" variant="outline" className="mt-auto">
                Learn More
              </Button>
            </Card>
            
            <Card className="flex flex-col h-full">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-7 w-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Customized Packages</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">Personalized combinations of different healing modalities tailored to your specific needs.</p>
              <Button as={Link} to="/contact" variant="outline" className="mt-auto">
                Contact for Details
              </Button>
            </Card>
          </div>
        </div>
      </Section>
      
      {/* Detailed Service Sections */}
      <ServiceDetail 
        id="reiki"
        icon={<Heart className="h-6 w-6 text-primary-600 dark:text-primary-400" />}
        title="Reiki Healing"
        description="Reiki is a Japanese technique for stress reduction and relaxation that also promotes healing. It's administered by 'laying on hands' and is based on the idea that an unseen 'life force energy' flows through us and is what causes us to be alive."
        benefits={[
          "Promotes deep relaxation and stress reduction",
          "Accelerates the body's self-healing abilities",
          "Assists with better sleep and improved focus",
          "Helps emotional clearing and spiritual growth",
          "Complements medical treatments and therapies"
        ]}
        duration="60 / 90 minutes"
        price="$95 / $140"
        image="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <ServiceDetail 
        id="chakra"
        icon={<Zap className="h-6 w-6 text-primary-600 dark:text-primary-400" />}
        title="Chakra Balancing"
        description="Chakra balancing therapy aims to restore the harmony of your seven main energy centers. When chakras become blocked or imbalanced, it can lead to physical, emotional, and spiritual issues. This therapy uses various techniques to identify and clear blockages."
        benefits={[
          "Restores energy flow throughout the body",
          "Improves emotional stability and mental clarity",
          "Enhances physical health and vitality",
          "Promotes deeper connection to your intuition",
          "Creates greater sense of harmony and balance"
        ]}
        duration="75 minutes"
        price="$120"
        image="https://images.pexels.com/photos/8986155/pexels-photo-8986155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        isReversed={true}
      />
      
      <ServiceDetail 
        id="meditation"
        icon={<Cloud className="h-6 w-6 text-primary-600 dark:text-primary-400" />}
        title="Guided Meditation"
        description="Experience the profound benefits of meditation with personalized guidance designed to address your specific needs. Our guided meditation sessions help you quiet the mind, reduce anxiety, and connect with your inner wisdom."
        benefits={[
          "Reduces stress and anxiety",
          "Improves focus and concentration",
          "Enhances self-awareness and mindfulness",
          "Promotes emotional health and well-being",
          "Helps develop healthier thought patterns"
        ]}
        duration="45 minutes"
        price="$75"
        image="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <ServiceDetail 
        id="crystal"
        icon={<Sparkles className="h-6 w-6 text-primary-600 dark:text-primary-400" />}
        title="Crystal Healing"
        description="Crystal healing therapy uses the vibrational energy of crystals and gemstones to remove energy blockages and promote balance. Each crystal has unique properties that can benefit different aspects of your physical, emotional, and spiritual well-being."
        benefits={[
          "Clears and balances energy fields",
          "Enhances meditation and spiritual practices",
          "Promotes emotional healing and stability",
          "Supports physical healing processes",
          "Creates protective energetic boundaries"
        ]}
        duration="60 minutes"
        price="$95"
        image="https://images.pexels.com/photos/7245535/pexels-photo-7245535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        isReversed={true}
      />
      
      <ServiceDetail 
        id="sound"
        icon={<Music className="h-6 w-6 text-primary-600 dark:text-primary-400" />}
        title="Sound Therapy"
        description="Sound therapy uses instruments like singing bowls, tuning forks, and gongs to create resonant frequencies that promote healing. These vibrations help entrain brainwaves to states conducive to deep relaxation, meditation, and healing."
        benefits={[
          "Induces deep states of relaxation",
          "Reduces stress and anxiety levels",
          "Balances both hemispheres of the brain",
          "Clears energetic blockages",
          "Promotes cellular healing and rejuvenation"
        ]}
        duration="60 minutes"
        price="$95"
        image="https://images.pexels.com/photos/4883999/pexels-photo-4883999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* FAQ Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our energy healing services."
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  What should I expect during my first session?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your first session will begin with a consultation to discuss your needs and goals. The practitioner will explain the process and answer any questions. During the treatment, you'll typically lie fully clothed on a massage table while the practitioner works with your energy field. Many people experience sensations of warmth, tingling, or deep relaxation.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  How many sessions will I need?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The number of sessions varies depending on your individual needs and goals. Some people experience significant benefits after just one session, while others benefit from regular sessions over time. After your initial session, we can discuss a recommended treatment plan.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Is energy healing safe?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, energy healing is generally considered safe for people of all ages. It's non-invasive and complementary to conventional medical treatments. However, it's important to note that energy healing should not replace appropriate medical care for serious conditions. Always consult with your healthcare provider about integrating complementary therapies.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Do I need to prepare anything before my session?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We recommend wearing comfortable, loose-fitting clothing and avoiding heavy meals or alcohol before your session. It's also helpful to come with an open mind and to set an intention for your healing. Arriving 10-15 minutes early allows you to relax and center yourself before the session begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to Begin Your Healing Journey?
              </h2>
              <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
                Book your session today and take the first step toward balance, harmony, and renewed energy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  as={Link} 
                  to="/booking" 
                  variant="outline" 
                  size="lg"
                  className="bg-white text-primary-600 border-white hover:bg-primary-50"
                >
                  Book Now
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

export default Services;