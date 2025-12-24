// Contact Page: Form kontak, map, informasi kontak lengkap
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useLanguage();

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   toast.success("Thank you for your message! We will get back to you soon.");
  // };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.office"),
      details: [
        "Jl. Salemba Tengah No.56",
        "Jakarta Pusat, 10440",
        "Indonesia",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+62 821 8889 9349", "+62 857 5613 7071", "WhatsApp"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["raslawfirm09@gmail.com", "contact@raslawfirm.id"],
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
              {t("contact.title")}
            </h1>
            <div className="w-20 h-1 bg-gradient-gold mx-auto" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"> */}
          <div className="max-w-6xl mx-auto">

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
                              <p
                                key={idx}
                                className="text-sm text-muted-foreground"
                              >
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
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.90831405884012!2d106.85456563421259!3d-6.1931755533835195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f45cdfb4169f%3A0xc82ef49e226d4e00!2sJl.%20Salemba%20Tengah%20No.56%2C%20RT.4%2FRW.8%2C%20Paseban%2C%20Kec.%20Senen%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010440!5e0!3m2!1sen!2sid!4v1764824765839!5m2!1sen!2sid"
                    className="w-[1100px] h-[550px] rounded-md"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  {/* <MapPin className="w-16 h-16 text-accent mx-auto" /> */}
                  {/* <p className="text-xl font-serif text-primary-foreground">
                    Menara RAS, Jakarta Selatan
                  </p>
                  <p className="text-sm text-primary-foreground/70">
                    Map integration coming soon
                  </p> */}
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
