'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Users, FileText, Phone } from 'lucide-react'

const privacyPrinciples = [
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'We use industry-standard security measures to protect your personal information'
  },
  {
    icon: Lock,
    title: 'Secure Storage',
    description: 'All data is encrypted and stored securely in compliance with Indian data protection laws'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We are transparent about what data we collect and how we use it'
  },
  {
    icon: Users,
    title: 'No Sharing',
    description: 'We never sell your personal information to third parties'
  }
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-scaler-blue via-blue-600 to-purple-accent text-white py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100 mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-blue-200">Last updated: January 15, 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {privacyPrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-scaler-blue/20 text-scaler-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-gray-600 text-sm">{principle.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                    <p className="text-gray-700 leading-relaxed">
                      When you register for our courses, we collect personal information such as:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>Name, email address, and phone number</li>
                      <li>Educational details (class, school name, city)</li>
                      <li>Parent/guardian contact information</li>
                      <li>Learning preferences and career goals</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Information</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We automatically collect certain technical information when you use our platform:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>Device information (type, operating system, browser)</li>
                      <li>IP address and location data</li>
                      <li>Usage patterns and learning progress</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide and improve our educational services</li>
                  <li>Personalize your learning experience</li>
                  <li>Communicate with you about courses and updates</li>
                  <li>Send progress reports to parents/guardians (with consent)</li>
                  <li>Analyze usage patterns to enhance our platform</li>
                  <li>Provide customer support and technical assistance</li>
                  <li>Comply with legal obligations and prevent fraud</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We respect your privacy and do not sell your personal information. We may share your information in limited circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>With instructors and mentors:</strong> To provide personalized learning support</li>
                  <li><strong>With parents/guardians:</strong> Progress updates and important communications (for students under 18)</li>
                  <li><strong>With service providers:</strong> Third-party services that help us operate our platform (under strict confidentiality agreements)</li>
                  <li><strong>For legal compliance:</strong> When required by law or to protect our rights</li>
                  <li><strong>With schools:</strong> For institutional programs, only with explicit consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement comprehensive security measures to protect your information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure data centers with 24/7 monitoring</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Access controls and authentication systems</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response procedures for security breaches</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights and Choices</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have several rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Request your data in a portable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Complaint:</strong> File complaints with relevant data protection authorities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Essential cookies:</strong> Required for basic platform functionality</li>
                  <li><strong>Analytics cookies:</strong> Help us understand user behavior and improve our services</li>
                  <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing cookies:</strong> Deliver relevant advertisements (with your consent)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  You can control cookie settings through your browser, but disabling certain cookies may affect platform functionality.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most of our users are minors (under 18), so we take special care with children's privacy:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>We collect minimal necessary information from students</li>
                  <li>Parent/guardian consent is required for students under 18</li>
                  <li>Parents have the right to review and delete their child's information</li>
                  <li>We don't show behavioral advertising to users under 16</li>
                  <li>Educational data is used solely for learning purposes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your data is primarily processed and stored in India. If we transfer data internationally for processing, 
                  we ensure appropriate safeguards are in place, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Adequacy decisions by Indian authorities</li>
                  <li>Standard contractual clauses</li>
                  <li>Certification schemes and codes of conduct</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your information for as long as necessary to provide our services and comply with legal obligations:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Student accounts: Retained while active, plus 3 years after inactivity</li>
                  <li>Learning data: Retained to track progress and provide certificates</li>
                  <li>Communication records: Retained for 2 years for support purposes</li>
                  <li>Financial records: Retained as required by Indian law (7 years)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Updates to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. 
                  We will notify you of significant changes by:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Email notification to your registered email address</li>
                  <li>Prominent notice on our website and platform</li>
                  <li>In-app notifications for mobile users</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Continued use of our services after policy updates indicates acceptance of the revised terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this privacy policy or want to exercise your rights, please contact us:
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-scaler-blue" />
                      <div>
                        <div className="font-semibold text-gray-900">Data Protection Officer</div>
                        <div className="text-gray-600">privacy@scaler.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-scaler-blue" />
                      <div>
                        <div className="font-semibold text-gray-900">Phone Support</div>
                        <div className="text-gray-600">+91 98765 43210 (Mon-Fri, 9 AM - 6 PM)</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-scaler-blue mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Postal Address</div>
                        <div className="text-gray-600">
                          Scaler School of Technology<br />
                          Sector 136, Noida, UP 201304<br />
                          India
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  This privacy policy is governed by the laws of India, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Information Technology Act, 2000 and its amendments</li>
                  <li>Information Technology (Reasonable Security Practices) Rules, 2011</li>
                  <li>Personal Data Protection Bill (when enacted)</li>
                  <li>Other applicable Indian privacy and data protection laws</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Any disputes arising from this policy will be subject to the jurisdiction of courts in Delhi, India.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600 text-center">
                  This privacy policy is effective as of January 15, 2024. 
                  We encourage you to review this policy periodically for any updates.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}