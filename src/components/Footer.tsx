import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-portfolio-accent mb-2">
              Chilukuri Bala Sri Bhavya
            </h3>
            <p className="text-muted-foreground">
              AI & ML Student | Software Engineering Aspirant
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Bhavya0825"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted rounded-lg hover:bg-portfolio-accent/20 transition-colors duration-200 group"
            >
              <Github className="w-5 h-5 text-portfolio-text group-hover:text-portfolio-accent" />
            </a>
            <a
              href="https://www.linkedin.com/in/bhavya-chilukuri-student/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted rounded-lg hover:bg-portfolio-accent/20 transition-colors duration-200 group"
            >
              <Linkedin className="w-5 h-5 text-portfolio-text group-hover:text-portfolio-accent" />
            </a>
            <a
              href="mailto:balasribhavyachilukuri@gmail.com"
              className="p-3 bg-muted rounded-lg hover:bg-portfolio-accent/20 transition-colors duration-200 group"
            >
              <Mail className="w-5 h-5 text-portfolio-text group-hover:text-portfolio-accent" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {currentYear} Chilukuri Bala Sri Bhavya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;