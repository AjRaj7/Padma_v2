'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  Users,
  BookOpen,
  Building,
  ArrowRight,
  Star,
  Globe,
  Calendar
} from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our education counselors',
    details: ['+91 98765 43210', '+91 87654 32109'],
    availability: 'Mon-Sat: 9 AM - 8 PM',
    primary: true
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Quick responses to your queries',
    details: ['+91 98765 43210'],
    availability: '24/7 automated, human support 9 AM - 8 PM',
    primary: false
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Detailed responses within 24 hours',
    details: ['hello@scaler.com', 'schools@scaler.com'],
    availability: 'Response within 24 hours',
    primary: false
  },
  {
    icon: MapPin,
    title: 'Visit Our Office',
    description: 'Meet our team in person',
    details: ['Scaler School of Technology', 'Sector 136, Noida, UP 201304'],
    availability: 'Mon-Fri: 10 AM - 6 PM',
    primary: false
  }
]

const queryTypes = [
  {
    id: 'student',
    title: 'Student Enrollment',
    description: 'Questions about courses, admission, and learning',
    icon: Users,
    color: 'bg-blue-500'
  },
  {
    id: 'school',
    title: 'School Partnership',
    description: 'B2B partnerships and institutional programs',
    icon: Building,
    color: 'bg-purple-500'
  },
  {
    id: 'parent',
    title: 'Parent Inquiries',
    description: 'Information for parents about our programs',
    icon: BookOpen,
    color: 'bg-green-500'
  },
  {
    id: 'other',
    title: 'General Support',
    description: 'Technical support, feedback, and other queries',
    icon: MessageCircle,
    color: 'bg-orange-500'
  }
]

const faqs = [
  {
    question: 'What is the minimum age requirement?',
    answer: 'Our programs are designed for students in Classes 10-12 (ages 15-18). However, motivated younger students can also join with parental consent.'
  },
  {
    question: 'Do I need prior coding experience?',
    answer: 'Not at all! Our courses start from absolute basics and gradually build up to advanced concepts. We have students who went from zero coding knowledge to building complex applications.'
  },
  {
    question: 'What if I miss live sessions?',
    answer: 'All live sessions are recorded and available for replay. You can also schedule 1-on-1 makeup sessions with mentors if needed.'
  },
  {
    question: 'Can I switch between courses?',
    answer: 'Yes, you can switch tracks within the first 2 weeks if you feel another course would be a better fit for your goals.'
  },
  {
    question: 'Do you provide job placement assistance?',
    answer: 'We provide career guidance, resume building, mock interviews, and referrals to our partner companies. However, job placement depends on individual performance and market conditions.'
  }
]

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM', note: 'Full support available' },
  { day: 'Saturday', hours: '10:00 AM - 6:00 PM', note: 'Student support & demos' },
  { day: 'Sunday', hours: 'Closed', note: 'Emergency support via email' }
]

export default function ContactPage() {
  const [selectedQueryType, setSelectedQueryType] = useState('student')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    queryType: 'student',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-scaler-blue via-blue-600 to-purple-accent text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Get in Touch<br />
              <span className="text-gradient">We're Here to Help</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Have questions about our courses, need guidance on your learning journey, or want to explore 
              school partnerships? Our team is ready to help you succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+919876543210"
                className="btn-primary bg-white text-scaler-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 98765 43210
              </a>
              
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </div>

            <div className="text-blue-200 text-sm">
              <Clock className="w-4 h-4 inline mr-2" />
              Available Mon-Sat: 9 AM - 8 PM | Response within 2 hours
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-600">
              Choose the method that works best for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`rounded-2xl p-6 text-center ${
                    method.primary 
                      ? 'bg-gradient-to-b from-scaler-blue to-blue-600 text-white shadow-hard' 
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    method.primary 
                      ? 'bg-white/20 text-white' 
                      : 'bg-scaler-blue/20 text-scaler-blue'
                  }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${
                    method.primary ? 'text-white' : 'text-gray-900'
                  }`}>
                    {method.title}
                  </h3>

                  <p className={`mb-4 ${
                    method.primary ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    {method.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {method.details.map((detail, i) => (
                      <div key={detail} className={`font-semibold ${
                        method.primary ? 'text-white' : 'text-gray-900'
                      }`}>
                        {detail}
                      </div>
                    ))}
                  </div>

                  <div className={`text-sm ${
                    method.primary ? 'text-blue-200' : 'text-gray-500'
                  }`}>
                    {method.availability}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-medium p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

                {/* Query Type Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    What can we help you with?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {queryTypes.map((type) => {
                      const IconComponent = type.icon
                      return (
                        <button
                          key={type.id}
                          onClick={() => {
                            setSelectedQueryType(type.id)
                            handleInputChange('queryType', type.id)
                          }}
                          className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                            selectedQueryType === type.id
                              ? 'border-scaler-blue bg-scaler-blue/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-8 h-8 ${type.color} text-white rounded-lg flex items-center justify-center`}>
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <span className="font-semibold text-gray-900 text-sm">{type.title}</span>
                          </div>
                          <p className="text-gray-600 text-xs">{type.description}</p>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="form-input"
                        placeholder="your.email@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="form-input"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="form-input"
                      placeholder="Brief description of your query"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="form-input"
                      placeholder="Tell us more about your query or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    We'll respond within 24 hours during business hours
                  </p>
                </form>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Office Hours */}
                <div className="bg-white rounded-2xl shadow-medium p-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-scaler-blue" />
                    Office Hours
                  </h4>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-gray-900">{schedule.day}</div>
                          <div className="text-sm text-gray-600">{schedule.note}</div>
                        </div>
                        <div className="font-semibold text-scaler-blue">{schedule.hours}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-r from-scaler-blue to-purple-accent text-white rounded-2xl p-6">
                  <h4 className="font-bold mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <a 
                      href="/student-registration"
                      className="block bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5" />
                        <div>
                          <div className="font-semibold">Start Learning</div>
                          <div className="text-sm text-blue-100">Register for courses</div>
                        </div>
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </div>
                    </a>
                    
                    <a 
                      href="/schools"
                      className="block bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Building className="w-5 h-5" />
                        <div>
                          <div className="font-semibold">School Partnership</div>
                          <div className="text-sm text-blue-100">Institutional programs</div>
                        </div>
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </div>
                    </a>

                    <a 
                      href="https://calendly.com/scaler-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5" />
                        <div>
                          <div className="font-semibold">Schedule Demo</div>
                          <div className="text-sm text-blue-100">Book a call with our team</div>
                        </div>
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Student Reviews */}
                <div className="bg-white rounded-2xl shadow-medium p-6">
                  <h4 className="font-bold text-gray-900 mb-4">What Students Say</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-scaler-blue pl-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <p className="text-gray-700 text-sm italic">"The support team is incredibly responsive and helpful. Got answers to all my questions within an hour!"</p>
                      <p className="text-xs text-gray-600 mt-2">- Arjun K., Class 12</p>
                    </div>
                    
                    <div className="border-l-4 border-success-green pl-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <p className="text-gray-700 text-sm italic">"They helped me choose the right course track and even adjusted my schedule for board exams."</p>
                      <p className="text-xs text-gray-600 mt-2">- Priya S., Class 11</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Quick answers to common questions
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

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <a 
                href="#contact-form"
                className="btn-primary px-6 py-3"
              >
                Ask Your Question
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}