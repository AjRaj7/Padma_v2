'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Shield, Users, CreditCard, BookOpen, AlertTriangle } from 'lucide-react'

const keyTerms = [
  {
    icon: Users,
    title: 'User Responsibilities',
    description: 'Guidelines for appropriate use of our platform and services'
  },
  {
    icon: CreditCard,
    title: 'Payment Terms',
    description: 'Billing, refunds, and subscription management policies'
  },
  {
    icon: BookOpen,
    title: 'Educational Content',
    description: 'Rights and restrictions regarding our course materials'
  },
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'How we handle your personal information and privacy'
  }
]

export default function TermsPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-blue-100 mb-4">
              Please read these terms carefully before using SchoolConnect services.
            </p>
            <p className="text-blue-200">Last updated: January 15, 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {keyTerms.map((term, index) => {
              const IconComponent = term.icon
              return (
                <motion.div
                  key={term.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-scaler-blue/20 text-scaler-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{term.title}</h3>
                  <p className="text-gray-600 text-sm">{term.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using SchoolConnect ("we," "our," or "the Service"), you agree to be bound by these Terms of Service ("Terms"). 
                  If you do not agree to these terms, please do not use our services.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  These Terms apply to all users of the Service, including students, parents, educators, and schools. 
                  For users under 18, a parent or guardian must agree to these Terms on your behalf.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SchoolConnect provides online coding education services, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Interactive coding courses and tutorials</li>
                  <li>Live programming sessions and workshops</li>
                  <li>One-on-one mentorship and support</li>
                  <li>Project-based learning experiences</li>
                  <li>Community forums and peer interaction</li>
                  <li>Progress tracking and assessment tools</li>
                  <li>Certification programs</li>
                  <li>Career guidance and placement assistance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Creation</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>You must provide accurate and complete registration information</li>
                      <li>You are responsible for maintaining the security of your account</li>
                      <li>You must be at least 13 years old to create an account</li>
                      <li>Students under 18 require parental consent</li>
                      <li>One account per person - sharing accounts is prohibited</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Responsibilities</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Keep your login credentials confidential</li>
                      <li>Notify us immediately of any unauthorized account access</li>
                      <li>Update your information when it changes</li>
                      <li>Use your real name and accurate information</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to use our Service responsibly and in accordance with these guidelines:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-success-green mb-2">✅ Permitted Uses</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Learning coding and programming skills</li>
                      <li>Participating in educational discussions</li>
                      <li>Sharing your own original projects and code</li>
                      <li>Helping and supporting other learners</li>
                      <li>Providing constructive feedback</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-red-600 mb-2">❌ Prohibited Uses</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Sharing your account credentials with others</li>
                      <li>Uploading malicious code or viruses</li>
                      <li>Harassing, bullying, or intimidating other users</li>
                      <li>Sharing inappropriate or offensive content</li>
                      <li>Attempting to reverse-engineer our platform</li>
                      <li>Using automated tools to access our services</li>
                      <li>Violating intellectual property rights</li>
                      <li>Engaging in any illegal activities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms and Refunds</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Subscription Plans</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Free trial period: 7 days with full access to selected track</li>
                      <li>Paid subscriptions: Monthly or semester billing cycles</li>
                      <li>Automatic renewal unless cancelled before billing date</li>
                      <li>Price changes will be communicated 30 days in advance</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Processing</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Payments processed through secure third-party providers</li>
                      <li>Accepted payment methods: Credit cards, UPI, bank transfers</li>
                      <li>All prices are in Indian Rupees (INR) and include applicable taxes</li>
                      <li>Failed payments may result in service suspension</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Refund Policy</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><strong>30-day money-back guarantee</strong> for first-time subscribers</li>
                      <li>Refunds processed within 7-10 business days</li>
                      <li>Pro-rated refunds for cancelled annual subscriptions</li>
                      <li>No refunds for courses completed more than 30 days ago</li>
                      <li>Refund requests must be submitted via email to billing@scaler.com</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Content</h3>
                    <p className="text-gray-700 leading-relaxed">
                      All course materials, videos, exercises, and educational content are owned by SchoolConnect or our licensors. 
                      You may use this content for personal learning purposes only. You may not:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>Copy, distribute, or share course materials outside the platform</li>
                      <li>Use our content for commercial purposes</li>
                      <li>Create derivative works from our materials</li>
                      <li>Remove copyright notices or watermarks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Content</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You retain ownership of projects and code you create through our courses. By sharing content on our platform, you grant us:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>Right to display your projects in course galleries</li>
                      <li>Permission to use your work as educational examples</li>
                      <li>Right to showcase your success stories (with your consent)</li>
                      <li>License to provide feedback and suggestions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, 
                  which is incorporated into these Terms by reference.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Key privacy commitments:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>We collect minimal necessary information for educational purposes</li>
                  <li>We never sell your personal data to third parties</li>
                  <li>We use industry-standard security measures</li>
                  <li>Parents have control over their children's data</li>
                  <li>You can request data deletion at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability and Modifications</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Availability</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>We aim for 99.9% uptime but cannot guarantee uninterrupted service</li>
                      <li>Scheduled maintenance will be announced in advance</li>
                      <li>We are not liable for service interruptions beyond our control</li>
                      <li>Some features may require specific browser or device capabilities</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Modifications</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>We may modify or discontinue features with reasonable notice</li>
                      <li>Curriculum updates are made regularly to stay current</li>
                      <li>New features may be added to improve the learning experience</li>
                      <li>Major changes will be communicated to users in advance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers and Limitations</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl mb-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Important Notice</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        While we strive to provide high-quality education, we cannot guarantee specific learning outcomes, 
                        job placement, or career success. Your progress depends on your individual effort, dedication, and circumstances.
                      </p>
                    </div>
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Our service is provided "as is" without warranties</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Our total liability is limited to the amount you paid for the service</li>
                  <li>We do not guarantee specific learning outcomes or job placement</li>
                  <li>Third-party integrations may have their own terms and limitations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Account Termination</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Right to Terminate</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>You may cancel your account at any time through your settings</li>
                      <li>Cancelled subscriptions remain active until the end of the billing period</li>
                      <li>You can export your project data before account closure</li>
                      <li>Some data may be retained as required by law</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Right to Terminate</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      We may suspend or terminate your account if you:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Violate these Terms of Service</li>
                      <li>Engage in prohibited activities</li>
                      <li>Fail to pay subscription fees</li>
                      <li>Attempt to harm our platform or other users</li>
                      <li>Provide false information during registration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Dispute Resolution</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication First</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Before pursuing formal dispute resolution, please contact us at legal@scaler.com. 
                      We are committed to resolving issues amicably and quickly.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Governing Law</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These Terms are governed by the laws of India. Any disputes will be resolved through:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>Good faith negotiations</li>
                      <li>Mediation if necessary</li>
                      <li>Arbitration in Delhi, India</li>
                      <li>Indian courts as a last resort</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update these Terms from time to time to reflect changes in our services or legal requirements. 
                  We will notify you of significant changes by:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Email notification to your registered address</li>
                  <li>In-app notifications</li>
                  <li>Prominent notice on our website</li>
                  <li>At least 30 days advance notice for material changes</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Continued use of our services after changes indicates acceptance of the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-scaler-blue" />
                      <div>
                        <div className="font-semibold text-gray-900">Legal Department</div>
                        <div className="text-gray-600">legal@scaler.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-scaler-blue mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Postal Address</div>
                        <div className="text-gray-600">
                          Scaler School of Technology<br />
                          Legal Department<br />
                          Sector 136, Noida, UP 201304<br />
                          India
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600 text-center">
                  These Terms of Service are effective as of January 15, 2024. 
                  By using SchoolConnect, you acknowledge that you have read, understood, and agree to be bound by these terms.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}