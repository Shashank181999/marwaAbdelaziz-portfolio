'use client';
import { useState } from 'react';
import Header from '../components/Header';
import { db } from '../../lib/firebase'; // Adjust path to your firebase.js
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const docRef = await addDoc(collection(db, 'messagesDemo'), {
      ...formData,
      createdAt: serverTimestamp()
    });
    
    console.log('Document written with ID:', docRef.id); // <-- This prints the doc ID
    console.log('Submitted data:', formData);           // <-- This prints all form values
    
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitStatus(null), 5000);
  } catch (error) {
    console.error('Error sending message:', error);
    setSubmitStatus('error');
    setTimeout(() => setSubmitStatus(null), 5000);
  } finally {
    setIsSubmitting(false);
  }
};


  const contactMethods = [
    {
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: 'Visit Us',
      subtitle: 'Dubai, UAE',
      detail: 'Barsha Heights I-Rise Tower',
      delay: '0ms'
    },
    {
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
      title: 'Email Us',
      subtitle: 'info@mavision.ae',
      detail: '24/7 Support Available',
      delay: '100ms'
    },
    {
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: 'Call Us',
      subtitle: '+971 XX XXX XXXX',
      detail: 'Mon-Fri: 9 AM - 6 PM',
      delay: '200ms'
    },
    {
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      title: 'Connect',
      subtitle: 'LinkedIn Profile',
      detail: 'Professional Network',
      delay: '300ms',
      link: 'https://www.linkedin.com/in/marwaabdelazizofficial/?originalSubdomain=ae'
    }
  ];

  const services = [
    { icon: '🏗️', title: 'Real Estate Projects' },
    { icon: '💼', title: 'Partnerships' },
    { icon: '🎤', title: 'Speaking Events' },
    { icon: '📚', title: 'Consultations' }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 animate-fadeInUp">
            <div className="px-6 py-3 bg-red-900/20 border border-red-900/50 backdrop-blur-sm rounded-full">
              <span className="text-red-500 font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                Available for Projects
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-6 tracking-tighter leading-none animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            LET&apos;S{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700">
                CREATE
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-12 leading-relaxed animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            Transform your vision into reality with expert guidance in real estate development
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '300ms' }}>
            <a href="#form" className="relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-full">
              Start a Conversation
            </a>
            <a href="#methods" className="px-8 py-4 border-2 border-red-900 text-white font-bold text-lg rounded-full backdrop-blur-sm bg-red-900/10">
              Explore Options
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section id="methods" className="relative py-20 px-4 md:px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-7xl text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg">Multiple ways to reach out and start a conversation</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto max-w-7xl">
          {contactMethods.map((method, i) => (
            <div key={i} className="relative" style={{ animationDelay: method.delay }}>
              {method.link ? (
                <a href={method.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative p-8 bg-gradient-to-br from-red-950/40 to-red-900/20 border border-red-900/30 rounded-3xl overflow-hidden backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-red-900/30 flex items-center justify-center mb-6 text-red-500">{method.icon}</div>
                      <h3 className="text-2xl font-black text-white mb-2">{method.title}</h3>
                      <p className="text-red-400 font-semibold mb-1">{method.subtitle}</p>
                      <p className="text-gray-400 text-sm font-light">{method.detail}</p>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="relative p-8 bg-gradient-to-br from-red-950/40 to-red-900/20 border border-red-900/30 rounded-3xl overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-red-900/30 flex items-center justify-center mb-6 text-red-500">{method.icon}</div>
                    <h3 className="text-2xl font-black text-white mb-2">{method.title}</h3>
                    <p className="text-red-400 font-semibold mb-1">{method.subtitle}</p>
                    <p className="text-gray-400 text-sm font-light">{method.detail}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Services Pills */}
      <section className="relative py-16 px-4 md:px-6 bg-zinc-950">
        <div className="container mx-auto max-w-6xl flex flex-wrap justify-center gap-4">
          {services.map((service, i) => (
            <div key={i} className="px-6 py-4 bg-gradient-to-r from-red-950/40 to-red-900/20 border border-red-900/30 rounded-full backdrop-blur-sm">
              <span className="flex items-center gap-3 text-white font-bold">
                <span className="text-2xl">{service.icon}</span>
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="form" className="relative py-20 px-4 md:px-6 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto max-w-5xl">
          <div className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Send a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Message</span>
              </h2>
              <p className="text-gray-400 text-lg">I&apos;ll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-bold mb-2 text-sm uppercase tracking-wider">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-white font-bold mb-2 text-sm uppercase tracking-wider">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500" placeholder="john@example.com" />
                </div>
              </div>

              {/* Phone & Subject */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-bold mb-2 text-sm uppercase tracking-wider">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500" placeholder="+971 XX XXX XXXX" />
                </div>
                <div>
                  <label className="block text-white font-bold mb-2 text-sm uppercase tracking-wider">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500" placeholder="Project Inquiry" />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-bold mb-2 text-sm uppercase tracking-wider">Your Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="6" className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 resize-none" placeholder="Tell me about your project or inquiry..." />
              </div>

              {/* Success Alert */}
              {submitStatus === 'success' && (
                <div className="bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 border-2 border-emerald-500/50 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-emerald-400 font-bold text-lg">Message Sent Successfully!</h4>
                      <p className="text-emerald-300/80 text-sm">Thank you! I&apos;ll get back to you soon.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button type="submit" disabled={isSubmitting} className="w-full px-8 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section - Enhanced UI */}
      <section className="relative py-12 md:py-20 px-4 md:px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
              Visit Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                Office
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">Barsha Heights I-Rise Tower, Dubai</p>
          </div>

          {/* Map Container with Gradient Border */}
          <div className="relative group">
            {/* Gradient Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            
            {/* Map Wrapper */}
            <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
              {/* Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0820837795044!2d55.17820897604394!3d25.09628493632831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sBarsha%20Heights%20(Tecom)%2C%20Rise%20Tower!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="md:h-[500px] lg:h-[600px]"
                title="MA VISION Developments Location - Barsha Heights I-Rise Tower"
              ></iframe>
              
              {/* Overlay Info Card */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-sm">
                <div className="bg-black/90 backdrop-blur-xl border border-red-900/50 rounded-2xl p-4 md:p-6 shadow-2xl">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-red-900/30 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-black text-base md:text-lg mb-1">MA VISION Developments</h3>
                      <p className="text-red-400 text-xs md:text-sm font-semibold mb-1">Barsha Heights I-Rise Tower</p>
                      <p className="text-gray-400 text-xs md:text-sm">Dubai, UAE</p>
                      <a 
                        href="https://maps.google.com/?q=Barsha+Heights+Rise+Tower+Dubai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-red-500 hover:text-red-400 font-bold text-xs md:text-sm transition-colors"
                      >
                        Get Directions
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}