
const About = () => {
  return (
    <section id="about" className="py-12 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-3 gradient-text">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-in-left">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-6 rounded-2xl">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <div className="text-6xl font-bold text-white">D</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right space-y-4">
            <h3 className="text-xl font-bold mb-4">
              Full-Stack Developer & AI Enthusiast
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer from Zimbabwe with a strong focus on creating 
              AI-powered web solutions. My expertise spans the entire MERN stack, with particular 
              strength in React, Node.js, Express, and MongoDB.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              What sets me apart is my integration of cutting-edge AI technologies into practical 
              applications. I work with tools like Mistral, OpenAI, and custom image recognition 
              models to build solutions that make a real difference - from helping African farmers 
              diagnose plant diseases to creating AI-powered developer tools.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              I believe in using technology to solve meaningful problems and create positive impact 
              in communities. Each project I build combines technical excellence with real-world utility.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              <div className="bg-primary/10 px-3 py-1.5 rounded-full">
                <span className="text-primary font-medium text-sm">🚀 Innovation-Driven</span>
              </div>
              <div className="bg-accent/10 px-3 py-1.5 rounded-full">
                <span className="text-accent font-medium text-sm">🤖 AI Integration</span>
              </div>
              <div className="bg-primary/10 px-3 py-1.5 rounded-full">
                <span className="text-primary font-medium text-sm">🌍 Impact-Focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
