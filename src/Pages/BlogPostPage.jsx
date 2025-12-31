import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import PageScrollAnimation from '../components/ui/PageScrollAnimation';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const BlogPostPage = () => {
  const { slug } = useParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Blog posts data (simplified for this component)
  const blogPosts = {
    "first-in-india-subscription-based-web-services-ainor": {
      id: 10,
      title: "🇮🇳 First in India: AINOR Launches Revolutionary Subscription-Based Web & App Development Services",
      excerpt: "AINOR becomes the first company in India to offer subscription-based web development, mobile app development, and digital solutions.",
      date: "December 31, 2025",
      author: "Karan Dixit",
      category: "announcement",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1000",
    },
    "sustainable-agriculture-digital-transformation-2025": {
      id: 9,
      title: "How Digital Transformation is Revolutionizing Sustainable Agriculture",
      excerpt: "Discover how businesses are leveraging digital platforms to export organic products to global markets.",
      date: "December 31, 2025",
      author: "Karan Dixit",
      category: "business",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000",
    },
    "ai-powered-web-development-2025-trends": {
      id: 8,
      title: "AI-Powered Web Development: 10 Game-Changing Trends in 2025",
      excerpt: "Discover how artificial intelligence is revolutionizing web development.",
      date: "September 4, 2025",
      author: "Karan Dixit",
      category: "technology",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    },
    "progressive-web-apps-future-2025": {
      id: 7,
      title: "Progressive Web Apps: The Future of Mobile Web Experiences",
      excerpt: "PWAs are revolutionizing how businesses deliver mobile experiences.",
      date: "September 2, 2025",
      author: "Karan Dixit",
      category: "technology",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
    },
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-4">Post Not Found</h1>
          <Link 
            to="/blog" 
            className="text-indigo-500 hover:text-indigo-600 font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = `https://myainor.com/blog/${slug}`;

  return (
    <>
      <SEOHead
        title={`${post.title} | AINOR Blog`}
        description={post.excerpt}
        canonicalUrl={shareUrl}
      />

      <PageScrollAnimation type="blog" isMobile={isMobile} />

      <div className="min-h-screen bg-[#f5f5f5]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Back link */}
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-500 mb-8 transition-colors"
              >
                ← Back to Blog
              </Link>

              {/* Category & Meta */}
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-500 rounded-full text-sm font-medium capitalize">
                  {post.category}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 text-sm">{post.date}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Author */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">KD</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#1a1a1a]">{post.author}</p>
                    <p className="text-gray-500 text-sm">Founder & CEO at AINOR</p>
                  </div>
                </div>

                {/* Share buttons */}
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-gray-500 text-sm mr-2">Share:</span>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-indigo-500 hover:border-indigo-500 transition-colors"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  <a 
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-indigo-500 hover:border-indigo-500 transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-indigo-500 hover:border-indigo-500 transition-colors"
                  >
                    <FaFacebook className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Featured Image */}
              <div className="rounded-3xl overflow-hidden mb-12">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full aspect-[21/9] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100"
            >
              {/* Blog content placeholder - in real app, this would come from CMS */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {post.excerpt}
                </p>

                <div className="bg-indigo-50 rounded-2xl p-6 mb-8 border border-indigo-100">
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">📌 Key Highlights</h3>
                  <ul className="space-y-2 text-indigo-800">
                    <li>• Revolutionary subscription model for digital services</li>
                    <li>• Save 60-70% compared to traditional pricing</li>
                    <li>• Premium hosting and SSL included</li>
                    <li>• 24/7 technical support and maintenance</li>
                    <li>• Flexible plans with cancel anytime option</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">The Problem with Traditional Pricing</h2>
                <p className="text-gray-700 mb-6">
                  For decades, businesses have faced significant barriers when establishing their digital presence. A professional website costs ₹35,000 to ₹1,00,000+. A mobile app? That's ₹50,000 to ₹2,00,000 or more. Add hosting, maintenance, updates, and security - the costs keep piling up.
                </p>

                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Our Solution</h2>
                <p className="text-gray-700 mb-6">
                  AINOR's subscription model changes everything. Instead of paying lakhs upfront, you pay a small one-time setup fee and a predictable monthly subscription that includes everything you need.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                    <h4 className="font-bold text-red-800 mb-3">❌ Traditional Model</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Massive upfront investment</li>
                      <li>• Additional costs for hosting</li>
                      <li>• Updates charged separately</li>
                      <li>• No ongoing support</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                    <h4 className="font-bold text-green-800 mb-3">✅ AINOR Subscription</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Low setup fee</li>
                      <li>• Hosting included</li>
                      <li>• Free updates & maintenance</li>
                      <li>• 24/7 support included</li>
                    </ul>
                  </div>
                </div>

                <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-xl text-gray-700 my-8 bg-gray-50 py-4 pr-4 rounded-r-lg">
                  "We're not just changing our pricing - we're changing how businesses in India think about digital investments."
                  <footer className="text-sm text-gray-500 mt-2 not-italic">— Karan Dixit, Founder & CEO at AINOR</footer>
                </blockquote>

                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Get Started Today</h2>
                <p className="text-gray-700 mb-6">
                  Ready to experience the future of digital services? Contact us for a free consultation and discover how our subscription model can help your business grow.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-[#1a1a1a] rounded-2xl p-8 mt-12 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-400 mb-6">Contact us for a free consultation about your project.</p>
                <motion.a
                  href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%20just%20read%20your%20blog%20and%20I'm%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp
                </motion.a>
              </div>

              {/* Author Bio */}
              <div className="border-t border-gray-200 mt-12 pt-8">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-4">About the Author</h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold text-lg">KD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a]">{post.author}</h4>
                    <p className="text-gray-500 text-sm mb-2">Founder & CEO at AINOR</p>
                    <p className="text-gray-600 text-sm">
                      Karan is passionate about making technology accessible to businesses of all sizes. With this subscription model, he aims to democratize access to professional digital services across India.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Posts CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">More from Our Blog</h2>
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors"
            >
              View All Posts →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPostPage;
