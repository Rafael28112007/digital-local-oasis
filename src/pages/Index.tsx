
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Menu, X, Search, ChevronDown, ChevronUp, AlertTriangle, Star, Check, Users, Globe, TrendingUp, Shield, Mail, Phone, MapPin } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { PricingSection } from "@/components/PricingSection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { FAQSection } from "@/components/FAQSection";
import { ContactForm } from "@/components/ContactForm";
import { AffiliateProducts } from "@/components/AffiliateProducts";
import { BenefitsSection } from "@/components/BenefitsSection";
import { AuthSection } from "@/components/AuthSection";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section id="accueil" className="hero-gradient text-white min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Développez Votre
              <span className="block text-blue-300">Présence Digitale</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Sites web professionnels pour coiffeurs, restaurants et commerces locaux. 
              Augmentez votre visibilité et vos revenus avec nos solutions sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
                onClick={() => scrollToSection('offres')}
              >
                Découvrir nos offres
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
                onClick={() => scrollToSection('contact')}
              >
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Globe className="w-12 h-12 text-blue-300 opacity-70" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{animationDelay: '2s'}}>
          <TrendingUp className="w-12 h-12 text-blue-300 opacity-70" />
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Project Showcase */}
      <ProjectShowcase />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactForm />

      {/* Affiliate Products */}
      <AffiliateProducts />

      {/* Auth Section */}
      <AuthSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">WebPro Solutions</h3>
              <p className="text-gray-400">
                Votre partenaire digital pour développer votre commerce local.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sites web professionnels</li>
                <li>Marketing digital</li>
                <li>Maintenance technique</li>
                <li>Formation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@webpro-solutions.fr</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+33 1 23 45 67 89</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mentions légales</li>
                <li>Politique de confidentialité</li>
                <li>CGV</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 WebPro Solutions. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
