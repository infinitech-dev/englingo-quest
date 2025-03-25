
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface TransitionLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const TransitionLayout = ({ children, className }: TransitionLayoutProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("animate-fade-in");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("animate-fade-out");
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "animate-fade-out") {
      setTransitionStage("animate-fade-in");
      setDisplayLocation(location);
    }
  };

  return (
    <div
      className={cn(transitionStage, className)}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
};

export default TransitionLayout;
