'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, MessageCircle, Shield, Clock, Users, Star, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const trustSignals = [
  {
    icon: Shield,
    text: 'SSL Secured & GDPR Compliant'
  },
  {
    icon: Clock,
    text: '24/7 Customer Support'
  },
  {
    icon: Users,
    text: 'Join 10,000+ Happy Students'
  }
]

const urgencyIndicators = [
  {
    icon: Zap,
    text: 'Limited Early Bird Pricing',
    subtext: 'Save up to 40% off regular prices'
  },
  {
    icon: Calendar,
    text: 'Next Batch Starts Soon',
    subtext: 'Seats filling fast for January cohort'
  },
  {
    icon: Star,
    text: 'Exclusive Bonuses',
    subtext: 'Free career counseling + portfolio review'
  }
]

const socialProofNumbers = [
  { number: '10,000+', label: 'Students Enrolled', color: 'text-scaler-blue' },
  { number: '500+', label: 'School Partners', color: 'text-purple-accent' },
  { number: '4.9★', label: 'Average Rating', color: 'text-warning-orange' },
  { number: '92%', label: 'Success Rate', color: 'text-success-green' }
]

const faqItems = [
  {
    question: 'Is coding experience required?',
    answer: 'No! Our courses are designed for complete beginners. We start from the basics.'
  },
  {
    question: 'What if I don\'t like the program?',
    answer: '30-day money-back guarantee. Full refund if you\'re not completely satisfied.'
  },
  {
    question: 'How much time do I need to invest?',
    answer: '3-4 hours per week for optimal results. Flexible scheduling around school hours.'
  }
]

export default function FinalConversionSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-scaler-blue relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-accent to-pink-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-success-green to-cyan-400 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-warning-orange to-yellow-400 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 text-blue-300/20 text-6xl animate-float">{'<>'}</div>
        <div className="absolute top-40 right-32 text-green-300/20 text-4xl animate-float" style={{ animationDelay: '1s' }}>⚛️</div>
        <div className="absolute bottom-32 left-1/3 text-purple-300/20 text-5xl animate-float" style={{ animationDelay: '2s' }}>{'{ }'}</div>
        <div className="absolute bottom-20 right-20 text-yellow-300/20 text-4xl animate-float" style={{ animationDelay: '3s' }}>🚀</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Urgency Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {urgencyIndicators.map((indicator, index) => {
            const IconComponent = indicator.icon
            return (
              <div key={indicator.text} className="text-center text-white">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-3">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="font-semibold mb-1">{indicator.text}</div>
                <div className="text-gray-300 text-sm">{indicator.subtext}</div>
              </div>
            )
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Conversion Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ready to Start Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Coding Journey?
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of students already building their tech careers. 
              Transform from beginner to building production-ready applications in just 8 weeks.
            </p>

            {/* Social Proof Numbers */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {socialProofNumbers.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-2xl lg:text-3xl font-bold mb-1 ${item.color}`}>
                    {item.number}
                  </div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Main CTA */}
            <div className="space-y-4 mb-8">
              <Link 
                href="/register" 
                className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-scaler-blue to-purple-accent hover:from-blue-600 hover:to-purple-600 text-white text-xl font-bold px-12 py-5 rounded-2xl shadow-hard hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
              >
                Start Your Free 7-Day Trial
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <div className="text-center sm:text-left">
                <div className="text-gray-300 text-sm mb-2">
                  No credit card required • Cancel anytime
                </div>
                <div className="text-cyan-400 text-sm font-medium">
                  ✨ Instant access to all course materials
                </div>
              </div>
            </div>

            {/* Secondary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link 
                href="/demo" 
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Demo Call
              </Link>
              
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Talk to Admissions Team
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              {trustSignals.map((signal, index) => {
                const IconComponent = signal.icon
                return (
                  <div key={signal.text} className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4 text-green-400" />
                    <span>{signal.text}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column - FAQ & Additional Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Quick FAQ */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Quick Questions?
              </h3>
              
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={item.question}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <h4 className="font-semibold text-white mb-2">
                      {item.question}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <Link 
                  href="/faq" 
                  className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center gap-2 transition-colors duration-200"
                >
                  View all frequently asked questions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Student Testimonial Quote */}
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <div className="text-6xl text-purple-300/50 mb-4">"</div>
              <blockquote className="text-lg text-white leading-relaxed mb-4">
                SchoolConnect transformed my understanding of coding. I went from zero to building my own startup app in just 6 months!
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                  AS
                </div>
                <div>
                  <div className="text-white font-semibold">Aditi Singh</div>
                  <div className="text-purple-300 text-sm">Class 12, DPS Mumbai</div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="font-semibold text-white mb-4">Need Help Deciding?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <MessageCircle className="w-4 h-4 text-green-400" />
                  <span>WhatsApp: +91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>Free counseling calls available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-12 border-t border-white/20"
        >
          <div className="text-center">
            <p className="text-gray-300 mb-6 text-lg">
              🎉 <strong className="text-white">Special Launch Offer:</strong> Save 40% + Get Free Career Counseling Session
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/register" 
                className="btn-primary text-xl px-10 py-4 shadow-hard hover:shadow-2xl"
              >
                Claim Your Spot Now
              </Link>
              
              <div className="text-sm text-gray-400">
                ⏰ Offer ends in: <span className="text-warning-orange font-bold">3 days</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}