# Fonctionnalités MamaVillage - Roadmap par RNCP 🚀

## 📌 RNCP 6 - MVP (Bac+3/4)

### 1. Authentification & Gestion des Profils

#### Inscription & Connexion
- [ ] Inscription par email/mot de passe
- [ ] Connexion/Déconnexion
- [ ] Mot de passe oublié (réinitialisation)
- [ ] Validation email obligatoire

#### Profil Utilisateur
- [ ] Création et édition du profil
- [ ] Upload de photo de profil
- [ ] Prénom
- [ ] Adresse complète (Paris uniquement pour MVP)
- [ ] Géolocalisation automatique (coordonnées GPS)
- [ ] Date d'accouchement ou terme de grossesse
- [ ] Nombre et âge des enfants
- [ ] Centres d'intérêt (allaitement, portage, activités, etc.)
- [ ] Type de soutien recherché (écoute, conseils pratiques, sorties)
- [ ] Disponibilités (jours de la semaine, horaires)
- [ ] Rayon de recherche personnalisable (1km, 3km, 5km)
- [ ] Paramètres de confidentialité basiques
- [ ] Gestion de la visibilité du profil

---

### 2. Géolocalisation & Découverte

#### Carte Interactive
- [ ] Affichage de la carte (Leaflet ou Google Maps)
- [ ] Visualisation des parents dans le rayon sélectionné
- [ ] Marqueurs sur la carte avec infos basiques
- [ ] Bascule vue carte / vue liste
- [ ] Recherche par arrondissement/quartier Paris
- [ ] Centrage automatique sur la position de l'utilisateur

#### Filtres de Recherche
- [ ] Filtre par distance géographique
- [ ] Filtre par âge des enfants
- [ ] Filtre par centres d'intérêt communs
- [ ] Filtre par disponibilités
- [ ] Filtre par type de soutien recherché
- [ ] Combinaison de plusieurs filtres simultanément

#### Affichage des Profils
- [ ] Liste des parents correspondant aux critères
- [ ] Carte des parents correspondant aux critères
- [ ] Fiche profil détaillée (au clic)
- [ ] Distance affichée pour chaque parent

---

### 3. Messagerie 1-to-1

#### Chat Privé
- [ ] Messagerie en temps réel (ActionCable)
- [ ] Envoi de messages texte
- [ ] Upload de photos dans le chat
- [ ] Historique des conversations
- [ ] Liste des conversations actives
- [ ] Indicateur de messages non lus
- [ ] Horodatage des messages

#### Notifications
- [ ] Notifications push pour nouveaux messages
- [ ] Paramétrage des notifications (on/off)

---

### 4. Événements Locaux

#### Création d'Événement
- [ ] Formulaire de création d'événement
- [ ] Titre de l'événement
- [ ] Description
- [ ] Date et heure
- [ ] Lieu (adresse Paris)
- [ ] Géolocalisation du lieu
- [ ] Type d'événement (sortie parc, café-poussette, atelier, etc.)
- [ ] Public cible (âge enfants, quartier)
- [ ] Nombre de places (limité ou illimité)

#### Découverte d'Événements
- [ ] Liste des événements à proximité
- [ ] Filtres par :
  - Date (aujourd'hui, cette semaine, ce mois)
  - Distance
  - Type d'événement
  - Âge des enfants
- [ ] Fiche détaillée de l'événement
- [ ] Liste des participants confirmés
- [ ] Inscription à un événement
- [ ] Désinscription d'un événement

#### Gestion des Événements
- [ ] Mes événements créés
- [ ] Mes événements auxquels je suis inscrite
- [ ] Modification de mes événements
- [ ] Annulation de mes événements
- [ ] [À confirmer] Commentaires/discussions sur l'événement

---

### 5. Système d'Entraide - Demandes d'Aide

#### Création de Demande
- [ ] Formulaire de demande d'aide
- [ ] Type d'aide (garde ponctuelle, prêt matériel, covoiturage, courses, écoute)
- [ ] Description détaillée
- [ ] Date et durée
- [ ] Niveau d'urgence (normal / urgent)
- [ ] Localisation

#### Consultation des Demandes
- [ ] Liste des demandes d'aide du quartier
- [ ] Filtres par type d'aide, distance, urgence
- [ ] Fiche détaillée de la demande
- [ ] Contacter le demandeur via chat (depuis la demande)
- [ ] [À confirmer] Système de validation/remerciement

#### Gestion des Demandes
- [ ] Mes demandes postées
- [ ] Mes demandes reçues (propositions)
- [ ] Modification de mes demandes
- [ ] Fermeture de mes demandes

---

### 6. Sécurité & Modération

#### Vérification
- [ ] Validation email obligatoire
- [ ] Système de vérification email

#### Signalements
- [ ] Signaler un utilisateur
- [ ] Signaler un contenu (message, événement, commentaire)
- [ ] Raisons du signalement (liste déroulante)
- [ ] Bloquer un utilisateur
- [ ] Liste des utilisateurs bloqués

#### Modération Basique
- [ ] Interface de modération (basique)
- [ ] Traitement des signalements
- [ ] Actions possibles (avertissement, suspension)

---

### 7. Dashboard Utilisateur

#### Mon Activité
- [ ] Mes conversations actives
- [ ] Mes événements (créés + inscrits)
- [ ] Mes demandes d'aide (postées + reçues)
- [ ] Vue d'ensemble de mon activité

#### Paramètres
- [ ] Modification du profil
- [ ] Paramètres de confidentialité
- [ ] Paramètres de notifications
- [ ] Gestion du compte

---

### 8. Annuaire de Professionnels (Version Basique)

#### Consultation
- [ ] Liste des professionnels géolocalisés
- [ ] Filtres par type de professionnel (sages-femmes, psychologues, consultantes en lactation, etc.)
- [ ] Filtre par distance
- [ ] Fiche détaillée du professionnel :
  - Nom, spécialité
  - Adresse
  - Coordonnées (téléphone, email)
  - Tarifs (si disponibles)
  - Badge "Charte de bienveillance signée"
- [ ] Carte des professionnels

#### Contact
- [ ] Prise de contact direct (lien vers email/téléphone)

---

## 🚀 RNCP 7 - Évolution (Bac+5)

### 1. Groupes de Discussion

#### Création & Gestion
- [ ] Création de groupes par :
  - Quartier/ville
  - Âge des enfants
  - Thématiques (allaitement, sommeil, diversification, retour au travail)
- [ ] Chat de groupe en temps réel
- [ ] Modération par créateur du groupe
- [ ] Paramètres du groupe (public/privé, règles)
- [ ] Invitation de membres
- [ ] Gestion des membres

#### Découverte
- [ ] Liste des groupes disponibles
- [ ] Recherche de groupes
- [ ] Suggestions de groupes selon profil
- [ ] Rejoindre un groupe
- [ ] Quitter un groupe

---

### 2. Système de Prêt de Matériel

#### Catalogue
- [ ] Ajout de matériel à prêter
- [ ] Catégories :
  - Puériculture (poussette, siège auto, tire-lait, etc.)
  - Vêtements et jouets
  - Livres de parentalité
- [ ] Photos et description du matériel
- [ ] État du matériel
- [ ] Disponibilité

#### Gestion des Prêts
- [ ] Système de demande de prêt
- [ ] Validation de la demande
- [ ] Suivi du prêt (emprunté par qui, retour prévu)
- [ ] Rappel de retour
- [ ] Historique des prêts
- [ ] Retour du matériel

---

### 3. Gamification & Engagement

#### Système de Points
- [ ] Points gagnés en aidant
- [ ] Points pour participation aux événements
- [ ] Points pour prêt de matériel
- [ ] Affichage des points sur le profil

#### Badges
- [ ] "Super voisine" (aide régulière)
- [ ] "Oreille attentive" (soutien émotionnel)
- [ ] "As du prêt" (prêt de matériel)
- [ ] "Organisatrice en chef" (création d'événements)
- [ ] "Marraine du quartier" (aide aux nouvelles mamans)
- [ ] Affichage des badges sur le profil

#### Statistiques
- [ ] Points d'entraide accumulés
- [ ] Nombre d'aides données/reçues
- [ ] Événements organisés
- [ ] Taux de réponse
- [ ] Leaderboard du quartier (optionnel)

---

### 4. SOS & Cercle de Confiance

#### Bouton d'Urgence
- [ ] Bouton "J'ai besoin d'aide maintenant" bien visible
- [ ] Activation rapide en cas de détresse
- [ ] Notification envoyée aux parents du cercle de confiance
- [ ] Notification aux marraines bénévoles disponibles

#### Cercle de Confiance
- [ ] Sélection de parents "personnes de confiance"
- [ ] Possibilité d'ajouter proches (famille, amis) même non inscrits
- [ ] Activation prioritaire en cas de SOS
- [ ] Historique des SOS (privé)

#### Ligne d'Écoute
- [ ] Chat avec personne disponible formée
- [ ] Écoute active et bienveillante
- [ ] Orientation vers professionnels si nécessaire
- [ ] Anonymat possible

---

### 5. Annuaire de Professionnels (Version Complète)

#### Fiches Détaillées
- [ ] Fiches complètes avec :
  - Tarifs détaillés
  - Spécialités
  - Disponibilités
  - Système d'avis
  - Photos
  - Site web
- [ ] Prise de rendez-vous en ligne (si applicable)

#### Système d'Avis
- [ ] Notation des professionnels
- [ ] Commentaires des utilisateurs
- [ ] Modération des avis

---

### 6. Bibliothèque d'Articles

#### Contenus
- [ ] Articles validés sur :
  - Dépression post-partum et baby blues
  - Allaitement et biberon
  - Sommeil du bébé
  - Pleurs et coliques
  - Charge mentale et couple
  - Retour au travail
  - Développement de l'enfant
- [ ] Témoignages authentiques de parents
- [ ] Conseils pratiques illustrés

#### Fonctionnalités
- [ ] Recherche d'articles
- [ ] Catégories et tags
- [ ] Favoris et historique de lecture
- [ ] Partage d'articles

---

### 7. Forum Communautaire

#### Discussions
- [ ] Création de discussions par thématiques
- [ ] Questions/réponses entre parents
- [ ] Upvote des meilleures réponses
- [ ] Recherche dans les discussions
- [ ] Tags et catégories

#### Modération
- [ ] Modération bienveillante
- [ ] Signalement de contenus
- [ ] Gestion des discussions

---

### 8. Intelligence Artificielle

#### Matching Intelligent
- [ ] Algorithme suggérant parents ultra-compatibles
- [ ] Critères : localisation + affinités + situation
- [ ] Suggestions personnalisées

#### Recommandations
- [ ] Recommandations d'événements personnalisées
- [ ] Recommandations selon profil et historique

#### Détection
- [ ] Détection de signaux de détresse (analyse du langage)
- [ ] Alertes automatiques

#### Modération Automatique
- [ ] Pré-filtrage des contenus inappropriés
- [ ] Détection de spam

#### Chatbot d'Aide
- [ ] Assistant virtuel pour orientation rapide
- [ ] Réponses aux questions fréquentes

---

### 9. Analytics & Impact

#### Dashboard d'Impact Social
- [ ] Mesure de la réduction de l'isolement
- [ ] Suivi de l'engagement communautaire
- [ ] KPIs santé mentale (sentiment général, utilisation SOS)
- [ ] Statistiques d'utilisation

#### Études d'Impact
- [ ] Outils pour études avec chercheurs
- [ ] Export de données anonymisées

---

### 10. API & Intégrations

#### API REST
- [ ] API complète pour future application mobile native
- [ ] Documentation API
- [ ] Authentification API

#### PWA
- [ ] Progressive Web App optimisée
- [ ] Installation sur mobile
- [ ] Mode hors-ligne basique

#### Intégrations
- [ ] Intégration avec calendriers (Google, Apple)
- [ ] Export de données personnelles (RGPD)
- [ ] Webhooks pour partenaires institutionnels

---

### 11. Fonctionnalités Avancées Messagerie

#### Chat Amélioré
- [ ] Émojis et réactions dans le chat
- [ ] Indicateur "en ligne" / "hors ligne"
- [ ] Statut de lecture (lu/non lu)
- [ ] Réponses aux messages
- [ ] Citations de messages

---

### 12. Fonctionnalités Avancées Événements

#### Améliorations
- [ ] Commentaires et discussions sur l'événement
- [ ] Photos de l'événement après coup
- [ ] Rappels automatiques avant l'événement (24h avant)
- [ ] Système d'avis post-événement
- [ ] Partage d'événements

---

### 13. Fonctionnalités Avancées Profils

#### Vérification
- [ ] Vérification d'identité optionnelle (pièce d'identité)
- [ ] Badge "profil vérifié" visible
- [ ] Historique des actions sur la plateforme

#### Favoris
- [ ] Parents favoris
- [ ] Événements sauvegardés
- [ ] Articles enregistrés
- [ ] Professionnels bookmarkés

---

### 14. Offres d'Aide Proactives

#### Système d'Offres
- [ ] Proposer son aide proactivement
- [ ] Indiquer ses compétences particulières (couture, bricolage, conseils allaitement)
- [ ] Disponibilités régulières pour aider
- [ ] Historique des aides apportées
- [ ] Matching automatique avec demandes

---

### 15. Suggestions Personnalisées Avancées

#### Algorithme
- [ ] Parents suggérés selon proximité et affinités
- [ ] Notifications de nouveaux parents dans le quartier
- [ ] Groupes locaux actifs recommandés
- [ ] Événements suggérés personnalisés

---

### 16. Partenariats

#### Intégrations Partenaires
- [ ] Connexion avec systèmes de santé locaux
- [ ] Intégration avec mutuelles (remboursement consultations)
- [ ] Partenariats maternités (invitation automatique post-accouchement)
- [ ] Collectivités locales (subventions événements)

---

### 17. Numéros d'Urgence

#### Ressources
- [ ] Liste accessible en 1 clic
- [ ] Numéros de crise (SOS Dépression, 3114, etc.)
- [ ] Urgences médicales
- [ ] Associations d'aide
- [ ] Géolocalisation des ressources d'urgence

---

## 📊 Résumé

### RNCP 6 - MVP
**~50 fonctionnalités principales** organisées en 8 modules :
1. Authentification & Profils
2. Géolocalisation & Découverte
3. Messagerie 1-to-1
4. Événements Locaux
5. Demandes d'Aide
6. Sécurité & Modération
7. Dashboard
8. Annuaire Professionnels (basique)

### RNCP 7 - Évolution
**~80+ fonctionnalités avancées** organisées en 17 modules :
1. Groupes de Discussion
2. Prêt de Matériel
3. Gamification
4. SOS & Cercle de Confiance
5. Annuaire Professionnels (complet)
6. Bibliothèque d'Articles
7. Forum Communautaire
8. Intelligence Artificielle
9. Analytics & Impact
10. API & Intégrations
11. Messagerie Avancée
12. Événements Avancés
13. Profils Avancés
14. Offres d'Aide Proactives
15. Suggestions Personnalisées
16. Partenariats
17. Numéros d'Urgence

---

*Cette roadmap servira de guide pour le développement progressif de MamaVillage, en commençant par les fonctionnalités essentielles du MVP (RNCP 6) puis en évoluant vers des fonctionnalités plus avancées (RNCP 7).*

