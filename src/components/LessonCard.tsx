
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface LessonCardProps {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  image?: string;
  delay?: string;
  className?: string;
}

const LessonCard = ({ 
  id, 
  title, 
  level, 
  duration, 
  description, 
  image,
  delay = '0', 
  className 
}: LessonCardProps) => {
  return (
    <Link 
      to={`/lessons/${id}`}
      className={cn(
        "glass-card overflow-hidden flex flex-col animate-blur-in cursor-pointer",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-xs space-x-4 text-muted-foreground mb-2">
          <span className="px-2 py-1 bg-secondary rounded-full">{level}</span>
          <span>{duration}</span>
        </div>
        
        <h3 className="text-xl font-medium text-foreground">{title}</h3>
        <p className="mt-2 text-muted-foreground text-sm line-clamp-3 flex-grow">{description}</p>
        
        <div className="mt-4 flex items-center text-primary font-medium text-sm">
          <span>Start lesson</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

export default LessonCard;
