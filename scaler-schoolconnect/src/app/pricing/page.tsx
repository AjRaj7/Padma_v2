'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  X,
  Star, 
  Shield, 
  Clock, 
  Users,
  ArrowRight,
  Zap,
  Trophy,
  MessageCircle,
  Calculator,
  Gift,
  AlertCircle,
  Phone
} from 'lucide-react'

const pricingPlans = [
  {
    id: 'trial',
    name: '7-Day Free Trial',
    price: 0,
    originalPrice: null,
    popular: false,
    description: 'Perfect to get started and explore our courses',
    duration: '7 days',
    features: {
      courses: 'Access to 1 selected track',
      liveClasses: 'Join live coding sessions',
      mentorship: 'Community forum support',
      projects: 'Build 2 guided projects',
      certificate: 'Trial completion badge',
      support: 'Email support',
      resources: 'Basic learning resources',
      duration: '7-day access',
      interviews: 'Not included',
      placement: 'Not included',
      aiTutor: 'Limited access',
      mobileApp: 'Full access'
    },
    limitations: [
      'Access expires after 7 days',
      'Limited to one course track',
      'No placement support'
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'secondary'
  },
  {
    id: 'foundation',
    name: 'Foundation Plan',
    price: 2999,
    originalPrice: 4999,
    popular: true,
    description: 'Complete coding education for serious learners',
    duration: '4 months',
    features: {
      courses: 'All 3 coding tracks included',
      liveClasses: '2 live sessions per week',
      mentorship: '1-on-1 monthly mentoring',
      projects: 'Build 8+ real-world projects',
      certificate: 'Industry-recognized certificate',
      support: 'Priority email & chat support',
      resources: 'Complete learning library',
      duration: '4-month full access',
      interviews: 'Mock interview sessions',
      placement: 'Job referral assistance',
      aiTutor: 'AI-powered doubt resolution',
      mobileApp: 'Full mobile app access'
    },
    benefits: [
      'Save ₹2,000 (40% discount)',
      'Most popular choice',
      'Best value for money'
    ],
    cta: 'Get Foundation Plan',
    ctaStyle: 'primary'
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: 5999,
    originalPrice: 8999,
    popular: false,
    description: 'Everything in Foundation plus premium features',
    duration: '6 months',
    features: {
      courses: 'All tracks + advanced specializations',
      liveClasses: '3 live sessions per week',
      mentorship: 'Weekly 1-on-1 mentoring',
      projects: '15+ industry-level projects',
      certificate: 'Premium certification + LinkedIn badge',
      support: '24/7 phone & chat support',
      resources: 'Premium resources + exclusive content',
      duration: '6-month extended access',
      interviews: 'Unlimited mock interviews',
      placement: 'Dedicated placement officer',
      aiTutor: 'Advanced AI tutor with code review',
      mobileApp: 'Premium mobile features'
    },
    benefits: [
      'Save ₹3,000 (33% discount)',
      'Maximum learning outcomes',
      'Dedicated placement support'
    ],
    cta: 'Go Premium',
    ctaStyle: 'premium'
  }
]

const featureComparison = [
  {
    category: 'Courses & Content',
    features: [
      {
        name: 'Web Development Track',
        trial: true,
        foundation: true,
        premium: true,
        description: 'Complete HTML, CSS, JavaScript, React, Node.js'
      },
      {
        name: 'Mobile App Development',
        trial: false,
        foundation: true,
        premium: true,
        description: 'React Native, Flutter, app store deployment'
      },
      {
        name: 'Data Science & AI',
        trial: false,
        foundation: true,
        premium: true,
        description: 'Python, ML, TensorFlow, data visualization'
      },
      {
        name: 'Advanced Specializations',
        trial: false,
        foundation: false,
        premium: true,
        description: 'Cloud computing, DevOps, advanced algorithms'
      },
      {
        name: 'Exclusive Premium Content',
        trial: false,
        foundation: false,
        premium: true,
        description: 'Advanced tutorials, case studies, interviews'
      }
    ]
  },
  {
    category: 'Learning Support',
    features: [
      {
        name: 'Live Coding Sessions',
        trial: 'Limited',
        foundation: '2 per week',
        premium: '3 per week',
        description: 'Interactive coding sessions with instructors'
      },
      {
        name: '1-on-1 Mentorship',
        trial: false,
        foundation: 'Monthly',
        premium: 'Weekly',
        description: 'Personal guidance from industry experts'
      },
      {
        name: 'AI-Powered Doubt Resolution',
        trial: 'Basic',
        foundation: 'Standard',
        premium: 'Advanced + Code Review',
        description: 'Instant help with coding questions'
      },
      {
        name: 'Community Access',
        trial: true,
        foundation: true,
        premium: true,
        description: 'Connect with peers and mentors'
      }
    ]
  },
  {
    category: 'Projects & Certification',
    features: [
      {
        name: 'Guided Projects',
        trial: '2 projects',
        foundation: '8+ projects',
        premium: '15+ projects',
        description: 'Real-world coding projects for portfolio'
      },
      {
        name: 'Industry Certification',
        trial: false,
        foundation: true,
        premium: true,
        description: 'Recognized certificate for completed courses'
      },
      {
        name: 'LinkedIn Skill Badge',
        trial: false,
        foundation: false,
        premium: true,
        description: 'Display your skills on LinkedIn profile'
      },
      {
        name: 'Github Portfolio Setup',
        trial: false,
        foundation: true,
        premium: true,
        description: 'Professional developer portfolio'
      }
    ]
  },
  {
    category: 'Career Support',
    features: [
      {
        name: 'Mock Interviews',
        trial: false,
        foundation: '2 sessions',
        premium: 'Unlimited',
        description: 'Practice technical and HR interviews'
      },
      {
        name: 'Placement Assistance',
        trial: false,
        foundation: 'Job referrals',
        premium: 'Dedicated officer',
        description: 'Help finding internships and jobs'
      },
      {
        name: 'Resume Building',
        trial: false,
        foundation: true,
        premium: true,
        description: 'Create professional developer resume'
      },
      {
        name: 'Company Referrals',
        trial: false,
        foundation: 'Basic',
        premium: 'Premium network',
        description: 'Direct referrals to partner companies'
      }
    ]
  }
]

const faqs = [
  {
    question: 'Can I upgrade from Trial to paid plan?',
    answer: 'Yes! You can upgrade to Foundation or Premium plan anytime during or after your trial. Your progress will be saved and you\'ll get access to all additional features immediately.'
  },
  {
    question: 'What happens if I\'m not satisfied with the course?',
    answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not completely satisfied, we\'ll refund your full payment, no questions asked.'
  },
  {
    question: 'Do I need any prior coding experience?',
    answer: 'Not at all! Our courses are designed for complete beginners. We start with basics and gradually build up to advanced concepts with plenty of practice.'
  },
  {
    question: 'Can I access courses on mobile?',
    answer: 'Yes! Our mobile app gives you full access to video lessons, coding exercises, and community features. Learn anytime, anywhere.'
  },
  {
    question: 'Are the certificates recognized by employers?',
    answer: 'Yes! Our certificates are industry-recognized and accepted by 500+ companies. Many of our students have used them to land internships and jobs.'
  },
  {
    question: 'What if I need more time to complete the course?',
    answer: 'Foundation plan gives 4 months access, Premium gives 6 months. If you need more time, you can extend access at discounted rates.'
  }
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('semester')
  const [selectedPlan, setSelectedPlan] = useState('foundation')
  const [showComparison, setShowComparison] = useState(false)

  const formatFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? <CheckCircle className="w-5 h-5 text-success-green" /> : <X className="w-5 h-5 text-gray-300" />
    }
    return <span className="text-sm text-gray-700">{value}</span>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-scaler-blue via-purple-600 to-pink-500 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Choose Your Learning<br />
              <span className="text-gradient">Journey</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Start with our free trial and upgrade to unlock the full potential of your coding education. 
              Transparent pricing, maximum value.
            </p>

            <div className="flex items-center justify-center gap-8 text-blue-200">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Plan Cards */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
                      ? 'bg-gradient-to-b from-scaler-blue to-blue-600 text-white shadow-hard scale-105'
                      : 'bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-success-green text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>
                    
                    <div className="mb-4">
                      {plan.originalPrice && (
                        <div className={`text-lg line-through mb-1 ${plan.popular ? 'text-blue-300' : 'text-gray-500'}`}>
                          ₹{plan.originalPrice}
                        </div>
                      )}
                      <div className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                        {plan.price === 0 ? 'FREE' : `₹${plan.price}`}
                      </div>
                      <div className={`text-sm mt-1 ${plan.popular ? 'text-blue-200' : 'text-gray-600'}`}>
                        {plan.duration}
                      </div>
                    </div>

                    {plan.benefits && (
                      <div className="space-y-2 mb-6">
                        {plan.benefits.map((benefit, i) => (
                          <div key={benefit} className={`text-sm font-medium ${plan.popular ? 'text-green-200' : 'text-success-green'}`}>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-4 mb-8">
                    {Object.entries(plan.features).slice(0, 8).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-green-300' : 'text-success-green'}`} />
                        <span className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-700'}`}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Limitations for Trial */}
                  {plan.limitations && (
                    <div className="space-y-2 mb-8">
                      {plan.limitations.map((limitation, i) => (
                        <div key={limitation} className="flex items-start gap-3">
                          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-warning-orange" />
                          <span className="text-sm text-gray-600">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    href="/student-registration"
                    className={`block w-full py-4 rounded-xl font-semibold text-center transition-all duration-200 ${
                      plan.ctaStyle === 'primary'
                        ? 'bg-white text-scaler-blue hover:bg-gray-50 shadow-medium'
                        : plan.ctaStyle === 'premium'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg'
                        : 'bg-scaler-blue text-white hover:bg-blue-600'
                    }`}
                  >
                    {plan.cta}
                    {plan.popular && <ArrowRight className="w-5 h-5 inline ml-2" />}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Feature Comparison Toggle */}
            <div className="text-center mb-12">
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="btn-secondary px-8 py-3"
              >
                {showComparison ? 'Hide' : 'Show'} Detailed Feature Comparison
                <Calculator className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Detailed Feature Comparison */}
            {showComparison && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-medium p-8 mb-16"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Complete Feature Comparison</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-4 px-4 font-bold text-gray-900">Features</th>
                        <th className="text-center py-4 px-4 font-bold text-gray-900">Free Trial</th>
                        <th className="text-center py-4 px-4 font-bold text-scaler-blue">Foundation</th>
                        <th className="text-center py-4 px-4 font-bold text-purple-600">Premium</th>
                      </tr>
                    </thead>
                    <tbody>
                      {featureComparison.map((category) => (
                        <React.Fragment key={category.category}>
                          <tr className="bg-gray-50">
                            <td colSpan={4} className="py-3 px-4 font-bold text-gray-900 text-sm uppercase tracking-wide">
                              {category.category}
                            </td>
                          </tr>
                          {category.features.map((feature) => (
                            <tr key={feature.name} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="py-4 px-4">
                                <div>
                                  <div className="font-semibold text-gray-900">{feature.name}</div>
                                  <div className="text-sm text-gray-600">{feature.description}</div>
                                </div>
                              </td>
                              <td className="py-4 px-4 text-center">
                                {formatFeatureValue(feature.trial)}
                              </td>
                              <td className="py-4 px-4 text-center">
                                {formatFeatureValue(feature.foundation)}
                              </td>
                              <td className="py-4 px-4 text-center">
                                {formatFeatureValue(feature.premium)}
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gradient-to-r from-scaler-blue/10 to-purple-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why SchoolConnect Offers Unbeatable Value</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-scaler-blue/20 text-scaler-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Industry-Leading Curriculum</h3>
                  <p className="text-gray-600">Created by experts from Google, Microsoft, and top Indian tech companies</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-success-green/20 text-success-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Personal Mentorship</h3>
                  <p className="text-gray-600">1-on-1 guidance from industry professionals, not just tutorials</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-accent/20 text-purple-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Real-World Projects</h3>
                  <p className="text-gray-600">Build portfolio-worthy applications, not just practice exercises</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-medium">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compare with Traditional Coaching</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-4">Traditional Coaching</h4>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500" />
                        <span className="text-gray-600">₹15,000 - ₹25,000 per course</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500" />
                        <span className="text-gray-600">Fixed timings, travel required</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500" />
                        <span className="text-gray-600">Outdated curriculum</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500" />
                        <span className="text-gray-600">Limited personal attention</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-scaler-blue mb-4">SchoolConnect</h4>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success-green" />
                        <span className="text-gray-700">₹2,999 for all 3 tracks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success-green" />
                        <span className="text-gray-700">Learn anytime, anywhere</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success-green" />
                        <span className="text-gray-700">Latest industry curriculum</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success-green" />
                        <span className="text-gray-700">1-on-1 mentorship included</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and plans
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-scaler-blue to-purple-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Coding Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already building their future in tech. 
              Start with our free trial today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/student-registration"
                className="btn-primary bg-white text-scaler-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
              >
                Start 7-Day Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <button className="btn-ghost border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Counselor
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200 text-sm">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4" />
                <span>7-day free trial included</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>24/7 support available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}