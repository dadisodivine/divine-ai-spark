
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Brand Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold gradient-text">
              &lt;Divine /&gt;
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Full-Stack Developer crafting AI-powered web solutions from Zimbabwe. 
              Building innovative applications that make a real difference.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground transition-colors duration-300 ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-1">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold">Get In Touch</h4>
            <div className="space-y-1 text-muted-foreground text-sm">
              <p>📍 Harare, Zimbabwe</p>
              <p>📧 divine@example.com</p>
              <p>🚀 Available for projects</p>
            </div>
            
            {/* Blog placeholder */}
            <div className="pt-3">
              <h5 className="font-medium mb-1 text-sm">Coming Soon</h5>
              <p className="text-xs text-muted-foreground">
                📝 Tech Blog - Insights on AI, Web Development, and Innovation
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© {currentYear} Divine. Made with</span>
              <Heart size={14} className="text-red-500" />
              <span>and lots of ☕</span>
            </div>
            
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
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
