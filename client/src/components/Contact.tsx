
import { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Hello Divine,

My name is ${formData.name} and my email is ${formData.email}.

${formData.message}

Best regards,
${formData.name}`);
    
    const emailLink = `mailto:dadisodivinenherera@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = emailLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Harare, Zimbabwe',
      color: 'text-red-400'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'dadisodivinenherera@gmail.com',
      color: 'text-blue-400',
      href: 'mailto:dadisodivinenherera@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+263 712 761 698',
      color: 'text-green-400',
      href: 'tel:+263712761698'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you and explore how we can create something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-muted ${info.color}`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-2xl border border-primary/20">
              <h4 className="font-bold mb-3">What I Can Help You With:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full-stack web application development</li>
                <li>• AI integration and automation solutions</li>
                <li>• E-commerce platform development</li>
                <li>• Real-time application development</li>
                <li>• Technical consulting and code reviews</li>
                <li>• Custom software solutions</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                  className="bg-muted border-border focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  className="bg-muted border-border focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project or how I can help you..."
                  rows={6}
                  className="bg-muted border-border focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Email
              </Button>
            </form>

            <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
              <p className="text-sm text-muted-foreground text-center">
                📧 Prefer email? Reach me directly at{' '}
                <a 
                  href="mailto:dadisodivinenherera@gmail.com"
                  className="text-accent hover:underline font-medium"
                >
                  dadisodivinenherera@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
