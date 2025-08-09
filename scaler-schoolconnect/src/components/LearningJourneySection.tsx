'use client'

import React from 'react'
import Link from 'next/link'
import { Target, Video, Code, Award, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const journeySteps = [
  {
    step: '01',
    icon: Target,
    title: 'Choose Your Track',
    description: 'Select from Web Dev, AI/ML, Mobile Apps, or Cybersecurity',
    details: [
      'Take our skills assessment quiz',
      'Get personalized track recommendations',
      'Preview curriculum and career paths',
      'Start with beginner-friendly modules'
    ],
    color: 'from-blue-500 to-purple-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    step: '02',
    icon: Video,
    title: 'Join Live Sessions',
    description: 'Interactive coding sessions with expert instructors',
    details: [
      'Weekly live coding workshops',
      'Q&A sessions with industry experts',
      'Collaborative problem-solving',
      'Record sessions for later review'
    ],
    color: 'from-green-500 to-teal-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    step: '03',
    icon: Code,
    title: 'Build Real Projects',
    description: 'Create applications that solve real-world problems',
    details: [
      'Portfolio-worthy applications',
      'Deploy to production environments',
      'Version control with Git/GitHub',
      'Code reviews from mentors'
    ],
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    step: '04',
    icon: Award,
    title: 'Showcase & Celebrate',
    description: 'Present your work and earn verified certificates',
    details: [
      'Demo day presentations',
      'Verified skill certificates',
      'LinkedIn portfolio integration',
      'Career guidance sessions'
    ],
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  }
]

export default function LearningJourneySection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-scaler-blue to-purple-accent rounded-full filter blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-success-green to-emerald-400 rounded-full filter blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Your Learning Journey in <span className="text-gradient">4 Steps</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From beginner to building production-ready applications in just 8 weeks
          </motion.p>
        </div>

        {/* Journey Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
          {journeySteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Step Card */}
                <div className={`${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-8 text-center hover:shadow-medium transition-all duration-300 group-hover:border-opacity-60 min-h-[400px] flex flex-col`}>
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-soft`}>
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-soft group-hover:shadow-medium transition-shadow duration-300">
                      <IconComponent className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <div className="text-left">
                    <ul className="space-y-2 text-sm text-gray-600">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-white bg-opacity-20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Connecting Arrow (Desktop Only) */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                      className="w-6 h-6 bg-white rounded-full shadow-medium flex items-center justify-center border border-gray-200"
                    >
                      <ArrowRight className="w-4 h-4 text-gray-600" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Timeline Visualization for Mobile */}
        <div className="block lg:hidden mb-16">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-scaler-blue via-success-green to-warning-orange"></div>
            
            {/* Timeline Steps */}
            <div className="space-y-8">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={`timeline-${step.step}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-center gap-6"
                >
                  <div className={`w-6 h-6 bg-gradient-to-r ${step.color} rounded-full border-4 border-white shadow-soft z-10`}></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-medium p-8 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Journey Success Metrics
            </h3>
            <p className="text-gray-600">
              Real results from our learning journey
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-scaler-blue mb-2">8</div>
              <div className="text-sm text-gray-600">Weeks to Complete</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-green mb-2">12+</div>
              <div className="text-sm text-gray-600">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-accent mb-2">24</div>
              <div className="text-sm text-gray-600">Live Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-orange mb-2">1:1</div>
              <div className="text-sm text-gray-600">Mentor Support</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6">
            <Link href="/register" className="btn-primary text-xl px-10 py-5 shadow-medium hover:shadow-hard">
              Start Your Journey Today
            </Link>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-green rounded-full"></div>
                7-day free trial
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-scaler-blue rounded-full"></div>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-accent rounded-full"></div>
                Cancel anytime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}