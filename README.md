# 🤱 MamaVillage

**Plateforme d'entraide locale pour jeunes parents**

MamaVillage est une application web qui connecte les parents près de chez eux pour créer un réseau d'entraide bienveillant. Projet développé dans le cadre d'un RNCP 6 avec une itération vers un RNCP 7.

---

## 🎯 Concept

**65% des jeunes mamans se sentent seules.**  
L'isolement du post-partum est une réalité pour des milliers de parents. Il ne devrait pas être synonyme d'isolement. Ensemble, vivons-le autrement.

MamaVillage, c'est :
- 👥 **Connexion locale** : rencontre des parents de ton quartier
- 💬 **Messagerie** : échange et partage d'expériences
- 🤝 **Entraide** : demandes d'aide et soutien mutuel
- 🎉 **Événements** : rencontres IRL et activités de groupe
- 👨‍⚕️ **Professionnels** : annuaire de professionnels bienveillants
- 📚 **Ressources** : articles et conseils

---

## 📁 Structure du projet

```
mama_village/
├── docs/                          # 📚 Documentation
│   ├── MamaVillage_Pitch.md      # Pitch et fonctionnalités
│   ├── Fonctionnalites.md        # MVP vs RNCP 7
│   ├── Personas.md               # Emma, Léa, Sarah
│   ├── User_Journey.md           # Parcours utilisateurs
│   ├── Wireframe_Homepage.md     # Wireframe
│   ├── Design_Tokens.md          # Design system (MD)
│   ├── design_tokens.json        # Design system (JSON)
│   └── Inventaire_Composants.md  # Liste des composants
├── app/                          # 🚀 Application Rails
├── config/                       # Configuration
├── db/                           # Base de données
└── README.md                     # Ce fichier
```

---

## 🛠️ Stack Technique

### Backend
- **Ruby** 3.3.6
- **Rails** 7.2.2
- **PostgreSQL** (base de données + PostGIS pour géolocalisation)

### Frontend
- **HAML** (templating)
- **Tailwind CSS v4** (styling)
- **Hotwire/Turbo/Stimulus** (interactivité)

### Design
- **Figma** (maquettes et design system)
- Typographies : **Playfair Display** + **PolySans Qonto**
- Palette : Sky Reflection, Lime Cream, Deep Mocha, etc.

---

## 🚀 Installation

### Prérequis
- Ruby 3.3.6
- PostgreSQL (à installer)
- Node.js 24+

### Installation

```bash
# 1. Cloner le repo
git clone https://github.com/paulinetaillemite2/mama-village.git
cd mama_village

# 2. Installer les dépendances
bundle install

# 3. Installer PostgreSQL (si pas encore fait)
brew install postgresql@16
brew services start postgresql@16

# 4. Créer les bases de données
rails db:create

# 5. Lancer le serveur
bin/dev
```

L'application sera accessible sur `http://localhost:3000`

---

## 📚 Documentation

Toute la documentation du projet est dans le dossier `/docs` :
- **Conception** : Pitch, Personas, User Journey, Wireframes
- **Design System** : Design Tokens, Inventaire des Composants

---

## 🎯 Roadmap

### ✅ Phase 1 : Conception (complétée)
- [x] Pitch et définition du projet
- [x] Personas et user journey  
- [x] Wireframes
- [x] Design system et tokens
- [x] Setup Rails + Tailwind + HAML

### 🔄 Phase 2 : MVP (RNCP 6) - en cours
- [ ] Configurer Tailwind avec Design Tokens
- [ ] Créer la page Design System
- [ ] Authentification (Devise)
- [ ] Profils utilisateurs
- [ ] Géolocalisation et recherche
- [ ] Messagerie (ActionCable)
- [ ] Événements locaux
- [ ] Annuaire professionnels

### 🎯 Phase 3 : Évolution (RNCP 7)
- [ ] Demandes d'aide avancées
- [ ] Système de notation
- [ ] Recommandations IA
- [ ] Modération automatique
- [ ] Analytics avancées

---

## 👩‍💻 Auteure

**Pauline Taillemite**  
📧 p.taillemite@gmail.com  
🔗 [GitHub](https://github.com/paulinetaillemite2)

---

## 📝 License

Projet éducatif - RNCP 6/7

