
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar } from "lucide-react";

export const ProjectShowcase = () => {
  const projects = [
    {
      title: "Salon de Coiffure Élégance",
      category: "Coiffure",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Site web moderne avec système de réservation en ligne et galerie photo.",
      features: ["Réservation en ligne", "Galerie", "Blog beauté"],
      date: "Décembre 2023",
      url: "#"
    },
    {
      title: "Restaurant Le Gourmet",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Plateforme complète avec menu interactif et commande en ligne.",
      features: ["Menu interactif", "Commande en ligne", "Réservation"],
      date: "Novembre 2023",
      url: "#"
    },
    {
      title: "Boulangerie Artisanale",
      category: "Boulangerie",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Site e-commerce pour la vente de produits artisanaux.",
      features: ["E-commerce", "Catalogue produits", "Click & Collect"],
      date: "Octobre 2023",
      url: "#"
    },
    {
      title: "Institut de Beauté Zen",
      category: "Beauté",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Site premium avec présentation des soins et réservation.",
      features: ["Présentation soins", "Réservation", "Témoignages"],
      date: "Septembre 2023",
      url: "#"
    },
    {
      title: "Garage Auto Expert",
      category: "Automobile",
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Site professionnel avec devis en ligne et présentation des services.",
      features: ["Devis en ligne", "Services", "Urgences 24h/7j"],
      date: "Août 2023",
      url: "#"
    },
    {
      title: "Cabinet Médical",
      category: "Santé",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Plateforme de rendez-vous médicaux avec informations pratiques.",
      features: ["Prise de RDV", "Informations médicales", "Urgences"],
      date: "Juillet 2023",
      url: "#"
    }
  ];

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nos Dernières Réalisations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment nous avons aidé des commerces locaux à développer 
            leur présence digitale et augmenter leur chiffre d'affaires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary">
                  {project.category}
                </Badge>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-6 h-6 text-white bg-black/50 rounded-full p-1" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                  <span className="text-primary font-medium cursor-pointer hover:underline">
                    Voir le projet →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Plus de 150 sites web créés depuis 2020
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">+45%</div>
              <div className="text-sm text-muted-foreground">Hausse CA moyenne</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Temps de réponse</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
