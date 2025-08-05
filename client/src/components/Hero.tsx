import { ArrowDown, Download } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden bg-white dark:bg-black pt-20 md:pt-24"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in text-left lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className={`${!isTypingComplete ? "typing-cursor" : ""}`}>
                {displayText}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-jetbrains animate-delayed-fade-in">
              Full-Stack Developer | AI-Powered Web Solutions
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed animate-delayed-fade-in-2">
              Based in{" "}
              <span className="text-primary font-semibold">Zimbabwe</span>, I
              create innovative web applications using modern technologies like
              React, Node.js, and AI integrations to solve real-world problems.
              Having co-developed the open source tool Gitmate </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start mb-12 animate-delayed-fade-in-3">
              <a
                href="#projects"
                className="bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary/30 transition-all duration-300 px-6 py-3 rounded-lg font-medium hover:scale-105"
              >
                View My Work
              </a>
            
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce">
              <a
                href="#skills"
                className="inline-block text-accent hover:scale-110 transition-transform duration-300"
              >
                <ArrowDown size={28} />
              </a>
            </div>
          </div>

          {/* Right side - Professional Skills Grid */}
          <div className="relative animate-delayed-fade-in-2">
            {/* Professional Skills Display */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Elegant geometric background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10 backdrop-blur-sm"></div>
              
              {/* Center Focus - AI Expertise */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">AI</div>
                  <div className="text-muted-foreground text-sm font-medium">
                    Generative AI
                  </div>
                </div>
              </div>

              {/* Professional Skill Cards - Positioned strategically */}
              <div className="absolute inset-0">
                {/* Frontend Technologies */}
                <div className="absolute top-4 left-4 group">
                  <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="text-primary text-sm font-semibold">React</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 group">
                  <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="text-primary text-sm font-semibold">TypeScript</span>
                  </div>
                </div>

                {/* Backend Technologies */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 group">
                  <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="text-accent text-sm font-semibold">Node.js</span>
                  </div>
                </div>

                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 group">
                  <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="text-accent text-sm font-semibold">Express</span>
                  </div>
                </div>

                {/* Database & Tools */}
                <div className="absolute bottom-4 left-4 group">
                  <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="text-primary text-sm font-semibold">MongoDB</span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 group">
                  <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="text-accent text-sm font-semibold">GitHub</span>
                  </div>
                </div>

                {/* AI Technologies - Floating with subtle animation */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 group animate-pulse">
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-lg p-2 border border-primary/30 hover:border-primary/50 transition-all duration-300">
                    <span className="text-primary text-xs font-medium">OpenAI</span>
                  </div>
                </div>

                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 group animate-pulse" style={{ animationDelay: "1s" }}>
                  <div className="bg-gradient-to-r from-accent/10 to-primary/10 backdrop-blur-sm rounded-lg p-2 border border-accent/30 hover:border-accent/50 transition-all duration-300">
                    <span className="text-accent text-xs font-medium">Claude</span>
                  </div>
                </div>

                <div className="absolute top-1/2 left-8 transform -translate-y-1/2 group animate-pulse" style={{ animationDelay: "0.5s" }}>
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-lg p-2 border border-primary/30 hover:border-primary/50 transition-all duration-300">
                    <span className="text-primary text-xs font-medium">JavaScript</span>
                  </div>
                </div>

                <div className="absolute top-1/2 right-8 transform -translate-y-1/2 group animate-pulse" style={{ animationDelay: "1.5s" }}>
                  <div className="bg-gradient-to-r from-accent/10 to-primary/10 backdrop-blur-sm rounded-lg p-2 border border-accent/30 hover:border-accent/50 transition-all duration-300">
                    <span className="text-accent text-xs font-medium">Firebase</span>
                  </div>
                </div>
              </div>

              {/* Subtle connecting lines */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 320 320">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" className="text-primary" />
                      <stop offset="100%" stopColor="currentColor" className="text-accent" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 60 60 Q 160 80 260 60 Q 280 160 260 260 Q 160 280 60 260 Q 40 160 60 60"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent/60 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-1.5 h-1.5 bg-primary/40 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-1 h-1 bg-accent/40 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-0.5 h-0.5 bg-primary/60 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
