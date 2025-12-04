// About Page: Company introduction, philosophy, values, and vision
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Scale, Target, Heart, Users } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Scale,
      title: t("why.integrity.title"),
      description:
        "We uphold the highest standards of professional ethics and transparency in every engagement.",
    },
    {
      icon: Target,
      title: t("Excellence"),
      description:
        "Committed to delivering superior legal solutions through continuous learning and innovation.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description:
        "Your success is our priority. We build lasting relationships based on trust and results.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Teamwork and knowledge-sharing drive our approach to complex legal challenges.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
              {t("about.title")}
            </h1>
            <div className="w-20 h-1 bg-gradient-gold mx-auto" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("about.intro")}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-serif font-bold text-foreground">
                  {t("about.philosophy")}
                </h2>
                <div className="w-16 h-1 bg-gradient-gold" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("about.philosophy.text")}
                </p>
                <blockquote className="border-l-4 border-accent pl-6 py-4 italic text-lg text-foreground/90">
                  "{t("hero.tagline")}"
                </blockquote>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-dark flex items-center justify-center p-12">
                  <Scale className="w-full h-full text-accent opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-gradient-gold mx-auto" />
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">{t("about.story1")}</p>
              <p className="text-lg leading-relaxed">{t("about.story2")}</p>
              <p className="text-lg leading-relaxed">{t("about.story3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-gradient-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center space-y-4 hover-lift border-border bg-card"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Multi-Sector Expertise Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Integrated Multi-Sector Expertise
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Our team brings together diverse legal expertise across multiple
              industries including energy, infrastructure, technology, finance,
              healthcare, and manufacturing. This integrated approach allows us
              to deliver comprehensive legal solutions that address complex,
              cross-sectoral challenges with precision and strategic insight.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
