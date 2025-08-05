
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: string;
  className?: string;
}

const FeatureCard = ({ title, description, icon: Icon, delay = '0', className }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 animate-zoom-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-xl font-medium text-foreground">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
