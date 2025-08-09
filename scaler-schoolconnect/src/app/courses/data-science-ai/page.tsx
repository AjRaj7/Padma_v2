'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Bot, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  Play, 
  Code, 
  Trophy, 
  MessageCircle,
  Calendar,
  Download,
  ArrowRight,
  BookOpen,
  Target,
  BarChart3,
  Brain
} from 'lucide-react'

const courseData = {
  title: 'Data Science & AI',
  subtitle: 'Master Python, machine learning, and artificial intelligence from scratch',
  duration: '10 weeks',
  students: 1247,
  rating: 4.9,
  level: 'Beginner to Advanced',
  projects: 8,
  technologies: ['Python', 'TensorFlow', 'Pandas', 'Jupyter', 'Scikit-learn'],
  outcomes: [
    'Build movie recommendation system',
    'Create interactive data dashboard',
    'Develop AI chatbot',
    'Deploy ML models to cloud'
  ],
  highlights: [
    '70+ hours of content',
    'Real datasets from industry', 
    'AI model deployment',
    'Data visualization mastery',
    'Machine learning algorithms',
    'Portfolio ML projects'
  ]
}

const curriculum = [
  {
    week: 1,
    title: 'Python Programming Foundations',
    topics: [
      'Python syntax and data structures',
      'Control flow and functions',
      'Object-oriented programming concepts',
      'Working with files and modules'
    ],
    project: 'Python Data Analysis Tool'
  },
  {
    week: 2,
    title: 'Data Manipulation with Pandas',
    topics: [
      'DataFrames and Series operations',
      'Data cleaning and preprocessing',
      'Handling missing data and outliers',
      'Data aggregation and grouping'
    ],
    project: 'COVID-19 Data Analysis'
  },
  {
    week: 3,
    title: 'Data Visualization',
    topics: [
      'Matplotlib and Seaborn libraries',
      'Creating charts, plots, and graphs',
      'Statistical visualizations',
      'Interactive dashboards with Plotly'
    ],
    project: 'Sales Performance Dashboard'
  },
  {
    week: 4,
    title: 'Statistics and Probability',
    topics: [
      'Descriptive and inferential statistics',
      'Probability distributions',
      'Hypothesis testing and p-values',
      'Correlation and causation analysis'
    ],
    project: 'Statistical Analysis Report'
  },
  {
    week: 5,
    title: 'Machine Learning Fundamentals',
    topics: [
      'Supervised vs unsupervised learning',
      'Linear and logistic regression',
      'Decision trees and random forests',
      'Model evaluation and validation'
    ],
    project: 'House Price Prediction Model'
  },
  {
    week: 6,
    title: 'Advanced Machine Learning',
    topics: [
      'Support vector machines and clustering',
      'Neural networks and deep learning',
      'Natural language processing basics',
      'Computer vision fundamentals'
    ],
    project: 'Image Classification System'
  },
  {
    week: 7,
    title: 'Deep Learning with TensorFlow',
    topics: [
      'TensorFlow and Keras frameworks',
      'Building neural network architectures',
      'Convolutional and recurrent networks',
      'Transfer learning techniques'
    ],
    project: 'AI-Powered Chatbot'
  },
  {
    week: 8,
    title: 'Real-World AI Applications',
    topics: [
      'Recommendation systems and algorithms',
      'Sentiment analysis and text mining',
      'Time series forecasting',
      'Ethical AI and bias detection'
    ],
    project: 'Movie Recommendation Engine'
  },
  {
    week: 9,
    title: 'Model Deployment & MLOps',
    topics: [
      'Model serialization and APIs',
      'Cloud deployment with AWS/GCP',
      'Model monitoring and maintenance',
      'A/B testing for ML models'
    ],
    project: 'Deploy ML Model to Production'
  },
  {
    week: 10,
    title: 'Capstone AI Project',
    topics: [
      'End-to-end data science project',
      'Advanced AI model development',
      'Performance optimization',
      'Project presentation and documentation'
    ],
    project: 'Complete AI Portfolio Project'
  }
]

const instructors = [
  {
    name: 'Dr. Rajesh Sharma',
    role: 'Senior Data Scientist',
    company: 'Amazon',
    experience: '10+ years',
    image: '/api/placeholder/80/80',
    bio: 'PhD in Machine Learning from IIT Delhi. Led AI initiatives at Amazon with expertise in recommendation systems and NLP.',
    achievements: [
      'Published 25+ research papers',
      'Built ML systems for 100M+ users',
      'AI conference keynote speaker'
    ]
  },
  {
    name: 'Priya Mehta',
    role: 'AI Research Engineer', 
    company: 'NVIDIA',
    experience: '6+ years',
    image: '/api/placeholder/80/80',
    bio: 'Computer vision expert working on autonomous vehicles at NVIDIA. Specializes in deep learning and neural network architectures.',
    achievements: [
      'NVIDIA AI research team lead',
      'Patent holder in computer vision',
      'Open source ML contributor'
    ]
  }
]

const testimonials = [
  {
    name: 'Karthik Raj',
    role: 'Class 12 Student',
    school: 'Narayana School',
    quote: 'I built my own AI chatbot in just 10 weeks! The way complex concepts are explained made everything so clear.',
    rating: 5,
    image: '/api/placeholder/60/60'
  },
  {
    name: 'Meera Patel',
    role: 'Class 11 Student', 
    school: 'Delhi Public School',
    quote: 'The real-world projects with actual datasets made me feel like a professional data scientist. Amazing experience!',
    rating: 5,
    image: '/api/placeholder/60/60'
  }
]

export default function DataScienceAICoursePage() {
  const [activeWeek, setActiveWeek] = useState(1)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-blue-200 mb-4">
                <Bot className="w-5 h-5" />
                <span className="font-medium">Data Science & AI Track</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {courseData.title}
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {courseData.subtitle}
              </p>

              {/* Course Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold text-white">{courseData.duration}</div>
                  <div className="text-blue-200 text-sm">Duration</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{courseData.projects}</div>
                  <div className="text-blue-200 text-sm">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{courseData.rating}</div>
                  <div className="text-blue-200 text-sm">Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{courseData.students}</div>
                  <div className="text-blue-200 text-sm">Students</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/student-registration"
                  className="btn-primary bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                
                <button className="btn-ghost border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  See AI Projects
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
                <h3 className="text-xl font-bold text-white mb-6">AI & ML Technologies</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {courseData.technologies.map((tech, index) => (
                    <div key={tech} className="bg-white/20 rounded-lg p-3 text-center">
                      <div className="font-semibold text-white">{tech}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-white">AI Projects You'll Build:</h4>
                  {courseData.outcomes.slice(0, 3).map((outcome, index) => (
                    <div key={outcome} className="flex items-center gap-3 text-blue-100">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      <span className="text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Data Science & AI?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enter the future of technology with hands-on experience in artificial intelligence and data science
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseData.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-purple-600/20 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{highlight}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Curriculum</h2>
            <p className="text-xl text-gray-600">
              10-week comprehensive data science and AI mastery program
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Week Navigation */}
            <div className="grid grid-cols-5 lg:grid-cols-10 gap-2 mb-8">
              {curriculum.map((week) => (
                <button
                  key={week.week}
                  onClick={() => setActiveWeek(week.week)}
                  className={`p-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeWeek === week.week
                      ? 'bg-purple-600 text-white shadow-medium'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Week {week.week}
                </button>
              ))}
            </div>

            {/* Active Week Content */}
            {curriculum.map((week) => (
              activeWeek === week.week && (
                <motion.div
                  key={week.week}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl shadow-medium p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold">
                      {week.week}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{week.title}</h3>
                      <p className="text-gray-600">Week {week.week} of 10</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Topics Covered
                      </h4>
                      <ul className="space-y-3">
                        {week.topics.map((topic, index) => (
                          <li key={topic} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-success-green mt-0.5" />
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Week Project
                      </h4>
                      <div className="bg-gradient-to-r from-purple-600/10 to-teal-500/10 rounded-xl p-6">
                        <h5 className="font-semibold text-gray-900 mb-2">{week.project}</h5>
                        <p className="text-gray-600 text-sm mb-4">
                          Apply AI and data science concepts to solve real-world problems with industry datasets.
                        </p>
                        <div className="flex items-center gap-2 text-purple-600 text-sm font-medium">
                          <BarChart3 className="w-4 h-4" />
                          <span>Data science & AI project</span>
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

      {/* Instructors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn from AI Research Leaders</h2>
            <p className="text-xl text-gray-600">
              World-class data scientists and AI researchers from top tech companies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                    <p className="text-purple-600 font-semibold mb-1">{instructor.role}</p>
                    <p className="text-gray-600 mb-2">{instructor.company} • {instructor.experience}</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{instructor.bio}</p>
                    
                    <div className="space-y-2">
                      {instructor.achievements.map((achievement, i) => (
                        <div key={achievement} className="flex items-center gap-2 text-sm text-gray-600">
                          <Trophy className="w-4 h-4 text-yellow-500" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Success Stories</h2>
            <p className="text-xl text-gray-600">
              Students building the future with artificial intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-soft p-8"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}, {testimonial.school}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Build AI That Changes the World?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Master the technologies that are shaping the future and become an AI pioneer
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/student-registration"
                className="btn-primary bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
              >
                Start 7-Day Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <button className="btn-ghost border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4">
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk to AI Expert
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-8 text-blue-200 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}