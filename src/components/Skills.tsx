import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Globe, Database, Brain, Wrench, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Java (Intermediate)', 'Python (Intermediate)', 'C++ (Basic)'],
      color: 'bg-blue-500/10 text-blue-400'
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript (Basic)'],
      color: 'bg-green-500/10 text-green-400'
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['SQL'],
      color: 'bg-purple-500/10 text-purple-400'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      skills: ['Basics with scikit-learn', 'pandas'],
      color: 'bg-orange-500/10 text-orange-400'
    },
    {
      icon: BookOpen,
      title: 'CS Fundamentals',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'OS Basics'],
      color: 'bg-red-500/10 text-red-400'
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: ['VS Code', 'Git', 'GitHub', 'Google Colab', 'Jupyter Notebook'],
      color: 'bg-teal-500/10 text-teal-400'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-text mb-4">
            Technical <span className="text-portfolio-accent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-portfolio-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-accent/10 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-portfolio-text text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center space-x-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                      <span className="text-portfolio-text text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;