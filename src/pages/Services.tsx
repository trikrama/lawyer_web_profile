// Services Page: Comprehensive list of legal services dengan deskripsi detail
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { 
  Building2, 
  Gavel, 
  FileCheck, 
  Users, 
  Lightbulb, 
  FileText,
  Briefcase,
  Globe,
  Shield
} from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  // Comprehensive services list
  const services = [
    {
      id: 'corporate',
      icon: Building2,
      title: t('services.corporate'),
      description: t('services.corporate.desc'),
      details: [
        'Merger & Acquisition Advisory',
        'Corporate Restructuring',
        'Joint Ventures & Partnerships',
        'Due Diligence',
        'Corporate Governance',
        'Board Advisory',
      ],
    },
    {
      id: 'litigation',
      icon: Gavel,
      title: t('services.litigation'),
      description: t('services.litigation.desc'),
      details: [
        'Commercial Litigation',
        'Arbitration & Mediation',
        'White-collar Crime Defense',
        'Administrative Law',
        'Constitutional Challenges',
        'Class Action Defense',
      ],
    },
    {
      id: 'compliance',
      icon: FileCheck,
      title: t('services.compliance'),
      description: t('services.compliance.desc'),
      details: [
        'Regulatory Compliance Audit',
        'Anti-Money Laundering (AML)',
        'Data Protection & Privacy',
        'Internal Investigation',
        'Policy Development',
        'Risk Management',
      ],
    },
    {
      id: 'employment',
      icon: Users,
      title: t('services.employment'),
      description: t('services.employment.desc'),
      details: [
        'Employment Contracts',
        'Termination & Severance',
        'Industrial Relations',
        'Workplace Investigations',
        'Immigration & Work Permits',
        'HR Policy Development',
      ],
    },
    {
      id: 'intellectual',
      icon: Lightbulb,
      title: t('services.intellectual'),
      description: t('services.intellectual.desc'),
      details: [
        'Trademark Registration',
        'Patent Filing & Prosecution',
        'Copyright Protection',
        'IP Licensing',
        'Infringement Litigation',
        'Technology Transfer',
      ],
    },
    {
      id: 'transaction',
      icon: FileText,
      title: t('services.transaction'),
      description: t('services.transaction.desc'),
      details: [
        'Contract Drafting',
        'Negotiation Strategy',
        'Contract Review',
        'Sales & Purchase Agreements',
        'Licensing Agreements',
        'Distribution Agreements',
      ],
    },
    {
      id: 'banking',
      icon: Briefcase,
      title: 'Banking & Finance',
      description: 'Expert guidance on banking regulations, project finance, and capital markets transactions.',
      details: [
        'Project Finance',
        'Structured Finance',
        'Banking Regulations',
        'Capital Markets',
        'Islamic Finance',
        'Loan Documentation',
      ],
    },
    {
      id: 'international',
      icon: Globe,
      title: 'International Trade',
      description: 'Comprehensive support for cross-border transactions and international trade regulations.',
      details: [
        'Export-Import Compliance',
        'Trade Agreements',
        'Customs & Tariffs',
        'Foreign Investment',
        'International Contracts',
        'Sanctions Compliance',
      ],
    },
    {
      id: 'insurance',
      icon: Shield,
      title: 'Insurance Law',
      description: 'Specialized expertise in insurance regulations, claims, and coverage disputes.',
      details: [
        'Policy Review',
        'Claims Disputes',
        'Regulatory Compliance',
        'Reinsurance',
        'Coverage Litigation',
        'Risk Assessment',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
              {t('services.title')}
            </h1>
            <div className="w-20 h-1 bg-gradient-gold mx-auto" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive legal solutions tailored to your business needs across all industries
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  id={service.id}
                  className="hover-lift border-border bg-card group"
                >
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <CardTitle className="text-2xl font-serif">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Industries We Serve
              </h2>
              <div className="w-20 h-1 bg-gradient-gold mx-auto" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                'Energy & Natural Resources',
                'Financial Services',
                'Technology & Telecommunications',
                'Healthcare & Pharmaceuticals',
                'Manufacturing',
                'Real Estate & Construction',
                'Transportation & Logistics',
                'Retail & Consumer Goods',
              ].map((industry, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-background rounded-lg text-center hover:shadow-lg transition-shadow"
                >
                  <p className="text-sm font-semibold text-foreground">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our team is ready to provide tailored legal solutions for your specific needs. 
            Contact us today for a confidential consultation.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
