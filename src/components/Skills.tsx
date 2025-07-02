
import { Code, Database, Github, FileCode, Palette, Layers, Server, Zap, Brain, Settings, Globe, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: Layers, color: 'text-blue-500', level: 95 },
        { name: 'TypeScript', icon: FileCode, color: 'text-blue-600', level: 90 },
        { name: 'JavaScript', icon: Code, color: 'text-yellow-500', level: 92 },
        { name: 'Tailwind CSS', icon: Palette, color: 'text-cyan-500', level: 88 },
      ],
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: Server, color: 'text-green-500', level: 85 },
        { name: 'Express.js', icon: Zap, color: 'text-gray-600 dark:text-gray-300', level: 82 },
        { name: 'MongoDB', icon: Database, color: 'text-green-600', level: 80 },
        { name: 'REST APIs', icon: Globe, color: 'text-purple-500', level: 87 },
      ],
      gradient: 'from-green-500/20 to-purple-500/20'
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'OpenAI Integration', icon: Brain, color: 'text-emerald-500', level: 88 },
        { name: 'Mistral AI', icon: Brain, color: 'text-orange-500', level: 85 },
        { name: 'TensorFlow.js', icon: Brain, color: 'text-orange-600', level: 75 },
        { name: 'Prompt Engineering', icon: FileCode, color: 'text-indigo-500', level: 90 },
      ],
      gradient: 'from-emerald-500/20 to-orange-500/20'
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', icon: Github, color: 'text-gray-700 dark:text-gray-300', level: 92 },
        { name: 'Docker', icon: Settings, color: 'text-blue-500', level: 78 },
        { name: 'Socket.io', icon: Zap, color: 'text-green-500', level: 80 },
        { name: 'JWT Auth', icon: Shield, color: 'text-red-500', level: 85 },
      ],
      gradient: 'from-gray-500/20 to-red-500/20'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/3 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              💼 Professional Skills
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-delayed-fade-in">
            My technical toolkit spans modern web development technologies with a focus on AI integration 
            and full-stack solutions that deliver exceptional user experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full animate-delayed-fade-in-2"></div>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Glowing background effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-105`}></div>
              
              <div className="relative bg-white/90 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group-hover:scale-[1.02]">
                {/* Category header */}
                <div className="flex items-center mb-8">
                  <div className="relative w-16 h-16 mr-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500`}></div>
                    <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg">
                      <div className={`w-8 h-8 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center`}>
                        <div className="w-4 h-4 bg-white dark:bg-gray-800 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{category.title}</h3>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  </div>
                </div>
                
                {/* Skills list - horizontal layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div 
                        key={skill.name} 
                        className="group/skill relative overflow-hidden rounded-2xl bg-gray-50/80 dark:bg-gray-700/50 hover:bg-white dark:hover:bg-gray-600/70 transition-all duration-300 p-6 text-center"
                        style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s` }}
                      >
                        {/* Skill icon */}
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 rounded-xl bg-white dark:bg-gray-700 shadow-lg flex items-center justify-center group-hover/skill:scale-110 transition-transform duration-300">
                            <IconComponent 
                              size={24} 
                              className={`${skill.color} transition-all duration-300 group-hover/skill:rotate-12`} 
                            />
                          </div>
                        </div>

                        {/* Skill name and level */}
                        <div className="mb-4">
                          <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg block mb-1">
                            {skill.name}
                          </span>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}% proficiency
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="relative h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                          <div 
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.gradient.replace('/20', '')} rounded-full transition-all duration-1000 ease-out group-hover/skill:animate-pulse`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.2}s`
                            }}
                          ></div>
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </div>

                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom accent line */}
                <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section with additional info */}
        <div className="mt-20 text-center animate-delayed-fade-in-3">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Code size={16} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                <Brain size={16} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-primary/80 to-accent/80 rounded-full flex items-center justify-center">
                <Server size={16} className="text-white" />
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Always learning, always growing
            </span>
          </div>
        </div>
      </div>

      {/* Floating skill badges */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 animate-float">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary border border-primary/20">
            React
          </div>
        </div>
        <div className="absolute top-48 right-32 animate-float" style={{ animationDelay: '1s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-accent border border-accent/20">
            AI
          </div>
        </div>
        <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '2s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary border border-primary/20">
            Node.js
          </div>
        </div>
        <div className="absolute bottom-48 right-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-accent border border-accent/20">
            TypeScript
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
