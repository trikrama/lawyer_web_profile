// News Page: Blog, insights, press releases, dan legal updates
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const { t } = useLanguage();

  // Sample news articles
  const articles = [
    {
      category: 'Legal Analysis',
      title: 'New Data Protection Regulations: What Businesses Need to Know',
      excerpt: 'Comprehensive overview of the latest data protection regulations and their implications for Indonesian businesses.',
      date: '2024-01-15',
      author: 'Dr. Raden Achmad Santoso',
      image: 'bg-gradient-dark',
    },
    {
      category: 'Market Insights',
      title: 'M&A Trends in Southeast Asia: 2024 Outlook',
      excerpt: 'Analysis of merger and acquisition activities in the region with predictions for the upcoming year.',
      date: '2024-01-10',
      author: 'Maria Angelina',
      image: 'bg-gradient-gold',
    },
    {
      category: 'Regulatory Update',
      title: 'Employment Law Changes: Impact on HR Practices',
      excerpt: 'Key changes in employment regulations and actionable steps for HR departments to ensure compliance.',
      date: '2024-01-05',
      author: 'Budi Hartono',
      image: 'bg-gradient-dark',
    },
    {
      category: 'Press Release',
      title: 'RAS Law Firm Advises on Landmark Infrastructure Deal',
      excerpt: 'Our firm successfully advised a major client on a USD 500M infrastructure project in Jakarta.',
      date: '2023-12-20',
      author: 'Agus Setiawan',
      image: 'bg-gradient-gold',
    },
    {
      category: 'Legal Analysis',
      title: 'Intellectual Property Protection in the Digital Age',
      excerpt: 'Strategies for protecting IP assets in an increasingly digital business environment.',
      date: '2023-12-15',
      author: 'Siti Nurhaliza',
      image: 'bg-gradient-dark',
    },
    {
      category: 'Market Insights',
      title: 'Banking Sector Compliance: Key Developments',
      excerpt: 'Recent regulatory changes affecting financial institutions and recommended compliance strategies.',
      date: '2023-12-10',
      author: 'Linda Wijaya',
      image: 'bg-gradient-gold',
    },
  ];

  const categories = ['All', 'Legal Analysis', 'Market Insights', 'Regulatory Update', 'Press Release'];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
              {t('nav.news')}
            </h1>
            <div className="w-20 h-1 bg-gradient-gold mx-auto" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay informed with the latest legal insights, regulatory updates, and firm news
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="hover-lift border-border bg-card overflow-hidden group cursor-pointer"
              >
                {/* Featured Image Placeholder */}
                <div className={`aspect-video ${article.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-serif font-bold text-white/20">
                      {article.category}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>

                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(article.date).toLocaleDateString('id-ID')}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-serif line-clamp-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">By {article.author}</p>
                    <div className="flex items-center text-sm font-semibold text-accent group-hover:underline">
                      Read more <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      {/* <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-serif font-bold text-foreground">
              Subscribe to Our Newsletter
            </h2>
            <div className="w-20 h-1 bg-gradient-gold mx-auto" />
            <p className="text-lg text-muted-foreground">
              Get the latest legal insights and firm updates delivered directly to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default News;
