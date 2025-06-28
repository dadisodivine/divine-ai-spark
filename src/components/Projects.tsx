
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'GitMate',
      logo: '🤝',
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
      logo: '🌱',
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
      logo: '💬',
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
      logo: '💬',
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
      logo: '🛒',
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
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my most impactful projects that showcase my expertise in 
            full-stack development and AI integration.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-card border border-border rounded-2xl p-8 card-hover ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{project.logo}</div>
                <h3 className="text-2xl font-bold gradient-text">{project.name}</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-red-400 mb-2">Problem:</h4>
                  <p className="text-sm text-muted-foreground">{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Solution:</h4>
                  <p className="text-sm text-muted-foreground">{project.solution}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a 
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 rounded-lg font-medium"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a 
                  href={project.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 rounded-lg font-medium"
                >
                  <Play size={16} />
                  Demo Video
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
