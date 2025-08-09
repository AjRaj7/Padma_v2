'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Bot, Smartphone, Star } from 'lucide-react'
import { StudentData } from './StudentRegistration'

interface TrackSelectionStepProps {
  data: StudentData
  updateData: (updates: Partial<StudentData>) => void
  onNext: () => void
  onBack: () => void
}

const tracks = [
  {
    id: 'web-development',
    name: 'Web Development',
    icon: Globe,
    match: 95,
    duration: '8 weeks',
    projects: 12,
    description: 'Build responsive websites and web applications using React and Node.js',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
    outcomes: ['Portfolio website', 'Social media app', 'E-commerce platform']
  },
  {
    id: 'mobile-development', 
    name: 'Mobile App Development',
    icon: Smartphone,
    match: 78,
    duration: '9 weeks',
    projects: 10,
    description: 'Create cross-platform mobile apps with React Native and Flutter',
    skills: ['React Native', 'Flutter', 'Firebase', 'App Store'],
    outcomes: ['Weather app', 'Social chat app', 'Fitness tracker']
  },
  {
    id: 'data-science-ai',
    name: 'Data Science & AI',
    icon: Bot,
    match: 65,
    duration: '10 weeks',
    projects: 8,
    description: 'Master Python, machine learning, and data visualization',
    skills: ['Python', 'TensorFlow', 'Pandas', 'Jupyter'],
    outcomes: ['Movie recommender', 'Data dashboard', 'AI chatbot']
  }
]

export default function TrackSelectionStep({ data, updateData, onNext, onBack }: TrackSelectionStepProps) {
  const handleTrackSelect = (trackId: string, match: number) => {
    updateData({ 
      selectedTrack: trackId,
      trackMatch: match
    })
    onNext()
  }

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Perfect Matches Found! 🎯
        </h2>
        <p className="text-xl text-gray-600">
          Based on your interests, here are your personalized track recommendations
        </p>
      </motion.div>

      <div className="space-y-6">
        {tracks.map((track, index) => {
          const IconComponent = track.icon
          const isRecommended = index === 0
          
          return (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-medium hover:shadow-hard transition-all duration-300 overflow-hidden ${
                isRecommended ? 'ring-2 ring-scaler-blue' : ''
              }`}
            >
              {isRecommended && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-scaler-blue to-purple-accent text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Perfect Match
                </div>
              )}

              <div className="p-8">
                <div className="grid lg:grid-cols-4 gap-8 items-center">
                  {/* Track Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        isRecommended ? 'bg-scaler-blue text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{track.name}</h3>
                        <div className={`text-lg font-semibold ${
                          isRecommended ? 'text-scaler-blue' : 'text-gray-600'
                        }`}>
                          {track.match}% Match
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {track.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies You'll Learn:</h4>
                      <div className="flex flex-wrap gap-2">
                        {track.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="text-center">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-scaler-blue">{track.duration}</div>
                        <div className="text-sm text-gray-600">Duration</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-success-green">{track.projects}</div>
                        <div className="text-sm text-gray-600">Projects</div>
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="text-center">
                    <button
                      onClick={() => handleTrackSelect(track.id, track.match)}
                      className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
                        isRecommended
                          ? 'bg-scaler-blue hover:bg-blue-600 text-white shadow-medium hover:shadow-hard'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      Select This Track
                    </button>
                    
                    <div className="mt-3 text-sm text-gray-500">
                      Includes 7-day free trial
                    </div>
                  </div>
                </div>

                {/* What You'll Build */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4">What You'll Build:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {track.outcomes.map((outcome, i) => (
                      <div key={outcome} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-success-green/20 text-success-green rounded-lg flex items-center justify-center font-bold text-sm">
                          {i + 1}
                        </div>
                        <span className="text-gray-700 font-medium">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="flex gap-4 mt-8">
        <button onClick={onBack} className="btn-secondary">
          ← Back to Assessment
        </button>
      </div>
    </div>
  )
}