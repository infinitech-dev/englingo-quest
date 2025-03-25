
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/1f708824-53d5-4714-bc58-a35dfdefe2fd.png" 
                alt="Englingo Logo" 
                className="h-8 w-8 mr-2 rounded-full"
              />
              <span className="text-foreground text-xl font-medium">Englingo</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-1">
            <Link 
              to="/" 
              className={cn(
                "nav-link",
                location.pathname === "/" && "text-foreground after:w-full"
              )}
            >
              Home
            </Link>
            <Link 
              to="/lessons" 
              className={cn(
                "nav-link",
                location.pathname === "/lessons" && "text-foreground after:w-full"
              )}
            >
              Lessons
            </Link>
            <Link 
              to="/practice" 
              className={cn(
                "nav-link",
                location.pathname === "/practice" && "text-foreground after:w-full"
              )}
            >
              Practice
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Link 
              to="/sign-in" 
              className="button-hover bg-secondary text-foreground rounded-full px-5 py-2 text-sm"
            >
              Sign In
            </Link>
            <Link 
              to="/sign-up" 
              className="button-hover bg-primary text-white rounded-full px-5 py-2 ml-4 text-sm"
            >
              Get Started
            </Link>
          </div>
          
          <div className="md:hidden">
            <button className="text-foreground p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
