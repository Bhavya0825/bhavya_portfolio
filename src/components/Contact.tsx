import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Download, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'balasribhavyachilukuri@gmail.com',
      href: 'mailto:balasribhavyachilukuri@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'bhavya-chilukuri-student',
      href: 'https://www.linkedin.com/in/bhavya-chilukuri-student/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Bhavya0825',
      href: 'https://github.com/Bhavya0825'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-text mb-4">
            Get In <span className="text-portfolio-accent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-portfolio-text mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-3 bg-portfolio-accent/10 rounded-lg">
                    <info.icon className="w-6 h-6 text-portfolio-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-text hover:text-portfolio-accent transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-portfolio-accent hover:bg-portfolio-accent-light text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-portfolio-text">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-muted border-border text-portfolio-text placeholder:text-muted-foreground focus:border-portfolio-accent"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-muted border-border text-portfolio-text placeholder:text-muted-foreground focus:border-portfolio-accent"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-muted border-border text-portfolio-text placeholder:text-muted-foreground focus:border-portfolio-accent resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-portfolio-accent hover:bg-portfolio-accent-light text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;