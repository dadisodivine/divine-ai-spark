
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Divine</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-jetbrains">
            Full-Stack Developer | AI-Powered Web Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Based in <span className="text-accent font-semibold">Zimbabwe</span>, I create innovative web applications 
            using modern technologies like React, Node.js, and AI integrations to solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 rounded-lg font-medium"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <a href="#about" className="inline-block text-accent">
              <ArrowDown size={32} />
            </a>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
