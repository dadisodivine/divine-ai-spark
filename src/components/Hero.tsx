
import { ArrowDown, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Hi, I'm Divine";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className={`${!isTypingComplete ? 'typing-cursor' : ''}`}>
              {displayText}
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-jetbrains animate-delayed-fade-in">
            Full-Stack Developer | AI-Powered Web Solutions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-delayed-fade-in-2">
            Based in <span className="text-accent font-semibold">Zimbabwe</span>, I create innovative web applications 
            using modern technologies like React, Node.js, and AI integrations to solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-delayed-fade-in-3">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="flex items-center gap-2 px-5 py-2.5 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 rounded-lg font-medium hover:scale-105"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <a href="#about" className="inline-block text-accent hover:scale-110 transition-transform duration-300">
              <ArrowDown size={28} />
            </a>
          </div>
        </div>

        {/* Background decoration - smaller and more subtle */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary/8 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl animate-pulse-glow"></div>
        </div>

        {/* Floating particles - smaller */}
        <div className="absolute inset-0 -z-5">
          <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-accent rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-float opacity-80" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-40 left-20 w-1 h-1 bg-accent rounded-full animate-float opacity-70" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-20 right-10 w-0.5 h-0.5 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
