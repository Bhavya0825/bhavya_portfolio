import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Academic Excellence Award',
      description: 'Awarded for outstanding performance in 2023-24',
      year: '2023-24',
      color: 'bg-yellow-500/10 text-yellow-400'
    },
    {
      icon: Star,
      title: 'College Level Finalist',
      description: 'Smart India Hackathon - Finalist',
      year: '2024',
      color: 'bg-blue-500/10 text-blue-400'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-text mb-4">
            <span className="text-portfolio-accent">Achievements</span> & Recognition
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition of excellence in academics and competitive programming
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-portfolio-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-accent/10 group"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-portfolio-text">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-portfolio-accent font-medium bg-portfolio-accent/10 px-3 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-portfolio-accent/10 px-6 py-3 rounded-full">
            <Award className="w-5 h-5 text-portfolio-accent" />
            <span className="text-portfolio-text font-medium">
              Committed to continuous learning and excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;