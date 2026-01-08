# MamaVillage - Pitch & Fonctionnalités 🌟

## 🎯 LE PITCH

### En une phrase

**MamaVillage** : Le réseau social géolocalisé qui connecte les jeunes parents d'un même quartier pour briser l'isolement du post-partum et créer un village d'entraide local.

### Le problème

- 65% des jeunes mamans se sentent seules après l'accouchement
- 10-20% développent une dépression post-partum
- Perte du réseau social pendant le congé maternité
- Difficulté à demander de l'aide (tabou, culpabilité)
- Le "village pour élever un enfant" n'existe plus

### La solution

Une application qui permet de :

- 🗺️ Trouver des parents près de chez toi (géolocalisation)
- 💬 Échanger via messagerie et groupes de discussion
- 🤝 S'entraider concrètement (garde d'enfant, prêt de matériel, covoiturage)
- 📅 Se rencontrer IRL (événements de quartier, sorties)
- 🆘 Trouver du soutien en cas de coup de blues
- 📚 S'informer via ressources et annuaire de professionnels

## 🎯 SCOPING MVP - RNCP 6

### Contexte projet

- **Objectif** : Développer une web app pour valider un **RNCP 6** (niveau bac+3/4)
- **Itération future** : Évolution vers **RNCP 7** (niveau bac+5)
- **Cible géographique** : Paris (ville pilote) puis France entière
- **Modèle économique** : Gratuit pour le MVP
- **Équipe** : Solo
- **Stack technique** : Ruby on Rails

### ✅ Périmètre MVP (RNCP 6)

#### 1. Authentification & Profils
- Inscription/Connexion (email/mot de passe)
- Profil utilisateur complet :
  - Photo et prénom
  - Adresse (Paris) et géolocalisation
  - Date d'accouchement ou terme de grossesse
  - Âge des enfants
  - Centres d'intérêt (allaitement, portage, activités...)
  - Type de soutien recherché (écoute, conseils pratiques, sorties...)
  - Disponibilités (jours/horaires)
  - Rayon de recherche personnalisable (1km, 3km, 5km)
- Paramètres de confidentialité basiques

#### 2. Géolocalisation & Découverte
- Carte interactive avec visualisation des parents dans le rayon
- Filtres multiples :
  - Distance géographique
  - Âge des enfants
  - Centres d'intérêt communs
  - Disponibilités
  - Type de soutien recherché
- Bascule vue carte / vue liste
- Recherche par arrondissement/quartier Paris

#### 3. Messagerie 1-to-1
- Chat privé en temps réel
- Upload de photos dans le chat
- Historique des conversations
- Notifications push uniquement (pas d'email pour MVP)

#### 4. Événements Locaux
- Création d'événement : titre, description, date/heure, lieu (adresse Paris)
- Liste des événements à proximité
- Filtres par date, distance, type d'événement, âge des enfants
- Inscription à un événement
- Liste des participants confirmés
- [À confirmer : Commentaires/discussions sur l'événement]

#### 5. Demandes d'Aide
- Poster une demande avec :
  - Type d'aide (garde ponctuelle, prêt matériel, covoiturage, courses, écoute...)
  - Description détaillée
  - Date et durée
  - Niveau d'urgence (normal / urgent)
  - Localisation
- Voir les demandes du quartier
- Contacter le demandeur via chat
- [À confirmer : Système de validation/remerciement ou simple contact]

#### 6. Sécurité & Modération Basique
- Validation email obligatoire
- Signalement utilisateur/contenu
- Blocage utilisateur
- Modération basique (pas d'équipe dédiée pour MVP)

#### 7. Dashboard Utilisateur
- Mes conversations actives
- Mes événements (créés + inscrits)
- Mes demandes d'aide (postées + reçues)

### ❌ Reporté en RNCP 7

- Groupes de discussion
- Système de prêt de matériel (catalogue, gestion)
- Gamification (badges, points, leaderboard)
- SOS / Cercle de confiance
- Ligne d'écoute
- Annuaire de professionnels
- Bibliothèque d'articles
- Forum communautaire
- IA / Matching intelligent
- Analytics avancés
- API REST complète
- Partenariats
- Suggestions personnalisées avancées
- Rappels automatiques événements
- Système d'avis post-événement
- Offres d'aide proactives
- Indicateur "en ligne" / "hors ligne"
- Émojis et réactions dans le chat
- Photos de l'événement après coup
- Vérification d'identité optionnelle
- Badge "profil vérifié"
- Statistiques détaillées (points, badges, etc.)
- Favoris (parents, événements, articles, professionnels)

## 📋 FONCTIONNALITÉS COMPLÈTES

### 👤 PROFILS & INSCRIPTION

#### Création de compte

- Inscription email/mot de passe
- Profil détaillé :
  - Photo et prénom
  - Adresse et géolocalisation
  - Nombre et âge des enfants
  - Date d'accouchement ou terme de grossesse
  - Centres d'intérêt (allaitement, portage, activités...)
  - Type de soutien recherché (écoute, conseils pratiques, sorties...)
  - Disponibilités (jours/horaires)
  - Rayon de recherche personnalisable (500m, 1km, 5km, 10km)
- Paramètres de confidentialité
- Gestion de la visibilité du profil

### 🗺️ DÉCOUVERTE & GÉOLOCALISATION

#### Carte interactive

- Visualisation des parents sur une carte (✅ MVP)
- Filtres multiples (✅ MVP - tous inclus) :
  - Distance géographique
  - Âge des enfants
  - Centres d'intérêt communs
  - Disponibilités
  - Type de soutien recherché
- Bascule vue carte / vue liste (✅ MVP)
- Recherche par adresse ou quartier (✅ MVP - Paris)

#### Suggestions personnalisées

- Parents suggérés selon proximité et affinités
- Notifications de nouveaux parents dans le quartier
- Groupes locaux actifs recommandés

### 💬 MESSAGERIE & COMMUNICATION

#### Chat privé

- Messagerie 1-to-1 en temps réel
- Envoi de photos (✅ MVP)
- Émojis et réactions (❌ RNCP 7)
- Indicateur "en ligne" / "hors ligne" (❌ RNCP 7)
- Historique des conversations (✅ MVP)
- Notifications push instantanées (✅ MVP - push uniquement)

#### Groupes de discussion

- Création de groupes par :
  - Quartier/ville
  - Âge des enfants
  - Thématiques (allaitement, sommeil, diversification alimentaire, retour au travail...)
- Chat de groupe en temps réel
- Modération par créateur du groupe
- Paramètres du groupe (public/privé, règles)

### 📅 ÉVÉNEMENTS LOCAUX

#### Création d'événements

- Formulaire de création :
  - Titre et description
  - Date et heure
  - Lieu (adresse + carte)
  - Type d'événement (sortie parc, café-poussette, atelier, anniversaire...)
  - Nombre de places limité ou illimité
  - Public cible (âge enfants, quartier)
- Gestion des inscriptions (✅ MVP)
- Commentaires et discussions sur l'événement ([À confirmer pour MVP])
- Photos de l'événement après coup (❌ RNCP 7)

#### Découverte d'événements

- Fil d'actualité des événements à proximité
- Filtres par :
  - Date (aujourd'hui, cette semaine, ce mois)
  - Distance
  - Type d'événement
  - Âge des enfants
- Liste des participants confirmés
- Rappels automatiques avant l'événement
- Système d'avis post-événement

### 🤝 SYSTÈME D'ENTRAIDE

#### Demandes d'aide

- Poster une demande avec :
  - Type d'aide (garde ponctuelle, prêt matériel, covoiturage, courses, écoute...)
  - Description détaillée
  - Date et durée
  - Niveau d'urgence (normal / urgent)
  - Localisation
- Réception de propositions d'aide (✅ MVP - via chat)
- Validation de l'aide reçue ([À confirmer pour MVP])
- Système de remerciements ([À confirmer pour MVP])

#### Offres d'aide

- Proposer son aide proactivement
- Indiquer ses compétences particulières (couture, bricolage, conseils allaitement...)
- Disponibilités régulières pour aider
- Historique des aides apportées

#### Prêt de matériel

- Catalogue du matériel prêtable :
  - Puériculture (poussette, siège auto, tire-lait...)
  - Vêtements et jouets
  - Livres de parentalité
- Système de gestion des prêts (emprunté par qui, retour prévu)
- Photos et description du matériel

#### Gamification de l'entraide

- Points gagnés en aidant
- Badges de reconnaissance :
  - "Super voisine"
  - "Oreille attentive"
  - "As du prêt"
  - "Organisatrice en chef"
  - "Marraine du quartier"
- Profil affichant la contribution à la communauté
- Leaderboard du quartier (optionnel)

### 🆘 SOS COUP DE BLUES

#### Bouton d'urgence

- Bouton "J'ai besoin d'aide maintenant" bien visible
- Activation rapide en cas de détresse
- Notification envoyée aux parents du cercle de confiance
- Notification aux marraines bénévoles disponibles

#### Cercle de confiance

- Sélection de parents "personnes de confiance"
- Possibilité d'ajouter proches (famille, amis) même non inscrits
- Activation prioritaire en cas de SOS
- Historique des SOS (privé)

#### Ligne d'écoute

- Chat avec personne disponible formée
- Écoute active et bienveillante
- Orientation vers professionnels si nécessaire
- Anonymat possible

### 📚 RESSOURCES & INFORMATIONS

#### Annuaire de professionnels

- Liste géolocalisée de :
  - Psychologues périnataux
  - Sages-femmes libérales
  - Consultantes en lactation
  - Doulas
  - Ostéopathes pédiatriques
  - Associations de soutien
- Fiches détaillées (tarifs, spécialités, disponibilités)
- Système d'avis
- Prise de contact direct

#### Bibliothèque d'articles

- Contenus validés sur :
  - Dépression post-partum et baby blues
  - Allaitement et biberon
  - Sommeil du bébé
  - Pleurs et coliques
  - Charge mentale et couple
  - Retour au travail
  - Développement de l'enfant
- Témoignages authentiques de parents
- Conseils pratiques illustrés
- Favoris et historique de lecture

#### Forum communautaire

- Discussions par thématiques
- Questions/réponses entre parents
- Upvote des meilleures réponses
- Modération bienveillante
- Recherche dans les discussions
- Tags et catégories

#### Numéros d'urgence

- Liste accessible en 1 clic
- Numéros de crise (SOS Dépression, 3114...)
- Urgences médicales
- Associations d'aide

### 🔔 NOTIFICATIONS

#### Notifications en temps réel

- Nouveau message reçu
- Réponse à ma demande d'aide
- Nouvel événement dans mon quartier
- Nouveau parent proche qui correspond à mon profil
- Rappel d'événement (24h avant)
- SOS d'un parent du cercle de confiance
- Nouveau commentaire sur mon événement
- Badges débloqués

#### Paramétrage des notifications

- Choix des types de notifications
- Fréquence (instantané, digest quotidien)
- Canaux (push, email)
- **Note MVP** : Notifications push uniquement pour le MVP (pas d'email)

### 🛡️ SÉCURITÉ & MODÉRATION

#### Vérification

- Validation de l'adresse email obligatoire
- Vérification d'identité optionnelle (pièce d'identité)
- Badge "profil vérifié" visible
- Historique des actions sur la plateforme

#### Signalements

- Signaler un comportement inapproprié
- Signaler un contenu (message, événement, commentaire)
- Bloquer un utilisateur
- Raisons du signalement détaillées

#### Modération

- Équipe de modération humaine
- Charte d'utilisation claire
- Sanctions graduées (avertissement, suspension, bannissement)
- Droit de réponse pour la personne signalée

### 📊 TABLEAU DE BORD PERSONNEL

#### Mon activité

- Mes événements à venir
- Mes demandes d'aide en cours
- Mes conversations actives
- Mon matériel prêté actuellement
- Mes groupes

#### Mes statistiques

- Points d'entraide accumulés
- Badges débloqués
- Nombre d'aides données/reçues
- Événements organisés
- Taux de réponse

#### Mes favoris

- Parents favoris
- Événements sauvegardés
- Articles enregistrés
- Professionnels bookmarkés

## 🚀 FONCTIONNALITÉS AVANCÉES (RNCP 7)

### Intelligence Artificielle

- **Matching intelligent** : Algorithme suggérant parents ultra-compatibles (localisation + affinités + situation)
- **Recommandations d'événements** : Personnalisation selon profil et historique
- **Détection de signaux de détresse** : Analyse du langage dans les messages pour repérer la souffrance
- **Modération automatique** : Pré-filtrage des contenus inappropriés
- **Chatbot d'aide** : Assistant virtuel pour orientation rapide

### Analytics & Impact

- Dashboard d'impact social
- Mesure de la réduction de l'isolement
- Suivi de l'engagement communautaire
- KPIs santé mentale (sentiment général, utilisation SOS)
- Études d'impact avec chercheurs

### API & Intégrations

- API REST pour future application mobile native
- PWA (Progressive Web App) pour usage mobile optimisé
- Intégration avec calendriers (Google, Apple)
- Export de données personnelles (RGPD)
- Webhooks pour partenaires institutionnels

### Partenariats

- Connexion avec systèmes de santé locaux
- Intégration avec mutuelles (remboursement consultations)
- Partenariats maternités (invitation automatique post-accouchement)
- Collectivités locales (subventions événements)

## 🎯 PARCOURS UTILISATEUR TYPE

- **Jour 1 - Inscription** : Emma vient d'accoucher, elle s'inscrit sur MamaVillage, crée son profil, indique son quartier
- **Jour 3 - Découverte** : Elle découvre 8 mamans à moins de 1km avec des bébés du même âge
- **Jour 5 - Premier contact** : Elle envoie un message à Léa dont le profil lui plaît, elles discutent
- **Jour 10 - Première rencontre** : Ellles se donnent RDV au parc pour un café-poussette
- **Jour 15 - Intégration** : Emma rejoint le groupe "Mamans du 11ème" avec 45 membres
- **Jour 20 - Entraide** : Elle emprunte un tire-lait à Sarah qui habite son immeuble
- **Jour 30 - Coup dur** : Elle se sent pas bien, utilise le SOS, Claire l'appelle sous 1h pour discuter
- **Jour 60 - Communauté** : Emma a maintenant 5 amies mamans, organise son premier événement (atelier portage)
- **Jour 90 - Aide à son tour** : Elle a 250 points d'entraide, aide une nouvelle maman qui vient d'arriver dans le quartier

## 💡 DIFFÉRENCIATION

- **vs May** : May = contenu + messagerie sage-femme | MamaVillage = communauté locale + entraide concrète
- **vs Facebook Groupes** : Géolocalisation précise + système d'entraide structuré + sécurité renforcée + focus santé mentale
- **vs Meetup** : 100% dédié parentalité + profils détaillés + matching intelligent + dimension entraide quotidienne

---

**En résumé** : MamaVillage transforme ton quartier en village bienveillant, où chaque parent peut trouver soutien, entraide et amitié à deux pas de chez soi. 💜🏘️

