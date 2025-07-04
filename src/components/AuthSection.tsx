
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Lock, Mail, Calendar, CreditCard, Settings, LogOut, Eye, EyeOff } from "lucide-react";

export const AuthSection = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ 
    name: "", 
    email: "", 
    password: "", 
    confirmPassword: "",
    business: ""
  });

  // Simulation d'un utilisateur connecté
  const user = {
    name: "Marie Dubois",
    email: "marie@salonelegance.fr",
    business: "Salon Élégance",
    subscription: {
      plan: "Professional",
      status: "Active",
      nextBilling: "15 Janvier 2024",
      price: "99€/mois"
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Connexion:", loginData);
    setIsLoggedIn(true);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inscription:", registerData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: "", password: "" });
    setRegisterData({ name: "", email: "", password: "", confirmPassword: "", business: "" });
  };

  const handleCancelSubscription = () => {
    if (confirm("Êtes-vous sûr de vouloir annuler votre abonnement ?")) {
      alert("Votre abonnement sera annulé à la fin de la période de facturation actuelle.");
    }
  };

  if (isLoggedIn) {
    return (
      <section id="compte" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Mon Compte</h2>
              <p className="text-xl text-muted-foreground">
                Gérez votre abonnement et vos informations personnelles
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Profile Card */}
              <Card className="lg:col-span-1">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle>{user.name}</CardTitle>
                  <p className="text-muted-foreground">{user.business}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{user.email}</span>
                    </div>
                    <Badge className="w-full justify-center bg-green-100 text-green-800">
                      {user.subscription.plan}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Account Management */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="subscription" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="subscription">Abonnement</TabsTrigger>
                    <TabsTrigger value="profile">Profil</TabsTrigger>
                    <TabsTrigger value="settings">Paramètres</TabsTrigger>
                  </TabsList>

                  <TabsContent value="subscription" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CreditCard className="w-5 h-5" />
                          Détails de l&apos;Abonnement
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Plan Actuel</label>
                            <p className="text-lg font-semibold">{user.subscription.plan}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Statut</label>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-green-600 font-medium">{user.subscription.status}</span>
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Prochaine Facturation</label>
                            <p className="font-medium">{user.subscription.nextBilling}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Montant</label>
                            <p className="text-lg font-semibold text-primary">{user.subscription.price}</p>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button variant="outline" className="flex-1">
                            Modifier le Plan
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Gérer le Paiement
                          </Button>
                          <Button 
                            variant="destructive" 
                            className="flex-1"
                            onClick={handleCancelSubscription}
                          >
                            Annuler l&apos;Abonnement
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="profile" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <User className="w-5 h-5" />
                          Informations Personnelles
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Nom complet</label>
                            <Input defaultValue={user.name} />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <Input type="email" defaultValue={user.email} />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-sm font-medium mb-2">Nom du commerce</label>
                            <Input defaultValue={user.business} />
                          </div>
                        </div>
                        <Button>Sauvegarder les Modifications</Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="settings" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Settings className="w-5 h-5" />
                          Paramètres du Compte
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-medium mb-3">Sécurité</h4>
                          <div className="space-y-3">
                            <Button variant="outline" className="w-full justify-start">
                              <Lock className="w-4 h-4 mr-2" />
                              Changer le Mot de Passe
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                              <Mail className="w-4 h-4 mr-2" />
                              Authentification à Deux Facteurs
                            </Button>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h4 className="font-medium mb-3">Préférences</h4>
                          <div className="space-y-3">
                            <label className="flex items-center justify-between">
                              <span>Notifications par email</span>
                              <input type="checkbox" defaultChecked className="rounded" />
                            </label>
                            <label className="flex items-center justify-between">
                              <span>Newsletter marketing</span>
                              <input type="checkbox" className="rounded" />
                            </label>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <Button 
                          variant="destructive" 
                          onClick={handleLogout}
                          className="w-full"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Se Déconnecter
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="compte" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Mon Compte</h2>
            <p className="text-xl text-muted-foreground">
              Connectez-vous pour gérer votre abonnement
            </p>
          </div>

          <Card>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Connexion</TabsTrigger>
                <TabsTrigger value="register">S&apos;inscrire</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <CardHeader>
                  <CardTitle>Se Connecter</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mot de passe</label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          value={loginData.password}
                          onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                          placeholder="Votre mot de passe"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Se Connecter
                    </Button>
                    <Button type="button" variant="link" className="w-full">
                      Mot de passe oublié ?
                    </Button>
                  </form>
                </CardContent>
              </TabsContent>

              <TabsContent value="register">
                <CardHeader>
                  <CardTitle>Créer un Compte</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom complet</label>
                      <Input
                        value={registerData.name}
                        onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom du commerce</label>
                      <Input
                        value={registerData.business}
                        onChange={(e) => setRegisterData({...registerData, business: e.target.value})}
                        placeholder="Nom de votre entreprise"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mot de passe</label>
                      <Input
                        type="password"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                        placeholder="Votre mot de passe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Confirmer le mot de passe</label>
                      <Input
                        type="password"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                        placeholder="Confirmez votre mot de passe"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      S&apos;inscrire
                    </Button>
                  </form>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
};
