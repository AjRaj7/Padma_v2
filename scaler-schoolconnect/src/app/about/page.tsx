'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Target, 
  Heart, 
  Users, 
  Award, 
  TrendingUp,
  Globe,
  BookOpen,
  Lightbulb,
  Star,
  ArrowRight,
  MapPin,
  Calendar,
  Trophy,
  Code,
  Zap
} from 'lucide-react'

const teamMembers = [
  {
    name: 'Ankit Goyal',
    role: 'Co-Founder & CEO',
    bio: 'Former Software Engineer at Google with 8+ years of experience. Passionate about democratizing quality tech education in India.',
    image: '/api/placeholder/200/200',
    education: 'B.Tech CSE, IIT Delhi',
    achievements: [
      'Led engineering teams at Google',
      'Built products used by 100M+ users',
      'TEDx speaker on tech education'
    ]
  },
  {
    name: 'Priya Sharma',
    role: 'Co-Founder & CTO',
    bio: 'Former Principal Engineer at Microsoft, expert in EdTech platforms and scalable learning systems.',
    image: '/api/placeholder/200/200',
    education: 'M.Tech CSE, IIT Bombay',
    achievements: [
      'Built Microsoft Teams education features',
      'Published 15+ research papers',
      'Women in Tech leadership award'
    ]
  },
  {
    name: 'Rajesh Kumar',
    role: 'Head of Curriculum',
    bio: 'Former Tech Lead at Amazon with expertise in full-stack development and computer science pedagogy.',
    image: '/api/placeholder/200/200',
    education: 'B.Tech CSE, IIT Kanpur',
    achievements: [
      'Designed curricula for 50,000+ students',
      'AWS certified solutions architect',
      'Mentor at various coding bootcamps'
    ]
  },
  {
    name: 'Dr. Meera Patel',
    role: 'Director of Learning Sciences',
    bio: 'PhD in Educational Psychology with 12+ years of research in student learning and motivation.',
    image: '/api/placeholder/200/200',
    education: 'PhD Educational Psychology, Stanford',
    achievements: [
      'Published 25+ papers on learning science',
      'Consulted for top EdTech companies',
      'Expert in personalized learning systems'
    ]
  }
]

const milestones = [
  { year: '2021', title: 'Company Founded', description: 'Started with a vision to transform tech education in India' },
  { year: '2022', title: 'First 1,000 Students', description: 'Reached our first milestone with amazing student outcomes' },
  { year: '2023', title: 'School Partnerships', description: 'Launched B2B program with 50+ partner schools' },
  { year: '2024', title: '25,000+ Students', description: 'Growing community of successful student developers' }
]

const values = [
  {
    icon: Target,
    title: 'Student-First Approach',
    description: 'Every decision we make is centered around what\'s best for our students\' learning and success.'
  },
  {
    icon: Heart,
    title: 'Accessibility & Inclusion',
    description: 'Quality tech education should be accessible to every student, regardless of their background.'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    description: 'We constantly evolve our curriculum and teaching methods based on industry changes and student feedback.'
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Learning is more effective when students support each other in a strong, collaborative community.'
  }
]

const stats = [
  { number: '25,000+', label: 'Students Trained', icon: Users },
  { number: '150+', label: 'Partner Schools', icon: BookOpen },
  { number: '94%', label: 'Completion Rate', icon: Trophy },
  { number: '12+', label: 'Industry Awards', icon: Award }
]

export default function AboutPage() {
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
              Empowering the Next<br />
              <span className="text-gradient">Generation of Coders</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              We believe every student has the potential to become a great programmer. Our mission is to provide 
              world-class coding education that transforms curious minds into confident developers.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-scaler-blue/20 text-scaler-blue rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                To democratize quality coding education and make it accessible to every student in India, 
                regardless of their location or economic background. We believe that coding is not just a skill, 
                but a superpower that can transform lives and create opportunities.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-success-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Practical Learning</h3>
                    <p className="text-gray-600">Focus on hands-on projects that build real skills</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-success-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized Support</h3>
                    <p className="text-gray-600">1-on-1 mentorship from industry professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-success-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Global Standards</h3>
                    <p className="text-gray-600">Curriculum that matches international best practices</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-accent/20 text-purple-accent rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                To be the leading platform that bridges the gap between traditional education and industry requirements, 
                creating a generation of Indian developers who can compete and excel on the global stage.
              </p>

              <div className="bg-gradient-to-r from-scaler-blue/10 to-purple-accent/10 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Impact Goals by 2027</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-scaler-blue/20 text-scaler-blue rounded-lg flex items-center justify-center text-sm font-bold">
                      1M
                    </div>
                    <span className="text-gray-700">Students empowered with coding skills</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-success-green/20 text-success-green rounded-lg flex items-center justify-center text-sm font-bold">
                      5K
                    </div>
                    <span className="text-gray-700">Partner schools across India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-accent/20 text-purple-accent rounded-lg flex items-center justify-center text-sm font-bold">
                      50K
                    </div>
                    <span className="text-gray-700">Students placed in tech careers</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple idea to India's fastest-growing coding education platform
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-scaler-blue to-purple-accent"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white rounded-xl shadow-medium p-6">
                        <div className="text-scaler-blue font-bold text-2xl mb-2">{milestone.year}</div>
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

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-scaler-blue/20 text-scaler-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate educators and technologists working together to transform coding education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-medium p-6 text-center"
              >
                <div className="w-24 h-24 bg-scaler-blue rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="font-bold text-gray-900 text-lg mb-1">{member.name}</h3>
                <p className="text-scaler-blue font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-3">{member.education}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="space-y-2">
                  {member.achievements.slice(0, 2).map((achievement, i) => (
                    <div key={achievement} className="flex items-center gap-2 text-xs text-gray-600">
                      <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
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
              Join Our Mission to Transform Education
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're a student ready to learn, a school looking to partner, or an educator wanting to make a difference - we'd love to have you join us.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/student-registration"
                className="btn-primary bg-white text-scaler-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
              >
                Start Learning Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                href="/schools"
                className="btn-ghost border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4"
              >
                Partner With Us
                <Users className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}