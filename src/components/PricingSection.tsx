
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "49€",
      period: "/mois",
      description: "Parfait pour débuter votre présence en ligne",
      features: [
        "Site web responsive",
        "5 pages incluses",
        "Formulaire de contact",
        "Optimisation SEO de base",
        "Support email",
        "Hébergement inclus"
      ],
      popular: false,
      buttonText: "Commencer"
    },
    {
      name: "Professional",
      price: "99€",
      period: "/mois",
      description: "Pour les commerces qui veulent se démarquer",
      features: [
        "Tout du plan Starter",
        "10 pages incluses",
        "Réservation en ligne",
        "Galerie photos illimitée",
        "Intégration réseaux sociaux",
        "Analytics avancés",
        "Support prioritaire",
        "Maintenance incluse"
      ],
      popular: true,
      buttonText: "Choisir Professional"
    },
    {
      name: "Premium",
      price: "149€",
      period: "/mois",
      description: "Solution complète pour maximiser votre croissance",
      features: [
        "Tout du plan Professional",
        "Pages illimitées",
        "E-commerce intégré",
        "Marketing automation",
        "Formation personnalisée",
        "Support téléphonique",
        "Optimisation continue",
        "Rapport mensuel détaillé"
      ],
      popular: false,
      buttonText: "Choisir Premium"
    }
  ];

  return (
    <section id="offres" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nos Offres d'Abonnement</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choisissez la solution qui correspond à vos besoins. Tous nos abonnements incluent 
            la création, l'hébergement et la maintenance de votre site web professionnel.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary border-2 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Plus populaire
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-base mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Tous nos abonnements sont sans engagement. Résiliez à tout moment.
          </p>
          <Button variant="link" className="text-primary">
            Comparer toutes les fonctionnalités →
          </Button>
        </div>
      </div>
    </section>
  );
};
