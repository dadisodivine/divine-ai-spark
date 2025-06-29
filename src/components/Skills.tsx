
import { Code, Database, Github, FileCode, Palette, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: Layers, level: 95, color: 'text-blue-500' },
        { name: 'TypeScript', icon: FileCode, level: 90, color: 'text-blue-600' },
        { name: 'JavaScript', icon: Code, level: 95, color: 'text-yellow-500' },
        { name: 'Tailwind CSS', icon: Palette, level: 90, color: 'text-cyan-500' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: Code, level: 95, color: 'text-green-500' },
        { name: 'Express.js', icon: Code, level: 90, color: 'text-gray-400' },
        { name: 'MongoDB', icon: Database, level: 85, color: 'text-green-600' },
        { name: 'REST APIs', icon: Code, level: 92, color: 'text-purple-500' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'OpenAI Integration', icon: Code, level: 88, color: 'text-emerald-500' },
        { name: 'Mistral AI', icon: Code, level: 85, color: 'text-orange-500' },
        { name: 'TensorFlow.js', icon: Code, level: 80, color: 'text-orange-600' },
        { name: 'Prompt Engineering', icon: Code, level: 90, color: 'text-indigo-500' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', icon: Github, level: 92, color: 'text-gray-700' },
        { name: 'Docker', icon: Code, level: 75, color: 'text-blue-500' },
        { name: 'Socket.io', icon: Code, level: 85, color: 'text-black' },
        { name: 'JWT Auth', icon: Code, level: 88, color: 'text-red-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-8 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit spans modern web development technologies with a focus on AI integration.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-lg font-bold mb-6 text-center text-primary">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skill.name} 
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group-hover:scale-105 transform duration-200"
                    >
                      <div className="flex-shrink-0">
                        <IconComponent 
                          size={32} 
                          className={`${skill.color} transition-transform group-hover:scale-110`} 
                        />
                      </div>
                      <div className="flex-1">
                        <span className="font-medium text-sm block">{skill.name}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div 
                              className={`h-full ${skill.color.replace('text-', 'bg-')} rounded-full transition-all duration-1000`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground font-medium">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
