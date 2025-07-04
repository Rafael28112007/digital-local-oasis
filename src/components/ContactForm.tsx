
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    businessType: "",
    message: "",
    budget: ""
  });

  const businessTypes = [
    "Coiffeur / Salon de beauté",
    "Restaurant / Bar",
    "Boulangerie / Pâtisserie",
    "Commerce de détail",
    "Services professionnels",
    "Artisan",
    "Cabinet médical",
    "Autre"
  ];

  const budgets = [
    "Moins de 500€",
    "500€ - 1000€",
    "1000€ - 2000€",
    "Plus de 2000€",
    "À discuter"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    alert("Merci pour votre demande ! Nous vous contacterons dans les 24h.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      business: "",
      businessType: "",
      message: "",
      budget: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Demandez Votre Devis Gratuit</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à développer votre présence digitale ? Contactez-nous pour un devis personnalisé 
            et gratuit adapté à votre commerce.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Formulaire de Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom complet *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom de votre commerce *</label>
                    <Input
                      value={formData.business}
                      onChange={(e) => handleInputChange("business", e.target.value)}
                      placeholder="Nom de votre entreprise"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Type d'activité *</label>
                    <Select onValueChange={(value) => handleInputChange("businessType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre activité" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget envisagé</label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre budget" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgets.map((budget) => (
                          <SelectItem key={budget} value={budget}>
                            {budget}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Décrivez votre projet *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Parlez-nous de votre commerce, vos besoins, vos objectifs..."
                    rows={5}
                    required
                  />
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="flex items-center justify-between">
                    <span>En soumettant ce formulaire, vous acceptez notre politique de confidentialité.</span>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-auto p-1">
                          <AlertTriangle className="w-4 h-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="font-medium">Politique de Confidentialité</h4>
                          <p className="text-sm text-muted-foreground">
                            Vos données personnelles sont traitées dans le respect du RGPD. 
                            Elles ne sont utilisées que pour traiter votre demande et vous contacter.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Vous disposez d'un droit d'accès, de rectification et de suppression 
                            de vos données personnelles.
                          </p>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </AlertDescription>
                </Alert>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer ma Demande
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Nos Coordonnées</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">contact@webpro-solutions.fr</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Téléphone</div>
                    <div className="text-muted-foreground">+33 1 23 45 67 89</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Adresse</div>
                    <div className="text-muted-foreground">123 Rue du Commerce<br />75001 Paris, France</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Horaires</div>
                    <div className="text-muted-foreground">Lun-Ven: 9h-18h<br />Sam: 10h-16h</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-blue-700 text-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Engagement Qualité</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-white/20 text-white">✓</Badge>
                    <span>Réponse sous 24h garantie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-white/20 text-white">✓</Badge>
                    <span>Devis gratuit et sans engagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-white/20 text-white">✓</Badge>
                    <span>Accompagnement personnalisé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-white/20 text-white">✓</Badge>
                    <span>Satisfaction client garantie</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
