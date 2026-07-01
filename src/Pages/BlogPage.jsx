import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import SEOText from '../components/seo/SEOText';
import {
  PageShell, PageHero, SectionLabel, GradientWord, ease,
} from '../components/layout/PageShell';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 17,
      slug: "freelysta-revolutionizing-freelancing-platform-2026",
      title: "🚀 Freelysta: How This Revolutionary Platform is Changing the Future of Freelancing in 2026",
      excerpt: "Discover Freelysta - the next-generation freelancing platform using AI to connect talented professionals with global opportunities. See how it's solving the biggest freelancing challenges!",
      date: "February 3, 2026",
      lastUpdated: "February 3, 2026",
      author: "Karan Dixit",
      category: "technology",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1000",
      featured: true
    },
    {
      id: 16,
      slug: "ai-revolutionizing-web-development-2026-complete-guide",
      title: "🤖 How AI is Revolutionizing Web Development in 2026: A Complete Guide",
      excerpt: "From AI-powered code generation to intelligent UX optimization, discover how artificial intelligence is transforming web development. Real examples, tools, and future predictions inside!",
      date: "January 25, 2026",
      lastUpdated: "January 25, 2026",
      author: "Karan Dixit",
      category: "technology",
      readTime: "14 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 15,
      slug: "web-development-cost-india-2026-save-70-percent",
      title: "💰 Web Development Cost in India 2026: How to Save 70% Without Compromising Quality",
      excerpt: "Discover the REAL cost of web development in India. Our subscription model helped 50+ businesses save ₹5-10 lakhs. Get pricing breakdown + FREE consultation inside!",
      date: "January 23, 2026",
      lastUpdated: "January 24, 2026",
      author: "Karan Dixit",
      category: "business",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 14,
      slug: "ecommerce-website-development-case-study-sttrika",
      title: "🚀 From Zero to 5K Users: Sttrika E-Commerce Success Story & Development Blueprint",
      excerpt: "How we built a fashion e-commerce platform that generated ₹10L+ revenue in 6 months. Complete tech stack, timeline, and cost breakdown revealed!",
      date: "January 23, 2026",
      lastUpdated: "January 24, 2026",
      author: "Karan Dixit",
      category: "business",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 13,
      slug: "mobile-app-development-cost-breakdown-india-2026",
      title: "📱 Mobile App Development Cost Breakdown 2026: iOS vs Android [Real Project Data]",
      excerpt: "Planning an app like GoForCab? See actual costs, timelines & tech stack for building ride-hailing apps. 500+ drivers, 10K+ rides - here's how we did it.",
      date: "January 23, 2026",
      lastUpdated: "January 23, 2026",
      author: "Karan Dixit",
      category: "technology",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 12,
      slug: "seo-case-study-ranking-1-google-exambulletin",
      title: "🎯 SEO Case Study: How We Ranked #1 on Google for Government Job Keywords in 90 Days",
      excerpt: "ExamBulletin went from 0 to 100K monthly visitors. Step-by-step SEO strategy, keyword research, and technical optimization that you can replicate today.",
      date: "January 23, 2026",
      lastUpdated: "January 24, 2026",
      author: "Karan Dixit",
      category: "technology",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 11,
      slug: "best-web-development-company-india-portfolio-2026",
      title: "🏆 Top 10 Web Development Companies in India 2026: Portfolio & Pricing Comparison",
      excerpt: "Choosing the right web development agency? Compare portfolios, pricing, and client reviews. See why AINOR is rated #1 for subscription-based development.",
      date: "January 23, 2026",
      lastUpdated: "January 23, 2026",
      author: "Karan Dixit",
      category: "business",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 10,
      slug: "first-in-india-subscription-based-web-services-ainor",
      title: "🇮🇳 First in India: AINOR Launches Revolutionary Subscription-Based Web & App Development",
      excerpt: "AINOR becomes the first company in India to offer subscription-based web development, mobile app development, and digital solutions. Learn how this model saves businesses 60-70%.",
      date: "December 31, 2025",
      lastUpdated: "January 15, 2026",
      author: "Karan Dixit",
      category: "announcement",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 9,
      slug: "sustainable-agriculture-digital-transformation-2025",
      title: "How Digital Transformation is Revolutionizing Sustainable Agriculture",
      excerpt: "Discover how businesses in India's culturally rich regions are leveraging digital platforms to export organic fertilizers and traditional handicrafts to global markets.",
      date: "December 31, 2025",
      lastUpdated: "January 10, 2026",
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
      lastUpdated: "December 28, 2025",
      author: "Karan Dixit",
      category: "technology",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 7,
      slug: "progressive-web-apps-future-2025",
      title: "Progressive Web Apps: The Future of Mobile Web Experiences",
      excerpt: "PWAs are revolutionizing how businesses deliver mobile experiences. Learn about the benefits, implementation strategies, and success stories.",
      date: "September 2, 2025",
      lastUpdated: "December 15, 2025",
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
      lastUpdated: "November 20, 2025",
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
      lastUpdated: "November 10, 2025",
      author: "Karan Dixit",
      category: "technology",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'business', name: 'Business' },
    { id: 'technology', name: 'Technology' },
    { id: 'design', name: 'Design' },
    { id: 'announcement', name: 'Announcements' },
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  const categoryColors = {
    technology: 'bg-indigo-100 text-indigo-700',
    business: 'bg-green-100 text-green-700',
    design: 'bg-purple-100 text-purple-700',
    announcement: 'bg-orange-100 text-orange-700',
  };

  return (
    <>
      <SEOHead
        title="Blog | Web Development Cost Guides | Case Studies | FREE Resources | AINOR"
        description="📚 FREE guides on web development costs, SEO strategies, and real case studies. Learn how startups built successful products. Actionable tips inside!"
        canonicalUrl="https://myainor.com/blog"
      />

      <PageShell>
        <PageHero
          badge="Our Blog"
          bgWord="BLOG"
          title={<>Insights &amp; <GradientWord>Updates.</GradientWord></>}
          subtitle="Stay updated with the latest trends in web development, digital transformation, and technology."
        />

        <section className="relative bg-[#f5f5f5] py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={1} title="Latest Articles" />

            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button key={category.id} onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    activeCategory === category.id
                      ? 'bg-[#111318] text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Featured post */}
            {featuredPost && activeCategory === 'all' && (
              <Link to={`/blog/${featuredPost.slug}`} className="block mb-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-md transition-all group">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="aspect-video md:aspect-auto overflow-hidden">
                      <img src={featuredPost.image} alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[featuredPost.category]}`}>
                          {featuredPost.category.charAt(0).toUpperCase() + featuredPost.category.slice(1)}
                        </span>
                        <span className="text-xs font-bold px-3 py-1 bg-[#111318] text-white rounded-full">Featured</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-500 mb-4 line-clamp-2">{featuredPost.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1"><FaUser className="text-xs" /> {featuredPost.author}</span>
                        <span className="flex items-center gap-1"><FaClock className="text-xs" /> {featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            )}

            {/* Posts grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredPosts.filter(p => !p.featured || activeCategory !== 'all').map((post, idx) => (
                <motion.div key={post.id}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05, ease }}>
                  <Link to={`/blog/${post.slug}`}>
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all group h-full flex flex-col">
                      <div className="aspect-video overflow-hidden">
                        <img src={post.image} alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`text-xs font-bold px-2 py-1 rounded-lg ${categoryColors[post.category]}`}>
                            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                          </span>
                          <span className="text-xs text-gray-400">{post.date}</span>
                        </div>
                        {post.lastUpdated && post.lastUpdated !== post.date && (
                          <div className="mb-2">
                            <span className="text-xs text-indigo-600 font-medium">Updated: {post.lastUpdated}</span>
                          </div>
                        )}
                        <h3 className="font-bold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm mt-auto pt-2">
                          <span className="text-gray-400">{post.readTime}</span>
                          <span className="text-indigo-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read More <FaArrowRight className="text-xs" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SEOText page="blog" />
      </PageShell>
    </>
  );
};

export default BlogPage;
