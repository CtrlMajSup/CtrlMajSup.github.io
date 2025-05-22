import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Tag, Calendar, ArrowRight, FileText, Coffee } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 'beginner-guide-reiki',
    title: 'A Beginner\'s Guide to Reiki Healing',
    excerpt: 'Discover the fundamentals of Reiki energy healing and how it can benefit your overall wellbeing.',
    category: 'Reiki',
    date: 'May 15, 2023',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'understanding-chakras',
    title: 'Understanding Your Seven Chakras',
    excerpt: 'Learn about the seven main energy centers in your body and how balancing them can improve your life.',
    category: 'Chakra Balancing',
    date: 'June 3, 2023',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/8360491/pexels-photo-8360491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'meditation-techniques',
    title: '5 Meditation Techniques for Beginners',
    excerpt: 'Simple meditation practices you can incorporate into your daily routine to reduce stress and increase mindfulness.',
    category: 'Meditation',
    date: 'July 12, 2023',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'crystal-healing-guide',
    title: 'The Essential Guide to Crystal Healing',
    excerpt: 'Explore how different crystals can be used for healing, protection, and enhancing your energy field.',
    category: 'Crystal Healing',
    date: 'August 5, 2023',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/965981/pexels-photo-965981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'sound-therapy-benefits',
    title: 'The Healing Power of Sound Therapy',
    excerpt: 'How sound frequencies can reduce stress, improve sleep, and promote overall wellness.',
    category: 'Sound Therapy',
    date: 'September 18, 2023',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/7603029/pexels-photo-7603029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'energy-healing-science',
    title: 'The Science Behind Energy Healing',
    excerpt: 'Exploring the scientific research and evidence supporting various energy healing modalities.',
    category: 'Research',
    date: 'October 9, 2023',
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const categories = ['All', 'Reiki', 'Chakra Balancing', 'Meditation', 'Crystal Healing', 'Sound Therapy', 'Research'];

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
              Resources & Learning
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore our collection of articles, guides, and resources to deepen your understanding of energy healing.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Resources Search & Filter Section */}
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:text-white"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center mr-2">
                  <Tag className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">Categories:</span>
                </div>
                
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1 text-sm rounded-full ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Featured Article */}
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Featured Article
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/7108418/pexels-photo-7108418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Holistic Approach to Energy Healing" 
                className="w-full h-full object-cover object-center"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs font-medium px-2.5 py-0.5 rounded">Holistic Healing</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>April 28, 2023</span>
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">10 min read</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Integrating Energy Healing into Your Wellness Routine
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Discover how to combine different energy healing modalities for a comprehensive approach to your physical, emotional, and spiritual wellbeing. This guide explores practical ways to incorporate energy work into your daily life for lasting benefits.
                </p>
                
                <Button variant="primary" as="a" href="#" icon={<ArrowRight size={16} />} iconPosition="right">
                  Read Article
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* All Articles */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                Latest Articles
              </h2>
              
              <p className="text-gray-500 dark:text-gray-400">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
              </p>
            </div>
            
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col" hoverEffect={true}>
                      <div className="relative mb-4 rounded-t-lg overflow-hidden h-48">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs font-medium px-2.5 py-0.5 rounded">
                          {article.category}
                        </span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                        {article.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{article.date}</span>
                        <Link
                          to={`#${article.id}`}
                          className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                        >
                          Read more
                          <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  No Articles Found
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We couldn't find any articles matching your search criteria.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </Section>
      
      {/* Free Resources Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Free Resources" 
            subtitle="Download these complimentary guides to support your healing journey."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center p-6">
                <FileText className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Beginner's Guide to Meditation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A comprehensive guide for beginners looking to start a meditation practice, including simple techniques and tips for consistency.
                </p>
                <Button variant="outline" fullWidth>
                  Download PDF
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-r from-secondary-500 to-accent-500 flex items-center justify-center p-6">
                <FileText className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  7-Day Chakra Balancing Plan
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A week-long program with daily practices to help you cleanse and balance each of your seven main chakras.
                </p>
                <Button variant="outline" fullWidth>
                  Download PDF
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-r from-accent-500 to-primary-500 flex items-center justify-center p-6">
                <FileText className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Energy Cleansing Techniques
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Learn effective methods for cleansing your personal energy field and creating energetic boundaries.
                </p>
                <Button variant="outline" fullWidth>
                  Download PDF
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* Upcoming Workshops Section */}
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Upcoming Workshops" 
            subtitle="Join our educational workshops to deepen your understanding and practice of energy healing."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Introduction to Reiki Workshop" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded">
                  June 15, 2023
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">10:00 AM - 2:00 PM</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Introduction to Reiki: Level 1 Certification
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Learn the fundamentals of Reiki energy healing in this hands-on workshop. Receive your Level 1 attunement and begin your journey as a Reiki practitioner.
                </p>
                <Button variant="primary">
                  Register Now
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/8436659/pexels-photo-8436659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Crystal Healing Workshop" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-secondary-600 text-white text-sm font-medium px-3 py-1 rounded">
                  July 8, 2023
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">1:00 PM - 4:00 PM</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Crystal Healing for Beginners
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Discover the healing properties of different crystals and learn how to use them for personal healing, protection, and energy enhancement.
                </p>
                <Button variant="primary">
                  Register Now
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              as="a" 
              href="#"
              icon={<Calendar size={16} />}
            >
              View All Upcoming Workshops
            </Button>
          </div>
        </div>
      </Section>
      
      {/* Newsletter Section */}
      <Section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="h-12 w-12 mx-auto mb-6 opacity-90" />
            
            <h2 className="text-3xl font-display font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Stay updated with our latest articles, resources, and upcoming workshops. Join our community of healers and wellness enthusiasts.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                required
              />
              <Button
                type="submit"
                variant="outline"
                className="bg-white text-primary-600 border-white hover:bg-primary-50"
              >
                Subscribe
              </Button>
            </form>
            
            <p className="mt-4 text-sm opacity-80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Support Section */}
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-3xl mx-auto text-center">
            <Coffee className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-6" />
            
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Support Our Work
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If you find our resources valuable, consider supporting our work. Your contribution helps us create more free content and resources for the community.
            </p>
            
            <Button variant="primary">
              Make a Donation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Resources;