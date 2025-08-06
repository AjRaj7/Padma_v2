// Padma Onboarding Flow - Gentle introduction to mindful finance

import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { generateId, formatCurrency } from '@/lib/calculations';
import { Stream } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Trash2 } from 'lucide-react';

const OnboardingFlow: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [tempStreams, setTempStreams] = useState<Stream[]>([]);
  const [streamName, setStreamName] = useState('');
  const [streamAmount, setStreamAmount] = useState('');

  const totalAllocated = tempStreams.reduce((sum, stream) => sum + stream.originalAmount, 0);
  const remainingAmount = parseInt(monthlyIncome) - totalAllocated;

  const handleIncomeNext = () => {
    const income = parseInt(monthlyIncome);
    if (income > 0) {
      dispatch({ type: 'SET_INCOME', payload: income });
      setCurrentStep(2);
    }
  };

  const handleAddStream = () => {
    const amount = parseInt(streamAmount);
    if (streamName.trim() && amount > 0) {
      // Check if this stream would exceed monthly income
      const totalAllocated = tempStreams.reduce((sum, stream) => sum + stream.originalAmount, 0);
      const newTotalBudget = totalAllocated + amount;
      
      if (newTotalBudget > parseInt(monthlyIncome)) {
        alert(`You have ${formatCurrency(parseInt(monthlyIncome) - totalAllocated)} left to allocate.`);
        return;
      }
      
      const newStream: Stream = {
        id: generateId(),
        name: streamName.trim(),
        originalAmount: amount,
        isGoal: false, // Always create spending streams
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      setTempStreams([...tempStreams, newStream]);
      setStreamName('');
      setStreamAmount('');
    }
  };

  const handleDeleteStream = (id: string) => {
    setTempStreams(tempStreams.filter(stream => stream.id !== id));
  };

  const handleFinishSetup = () => {
    // Add all streams to the app state
    tempStreams.forEach(stream => {
      dispatch({ type: 'ADD_STREAM', payload: stream });
    });
    
    // Create a "Savings" stream with 0 amount (will be calculated dynamically)
    const savingsStream: Stream = {
      id: generateId(),
      name: 'Savings',
      originalAmount: 0, // Will be calculated dynamically
      isGoal: true, // This is a savings goal
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    dispatch({ type: 'ADD_STREAM', payload: savingsStream });
    
    dispatch({ type: 'COMPLETE_ONBOARDING' });
  };

  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-surface flex items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <h1 className="text-heading text-foreground mb-8">
            What's your monthly income?
          </h1>
          
          <div className="mb-8">
            <Input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              className="bg-transparent border-0 border-b-2 border-text-secondary text-center text-5xl font-bold h-24 text-foreground"
              placeholder="0"
                          />
            <p className="text-caption text-text-secondary mt-4">
              Your total monthly income
            </p>
          </div>
          
          <Button 
            onClick={handleIncomeNext}
            disabled={!monthlyIncome || parseInt(monthlyIncome) <= 0}
            size="lg"
            className="w-full"
          >
            Next <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-surface flex flex-col">
      <div className="max-w-md mx-auto flex flex-col min-h-screen w-full px-6">
        {/* Fixed Header */}
        <div className="flex-shrink-0 text-center py-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentStep(1)}
            className="absolute left-6 top-8"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          
          <h1 className="text-heading text-foreground mb-2">
            Set up your categories.
          </h1>
          <p className="text-body text-text-secondary mb-4">
            Give each category a name and budget limit.
          </p>
          
          <div className="text-xl text-accent font-semibold">
            Auto-Savings: {formatCurrency(remainingAmount)}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="p-4 space-y-6">
            {/* Stream Creation Form - Always visible at top */}
            <Card className="glass-surface p-6 sticky top-0 z-10 bg-background/95 backdrop-blur-sm border border-border/20">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Bucket name
                </label>
                <Input
                  value={streamName}
                  onChange={(e) => setStreamName(e.target.value)}
                  placeholder="e.g., Groceries, Entertainment, Transport"
                  className="bg-transparent border-border"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Monthly budget
                </label>
                <Input
                  type="number"
                  value={streamAmount}
                  onChange={(e) => setStreamAmount(e.target.value)}
                  placeholder="e.g., ₹2000"
                  className="bg-transparent border-border"
                />
              </div>
              
              <Button 
                onClick={handleAddStream}
                disabled={!streamName.trim() || !streamAmount || parseInt(streamAmount) <= 0}
                className="w-full"
              >
                Add
              </Button>
            </div>
          </Card>

            {/* Stream List */}
            {tempStreams.length > 0 && (
              <div className="space-y-3">
                {tempStreams.map((stream) => (
                <Card key={stream.id} className="glass-surface p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-body font-medium text-foreground">
                          {stream.name}
                        </span>
                        {stream.isGoal && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-savings/20 text-savings font-medium">
                            Goal
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className="text-body font-semibold text-foreground">
                        {formatCurrency(stream.originalAmount)}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteStream(stream.id)}
                        className="h-8 w-8 text-danger hover:bg-danger/20"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
          </div>
        </div>

        {/* Sticky Footer */}
        {tempStreams.length > 0 && (
          <div className="flex-shrink-0 py-6 bg-gradient-to-t from-background via-background to-transparent">
            <Button 
              onClick={handleFinishSetup}
              size="lg"
              className="w-full"
            >
              Start using app
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingFlow;