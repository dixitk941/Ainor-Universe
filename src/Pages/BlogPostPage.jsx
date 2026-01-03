import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaClock, FaUser, FaCalendar, FaShareAlt, FaTwitter, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import ModernPageLayout from '../components/layout/ModernPageLayout';

const BlogPostPage = () => {
  const { slug } = useParams();

  // Sample blog posts data (would come from API/CMS)
  const blogPosts = {
    "first-in-india-subscription-based-web-services-ainor": {
      id: 10,
      slug: "first-in-india-subscription-based-web-services-ainor",
      title: "🇮🇳 First in India: AINOR Launches Revolutionary Subscription-Based Web & App Development",
      excerpt: "AINOR becomes the first company in India to offer subscription-based web development, mobile app development, and digital solutions.",
      date: "December 31, 2025",
      author: "Karan Dixit",
      category: "announcement",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1000",
      content: `
        <h2>A New Era of Digital Solutions</h2>
        <p>AINOR is proud to announce the launch of India's first subscription-based web development and digital solutions service. This revolutionary model allows businesses of all sizes to access premium digital services without the burden of large upfront costs.</p>
        
        <h2>How It Works</h2>
        <p>Instead of paying a large sum upfront for your website or mobile app, you can now subscribe to our services for a fixed monthly fee. This includes:</p>
        <ul>
          <li>Custom website development and maintenance</li>
          <li>Mobile app development for iOS and Android</li>
          <li>Ongoing updates and feature additions</li>
          <li>24/7 technical support</li>
          <li>Security updates and monitoring</li>
        </ul>
        
        <h2>Benefits of the Subscription Model</h2>
        <p>Our subscription model offers several advantages:</p>
        <ul>
          <li><strong>Save 60-70%</strong> compared to traditional development costs</li>
          <li><strong>No large upfront investment</strong> required</li>
          <li><strong>Predictable monthly costs</strong> for better budgeting</li>
          <li><strong>Continuous improvements</strong> to your digital assets</li>
          <li><strong>Risk-free</strong> - cancel anytime</li>
        </ul>
        
        <h2>Our Subscription Plans</h2>
        <p>We offer three tiers of subscription plans to meet different business needs:</p>
        <ul>
          <li><strong>Starter:</strong> Perfect for small businesses and startups</li>
          <li><strong>Professional:</strong> Ideal for growing businesses</li>
          <li><strong>Enterprise:</strong> Custom solutions for large organizations</li>
        </ul>
        
        <h2>Get Started Today</h2>
        <p>Ready to transform your digital presence? Contact us to learn more about our subscription plans and how we can help your business grow in the digital age.</p>
      `
    },
    "ai-powered-web-development-2025-trends": {
      id: 8,
      slug: "ai-powered-web-development-2025-trends",
      title: "AI-Powered Web Development: 10 Game-Changing Trends in 2025",
      excerpt: "Discover how artificial intelligence is revolutionizing web development.",
      date: "September 4, 2025",
      author: "Karan Dixit",
      category: "technology",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      content: `
        <h2>The AI Revolution in Web Development</h2>
        <p>Artificial Intelligence is no longer just a buzzword - it's transforming how we build websites and applications. From AI-powered design tools to intelligent chatbots, here are the top 10 trends shaping web development in 2025.</p>
        
        <h2>1. AI-Driven Design Tools</h2>
        <p>Design tools powered by AI can now generate complete UI designs from simple text descriptions. This dramatically speeds up the design process and helps developers visualize ideas quickly.</p>
        
        <h2>2. Intelligent Code Assistants</h2>
        <p>AI coding assistants like GitHub Copilot have become indispensable. They suggest code completions, catch bugs, and even write entire functions based on comments.</p>
        
        <h2>3. Personalized User Experiences</h2>
        <p>AI enables websites to adapt content, layout, and recommendations based on user behavior and preferences in real-time.</p>
        
        <h2>4. Advanced Chatbots and Virtual Assistants</h2>
        <p>Modern AI chatbots can handle complex conversations, understand context, and provide genuinely helpful responses to users.</p>
        
        <h2>5. Automated Testing and QA</h2>
        <p>AI-powered testing tools can automatically identify bugs, test edge cases, and ensure website quality without manual intervention.</p>
        
        <h2>Looking Forward</h2>
        <p>The integration of AI in web development is just beginning. As these technologies mature, we can expect even more innovative applications that will continue to transform the digital landscape.</p>
      `
    }
  };

  const post = blogPosts[slug] || {
    title: "Blog Post Not Found",
    content: "<p>The requested blog post could not be found.</p>",
    date: "",
    author: "",
    readTime: "",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000",
    category: "general"
  };

  const categoryColors = {
    technology: 'bg-blue-100 text-blue-700',
    business: 'bg-green-100 text-green-700',
    design: 'bg-purple-100 text-purple-700',
    announcement: 'bg-orange-100 text-orange-700',
    general: 'bg-gray-100 text-gray-700',
  };

  const shareUrl = `https://myainor.com/blog/${slug}`;

  return (
    <>
      <SEOHead 
        title={`${post.title} | AINOR Blog`}
        description={post.excerpt}
        canonicalUrl={`https://myainor.com/blog/${slug}`}
      />

      <ModernPageLayout>
        {/* Back Button */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-4"
          >
            <FaArrowLeft /> Back to Blog
          </Link>
        </motion.div>

        {/* Article */}
        <article className="bg-white rounded-3xl shadow-soft overflow-hidden">
          {/* Hero Image */}
          <div className="aspect-video md:aspect-[3/1] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10 lg:p-12">
            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[post.category]}`}>
                  {post.category?.charAt(0).toUpperCase() + post.category?.slice(1)}
                </span>
                {post.date && (
                  <span className="flex items-center gap-1 text-sm text-gray-400">
                    <FaCalendar className="text-xs" /> {post.date}
                  </span>
                )}
                {post.readTime && (
                  <span className="flex items-center gap-1 text-sm text-gray-400">
                    <FaClock className="text-xs" /> {post.readTime}
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111318] mb-4">
                {post.title}
              </h1>
              
              {post.author && (
                <p className="flex items-center gap-2 text-gray-500">
                  <FaUser className="text-sm" /> By {post.author}
                </p>
              )}
            </motion.div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3 pb-6 border-b border-gray-100 mb-8">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <FaShareAlt /> Share:
              </span>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center hover:bg-blue-100 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center hover:bg-blue-100 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href={`https://wa.me/?text=${post.title}%20${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center hover:bg-green-100 transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-[#111318]
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-ul:text-gray-600
                prose-li:mb-2
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#111318]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA */}
            <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-primary to-blue-600 rounded-2xl text-center text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to Start Your Project?</h3>
              <p className="text-white/80 mb-4">Let's discuss how AINOR can help transform your business.</p>
              <a
                href="https://wa.me/919667047128?text=Hi%20AINOR!%20I%20read%20your%20blog%20and%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft">
          <h2 className="text-2xl font-bold mb-6">More Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.values(blogPosts).slice(0, 2).map((relatedPost) => (
              relatedPost.slug !== slug && (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                  <div className="flex gap-4 group p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">{relatedPost.date}</p>
                    </div>
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </ModernPageLayout>
    </>
  );
};

export default BlogPostPage;
