import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-text mb-4">
            About <span className="text-portfolio-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Software engineering aspirant and B.Tech (CS-AIML) undergrad (2022–26) with strong 
              problem-solving skills and hands-on experience in Java, Python, Machine Learning, and DSA. 
              Skilled in building scalable projects with exposure to frontend development and deep learning models.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-portfolio-text">
                <GraduationCap className="w-5 h-5 text-portfolio-accent" />
                <span>B.Tech in Artificial Intelligence and Machine Learning</span>
              </div>
              <div className="flex items-center space-x-3 text-portfolio-text">
                <Calendar className="w-5 h-5 text-portfolio-accent" />
                <span>Expected Graduation: 2026</span>
              </div>
              <div className="flex items-center space-x-3 text-portfolio-text">
                <Trophy className="w-5 h-5 text-portfolio-accent" />
                <span>CGPA: 9.0</span>
              </div>
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <GraduationCap className="w-8 h-8 text-portfolio-accent" />
                  <div>
                    <h3 className="font-semibold text-portfolio-text text-lg">Education</h3>
                    <p className="text-muted-foreground">Current Academic Journey</p>
                  </div>
                </div>
                
                <div className="border-l-2 border-portfolio-accent pl-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-portfolio-text">CMR Technical Campus</h4>
                    <p className="text-portfolio-accent font-medium">
                      B.Tech in Artificial Intelligence and Machine Learning
                    </p>
                    <p className="text-muted-foreground text-sm">2022 – 2026</p>
                    <p className="text-portfolio-accent font-semibold">CGPA: 9.0</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;