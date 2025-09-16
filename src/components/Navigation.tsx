import { motion } from 'motion/react';
import { FileText, Lightbulb, Calendar, DollarSign, BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navigationItems = [
  {
    id: 'problem',
    label: 'Problem',
    icon: FileText
  },
  {
    id: 'solution', 
    label: 'Solution',
    icon: Lightbulb
  },
  {
    id: 'timeline',
    label: 'Timeline', 
    icon: Calendar
  },
  {
    id: 'budget',
    label: 'Budget',
    icon: DollarSign
  },
  {
    id: 'articles',
    label: 'Latest Articles',
    icon: BookOpen
  }
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 right-20 z-50"
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="bg-background/80 dark:bg-background/80 backdrop-blur-xl rounded-xl border border-border/40 shadow-lg px-3 py-2">
          <div className="flex items-center space-x-2">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center space-x-1 px-2 py-1.5 rounded-lg transition-all duration-300 hover:bg-accent/80"
              >
                <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet Navigation - Shows icons only */}
      <div className="hidden md:block lg:hidden">
        <div className="bg-background/80 dark:bg-background/80 backdrop-blur-xl rounded-xl border border-border/40 shadow-lg px-2 py-2">
          <div className="flex items-center space-x-1">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group p-2 rounded-lg transition-all duration-300 hover:bg-accent/80"
                title={item.label}
              >
                <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Toggle Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-background/80 backdrop-blur-xl rounded-lg border border-border/40 shadow-lg p-2"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            scale: isMenuOpen ? 1 : 0.95,
            y: isMenuOpen ? 0 : -10
          }}
          transition={{ duration: 0.2 }}
          className={`absolute top-12 right-0 min-w-[180px] bg-background/95 backdrop-blur-xl rounded-xl border border-border/40 shadow-2xl overflow-hidden ${
            isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          <div className="p-2 space-y-1">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  x: isMenuOpen ? 0 : -20 
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: isMenuOpen ? index * 0.1 : 0 
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full group flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-accent/80"
              >
                <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}