
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
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:bg-background">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in text-left lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className={`${!isTypingComplete ? 'typing-cursor' : ''}`}>
                {displayText}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-white/90 mb-6 font-jetbrains animate-delayed-fade-in">
              Full-Stack Developer | AI-Powered Web Solutions
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-white/80 mb-8 max-w-2xl leading-relaxed animate-delayed-fade-in-2">
              Based in <span className="text-primary font-semibold">Zimbabwe</span>, I create innovative web applications 
              using modern technologies like React, Node.js, and AI integrations to solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start mb-12 animate-delayed-fade-in-3">
              <a href="#projects" className="bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary/30 transition-all duration-300 px-6 py-3 rounded-lg font-medium hover:scale-105">
                View My Work
              </a>
              <a 
                href="/resume.pdf" 
                download 
                className="flex items-center gap-2 px-6 py-3 border border-accent/50 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300 rounded-lg font-medium hover:scale-105 backdrop-blur-sm"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce">
              <a href="#skills" className="inline-block text-accent hover:scale-110 transition-transform duration-300">
                <ArrowDown size={28} />
              </a>
            </div>
          </div>

          {/* Right side - Circular elements */}
          <div className="relative animate-delayed-fade-in-2">
            {/* Main circle with specialist count */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-primary/30"></div>
              <div className="absolute inset-8 rounded-full border border-primary/20"></div>
              <div className="absolute inset-16 rounded-full border border-primary/10"></div>
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">AI</div>
                  <div className="text-muted-foreground text-sm">Generative AI</div>
                </div>
              </div>

              {/* Floating skill icons around the circle */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-12 h-12 bg-primary/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30">
                <span className="text-primary text-xs font-semibold">React</span>
              </div>
              
              <div className="absolute top-1/4 right-0 transform translate-x-4 -translate-y-1/2 w-16 h-12 bg-primary/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30">
                <span className="text-primary text-xs font-semibold">Node/Express</span>
              </div>
              
              <div className="absolute bottom-1/4 right-0 transform translate-x-4 translate-y-1/2 w-12 h-12 bg-primary/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30">
                <span className="text-primary text-xs font-semibold">Next.js</span>
              </div>
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-12 h-12 bg-primary/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30">
                <span className="text-primary text-xs font-semibold">TS</span>
              </div>
              
              <div className="absolute bottom-1/4 left-0 transform -translate-x-4 translate-y-1/2 w-16 h-12 bg-primary/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30">
                <span className="text-primary text-xs font-semibold">Mongo/Firebase</span>
              </div>
              
              <div className="absolute top-1/4 left-0 transform -translate-x-4 -translate-y-1/2 w-12 h-12 bg-primary/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30">
                <span className="text-primary text-xs font-semibold">CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent/60 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-0.5 h-0.5 bg-primary/60 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
