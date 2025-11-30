// Careers Page: Job openings, company culture, benefits
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Heart, 
  TrendingUp, 
  Users, 
  GraduationCap,
  Award
} from 'lucide-react';

const Careers = () => {
  const { t } = useLanguage();

  // Job openings
  const jobs = [
    {
      title: 'Senior Associate - Corporate Law',
      department: 'Corporate & M&A',
      location: 'Jakarta',
      type: 'Full-time',
      experience: '5-7 years',
      description: 'Seeking an experienced corporate lawyer to handle M&A transactions, due diligence, and corporate governance matters.',
    },
    {
      title: 'Associate - Litigation',
      department: 'Litigation',
      location: 'Jakarta',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Join our litigation team to work on complex commercial disputes and arbitration cases.',
    },
    {
      title: 'Junior Associate - Compliance',
      department: 'Compliance & Governance',
      location: 'Jakarta',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Support our compliance team in regulatory audits, policy development, and risk management.',
    },
    {
      title: 'Legal Intern',
      department: 'Various Departments',
      location: 'Jakarta',
      type: 'Internship',
      experience: 'Law Students',
      description: 'Gain hands-on experience across multiple practice areas. Open to final-year law students.',
    },
  ];

  // Company benefits
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression path with mentorship from senior partners',
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Professional development programs and sponsored training',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and comprehensive wellness programs',
    },
    {
      icon: Award,
      title: 'Competitive Compensation',
      description: 'Market-leading salary and performance-based bonuses',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
              {t('nav.careers')}
            </h1>
            <div className="w-20 h-1 bg-gradient-gold mx-auto" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join a team where integrity, excellence, and collaboration drive everything we do
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Why Join RAS Law Firm?
              </h2>
              <div className="w-20 h-1 bg-gradient-gold mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="border-border bg-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Open Positions
              </h2>
              <div className="w-20 h-1 bg-gradient-gold mx-auto" />
            </div>

            <div className="space-y-6">
              {jobs.map((job, index) => (
                <Card key={index} className="hover-lift border-border bg-background">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl font-serif">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {job.description}
                        </CardDescription>
                      </div>
                      <Badge className="self-start" variant="secondary">
                        {job.type}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-serif font-bold text-foreground">
              Our Culture
            </h2>
            <div className="w-20 h-1 bg-gradient-gold mx-auto" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              At RAS Law Firm, we foster a culture of collaboration, continuous learning, and mutual respect. 
              Our team members are empowered to take ownership of their work, contribute innovative ideas, 
              and grow alongside the firm. We believe that our people are our greatest asset, and we invest 
              in their development at every stage of their career.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Collaborative
                </h3>
                <p className="text-sm text-muted-foreground">
                  Work together across teams to deliver exceptional client outcomes
                </p>
              </div>
              <div className="text-center">
                <GraduationCap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Growth-Oriented
                </h3>
                <p className="text-sm text-muted-foreground">
                  Continuous learning and professional development opportunities
                </p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Merit-Based
                </h3>
                <p className="text-sm text-muted-foreground">
                  Recognition and advancement based on performance and contribution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Don't See the Right Position?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals. Send us your CV and we'll keep you in mind 
            for future opportunities.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
          >
            Submit Your CV
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
