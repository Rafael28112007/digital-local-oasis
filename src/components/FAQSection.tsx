import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, ChevronDown, ChevronUp, Plus, Shield, MessageCircle, User, ThumbsUp, Reply } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  isAdmin: boolean;
  likes: number;
  responses: Response[];
}

interface Response {
  id: number;
  text: string;
  isAdmin: boolean;
  likes: number;
  timestamp: Date;
}

export const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [newQuestion, setNewQuestion] = useState("");
  const [wantNotifications, setWantNotifications] = useState(true);
  const [email, setEmail] = useState("");
  const [responseText, setResponseText] = useState<{[key: number]: string}>({});
  const [showResponseForm, setShowResponseForm] = useState<number | null>(null);
  
  // Track liked items by user (using a simple userId simulation)
  const [likedFAQs, setLikedFAQs] = useState<Set<number>>(new Set());
  const [likedResponses, setLikedResponses] = useState<Set<string>>(new Set()); // Using "faqId-responseId" format

  const initialFAQs: FAQ[] = [
    {
      id: 1,
      question: "Combien de temps faut-il pour créer mon site web ?",
      answer: "En moyenne, nous créons votre site web en 7 à 14 jours ouvrés selon la complexité de votre projet. Les sites simples peuvent être livrés en une semaine, tandis que les projets e-commerce prennent généralement 2 semaines.",
      category: "Délais",
      isAdmin: true,
      likes: 15,
      responses: [
        {
          id: 1,
          text: "Parfait, c'est exactement ce que je cherchais comme délai !",
          isAdmin: false,
          likes: 3,
          timestamp: new Date('2024-01-15')
        }
      ]
    },
    {
      id: 2,
      question: "Que se passe-t-il si je veux arrêter mon abonnement ?",
      answer: "Vous pouvez annuler votre abonnement à tout moment sans frais cachés. Votre site reste actif jusqu'à la fin de votre période facturée. Votre site reste actif jusqu'à la fin de votre période facturée. Nous vous fournissons une copie de votre site si vous le souhaitez.",
      category: "Abonnement",
      isAdmin: true,
      likes: 12,
      responses: []
    },
    {
      id: 3,
      question: "Mon site sera-t-il visible sur Google ?",
      answer: "Oui, tous nos sites sont optimisés pour le référencement naturel (SEO). Nous nous occupons de l'indexation sur Google et incluons les outils d'analyse. Vous commencerez à voir des résultats sous 2-3 mois.",
      category: "SEO",
      isAdmin: true,
      likes: 8,
      responses: []
    },
    {
      id: 4,
      question: "Puis-je modifier mon site moi-même ?",
      answer: "Absolument ! Nous vous formons à l'utilisation de votre interface d'administration. Vous pourrez modifier vos textes, photos, prix et horaires en toute autonomie. Une formation en visio est incluse.",
      category: "Formation",
      isAdmin: true,
      likes: 5,
      responses: []
    },
    {
      id: 5,
      question: "Le site fonctionne-t-il sur mobile ?",
      answer: "Oui, tous nos sites sont 100% responsives et s'adaptent automatiquement aux smartphones et tablettes. C'est indispensable car plus de 70% des visites se font sur mobile.",
      category: "Technique",
      isAdmin: true,
      likes: 3,
      responses: []
    },
    {
      id: 6,
      question: "Que comprend la maintenance ?",
      answer: "La maintenance inclut les mises à jour de sécurité, les sauvegardes automatiques, la surveillance du site, les corrections de bugs mineurs et l'assistance technique par email et téléphone.",
      category: "Maintenance",
      isAdmin: true,
      likes: 18,
      responses: []
    },
    {
      id: 7,
      question: "Pouvez-vous m'aider avec les photos de mon commerce ?",
      answer: "Nous proposons des séances photo professionnelles en option pour mettre en valeur votre commerce. Sinon, nous pouvons optimiser vos photos existantes ou vous conseiller sur les prises de vue.",
      category: "Photos",
      isAdmin: false,
      likes: 2,
      responses: []
    },
    {
      id: 8,
      question: "Comment fonctionne le système de réservation en ligne ?",
      answer: "Le système de réservation se synchronise avec votre agenda. Vos clients choisissent un créneau disponible, renseignent leurs coordonnées et reçoivent une confirmation par email. Vous gérez tout depuis votre interface.",
      category: "Réservation",
      isAdmin: true,
      likes: 7,
      responses: []
    }
  ];

  const [faqs, setFaqs] = useState<FAQ[]>(initialFAQs);

  const filteredFAQs = faqs
    .filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.likes - a.likes);

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const handleLikeFAQ = (faqId: number) => {
    const isAlreadyLiked = likedFAQs.has(faqId);
    
    setLikedFAQs(prev => {
      const newSet = new Set(prev);
      if (isAlreadyLiked) {
        newSet.delete(faqId);
      } else {
        newSet.add(faqId);
      }
      return newSet;
    });

    setFaqs(prevFaqs => 
      prevFaqs.map(faq => 
        faq.id === faqId 
          ? { ...faq, likes: isAlreadyLiked ? faq.likes - 1 : faq.likes + 1 }
          : faq
      )
    );
  };

  const handleLikeResponse = (faqId: number, responseId: number) => {
    const responseKey = `${faqId}-${responseId}`;
    const isAlreadyLiked = likedResponses.has(responseKey);
    
    setLikedResponses(prev => {
      const newSet = new Set(prev);
      if (isAlreadyLiked) {
        newSet.delete(responseKey);
      } else {
        newSet.add(responseKey);
      }
      return newSet;
    });

    setFaqs(prevFaqs => 
      prevFaqs.map(faq => 
        faq.id === faqId 
          ? {
              ...faq,
              responses: faq.responses.map(response =>
                response.id === responseId
                  ? { ...response, likes: isAlreadyLiked ? response.likes - 1 : response.likes + 1 }
                  : response
              )
            }
          : faq
      )
    );
  };

  const handleSubmitResponse = (faqId: number) => {
    const text = responseText[faqId];
    if (!text?.trim()) return;

    const newResponse: Response = {
      id: Date.now(),
      text: text.trim(),
      isAdmin: false,
      likes: 0,
      timestamp: new Date()
    };

    setFaqs(prevFaqs =>
      prevFaqs.map(faq =>
        faq.id === faqId
          ? { ...faq, responses: [...faq.responses, newResponse] }
          : faq
      )
    );

    setResponseText(prev => ({ ...prev, [faqId]: "" }));
    setShowResponseForm(null);
  };

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;
    
    console.log("Nouvelle question:", newQuestion);
    console.log("Notifications demandées:", wantNotifications);
    console.log("Email:", email);
    
    const newFAQ: FAQ = {
      id: Date.now(),
      question: newQuestion,
      answer: "Cette question est en attente de réponse. Nous vous répondrons dans les plus brefs délais.",
      category: "En attente",
      isAdmin: false,
      likes: 0,
      responses: []
    };
    
    setFaqs(prevFaqs => [newFAQ, ...prevFaqs]);
    
    setNewQuestion("");
    setEmail("");
    setWantNotifications(true);
    
    alert("Votre question a été ajoutée ! Elle apparaît maintenant dans la liste des questions.");
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
            {filteredFAQs.map((faq) => (
              <Card key={faq.id} className="transition-all duration-200 hover:shadow-md">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
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
                      {faq.category === "En attente" && (
                        <Badge variant="outline" className="bg-orange-100 text-orange-800">
                          En attente
                        </Badge>
                      )}
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{faq.likes}</span>
                      </div>
                    </div>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                
                {openFAQ === faq.id && (
                  <CardContent className="pt-0">
                    <Separator className="mb-4" />
                    <p className="text-muted-foreground leading-relaxed mb-4">{faq.answer}</p>
                    
                    {/* Actions */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b">
                      <div className="flex items-center gap-4">
                        <Badge variant="outline">{faq.category}</Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {faq.isAdmin ? "Équipe WebPro" : "Membre de la communauté"}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant={likedFAQs.has(faq.id) ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleLikeFAQ(faq.id)}
                          className="flex items-center gap-1"
                        >
                          <ThumbsUp className="w-4 h-4" />
                          {faq.likes}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowResponseForm(showResponseForm === faq.id ? null : faq.id)}
                          className="flex items-center gap-1"
                        >
                          <Reply className="w-4 h-4" />
                          Répondre
                        </Button>
                      </div>
                    </div>

                    {/* Responses */}
                    {faq.responses.length > 0 && (
                      <div className="space-y-3 mb-4">
                        <h4 className="font-medium text-sm text-muted-foreground">Réponses de la communauté:</h4>
                        {faq.responses
                          .sort((a, b) => b.likes - a.likes)
                          .map((response) => {
                            const responseKey = `${faq.id}-${response.id}`;
                            const isLiked = likedResponses.has(responseKey);
                            
                            return (
                              <div key={response.id} className="bg-gray-50 p-3 rounded-lg">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <p className="text-sm mb-2">{response.text}</p>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                      <User className="w-3 h-3" />
                                      {response.isAdmin ? (
                                        <span className="flex items-center gap-1">
                                          <Shield className="w-3 h-3" />
                                          Équipe WebPro
                                        </span>
                                      ) : (
                                        "Membre de la communauté"
                                      )}
                                      <span>•</span>
                                      <span>{response.timestamp.toLocaleDateString()}</span>
                                    </div>
                                  </div>
                                  <Button
                                    variant={isLiked ? "default" : "ghost"}
                                    size="sm"
                                    onClick={() => handleLikeResponse(faq.id, response.id)}
                                    className="flex items-center gap-1 text-xs"
                                  >
                                    <ThumbsUp className="w-3 h-3" />
                                    {response.likes}
                                  </Button>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    )}

                    {/* Response Form */}
                    {showResponseForm === faq.id && (
                      <div className="space-y-3">
                        <Textarea
                          placeholder="Votre réponse..."
                          value={responseText[faq.id] || ""}
                          onChange={(e) => setResponseText(prev => ({ ...prev, [faq.id]: e.target.value }))}
                          rows={3}
                        />
                        <div className="flex gap-2 justify-end">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowResponseForm(null)}
                          >
                            Annuler
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleSubmitResponse(faq.id)}
                          >
                            Publier la réponse
                          </Button>
                        </div>
                      </div>
                    )}
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
