// Padma Stream Card - Beautiful display for financial streams with mindful interactions

import React, { useRef, useState } from 'react';
import { StreamCardProps } from '@/types';
import { formatCurrency } from '@/lib/calculations';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';

const StreamCard: React.FC<StreamCardProps> = ({
  stream,
  balance,
  progress,
  tags = [],
  onTap,
  onEdit,
  onDelete,
}) => {
  const [swipeX, setSwipeX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isActionTriggered, setIsActionTriggered] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const velocity = useRef(0);
  const lastMoveTime = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    currentX.current = e.touches[0].clientX;
    setIsDragging(true);
    setIsActionTriggered(false);
    velocity.current = 0;
    lastMoveTime.current = Date.now();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const now = Date.now();
    const newX = e.touches[0].clientX;
    const deltaX = newX - startX.current;
    
    // Calculate velocity for momentum
    if (lastMoveTime.current > 0) {
      const timeDelta = now - lastMoveTime.current;
      if (timeDelta > 0) {
        velocity.current = (newX - currentX.current) / timeDelta;
      }
    }
    
    currentX.current = newX;
    lastMoveTime.current = now;
    
    // Smooth resistance curve - easier at the start, harder as it extends
    const maxSwipe = 100;
    const absDistance = Math.abs(deltaX);
    
    let resistance;
    if (absDistance < 50) {
      resistance = 0.9; // Very easy initial swipe
    } else if (absDistance < 80) {
      resistance = 0.6; // Moderate resistance
    } else {
      resistance = 0.3; // High resistance at the end
    }
    
    const constrainedDelta = Math.sign(deltaX) * Math.min(absDistance * resistance, maxSwipe);
    
    // Trigger action feedback at threshold
    const actionThreshold = 60;
    if (Math.abs(constrainedDelta) > actionThreshold && !isActionTriggered) {
      setIsActionTriggered(true);
      // Haptic feedback
      if ('vibrate' in navigator) {
        navigator.vibrate(20);
      }
    } else if (Math.abs(constrainedDelta) <= actionThreshold && isActionTriggered) {
      setIsActionTriggered(false);
    }
    
    setSwipeX(constrainedDelta);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const deltaX = currentX.current - startX.current;
    const absDeltaX = Math.abs(deltaX);
    const actionThreshold = 60;
    
    // Check for tap vs swipe
    if (absDeltaX < 10 && Math.abs(velocity.current) < 0.5) {
      // This is a tap
      setTimeout(() => onTap(), 100); // Small delay to ensure smooth animation
    } else if (absDeltaX > actionThreshold || Math.abs(velocity.current) > 1) {
      // Action triggered by distance or velocity
      
      // Strong haptic for confirmed action
      if ('vibrate' in navigator) {
        navigator.vibrate([30, 10, 30]);
      }
      
      // Animate to full swipe first, then trigger action
      const fullSwipe = deltaX > 0 ? 120 : -120;
      setSwipeX(fullSwipe);
      
      setTimeout(() => {
        if (deltaX > 0) {
          // Right swipe - edit (only if stream can be edited)
          if (stream.name !== 'Savings') {
            onEdit();
          }
        } else {
          // Left swipe - delete (only if stream can be deleted)
          if (stream.name !== 'Savings' && stream.name !== 'Others') {
            onDelete();
          }
        }
        
        // Reset after action
        setTimeout(() => {
          setSwipeX(0);
        }, 200);
      }, 150);
    } else {
      // Swipe didn't meet threshold, bounce back
      setSwipeX(0);
    }
    
    // Reset state
    setIsDragging(false);
    setIsActionTriggered(false);
    velocity.current = 0;
  };

  const handleClick = () => {
    if (!isDragging && swipeX === 0) {
      onTap();
    }
  };

  // Determine display text based on stream type
  const getBalanceText = () => {
    if (stream.isGoal) {
      return 'withdrawn';
    } else if (stream.name === 'Others') {
      return 'spent';
    } else {
      return balance <= 0 ? 'exceeded' : 'remaining';
    }
  };

  const getBalanceColor = () => {
    if (stream.isGoal) {
      return 'text-foreground';
    } else if (stream.name === 'Others') {
      return 'text-foreground';
    } else {
      return balance <= 0 ? 'text-destructive' : 'text-foreground';
    }
  };

  // Get tags for Others stream (this would need to be passed as prop in a real implementation)
  const getOthersTags = () => {
    // This is a placeholder - in a real implementation, you'd pass the tags as a prop
    // For now, we'll return an empty array
    return [];
  };

  return (
    <Card 
      className="glass-surface p-6 touch-feedback cursor-pointer relative overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'pan-x',
        WebkitTouchCallout: 'none',
        transform: `translateX(${swipeX}px)`,
        transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
        willChange: 'transform'
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {stream.icon && (
            <span className="text-2xl">{stream.icon}</span>
          )}
          <div>
            <h3 className="text-body font-medium text-foreground">
              {stream.name}
            </h3>
            {stream.isGoal && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-savings/20 text-savings font-medium">
                Goal
              </span>
            )}
          </div>
        </div>
        
        <div className="text-right">
          <p className={`text-body font-semibold ${getBalanceColor()}`}>
            {formatCurrency(Math.abs(balance))}
          </p>
          <p className="text-caption text-text-secondary">
            {getBalanceText()}
          </p>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-caption text-text-secondary">
          <span>
            {stream.isGoal ? 'Progress' : stream.name === 'Others' ? 'Used' : 'Used'}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress 
          value={progress} 
          className="h-2"
          style={{
            '--progress-color': stream.isGoal ? 'hsl(var(--savings))' : 'hsl(var(--accent))'
          } as React.CSSProperties}
        />
      </div>
      
      {/* Spent Amount for Savings */}
      {stream.isGoal && (
        <div className="mt-3 text-caption text-text-secondary">
          You've withdrawn: {formatCurrency(balance)}
        </div>
      )}
      
      {/* Tags for Others Stream and Savings Stream */}
{(stream.name === 'Others' || (stream.name === 'Savings' && stream.isGoal)) && tags.length > 0 && (
  <div className="mt-3 text-caption text-text-secondary">
    <div className="text-left space-y-1">
      {tags.map((tagData, index) => (
        <div key={index} className="text-xs text-text-secondary">
          {stream.name === 'Savings' && stream.isGoal ? (
            tagData.tag.startsWith('+') ? (
              <span className="text-success">+{tagData.tag.slice(1)}: ₹{tagData.amount.toLocaleString()}</span>
            ) : (
              <span className="text-destructive">{tagData.tag}: ₹{tagData.amount.toLocaleString()}</span>
            )
          ) : (
            `${tagData.tag} - ${formatCurrency(tagData.amount)}`
          )}
        </div>
      ))}
    </div>
  </div>
)}
      
      {/* Budget Reference */}
      {!stream.isGoal && stream.name !== 'Others' && (
        <div className="mt-3 text-caption text-text-secondary">
          {formatCurrency(stream.originalAmount)} budget
        </div>
      )}
      
      {/* Swipe Action Indicators */}
      {Math.abs(swipeX) > 20 && (
        <div 
          className={`absolute inset-y-0 flex items-center justify-center transition-all duration-200 ${
            swipeX > 0 
              ? 'left-0 right-auto w-24' 
              : 'right-0 left-auto w-24'
          }`}
          style={{
            background: swipeX > 0 
              ? `linear-gradient(to right, rgba(0, 255, 255, ${Math.min(Math.abs(swipeX) / 80, 0.3)}), transparent)`
              : `linear-gradient(to left, rgba(239, 68, 68, ${Math.min(Math.abs(swipeX) / 80, 0.3)}), transparent)`
          }}
        >
          <div 
            className={`flex items-center space-x-2 font-medium transition-all duration-200 ${
              isActionTriggered ? 'scale-110' : 'scale-100'
            } ${
              swipeX > 0 ? 'text-cyan-400' : 'text-red-400'
            }`}
          >
            <span className="text-lg">
              {swipeX > 0 
                ? (stream.name !== 'Savings' ? '✏️' : '') 
                : (stream.name !== 'Savings' && stream.name !== 'Others' ? '🗑️' : '')
              }
            </span>
            <span className="text-sm">
              {swipeX > 0 
                ? (stream.name !== 'Savings' ? 'Edit' : '') 
                : (stream.name !== 'Savings' && stream.name !== 'Others' ? 'Delete' : '')
              }
            </span>
          </div>
        </div>
      )}
    </Card>
  );
};

export default StreamCard;