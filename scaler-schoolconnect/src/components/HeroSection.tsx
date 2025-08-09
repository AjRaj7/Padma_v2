'use client'

import React from 'react'
import Link from 'next/link'
import { Play, Star, Users, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const trustLogos = [
  { name: 'DPS', logo: 'DPS' },
  { name: 'Ryan International', logo: 'Ryan' },
  { name: 'Amity', logo: 'Amity' },
  { name: 'Vidyashilp', logo: 'VS' },
  { name: 'GEAR Innovative', logo: 'GEAR' },
]

const floatingElements = [
  { icon: '⚛️', position: 'top-20 left-20', delay: 0 },
  { icon: '🐍', position: 'top-32 right-32', delay: 0.5 },
  { icon: '💎', position: 'top-48 left-1/4', delay: 1 },
  { icon: '🚀', position: 'top-64 right-20', delay: 1.5 },
  { icon: '⚡', position: 'top-80 left-1/3', delay: 2 },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-scaler-blue to-purple-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-purple-accent to-success-green rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-success-green to-scaler-blue rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: element.delay, duration: 0.5 }}
          className={`absolute ${element.position} text-4xl animate-float hidden lg:block`}
          style={{ animationDelay: `${element.delay}s` }}
        >
          {element.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen pt-20 lg:pt-0">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-gradient">Your Code Journey</span>
              <br />
              <span className="text-gray-900">Starts Here</span>
            </h1>

            {/* Supporting Subheadline */}
            <p className="text-xl sm:text-2xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Join <span className="font-semibold text-scaler-blue">10,000+ students</span> building real apps, 
              learning from industry experts, and getting ready for{' '}
              <span className="font-semibold text-purple-accent">tech careers</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link href="/register" className="btn-primary text-lg px-8 py-4 group">
                Start Your Free 7-Day Trial
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="inline-block ml-2"
                >
                  →
                </motion.span>
              </Link>
              
              <button className="btn-secondary text-lg px-8 py-4 group flex items-center justify-center">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Watch How It Works
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-6">
              {/* School Trust Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <p className="text-sm text-gray-500 font-medium">
                  Trusted by 500+ schools across India
                </p>
                <div className="flex items-center space-x-4">
                  {trustLogos.map((school, index) => (
                    <motion.div
                      key={school.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                    >
                      {school.logo}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Rating Display */}
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">4.9/5</span>
                  <span className="text-gray-500">from 2,000+ students</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Illustration Container */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Central Collaborative Scene */}
              <div className="relative bg-white rounded-2xl shadow-hard p-8 border border-gray-100">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex -space-x-3">
                    {/* Student Avatars */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white font-bold text-sm">R</span>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-gray-600 text-xs">+7</span>
                    </div>
                  </div>
                </div>

                {/* Code Window */}
                <div className="bg-dark-navy rounded-lg p-4 font-fira-code text-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-green-400">
                    <div className="mb-1">
                      <span className="text-purple-400">function</span>{' '}
                      <span className="text-yellow-400">buildMyFuture</span>
                      <span className="text-white">() {'{'}</span>
                    </div>
                    <div className="ml-4 mb-1 text-blue-300">
                      return "Success!"
                    </div>
                    <div className="text-white">{'}'}</div>
                  </div>
                </div>

                {/* Project Labels */}
                <div className="flex gap-2 mt-4 flex-wrap justify-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    React App
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    ML Model
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    Mobile App
                  </span>
                </div>
              </div>

              {/* Floating UI Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-scaler-blue to-purple-accent text-white p-3 rounded-xl shadow-medium"
              >
                <Users className="w-6 h-6" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 -left-6 bg-gradient-to-r from-success-green to-emerald-500 text-white p-3 rounded-xl shadow-medium"
              >
                <GraduationCap className="w-6 h-6" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute top-1/2 -left-8 bg-white border-2 border-gray-200 p-2 rounded-lg shadow-soft"
              >
                <div className="text-xs font-medium text-gray-700">Live Session</div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">Now</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute top-1/3 -right-8 bg-white border-2 border-gray-200 p-2 rounded-lg shadow-soft"
              >
                <div className="text-xs font-medium text-gray-700">Achievement</div>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-500">Project Done!</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}