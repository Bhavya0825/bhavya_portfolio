import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'TutorIQ – AI-Powered Personal Learning Assistant',
      description: 'Built an AI tutor web app with topic-based Q&A and dynamic quiz generation using OpenRouter API. Optimized API workflows, reducing response latency by 25%, and implemented a real-time chat interface for a seamless learning experience.',
      techStack: ['React', 'Flask', 'OpenRouter API'],
      githubUrl: 'https://github.com/Bhavya0825',
      category: 'AI/ML'
    },
    {
      title: 'College Placement Prediction using ML',
      description: 'Developed a logistic regression model to predict student placement outcomes with data-driven accuracy improvements. Preprocessed academic and extracurricular datasets and integrated a simple UI for real-time input and predictions.',
      techStack: ['Spyder Notebook', 'HTML', 'CSS', 'JS'],
      githubUrl: 'https://github.com/Bhavya0825',
      category: 'Machine Learning'
    },
    {
      title: 'Fit Pulse Web Application (SIH Project)',
      description: 'Engineered a responsive fitness platform with an interactive chatbot and optimized calorie calculator for personalized recommendations. Collaborated in a team environment to enhance user engagement and streamline fitness tracking features during Smart India Hackathon.',
      techStack: ['Tools: HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Bhavya0825',
      category: 'Web Development'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Machine Learning':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Web Development':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-text mb-4">
            Featured <span className="text-portfolio-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning AI/ML, web development, and data science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-portfolio-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-accent/10 group h-full flex flex-col"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-portfolio-text group-hover:text-portfolio-accent transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="border-portfolio-accent/30 text-portfolio-accent bg-portfolio-accent/5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all duration-300 flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all duration-300 flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all duration-300"
            onClick={() => window.open('https://github.com/Bhavya0825', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;