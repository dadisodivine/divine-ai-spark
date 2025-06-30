
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
      {/* Purple to blue gradient background */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in text-left lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
              <span className={`${!isTypingComplete ? 'typing-cursor' : ''}`}>
                {displayText}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-6 font-jetbrains animate-delayed-fade-in">
              Full-Stack Developer | AI-Powered Web Solutions
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl leading-relaxed animate-delayed-fade-in-2">
              Based in <span className="text-cyan-300 font-semibold">Zimbabwe</span>, I create innovative web applications 
              using modern technologies like React, Node.js, and AI integrations to solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start mb-12 animate-delayed-fade-in-3">
              <a href="#projects" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 px-6 py-3 rounded-lg font-medium hover:scale-105">
                View My Work
              </a>
              <a 
                href="/resume.pdf" 
                download 
                className="flex items-center gap-2 px-6 py-3 border border-cyan-300/50 text-cyan-300 hover:bg-cyan-300/10 hover:border-cyan-300 transition-all duration-300 rounded-lg font-medium hover:scale-105 backdrop-blur-sm"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce">
              <a href="#skills" className="inline-block text-cyan-300 hover:scale-110 transition-transform duration-300">
                <ArrowDown size={28} />
              </a>
            </div>
          </div>

          {/* Right side - Circular elements */}
          <div className="relative animate-delayed-fade-in-2">
            {/* Main circle with specialist count */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
              <div className="absolute inset-8 rounded-full border border-white/10"></div>
              <div className="absolute inset-16 rounded-full border border-white/5"></div>
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">5+</div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
              </div>

              {/* Floating skill icons around the circle */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <span className="text-white text-xs font-semibold">React</span>
              </div>
              
              <div className="absolute top-1/4 right-0 transform translate-x-4 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <span className="text-white text-xs font-semibold">Node/Express</span>
              </div>
              
              <div className="absolute bottom-1/4 right-0 transform translate-x-4 translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <span className="text-white text-xs font-semibold">AI</span>
              </div>
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <span className="text-white text-xs font-semibold">TS</span>
              </div>
              
              <div className="absolute bottom-1/4 left-0 transform -translate-x-4 translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <span className="text-white text-xs font-semibold">Mongo/Firebase</span>
              </div>
              
              <div className="absolute top-1/4 left-0 transform -translate-x-4 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <span className="text-white text-xs font-semibold">CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-300/60 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-white/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-cyan-300/40 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-0.5 h-0.5 bg-white/60 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
