'use client'

import React from 'react'
import Link from 'next/link'
import { Award, Trophy, GraduationCap, Zap, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const featuredStory = {
  name: 'Arjun Mehta',
  age: 16,
  class: 'Class 11',
  school: 'DPS Bangalore',
  image: '/images/arjun-mehta.jpg', // We'll use initials for now
  quote: "I built my first startup app at 16 and got IIT admission with a full scholarship. SchoolConnect didn't just teach me coding—it taught me to think like an entrepreneur.",
  achievement: 'Built startup app, IIT admission with scholarship',
  story: 'Started as a complete beginner in Class 10. Within 8 months, Arjun built a food delivery app for his school, got featured in local tech news, and secured early admission to IIT Bombay with a merit scholarship.',
  metrics: {
    projectsBuilt: 12,
    monthsLearning: 8,
    scholarship: '₹5 Lakh',
    rank: 'Top 1%'
  },
  achievements: [
    {
      icon: Trophy,
      title: 'National Hackathon Winner',
      description: 'Won TechFest 2024 with AI-powered study planner',
      color: 'text-yellow-500'
    },
    {
      icon: GraduationCap,
      title: 'IIT Bombay Admission',
      description: 'Early admission through innovation quota',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      title: '₹5 Lakh Scholarship',
      description: 'Merit scholarship for academic excellence',
      color: 'text-green-500'
    },
    {
      icon: Zap,
      title: 'Startup Featured',
      description: 'SchoolEats app featured in The Hindu',
      color: 'text-purple-500'
    }
  ],
  techStack: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
  projects: [
    {
      name: 'SchoolEats',
      description: 'Food delivery app for schools',
      impact: '500+ daily users'
    },
    {
      name: 'StudyBuddy AI',
      description: 'AI-powered study companion',
      impact: 'National hackathon winner'
    }
  ]
}

const miniStories = [
  {
    name: 'Kavya Singh',
    achievement: 'Google Summer of Code',
    school: 'Ryan International',
    class: 'Class 12',
    color: 'from-red-400 to-pink-500'
  },
  {
    name: 'Rohit Sharma', 
    achievement: 'Microsoft Internship',
    school: 'Vidyashilp Academy',
    class: 'Class 11',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    name: 'Priya Patel',
    achievement: 'Tech Startup Co-founder',
    school: 'Amity International',
    class: 'Class 12',
    color: 'from-green-400 to-teal-500'
  }
]

export default function SuccessStorySpotlight() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full filter blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full filter blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
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
            Student <span className="text-gradient">Success Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Real students achieving extraordinary results and launching their tech careers
          </motion.p>
        </div>

        {/* Featured Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-hard overflow-hidden mb-16"
        >
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left Column - Profile & Quote */}
            <div className="lg:col-span-2 bg-gradient-to-br from-scaler-blue to-purple-accent text-white p-8 lg:p-12">
              <div className="flex flex-col h-full">
                {/* Profile Section */}
                <div className="text-center mb-8">
                  {/* Profile Image Placeholder */}
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    AM
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{featuredStory.name}</h3>
                  <div className="text-blue-100 text-lg mb-1">{featuredStory.class}, {featuredStory.school}</div>
                  <div className="text-blue-200 text-sm">Age {featuredStory.age}</div>
                </div>

                {/* Quote */}
                <div className="flex-1 flex items-center">
                  <blockquote className="text-lg lg:text-xl leading-relaxed text-center">
                    "{featuredStory.quote}"
                  </blockquote>
                </div>

                {/* Achievement Badge */}
                <div className="text-center mt-6">
                  <div className="bg-white/20 rounded-full px-4 py-2 text-sm font-medium">
                    🏆 {featuredStory.achievement}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Details & Achievements */}
            <div className="lg:col-span-3 p-8 lg:p-12">
              {/* Story Summary */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">The Journey</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {featuredStory.story}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-scaler-blue mb-1">
                    {featuredStory.metrics.projectsBuilt}
                  </div>
                  <div className="text-sm text-gray-600">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success-green mb-1">
                    {featuredStory.metrics.monthsLearning}
                  </div>
                  <div className="text-sm text-gray-600">Months Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning-orange mb-1">
                    {featuredStory.metrics.scholarship}
                  </div>
                  <div className="text-sm text-gray-600">Scholarship</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-accent mb-1">
                    {featuredStory.metrics.rank}
                  </div>
                  <div className="text-sm text-gray-600">Class Rank</div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Achievements</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {featuredStory.achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon
                    return (
                      <motion.div
                        key={achievement.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                      >
                        <IconComponent className={`w-5 h-5 mt-0.5 ${achievement.color}`} />
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            {achievement.title}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {achievement.description}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Technologies Mastered</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredStory.techStack.map((tech, index) => (
                    <span key={tech} className="px-3 py-1 bg-scaler-blue/10 text-scaler-blue rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Featured Projects</h4>
                <div className="space-y-3">
                  {featuredStory.projects.map((project, index) => (
                    <div key={project.name} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-900">{project.name}</div>
                        <div className="text-gray-600 text-sm">{project.description}</div>
                      </div>
                      <div className="text-scaler-blue text-sm font-medium">
                        {project.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini Success Stories */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {miniStories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl hover:shadow-medium transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${story.color} p-6 text-white h-full`}>
                {/* Profile */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold">{story.name}</div>
                    <div className="text-white/80 text-sm">{story.class}</div>
                  </div>
                </div>

                {/* Achievement */}
                <div className="mb-3">
                  <div className="text-lg font-bold mb-1">{story.achievement}</div>
                  <div className="text-white/80 text-sm">{story.school}</div>
                </div>

                {/* Success Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    🌟
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-white rounded-2xl shadow-medium p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of students who have transformed their lives through coding. 
            Your success story could be next.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register" className="btn-primary text-lg px-8 py-4">
              Start Your Journey Today
            </Link>
            <Link 
              href="/success-stories" 
              className="btn-ghost text-lg px-8 py-4 flex items-center gap-2"
            >
              Read More Success Stories
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Free 7-day trial • No credit card required • Join 10,000+ students
          </div>
        </motion.div>
      </div>
    </section>
  )
}