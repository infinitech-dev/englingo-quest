import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const HeroSection = () => {
  return <div className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className="text-center sm:max-w-3xl sm:mx-auto">
          <h1 className="animate-slide-down text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground tracking-tight">
            <span className="block">Master English 116</span>
            <span className="block mt-1 text-primary">with elegance and ease</span>
          </h1>

          <p className="animate-slide-down animation-delay-100 mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A beautifully designed learning experience that adapts to your needs and helps you achieve fluency naturally and intuitively.
          </p>

          <div className="animate-slide-up animation-delay-200 mt-10 sm:flex sm:justify-center sm:space-x-6">
            <Link to="/lessons" className="button-hover flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/practice" className="mt-4 sm:mt-0 button-hover flex items-center justify-center px-8 py-3 rounded-full bg-white text-foreground font-medium shadow-md">
              Try a Demo
            </Link>
          </div>
        </div>
      </div>

      <div className="relative glass mx-auto max-w-6xl rounded-3xl shadow-xl animate-fade-in animation-delay-300 mb-12">
        <div className="aspect-video rounded-3xl overflow-hidden bg-gray-100">
          <div className="h-full w-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
            <div className="text-center">
              <p className="text-primary font-medium text-lg">Interactive Demo</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;