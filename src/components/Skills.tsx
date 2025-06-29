
const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-700' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Next.js', level: 85, color: 'from-gray-800 to-black' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-blue-500' },
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 95, color: 'from-green-500 to-green-600' },
        { name: 'Express.js', level: 90, color: 'from-gray-600 to-gray-800' },
        { name: 'MongoDB', level: 85, color: 'from-green-400 to-green-700' },
        { name: 'Firebase', level: 88, color: 'from-orange-400 to-red-500' },
        { name: 'REST APIs', level: 92, color: 'from-purple-500 to-pink-500' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      skills: [
        { name: 'OpenAI Integration', level: 88, color: 'from-green-400 to-emerald-500' },
        { name: 'Mistral AI', level: 85, color: 'from-orange-400 to-red-400' },
        { name: 'TensorFlow.js', level: 80, color: 'from-orange-500 to-orange-600' },
        { name: 'Image Recognition', level: 82, color: 'from-purple-400 to-purple-600' },
        { name: 'Prompt Engineering', level: 90, color: 'from-indigo-400 to-purple-500' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 92, color: 'from-gray-700 to-gray-900' },
        { name: 'Docker', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'Socket.io', level: 85, color: 'from-black to-gray-800' },
        { name: 'Stripe Integration', level: 80, color: 'from-blue-500 to-purple-600' },
        { name: 'JWT Authentication', level: 88, color: 'from-red-400 to-pink-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit spans modern web development technologies with a special focus on AI integration.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-3"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`bg-card border border-border rounded-lg p-4 ${
                categoryIndex % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{category.icon}</span>
                <h3 className="text-sm font-bold">{category.title}</h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-xs">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.5) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Learning Section */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20">
            <h3 className="text-base font-bold mb-2">Continuous Learning</h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              I'm constantly updating my skills with the latest technologies and best practices. 
              Currently exploring advanced AI integrations, serverless architectures, and modern deployment strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
