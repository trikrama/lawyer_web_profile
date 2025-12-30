// Navbar Component: Premium navigation dengan dark mode & language toggle
import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll untuk navbar transparency effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/members", label: t("nav.members") },
    { to: "/services", label: t("nav.services") },
    { to: "/news", label: t("nav.news") },
    { to: "/careers", label: t("nav.careers") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-10 bg-white rounded flex items-center justify-center">
              <span className="text-xl font-bold text-charcoal">
                <img src="/assets/images/logo.png" alt="logo" />
              </span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                Law Firm & Partners
              </h1>
              <p className="text-xs text-muted-foreground">
                Rizaldy Alif Syahrial
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors underline-animate"
                activeClassName="text-accent font-semibold"
                end
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Actions: Language, Theme, Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "id" : "en")}
              className="hidden md:flex items-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase">
                {language}
              </span>
            </Button>

            {/* Theme Toggle */}
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button> */}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-border pt-6 animate-fade-in-down bg-charcoal px-3 rounded-md">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-base font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                  activeClassName="text-accent font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                  end
                >
                  {link.label}
                </NavLink>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setLanguage(language === "id" ? "en" : "id");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-start space-x-2 w-full"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">
                  {language === "id"
                    ? "Switch to English"
                    : "Ganti ke Bahasa Indonesia"}
                </span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
