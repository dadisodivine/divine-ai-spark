
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
      ],
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: Server, color: 'text-green-500' },
        { name: 'Express.js', icon: Zap, color: 'text-gray-600 dark:text-gray-300' },
        { name: 'MongoDB', icon: Database, color: 'text-green-600' },
        { name: 'REST APIs', icon: Globe, color: 'text-purple-500' },
      ],
      gradient: 'from-green-500/20 to-purple-500/20'
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'OpenAI Integration', icon: Brain, color: 'text-emerald-500' },
        { name: 'Mistral AI', icon: Brain, color: 'text-orange-500' },
        { name: 'TensorFlow.js', icon: Brain, color: 'text-orange-600' },
        { name: 'Prompt Engineering', icon: FileCode, color: 'text-indigo-500' },
      ],
      gradient: 'from-emerald-500/20 to-orange-500/20'
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', icon: Github, color: 'text-gray-700 dark:text-gray-300' },
        { name: 'Docker', icon: Settings, color: 'text-blue-500' },
        { name: 'Socket.io', icon: Zap, color: 'text-green-500' },
        { name: 'JWT Auth', icon: Shield, color: 'text-red-500' },
      ],
      gradient: 'from-gray-500/20 to-red-500/20'
    }
  ];

  return (
    <section id="skills" className="py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-primary/3 rounded-full blur-xl animate-float"></div>
      </div>

      <div className="max-w-5xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
              💼 Professional Skills
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in">
            Skills & Expertise
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-delayed-fade-in">
            My technical toolkit spans modern web development technologies with a focus on AI integration 
            and full-stack solutions.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full animate-delayed-fade-in-2"></div>
        </div>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Glowing background effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105`}></div>
              
              <div className="relative bg-white/90 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group-hover:scale-[1.01]">
                {/* Category header */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-10 h-10 mr-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-300`}></div>
                    <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-md">
                      <div className={`w-5 h-5 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center`}>
                        <div className="w-2 h-2 bg-white dark:bg-gray-800 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{category.title}</h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  </div>
                </div>
                
                {/* Skills list - horizontal layout with smaller cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div 
                        key={skill.name} 
                        className="group/skill relative overflow-hidden rounded-xl bg-gray-50/80 dark:bg-gray-700/50 hover:bg-white dark:hover:bg-gray-600/70 transition-all duration-300 p-4 text-center"
                        style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.05}s` }}
                      >
                        {/* Skill icon */}
                        <div className="flex justify-center mb-3">
                          <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-700 shadow-md flex items-center justify-center group-hover/skill:scale-105 transition-transform duration-300">
                            <IconComponent 
                              size={18} 
                              className={`${skill.color} transition-all duration-300 group-hover/skill:rotate-6`} 
                            />
                          </div>
                        </div>

                        {/* Skill name */}
                        <div>
                          <span className="font-medium text-gray-800 dark:text-gray-200 text-sm block">
                            {skill.name}
                          </span>
                        </div>

                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom accent line */}
                <div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section with additional info */}
        <div className="mt-12 text-center animate-delayed-fade-in-3">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Code size={12} className="text-white" />
              </div>
              <div className="w-6 h-6 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                <Brain size={12} className="text-white" />
              </div>
              <div className="w-6 h-6 bg-gradient-to-br from-primary/80 to-accent/80 rounded-full flex items-center justify-center">
                <Server size={12} className="text-white" />
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Always learning, always growing
            </span>
          </div>
        </div>
      </div>

      {/* Floating skill badges - smaller and fewer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-16 animate-float">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-primary border border-primary/20">
            React
          </div>
        </div>
        <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-accent border border-accent/20">
            AI
          </div>
        </div>
        <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-primary border border-primary/20">
            Node.js
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
