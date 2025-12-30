// Language Context: Multi-language support (ID/EN) untuk seluruh aplikasi
import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translations object dengan konten lengkap berdasarkan company profile
const translations: Record<Language, Record<string, string>> = {
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang Kami",
    "nav.members": "Tim",
    "nav.services": "Layanan",
    "nav.news": "Berita & Insight",
    "nav.careers": "Karir",
    "nav.contact": "Kontak",

    // Hero Section
    "hero.title": "RAS LAW FIRM",
    "hero.tagline": "Prosperity Through Law, Driven by Integrity",
    "hero.subtitle":
      "Firma hukum terkemuka di Jakarta dengan keahlian lintas sektor, pendekatan riset mendalam, dan komitmen terhadap integritas.",
    "hero.cta.primary": "Konsultasi Sekarang",
    "hero.cta.secondary": "Pelajari Lebih Lanjut",
    "hero.cta.ready": "Siap untuk konsultasi?",
    "hero.cta.content":
      "Hubungi kami hari ini untuk konsultasi dan temukan bagaimana kami dapat membantu Anda mencapai tujuan hukum Anda.",

    // About
    "about.title": "Tentang RAS Law Firm",
    "about.intro":
      "RAS Law Firm and Partners adalah firma hukum modern yang berbasis di Jakarta, Indonesia. Kami menghadirkan solusi hukum inovatif dengan pendekatan riset mendalam dan komitmen terhadap integritas.",
    "about.philosophy": "Filosofi Kami",
    "about.philosophy.text":
      "Prosperity Through Law, Driven by Integrity - Kami percaya bahwa kesuksesan klien adalah kesuksesan kami. Setiap langkah yang kami ambil dipandu oleh standar etika tertinggi dan dedikasi untuk memberikan hasil terbaik.",
    "about.story1":
      "RAS Law Firm and Partners didirikan dengan misi yang jelas: menyediakan layanan hukum kelas dunia yang berlandaskan integritas, riset, dan inovasi. Berkantor pusat di Jakarta, kami melayani klien di seluruh Indonesia maupun internasional, dengan keahlian di bidang hukum korporasi, litigasi, kepatuhan (compliance), dan tata kelola perusahaan (governance).",
    "about.story2":
      "Pendekatan kami berbasis riset mendalam. Kami tidak hanya menerapkan hukum, tetapi juga menganalisisnya secara komprehensif, memahami implikasinya, serta merancang strategi yang tidak hanya kuat secara hukum, namun juga praktis secara komersial. Metodologi ini telah memperoleh kepercayaan dari perusahaan-perusahaan terkemuka, lembaga pemerintah, maupun klien individu.",
    "about.story3":
      "Hal yang membedakan kami adalah komitmen kami terhadap integritas. Dalam industri di mana kepercayaan adalah kunci, kami memastikan bahwa setiap keputusan, setiap rekomendasi, dan setiap tindakan kami selalu berada dalam standar etika tertinggi. Reputasi kami didasarkan pada hasil - dan pada cara kami melakukan hal itu.",

    // Why Choose Us
    "why.title": "Mengapa Memilih RAS Law Firm?",
    "why.expertise.title": "Keahlian Multi-Sektor",
    "why.expertise.desc":
      "Tim kami berpengalaman di berbagai bidang hukum korporat, litigasi, dan kepatuhan regulasi.",
    "why.research.title": "Pendekatan Berbasis Riset",
    "why.research.desc":
      "Setiap kasus ditangani dengan analisis hukum mendalam dan strategi yang terukur.",
    "why.integrity.title": "Integritas Tanpa Kompromi",
    "why.integrity.desc":
      "Kami beroperasi dengan standar etika tertinggi dan transparansi penuh kepada klien.",
    "why.senior.title": "Senior Lawyers Berpengalaman",
    "why.senior.desc":
      "Dipimpin oleh praktisi hukum senior dengan track record yang terbukti.",

    // Services
    "services.title": "Layanan Kami",
    "services.corporate": "Corporate Law",
    "services.corporate.desc":
      "Konsultasi hukum perusahaan, merger & akuisisi, struktur bisnis, dan tata kelola korporat.",
    "services.litigation": "Litigation & Dispute Resolution",
    "services.litigation.desc":
      "Penanganan sengketa perdata, pidana, arbitrase, dan mediasi dengan strategi litigasi yang solid.",
    "services.compliance": "Compliance & Governance",
    "services.compliance.desc":
      "Audit kepatuhan, penyusunan kebijakan internal, dan konsultasi regulasi terkini.",
    "services.employment": "Employment Law",
    "services.employment.desc":
      "Konsultasi ketenagakerjaan, penyelesaian perselisihan hubungan industrial, dan pembuatan kontrak kerja.",
    "services.intellectual": "Intellectual Property",
    "services.intellectual.desc":
      "Perlindungan merek, hak cipta, paten, dan litigasi pelanggaran kekayaan intelektual.",
    "services.transaction": "Transaction & Contract",
    "services.transaction.desc":
      "Penyusunan, negosiasi, dan review kontrak untuk berbagai jenis transaksi bisnis.",
    "services.learn-more": "Pelajari Lebih Lanjut",

    // Team
    "team.title": "Tim Kami",
    "team.subtitle":
      "Dipimpin oleh para ahli hukum berpengalaman dengan dedikasi tinggi",

    // Contact
    "contact.title": "Hubungi Kami",
    "contact.subtitle": "Kami siap membantu kebutuhan hukum Anda",
    "contact.office": "Kantor Kami",
    "contact.address":
      "Jl. Salemba Tengah No.56, RT.4/RW.8, Paseban, Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10440",
    "contact.email": "raslawfirm09@gmail.com",
    "contact.phone": "6282188899349",
    "contact.form.name": "Nama Lengkap",
    "contact.form.email": "Email",
    "contact.form.phone": "Nomor Telepon",
    "contact.form.message": "Pesan Anda",
    "contact.form.submit": "Kirim Pesan",

    // Footer
    "footer.tagline": "Solusi hukum profesional dengan integritas",
    "footer.quicklinks": "Quick Links",
    "footer.legal": "Legal",
    "footer.privacy": "Kebijakan Privasi",
    "footer.terms": "Syarat & Ketentuan",
    "footer.rights": "© 2024 RAS Law Firm & Partners. All rights reserved.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.members": "Team",
    "nav.services": "Services",
    "nav.news": "News & Insights",
    "nav.careers": "Careers",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "RAS LAW FIRM",
    "hero.tagline": "Prosperity Through Law, Driven by Integrity",
    "hero.subtitle":
      "Leading law firm in Jakarta with multi-sector expertise, research-driven approach, and unwavering commitment to integrity.",
    "hero.cta.primary": "Get Consultation",
    "hero.cta.secondary": "Learn More",
    "hero.cta.ready": "Ready for consultation?",
    "hero.cta.content":
      "Contact us today for a consultation and discover how we can help you achieve your legal goals.",

    // About
    "about.title": "About RAS Law Firm",
    "about.intro":
      "RAS Law Firm and Partners is a modern law firm based in Jakarta, Indonesia. We deliver innovative legal solutions with in-depth research approach and commitment to integrity.",
    "about.philosophy": "Our Philosophy",
    "about.philosophy.text":
      "Prosperity Through Law, Driven by Integrity - We believe that our clients' success is our success. Every step we take is guided by the highest ethical standards and dedication to delivering the best results.",
    "about.story1":
      "RAS Law Firm and Partners was founded with a clear mission: to provide world-class legal services grounded in integrity, research, and innovation. Based in Jakarta, we serve clients across Indonesia and internationally, offering expertise in corporate law, litigation, compliance, and governance.",
    "about.story2":
      "Our approach is research-driven. We don't just apply the law; we analyze it deeply, understand its implications, and craft strategies that are both legally sound and commercially practical. This methodology has earned us the trust of leading corporations, government institutions, and individual clients.",
    "about.story3":
      "Our approach is research-driven. We don't just apply the law; we analyze it deeply, understand its implications, and craft strategies that are both legally sound and commercially practical. This methodology has earned us the trust of leading corporations, government institutions, and individual clients.",

    // Why Choose Us
    "why.title": "Why Choose RAS Law Firm?",
    "why.expertise.title": "Multi-Sector Expertise",
    "why.expertise.desc":
      "Our team is experienced across corporate law, litigation, and regulatory compliance.",
    "why.research.title": "Research-Driven Approach",
    "why.research.desc":
      "Every case is handled with thorough legal analysis and measured strategy.",
    "why.integrity.title": "Uncompromising Integrity",
    "why.integrity.desc":
      "We operate with the highest ethical standards and full transparency to clients.",
    "why.senior.title": "Experienced Senior Lawyers",
    "why.senior.desc":
      "Led by senior legal practitioners with proven track records.",

    // Services
    "services.title": "Our Services",
    "services.corporate": "Corporate Law",
    "services.corporate.desc":
      "Corporate legal consultation, M&A, business structuring, and corporate governance.",
    "services.litigation": "Litigation & Dispute Resolution",
    "services.litigation.desc":
      "Handling civil, criminal, arbitration, and mediation disputes with solid litigation strategy.",
    "services.compliance": "Compliance & Governance",
    "services.compliance.desc":
      "Compliance audit, internal policy development, and latest regulatory consultation.",
    "services.employment": "Employment Law",
    "services.employment.desc":
      "Employment consultation, industrial relations dispute resolution, and employment contract drafting.",
    "services.intellectual": "Intellectual Property",
    "services.intellectual.desc":
      "Trademark protection, copyright, patents, and intellectual property infringement litigation.",
    "services.transaction": "Transaction & Contract",
    "services.transaction.desc":
      "Drafting, negotiating, and reviewing contracts for various business transactions.",
    "services.learn-more": "Learn More",

    // Team
    "team.title": "Our Team",
    "team.subtitle": "Led by experienced legal experts with high dedication",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "We are ready to assist with your legal needs",
    "contact.office": "Our Office",
    "contact.address":
      "Jl. Salemba Tengah No.56, RT.4/RW.8, Paseban, Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10440",
    "contact.email": "raslawfirm09@gmail.com",
    "contact.phone": "6282188899349",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",

    // Footer
    "footer.tagline": "Professional legal solutions with integrity",
    "footer.quicklinks": "Quick Links",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.rights": "© 2024 RAS Law Firm & Partners. All rights reserved.",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
