'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Phone, GraduationCap, MapPin, Users } from 'lucide-react'
import { StudentData } from './StudentRegistration'

interface BasicInfoStepProps {
  data: StudentData
  updateData: (updates: Partial<StudentData>) => void
  onNext: () => void
}

const classes = [
  { value: '10', label: 'Class 10' },
  { value: '11', label: 'Class 11' },
  { value: '12', label: 'Class 12' }
]

const testimonial = {
  name: 'Priya Sharma',
  role: 'Parent of Aarav, Class 11',
  quote: 'The registration was so smooth and the team called within 2 hours to understand our requirements. Very professional!',
  rating: 5
}

export default function BasicInfoStep({ data, updateData, onNext }: BasicInfoStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!data.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!data.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(data.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }

    if (!data.class) {
      newErrors.class = 'Please select your class'
    }

    if (!data.school.trim()) {
      newErrors.school = 'School name is required'
    }

    if (!data.city.trim()) {
      newErrors.city = 'City is required'
    }

    if (!data.parentEmail.trim()) {
      newErrors.parentEmail = 'Parent email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.parentEmail)) {
      newErrors.parentEmail = 'Please enter a valid parent email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onNext()
    }
  }

  const handleInputChange = (field: keyof StudentData, value: string) => {
    updateData({ [field]: value })
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      {/* Main Form */}
      <div className="lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-medium p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                value={data.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={`form-input ${errors.fullName ? 'border-red-300 bg-red-50' : ''}`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="form-error">{errors.fullName}</p>
              )}
            </div>

            {/* Email & Phone Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`form-input ${errors.email ? 'border-red-300 bg-red-50' : ''}`}
                  placeholder="your.email@gmail.com"
                />
                {errors.email && (
                  <p className="form-error">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`form-input ${errors.phone ? 'border-red-300 bg-red-50' : ''}`}
                  placeholder="9876543210"
                />
                {errors.phone && (
                  <p className="form-error">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Class Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                <GraduationCap className="w-4 h-4 inline mr-2" />
                Current Class *
              </label>
              <div className="grid grid-cols-3 gap-3">
                {classes.map((classOption) => (
                  <button
                    key={classOption.value}
                    type="button"
                    onClick={() => handleInputChange('class', classOption.value)}
                    className={`p-4 rounded-xl border-2 text-center font-medium transition-all duration-200 ${
                      data.class === classOption.value
                        ? 'border-scaler-blue bg-scaler-blue/10 text-scaler-blue'
                        : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {classOption.label}
                  </button>
                ))}
              </div>
              {errors.class && (
                <p className="form-error">{errors.class}</p>
              )}
            </div>

            {/* School & City Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <GraduationCap className="w-4 h-4 inline mr-2" />
                  School Name *
                </label>
                <input
                  type="text"
                  value={data.school}
                  onChange={(e) => handleInputChange('school', e.target.value)}
                  className={`form-input ${errors.school ? 'border-red-300 bg-red-50' : ''}`}
                  placeholder="DPS, Ryan International, etc."
                />
                {errors.school && (
                  <p className="form-error">{errors.school}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  City *
                </label>
                <input
                  type="text"
                  value={data.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className={`form-input ${errors.city ? 'border-red-300 bg-red-50' : ''}`}
                  placeholder="Mumbai, Delhi, Bangalore, etc."
                />
                {errors.city && (
                  <p className="form-error">{errors.city}</p>
                )}
              </div>
            </div>

            {/* Parent Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                <Users className="w-4 h-4 inline mr-2" />
                Parent/Guardian Email *
              </label>
              <input
                type="email"
                value={data.parentEmail}
                onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                className={`form-input ${errors.parentEmail ? 'border-red-300 bg-red-50' : ''}`}
                placeholder="parent.email@gmail.com"
              />
              {errors.parentEmail && (
                <p className="form-error">{errors.parentEmail}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">
                We'll send progress updates and important information to your parent/guardian
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                Continue to Assessment
                <span className="ml-2">→</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1 space-y-8">
        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-soft p-6"
        >
          <h3 className="font-semibold text-gray-900 mb-4">What's Next?</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-scaler-blue/20 text-scaler-blue rounded-full flex items-center justify-center text-xs font-bold">
                1
              </div>
              <span className="text-gray-600">Complete basic information</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-xs font-bold">
                2
              </div>
              <span className="text-gray-500">Take our fun skills assessment</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-xs font-bold">
                3
              </div>
              <span className="text-gray-500">Get personalized recommendations</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-xs font-bold">
                4
              </div>
              <span className="text-gray-500">Start your free trial</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-scaler-blue/10 to-purple-accent/10 rounded-2xl p-6 border border-scaler-blue/20"
        >
          <div className="flex items-center gap-1 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <blockquote className="text-sm text-gray-700 mb-4 leading-relaxed">
            "{testimonial.quote}"
          </blockquote>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-scaler-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
              PS
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
              <div className="text-gray-600 text-xs">{testimonial.role}</div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-soft p-6"
        >
          <h4 className="font-semibold text-gray-900 mb-4">Why Parents Trust Us</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-success-green rounded-full"></div>
              <span className="text-gray-600">Regular progress updates</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-success-green rounded-full"></div>
              <span className="text-gray-600">Safe online learning environment</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-success-green rounded-full"></div>
              <span className="text-gray-600">Qualified instructor verification</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-success-green rounded-full"></div>
              <span className="text-gray-600">30-day money-back guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}