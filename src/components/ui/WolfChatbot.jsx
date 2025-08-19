import React, { useState, useRef, useEffect } from 'react';

const WolfChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "🐺 Hello! I'm Wolf, your AI assistant from AINOR. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const presetQuestions = [
    {
      question: "🚀 What services does AINOR offer?",
      answer: "AINOR specializes in comprehensive digital solutions:\n\n🌐 **Website Design** - Responsive, high-performance websites with SEO optimization\n📱 **Android Applications** - Native mobile apps with Material Design\n🛒 **E-Commerce Solutions** - Robust online stores with secure payments\n💻 **Custom Software** - Tailored solutions for unique business challenges\n� **SEO Services** - Strategic optimization for search visibility\n\nWe help businesses transform with cutting-edge technology!"
    },
    {
      question: "🎯 How to start a project with AINOR?",
      answer: "Getting started is simple:\n\n1️⃣ **Free Consultation** - Schedule a call to discuss your needs\n2️⃣ **Project Planning** - We create a detailed proposal\n3️⃣ **Design & Development** - Our expert team brings your vision to life\n4️⃣ **Testing & Launch** - Quality assurance and go-live support\n5️⃣ **Ongoing Support** - Maintenance and updates\n\n💳 **Payment:** 50% advance, 50% on completion\n📞 Ready to start? Contact our team today!"
    },
    {
      question: "🏆 Why choose AINOR Universe?",
      answer: "What makes us different:\n\n✅ **Proven Experience** - 200+ projects delivered successfully\n👥 **Expert Team** - 30+ skilled professionals\n� **Custom Solutions** - Tailored to your unique needs\n⚡ **Fast Delivery** - Efficient project timelines\n🔒 **Quality Assured** - Rigorous testing and optimization\n💰 **Transparent Pricing** - No hidden costs\n🛠️ **Ongoing Support** - We're here after launch too\n\nYour success is our priority!"
    },
    {
      question: "💰 What are your pricing options?",
      answer: "Our transparent pricing (in Indian Rupees):\n\n**Website Development:**\n• Starter: ₹15,000 (up to 5 pages)\n• Professional: ₹35,000 (up to 10 pages)\n• Enterprise: ₹65,000 (unlimited pages)\n\n**Mobile Apps:**\n• Starter: ₹45,000 (single platform)\n• Professional: ₹85,000 (cross-platform)\n• Enterprise: ₹1,50,000 (advanced features)\n\n**Custom Software:**\n• Starting from ₹35,000\n\n💡 All packages include free consultation!"
    },
    {
      question: "⚡ Which technologies do you use?",
      answer: "Our modern technology stack:\n\n🎨 **Frontend:** React, Vue.js, Angular, Next.js\n⚙️ **Backend:** Node.js, Python, Django, FastAPI\n📱 **Mobile:** React Native, Flutter, Native Android\n🛒 **E-commerce:** WooCommerce, Shopify, Custom solutions\n☁️ **Cloud:** AWS, Google Cloud, Firebase\n📊 **Database:** MongoDB, PostgreSQL, MySQL\n🔍 **SEO:** Advanced optimization techniques\n\nWe choose the best technology for your specific needs!"
    },
    {
      question: "📞 Contact Support",
      action: 'contact',
      icon: '�'
    }
  ];

  const handlePresetQuestion = (preset) => {
    // Add user message
    const userMessage = {
      type: 'user',
      text: preset.question,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);

    if (preset.action === 'contact') {
      setShowContactForm(true);
      return;
    }

    // Add bot response immediately
    setTimeout(() => {
      const botMessage = {
        type: 'bot',
        text: preset.answer,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    
    const contactMessage = {
      type: 'bot',
      text: `✅ Thank you ${contactForm.name}! Your message has been received.\n\n📧 We'll contact you at: ${contactForm.email}\n⏰ Response time: Within 24 hours\n\n💬 Your message: "${contactForm.message}"\n\nOur support team will get back to you soon!`,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, contactMessage]);
    setContactForm({ name: '', email: '', message: '' });
    setShowContactForm(false);
  };

  const formatTimestamp = (timestamp) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-24 left-4 md:bottom-6 md:right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="relative group bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-800 text-white p-3 md:p-4 rounded-full shadow-lg md:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
        >
          {/* Online indicator */}
          <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full animate-bounce border-2 border-white"></div>
          
          {/* Wolf emoji */}
          <span className="text-xl md:text-2xl filter drop-shadow-lg">🐺</span>
          
          {/* Tooltip */}
          <div className="absolute -top-16 left-0 md:right-0 md:left-auto bg-gray-900 text-white px-4 py-2 rounded-xl text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
            <div className="flex items-center space-x-2">
              <span>🐺</span>
              <span className="font-medium">Chat with Wolf AI</span>
            </div>
            <div className="absolute top-full left-4 md:right-4 md:left-auto w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>

          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-24 left-4 md:bottom-6 md:right-6 z-40 w-80 md:w-96 max-w-[calc(100vw-2rem)] h-[550px] md:h-[650px] max-h-[calc(100vh-6rem)]">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 h-full flex flex-col overflow-hidden backdrop-blur-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white p-5 rounded-t-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 backdrop-blur-sm"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl">🐺</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-bold text-xl">Wolf AI</h3>
                <p className="text-indigo-100 text-sm flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  AINOR • Always Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 text-white hover:text-red-300 transition-all duration-200 backdrop-blur-sm"
            >
              <span className="text-xl font-bold">×</span>
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full -ml-10 -mb-10"></div>
        </div>

        {/* Messages - Increased height for better readability */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-br from-gray-50 to-white" style={{ minHeight: '300px' }}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
            >
              <div className={`max-w-xs lg:max-w-md px-5 py-4 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl ${
                message.type === 'user'
                  ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-br-md'
                  : 'bg-white text-gray-800 border border-gray-100 rounded-bl-md'
              }`}>
                {message.type === 'bot' && (
                  <div className="flex items-center space-x-3 mb-3 pb-2 border-b border-gray-100">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-lg">🐺</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-800 text-sm">Wolf AI</span>
                      <div className="text-xs text-gray-500">Assistant</div>
                    </div>
                  </div>
                )}
                <p className="whitespace-pre-line text-sm leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-3 ${
                  message.type === 'user' ? 'text-indigo-200' : 'text-gray-400'
                }`}>
                  {formatTimestamp(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Contact Form - Compact design */}
        {showContactForm && (
          <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-t border-gray-200">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center text-sm">
              <span className="text-lg mr-2">📞</span>
              Contact Support
            </h4>
            <form onSubmit={handleContactSubmit} className="space-y-3">
              <div className="grid grid-cols-1 gap-2">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-xs transition-all duration-200 bg-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-xs transition-all duration-200 bg-white"
                  required
                />
                <textarea
                  placeholder="Tell us how we can help you..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-xs h-16 resize-none transition-all duration-200 bg-white"
                  required
                />
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 text-xs font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  🚀 Send Message
                </button>
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 text-xs font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Preset Questions - Compact design */}
        <div className="p-3 bg-white border-t border-gray-200">
          <h4 className="font-bold text-gray-800 text-xs mb-2 flex items-center">
            <span className="text-sm mr-1">💬</span>
            Quick Questions:
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {presetQuestions.map((preset, index) => (
              <button
                key={index}
                onClick={() => handlePresetQuestion(preset)}
                className={`text-left px-2 py-2 rounded-lg text-xs transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:scale-[1.02] ${
                  preset.action === 'contact'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                    : 'bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-700 hover:from-blue-100 hover:to-indigo-100 border border-indigo-200'
                }`}
              >
                {preset.question}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default WolfChatbot;
