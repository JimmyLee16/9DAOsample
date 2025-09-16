import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProblemStatement } from './components/ProblemStatement';
import { SolutionsSection } from './components/SolutionsSection';
import { ImpactSection } from './components/ImpactSection';
import { KeyMetrics } from './components/KeyMetrics';
import { GoalsTimeline } from './components/GoalsTimeline';
import { BudgetSection } from './components/BudgetSection';
import { LatestArticles } from './components/LatestArticles';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="cardano-governance-theme">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        {/* Navigation */}
        <Navigation />
        
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-5 dark:opacity-3 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f172a' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <main className="relative">
          <HeroSection />
          
          {/* Problem Section */}
          <div id="problem">
            <ProblemStatement />
          </div>
          
          {/* Solution Section */}
          <div id="solution">
            <SolutionsSection />
          </div>
          
          <ImpactSection />
          <KeyMetrics />
          
          {/* Timeline Section */}
          <div id="timeline">
            <GoalsTimeline />
          </div>
          
          {/* Budget Section */}
          <div id="budget">
            <BudgetSection />
          </div>
          
          {/* Latest Articles Section */}
          <LatestArticles />
          
          <CallToAction />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}