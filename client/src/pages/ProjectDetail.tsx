import { useParams, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, Github, Play, Loader2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [loadingImages, setLoadingImages] = useState<Record<number, boolean>>(
    {},
  );
  const [heroImageLoading, setHeroImageLoading] = useState(true);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setHeroImageLoading(true); // Reset hero image loading when id changes
  }, [id]);

  const handleImageLoad = (index: number) => {
    setLoadingImages((prev) => ({ ...prev, [index]: false }));
  };

  const handleImageLoadStart = (index: number) => {
    setLoadingImages((prev) => ({ ...prev, [index]: true }));
  };

  const projects = [
    {
      id: 1,
      name: "GitMate",
      image: "/gitmate (1).png",
      screenshots: [
        "/gitmate (2).png",
        "/gitmate (3).png",
        "/gitmate (4).png",
        "/gitmate (5).png",
        "/gitmate (6).png",
        "/gitmate (7).png",
      ],
      description:
        "An AI-powered developer tool that connects to GitHub, analyzes codebases, and provides intelligent explanations, refactoring suggestions, and code insights.I have been using this app for the lst 4 months to understand repos and have just rrecently made it open source",
      longDescription:
        "GitMate revolutionizes how developers interact with codebases by providing AI-powered insights and analysis. The tool seamlessly integrates with GitHub repositories, offering real-time code explanations, intelligent refactoring suggestions, and comprehensive codebase documentation. Built with modern technologies, GitMate helps developers understand complex code structures, identify potential issues, and improve code quality through AI-driven recommendations.",
      problem:
        "Developers struggle to understand complex codebases and need AI assistance for code analysis.",
      solution:
        "GitMate integrates with GitHub APIs and uses AI models to provide contextual code explanations and suggestions.",
      features: [
        "GitHub repository integration",
        "AI-powered code analysis",
        "Intelligent refactoring suggestions",
        "Real-time code explanations",
        "Documentation generation",
        "Code quality assessment",
      ],
      techStack: [
        "React",
        "Node.js",
        "GitHub API",
        "OpenAI",
        "MistralAI",
        "Express",
        "Firebase Auth",
      ],
      liveDemo: "https://gitmate-frontend.onrender.com",
      github: "https://github.com/dadisodivine/GitMate",
    },
   
    {
      id: 3,
      name: "PlantDoc AI",
      image: "/Plantdoc (1).png",
      screenshots: [
        "/Plantdoc (2).png",
        "/Plantdoc (3).png",
        "/Plantdoc (4).png",
        "/Plantdoc (5).png",
        "/Plantdoc (6).png",
        "/Plantdoc (7).png",
        "/Plantdoc (8).png",
        "/Plantdoc (9).png",
        "/Plantdoc (10).png",
        "/Plantdoc (11).png",
      ],
      description:
        "A plant disease detection tool using advanced image recognition to help African farmers identify and treat crop diseases quickly and accurately.",
      longDescription:
        "PlantDoc AI addresses the critical need for accessible plant disease diagnosis in agricultural communities. Using advanced machine learning and computer vision, the application can identify various plant diseases from photographs, providing instant diagnosis and treatment recommendations. The tool is specifically designed for African farmers, offering multilingual support and offline capabilities to ensure accessibility in remote areas.",
      problem:
        "African farmers lack access to plant disease diagnosis, leading to crop losses.",
      solution:
        "AI-powered image recognition provides instant disease detection and treatment recommendations.",
      features: [
        "Image-based disease detection",
        "Multilingual support",
        "Treatment recommendations",
        "Disease history tracking",
        "Local agricultural expert network",
        "NB :some of these ffeatures are still under development"
      ],
      techStack: [
        "React",
        "Express.js",
        "Node.js",
        "Image recognition",
        "Mistral AI",
        "Google Gemini",
      ],
      liveDemo: "https://plantdoc-sruf.onrender.com",
      github: "https://github.com/dadisodivine/PlantDoc",
      status: "under-development",
    },
    {
      id: 4,
      name: "SmartChat",
      image: "/Chatbot (1).png",
      screenshots: ["/Chatbot (2).png", "/Chatbot (3).png", "/Chatbot (4).png"],
      description:
        "A personalized AI chatbot using LLMs like Mistral and OpenAI, providing intelligent prompt-based assistance for various tasks and conversations.",
      longDescription:
        "SmartChat is an advanced AI chatbot platform that leverages multiple Large Language Models to provide personalized assistance. The application features sophisticated prompt engineering, conversation memory, and adaptive learning capabilities. Users can customize their AI assistant for specific tasks, from creative writing to technical problem-solving, with the system learning and adapting to individual preferences over time.",
      problem:
        "Users need a personalized AI assistant that understands their specific needs and preferences.",
      solution:
        "Custom chatbot with advanced prompt engineering and conversation memory.",
      features: [
        "Multi-modal",
        "Personalized responses",
        "Conversation memory",
        "Custom prompt templates",
        "Task-specific modes",
        "Learning adaptation",
      ],
      techStack: ["React", "Node.js", "Express.js", "Mistral AI", "OpenAI"],
      liveDemo: "https://chatbot-frontend-c7xo.onrender.com",
      github: "https://github.com/dadisodivine/Chatbot",
    },
    {
      id: 5,
      name: "Chatter",
      image: "/ChitChat (1).png",
      screenshots: [
        "/ChitChat (2).png",
        "/ChitChat (3).png",
        "/ChitChat (4).png",
        "/ChitChat (5).png",
      ],
      description:
        "A real-time chat application with advanced features like file sharing, emoji reactions, and group management using Socket.io and Firebase.",
      longDescription:
        "Chatter is a comprehensive real-time communication platform built for modern teams and communities. The application features instant messaging, file sharing, emoji reactions, and advanced group management capabilities. With robust real-time synchronization powered by Socket.io and reliable data persistence through Firebase, SocketTalk provides a seamless communication experience across all devices.",
      problem:
        "Need for reliable real-time communication platform with modern features.",
      solution:
        "Built with Socket.io for real-time messaging and Firebase for authentication and data persistence.",
      features: [
        "Real-time messaging",
        "File sharing",
        "Emoji reactions",
        "User authentication",
        "Cross-platform support",
      ],
      techStack: ["React", "Firebase"],
      liveDemo: "https://chat-app-x9f9.onrender.com",
      github: "https://github.com/dadisodivine/Chat-App",
    },
    {
      id: 6,
      name: "Cartify",
      image: "/cartify (1).png",
      screenshots: [
        "/cartify (2).png",
        "/cartify (3).png",
        "/cartify (4).png",
        "/cartify (5).png",
        "/cartify (6).png",
        "/cartify (7).png",
        "/cartify (8).png",
        "/cartify (9).png",
      ],
      description:
        "A comprehensive e-commerce platform demonstrating full-stack development with complete CRUD operations and authentication",
      longDescription:
        "Cartify is a full-featured e-commerce platform showcasing modern web development practices. The application includes complete product management, user authentication and shopping cart functionality. Built with scalability in mind, Cartify demonstrates best practices in mainly full-stack development, from responsive frontend design to AI powered backend that allows for customer support by a chatbot",
      problem:
        "Showcase complete e-commerce functionality with modern web technologies.",
      solution:
        "Full-featured online store with cart management, user authentication, and AI customer suppport",
      features: [
        "Product catalog management",
        "User authentication",
        "Shopping cart functionality",
        "Customer support bot",
        "Responsive design",
      ],
      techStack: ["React", "Node.js", "MongoDB", "JWT", "Express","Fakestore API"],
      liveDemo: "https://e-store-hw1f.onrender.com",
      github: "https://github.com/dadisodivine/Cartify",
    },
  ];

  const project = projects.find((p) => p.id === parseInt(id || "0"));

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const nextImage = () => {
    if (!project) return;
    setCurrentImageIndex((prev) => 
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!project) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!galleryOpen) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [galleryOpen, project]);


  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => setLocation("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => setLocation("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>

        {/* Hero section */}
        <div className="mb-8">
          <div className="relative">
            {heroImageLoading && (
              <div className="absolute inset-0 bg-muted rounded-lg flex items-center justify-center z-10 h-64 md:h-96">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            )}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-6 select-none"
              draggable={false}
              loading="eager"
              onLoad={() => setHeroImageLoading(false)}
              onError={() => setHeroImageLoading(false)}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold gradient-text">
                  {project.name}
                </h1>
                {project.status === "under-development" && (
                  <span className="px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm rounded-full border border-orange-200 dark:border-orange-800 font-medium">
                    Under Development
                  </span>
                )}
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                {project.description}
              </p>
              <p className="text-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-opacity font-medium flex-1 justify-center"
                >
                  <ExternalLink size={16} />
                  {project.status === "under-development" 
                    ? "Preview" 
                    : project.name === "Cartify" 
                      ? "Demo" 
                      : "Visit"}
                </a>
                {project.status !== "under-development" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 rounded-lg font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="relative cursor-pointer group" onClick={() => openGallery(index)}>
                {loadingImages[index] && (
                  <div className="absolute inset-0 bg-muted rounded-lg flex items-center justify-center z-10">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                )}
                <img
                  src={screenshot}
                  alt={`${project.name} screenshot ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 select-none"
                  draggable={false}
                  loading="lazy"
                  onLoadStart={() => handleImageLoadStart(index)}
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageLoad(index)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-full p-2">
                    <ExternalLink className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg"
              >
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-red-400">Problem</h3>
            <p className="text-muted-foreground">{project.problem}</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-green-400">Solution</h3>
            <p className="text-muted-foreground">{project.solution}</p>
          </div>
        </div>

        {/* Image Gallery Modal */}
        {galleryOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close button */}
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 z-60 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Previous button */}
              <button
                onClick={prevImage}
                className="absolute left-4 z-60 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Next button */}
              <button
                onClick={nextImage}
                className="absolute right-4 z-60 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Main image */}
              <img
                src={project.screenshots[currentImageIndex]}
                alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {project.screenshots.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
