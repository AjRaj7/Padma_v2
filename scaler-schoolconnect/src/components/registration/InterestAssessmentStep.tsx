'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { StudentData } from './StudentRegistration'

interface InterestAssessmentStepProps {
  data: StudentData
  updateData: (updates: Partial<StudentData>) => void
  onNext: () => void
  onBack: () => void
}

const questions = [
  {
    id: 'interest',
    question: 'What interests you most about technology?',
    type: 'single',
    options: [
      { value: 'websites', label: 'Building websites and web apps', icon: '🌐' },
      { value: 'mobile', label: 'Creating mobile applications', icon: '📱' },
      { value: 'ai', label: 'Working with data and AI', icon: '🤖' },
      { value: 'games', label: 'Game development', icon: '🎮' }
    ]
  },
  {
    id: 'experience',
    question: 'How would you describe your current coding experience?',
    type: 'single',
    options: [
      { value: 'beginner', label: 'Complete beginner', icon: '🌱' },
      { value: 'some', label: 'Some basics from school', icon: '📚' },
      { value: 'hobby', label: 'Hobby projects', icon: '🛠️' },
      { value: 'advanced', label: 'Built small applications', icon: '🚀' }
    ]
  },
  {
    id: 'goals',
    question: 'What are your main goals? (Select all that apply)',
    type: 'multiple',
    options: [
      { value: 'fun', label: 'Learn for fun and creativity', icon: '🎨' },
      { value: 'college', label: 'Prepare for engineering entrance', icon: '🎓' },
      { value: 'career', label: 'Start a tech career early', icon: '💼' },
      { value: 'startup', label: 'Build my own startup', icon: '🚀' }
    ]
  }
]

export default function InterestAssessmentStep({ data, updateData, onNext, onBack }: InterestAssessmentStepProps) {
  const [answers, setAnswers] = useState<Record<string, any>>({
    interest: data.interests[0] || '',
    experience: data.experience || '',
    goals: data.goals || []
  })

  const handleAnswer = (questionId: string, value: string, isMultiple = false) => {
    if (isMultiple) {
      const currentAnswers = answers[questionId] || []
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter((v: string) => v !== value)
        : [...currentAnswers, value]
      setAnswers(prev => ({ ...prev, [questionId]: newAnswers }))
    } else {
      setAnswers(prev => ({ ...prev, [questionId]: value }))
    }
  }

  const calculateRecommendations = () => {
    const recs = []
    if (answers.interest === 'websites') recs.push('Web Development')
    if (answers.interest === 'mobile') recs.push('Mobile App Development')
    if (answers.interest === 'ai') recs.push('Data Science & AI')
    if (answers.interest === 'games') recs.push('Game Development')
    return recs
  }

  const handleSubmit = () => {
    updateData({
      interests: [answers.interest],
      experience: answers.experience,
      goals: answers.goals,
      quizResults: {
        score: 85,
        recommendations: calculateRecommendations()
      }
    })
    onNext()
  }

  const isComplete = answers.interest && answers.experience && answers.goals.length > 0

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-medium p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Let's Discover Your Interests!
          </h2>
          <p className="text-gray-600">
            This quick assessment helps us recommend the perfect learning track for you
          </p>
        </div>

        <div className="space-y-12">
          {questions.map((question, qIndex) => (
            <div key={question.id}>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                {qIndex + 1}. {question.question}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {question.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(question.id, option.value, question.type === 'multiple')}
                    className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                      question.type === 'multiple'
                        ? (answers[question.id] || []).includes(option.value)
                          ? 'border-scaler-blue bg-scaler-blue/10'
                          : 'border-gray-200 hover:border-gray-300'
                        : answers[question.id] === option.value
                        ? 'border-scaler-blue bg-scaler-blue/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{option.icon}</span>
                      <span className="font-medium text-gray-900">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-12">
          <button onClick={onBack} className="btn-secondary flex-1">
            ← Back
          </button>
          <button 
            onClick={handleSubmit}
            disabled={!isComplete}
            className="btn-primary flex-1 disabled:opacity-50"
          >
            Get My Recommendations →
          </button>
        </div>
      </motion.div>
    </div>
  )
}