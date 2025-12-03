// Contact Page: Form kontak, map, informasi kontak lengkap
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.office'),
      details: [
        'Jl. Salemba Tengah No.56',
        'Jakarta Pusat, 10440',
        'Indonesia'
      ],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+62 821 8889 9349',
        '+62 857 5613 7071'
      ],
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'raslawfirm09@gmail.com',
        'contact@raslawfirm.id',
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
              {t('contact.title')}
            </h1>
            <div className="w-20 h-1 bg-gradient-gold mx-auto" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"> */}
          <div className="max-w-6xl mx-auto">
            {/* Contact Form */}
            {/* <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.form.name')}</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.form.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+62 812 3456 7890"
                      className="border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your legal needs..."
                      rows={6}
                      required
                      className="border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card> */}

            {/* Contact Information */}
            <div className="grid lg:grid-cols-2 gap-3 ">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="border-border bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-sm text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Visit Our Office
              </h2>
              <div className="w-20 h-1 bg-gradient-gold mx-auto" />
            </div>

            {/* Map Placeholder - Replace with actual Google Maps embed */}
            <div className="aspect-video bg-muted rounded-xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center bg-gradient-dark">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-accent mx-auto" />
                  <p className="text-xl font-serif text-primary-foreground">
                    Menara RAS, Jakarta Selatan
                  </p>
                  <p className="text-sm text-primary-foreground/70">
                    Map integration coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
