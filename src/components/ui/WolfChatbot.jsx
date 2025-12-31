import React, { useState, useRef, useEffect } from 'react';

const WolfChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "👋 Hi! I'm Wolf, your AINOR assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const presetQuestions = [
    {
      question: "🚀 Services",
      fullQuestion: "What services does AINOR offer?",
      answer: "**AINOR offers comprehensive digital solutions:**\n\n🌐 **Web Development** - Custom websites, React/Next.js apps\n📱 **Mobile Apps** - iOS & Android development\n🛒 **E-Commerce** - Online stores with payment integration\n🎨 **UI/UX Design** - Modern, user-friendly interfaces\n🔒 **Cybersecurity** - Protection & threat analysis\n📈 **SEO Services** - Search engine optimization\n\n💼 We're a **Government recognized MSME** delivering quality solutions!"
    },
    {
      question: "💰 Pricing",
      fullQuestion: "What are your pricing options?",
      answer: "**Our Transparent Pricing (INR):**\n\n**🌐 Websites:**\n• Starter: ₹15,000 (5 pages)\n• Professional: ₹35,000 (10 pages)\n• Enterprise: ₹65,000+ (Custom)\n\n**📱 Mobile Apps:**\n• Basic: ₹45,000\n• Cross-platform: ₹85,000\n• Enterprise: ₹1,50,000+\n\n**🎯 Custom Software:** From ₹35,000\n\n✅ Free consultation included!\n💳 50% advance, 50% on delivery"
    },
    {
      question: "⚡ Tech Stack",
      fullQuestion: "What technologies do you use?",
      answer: "**Our Modern Tech Stack:**\n\n🎨 **Frontend:** React, Next.js, Vue.js, Angular\n⚙️ **Backend:** Node.js, Python, Django, FastAPI\n📱 **Mobile:** React Native, Flutter\n☁️ **Cloud:** AWS, Google Cloud, Firebase\n📊 **Database:** MongoDB, PostgreSQL, MySQL\n🔐 **Security:** SSL, OAuth, Encryption\n\nWe choose the best tech for your specific needs!"
    },
    {
      question: "🎯 Get Started",
      fullQuestion: "How do I start a project with AINOR?",
      answer: "**Starting is easy! Here's how:**\n\n1️⃣ **Free Consultation** - Discuss your needs\n2️⃣ **Proposal** - We create a detailed plan\n3️⃣ **Development** - Our team builds your solution\n4️⃣ **Testing** - Quality assurance\n5️⃣ **Launch & Support** - Go live + maintenance\n\n📞 **Ready?** Click 'Contact Us' below!\n⏰ Response within 24 hours"
    },
    {
      question: "🏆 Why AINOR",
      fullQuestion: "Why should I choose AINOR?",
      answer: "**Why clients choose AINOR:**\n\n✅ **MSME Registered** - Govt. of India recognized\n👨‍💻 **Expert Team** - Skilled developers & designers\n⚡ **Fast Delivery** - On-time project completion\n🔒 **Secure** - Dedicated cybersecurity\n💰 **Transparent** - No hidden costs\n🛠️ **Support** - Post-launch maintenance\n🌍 **Global** - Clients in India & Europe\n\n📊 20+ projects | 100% satisfaction rate"
    },
    {
      question: "📞 Contact Us",
      action: 'contact',
      fullQuestion: "I want to contact support"
    }
  ];

  const handlePresetQuestion = (preset) => {
    const userMessage = {
      type: 'user',
      text: preset.fullQuestion || preset.question,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);

    if (preset.action === 'contact') {
      setShowContactForm(true);
      return;
    }

    setTimeout(() => {
      const botMessage = {
        type: 'bot',
        text: preset.answer,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 400);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    
    const contactMessage = {
      type: 'bot',
      text: `✅ **Thank you, ${contactForm.name}!**\n\nYour message has been received.\n\n📧 We'll respond to: ${contactForm.email}\n⏰ Expected response: Within 24 hours\n\nOur team will get back to you shortly!`,
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

  const formatMessageText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br />');
  };

  // Closed state - floating button
  if (!isOpen) {
    return (
      <div className="fixed bottom-20 left-4 md:bottom-6 md:left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="relative group bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          aria-label="Open chat"
        >
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
          <span className="text-2xl">🐺</span>
          <div className="absolute -top-12 left-0 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Chat with us
            <div className="absolute top-full left-4 w-2 h-2 bg-gray-900 transform rotate-45 -mt-1"></div>
          </div>
        </button>
      </div>
    );
  }

  // Open state - chat window
  return (
    <div className="fixed bottom-20 left-4 md:bottom-6 md:left-6 z-40 w-[340px] md:w-[380px] max-w-[calc(100vw-2rem)]">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
        style={{ height: isMinimized ? 'auto' : 'min(560px, calc(100vh - 120px))' }}
      >
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-xl">🐺</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-indigo-600"></div>
            </div>
            <div>
              <h3 className="font-semibold text-base">Wolf Assistant</h3>
              <p className="text-indigo-200 text-xs">AINOR • Online</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label={isMinimized ? "Expand" : "Minimize"}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMinimized ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                )}
              </svg>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] ${
                    message.type === 'user'
                      ? 'bg-indigo-600 text-white rounded-2xl rounded-br-md'
                      : 'bg-white text-gray-800 rounded-2xl rounded-bl-md border border-gray-100 shadow-sm'
                  } px-4 py-3`}>
                    {message.type === 'bot' && (
                      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100">
                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-sm">🐺</span>
                        </div>
                        <span className="text-xs font-medium text-gray-500">Wolf</span>
                      </div>
                    )}
                    <div 
                      className="text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formatMessageText(message.text) }}
                    />
                    <p className={`text-xs mt-2 ${
                      message.type === 'user' ? 'text-indigo-200' : 'text-gray-400'
                    }`}>
                      {formatTimestamp(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Contact Form */}
            {showContactForm && (
              <div className="p-4 bg-gray-50 border-t border-gray-100 flex-shrink-0">
                <h4 className="font-semibold text-gray-800 text-sm mb-3 flex items-center gap-2">
                  <span>📬</span> Send us a message
                </h4>
                <form onSubmit={handleContactSubmit} className="space-y-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
                    required
                  />
                  <textarea
                    placeholder="How can we help?"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm h-20 resize-none bg-white"
                    required
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 bg-indigo-600 text-white py-2.5 px-4 rounded-xl hover:bg-indigo-700 transition-colors text-sm font-medium"
                    >
                      Send Message
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowContactForm(false)}
                      className="px-4 py-2.5 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Quick Actions */}
            <div className="p-3 bg-white border-t border-gray-100 flex-shrink-0">
              <p className="text-xs text-gray-500 mb-2 px-1">Quick questions:</p>
              <div className="grid grid-cols-3 gap-2">
                {presetQuestions.slice(0, 5).map((preset, index) => (
                  <button
                    key={index}
                    onClick={() => handlePresetQuestion(preset)}
                    className="text-center px-2 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {preset.question}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handlePresetQuestion(presetQuestions[5])}
                className="w-full mt-2 text-center px-2 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 bg-green-500 text-white hover:bg-green-600"
              >
                📞 Contact Us
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WolfChatbot;
