
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/divine', 
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/divine', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Mail, 
      href: 'mailto:divine@example.com', 
      label: 'Email',
      color: 'hover:text-red-400'
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              &lt;Divine /&gt;
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Developer crafting AI-powered web solutions from Zimbabwe. 
              Building innovative applications that make a real difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground transition-colors duration-300 ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📍 Harare, Zimbabwe</p>
              <p>📧 divine@example.com</p>
              <p>🚀 Available for projects</p>
            </div>
            
            {/* Blog placeholder */}
            <div className="pt-4">
              <h5 className="font-medium mb-2">Coming Soon</h5>
              <p className="text-sm text-muted-foreground">
                📝 Tech Blog - Insights on AI, Web Development, and Innovation
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} Divine. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and lots of ☕</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Built with React + TypeScript</span>
              <span>•</span>
              <span>Styled with Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
