// Members Page: Team profiles dengan foto placeholder & card elegan
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Mail, Linkedin } from 'lucide-react';

const Members = () => {
  const { t } = useLanguage();

  // Team members data - Managing Partner & Senior Lawyers
  const teamMembers = [
    {
      name: 'Dr. Raden Achmad Santoso, S.H., M.H.',
      position: 'Managing Partner',
      specialization: 'Corporate Law, M&A, Compliance',
      description: 'Over 20 years of experience in corporate law and cross-border transactions. Led landmark M&A deals and advised Fortune 500 companies on complex regulatory matters.',
      email: 'raden.santoso@raslawfirm.co.id',
      linkedin: '#',
    },
    {
      name: 'Maria Angelina, S.H., LL.M.',
      position: 'Senior Partner',
      specialization: 'Litigation & Dispute Resolution',
      description: 'Renowned litigator with expertise in commercial disputes, arbitration, and white-collar crime. Successfully represented clients in high-profile cases before Indonesian courts.',
      email: 'maria.angelina@raslawfirm.co.id',
      linkedin: '#',
    },
    {
      name: 'Budi Hartono, S.H., M.Kn.',
      position: 'Senior Partner',
      specialization: 'Employment Law & Industrial Relations',
      description: 'Expert in labor law, employment contracts, and industrial relations disputes. Advised multinational corporations on workforce restructuring and compliance.',
      email: 'budi.hartono@raslawfirm.co.id',
      linkedin: '#',
    },
    {
      name: 'Siti Nurhaliza, S.H., LL.M.',
      position: 'Partner',
      specialization: 'Intellectual Property & Technology Law',
      description: 'Specializes in IP protection, licensing, and technology transactions. Extensive experience in trademark disputes and patent portfolio management.',
      email: 'siti.nurhaliza@raslawfirm.co.id',
      linkedin: '#',
    },
    {
      name: 'Agus Setiawan, S.H., M.H.',
      position: 'Partner',
      specialization: 'Real Estate & Infrastructure',
      description: 'Focuses on property law, construction contracts, and infrastructure projects. Advised on major real estate developments and PPP arrangements.',
      email: 'agus.setiawan@raslawfirm.co.id',
      linkedin: '#',
    },
    {
      name: 'Linda Wijaya, S.H., LL.M.',
      position: 'Associate Partner',
      specialization: 'Banking & Finance',
      description: 'Expert in banking regulations, project finance, and capital markets. Advised financial institutions on regulatory compliance and structured finance transactions.',
      email: 'linda.wijaya@raslawfirm.co.id',
      linkedin: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
              {t('team.title')}
            </h1>
            <div className="w-20 h-1 bg-gradient-gold mx-auto" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('team.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="hover-lift border-border bg-card overflow-hidden group"
              >
                {/* Photo placeholder dengan gradient */}
                <div className="aspect-square bg-gradient-dark relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-5xl font-serif font-bold text-accent/60">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
                </div>

                <CardHeader className="space-y-2">
                  <CardTitle className="text-xl font-serif text-foreground">
                    {member.name}
                  </CardTitle>
                  <p className="text-sm font-semibold text-accent">
                    {member.position}
                  </p>
                  <CardDescription className="text-xs text-muted-foreground">
                    {member.specialization}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>

                  {/* Contact & Social Links */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4 text-accent" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-accent" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-serif font-bold text-foreground">
              Join Our Team
            </h2>
            <div className="w-20 h-1 bg-gradient-gold mx-auto" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're always looking for talented legal professionals who share our values 
              and commitment to excellence. Explore career opportunities with RAS Law Firm.
            </p>
            <a
              href="/careers"
              className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
