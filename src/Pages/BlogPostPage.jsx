import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';

const BlogPostPage = () => {
  const { slug } = useParams();
  
  // This would typically come from a database or API
  // For now, we'll import it from the same data in BlogPage
  // In a real app, you might want to use a context or fetch this data
  const blogPosts = [
    {
      id: 1,
      slug: "why-every-creator-needs-personal-website-2025",
      title: "Why Every Creator Needs a Personal Website in 2025",
      excerpt: "In the evolving digital landscape of 2025, having a personal website has become essential for creators looking to establish authority, control their brand, and unlock new opportunities.",
      date: "July 2, 2025",
      author: "Karan Dixit (dixitk941)",
      category: "personal-branding",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=1000",
      content: `<div class="blog-content">
        <h1 class="text-3xl font-bold mb-6">Why Every Creator Needs a Personal Website in 2025</h1>
        
        <div class="mb-4 flex items-center text-gray-600">
          <span>July 2, 2025</span>
          <span class="mx-2">•</span>
          <span>8 min read</span>
        </div>
        
        <img src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=1000" alt="Creator working on website" class="w-full h-64 object-cover rounded-lg mb-8" />
        
        <p class="mb-6">In today's creator economy, where social media algorithms change overnight and platforms come and go, having your own dedicated space on the internet isn't just nice to have—it's essential. As we move through 2025, the importance of a personal website for creators has never been more pronounced.</p>
        
        <h2 class="text-2xl font-bold mb-4">The Shifting Digital Landscape</h2>
        
        <p class="mb-6">Remember when Instagram was primarily chronological? When TikTok was just a musical.ly successor? When Twitter wasn't X? The digital landscape is constantly evolving, and platform dependency has become increasingly risky. In the first half of 2025 alone, we've seen three major algorithm changes across top social platforms that have decimated some creators' reach overnight.</p>
        
        <p class="mb-6">Your personal website serves as a platform-independent hub that you control completely. No algorithm changes. No terms of service surprises. No risk of account suspension. Just your content, your way.</p>
        
        <h2 class="text-2xl font-bold mb-4">Why Now More Than Ever?</h2>
        
        <div class="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 class="text-xl font-semibold mb-3">Key Statistics:</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>73% of brands now check for personal websites before collaboration deals (Creator Marketing Report 2025)</li>
            <li>Creators with personal websites earn 2.7x more from their digital products (Creator Economy Insights)</li>
            <li>58% of audience members trust content on personal websites more than social media posts (Digital Trust Barometer)</li>
            <li>Google's 2024 E-E-A-T algorithm update heavily prioritizes content from identifiable experts with established websites</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold mb-4">7 Compelling Reasons Every Creator Needs a Website</h2>
        
        <h3 class="text-xl font-semibold mb-3">1. True Ownership and Control</h3>
        <p class="mb-6">When you build on rented land (social media), you play by someone else's rules. Your personal website is digital real estate that you own outright. You control the design, the user experience, the monetization strategies, and most importantly, the direct relationship with your audience.</p>
        
        <h3 class="text-xl font-semibold mb-3">2. Algorithm-Proof Audience Connection</h3>
        <p class="mb-6">The recent "Visibility Collapse" on major platforms has shown that algorithm dependence is precarious. Your website, paired with an email list, creates a direct channel to your audience that no algorithm can disrupt. In 2025, creators who rely solely on social media for audience connection are learning painful lessons about platform vulnerability.</p>
        
        <h3 class="text-xl font-semibold mb-3">3. Professional Credibility</h3>
        <p class="mb-6">A well-designed website signals professionalism and commitment to your craft. In an increasingly crowded creator economy, this level of professionalism differentiates the serious creators from the casual ones. It's often the first thing brands check when considering partnerships.</p>
        
        <h3 class="text-xl font-semibold mb-3">4. Diverse Monetization Options</h3>
        <p class="mb-6">Beyond platform-specific monetization tools, your website opens up multiple revenue streams: digital products, courses, consulting services, exclusive memberships, affiliate marketing, and direct sponsorships—all without platform fees cutting into your earnings.</p>
        
        <h3 class="text-xl font-semibold mb-3">5. Consolidated Content Hub</h3>
        <p class="mb-6">Instead of having your work scattered across different platforms, a personal website serves as a central portfolio showcasing your best work. This makes it easier for potential clients, collaborators, and fans to discover the full range of your capabilities.</p>
        
        <h3 class="text-xl font-semibold mb-3">6. SEO Benefits and Discoverability</h3>
        <p class="mb-6">With proper SEO optimization, your website can attract organic traffic from search engines—people actively looking for what you offer. In 2025, with AI search integration becoming standard, websites with clear expertise indicators are winning the visibility game.</p>
        
        <h3 class="text-xl font-semibold mb-3">7. Future-Proofing Your Brand</h3>
        <p class="mb-6">The creator economy is maturing rapidly. Those building sustainable businesses are investing in owned assets rather than rented visibility. A website is the foundation of this approach, allowing you to adapt to industry changes while maintaining your unique presence.</p>
        
        <h2 class="text-2xl font-bold mb-4">What Your Creator Website Needs in 2025</h2>
        
        <p class="mb-6">The standards for creator websites have evolved. Here's what's essential now:</p>
        
        <ul class="list-disc pl-6 space-y-3 mb-6">
          <li><strong>Mobile-first design</strong> - Over 70% of creator website traffic now comes from mobile devices</li>
          <li><strong>Fast loading times</strong> - Each second of delay reduces engagement by approximately 12%</li>
          <li><strong>AI-enhanced personalization</strong> - Customized experiences based on visitor behavior and preferences</li>
          <li><strong>Direct commerce capabilities</strong> - Integrated shopping experiences without redirects</li>
          <li><strong>Community spaces</strong> - Built-in forums or discussion areas for audience interaction</li>
          <li><strong>Content accessibility features</strong> - Ensuring your work reaches all audience members regardless of ability</li>
          <li><strong>Environmental considerations</strong> - Low-carbon hosting options and efficient design are increasingly important to audiences</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Getting Started: Practical Steps</h2>
        
        <p class="mb-6">Building your creator website doesn't have to be overwhelming:</p>
        
        <ol class="list-decimal pl-6 space-y-3 mb-6">
          <li>Start by defining your primary website goal (portfolio showcase, content hub, sales platform)</li>
          <li>Secure a domain name that aligns with your creator brand</li>
          <li>Choose between DIY website builders (Wix, Squarespace) or professional development</li>
          <li>Prioritize essential pages first: Home, About, Work/Portfolio, Contact</li>
          <li>Set up analytics to understand visitor behavior</li>
          <li>Implement an email capture system from day one</li>
          <li>Create a content schedule for regular updates</li>
        </ol>
        
        <h2 class="text-2xl font-bold mb-4">The Cost of Not Having a Website</h2>
        
        <p class="mb-6">Consider what you're risking without a personal website:</p>
        
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Missed opportunities with brands who expect professional web presence</li>
          <li>Vulnerability to platform changes and algorithmic shifts</li>
          <li>Limited monetization options</li>
          <li>Difficulty standing out in an increasingly competitive creator economy</li>
          <li>Challenges in building direct, owned audience relationships</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Conclusion: Your Digital Home Base</h2>
        
        <p class="mb-6">In 2025, a personal website isn't just another marketing channel—it's the foundation of a sustainable creator business. While social media platforms remain valuable for discovery and engagement, your website is where casual followers become dedicated fans, where your complete story can be told, and where you build true digital equity.</p>
        
        <p class="mb-6">The most successful creators understand that platform dependency creates vulnerability, while platform diversity creates stability. At the center of that diverse strategy should be the one platform you truly own—your personal website.</p>
        
        <p class="mb-8">The question isn't whether you can afford to build a personal website. In today's creator economy, it's whether you can afford not to.</p>
        
        <div class="border-t border-gray-200 pt-6">
          <p class="italic text-gray-600">About the Author: Karan Dixit is the founder of AINOR, delivering innovative digital solutions including personal websites for creators. With years of experience in web development and digital strategy, he helps creators establish powerful online presences that drive growth and opportunity.</p>
        </div>
      </div>`
    }
    // Other blog posts would be here
  ];
  
  const post = blogPosts.find(post => post.slug === slug);
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!post) {
    return (
      <Section className="py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
            <Link to="/blog">
              <Button>
                Back to Blog
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{post.title} | AINOR</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, AINOR, digital solutions, web development, ${post.title.toLowerCase()}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://myainor.com/blog/${post.slug}`} />
        <meta property="article:published_time" content={new Date(post.date).toISOString()} />
        <meta property="article:author" content={post.author} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://myainor.com/blog/${post.slug}`} />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.image,
            "editor": post.author,
            "genre": post.category,
            "keywords": post.category,
            "url": `https://myainor.com/blog/${post.slug}`,
            "datePublished": new Date(post.date).toISOString(),
            "dateCreated": new Date(post.date).toISOString(),
            "dateModified": new Date(post.date).toISOString(),
            "description": post.excerpt,
            "articleBody": post.content.replace(/<[^>]*>/g, ' ').substring(0, 500) + '...',
            "publisher": {
              "@type": "Organization",
              "name": "AINOR",
              "logo": {
                "@type": "ImageObject",
                "url": "https://myainor.com/logo.PNG"
              }
            },
            "author": {
              "@type": "Person",
              "name": post.author.split(' (')[0]
            }
          })}
        </script>
      </Helmet>
      <Section className="py-16 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              to="/blog" 
              className="flex items-center text-indigo-600 mb-8 hover:text-indigo-800 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              Back to Blog
            </Link>
            
            <article className="max-w-none text-gray-800">
              {/* Render HTML content safely */}
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }} 
                className="blog-content"
              />
            </article>
            
            <div className="mt-16 border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
      
      {/* Related Posts section could be added here */}
      
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to create your own website?</h2>
            <p className="text-lg text-gray-600 mb-8">
              AINOR specializes in building powerful, beautiful websites for creators that convert followers into customers.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BlogPostPage;
