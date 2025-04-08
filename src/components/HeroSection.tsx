
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Server, Database, Layout } from "lucide-react";

const titles = ["Full Stack Developer", "MERN Stack Expert"];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    // Typing effect
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        
        // If complete, prepare to delete
        if (displayText.length === currentTitle.length) {
          setTypingSpeed(2000); // Pause before deleting
          setIsDeleting(true);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        setTypingSpeed(50); // Delete faster
        
        // If deleted, move to next title
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTypingSpeed(150);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);

  // Smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background effect with pulse animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-100 to-portfolio-50 dark:from-portfolio-900 dark:to-portfolio-800 opacity-40 animate-pulse-slow"></div>
      
      {/* Tech icons floating with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <Code 
          className="absolute text-portfolio-600/30 dark:text-portfolio-400/20 transform hover:scale-110 transition-transform duration-500" 
          size={80}
          style={{
            top: '20%',
            left: '15%',
            animation: 'float-parallax 12s ease-in-out infinite',
            animationDelay: '0s',
            transform: 'translateZ(0)'
          }}
        />
        <Server 
          className="absolute text-portfolio-600/30 dark:text-portfolio-400/20 transform hover:scale-110 transition-transform duration-500" 
          size={60}
          style={{
            top: '70%',
            left: '80%',
            animation: 'float-parallax 10s ease-in-out infinite',
            animationDelay: '1s',
            transform: 'translateZ(20px)'
          }}
        />
        <Database 
          className="absolute text-portfolio-600/30 dark:text-portfolio-400/20 transform hover:scale-110 transition-transform duration-500" 
          size={70}
          style={{
            top: '75%',
            left: '20%',
            animation: 'float-parallax 14s ease-in-out infinite',
            animationDelay: '2s',
            transform: 'translateZ(40px)'
          }}
        />
        <Layout 
          className="absolute text-portfolio-600/30 dark:text-portfolio-400/20 transform hover:scale-110 transition-transform duration-500" 
          size={50}
          style={{
            top: '30%',
            left: '75%',
            animation: 'float-parallax 8s ease-in-out infinite',
            animationDelay: '1.5s',
            transform: 'translateZ(60px)'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-portfolio-700 dark:text-portfolio-400 font-medium mb-3 animate-fade-in">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="text-foreground">Absara Viswanathan</span>
          </h1>
          
          <div className="h-1 w-24 bg-portfolio-600 mb-8 animate-slide-in" style={{animationDelay: '0.4s'}}></div>
          
          <h2 className="text-2xl md:text-4xl text-portfolio-700 dark:text-portfolio-400 mb-6 h-12 font-semibold relative overflow-hidden">
            <span className="inline-block after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-[3px] after:bg-portfolio-600 after:animate-blink">
              {displayText}
            </span>
          </h2>
          
          <div className="relative">
            <div className="absolute inset-0 bg-portfolio-500/10 blur-xl rounded-full transform scale-110"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in relative" style={{animationDelay: '0.6s'}}>
              I build exceptional and accessible digital experiences for the web, focusing on performance, user experience, and scalable architectures.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-portfolio-600 hover:bg-portfolio-700 min-w-[150px] group relative overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-portfolio-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-portfolio-600 text-portfolio-700 dark:text-portfolio-400 hover:bg-portfolio-100 dark:hover:bg-portfolio-900/60 min-w-[150px] group relative overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-portfolio-100 dark:bg-portfolio-800/40 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
