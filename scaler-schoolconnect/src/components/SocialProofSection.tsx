'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const statistics = [
  {
    number: '10,000+',
    label: 'Active Students',
    description: 'Learning and building projects',
    color: 'text-scaler-blue'
  },
  {
    number: '500+',
    label: 'Partner Schools',
    description: 'Trusted educational institutions',
    color: 'text-purple-accent'
  },
  {
    number: '85%',
    label: 'Course Completion',
    description: 'Students finish their programs',
    color: 'text-success-green'
  },
  {
    number: '92%',
    label: 'Parent Satisfaction',
    description: 'Parents recommend our program',
    color: 'text-warning-orange'
  }
]

const testimonials = [
  {
    id: 1,
    type: 'student',
    name: 'Aarav Sharma',
    role: 'Class 11, DPS Gurgaon',
    image: '/images/student-1.jpg',
    quote: "I built my first web application in just 4 weeks! The mentors are amazing and the projects are so practical. I feel ready for any engineering entrance exam now.",
    achievement: 'Built 3 Full-Stack Apps',
    rating: 5
  },
  {
    id: 2,
    type: 'parent',
    name: 'Priya Patel (Mother)',
    role: 'Parent of Riya Patel, Class 12',
    image: '/images/parent-1.jpg',
    quote: "My daughter's confidence in coding has grown tremendously. She's already planning to start her own tech startup after 12th grade. Best investment we made!",
    achievement: 'Daughter got IIT Scholarship',
    rating: 5
  },
  {
    id: 3,
    type: 'student',
    name: 'Arjun Kumar',
    role: 'Class 10, Ryan International',
    image: '/images/student-2.jpg',
    quote: "From zero coding knowledge to building an AI chatbot - this journey has been incredible. The live sessions are interactive and so much fun!",
    achievement: 'Built AI Chatbot',
    rating: 5
  },
  {
    id: 4,
    type: 'parent',
    name: 'Rajesh Gupta (Father)',
    role: 'Parent of Sneha Gupta, Class 11',
    image: '/images/parent-2.jpg',
    quote: "The progress tracking dashboard keeps us informed about our daughter's learning. She's more excited about computer science than ever before.",
    achievement: 'Top 5% in Batch',
    rating: 5
  },
  {
    id: 5,
    type: 'student',
    name: 'Kavya Reddy',
    role: 'Class 12, Amity International',
    image: '/images/student-3.jpg',
    quote: "Getting one-on-one mentorship from industry experts is the best part. They helped me understand complex algorithms so easily. Got selected for Google Code-in!",
    achievement: 'Google Code-in Finalist',
    rating: 5
  }
]

export default function SocialProofSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-gradient">Students</span> & <span className="text-gradient">Parents</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of families already on their coding journey with us
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`stat-number ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="stat-label mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-gray-500 max-w-32 mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Display */}
            <div 
              className="bg-white rounded-2xl shadow-hard p-8 lg:p-12 min-h-[400px] flex items-center"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {/* Testimonial Content */}
                    <div className="lg:col-span-2">
                      {/* Quote Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 ${
                        testimonials[currentTestimonial].type === 'student' 
                          ? 'bg-scaler-blue/10 text-scaler-blue' 
                          : 'bg-purple-accent/10 text-purple-accent'
                      }`}>
                        <Quote className="w-6 h-6" />
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-6 font-medium">
                        "{testimonials[currentTestimonial].quote}"
                      </blockquote>

                      {/* Attribution */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900 text-lg">
                            {testimonials[currentTestimonial].name}
                          </div>
                          <div className="text-gray-600">
                            {testimonials[currentTestimonial].role}
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Profile Section */}
                    <div className="flex flex-col items-center text-center lg:border-l lg:border-gray-100 lg:pl-8">
                      {/* Profile Image Placeholder */}
                      <div className={`w-24 h-24 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold ${
                        testimonials[currentTestimonial].type === 'student'
                          ? 'bg-gradient-to-br from-scaler-blue to-purple-accent'
                          : 'bg-gradient-to-br from-purple-accent to-pink-500'
                      }`}>
                        {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                      </div>

                      {/* Achievement Badge */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        testimonials[currentTestimonial].type === 'student'
                          ? 'bg-scaler-blue/10 text-scaler-blue'
                          : 'bg-purple-accent/10 text-purple-accent'
                      }`}>
                        🏆 {testimonials[currentTestimonial].achievement}
                      </div>

                      {/* Type Badge */}
                      <div className="mt-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          testimonials[currentTestimonial].type === 'student'
                            ? 'bg-blue-50 text-blue-700'
                            : 'bg-purple-50 text-purple-700'
                        }`}>
                          {testimonials[currentTestimonial].type === 'student' ? '🎓 Student' : '👨‍👩‍👧‍👦 Parent'}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-medium rounded-full flex items-center justify-center text-gray-600 hover:text-scaler-blue hover:shadow-hard transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-medium rounded-full flex items-center justify-center text-gray-600 hover:text-scaler-blue hover:shadow-hard transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? 'bg-scaler-blue scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-300'}`}></div>
            <span className="text-xs text-gray-500">
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}