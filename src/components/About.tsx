
const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-2xl">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <div className="text-6xl font-bold text-white">D</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Full-Stack Developer & AI Enthusiast
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer from Zimbabwe with a strong focus on creating 
              AI-powered web solutions. My expertise spans the entire MERN stack, with particular 
              strength in React, Node.js, Express, and MongoDB.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              What sets me apart is my integration of cutting-edge AI technologies into practical 
              applications. I work with tools like Mistral, OpenAI, and custom image recognition 
              models to build solutions that make a real difference - from helping African farmers 
              diagnose plant diseases to creating AI-powered developer tools.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in using technology to solve meaningful problems and create positive impact 
              in communities. Each project I build combines technical excellence with real-world utility.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-medium">🚀 Innovation-Driven</span>
              </div>
              <div className="bg-accent/10 px-4 py-2 rounded-full">
                <span className="text-accent font-medium">🤖 AI Integration</span>
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-medium">🌍 Impact-Focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
