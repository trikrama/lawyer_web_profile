// Footer Component: Premium footer dengan sitemap & kontak info
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/members", label: t("nav.members") },
  ];

  const legalLinks = [
    { to: "/news", label: t("nav.news") },
    { to: "/careers", label: t("nav.careers") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-dark  mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-gold rounded flex items-center justify-center">
                <span className="text-2xl font-bold text-charcoal">R</span>
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold">RAS Law Firm</h3>
                <p className="text-xs ">& Partners</p>
              </div>
            </div>
            <p className="text-sm /80 leading-relaxed">{t("footer.tagline")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-accent">
              {t("footer.quicklinks")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm  hover:text-accent transition-colors underline-animate"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-accent">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm  hover:text-accent transition-colors underline-animate"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="text-sm  hover:text-accent transition-colors"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm  hover:text-accent transition-colors"
                >
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-accent">
              {t("contact.office")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm ">{t("contact.address")}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@raslawfirm.co.id"
                  className="text-sm  hover:text-accent transition-colors"
                >
                  {t("contact.email")}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:+622100000000"
                  className="text-sm  hover:text-accent transition-colors"
                >
                  {t("contact.phone")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-sm /60">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
