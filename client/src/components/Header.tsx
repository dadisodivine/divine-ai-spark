
import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/dadisodivine', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/divine', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dadisodivinenherera@gmail.com', label: 'Email' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl font-bold gradient-text">
            
          </div>

          {/* Right side - Social links and controls */}
          <div className="flex items-center space-x-6">
            {/* Social Links - moved to top right */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 rounded-lg hover:bg-accent/10"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>

            {/* Theme Toggle - improved styling */}
            <button
              onClick={toggleTheme}
              className="relative p-2.5 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 rounded-lg hover:bg-accent/10 border border-border/50 hover:border-accent/50"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                <Sun 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    theme === 'dark' ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <Moon 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                  }`} 
                />
              </div>
            </button>

            {/* Hamburger Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2.5 text-foreground hover:text-accent transition-all duration-300 hover:scale-110 rounded-lg hover:bg-accent/10 border border-border/50 hover:border-accent/50"
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="flex flex-col space-y-6 mt-8">
                  {/* Mobile social links */}
                  <div className="flex items-center justify-center space-x-6 pb-6 border-b border-border">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 rounded-lg hover:bg-accent/10"
                        aria-label={link.label}
                      >
                        <link.icon size={20} />
                      </a>
                    ))}
                  </div>
                  
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-lg font-medium text-foreground hover:text-accent transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
