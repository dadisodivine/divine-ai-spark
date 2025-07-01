
import { Code, Database, Github, FileCode, Palette, Layers, Server, Zap, Brain, Settings, Globe, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: Layers, color: 'text-blue-500' },
        { name: 'TypeScript', icon: FileCode, color: 'text-blue-600' },
        { name: 'JavaScript', icon: Code, color: 'text-yellow-500' },
        { name: 'Tailwind CSS', icon: Palette, color: 'text-cyan-500' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: Server, color: 'text-green-500' },
        { name: 'Express.js', icon: Zap, color: 'text-gray-600' },
        { name: 'MongoDB', icon: Database, color: 'text-green-600' },
        { name: 'REST APIs', icon: Globe, color: 'text-purple-500' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'OpenAI Integration', icon: Brain, color: 'text-emerald-500' },
        { name: 'Mistral AI', icon: Brain, color: 'text-orange-500' },
        { name: 'TensorFlow.js', icon: Brain, color: 'text-orange-600' },
        { name: 'Prompt Engineering', icon: FileCode, color: 'text-indigo-500' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', icon: Github, color: 'text-gray-700 dark:text-gray-300' },
        { name: 'Docker', icon: Settings, color: 'text-blue-500' },
        { name: 'Socket.io', icon: Zap, color: 'text-green-500' },
        { name: 'JWT Auth', icon: Shield, color: 'text-red-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My technical toolkit spans modern web development technologies with a focus on AI integration 
            and full-stack solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="group relative"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group-hover:scale-105">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div 
                        key={skill.name} 
                        className="flex items-center p-4 rounded-xl bg-gray-50/50 dark:bg-gray-700/30 hover:bg-white dark:hover:bg-gray-600/50 transition-all duration-300 group-hover:translate-x-2"
                        style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.05}s` }}
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-gray-700 shadow-md flex items-center justify-center mr-4">
                          <IconComponent 
                            size={24} 
                            className={`${skill.color} transition-transform hover:scale-110`} 
                          />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-200 text-sm leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
