'use client'

import React from 'react'
import Link from 'next/link'
import { Globe, Bot, Smartphone, Shield, ArrowRight, Star, Clock, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const courses = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: Globe,
    description: 'Build responsive websites and web applications using React and Node.js',
    level: 'Beginner Friendly',
    levelColor: 'bg-green-100 text-green-700',
    duration: '8 weeks',
    students: '3,200+',
    rating: 4.9,
    outcomes: [
      'Create portfolio website',
      'Build full-stack social media app', 
      'Deploy applications to cloud'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    price: '₹2,999',
    originalPrice: '₹4,999',
    discount: '40% OFF',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'data-science-ai',
    title: 'Data Science & AI',
    icon: Bot,
    description: 'Master Python, machine learning, and data visualization to build intelligent systems',
    level: 'Intermediate',
    levelColor: 'bg-orange-100 text-orange-700',
    duration: '10 weeks',
    students: '2,800+',
    rating: 4.8,
    outcomes: [
      'Movie recommendation system',
      'Interactive data dashboards',
      'Train AI chatbot models'
    ],
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Jupyter'],
    price: '₹3,999',
    originalPrice: '₹6,999',
    discount: '43% OFF',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    icon: Smartphone,
    description: 'Create cross-platform mobile apps with React Native and Flutter',
    level: 'Intermediate',
    levelColor: 'bg-orange-100 text-orange-700',
    duration: '9 weeks',
    students: '2,100+',
    rating: 4.9,
    outcomes: [
      'Publish app to app stores',
      'Location-based features',
      'User authentication systems'
    ],
    technologies: ['React Native', 'Flutter', 'Firebase', 'Redux'],
    price: '₹3,499',
    originalPrice: '₹5,999',
    discount: '42% OFF',
    color: 'from-green-500 to-teal-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  }
]

const additionalCourses = [
  {
    title: 'Cybersecurity Fundamentals',
    icon: Shield,
    students: '1,500+',
    coming: 'Coming Soon'
  },
  {
    title: 'Game Development',
    icon: Smartphone,
    students: '800+',
    coming: 'Coming Soon'  
  }
]

export default function CoursesPreviewSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-scaler-blue to-purple-accent rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-success-green to-teal-400 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Choose Your <span className="text-gradient">Tech Track</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Industry-designed curriculum to build real applications and launch your tech career
          </motion.p>

          {/* Quick Stats */}
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-green rounded-full"></div>
              <span>8,000+ enrolled students</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-scaler-blue rounded-full"></div>
              <span>85% completion rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-accent rounded-full"></div>
              <span>Industry mentors</span>
            </div>
          </div>
        </div>

        {/* Main Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => {
            const IconComponent = course.icon
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Course Card */}
                <div className={`${course.bgColor} ${course.borderColor} border-2 rounded-2xl p-8 hover:shadow-hard transition-all duration-300 group-hover:border-opacity-60 group-hover:transform group-hover:-translate-y-1`}>
                  {/* Discount Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-warning-orange to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-medium">
                    {course.discount}
                  </div>

                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${course.color} rounded-2xl shadow-soft mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Level Badge */}
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${course.levelColor}`}>
                      {course.level}
                    </span>
                  </div>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Learning Outcomes */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What You'll Build:</h4>
                    <ul className="space-y-2">
                      {course.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-white rounded-md text-xs font-medium text-gray-700 border border-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                          <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                        </div>
                        <div className="text-sm text-gray-600">per semester</div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Link 
                        href={`/courses/${course.id}`} 
                        className="block w-full text-center btn-primary group/btn"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 inline-block group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Link>
                      <Link 
                        href="/register" 
                        className="block w-full text-center btn-secondary text-sm"
                      >
                        Start Free Trial
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Popular Badge for Web Development */}
                {index === 0 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-scaler-blue to-purple-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-medium">
                    🔥 Most Popular
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Additional Courses Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">More Tracks Coming Soon</h3>
            <p className="text-gray-600">Expanding our curriculum based on student demand</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalCourses.map((course, index) => {
              const IconComponent = course.icon
              return (
                <div key={course.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-soft transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{course.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {course.students} interested
                        </span>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-md text-xs">
                          {course.coming}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <Link href="/courses" className="btn-secondary text-lg px-8 py-4">
              View All Courses & Curriculum
            </Link>
            <p className="text-sm text-gray-500">
              Or <Link href="/register" className="text-scaler-blue hover:underline font-medium">start with our free assessment</Link> to get personalized recommendations
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}