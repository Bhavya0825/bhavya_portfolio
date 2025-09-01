import { Button } from '@/components/ui/button';
const profileImage = '/lovable-uploads/4b4f3707-8d5a-4b90-8409-1636c9e78f0d.png';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-text leading-tight">
                CHILUKURI BALA SRI{' '}
                <span className="text-portfolio-accent">BHAVYA</span>
              </h1>
              <p className="text-xl sm:text-2xl text-portfolio-accent font-medium">
                AI & ML Student | Software Engineering Aspirant
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Fast learner with a proactive mindset, passionate about creating impactful and 
                collaborative solutions in software engineering and artificial intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-portfolio-accent hover:bg-portfolio-accent-light text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                View My Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-portfolio-accent/20 rounded-full blur-3xl animate-glow"></div>
              <img
                src={profileImage}
                alt="Chilukuri Bala Sri Bhavya"
                className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full object-cover border-4 border-portfolio-accent shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;