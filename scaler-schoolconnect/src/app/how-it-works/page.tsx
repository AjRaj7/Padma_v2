'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Play, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  BookOpen, 
  Code, 
  Trophy, 
  Target,
  Calendar,
  MessageCircle,
  Star,
  Zap,
  Brain,
  Rocket,
  Award,
  TrendingUp,
  Clock,
  Shield
} from 'lucide-react'

const methodology = [
  {
    phase: 1,
    title: 'Discover & Assess',
    duration: 'Week 1',
    description: 'We start by understanding your interests, current skill level, and career goals through our comprehensive assessment.',
    steps: [
      'Complete interest and aptitude assessment',
      'Get personalized track recommendations', 
      'Set learning goals and timeline',
      'Meet your dedicated mentor'
    ],
    outcome: 'Perfect learning path tailored to your goals',
    icon: Target,
    color: 'from-blue-500 to-purple-600'
  },
  {
    phase: 2,
    title: 'Learn & Practice',
    duration: 'Weeks 2-8',
    description: 'Structured learning with bite-sized lessons, hands-on coding practice, and regular assessments.',
    steps: [
      'Interactive video lessons with real-world examples',
      'Hands-on coding exercises and challenges',
      'Weekly live coding sessions with instructors',
      'Build 2-3 projects per month'
    ],
    outcome: 'Strong foundation in chosen technology stack',
    icon: BookOpen,
    color: 'from-green-500 to-blue-500'
  },
  {
    phase: 3,
    title: 'Build & Create',
    duration: 'Weeks 9-12',
    description: 'Apply your skills to real-world projects that showcase your abilities and build your portfolio.',
    steps: [
      'Work on industry-level projects',
      'Get code reviews from expert mentors',
      'Deploy your projects live on the web',
      'Present your work to the community'
    ],
    outcome: 'Professional portfolio with 5+ live projects',
    icon: Code,
    color: 'from-purple-500 to-pink-500'
  },
  {
    phase: 4,
    title: 'Excel & Advance',
    duration: 'Weeks 13-16',
    description: 'Take your skills to the next level with advanced topics, competitions, and career preparation.',
    steps: [
      'Master advanced concepts and best practices',
      'Participate in coding competitions',
      'Mock interviews and career guidance',
      'Get certified and job-ready'
    ],
    outcome: 'Ready for internships, jobs, or higher studies',
    icon: Trophy,
    color: 'from-yellow-500 to-red-500'
  }
]

const learningApproach = [
  {
    title: 'Project-Based Learning',
    description: 'Learn by building real applications, not just watching tutorials',
    icon: Rocket,
    benefits: [
      'Build portfolio while learning',
      'See immediate results of your code',
      'Understand real-world development process'
    ]
  },
  {
    title: 'Personalized Mentorship',
    description: '1-on-1 guidance from industry experts who care about your success',
    icon: Users,
    benefits: [
      'Get unstuck quickly when facing challenges',
      'Receive personalized feedback on your code',
      'Career guidance from working professionals'
    ]
  },
  {
    title: 'Community Learning',
    description: 'Learn alongside peers, collaborate, and grow together',
    icon: MessageCircle,
    benefits: [
      'Peer programming and collaboration',
      'Share projects and get feedback',
      'Networking with like-minded students'
    ]
  },
  {
    title: 'Industry-Relevant Skills',
    description: 'Curriculum designed by professionals from top tech companies',
    icon: Award,
    benefits: [
      'Latest frameworks and technologies',
      'Best practices used in real companies',
      'Skills that employers actually want'
    ]
  }
]

const weeklySchedule = {
  monday: {
    time: '7:00 PM - 8:00 PM',
    activity: 'Live Coding Session',
    description: 'Interactive coding with instructor and peers'
  },
  tuesday: {
    time: 'Self-paced',
    activity: 'Video Lessons & Practice',
    description: 'Complete assigned modules at your own pace'
  },
  wednesday: {
    time: '7:30 PM - 8:30 PM',
    activity: 'Project Workshop',
    description: 'Work on current project with mentor guidance'
  },
  thursday: {
    time: 'Self-paced',
    activity: 'Coding Challenges',
    description: 'Solve problems and strengthen your skills'
  },
  friday: {
    time: '8:00 PM - 8:30 PM',
    activity: '1-on-1 Mentorship',
    description: 'Personal guidance and doubt resolution'
  },
  saturday: {
    time: '6:00 PM - 7:00 PM',
    activity: 'Community Showcase',
    description: 'Share your progress and see others\' work'
  },
  sunday: {
    time: 'Flexible',
    activity: 'Review & Planning',
    description: 'Reflect on the week and plan ahead'
  }
}

const successMetrics = [
  { metric: '94%', description: 'Course completion rate' },
  { metric: '8.7/10', description: 'Average student satisfaction' },
  { metric: '12+', description: 'Projects built per student' },
  { metric: '89%', description: 'Get internships/jobs within 6 months' }
]

export default function HowItWorksPage() {
  const [selectedPhase, setSelectedPhase] = useState(1)
  const [activeDay, setActiveDay] = useState('monday')

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
              How SchoolConnect<br />
              <span className="text-gradient">Transforms Students</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Our proven methodology has helped thousands of students go from coding beginners 
              to building professional-grade applications. Here's exactly how we do it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/student-registration"
                className="btn-primary bg-white text-scaler-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
              >
                Start Learning Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <button className="btn-ghost border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Watch Success Stories
              </button>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {successMetrics.map((item, index) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white">{item.metric}</div>
                  <div className="text-blue-200 text-sm">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4-Phase Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven 4-Phase Learning Method</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From complete beginner to job-ready developer in 16 weeks through our structured approach
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Phase Selection */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {methodology.map((phase) => (
                <button
                  key={phase.phase}
                  onClick={() => setSelectedPhase(phase.phase)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    selectedPhase === phase.phase
                      ? 'bg-scaler-blue text-white shadow-medium'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Phase {phase.phase}: {phase.title}
                </button>
              ))}
            </div>

            {/* Selected Phase Details */}
            {methodology.map((phase) => (
              selectedPhase === phase.phase && (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${phase.color} text-white flex items-center justify-center`}>
                        <phase.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Phase {phase.phase}</h3>
                        <p className="text-scaler-blue font-semibold">{phase.title}</p>
                        <p className="text-gray-600">{phase.duration}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                      {phase.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4">What You'll Do:</h4>
                      <ul className="space-y-3">
                        {phase.steps.map((step, index) => (
                          <li key={step} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`p-6 rounded-xl bg-gradient-to-r ${phase.color} bg-opacity-10`}>
                      <h4 className="font-bold text-gray-900 mb-2">Phase Outcome</h4>
                      <p className="text-gray-700">{phase.outcome}</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-gray-50 rounded-2xl p-8">
                      <h4 className="font-bold text-gray-900 mb-6">Phase {phase.phase} Timeline</h4>
                      
                      <div className="space-y-6">
                        {phase.steps.map((step, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-scaler-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 mb-1">Week {phase.phase === 1 ? '1' : `${(phase.phase - 1) * 4 + index + 1}`}</div>
                              <div className="text-gray-600 text-sm">{step}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-8 border-t border-gray-200">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-success-green mb-2">✓ Phase Complete</div>
                          <div className="text-gray-600">{phase.outcome}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Our Approach Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've perfected our teaching methodology based on how students actually learn best
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {learningApproach.map((approach, index) => {
              const IconComponent = approach.icon
              return (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-medium p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-scaler-blue/20 text-scaler-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{approach.description}</p>
                      
                      <ul className="space-y-2">
                        {approach.benefits.map((benefit, i) => (
                          <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Weekly Learning Schedule</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible schedule designed around school hours - just 1-2 hours per day
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Day Selection */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {Object.keys(weeklySchedule).map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 capitalize ${
                    activeDay === day
                      ? 'bg-scaler-blue text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Weekly Schedule Grid */}
            <div className="grid md:grid-cols-7 gap-4 mb-12">
              {Object.entries(weeklySchedule).map(([day, schedule]) => (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    activeDay === day
                      ? 'border-scaler-blue bg-scaler-blue/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <h3 className="font-bold text-gray-900 capitalize mb-2">{day}</h3>
                  <div className="text-sm text-scaler-blue font-medium mb-2">{schedule.time}</div>
                  <div className="font-medium text-gray-800 mb-2">{schedule.activity}</div>
                  <div className="text-xs text-gray-600">{schedule.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Schedule Benefits */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Clock className="w-8 h-8 text-scaler-blue mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Flexible Timing</h4>
                <p className="text-gray-600 text-sm">Most content is self-paced, live sessions recorded for later viewing</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Calendar className="w-8 h-8 text-success-green mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">School-Friendly</h4>
                <p className="text-gray-600 text-sm">Designed around Class 10-12 schedules and exam periods</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Progressive Learning</h4>
                <p className="text-gray-600 text-sm">Each week builds on the previous, ensuring solid foundation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Timeline */}
      <section className="py-16 bg-gradient-to-r from-success-green/10 to-scaler-blue/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Success Journey Timeline</h2>
            <p className="text-xl text-gray-600">
              Track your progress from beginner to job-ready developer
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-scaler-blue to-success-green"></div>

              <div className="space-y-12">
                {[
                  { week: 1, title: 'First Code Written', description: 'Complete your first "Hello World" and feel the excitement of coding' },
                  { week: 4, title: 'First Website Live', description: 'Deploy your first website to the internet and share with friends' },
                  { week: 8, title: 'Portfolio Showcase', description: 'Present your projects to the community and get feedback' },
                  { week: 12, title: 'Industry Project', description: 'Build a complex application that solves real-world problems' },
                  { week: 16, title: 'Job Ready', description: 'Ready for internships, jobs, or advanced computer science studies' }
                ].map((milestone, index) => (
                  <motion.div
                    key={milestone.week}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white rounded-xl shadow-medium p-6">
                        <div className="text-scaler-blue font-bold mb-2">Week {milestone.week}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="w-8 h-8 bg-white border-4 border-scaler-blue rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-scaler-blue rounded-full"></div>
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block"></div>
                  </motion.div>
                ))}
              </div>
            </div>
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
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have already begun their journey from complete beginners to confident developers.
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
                Talk to Learning Advisor
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Start coding in your first session</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Join 25,000+ successful students</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}