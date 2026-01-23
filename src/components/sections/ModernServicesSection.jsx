import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaPalette, FaRobot, FaShoppingCart, FaSearch, FaArrowRight } from 'react-icons/fa';
import TiltCard from '../ui/TiltCard';
import { FadeUp, StaggerContainer, StaggerItem, DrawLine, MagneticButton } from '../ui/AnimationComponents';
import { SpotlightCard } from '../ui/ScrollAnimations';

const services = [
  {
    id: 1,
    icon: <FaLaptopCode className="text-[28px]" />,
    title: 'Web Development',
    slug: 'website-design-development',
    description: 'Scalable, high-performance websites tailored to your brand using Next.js & React.',
    color: 'blue',
    hoverColor: 'blue-100',
  },
  {
    id: 2,
    icon: <FaMobileAlt className="text-[28px]" />,
    title: 'Mobile Apps',
    slug: 'mobile-app-development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    color: 'purple',
    hoverColor: 'purple-100',
  },
  {
    id: 3,
    icon: <FaPalette className="text-[28px]" />,
    title: 'UI/UX Design',
    slug: 'website-design-development',
    description: 'Intuitive, user-centric interfaces with premium aesthetics and smooth flows.',
    color: 'pink',
    hoverColor: 'pink-100',
  },
  {
    id: 4,
    icon: <FaRobot className="text-[28px]" />,
    title: 'AI & Automation',
    slug: 'ai-solutions-india',
    description: 'Smart automation workflows and AI integration to optimize your operations.',
    color: 'green',
    hoverColor: 'green-100',
  },
  {
    id: 5,
    icon: <FaShoppingCart className="text-[28px]" />,
    title: 'E-Commerce',
    slug: 'ecommerce-website-development',
    description: 'Robust online stores that drive conversions with secure transactions.',
    color: 'orange',
    hoverColor: 'orange-100',
  },
  {
    id: 6,
    icon: <FaSearch className="text-[28px]" />,
    title: 'SEO Services',
    slug: 'seo-services-india',
    description: 'Strategic optimization to improve visibility and drive organic traffic.',
    color: 'indigo',
    hoverColor: 'indigo-100',
  },
];

const colorMap = {
  blue: { bg: 'bg-blue-50', text: 'text-primary' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-600' },
  green: { bg: 'bg-green-50', text: 'text-green-600' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600' },
};

const ModernServicesSection = () => {
  return (
    <section className="pt-10" id="services">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 px-2">
        <FadeUp>
          <h2 className="text-3xl font-bold tracking-tight">Our Expertise</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-gray-500 max-w-md text-left md:text-right mt-2 md:mt-0">
            Comprehensive digital solutions. One subscription.
          </p>
        </FadeUp>
      </div>

      {/* Decorative Line */}
      <DrawLine className="mb-8" />

      {/* Services Grid */}
      <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <StaggerItem key={service.id}>
            <div 
              onClick={() => window.location.href = `/service/${service.slug}`}
              className="bg-white p-6 rounded-2xl shadow-soft flex flex-col gap-4 h-full border border-gray-50 cursor-pointer hover:shadow-lg hover:border-gray-200 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className={`w-12 h-12 rounded-xl ${colorMap[service.color].bg} ${colorMap[service.color].text} flex items-center justify-center`}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-normal mb-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn More <FaArrowRight className="text-xs" />
                </span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* View All Services CTA */}
      <FadeUp delay={0.4} className="flex justify-center mt-8">
        <MagneticButton strength={0.3}>
          <Link
            to="/all-services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors"
          >
            <span>View All Services</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </MagneticButton>
      </FadeUp>
    </section>
  );
};

export default ModernServicesSection;
