import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/seo/SEOHead';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Blog posts data
  const blogPosts = [
    {
      id: 10,
      slug: "first-in-india-subscription-based-web-services-ainor",
      title: "🇮🇳 First in India: AINOR Launches Revolutionary Subscription-Based Web & App Development",
      excerpt: "AINOR becomes the first company in India to offer subscription-based web development, mobile app development, and digital solutions. Learn how this model saves businesses 60-70%.",
      date: "December 31, 2025",
      author: "Karan Dixit",
      category: "announcement",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1000",
      featured: true
    },
    {
      id: 9,
      slug: "sustainable-agriculture-digital-transformation-2025",
      title: "How Digital Transformation is Revolutionizing Sustainable Agriculture",
      excerpt: "Discover how businesses in India's culturally rich regions are leveraging digital platforms to export organic fertilizers and traditional handicrafts to global markets.",
      date: "December 31, 2025",
      author: "Karan Dixit",
      category: "business",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 8,
      slug: "ai-powered-web-development-2025-trends",
      title: "AI-Powered Web Development: 10 Game-Changing Trends in 2025",
      excerpt: "Discover how artificial intelligence is revolutionizing web development. From AI-driven design tools to intelligent user experiences, explore cutting-edge trends.",
      date: "September 4, 2025",
      author: "Karan Dixit",
      category: "technology",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      featured: true
    },
    {
      id: 7,
      slug: "progressive-web-apps-future-2025",
      title: "Progressive Web Apps: The Future of Mobile Web Experiences",
      excerpt: "PWAs are revolutionizing how businesses deliver mobile experiences. Learn about the benefits, implementation strategies, and success stories.",
      date: "September 2, 2025",
      author: "Karan Dixit",
      category: "technology",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 6,
      slug: "mobile-first-design-essential-guide-2025",
      title: "Mobile-First Design: An Essential Guide for 2025",
      excerpt: "With mobile traffic dominating the web, mobile-first design isn't optional anymore. Learn the strategies that will make your website stand out.",
      date: "August 28, 2025",
      author: "Karan Dixit",
      category: "design",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 5,
      slug: "web-performance-optimization-techniques-2025",
      title: "Web Performance Optimization Techniques for 2025",
      excerpt: "Speed matters more than ever. Discover the latest techniques for optimizing your website's performance and delivering lightning-fast experiences.",
      date: "August 25, 2025",
      author: "Karan Dixit",
      category: "technology",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 4,
      slug: "ecommerce-trends-2025-complete-guide",
      title: "E-Commerce Trends 2025: A Complete Guide for Online Businesses",
      excerpt: "The e-commerce landscape is evolving rapidly. Stay ahead of the competition with these essential trends and strategies for 2025.",
      date: "August 20, 2025",
      author: "Karan Dixit",
      category: "business",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 3,
      slug: "cybersecurity-best-practices-businesses-2025",
      title: "Cybersecurity Best Practices for Businesses in 2025",
      excerpt: "Protect your business from cyber threats with these essential security practices. Learn how to safeguard your digital assets.",
      date: "August 15, 2025",
      author: "Karan Dixit",
      category: "technology",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'technology', name: 'Technology' },
    { id: 'business', name: 'Business' },
    { id: 'design', name: 'Design' },
    { id: 'announcement', name: 'Announcements' },
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <>
      <SEOHead
        title="Blog - AINOR Digital Solutions | Web Development Insights"
        description="Stay updated with the latest trends in web development, mobile apps, AI, and digital transformation. Expert insights from AINOR's team."
        canonicalUrl="https://myainor.com/blog"
      />

      <div className="min-h-screen bg-[#f5f5f5]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Decorative arrows */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.svg
              className="absolute top-24 right-16 w-28 h-28 opacity-[0.08]"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="50" cy="50" r="6" fill="#6366f1" />
              {[0, 120, 240].map((angle, i) => (
                <g key={i} transform={`rotate(${angle} 50 50)`}>
                  <line x1="50" y1="50" x2="50" y2="15" stroke="#6366f1" strokeWidth="2" />
                  <polygon points="45,20 50,8 55,20" fill="#6366f1" />
                </g>
              ))}
            </motion.svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="font-semibold text-sm">Blog</span>
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-6">
                Insights &
                <span className="block mt-2 text-indigo-500">Ideas</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Expert insights on web development, digital transformation, and technology trends.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  to={`/blog/${featuredPost.slug}`}
                  className="block group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-indigo-200 transition-all">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                        <img 
                          src={featuredPost.image} 
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-indigo-50 text-indigo-500 rounded-full text-sm font-medium capitalize">
                            {featuredPost.category}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4 group-hover:text-indigo-500 transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-gray-600 mb-6">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                              <span className="text-indigo-600 font-semibold text-sm">KD</span>
                            </div>
                            <div>
                              <p className="font-medium text-[#1a1a1a] text-sm">{featuredPost.author}</p>
                              <p className="text-gray-500 text-xs">{featuredPost.date}</p>
                            </div>
                          </div>
                          <span className="text-indigo-500 font-medium group-hover:translate-x-1 transition-transform">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-xl font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-[#1a1a1a] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeCategory}
            >
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={cardVariants}
                >
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="block group h-full"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 h-full flex flex-col hover:border-indigo-200 transition-all">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 bg-indigo-50 text-indigo-500 rounded-md text-xs font-medium capitalize">
                            {post.category}
                          </span>
                          <span className="text-gray-400 text-xs">•</span>
                          <span className="text-gray-500 text-xs">{post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 group-hover:text-indigo-500 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-gray-500 text-xs">{post.date}</span>
                          <span className="text-indigo-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
                            Read →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">No posts found</h3>
                <p className="text-gray-600">Try selecting a different category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            >
              {/* Decorative element */}
              <motion.svg
                className="absolute top-8 right-8 w-24 h-24 opacity-10"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <circle cx="50" cy="50" r="6" fill="white" />
                {[0, 90, 180, 270].map((angle, i) => (
                  <g key={i} transform={`rotate(${angle} 50 50)`}>
                    <line x1="50" y1="50" x2="50" y2="15" stroke="white" strokeWidth="2" />
                    <polygon points="45,20 50,8 55,20" fill="white" />
                  </g>
                ))}
              </motion.svg>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Get the latest insights on web development, AI, and digital transformation delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-indigo-500 focus:outline-none"
                />
                <motion.button
                  className="px-8 py-4 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
