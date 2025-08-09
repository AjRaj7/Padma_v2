'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Smartphone, 
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
  title: 'Mobile App Development',
  subtitle: 'Create stunning iOS and Android apps with React Native and Flutter',
  duration: '9 weeks',
  students: 1847,
  rating: 4.8,
  level: 'Beginner to Advanced',
  projects: 10,
  technologies: ['React Native', 'Flutter', 'Firebase', 'App Store', 'Google Play'],
  outcomes: [
    'Build weather application',
    'Create social chat app',
    'Develop fitness tracker',
    'Publish apps to stores'
  ],
  highlights: [
    '65+ hours of video content',
    'Live mobile dev sessions', 
    'App store deployment guide',
    'Real device testing',
    'Industry mentor support',
    'Portfolio app development'
  ]
}

const curriculum = [
  {
    week: 1,
    title: 'Mobile Development Foundations',
    topics: [
      'Mobile app development landscape',
      'Native vs Hybrid vs Cross-platform',
      'Setting up development environment',
      'Understanding mobile UI/UX principles'
    ],
    project: 'Hello World Mobile App'
  },
  {
    week: 2,
    title: 'React Native Fundamentals',
    topics: [
      'React Native components and navigation',
      'Styling with StyleSheet and Flexbox',
      'Handling user input and forms',
      'State management in mobile apps'
    ],
    project: 'Calculator App with React Native'
  },
  {
    week: 3,
    title: 'Advanced React Native',
    topics: [
      'Navigation patterns and tab bars',
      'API integration and data fetching',
      'Device features (camera, location, storage)',
      'Push notifications setup'
    ],
    project: 'Photo Gallery App'
  },
  {
    week: 4,
    title: 'Flutter Development',
    topics: [
      'Dart programming language basics',
      'Flutter widgets and state management',
      'Material Design and Cupertino widgets',
      'Animation and custom UI components'
    ],
    project: 'Weather App with Flutter'
  },
  {
    week: 5,
    title: 'Database & Backend Integration',
    topics: [
      'Firebase Realtime Database',
      'Cloud Firestore for mobile apps',
      'User authentication and security',
      'File storage and media handling'
    ],
    project: 'Chat Application Backend'
  },
  {
    week: 6,
    title: 'Advanced Mobile Features',
    topics: [
      'Real-time messaging with Socket.io',
      'GPS and location-based services',
      'Camera integration and image processing',
      'Offline storage and sync capabilities'
    ],
    project: 'Social Media App'
  },
  {
    week: 7,
    title: 'Performance & Testing',
    topics: [
      'Mobile app performance optimization',
      'Unit testing and integration testing',
      'Debugging tools and techniques',
      'Memory management and battery optimization'
    ],
    project: 'Fitness Tracking App'
  },
  {
    week: 8,
    title: 'App Store Deployment',
    topics: [
      'App Store guidelines and requirements',
      'Google Play Store submission process',
      'App signing and security certificates',
      'Marketing and app store optimization'
    ],
    project: 'Deploy Apps to Stores'
  },
  {
    week: 9,
    title: 'Capstone Project',
    topics: [
      'End-to-end app development',
      'Advanced feature implementation',
      'Performance testing and optimization',
      'Final project presentation'
    ],
    project: 'Complete Mobile App Portfolio'
  }
]

const instructors = [
  {
    name: 'Arjun Khanna',
    role: 'Senior Mobile Developer',
    company: 'Flipkart',
    experience: '7+ years',
    image: '/api/placeholder/80/80',
    bio: 'Led mobile development at Flipkart with expertise in React Native and Flutter. Published 10+ apps with millions of downloads.',
    achievements: [
      'Built apps with 10M+ downloads',
      'React Native core contributor',
      'Mobile dev conference speaker'
    ]
  },
  {
    name: 'Sneha Gupta',
    role: 'Flutter Expert', 
    company: 'Paytm',
    experience: '5+ years',
    image: '/api/placeholder/80/80',
    bio: 'Flutter specialist who architected Paytm\'s mobile platform. Expert in cross-platform development and app performance.',
    achievements: [
      'Flutter GDE (Google Developer Expert)',
      'Published Flutter packages',
      '50+ apps in production'
    ]
  }
]

const testimonials = [
  {
    name: 'Ravi Kumar',
    role: 'Class 12 Student',
    school: 'Kendriya Vidyalaya',
    quote: 'I published my first app to Google Play Store within 9 weeks! The deployment guidance was incredibly helpful.',
    rating: 5,
    image: '/api/placeholder/60/60'
  },
  {
    name: 'Ananya Singh',
    role: 'Class 11 Student', 
    school: 'Modern School',
    quote: 'Learning both React Native and Flutter gave me so much confidence. I can build any mobile app idea now!',
    rating: 5,
    image: '/api/placeholder/60/60'
  }
]

export default function MobileDevelopmentCoursePage() {
  const [activeWeek, setActiveWeek] = useState(1)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-accent via-pink-500 to-scaler-blue text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-purple-200 mb-4">
                <Smartphone className="w-5 h-5" />
                <span className="font-medium">Mobile Development Track</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {courseData.title}
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                {courseData.subtitle}
              </p>

              {/* Course Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold text-white">{courseData.duration}</div>
                  <div className="text-purple-200 text-sm">Duration</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{courseData.projects}</div>
                  <div className="text-purple-200 text-sm">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{courseData.rating}</div>
                  <div className="text-purple-200 text-sm">Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{courseData.students}</div>
                  <div className="text-purple-200 text-sm">Students</div>
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
                  Watch Demo Apps
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
                <h3 className="text-xl font-bold text-white mb-6">Mobile Technologies</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {courseData.technologies.map((tech, index) => (
                    <div key={tech} className="bg-white/20 rounded-lg p-3 text-center">
                      <div className="font-semibold text-white">{tech}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Apps You'll Build:</h4>
                  {courseData.outcomes.slice(0, 3).map((outcome, index) => (
                    <div key={outcome} className="flex items-center gap-3 text-purple-100">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Mobile Development?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn to build apps for billions of mobile users worldwide with cutting-edge technologies
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
                <div className="w-12 h-12 bg-purple-accent/20 text-purple-accent rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6" />
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
              9-week comprehensive mobile development journey
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Week Navigation */}
            <div className="grid grid-cols-3 lg:grid-cols-9 gap-2 mb-8">
              {curriculum.map((week) => (
                <button
                  key={week.week}
                  onClick={() => setActiveWeek(week.week)}
                  className={`p-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeWeek === week.week
                      ? 'bg-purple-accent text-white shadow-medium'
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
                    <div className="w-12 h-12 bg-purple-accent text-white rounded-lg flex items-center justify-center font-bold">
                      {week.week}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{week.title}</h3>
                      <p className="text-gray-600">Week {week.week} of 9</p>
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
                      <div className="bg-gradient-to-r from-purple-accent/10 to-pink-500/10 rounded-xl p-6">
                        <h5 className="font-semibold text-gray-900 mb-2">{week.project}</h5>
                        <p className="text-gray-600 text-sm mb-4">
                          Build a real mobile application that showcases your newly acquired skills.
                        </p>
                        <div className="flex items-center gap-2 text-purple-accent text-sm font-medium">
                          <Smartphone className="w-4 h-4" />
                          <span>Mobile app development</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn from Mobile Experts</h2>
            <p className="text-xl text-gray-600">
              Industry professionals from top tech companies and startups
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
                  <div className="w-20 h-20 bg-purple-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                    <p className="text-purple-accent font-semibold mb-1">{instructor.role}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">
              From beginners to published mobile app developers
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
                  <div className="w-12 h-12 bg-purple-accent rounded-full flex items-center justify-center text-white font-bold">
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
      <section className="py-16 bg-gradient-to-r from-purple-accent to-pink-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Build Your First Mobile App?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join the mobile revolution and create apps that millions of users will love
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
                Talk to Counselor
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-8 text-purple-200 text-sm">
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