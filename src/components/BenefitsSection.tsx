
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Users, TrendingUp, Shield, Search, Clock, Star, Smartphone } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Visibilité 24h/24",
      description: "Votre commerce est accessible en permanence, même quand vous êtes fermé. Captez de nouveaux clients à tout moment."
    },
    {
      icon: Users,
      title: "Élargissez votre clientèle",
      description: "Touchez une audience plus large et attirez de nouveaux clients grâce à votre présence en ligne professionnelle."
    },
    {
      icon: TrendingUp,
      title: "Augmentez vos revenus",
      description: "Nos clients voient en moyenne une hausse de 45% de leur chiffre d'affaires après 6 mois de présence digitale."
    },
    {
      icon: Search,
      title: "Référencement Google",
      description: "Apparaissez en première page des résultats Google pour vos mots-clés locaux et devancez vos concurrents."
    },
    {
      icon: Smartphone,
      title: "Accessible sur mobile",
      description: "Plus de 70% des recherches locales se font sur mobile. Votre site s'adapte parfaitement à tous les écrans."
    },
    {
      icon: Shield,
      title: "Image professionnelle",
      description: "Renforcez la confiance de vos clients avec un site web moderne et professionnel qui reflète votre expertise."
    },
    {
      icon: Clock,
      title: "Gagnez du temps",
      description: "Automatisez vos prises de rendez-vous, commandes et demandes d'information pour vous concentrer sur votre métier."
    },
    {
      icon: Star,
      title: "Fidélisez vos clients",
      description: "Maintenez le contact avec vos clients grâce aux newsletters, promotions et actualités de votre commerce."
    }
  ];

  return (
    <section id="avantages" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Pourquoi Avoir un Site Web ?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dans un monde de plus en plus connecté, avoir une présence digitale n'est plus 
            un luxe, c'est une nécessité pour développer votre commerce local.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Les Chiffres Parlent d'Eux-Mêmes</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">97%</div>
              <div className="text-sm text-muted-foreground">des consommateurs recherchent en ligne avant d'acheter localement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">88%</div>
              <div className="text-sm text-muted-foreground">des recherches locales sur mobile aboutissent à une visite dans les 24h</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">+200%</div>
              <div className="text-sm text-muted-foreground">d'augmentation des réservations avec un système en ligne</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">75%</div>
              <div className="text-sm text-muted-foreground">des clients jugent la crédibilité d'une entreprise sur son site web</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
