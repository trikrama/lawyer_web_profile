// Home Page: Landing page dengan hero, services overview, why choose us, team highlight
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Scale,
  Shield,
  Award,
  Users,
  ArrowRight,
  Building2,
  Gavel,
  FileCheck,
} from "lucide-react";

const Home = () => {
  const { t } = useLanguage();

  // Services data untuk quick overview
  const services = [
    {
      icon: Building2,
      title: t("services.corporate"),
      description: t("services.corporate.desc"),
      link: "/services#corporate",
    },
    {
      icon: Gavel,
      title: t("services.litigation"),
      description: t("services.litigation.desc"),
      link: "/services#litigation",
    },
    {
      icon: FileCheck,
      title: t("services.compliance"),
      description: t("services.compliance.desc"),
      link: "/services#compliance",
    },
  ];

  // Why Choose Us highlights
  const whyChooseUs = [
    {
      icon: Scale,
      title: t("why.expertise.title"),
      description: t("why.expertise.desc"),
    },
    {
      icon: Shield,
      title: t("why.research.title"),
      description: t("why.research.desc"),
    },
    {
      icon: Award,
      title: t("why.integrity.title"),
      description: t("why.integrity.desc"),
    },
    {
      icon: Users,
      title: t("why.senior.title"),
      description: t("why.senior.desc"),
    },
  ];

  console.log(t("hero.title"));

  return (
    <div className="min-h-screen">
      {/* Hero Section: Full-screen dengan gradient background */}

      {/* <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden"> */}

      <section className="relative min-h-screen flex items-center justify-center bg-center bg-[url(/assets/images/bg-hero.png)] overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            {/* Main Tagline */}

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
              <span className="block">{t("hero.title")}</span>
              {/* <span className="block text-2xl md:text-3xl lg:text-4xl">{t('hero.tagline').split(',')[0]},</span>
              <span className="block text-gradient-gold text-2xl md:text-3xl lg:text-4xl">
                {t('hero.tagline').split(',')[1]}
              </span> */}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl  text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span className="">{t("hero.subtitle").split(",")[0]},</span>
              <span className="text-gradient-gold">
                {t("hero.subtitle").split(",").slice(1).join(", ")}
              </span>
              {/* {t("hero.subtitle")} */}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-gold"
              >
                <Link to="/contact">{t("hero.cta.primary")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 hover:bg-accent/10 hover:text-white"
              >
                <Link to="/about">{t("hero.cta.secondary")}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-accent rounded-full" />
          </div>
        </div> */}
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              {t("services.title")}
            </h2>
            <div className="w-20 h-1 bg-gradient-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="hover-lift border-border bg-card transition-all duration-300 group"
                >
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-serif">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-sm font-semibold text-accent hover:underline"
                    >
                      {t("services.learn-more")}{" "}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              {t("why.title")}
            </h2>
            <div className="w-20 h-1 bg-gradient-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-4 p-6 rounded-lg hover:bg-background transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Highlight Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              {t("team.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("team.subtitle")}
            </p>
            <div className="w-20 h-1 bg-gradient-gold mx-auto mt-4" />
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link to="/members">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {t("hero.cta.ready")}
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {t("hero.cta.content")}
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
          >
            <Link to="/contact">{t("hero.cta.primary")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
