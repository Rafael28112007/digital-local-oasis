
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, ShoppingCart } from "lucide-react";

export const AffiliateProducts = () => {
  const products = [
    {
      title: "Caisse Enregistreuse Tactile",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: "299€",
      originalPrice: "399€",
      rating: 4.8,
      reviews: 245,
      description: "Système de caisse moderne avec écran tactile, gestion des stocks et rapports détaillés.",
      benefits: ["Écran tactile 15\"", "Gestion stocks", "Rapports détaillés", "Support cloud"],
      affiliate: true
    },
    {
      title: "Sèche-cheveux Professionnel",
      category: "Coiffure",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: "149€",
      originalPrice: "199€",
      rating: 4.9,
      reviews: 156,
      description: "Sèche-cheveux haute performance avec technologie ionique et moteur silencieux.",
      benefits: ["Technologie ionique", "Moteur silencieux", "3 vitesses", "Garantie 2 ans"],
      affiliate: true
    },
    {
      title: "Tablette de Commande Connectée",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: "199€",
      originalPrice: "249€",
      rating: 4.7,
      reviews: 89,
      description: "Tablette pour prise de commandes avec synchronisation automatique et mode hors-ligne.",
      benefits: ["Mode hors-ligne", "Synchronisation auto", "Écran 10\"", "Batterie 12h"],
      affiliate: true
    },
    {
      title: "Fauteuil de Coiffure Hydraulique",
      category: "Coiffure",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: "799€",
      originalPrice: "999€",
      rating: 4.6,
      reviews: 67,
      description: "Fauteuil professionnel avec pompe hydraulique, design moderne et confort optimal.",
      benefits: ["Pompe hydraulique", "Cuir véritable", "Rotation 360°", "Garantie 3 ans"],
      affiliate: true
    },
    {
      title: "Four à Pizza Professionnel",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: "1299€",
      originalPrice: "1599€",
      rating: 4.8,
      reviews: 34,
      description: "Four électrique professionnel pour pizzas, température jusqu'à 500°C.",
      benefits: ["Température 500°C", "2 étages", "Contrôle digital", "Livraison incluse"],
      affiliate: true
    },
    {
      title: "Stérilisateur UV Professionnel",
      category: "Coiffure",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: "89€",
      originalPrice: "119€",
      rating: 4.9,
      reviews: 178,
      description: "Stérilisateur UV pour outils de coiffure, conforme aux normes sanitaires.",
      benefits: ["Lampe UV-C", "Timer automatique", "Capacité 5L", "Norme CE"],
      affiliate: true
    }
  ];

  const handleProductClick = (productTitle: string) => {
    console.log(`Clic sur le produit: ${productTitle}`);
    // Ici vous pourriez rediriger vers le lien d'affiliation Amazon
    alert(`Redirection vers ${productTitle} sur Amazon (lien d'affiliation)`);
  };

  return (
    <section id="produits" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Équipement Professionnel</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre sélection d'équipements professionnels pour développer votre commerce. 
            Produits testés et approuvés par nos clients.
          </p>
          <Badge className="mt-4 bg-green-100 text-green-800">
            Livraison gratuite • Garantie incluse • Support technique
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary">
                  {product.category}
                </Badge>
                {product.originalPrice && (
                  <Badge className="absolute top-4 right-4 bg-red-500">
                    -25%
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {product.title}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} avis)
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {product.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <Button 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  onClick={() => handleProductClick(product.title)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Voir sur Amazon
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Pourquoi Ces Produits ?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Qualité Testée</h4>
                <p className="text-sm text-muted-foreground">
                  Tous les produits sont testés par nos clients professionnels
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Prix Négociés</h4>
                <p className="text-sm text-muted-foreground">
                  Tarifs préférentiels grâce à nos partenariats
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Support Inclus</h4>
                <p className="text-sm text-muted-foreground">
                  Aide à l'installation et formation à l'utilisation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
