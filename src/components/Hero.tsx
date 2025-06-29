
import { ArrowDown, Download, Code, Sparkles } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Code className="text-accent" size={24} />
              <span className="text-accent font-jetbrains text-sm font-medium tracking-wider">FULL-STACK DEVELOPER</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className={`${!isTypingComplete ? 'typing-cursor' : ''}`}>
                {displayText}
              </span>
              <br />
              <span className="gradient-text">Building the Future</span>
              <br />
              <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl">with AI & Code</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Based in <span className="text-accent font-semibold">Zimbabwe</span>, I create innovative web applications 
              using modern technologies like React, Node.js, and AI integrations to solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="btn-primary group">
                <span>View My Work</span>
                <Sparkles className="ml-2 group-hover:rotate-12 transition-transform" size={18} />
              </a>
              <a 
                href="/resume.pdf" 
                download 
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 rounded-lg font-medium hover:scale-105 group"
              >
                <Download className="group-hover:translate-y-0.5 transition-transform" size={18} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6 border-t border-border/50">
              <div>
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right relative">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Developer workspace with code on screen"
                  className="w-full h-full object-cover rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-xl"></div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-accent/20 backdrop-blur-sm rounded-full p-3 animate-float">
                  <Code className="text-accent" size={20} />
                </div>
                <div className="absolute bottom-4 left-4 bg-primary/20 backdrop-blur-sm rounded-full p-3 animate-float" style={{ animationDelay: '1s' }}>
                  <Sparkles className="text-primary" size={20} />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - centered */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce">
            <a href="#about" className="inline-flex flex-col items-center gap-2 text-accent hover:scale-110 transition-transform duration-300 group">
              <span className="text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">Scroll Down</span>
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse-glow"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-80" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-float opacity-70" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
