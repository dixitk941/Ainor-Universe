import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import AnimatedImage from '../components/ui/AnimatedImage';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Blog post data (user's original blogs, using previous images)
  const blogPosts = [
    {
      id: 7,
      slug: "influencer-website-case-study",
      title: "How an Instagram Influencer Got 3x More Leads With a Website",
      excerpt: "Learn how a beauty influencer transformed her business by moving beyond Instagram's limitations with a strategic website that tripled her lead generation and sponsorship opportunities.",
      date: "July 4, 2025",
      author: "Karan Dixit (dixitk941)",
      category: "personal-branding",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
      content: `<div class="blog-content">
        <h1 class="text-3xl font-bold mb-6">How an Instagram Influencer Got 3x More Leads With a Website</h1>
        
        <div class="mb-4 flex items-center text-gray-600">
          <span>July 4, 2025</span>
          <span class="mx-2">•</span>
          <span>6 min read</span>
        </div>
        
        <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000" alt="Social media influencer with website on multiple devices" class="w-full h-64 object-cover rounded-lg mb-8" />
        
        <p class="mb-6">In today's creator economy, having a substantial social media following is valuable, but it's just the beginning. This case study explores how Sarah Chen, a beauty and lifestyle influencer with 175,000 Instagram followers, transformed her business by launching a strategic website that tripled her lead generation.</p>
        
        <div class="bg-indigo-50 p-6 rounded-lg mb-8">
          <h3 class="text-xl font-semibold mb-2">Key Results:</h3>
          <ul class="list-disc pl-6 space-y-1">
            <li>3x increase in qualified brand partnership inquiries</li>
            <li>68% higher average deal value for sponsored content</li>
            <li>1,200+ email subscribers in first month</li>
            <li>42% conversion rate on digital makeup tutorial templates</li>
            <li>2.5x more press and interview opportunities</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold mb-4">The Challenge: Instagram's Limitations</h2>
        
        <p class="mb-6">Despite her impressive following and engagement rates, Sarah faced significant challenges that limited her growth:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-gray-50 p-5 rounded-lg">
            <h3 class="text-lg font-semibold mb-3 text-red-600">Before: Instagram-Only Presence</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Limited to a single link in bio</li>
              <li>Followers had to DM for collaboration details</li>
              <li>No way to showcase her full portfolio</li>
              <li>Difficult to present her service packages</li>
              <li>Brand kit was a PDF that quickly became outdated</li>
              <li>No email capture or retargeting capabilities</li>
              <li>Algorithm changes regularly affected reach</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-5 rounded-lg">
            <h3 class="text-lg font-semibold mb-3 text-green-600">After: Strategic Website Implementation</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Comprehensive media kit and portfolio</li>
              <li>Direct booking system for consultations</li>
              <li>Automated lead qualification forms</li>
              <li>WhatsApp integration for instant communication</li>
              <li>Digital product storefront</li>
              <li>Email newsletter with exclusive content</li>
              <li>SEO-optimized content hub</li>
            </ul>
          </div>
        </div>
        
        <blockquote class="border-l-4 border-indigo-500 pl-4 italic text-gray-700 my-8">
          "I was initially hesitant to invest in a website because I thought Instagram was enough. Now I realize my website is the foundation of my business, not just a complement to social media. It's completely transformed how brands perceive me and how I connect with my audience." — Sarah Chen
        </blockquote>
        
        <h2 class="text-2xl font-bold mb-4">The Strategic Approach</h2>
        
        <p class="mb-6">Working with AINOR, Sarah developed a three-phase strategy:</p>
        
        <h3 class="text-xl font-semibold mb-3">1. Foundation: Brand-Focused Portfolio</h3>
        
        <p class="mb-6">The first phase focused on creating a professional presence that would appeal to brands:</p>
        
        <div class="mb-6">
          <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1000" alt="Professional portfolio website mockup" class="w-full rounded-lg mb-3" />
          <p class="text-sm text-gray-500 text-center">Sarah's portfolio page showcasing her previous brand collaborations</p>
        </div>
        
        <ul class="list-disc pl-6 mb-6">
          <li><strong>Dynamic portfolio</strong> — Case studies of previous brand collaborations with metrics and results</li>
          <li><strong>Media kit</strong> — Interactive presentation of audience demographics, engagement rates, and content specialties</li>
          <li><strong>Collaboration packages</strong> — Clear pricing and deliverables for different partnership options</li>
          <li><strong>Testimonials</strong> — Social proof from previous brand partners</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">2. Connection: Lead Generation Systems</h3>
        
        <p class="mb-6">The second phase implemented multiple touchpoints for capturing and qualifying leads:</p>
        
        <div class="mb-6">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Lead capture form and WhatsApp integration" class="w-full rounded-lg mb-3" />
          <p class="text-sm text-gray-500 text-center">The integrated WhatsApp Business platform streamlined communications</p>
        </div>
        
        <ul class="list-disc pl-6 mb-6">
          <li><strong>Brand inquiry form</strong> — Custom form that pre-qualifies potential partners based on budget, timeline, and campaign goals</li>
          <li><strong>WhatsApp Business integration</strong> — Direct connection to Sarah's business WhatsApp for immediate communication</li>
          <li><strong>Appointment scheduler</strong> — Automated system for booking discovery calls</li>
          <li><strong>Lead magnet</strong> — "The Influencer Collaboration Guide" PDF offered in exchange for email signup</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">3. Monetization: Multiple Revenue Streams</h3>
        
        <p class="mb-6">The final phase expanded Sarah's business model beyond brand deals:</p>
        
        <div class="mb-6">
          <img src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?auto=format&fit=crop&q=80&w=1000" alt="Digital product storefront" class="w-full rounded-lg mb-3" />
          <p class="text-sm text-gray-500 text-center">Sarah's digital product storefront featuring makeup tutorials and templates</p>
        </div>
        
        <ul class="list-disc pl-6 mb-6">
          <li><strong>Digital product store</strong> — Makeup tutorial templates, photo presets, and beauty guides</li>
          <li><strong>Membership area</strong> — Exclusive content for monthly subscribers</li>
          <li><strong>Affiliate marketing</strong> — Organized product recommendations with tracking links</li>
          <li><strong>Virtual masterclass registration</strong> — Landing pages for her online classes</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">The Technology Stack</h2>
        
        <p class="mb-6">Sarah's website was built using a modern, scalable tech stack designed for performance and flexibility:</p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-white p-4 rounded-lg text-center shadow-sm">
            <div class="text-indigo-600 font-bold mb-2">Core Platform</div>
            <div>React.js + Next.js</div>
          </div>
          <div class="bg-white p-4 rounded-lg text-center shadow-sm">
            <div class="text-indigo-600 font-bold mb-2">Design System</div>
            <div>Tailwind CSS</div>
          </div>
          <div class="bg-white p-4 rounded-lg text-center shadow-sm">
            <div class="text-indigo-600 font-bold mb-2">CMS</div>
            <div>Headless Strapi</div>
          </div>
          <div class="bg-white p-4 rounded-lg text-center shadow-sm">
            <div class="text-indigo-600 font-bold mb-2">E-Commerce</div>
            <div>Stripe + Snipcart</div>
          </div>
        </div>
        
        <p class="mb-6">Additional tools integrated into the website:</p>
        
        <ul class="list-disc pl-6 mb-8">
          <li><strong>Chatbot</strong> — AI-powered assistant to answer common questions and direct visitors</li>
          <li><strong>Analytics</strong> — Custom dashboard showing traffic sources, conversion rates, and user behavior</li>
          <li><strong>Email marketing</strong> — ConvertKit integration with automated workflows</li>
          <li><strong>SEO toolkit</strong> — Content optimization and performance tracking</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Implementation Timeline</h2>
        
        <div class="bg-gray-50 p-6 rounded-lg mb-8">
          <ol class="list-decimal pl-6 space-y-3">
            <li><strong>Week 1-2:</strong> Strategy, wireframing, and brand alignment</li>
            <li><strong>Week 3-4:</strong> Design and development of core pages</li>
            <li><strong>Week 5:</strong> Integration of lead generation systems</li>
            <li><strong>Week 6:</strong> E-commerce setup and product uploads</li>
            <li><strong>Week 7:</strong> Testing, optimization, and analytics configuration</li>
            <li><strong>Week 8:</strong> Launch and promotion campaign</li>
          </ol>
        </div>
        
        <h2 class="text-2xl font-bold mb-4">Key Insights and Learnings</h2>
        
        <h3 class="text-xl font-semibold mb-3">What Made the Difference</h3>
        
        <div class="mb-8">
          <p class="mb-4">Several factors contributed to the exceptional results:</p>
          
          <ol class="list-decimal pl-6 space-y-2">
            <li><strong>Strategic approach vs. template site</strong> — Rather than using a generic template, Sarah's website was strategically designed around her business goals and audience needs.</li>
            <li><strong>Conversion-focused design</strong> — Every page was optimized with clear calls-to-action and intuitive user journeys.</li>
            <li><strong>Brand positioning</strong> — The professional presentation elevated her from "Instagram influencer" to "beauty content creator and consultant."</li>
            <li><strong>Integrated systems</strong> — The seamless connection between her website, WhatsApp, email marketing, and e-commerce created an efficient business ecosystem.</li>
            <li><strong>Data collection</strong> — Valuable insights about her audience helped refine her content strategy and improve brand pitches.</li>
          </ol>
        </div>
        
        <h2 class="text-2xl font-bold mb-4">Results in Detail</h2>
        
        <div class="overflow-x-auto mb-8">
          <table class="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th class="py-3 px-4 bg-gray-50 text-left">Metric</th>
                <th class="py-3 px-4 bg-gray-50 text-left">Before Website</th>
                <th class="py-3 px-4 bg-gray-50 text-left">After Website (3 Months)</th>
                <th class="py-3 px-4 bg-gray-50 text-left">Improvement</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-200">
                <td class="py-3 px-4 font-medium">Monthly Brand Inquiries</td>
                <td class="py-3 px-4">12-15</td>
                <td class="py-3 px-4">38-45</td>
                <td class="py-3 px-4 text-green-600">+200%</td>
              </tr>
              <tr class="border-t border-gray-200">
                <td class="py-3 px-4 font-medium">Average Deal Value</td>
                <td class="py-3 px-4">$1,200</td>
                <td class="py-3 px-4">$2,100</td>
                <td class="py-3 px-4 text-green-600">+68%</td>
              </tr>
              <tr class="border-t border-gray-200">
                <td class="py-3 px-4 font-medium">Conversion to Paid Deals</td>
                <td class="py-3 px-4">20%</td>
                <td class="py-3 px-4">35%</td>
                <td class="py-3 px-4 text-green-600">+75%</td>
              </tr>
              <tr class="border-t border-gray-200">
                <td class="py-3 px-4 font-medium">Direct Product Revenue</td>
                <td class="py-3 px-4">$0</td>
                <td class="py-3 px-4">$4,500/month</td>
                <td class="py-3 px-4 text-green-600">New Revenue Stream</td>
              </tr>
              <tr class="border-t border-gray-200">
                <td class="py-3 px-4 font-medium">Email Subscribers</td>
                <td class="py-3 px-4">0</td>
                <td class="py-3 px-4">3,800</td>
                <td class="py-3 px-4 text-green-600">New Asset</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 class="text-2xl font-bold mb-4">Conclusion: Beyond Social Media</h2>
        
        <p class="mb-6">Sarah's case demonstrates that for influencers looking to build sustainable businesses, relying solely on social media platforms is a limiting strategy. A strategically designed website serves as both a professional anchor and a powerful business tool that can:</p>
        
        <ul class="list-disc pl-6 mb-6">
          <li>Transform how brands perceive and value your work</li>
          <li>Create multiple channels for lead generation</li>
          <li>Establish direct connections with your audience</li>
          <li>Enable diverse revenue streams beyond sponsored content</li>
          <li>Protect your business from algorithm changes and platform policies</li>
        </ul>
        
        <p class="mb-8">While social media remains important for discovery and engagement, Sarah's website has become the foundation of her business operations and the key driver of her revenue growth.</p>
        
        <div class="bg-indigo-50 p-6 rounded-lg mb-6">
          <h3 class="text-xl font-semibold mb-3">Want similar results for your influence business?</h3>
          <p class="mb-4">AINOR specializes in creating strategic websites for creators and influencers that generate leads and revenue, not just look pretty. Contact us to discuss how we can help transform your social media following into a thriving business.</p>
          <a href="/contact" class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">Schedule a Strategy Call</a>
        </div>
        
        <div class="border-t border-gray-200 pt-6">
          <p class="italic text-gray-600">About the Author: Karan Dixit is the founder of AINOR, delivering innovative digital solutions including strategic websites for influencers and creators. With years of experience in web development and digital strategy, he helps creators establish powerful online presences that drive growth and opportunity.</p>
        </div>
      </div>`,
      featured: true
    },
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
      </div>`,
      featured: false
    },
    {
  id: 8,
  slug: "future-of-web-development-2025",
  title: "The Future of Web Development: Trends Shaping 2025",
  excerpt: "Explore the cutting-edge technologies and methodologies that are revolutionizing web development in 2025, from AI-powered coding assistants to advanced frontend frameworks.",
  date: "August 1, 2025",
  author: "Karan Dixit (dixitk941)",
  category: "web-development",
  readTime: "9 min read",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  content: `<div class="blog-content">
    <h1 class="text-3xl font-bold mb-6">The Future of Web Development: Trends Shaping 2025</h1>
    
    <div class="mb-4 flex items-center text-gray-600">
      <span>August 1, 2025</span>
      <span class="mx-2">•</span>
      <span>9 min read</span>
    </div>
    
    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" alt="Future of web development" class="w-full h-64 object-cover rounded-lg mb-8" />
    
    <p class="mb-6">As we progress through 2025, the web development landscape continues to evolve at an unprecedented pace. New technologies, frameworks, and methodologies are reshaping how we build digital experiences.</p>
    
    <h2 class="text-2xl font-bold mb-4">Key Trends Defining 2025</h2>
    
    <h3 class="text-xl font-semibold mb-3">1. AI-Powered Development Tools</h3>
    <p class="mb-6">Artificial intelligence has become an integral part of the development workflow, with tools like GitHub Copilot, Cursor, and AI-powered testing frameworks revolutionizing how we write and maintain code.</p>
    
    <!-- Add more content sections as needed -->
    
  </div>`,
  featured: false
}
,
    {
      id: 2,
      slug: "reflecting-on-my-2024-journey",
      title: "Reflecting on My 2024 Journey: A Year of Growth, Challenges, and Innovation",
      excerpt: "2024 has been a year of transformation for me, both personally and professionally. From diving into new technologies and building multiple projects to pushing the boundaries of my potential, this year has been a rollercoaster of learning and growth.",
      date: "Jan 1, 2025",
      author: "Karan Dixit (dixitk941)",
      category: "reflection",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=1000",
      url: "https://dixitk941.blogspot.com/2025/01/reflecting-on-my-2024-journey-year-of.html",
    },
    {
      id: 3,
      slug: "crafting-ultimate-github-portfolio-developers-guide",
      title: "Crafting the Ultimate GitHub Portfolio: A Developer's Guide",
      excerpt: "Your GitHub profile is your most important developer asset, acting as your living portfolio. In this guide, I cover the best ways to showcase your work, organize your projects, and impress potential employers. Is your GitHub ready to stand out?",
      date: "Oct 10, 2024",
      author: "Karan Dixit (dixitk941)",
      category: "github",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&q=80&w=1000",
      url: "https://dixitk941.blogspot.com/2024/10/crafting-ultimate-github-portfolio.html"
    },
    {
      id: 4,
      slug: "demystifying-ai-and-machine-learning-for-beginners",
      title: "Demystifying AI and Machine Learning for Beginners",
      excerpt: "Explore the core concepts, techniques, and future of AI. Ready to dive into the world of intelligent systems?",
      date: "Sep 20, 2024",
      author: "Karan Dixit (dixitk941)",
      category: "ai",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1000",
      url: "https://dixitk941.blogspot.com/2024/09/demystifying-ai-and-machine-learning.html"
    },
    {
      id: 5,
      slug: "unlocking-2024-programming-languages-to-watch",
      title: "Unlocking 2024: Programming Languages to Watch",
      excerpt: "I break down the languages that are set to dominate the programming world in 2024. What will you be coding in next?",
      date: "Sep 10, 2024",
      author: "Karan Dixit (dixitk941)",
      category: "languages",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
      url: "https://dixitk941.blogspot.com/2024/09/unlocking-2024-programming-languages.html"
    },
    {
      id: 6,
      slug: "introducing-ainor-revolutionary-ai-assistant",
      title: "Introducing A.I.N.O.R: A Revolutionary AI Assistant by NeoCodeNex",
      excerpt: "Discover how A.I.N.O.R is set to revolutionize the way we interact with technology. What will your next conversation with AI be like?",
      date: "Sep 1, 2024",
      author: "Karan Dixit (dixitk941)",
      category: "ai",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000",
      url: "https://dixitk941.blogspot.com/2024/09/introducing-ainor-revolutionary-ai.html"
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
    { id: 'personal-branding', name: 'Personal Branding' },
    { id: 'reflection', name: 'Reflections' },
    { id: 'github', name: 'GitHub & Portfolio' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'languages', name: 'Programming Languages' }
  ];
  return (
    <>
      <Helmet>
        <title>Blog | AINOR - Digital Solutions & Web Development</title>
        <meta name="description" content="Explore the latest insights on web development, AI, digital solutions, and technology trends from AINOR's expert team." />
        <meta name="keywords" content="AINOR blog, web development blog, AI insights, digital solutions, technology blog" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog | AINOR - Digital Solutions & Web Development" />
        <meta property="og:description" content="Explore the latest insights on web development, AI, digital solutions, and technology trends from AINOR's expert team." />
        <meta property="og:image" content="https://myainor.com/logo.PNG" />
        <meta property="og:url" content="https://myainor.com/blog" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | AINOR - Digital Solutions & Web Development" />
        <meta name="twitter:description" content="Explore the latest insights on web development, AI, digital solutions, and technology trends from AINOR's expert team." />
        <meta name="twitter:image" content="https://myainor.com/logo.PNG" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://myainor.com/blog" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "AINOR Blog",
            "description": "Explore the latest insights on web development, AI, digital solutions, and technology trends from AINOR's expert team.",
            "url": "https://myainor.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "AINOR",
              "logo": {
                "@type": "ImageObject",
                "url": "https://myainor.com/logo.PNG"
              }
            }
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <Section className="pb-16 bg-gradient-to-b from-gray-50 to-white">
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
                    <Button href={`/blog/${featuredPost.slug}`} variant="outline">
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
                      {post.url ? (
                        <a 
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors"
                        >
                          Read More →
                        </a>
                      ) : (
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors"
                        >
                          Read Full Post →
                        </Link>
                      )}
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
    </>
  );
};

export default BlogPage;
