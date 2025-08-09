'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Globe, 
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
  Target
} from 'lucide-react'

const courseData = {
  title: 'Web Development Mastery',
  subtitle: 'Build modern websites and web applications from scratch',
  duration: '8 weeks',
  students: 2847,
  rating: 4.9,
  level: 'Beginner to Intermediate',
  projects: 12,
  technologies: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
  outcomes: [
    'Build responsive portfolio website',
    'Create social media application',
    'Develop e-commerce platform',
    'Deploy projects to the cloud'
  ],
  highlights: [
    '60+ hours of video content',
    'Live coding sessions twice a week', 
    '1-on-1 mentor support',
    'Industry project experience',
    'Job placement assistance',
    'Lifetime access to materials'
  ]
}

const curriculum = [
  {
    week: 1,
    title: 'Web Development Foundations',
    topics: [
      'HTML5 semantic elements and structure',
      'CSS3 styling and layouts',
      'Responsive design with Flexbox & Grid',
      'Browser developer tools mastery'
    ],
    project: 'Personal Portfolio Website'
  },
  {
    week: 2,
    title: 'JavaScript Fundamentals',
    topics: [
      'Variables, functions, and control flow',
      'DOM manipulation and event handling',
      'Asynchronous JavaScript (Promises, async/await)',
      'ES6+ features and modern syntax'
    ],
    project: 'Interactive Calculator App'
  },
  {
    week: 3,
    title: 'React.js Basics',
    topics: [
      'Components and JSX syntax',
      'Props, state, and lifecycle methods',
      'Event handling and forms',
      'React Router for navigation'
    ],
    project: 'Todo List with React'
  },
  {
    week: 4,
    title: 'Advanced React Concepts',
    topics: [
      'Hooks (useState, useEffect, useContext)',
      'State management patterns',
      'API integration and data fetching',
      'Performance optimization techniques'
    ],
    project: 'Weather Dashboard App'
  },
  {
    week: 5,
    title: 'Backend Development with Node.js',
    topics: [
      'Server setup with Express.js',
      'RESTful API design principles',
      'Database integration with MongoDB',
      'Authentication and authorization'
    ],
    project: 'Blog API Backend'
  },
  {
    week: 6,
    title: 'Full-Stack Integration',
    topics: [
      'Connecting React frontend to Node.js backend',
      'Real-time features with WebSockets',
      'File uploads and image handling',
      'Error handling and validation'
    ],
    project: 'Social Media Platform'
  },
  {
    week: 7,
    title: 'Deployment & DevOps',
    topics: [
      'Version control with Git and GitHub',
      'Deployment to Netlify and Heroku',
      'Environment variables and configuration',
      'Performance monitoring and optimization'
    ],
    project: 'Deploy All Projects Live'
  },
  {
    week: 8,
    title: 'Capstone Project',
    topics: [
      'Planning and wireframing',
      'Full-stack e-commerce development',
      'Testing and debugging strategies',
      'Portfolio presentation and documentation'
    ],
    project: 'Complete E-commerce Website'
  }
]

const instructors = [
  {
    name: 'Rohit Kumar',
    role: 'Senior Full-Stack Developer',
    company: 'Google',
    experience: '8+ years',
    image: '/api/placeholder/80/80',
    bio: 'Former tech lead at Google with expertise in React and Node.js. Passionate about teaching and helping students break into tech.',
    achievements: [
      'Built apps used by 10M+ users',
      'Mentor to 500+ developers',
      'Speaker at tech conferences'
    ]
  },
  {
    name: 'Priya Patel',
    role: 'Frontend Architect', 
    company: 'Microsoft',
    experience: '6+ years',
    image: '/api/placeholder/80/80',
    bio: 'UI/UX expert and React specialist who has worked on Microsoft Office web applications. Focuses on modern web development practices.',
    achievements: [
      'Led teams of 15+ developers',
      'Expert in React ecosystem',
      'Published web dev articles'
    ]
  }
]

const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Class 11 Student',
    school: 'DPS Bangalore',
    quote: 'The course structure is amazing! I went from zero coding knowledge to building my own social media app in just 8 weeks.',
    rating: 5,
    image: '/api/placeholder/60/60'
  },
  {
    name: 'Kavya Reddy',
    role: 'Class 12 Student', 
    school: 'Ryan International',
    quote: 'The instructors are so patient and helpful. The 1-on-1 mentoring sessions really helped me understand complex concepts.',
    rating: 5,
    image: '/api/placeholder/60/60'
  }
]

export default function WebDevelopmentCoursePage() {
  const [activeWeek, setActiveWeek] = useState(1)

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
                <Globe className="w-5 h-5" />
                <span className="font-medium">Web Development Track</span>
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
                  className="btn-primary bg-white text-scaler-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                
                <button className="btn-ghost border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Intro Video
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
                <h3 className="text-xl font-bold text-white mb-6">Technologies You'll Master</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {courseData.technologies.map((tech, index) => (
                    <div key={tech} className="bg-white/20 rounded-lg p-3 text-center">
                      <div className="font-semibold text-white">{tech}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-white">What You'll Build:</h4>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose This Course?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive curriculum designed by industry experts to give you real-world skills
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
                <div className="w-12 h-12 bg-scaler-blue/20 text-scaler-blue rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6" />
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
              8-week structured learning path with hands-on projects
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Week Navigation */}
            <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
              {curriculum.map((week) => (
                <button
                  key={week.week}
                  onClick={() => setActiveWeek(week.week)}
                  className={`p-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeWeek === week.week
                      ? 'bg-scaler-blue text-white shadow-medium'
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
                    <div className="w-12 h-12 bg-scaler-blue text-white rounded-lg flex items-center justify-center font-bold">
                      {week.week}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{week.title}</h3>
                      <p className="text-gray-600">Week {week.week} of 8</p>
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
                      <div className="bg-gradient-to-r from-scaler-blue/10 to-purple-accent/10 rounded-xl p-6">
                        <h5 className="font-semibold text-gray-900 mb-2">{week.project}</h5>
                        <p className="text-gray-600 text-sm mb-4">
                          Apply your newly learned skills in a real-world project that builds your portfolio.
                        </p>
                        <div className="flex items-center gap-2 text-scaler-blue text-sm font-medium">
                          <Code className="w-4 h-4" />
                          <span>Hands-on coding experience</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn from Industry Experts</h2>
            <p className="text-xl text-gray-600">
              Our instructors are seasoned professionals from top tech companies
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
                  <div className="w-20 h-20 bg-scaler-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                    <p className="text-scaler-blue font-semibold mb-1">{instructor.role}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Hear from students who transformed their coding journey
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
                  <div className="w-12 h-12 bg-scaler-blue rounded-full flex items-center justify-center text-white font-bold">
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
      <section className="py-16 bg-gradient-to-r from-scaler-blue to-purple-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Web Development Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their coding skills with our expert-led program
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/student-registration"
                className="btn-primary bg-white text-scaler-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
              >
                Start 7-Day Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <button className="btn-ghost border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4">
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk to Counselor
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