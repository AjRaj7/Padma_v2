'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import BasicInfoStep from './BasicInfoStep'
import InterestAssessmentStep from './InterestAssessmentStep'
import TrackSelectionStep from './TrackSelectionStep'
import PaymentStep from './PaymentStep'
import SuccessStep from './SuccessStep'

export interface StudentData {
  // Basic Info
  fullName: string
  email: string
  phone: string
  class: string
  school: string
  city: string
  parentEmail: string
  
  // Assessment Results
  interests: string[]
  experience: string
  goals: string[]
  quizResults: {
    score: number
    recommendations: string[]
  }
  
  // Track Selection
  selectedTrack: string
  trackMatch: number
  
  // Payment
  plan: string
  paymentMethod: string
  isTrialUser: boolean
}

const steps = [
  {
    id: 1,
    title: 'Basic Info',
    description: 'Tell us about yourself'
  },
  {
    id: 2,
    title: 'Assessment',
    description: 'Discover your interests'
  },
  {
    id: 3,
    title: 'Track Selection',
    description: 'Choose your path'
  },
  {
    id: 4,
    title: 'Payment',
    description: 'Start your journey'
  }
]

export default function StudentRegistration() {
  const [currentStep, setCurrentStep] = useState(1)
  const [studentData, setStudentData] = useState<StudentData>({
    fullName: '',
    email: '',
    phone: '',
    class: '',
    school: '',
    city: '',
    parentEmail: '',
    interests: [],
    experience: '',
    goals: [],
    quizResults: {
      score: 0,
      recommendations: []
    },
    selectedTrack: '',
    trackMatch: 0,
    plan: '',
    paymentMethod: '',
    isTrialUser: true
  })

  const [isComplete, setIsComplete] = useState(false)

  const updateStudentData = (updates: Partial<StudentData>) => {
    setStudentData(prev => ({ ...prev, ...updates }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const completeRegistration = () => {
    setIsComplete(true)
  }

  if (isComplete) {
    return <SuccessStep studentData={studentData} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      {/* Header */}
      <div className="bg-white shadow-soft sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-scaler-blue to-purple-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">Scaler</span>
                <span className="text-xs font-medium text-scaler-blue -mt-1">SchoolConnect</span>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="hidden md:flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`progress-step ${
                    currentStep > step.id ? 'completed' : 
                    currentStep === step.id ? 'active' : 'inactive'
                  }`}>
                    {currentStep > step.id ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="text-sm font-semibold">{step.id}</span>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-0.5 mx-2 ${
                      currentStep > step.id ? 'bg-success-green' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Progress */}
            <div className="md:hidden text-sm text-gray-600">
              Step {currentStep} of {steps.length}
            </div>
          </div>

          {/* Step Title & Description */}
          <div className="mt-6 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {steps[currentStep - 1].title}
            </h1>
            <p className="text-gray-600">
              {steps[currentStep - 1].description}
            </p>
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {currentStep === 1 && (
            <BasicInfoStep 
              data={studentData}
              updateData={updateStudentData}
              onNext={nextStep}
            />
          )}
          
          {currentStep === 2 && (
            <InterestAssessmentStep 
              data={studentData}
              updateData={updateStudentData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          
          {currentStep === 3 && (
            <TrackSelectionStep 
              data={studentData}
              updateData={updateStudentData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          
          {currentStep === 4 && (
            <PaymentStep 
              data={studentData}
              updateData={updateStudentData}
              onBack={prevStep}
              onComplete={completeRegistration}
            />
          )}
        </motion.div>
      </div>

      {/* Mobile Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-semibold text-gray-900">
            {Math.round((currentStep / steps.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-scaler-blue to-purple-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}