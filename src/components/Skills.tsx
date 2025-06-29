
import { Code, Database, Github, Javascript, ReactIcon, Tailwind, Typescript } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: ReactIcon, level: 95, color: 'text-blue-500' },
        { name: 'TypeScript', icon: Typescript, level: 90, color: 'text-blue-600' },
        { name: 'JavaScript', icon: Javascript, level: 95, color: 'text-yellow-500' },
        { name: 'Tailwind CSS', icon: Tailwind, level: 90, color: 'text-cyan-500' },
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
    <section id="skills" className="py-12 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-3 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit spans modern web development technologies with a focus on AI integration.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-3"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-sm font-bold mb-4 text-center">{category.title}</h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skill.name} 
                      className="flex flex-col items-center p-2 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <IconComponent 
                        size={24} 
                        className={`${skill.color} mb-2 group-hover:scale-110 transition-transform`} 
                      />
                      <span className="text-xs font-medium text-center">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
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
