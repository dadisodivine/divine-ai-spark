
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'GitMate',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      description: 'An AI-powered developer tool that connects to GitHub, analyzes codebases, and provides intelligent explanations, refactoring suggestions, and code insights.',
      problem: 'Developers struggle to understand complex codebases and need AI assistance for code analysis.',
      solution: 'GitMate integrates with GitHub APIs and uses AI models to provide contextual code explanations and suggestions.',
      techStack: ['React', 'Node.js', 'GitHub API', 'OpenAI', 'Express', 'MongoDB'],
      liveDemo: 'https://gitmate-demo.com',
      github: 'https://github.com/divine/gitmate',
      youtube: 'https://youtube.com/watch?v=example1'
    },
    {
      id: 2,
      name: 'PlantDoc AI',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop',
      description: 'A plant disease detection tool using advanced image recognition to help African farmers identify and treat crop diseases quickly and accurately.',
      problem: 'African farmers lack access to plant disease diagnosis, leading to crop losses.',
      solution: 'AI-powered image recognition provides instant disease detection and treatment recommendations.',
      techStack: ['React', 'TensorFlow.js', 'Node.js', 'Python', 'Image Recognition', 'Firebase'],
      liveDemo: 'https://plantdoc-ai.com',
      github: 'https://github.com/divine/plantdoc-ai',
      youtube: 'https://youtube.com/watch?v=example2'
    },
    {
      id: 3,
      name: 'PromptPal',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
      description: 'A personalized AI chatbot using LLMs like Mistral and OpenAI, providing intelligent prompt-based assistance for various tasks and conversations.',
      problem: 'Users need a personalized AI assistant that understands their specific needs and preferences.',
      solution: 'Custom chatbot with advanced prompt engineering and conversation memory.',
      techStack: ['React', 'Node.js', 'Mistral AI', 'OpenAI', 'WebSocket', 'Redis'],
      liveDemo: 'https://promptpal.com',
      github: 'https://github.com/divine/promptpal',
      youtube: 'https://youtube.com/watch?v=example3'
    },
    {
      id: 4,
      name: 'SocketTalk',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
      description: 'A real-time chat application with advanced features like file sharing, emoji reactions, and group management using Socket.io and Firebase.',
      problem: 'Need for reliable real-time communication platform with modern features.',
      solution: 'Built with Socket.io for real-time messaging and Firebase for authentication and data persistence.',
      techStack: ['React', 'Socket.io', 'Firebase', 'Node.js', 'Express', 'Material-UI'],
      liveDemo: 'https://sockettalk.com',
      github: 'https://github.com/divine/sockettalk',
      youtube: 'https://youtube.com/watch?v=example4'
    },
    {
      id: 5,
      name: 'Cartify',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop',
      description: 'A comprehensive e-commerce platform demonstrating full-stack development with complete CRUD operations, authentication, and payment integration.',
      problem: 'Showcase complete e-commerce functionality with modern web technologies.',
      solution: 'Full-featured online store with cart management, user authentication, and secure checkout.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Express'],
      liveDemo: 'https://cartify-demo.com',
      github: 'https://github.com/divine/cartify',
      youtube: 'https://youtube.com/watch?v=example5'
    }
  ];

  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-3 gradient-text">
            Featured Projects
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Here are some of my most impactful projects that showcase my expertise in 
            full-stack development and AI integration.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-3"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.name} screenshot`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold gradient-text mb-2">{project.name}</h3>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-primary to-accent text-white rounded-md hover:opacity-90 transition-opacity text-xs font-medium flex-1 justify-center"
                  >
                    <ExternalLink size={12} />
                    Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 rounded-md text-xs font-medium"
                  >
                    <Github size={12} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
