'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Trophy, 
  CheckCircle, 
  ArrowRight,
  Star,
  Building,
  TrendingUp,
  Award,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Target,
  BarChart3,
  Clock
} from 'lucide-react'

const partnerSchools = [
  { name: 'Delhi Public School', city: 'Delhi', students: 2500, logo: '/api/placeholder/80/40' },
  { name: 'Ryan International', city: 'Mumbai', students: 1800, logo: '/api/placeholder/80/40' },
  { name: 'Kendriya Vidyalaya', city: 'Bangalore', students: 3200, logo: '/api/placeholder/80/40' },
  { name: 'St. Xavier\'s School', city: 'Kolkata', students: 1500, logo: '/api/placeholder/80/40' },
  { name: 'Modern School', city: 'Chennai', students: 2100, logo: '/api/placeholder/80/40' },
  { name: 'DAV Public School', city: 'Hyderabad', students: 1900, logo: '/api/placeholder/80/40' }
]

const benefits = [
  {
    icon: BookOpen,
    title: 'Curriculum Integration',
    description: 'Seamlessly integrate coding curriculum with your existing computer science program'
  },
  {
    icon: Users,
    title: 'Teacher Training',
    description: 'Comprehensive training programs for your faculty to become coding mentors'
  },
  {
    icon: Trophy,
    title: 'Student Competitions',
    description: 'Inter-school coding competitions and hackathons to showcase student talent'
  },
  {
    icon: Award,
    title: 'Certification Programs',
    description: 'Industry-recognized certificates for students completing coding courses'
  },
  {
    icon: TrendingUp,
    title: 'Performance Analytics',
    description: 'Detailed insights into student progress and learning outcomes'
  },
  {
    icon: Target,
    title: 'Placement Support',
    description: 'Career guidance and internship opportunities for advanced students'
  }
]

const pricingPlans = [
  {
    name: 'Starter Program',
    price: '₹2,999',
    period: 'per student/semester',
    description: 'Perfect for schools starting their coding journey',
    features: [
      'Access to 1 coding track',
      'Basic teacher training (2 hours)',
      'Student progress reports',
      'Community forum access',
      'Email support'
    ],
    studentRange: '50-200 students',
    popular: false
  },
  {
    name: 'Advanced Program',
    price: '₹1,999',
    period: 'per student/semester',
    description: 'Comprehensive program for established schools',
    features: [
      'Access to all 3 coding tracks',
      'Advanced teacher training (8 hours)',
      'Real-time analytics dashboard',
      'Live coding sessions',
      'Dedicated account manager',
      'Phone & email support'
    ],
    studentRange: '200-500 students',
    popular: true
  },
  {
    name: 'Enterprise Program',
    price: 'Custom',
    period: 'pricing available',
    description: 'Tailored solutions for large school networks',
    features: [
      'Custom curriculum development',
      'Comprehensive teacher certification',
      'White-label platform option',
      'On-site training sessions',
      'Multi-school management',
      '24/7 priority support'
    ],
    studentRange: '500+ students',
    popular: false
  }
]

const successStories = [
  {
    school: 'Delhi Public School, Vasant Kunj',
    principal: 'Mrs. Anita Sharma',
    quote: 'Our Class 12 students are now building sophisticated web applications. The transformation in their technical confidence has been remarkable.',
    results: {
      studentsEnrolled: 450,
      completionRate: 94,
      satisfactionScore: 4.8,
      projectsBuilt: 1200
    },
    image: '/api/placeholder/100/100'
  },
  {
    school: 'Ryan International School, Mumbai',
    principal: 'Mr. Rajesh Kumar',
    quote: 'The teacher training program equipped our faculty with modern coding skills. Now they\'re mentoring students in AI and machine learning!',
    results: {
      studentsEnrolled: 320,
      completionRate: 96,
      satisfactionScore: 4.9,
      projectsBuilt: 890
    },
    image: '/api/placeholder/100/100'
  }
]

const contactInfo = {
  phone: '+91 98765 43210',
  email: 'schools@scaler.com',
  address: 'Scaler School of Technology, Sector 136, Noida, UP 201304'
}

export default function SchoolsPartnershipPage() {
  const [selectedPlan, setSelectedPlan] = useState('Advanced Program')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-scaler-blue via-blue-600 to-purple-accent text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-blue-200 mb-4">
                <Building className="w-5 h-5" />
                <span className="font-medium">School Partnership Program</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your School's<br />
                <span className="text-gradient">Tech Education</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Partner with Scaler SchoolConnect to bring world-class coding education to your students. 
                Comprehensive programs designed for Indian schools.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">150+</div>
                  <div className="text-blue-200 text-sm">Partner Schools</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">25,000+</div>
                  <div className="text-blue-200 text-sm">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-blue-200 text-sm">Satisfaction Rate</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#contact"
                  className="btn-primary bg-white text-scaler-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
                >
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                
                <button className="btn-ghost border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: {contactInfo.phone}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6">Our Partner Schools</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {partnerSchools.slice(0, 4).map((school, index) => (
                    <div key={school.name} className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="font-semibold text-white text-sm">{school.name}</div>
                      <div className="text-blue-200 text-xs">{school.city}</div>
                      <div className="text-blue-100 text-xs mt-1">{school.students} students</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <div className="text-blue-200 text-sm">and 146 more schools across India</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner with SchoolConnect?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to elevate your school's computer science education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-medium transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-scaler-blue/20 text-scaler-blue rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              See how partner schools are transforming student outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={story.school}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-medium p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-scaler-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {story.school.split(' ').map(w => w[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{story.school}</h3>
                    <p className="text-gray-600">{story.principal}</p>
                  </div>
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{story.quote}"
                </blockquote>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-scaler-blue">{story.results.studentsEnrolled}</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-success-green">{story.results.completionRate}%</div>
                    <div className="text-sm text-gray-600">Completion</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-warning-orange">{story.results.satisfactionScore}/5</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-accent">{story.results.projectsBuilt}</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Plans</h2>
            <p className="text-xl text-gray-600">
              Flexible pricing options designed for schools of all sizes
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-2xl p-8 relative ${
                  plan.popular
                    ? 'bg-gradient-to-b from-scaler-blue to-blue-600 text-white shadow-hard'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-success-green text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <div className={`text-4xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </div>
                  <div className={`text-sm ${plan.popular ? 'text-blue-200' : 'text-gray-600'}`}>
                    {plan.period}
                  </div>
                  <div className={`text-sm mt-2 font-medium ${plan.popular ? 'text-blue-200' : 'text-scaler-blue'}`}>
                    {plan.studentRange}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${plan.popular ? 'text-green-300' : 'text-success-green'}`} />
                      <span className={plan.popular ? 'text-blue-100' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-white text-scaler-blue hover:bg-gray-50'
                      : 'bg-scaler-blue text-white hover:bg-blue-600'
                  }`}
                >
                  {plan.name === 'Enterprise Program' ? 'Contact Sales' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Partner with Us?</h2>
            <p className="text-xl text-gray-600">
              Schedule a demo to see how SchoolConnect can transform your computer science education
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-medium p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Demo</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Principal/Head Name *
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      School Name *
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="School name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="principal@school.edu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Mumbai, Delhi, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Student Count *
                    </label>
                    <select className="form-input">
                      <option>50-200 students</option>
                      <option>200-500 students</option>
                      <option>500-1000 students</option>
                      <option>1000+ students</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Current CS Program
                  </label>
                  <textarea
                    rows={4}
                    className="form-input"
                    placeholder="Tell us about your current computer science curriculum and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  Schedule Demo Call
                  <Calendar className="w-5 h-5 ml-2" />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-medium p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-scaler-blue/20 text-scaler-blue rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Call Us</div>
                      <div className="text-gray-600">{contactInfo.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-scaler-blue/20 text-scaler-blue rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email Us</div>
                      <div className="text-gray-600">{contactInfo.email}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-scaler-blue/20 text-scaler-blue rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Visit Us</div>
                      <div className="text-gray-600">{contactInfo.address}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-scaler-blue to-purple-accent text-white rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-4">Why Schools Choose Us</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-100">Proven track record with 150+ schools</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-100">Curriculum aligned with NEP 2020</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-100">Comprehensive teacher training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-100">24/7 support and assistance</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-scaler-blue to-purple-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Join India's Leading School Network
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Partner with SchoolConnect and prepare your students for the digital future
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-scaler-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                Schedule Demo Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button className="btn-ghost border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Expert
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-8 text-blue-200 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>30-minute demo call</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>No commitment required</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}