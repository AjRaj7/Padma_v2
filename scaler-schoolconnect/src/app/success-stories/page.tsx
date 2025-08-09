'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Star, 
  Trophy, 
  Code, 
  Users, 
  TrendingUp, 
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  Play,
  ArrowRight,
  CheckCircle,
  Target,
  Zap
} from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Stories', count: 47 },
  { id: 'students', name: 'Student Success', count: 32 },
  { id: 'schools', name: 'School Transformations', count: 12 },
  { id: 'competitions', name: 'Competition Winners', count: 8 }
]

const featuredStories = [
  {
    id: 'aarav-fullstack',
    category: 'students',
    featured: true,
    title: 'From Zero to Full-Stack Developer',
    subtitle: 'Class 12 student builds e-commerce platform',
    student: 'Aarav Sharma',
    age: 17,
    class: '12th',
    school: 'Delhi Public School, Vasant Kunj',
    city: 'New Delhi',
    track: 'Web Development',
    duration: '8 weeks',
    image: '/api/placeholder/400/300',
    profileImage: '/api/placeholder/80/80',
    story: 'When Aarav joined SchoolConnect, he had never written a single line of code. Today, he runs a successful e-commerce website that has processed over ₹2 lakh in sales.',
    achievements: [
      'Built complete e-commerce platform with React and Node.js',
      'Integrated payment gateway and inventory management',
      'Generated ₹2,00,000+ in revenue through his platform',
      'Received internship offer from local tech startup',
      'Mentoring 15+ junior students in coding'
    ],
    projects: [
      {
        name: 'StyleHub - Fashion E-commerce',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        url: 'https://stylehub-demo.com',
        description: 'Full-featured e-commerce platform with payment integration'
      },
      {
        name: 'StudyBuddy - Learning Platform',
        tech: ['Next.js', 'Firebase', 'Tailwind'],
        url: 'https://studybuddy-demo.com',
        description: 'Peer-to-peer learning platform for students'
      }
    ],
    quote: 'SchoolConnect didn\'t just teach me to code; it taught me to think like a developer. The hands-on projects and mentorship transformed my understanding of technology.',
    impact: {
      skillsGained: 12,
      projectsBuilt: 8,
      certifications: 3,
      mentees: 15
    },
    timeline: [
      { week: 1, milestone: 'First Hello World program' },
      { week: 3, milestone: 'Built first interactive website' },
      { week: 6, milestone: 'Created full-stack application' },
      { week: 8, milestone: 'Deployed e-commerce platform' },
      { week: 12, milestone: 'Received startup internship offer' }
    ]
  },
  {
    id: 'priya-ai-winner',
    category: 'competitions',
    featured: true,
    title: 'AI Competition Champion',
    subtitle: 'Won national hackathon with movie recommendation system',
    student: 'Priya Patel',
    age: 16,
    class: '11th',
    school: 'Ryan International School',
    city: 'Mumbai',
    track: 'Data Science & AI',
    duration: '10 weeks',
    image: '/api/placeholder/400/300',
    profileImage: '/api/placeholder/80/80',
    story: 'Priya\'s journey from a curious student to a national AI competition winner showcases the power of structured learning and expert mentorship.',
    achievements: [
      'Won 1st place in National Student AI Challenge',
      'Built movie recommendation system with 94% accuracy',
      'Published research paper in student journal',
      'Offered summer internship at AI startup',
      'Featured in local tech magazine'
    ],
    projects: [
      {
        name: 'CineMatch - Movie Recommender',
        tech: ['Python', 'TensorFlow', 'Flask', 'Pandas'],
        url: 'https://cinematch-demo.com',
        description: 'AI-powered movie recommendation system with 94% accuracy'
      },
      {
        name: 'StudyPredictor - Academic Analytics',
        tech: ['Python', 'Scikit-learn', 'Matplotlib'],
        url: 'https://studypredictor-demo.com',
        description: 'ML model predicting student performance'
      }
    ],
    quote: 'The AI track opened up a world I never knew existed. Building machine learning models that can actually predict and recommend felt like magic!',
    impact: {
      skillsGained: 15,
      projectsBuilt: 6,
      certifications: 4,
      competitions: 3
    },
    timeline: [
      { week: 2, milestone: 'First Python program' },
      { week: 5, milestone: 'Built first ML model' },
      { week: 8, milestone: 'Created recommendation system' },
      { week: 10, milestone: 'Won school competition' },
      { week: 14, milestone: 'National championship victory' }
    ]
  },
  {
    id: 'dps-transformation',
    category: 'schools',
    featured: true,
    title: 'Complete School Digital Transformation',
    subtitle: 'DPS Bangalore revolutionizes CS education',
    school: 'Delhi Public School, Bangalore',
    principal: 'Mrs. Anita Krishnan',
    studentsImpacted: 850,
    city: 'Bangalore',
    partnership: '2 years',
    image: '/api/placeholder/400/300',
    profileImage: '/api/placeholder/80/80',
    story: 'DPS Bangalore transformed from traditional computer classes to a cutting-edge coding academy, with 95% of students now building real applications.',
    achievements: [
      '850+ students actively coding across 3 tracks',
      '25 teachers certified in modern programming',
      'Won State-level School Innovation Award',
      '150+ student projects deployed live',
      'Partnership with 5 local tech companies'
    ],
    results: {
      beforeAfter: {
        studentsLearning: { before: 120, after: 850 },
        teachersTrained: { before: 3, after: 25 },
        projectsBuilt: { before: 0, after: 150 },
        satisfaction: { before: 6.2, after: 9.1 }
      }
    },
    quote: 'SchoolConnect didn\'t just change our curriculum; it transformed our entire approach to technology education. Our students are now creating, not just consuming.',
    impact: {
      studentsEnrolled: 850,
      teachersCertified: 25,
      projectsDeployed: 150,
      awards: 3
    },
    programs: [
      'Web Development Track - 400 students',
      'Mobile App Development - 250 students', 
      'Data Science & AI - 200 students'
    ]
  }
]

const testimonials = [
  {
    name: 'Rahul Kumar',
    role: 'Class 12, Kendriya Vidyalaya',
    city: 'Chennai',
    quote: 'I never thought I could build a mobile app, but here I am with my fitness tracker app on Google Play Store!',
    rating: 5,
    track: 'Mobile Development',
    achievement: 'Published app developer'
  },
  {
    name: 'Sneha Reddy',
    role: 'Class 11, Modern School',
    city: 'Hyderabad',
    quote: 'The AI course was mind-blowing! I built a chatbot that helps students with math problems.',
    rating: 5,
    track: 'Data Science & AI',
    achievement: 'AI project winner'
  },
  {
    name: 'Arjun Singh',
    role: 'Class 12, DAV Public School',
    city: 'Pune',
    quote: 'Started with basic HTML, now I\'m interning at a startup. SchoolConnect changed my career path!',
    rating: 5,
    track: 'Web Development',
    achievement: 'Startup intern'
  }
]

const stats = [
  { label: 'Success Stories', value: '2,847', icon: Trophy },
  { label: 'Projects Built', value: '12,450', icon: Code },
  { label: 'Students Placed', value: '486', icon: Target },
  { label: 'Competitions Won', value: '127', icon: Award }
]

export default function SuccessStoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStory, setSelectedStory] = useState(featuredStories[0])

  const filteredStories = selectedCategory === 'all' 
    ? featuredStories 
    : featuredStories.filter(story => story.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-success-green via-blue-500 to-purple-accent text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Real Students,<br />
              <span className="text-gradient">Real Success Stories</span>
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Discover how students across India are transforming their futures through code. 
              From beginners to tech innovators in just weeks.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
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
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-green-200 text-sm">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-success-green text-white shadow-medium'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Story Navigation */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedStory(story)}
                  className={`cursor-pointer rounded-xl border-2 p-6 transition-all duration-200 ${
                    selectedStory.id === story.id
                      ? 'border-success-green bg-success-green/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-success-green rounded-full flex items-center justify-center text-white font-bold">
                      {story.student ? story.student.split(' ').map(n => n[0]).join('') : story.school.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{story.title}</h3>
                      <p className="text-sm text-gray-600">{story.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{story.city}</span>
                    {story.track && (
                      <>
                        <span>•</span>
                        <span>{story.track}</span>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selected Story Detail */}
            <motion.div
              key={selectedStory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Story Content */}
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {selectedStory.student ? selectedStory.student.split(' ').map(n => n[0]).join('') : selectedStory.school.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{selectedStory.title}</h2>
                      <p className="text-lg text-gray-600">{selectedStory.subtitle}</p>
                    </div>
                  </div>

                  {selectedStory.student && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-bold text-success-green">{selectedStory.age}</div>
                        <div className="text-xs text-gray-600">Years Old</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-bold text-success-green">{selectedStory.class}</div>
                        <div className="text-xs text-gray-600">Class</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-bold text-success-green">{selectedStory.duration}</div>
                        <div className="text-xs text-gray-600">Course Duration</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-bold text-success-green">{selectedStory.city}</div>
                        <div className="text-xs text-gray-600">City</div>
                      </div>
                    </div>
                  )}

                  {selectedStory.school && !selectedStory.student && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-bold text-success-green">{selectedStory.studentsImpacted}</div>
                        <div className="text-xs text-gray-600">Students</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-bold text-success-green">{selectedStory.partnership}</div>
                        <div className="text-xs text-gray-600">Partnership</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-bold text-success-green">{selectedStory.impact.teachersCertified}</div>
                        <div className="text-xs text-gray-600">Teachers Trained</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-bold text-success-green">{selectedStory.impact.projectsDeployed}</div>
                        <div className="text-xs text-gray-600">Live Projects</div>
                      </div>
                    </div>
                  )}

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {selectedStory.story}
                  </p>

                  <blockquote className="bg-gradient-to-r from-success-green/10 to-blue-500/10 border-l-4 border-success-green p-6 rounded-r-xl mb-6">
                    <p className="text-gray-700 italic leading-relaxed">"{selectedStory.quote}"</p>
                    {selectedStory.student && (
                      <cite className="block mt-3 text-sm font-semibold text-gray-900">
                        - {selectedStory.student}, {selectedStory.school}
                      </cite>
                    )}
                    {selectedStory.principal && (
                      <cite className="block mt-3 text-sm font-semibold text-gray-900">
                        - {selectedStory.principal}, {selectedStory.school}
                      </cite>
                    )}
                  </blockquote>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                  <ul className="space-y-3">
                    {selectedStory.achievements.map((achievement, index) => (
                      <li key={achievement} className="flex items-start gap-3">
                        <Trophy className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Projects & Timeline */}
              <div className="space-y-8">
                {selectedStory.projects && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Featured Projects</h3>
                    <div className="space-y-6">
                      {selectedStory.projects.map((project, index) => (
                        <div key={project.name} className="bg-white border-2 border-gray-200 rounded-xl p-6">
                          <div className="flex items-start justify-between mb-4">
                            <h4 className="font-bold text-gray-900">{project.name}</h4>
                            <a 
                              href={project.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-success-green hover:text-green-600"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedStory.timeline && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Journey Timeline</h3>
                    <div className="space-y-4">
                      {selectedStory.timeline.map((milestone, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-success-green text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {milestone.week}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Week {milestone.week}</div>
                            <div className="text-gray-600">{milestone.milestone}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedStory.programs && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Active Programs</h3>
                    <div className="space-y-3">
                      {selectedStory.programs.map((program, index) => (
                        <div key={program} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success-green" />
                          <span className="text-gray-700">{program}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Success Stories</h2>
            <p className="text-xl text-gray-600">
              Hear from students who transformed their futures through coding
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-medium p-8"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-gray-500 text-sm">{testimonial.city}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-success-green text-sm font-semibold">{testimonial.track}</div>
                    <div className="text-gray-500 text-xs">{testimonial.achievement}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-success-green to-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their lives through code. 
              Your journey to tech success starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-success-green hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button className="btn-ghost border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Watch Success Videos
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-8 text-green-200 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>7-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>No coding experience needed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}