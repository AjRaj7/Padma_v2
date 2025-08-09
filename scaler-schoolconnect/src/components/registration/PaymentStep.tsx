'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Smartphone, Clock, Shield, Check } from 'lucide-react'
import { StudentData } from './StudentRegistration'

interface PaymentStepProps {
  data: StudentData
  updateData: (updates: Partial<StudentData>) => void
  onBack: () => void
  onComplete: () => void
}

const plans = [
  {
    id: 'trial',
    name: '7-Day Free Trial',
    price: 0,
    duration: '7 days',
    features: ['Full access to selected track', 'All course materials', 'Community access', 'Cancel anytime'],
    popular: true
  },
  {
    id: 'foundation',
    name: 'Foundation Plan',
    price: 2999,
    originalPrice: 4999,
    duration: 'semester',
    features: ['One course track', 'Weekly live sessions', 'Community access', 'Completion certificate'],
    popular: false
  }
]

const paymentMethods = [
  { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, RuPay' },
  { id: 'upi', name: 'UPI Payment', icon: Smartphone, description: 'GPay, PhonePe, Paytm, etc.' }
]

export default function PaymentStep({ data, updateData, onBack, onComplete }: PaymentStepProps) {
  const [selectedPlan, setSelectedPlan] = useState('trial')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [processing, setProcessing] = useState(false)

  const selectedPlanData = plans.find(p => p.id === selectedPlan)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    updateData({
      plan: selectedPlan,
      paymentMethod,
      isTrialUser: selectedPlan === 'trial'
    })

    setProcessing(false)
    onComplete()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid lg:grid-cols-3 gap-8"
      >
        {/* Plan Selection */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-medium p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Plan</h2>
            
            <div className="space-y-4">
              {plans.map(plan => (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    selectedPlan === plan.id
                      ? 'border-scaler-blue bg-scaler-blue/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                        {plan.popular && (
                          <span className="bg-success-green text-white px-2 py-1 rounded-full text-xs font-bold">
                            Recommended
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        {plan.price === 0 ? (
                          <span className="text-2xl font-bold text-success-green">FREE</span>
                        ) : (
                          <>
                            <span className="text-2xl font-bold text-gray-900">₹{plan.price}</span>
                            {plan.originalPrice && (
                              <span className="text-lg text-gray-500 line-through">₹{plan.originalPrice}</span>
                            )}
                          </>
                        )}
                        <span className="text-gray-600">/ {plan.duration}</span>
                      </div>

                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-success-green" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedPlan === plan.id
                        ? 'border-scaler-blue bg-scaler-blue'
                        : 'border-gray-300'
                    }`}>
                      {selectedPlan === plan.id && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Method (only for paid plans) */}
          {selectedPlan !== 'trial' && (
            <div className="bg-white rounded-2xl shadow-medium p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h3>
              
              <div className="grid gap-4">
                {paymentMethods.map(method => {
                  const IconComponent = method.icon
                  return (
                    <div
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        paymentMethod === method.id
                          ? 'border-scaler-blue bg-scaler-blue/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <IconComponent className="w-6 h-6 text-gray-600" />
                        <div>
                          <div className="font-semibold text-gray-900">{method.name}</div>
                          <div className="text-sm text-gray-600">{method.description}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-medium p-6 sticky top-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h3>
            
            {/* Selected Track */}
            <div className="mb-6 p-4 bg-gray-50 rounded-xl">
              <div className="font-semibold text-gray-900 mb-1">Selected Track</div>
              <div className="text-scaler-blue font-medium capitalize">
                {data.selectedTrack?.replace('-', ' ')} ({data.trackMatch}% match)
              </div>
            </div>

            {/* Plan Details */}
            {selectedPlanData && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-900 font-medium">{selectedPlanData.name}</span>
                  <span className="font-bold text-gray-900">
                    {selectedPlanData.price === 0 ? 'FREE' : `₹${selectedPlanData.price}`}
                  </span>
                </div>
                {selectedPlanData.originalPrice && (
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Regular Price</span>
                    <span className="line-through">₹{selectedPlanData.originalPrice}</span>
                  </div>
                )}
              </div>
            )}

            {/* Total */}
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-lg font-bold text-gray-900">
                  {selectedPlanData?.price === 0 ? 'FREE' : `₹${selectedPlanData?.price}`}
                </span>
              </div>
              {selectedPlan === 'trial' && (
                <div className="text-sm text-gray-600 mt-1">
                  Auto-converts to Foundation plan after trial
                </div>
              )}
            </div>

            {/* Trust Signals */}
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="w-4 h-4 text-success-green" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4 text-success-green" />
                <span>Cancel anytime</span>
              </div>
            </div>

            {/* Action Buttons */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <button
                type="submit"
                disabled={processing}
                className="w-full btn-primary py-4 disabled:opacity-50"
              >
                {processing ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : selectedPlan === 'trial' ? (
                  'Start Free Trial'
                ) : (
                  'Complete Payment'
                )}
              </button>
              
              <button
                type="button"
                onClick={onBack}
                className="w-full btn-secondary py-3"
              >
                ← Back to Track Selection
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}