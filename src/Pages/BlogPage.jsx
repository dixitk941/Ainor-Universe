import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import ModernPageLayout from '../components/layout/ModernPageLayout';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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

  const categoryColors = {
    technology: 'bg-blue-100 text-blue-700',
    business: 'bg-green-100 text-green-700',
    design: 'bg-purple-100 text-purple-700',
    announcement: 'bg-orange-100 text-orange-700',
  };

  return (
    <>
      <SEOHead 
        title="Blog - AINOR | Web Development & Digital Insights"
        description="Explore AINOR's blog for insights on web development, digital transformation, mobile apps, and technology trends."
        canonicalUrl="https://myainor.com/blog"
      />

      <ModernPageLayout>
        {/* Hero Section */}
        <section className="bg-white rounded-3xl p-6 md:p-12 shadow-soft relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60" />
          
          <div className="relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
                <span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">Our Blog</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111318] mb-4">
                Insights & <span className="text-primary">Updates</span>
              </h1>
              
              <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
                Stay updated with the latest trends in web development, digital transformation, and technology.
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2.5 rounded-full font-medium text-sm transition-all ${
                      activeCategory === category.id
                        ? 'bg-black text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && activeCategory === 'all' && (
          <Link to={`/blog/${featuredPost.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-soft overflow-hidden card-hover group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[featuredPost.category]}`}>
                      {featuredPost.category.charAt(0).toUpperCase() + featuredPost.category.slice(1)}
                    </span>
                    <span className="text-xs font-bold px-3 py-1 bg-primary text-white rounded-full">Featured</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-500 mb-4 line-clamp-2">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <FaUser className="text-xs" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-xs" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        )}

        {/* Blog Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.filter(p => !p.featured || activeCategory !== 'all').map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="bg-white rounded-2xl shadow-soft overflow-hidden card-hover group h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${categoryColors[post.category]}`}>
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{post.readTime}</span>
                      <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <FaArrowRight className="text-xs" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </ModernPageLayout>
    </>
  );
};

export default BlogPage;
