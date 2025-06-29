
import { Code, Database, Github, FileCode, Palette, Layers } from 'lucide-react';

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
        { name: 'Node.js', icon: Code, color: 'text-green-500' },
        { name: 'Express.js', icon: Code, color: 'text-gray-400' },
        { name: 'MongoDB', icon: Database, color: 'text-green-600' },
        { name: 'REST APIs', icon: Code, color: 'text-purple-500' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'OpenAI Integration', icon: Code, color: 'text-emerald-500' },
        { name: 'Mistral AI', icon: Code, color: 'text-orange-500' },
        { name: 'TensorFlow.js', icon: Code, color: 'text-orange-600' },
        { name: 'Prompt Engineering', icon: Code, color: 'text-indigo-500' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', icon: Github, color: 'text-gray-700' },
        { name: 'Docker', icon: Code, color: 'text-blue-500' },
        { name: 'Socket.io', icon: Code, color: 'text-black' },
        { name: 'JWT Auth', icon: Code, color: 'text-red-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit spans modern web development technologies with a focus on AI integration.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-lg font-bold mb-6 text-center text-primary">{category.title}</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skill.name} 
                      className="flex flex-col items-center p-3 rounded-lg hover:bg-muted/50 transition-all duration-200 group-hover:scale-105"
                    >
                      <IconComponent 
                        size={40} 
                        className={`${skill.color} mb-3 transition-transform hover:scale-110`} 
                      />
                      <span className="text-sm font-medium text-center">{skill.name}</span>
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
