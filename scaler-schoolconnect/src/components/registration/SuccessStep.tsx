'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Calendar, MessageCircle, BookOpen, Users, ArrowRight } from 'lucide-react'
import { StudentData } from './StudentRegistration'

interface SuccessStepProps {
  studentData: StudentData
}

const nextSteps = [
  {
    icon: CheckCircle,
    title: 'Verify Your Email',
    description: 'Check your inbox and click the verification link',
    status: 'pending'
  },
  {
    icon: Calendar,
    title: 'First Live Session',
    description: 'Join your welcome session on Monday, 7 PM',
    status: 'upcoming'
  },
  {
    icon: MessageCircle,
    title: 'Join WhatsApp Group',
    description: 'Connect with your batch mates and mentors',
    status: 'pending'
  },
  {
    icon: BookOpen,
    title: 'Set Up Environment',
    description: 'Install coding tools with our setup guide',
    status: 'pending'
  }
]

const welcomeGifts = [
  '🎁 Free coding cheat sheets',
  '📱 Mobile app access',
  '🏆 Progress tracking dashboard',
  '💬 Direct mentor chat'
]

export default function SuccessStep({ studentData }: SuccessStepProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-success-green/10 via-white to-scaler-blue/10 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Success Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            🎉 Welcome to SchoolConnect!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Congratulations <strong>{studentData.fullName}</strong>! Your coding journey starts now. 
            You're enrolled in <strong className="text-scaler-blue capitalize">{studentData.selectedTrack?.replace('-', ' ')}</strong>.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl shadow-medium p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Next Steps</h2>
            
            <div className="space-y-4">
              {nextSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      step.status === 'pending' ? 'bg-warning-orange/20 text-warning-orange' : 
                      'bg-scaler-blue/20 text-scaler-blue'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                    {step.status === 'pending' && (
                      <div className="w-3 h-3 bg-warning-orange rounded-full animate-pulse"></div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Welcome Package */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-scaler-blue to-purple-accent text-white rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Your Welcome Package 🎁</h2>
            
            <div className="space-y-4 mb-6">
              {welcomeGifts.map((gift, index) => (
                <motion.div
                  key={gift}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>{gift}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white/20 rounded-xl p-4 mb-6">
              <h3 className="font-semibold mb-2">Your Learning Details:</h3>
              <div className="space-y-2 text-sm">
                <div>📚 Track: <span className="font-medium capitalize">{studentData.selectedTrack?.replace('-', ' ')}</span></div>
                <div>🎯 Match: <span className="font-medium">{studentData.trackMatch}%</span></div>
                <div>⭐ Plan: <span className="font-medium">{studentData.isTrialUser ? '7-Day Free Trial' : 'Foundation Plan'}</span></div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <p className="text-blue-100">Ready to build amazing projects?</p>
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white rounded-2xl shadow-medium p-8 text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">What would you like to do first?</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/dashboard"
              className="btn-primary py-4 flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Access Dashboard
            </Link>
            
            <Link 
              href="/community"
              className="btn-secondary py-4 flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              Join Community
            </Link>
            
            <Link 
              href="/"
              className="btn-ghost py-4 flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Explore More
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-gray-600 mb-4">
              Questions? Our team is here to help you succeed!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-success-green" />
                <span>WhatsApp: +91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-scaler-blue" />
                <span>Email: support@scaler.com</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Celebration Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100, x: Math.random() * window.innerWidth, rotate: 0 }}
              animate={{ 
                y: window.innerHeight + 100, 
                rotate: 360 
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                ease: 'linear' 
              }}
              className="absolute text-2xl"
            >
              {['🎉', '🎊', '🌟', '🎁', '🚀'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}