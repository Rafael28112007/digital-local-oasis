
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, ChevronDown, ChevronUp, Plus, Shield, MessageCircle, User } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [newQuestion, setNewQuestion] = useState("");
  const [wantNotifications, setWantNotifications] = useState(true);
  const [email, setEmail] = useState("");

  const faqs = [
    {
      question: "Combien de temps faut-il pour créer mon site web ?",
      answer: "En moyenne, nous créons votre site web en 7 à 14 jours ouvrés selon la complexité de votre projet. Les sites simples peuvent être livrés en une semaine, tandis que les projets e-commerce prennent généralement 2 semaines.",
      category: "Délais",
      isAdmin: true
    },
    {
      question: "Que se passe-t-il si je veux arrêter mon abonnement ?",
      answer: "Vous pouvez annuler votre abonnement à tout moment sans frais cachés. Votre site reste actif jusqu'à la fin de votre période facturée. Nous vous fournissons une copie de votre site si vous le souhaitez.",
      category: "Abonnement",
      isAdmin: true
    },
    {
      question: "Mon site sera-t-il visible sur Google ?",
      answer: "Oui, tous nos sites sont optimisés pour le référencement naturel (SEO). Nous nous occupons de l'indexation sur Google et incluons les outils d'analyse. Vous commencerez à voir des résultats sous 2-3 mois.",
      category: "SEO",
      isAdmin: true
    },
    {
      question: "Puis-je modifier mon site moi-même ?",
      answer: "Absolument ! Nous vous formons à l'utilisation de votre interface d'administration. Vous pourrez modifier vos textes, photos, prix et horaires en toute autonomie. Une formation en visio est incluse.",
      category: "Formation",
      isAdmin: true
    },
    {
      question: "Le site fonctionne-t-il sur mobile ?",
      answer: "Oui, tous nos sites sont 100% responsives et s'adaptent automatiquement aux smartphones et tablettes. C'est indispensable car plus de 70% des visites se font sur mobile.",
      category: "Technique",
      isAdmin: true
    },
    {
      question: "Que comprend la maintenance ?",
      answer: "La maintenance inclut les mises à jour de sécurité, les sauvegardes automatiques, la surveillance du site, les corrections de bugs mineurs et l'assistance technique par email et téléphone.",
      category: "Maintenance",
      isAdmin: true
    },
    {
      question: "Pouvez-vous m'aider avec les photos de mon commerce ?",
      answer: "Nous proposons des séances photo professionnelles en option pour mettre en valeur votre commerce. Sinon, nous pouvons optimiser vos photos existantes ou vous conseiller sur les prises de vue.",
      category: "Photos",
      isAdmin: false
    },
    {
      question: "Comment fonctionne le système de réservation en ligne ?",
      answer: "Le système de réservation se synchronise avec votre agenda. Vos clients choisissent un créneau disponible, renseignent leurs coordonnées et reçoivent une confirmation par email. Vous gérez tout depuis votre interface.",
      category: "Réservation",
      isAdmin: true
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;
    
    console.log("Nouvelle question:", newQuestion);
    console.log("Notifications demandées:", wantNotifications);
    console.log("Email:", email);
    
    // Reset form
    setNewQuestion("");
    setEmail("");
    setWantNotifications(true);
    
    alert("Votre question a été envoyée ! Nous vous répondrons dans les plus brefs délais.");
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Questions Fréquentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions ou posez la vôtre à notre communauté.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Rechercher dans les questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={searchTerm === "" ? "default" : "outline"}
              size="sm"
              onClick={() => setSearchTerm("")}
            >
              Toutes
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                onClick={() => setSearchTerm(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-12">
            {filteredFAQs.map((faq, index) => (
              <Card key={index} className="transition-all duration-200 hover:shadow-md">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-left text-lg">{faq.question}</CardTitle>
                      {faq.isAdmin && (
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          <Shield className="w-3 h-3 mr-1" />
                          Admin
                        </Badge>
                      )}
                    </div>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                
                {openFAQ === index && (
                  <CardContent className="pt-0">
                    <Separator className="mb-4" />
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                      <Badge variant="outline">{faq.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        {faq.isAdmin ? "Équipe WebPro" : "Membre de la communauté"}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Ask Question Form */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Poser une Question
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitQuestion} className="space-y-4">
                <Textarea
                  placeholder="Posez votre question ici..."
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  rows={4}
                  required
                />
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="notifications"
                    checked={wantNotifications}
                    onCheckedChange={(checked) => setWantNotifications(checked === true)}
                  />
                  <label htmlFor="notifications" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Recevoir les notifications lors de la réponse
                  </label>
                </div>

                {wantNotifications && (
                  <Input
                    type="email"
                    placeholder="Votre adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={wantNotifications}
                  />
                )}

                <Button type="submit" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Envoyer ma Question
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
