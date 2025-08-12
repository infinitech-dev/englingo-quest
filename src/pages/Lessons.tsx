import React from 'react';
import Navbar from '../components/Navbar';
import LessonCard from '../components/LessonCard';
const lessonsData = [{
  id: "1",
  title: "Essential Conversations",
  level: "Beginner",
  duration: "20 min",
  description: "Learn the most important phrases for everyday conversations. Perfect for those just starting their English journey.",
  delay: "100"
}, {
  id: "2",
  title: "Business English",
  level: "Intermediate",
  duration: "30 min",
  description: "Master professional vocabulary and expressions for workplace communications and business settings.",
  delay: "200"
}, {
  id: "3",
  title: "Advanced Fluency",
  level: "Advanced",
  duration: "45 min",
  description: "Refine your English with advanced grammar patterns, idiomatic expressions, and cultural nuances.",
  delay: "300"
}, {
  id: "4",
  title: "Travel English",
  level: "Beginner",
  duration: "25 min",
  description: "Essential vocabulary and phrases for travel situations, from airport navigation to hotel check-ins.",
  delay: "400"
}, {
  id: "5",
  title: "Academic Writing",
  level: "Advanced",
  duration: "40 min",
  description: "Develop skills for writing essays, research papers, and academic correspondence with proper structures and vocabulary.",
  delay: "500"
}, {
  id: "6",
  title: "Social Media English",
  level: "Intermediate",
  duration: "15 min",
  description: "Understand modern slang, abbreviations, and expressions commonly used on social media platforms.",
  delay: "600"
}, {
  id: "7",
  title: "Interview Preparation",
  level: "Intermediate",
  duration: "35 min",
  description: "Prepare for job interviews with common questions, professional responses, and confidence-building techniques.",
  delay: "700"
}, {
  id: "8",
  title: "Presentation Skills",
  level: "Advanced",
  duration: "50 min",
  description: "Learn to create and deliver powerful presentations with the right vocabulary, tone, and confidence.",
  delay: "800"
}, {
  id: "9",
  title: "Daily Routines",
  level: "Beginner",
  duration: "20 min",
  description: "Vocabulary and expressions for describing your daily activities, habits, and schedules.",
  delay: "900"
}];
const Lessons = () => {
  const [filter, setFilter] = React.useState("all");
  const filteredLessons = filter === "all" ? lessonsData : lessonsData.filter(lesson => lesson.level.toLowerCase() === filter.toLowerCase());
  return <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      
      <main className="pt-16">
        <section className="page-container pt-16">
          <div className="text-center mb-16 animate-slide-down">
            <h1 className="section-title">Explore Our Lessons11</h1>
            <p className="section-subtitle mx-auto">
              Browse through our carefully crafted lessons designed to improve your English skills in various contexts.
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-12 animate-fade-in">
            <button onClick={() => setFilter("all")} className={`px-4 py-2 rounded-full transition-all ${filter === "all" ? "bg-primary text-white" : "bg-secondary text-foreground"}`}>
              All Levels
            </button>
            <button onClick={() => setFilter("beginner")} className={`px-4 py-2 rounded-full transition-all ${filter === "beginner" ? "bg-primary text-white" : "bg-secondary text-foreground"}`}>
              Beginner
            </button>
            <button onClick={() => setFilter("intermediate")} className={`px-4 py-2 rounded-full transition-all ${filter === "intermediate" ? "bg-primary text-white" : "bg-secondary text-foreground"}`}>
              Intermediate
            </button>
            <button onClick={() => setFilter("advanced")} className={`px-4 py-2 rounded-full transition-all ${filter === "advanced" ? "bg-primary text-white" : "bg-secondary text-foreground"}`}>
              Advanced
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredLessons.map((lesson, index) => <LessonCard key={index} {...lesson} />)}
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
    </div>;
};
export default Lessons;