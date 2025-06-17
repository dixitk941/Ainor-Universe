import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import AnimatedImage from '../components/ui/AnimatedImage';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Revolutionizing User Experience with AI-Powered Interfaces",
      excerpt: "Discover how artificial intelligence is transforming the way users interact with modern applications.",
      date: "June 15, 2023",
      author: "Alex Johnson",
      category: "ai",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=1000",
      featured: true
    },
    {
      id: 2,
      title: "The Future of Web Development: WebAssembly and Beyond",
      excerpt: "Exploring how WebAssembly is changing the landscape of web applications and what's coming next.",
      date: "May 28, 2023",
      author: "Maria Chen",
      category: "web",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      title: "Mobile App Performance Optimization Techniques",
      excerpt: "Learn practical strategies to enhance your mobile app's speed and responsiveness.",
      date: "April 10, 2023",
      author: "James Wilson",
      category: "mobile",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 4,
      title: "Building Secure Web Applications: Best Practices",
      excerpt: "Essential security measures every developer should implement to protect web applications.",
      date: "March 22, 2023",
      author: "Sophia Rodriguez",
      category: "security",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 5,
      title: "The Rise of Headless CMS in Modern Web Development",
      excerpt: "Why more businesses are adopting headless content management systems for their digital presence.",
      date: "February 15, 2023",
      author: "David Kim",
      category: "web",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 6,
      title: "AR Integration in Mobile Apps: A Comprehensive Guide",
      excerpt: "Step-by-step approach to implementing augmented reality features in your mobile applications.",
      date: "January 30, 2023",
      author: "Emily Zhang",
      category: "mobile",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Featured post is the first one with featured = true
  const featuredPost = blogPosts.find(post => post.featured);

  // Categories
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'security', name: 'Security' }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Insights</span> & Thoughts
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay up to date with the latest trends, technologies, and best practices in the digital world.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Featured Post */}
      {featuredPost && (
        <Section className="py-10 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div className="md:order-2">
                    <div className="relative h-64 md:h-full w-full overflow-hidden rounded-xl">
                      <AnimatedImage
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center md:order-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-sm text-gray-500">{featuredPost.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-3">
                        {featuredPost.author.split(' ')[0][0]}{featuredPost.author.split(' ')[1][0]}
                      </div>
                      <span className="text-gray-700 font-medium">{featuredPost.author}</span>
                    </div>
                    <Button href={`/blog/${featuredPost.id}`} variant="outline">
                      Read Article
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* Categories Filter */}
      <Section className="py-8 bg-white">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Blog Posts Grid */}
      <Section className="py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-gray-700">
                      {post.readTime}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="text-xs uppercase font-semibold text-indigo-600">
                        {categories.find(c => c.id === post.category)?.name || post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs mr-2">
                          {post.author.split(' ')[0][0]}{post.author.split(' ')[1][0]}
                        </div>
                        <span className="text-sm text-gray-700">{post.author}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter */}
      <Section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-8">
                Get the latest insights, tips, and updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <Button>
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
};

export default BlogPage;
