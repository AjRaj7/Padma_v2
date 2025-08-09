'use client'

import React from 'react'
import Link from 'next/link'
import { X, Check, BookOpen, Users, Target, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'

const problemPoints = [
  {
    icon: BookOpen,
    title: 'Outdated Curriculum',
    description: 'Schools teach theory from textbooks that are years behind industry standards'
  },
  {
    icon: Target,
    title: 'No Hands-on Projects',
    description: 'Students memorize concepts without building real applications or solving problems'
  },
  {
    icon: Users,
    title: 'Limited Career Guidance',
    description: 'No mentorship from industry professionals or career path clarity'
  },
  {
    icon: Lightbulb,
    title: 'Isolated Learning',
    description: 'Students learn alone without peer collaboration or community support'
  }
]

const solutionPoints = [
  {
    icon: BookOpen,
    title: 'Industry-Relevant Curriculum',
    description: 'Curriculum designed by tech professionals working at top companies like Google, Microsoft'
  },
  {
    icon: Target,
    title: 'Build Real Applications',
    description: 'Create and deploy production-ready apps that solve real-world problems'
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'One-on-one guidance from working software engineers at leading tech companies'
  },
  {
    icon: Lightbulb,
    title: 'Collaborative Learning',
    description: 'Learn with peers nationwide through group projects and interactive sessions'
  }
]

export default function ProblemSolutionSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-red-400 to-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-scaler-blue to-success-green rounded-full filter blur-3xl"></div>
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
            Why Traditional CS Education <span className="text-red-500">Isn't Enough</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            While schools teach theory, we prepare students for the real tech industry
          </motion.p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Problem Side - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Problem Header */}
            <div className="text-center lg:text-left mb-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Traditional CS Education
                </h3>
              </div>
              <p className="text-lg text-gray-600">
                What's missing in most school computer science programs
              </p>
            </div>

            {/* Problem Points */}
            <div className="space-y-6">
              {problemPoints.map((point, index) => {
                const IconComponent = point.icon
                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-red-50 border border-red-100 rounded-xl"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {point.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Problem Impact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 p-6 bg-gray-100 rounded-xl border-l-4 border-red-500"
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">78%</div>
                  <div className="text-sm text-gray-600">Students struggle with coding after 12th</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">65%</div>
                  <div className="text-sm text-gray-600">Feel unprepared for engineering</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Solution Side - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Solution Header */}
            <div className="text-center lg:text-left mb-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-scaler-blue to-success-green rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  SchoolConnect <span className="text-gradient">Bridges the Gap</span>
                </h3>
              </div>
              <p className="text-lg text-gray-600">
                How we prepare students for successful tech careers
              </p>
            </div>

            {/* Solution Points */}
            <div className="space-y-6">
              {solutionPoints.map((point, index) => {
                const IconComponent = point.icon
                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 rounded-xl hover:shadow-soft transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-scaler-blue to-success-green rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {point.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Solution Impact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 p-6 bg-gradient-to-r from-scaler-blue/10 to-success-green/10 rounded-xl border-l-4 border-success-green"
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-success-green">95%</div>
                  <div className="text-sm text-gray-600">Students feel industry-ready</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-scaler-blue">89%</div>
                  <div className="text-sm text-gray-600">Get into top engineering colleges</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link href="/how-it-works" className="btn-primary text-lg px-8 py-4">
              See How It Works
            </Link>
            <div className="text-sm text-gray-500">
              Free 7-day trial • No credit card required
            </div>
          </div>
        </motion.div>

        {/* Connecting Arrow (Hidden on Mobile) */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-16 h-16 bg-white rounded-full shadow-hard flex items-center justify-center border-2 border-gray-100"
          >
            <div className="text-2xl">→</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}