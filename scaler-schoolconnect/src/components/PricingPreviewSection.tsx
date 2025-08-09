'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Check, Shield, Clock, Users, Star, ArrowRight, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const individualPlans = [
  {
    name: 'Foundation',
    price: 2999,
    originalPrice: 4999,
    discount: '40% OFF',
    duration: 'per semester',
    description: 'Perfect for getting started with coding',
    popular: false,
    features: [
      'One course track of your choice',
      'Weekly live coding sessions',
      'Community access & peer support',
      'Project-based learning approach',
      'Course completion certificate',
      'Basic career guidance resources'
    ],
    notIncluded: [
      'All course tracks access',
      'One-on-one mentor sessions',
      'Priority support',
      'Advanced project showcasing'
    ],
    color: 'border-gray-200',
    buttonStyle: 'btn-secondary'
  },
  {
    name: 'Premium',
    price: 4999,
    originalPrice: 7999,
    discount: '38% OFF',
    duration: 'per semester',
    description: 'Most popular choice for serious learners',
    popular: true,
    features: [
      'All course tracks included',
      'Weekly live coding sessions',
      'Monthly 1-on-1 mentor sessions',
      'Priority community support',
      'Advanced project showcasing',
      'Career guidance & interview prep',
      'Resume building assistance',
      'Alumni network access',
      'Internship placement support'
    ],
    notIncluded: [],
    color: 'border-scaler-blue bg-scaler-blue/5',
    buttonStyle: 'btn-primary'
  }
]

const schoolPlans = [
  {
    name: 'Standard School',
    price: 1499,
    originalPrice: 2499,
    discount: '40% OFF',
    duration: 'per student/semester',
    description: 'Essential program for schools',
    popular: false,
    features: [
      'All course tracks for students',
      'Teacher training & upskilling',
      'Real-time progress dashboards',
      'Bulk enrollment management',
      'Parent communication tools',
      'Basic reporting & analytics'
    ],
    notIncluded: [
      'Custom curriculum options',
      'Dedicated success manager',
      'School branding integration'
    ],
    color: 'border-purple-200',
    buttonStyle: 'btn-secondary'
  },
  {
    name: 'Premium School',
    price: 1999,
    originalPrice: 3499,
    discount: '43% OFF',
    duration: 'per student/semester',
    description: 'Complete solution for progressive schools',
    popular: true,
    features: [
      'Everything in Standard plan',
      'Custom curriculum options',
      'Dedicated school success manager',
      'School branding integration',
      'Priority technical support',
      'Advanced analytics & insights',
      'Custom student assessments',
      'Parent-teacher collaboration tools'
    ],
    notIncluded: [],
    color: 'border-purple-accent bg-purple-accent/5',
    buttonStyle: 'btn-primary'
  }
]

const guaranteeFeatures = [
  {
    icon: Shield,
    title: '30-Day Money-Back Guarantee',
    description: 'Full refund if not satisfied'
  },
  {
    icon: Clock,
    title: '7-Day Free Trial',
    description: 'No credit card required'
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Help whenever you need it'
  }
]

export default function PricingPreviewSection() {
  const [pricingType, setPricingType] = useState<'individual' | 'school'>('individual')

  const currentPlans = pricingType === 'individual' ? individualPlans : schoolPlans

  return (
    <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-48 h-48 bg-gradient-to-br from-scaler-blue to-purple-accent rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-gradient-to-br from-success-green to-teal-400 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
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
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Choose the plan that fits your learning goals. Start free, upgrade anytime.
          </motion.p>

          {/* Pricing Type Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center bg-white rounded-full p-2 shadow-soft border border-gray-200"
          >
            <button
              onClick={() => setPricingType('individual')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                pricingType === 'individual'
                  ? 'bg-scaler-blue text-white shadow-soft'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Students
            </button>
            <button
              onClick={() => setPricingType('school')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                pricingType === 'school'
                  ? 'bg-purple-accent text-white shadow-soft'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Schools
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16">
          {currentPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-medium hover:shadow-hard transition-all duration-300 overflow-hidden border-2 ${plan.color} ${
                plan.popular ? 'transform scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-warning-orange to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-medium z-10">
                  🔥 Most Popular
                </div>
              )}

              {/* Discount Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-success-green to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {plan.discount}
              </div>

              <div className="p-8 lg:p-10">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-4xl font-bold text-gray-900">
                        ₹{plan.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-2xl text-gray-500 line-through">
                        ₹{plan.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="text-gray-600">
                      {plan.duration}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mb-8">
                    <Link 
                      href={pricingType === 'individual' ? '/register' : '/schools/contact'}
                      className={`block w-full text-center ${plan.buttonStyle} text-lg px-6 py-4 mb-3`}
                    >
                      {pricingType === 'individual' ? 'Start Free Trial' : 'Request Demo'}
                    </Link>
                    <div className="text-sm text-gray-500">
                      {pricingType === 'individual' ? 'No credit card required' : 'Custom implementation'}
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Check className="w-5 h-5 text-success-green" />
                    What's Included:
                  </h4>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-success-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Not Included (only for non-premium plans) */}
                  {plan.notIncluded.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <h5 className="font-medium text-gray-700 mb-3 text-sm">
                        Available in Premium:
                      </h5>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Zap className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-500 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-medium p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Risk-Free Learning Guarantee
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {guaranteeFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={feature.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-scaler-blue to-purple-accent rounded-2xl shadow-soft mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Student Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-scaler-blue to-purple-accent rounded-2xl text-white p-8 lg:p-12 text-center mb-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Why Students Choose Us
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Real results from students who invested in their coding education
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">92%</div>
              <div className="text-blue-100 text-sm">Complete their programs</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">₹4.2L</div>
              <div className="text-blue-100 text-sm">Average scholarship earned</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">89%</div>
              <div className="text-blue-100 text-sm">Get into top engineering colleges</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">4.9⭐</div>
              <div className="text-blue-100 text-sm">Average student rating</div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <Link href="/pricing" className="btn-secondary text-lg px-8 py-4 flex items-center gap-2">
              View Detailed Pricing & Plans
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-gray-500 max-w-md">
              Questions about pricing? {' '}
              <Link href="/contact" className="text-scaler-blue hover:underline font-medium">
                Talk to our team
              </Link>
              {' '} for a personalized quote
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}