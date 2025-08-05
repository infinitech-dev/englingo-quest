
import React from 'react';
import { Book, Headphones, Mic, Volume } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import LessonCard from '../components/LessonCard';
import Navbar from '../components/Navbar';

const featuresData = [
  {
    title: "Interactive Lessons",
    description: "Engage with beautifully designed lessons that adapt to your learning style and pace.",
    icon: Book,
    delay: "100",
  },
  {
    title: "Listening Practice",
    description: "Improve your comprehension with natural conversations and professionally recorded audio.",
    icon: Headphones,
    delay: "200",
  },
  {
    title: "Speaking Exercises",
    description: "Perfect your pronunciation with our advanced speech recognition technology.",
    icon: Mic,
    delay: "300",
  },
  {
    title: "Vocabulary Building",
    description: "Expand your vocabulary naturally through context and spaced repetition methods.",
    icon: Volume,
    delay: "400",
  },
];

const popularLessons = [
  {
    id: "1",
    title: "Essential Conversations",
    level: "Beginner",
    duration: "20 min",
    description: "Learn the most important phrases for everyday conversations. Perfect for those just starting their English journey.",
    delay: "100",
  },
  {
    id: "2",
    title: "Business English",
    level: "Intermediate",
    duration: "30 min",
    description: "Master professional vocabulary and expressions for workplace communications and business settings.",
    delay: "200",
  },
  {
    id: "3",
    title: "Advanced Fluency",
    level: "Advanced",
    duration: "45 min",
    description: "Refine your English with advanced grammar patterns, idiomatic expressions, and cultural nuances.",
    delay: "300",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <section className="page-container py-24">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="section-title">Beautifully Crafted Learning Experience</h2>
            <p className="section-subtitle mx-auto">
              Our approach combines elegant design with effective learning methods to make your journey to English fluency enjoyable and efficient.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuresData.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>
        
        <section className="bg-secondary/50">
          <div className="page-container py-24">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="section-title">Popular Lessons</h2>
              <p className="section-subtitle mx-auto">
                Explore our most loved lessons designed to help you improve your English skills effectively.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularLessons.map((lesson, index) => (
                <LessonCard key={index} {...lesson} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="page-container py-24">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-medium text-foreground mb-6">Start Your English Journey Today</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of learners who have transformed their English skills with our thoughtfully designed learning platform.
            </p>
            <a 
              href="/sign-up" 
              className="button-hover inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20"
            >
              Get Started for Free
            </a>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2023 Englingo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
