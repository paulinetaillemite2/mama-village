# Design Tokens - MamaVillage 🎨

## 🎨 COULEURS

### Palette principale

| Nom | Variable | Hex | Usage | Accessibilité |
|-----|----------|-----|-------|---------------|
| **Blush** | `color-blush` | `#F2AAE2` | Fond léger, accents doux | Texte uniquement sur fond très clair |
| **Lime Cream** | `color-lime-cream` | `#DFFFA5` | Fond léger, accents | Texte uniquement sur fond très clair |
| **Sky Reflection** | `color-sky-reflection` | `#6FB0D0` | Primary, boutons, liens | ✅ Texte blanc (contraste OK) |
| **Deep Mocha** | `color-deep-mocha` | `#403633` | Texte principal, boutons secondaires | ✅ Texte sur fond clair (contraste OK) |
| **Tea Green** | `color-tea-green` | `#C9FED3` | Fond léger, accents | Texte uniquement sur fond très clair |
| **Tan** | `color-tan` | `#D0B993` | Fond léger, accents | Texte uniquement sur fond très clair |
| **Crimson Carrot** | `color-crimson-carrot` | `#FA4B02` | CTA, alertes, accents forts | ✅ Texte blanc (contraste OK) |

### Couleurs sémantiques

| Nom | Variable | Valeur | Usage |
|-----|----------|--------|-------|
| **Primary** | `color-primary` | `#6FB0D0` (Sky Reflection) | Boutons primaires, liens |
| **Secondary** | `color-secondary` | `#FA4B02` (Crimson Carrot) | CTA, alertes |
| **Text Primary** | `color-text-primary` | `#403633` (Deep Mocha) | Texte principal |
| **Text Secondary** | `color-text-secondary` | `#403633` avec 70% opacité | Texte secondaire |
| **Text Tertiary** | `color-text-tertiary` | `#403633` avec 60% opacité | Légendes, mentions |
| **Background** | `color-background` | `#F3F0E8` (beige très clair) | Fond principal |
| **Background Light** | `color-background-light` | `#FFFFFF` | Fond blanc |
| **Success** | `color-success` | `#00B67A` (Trustpilot green) | États positifs |
| **Error** | `color-error` | `#DC2626` (rouge) | Erreurs, alertes |
| **Warning** | `color-warning` | `#F59E0B` (orange) | Avertissements |

### Variantes d'opacité

| Variable | Valeur | Usage |
|----------|--------|-------|
| `color-deep-mocha-100` | `#403633` (100%) | Texte principal |
| `color-deep-mocha-70` | `rgba(64, 54, 51, 0.7)` | Texte secondaire |
| `color-deep-mocha-60` | `rgba(64, 54, 51, 0.6)` | Légendes |
| `color-sky-reflection-50` | `rgba(111, 176, 208, 0.5)` | Fond léger |
| `color-sky-reflection-41` | `rgba(111, 176, 208, 0.41)` | Fond léger (trust cards) |
| `color-sky-reflection-20` | `rgba(111, 176, 208, 0.2)` | Fond très léger sections |
| `color-sky-reflection-10` | `rgba(111, 176, 208, 0.1)` | Fond extra léger sections |

---

## 📝 TYPOGRAPHIES

### Familles de polices

| Nom | Variable | Famille | Usage |
|-----|----------|---------|-------|
| **Heading Font** | `font-heading` | `Playfair Display` | Titres (H1-H4) |
| **Body Font** | `font-body` | `PolySans Qonto` | Corps de texte, boutons |

### Échelle typographique complète (Type Scale)

**Note :** Chaque variante existe en version **Playfair Display** et **PolySans Qonto**, avec tailles **Desktop** et **Mobile**.

---

#### H1 - Titre principal

| Nom | Variable | Typographie | Taille Desktop | Taille Mobile | Graisse | Hauteur de ligne | Usage |
|-----|----------|-------------|----------------|---------------|---------|------------------|-------|
| **H1 Playfair Desktop** | `text-h1-playfair-desktop` | Playfair Display | `48px` | - | Medium | `1.2` | Hero, titres principaux |
| **H1 Playfair Mobile** | `text-h1-playfair-mobile` | Playfair Display | - | `32px` | Medium | `1.2` | Hero, titres principaux |
| **H1 PolySans Desktop** | `text-h1-polysans-desktop` | PolySans Qonto | `48px` | - | Medium/Bold | `1.2` | Hero alternatif, titres modernes |
| **H1 PolySans Mobile** | `text-h1-polysans-mobile` | PolySans Qonto | - | `32px` | Medium/Bold | `1.2` | Hero alternatif, titres modernes |

---

#### H2 - Titre de section

| Nom | Variable | Typographie | Taille Desktop | Taille Mobile | Graisse | Hauteur de ligne | Usage |
|-----|----------|-------------|----------------|---------------|---------|------------------|-------|
| **H2 Playfair Desktop** | `text-h2-playfair-desktop` | Playfair Display | `32px` | - | Medium | `1.3` | Sections principales |
| **H2 Playfair Mobile** | `text-h2-playfair-mobile` | Playfair Display | - | `24px` | Medium | `1.3` | Sections principales |
| **H2 PolySans Desktop** | `text-h2-polysans-desktop` | PolySans Qonto | `32px` | - | Medium/Bold | `1.3` | Sections principales (style moderne) |
| **H2 PolySans Mobile** | `text-h2-polysans-mobile` | PolySans Qonto | - | `24px` | Medium/Bold | `1.3` | Sections principales (style moderne) |

---

#### H3 - Sous-titre de section

| Nom | Variable | Typographie | Taille Desktop | Taille Mobile | Graisse | Hauteur de ligne | Usage |
|-----|----------|-------------|----------------|---------------|---------|------------------|-------|
| **H3 Playfair Desktop** | `text-h3-playfair-desktop` | Playfair Display | `24px` | - | Medium | `1.4` | Sous-titres, titres de cartes |
| **H3 Playfair Mobile** | `text-h3-playfair-mobile` | Playfair Display | - | `20px` | Medium | `1.4` | Sous-titres, titres de cartes |
| **H3 Playfair SemiBold Desktop** | `text-h3-playfair-semibold-desktop` | Playfair Display | `24px` | - | SemiBold | `1.4` | Sous-titres importants, emphase |
| **H3 Playfair SemiBold Mobile** | `text-h3-playfair-semibold-mobile` | Playfair Display | - | `20px` | SemiBold | `1.4` | Sous-titres importants, emphase |
| **H3 PolySans Desktop** | `text-h3-polysans-desktop` | PolySans Qonto | `24px` | - | Medium/Bold | `1.4` | Sous-titres, titres de cartes (style moderne) |
| **H3 PolySans Mobile** | `text-h3-polysans-mobile` | PolySans Qonto | - | `20px` | Medium/Bold | `1.4` | Sous-titres, titres de cartes (style moderne) |
| **H3 PolySans Bulky Desktop** | `text-h3-polysans-bulky-desktop` | PolySans Qonto | `24px` | - | Bulky | `1.4` | Titres cartes fonctionnalités |
| **H3 PolySans Bulky Mobile** | `text-h3-polysans-bulky-mobile` | PolySans Qonto | - | `20px` | Bulky | `1.4` | Titres cartes fonctionnalités |

---

#### H4 - Titre de carte

| Nom | Variable | Typographie | Taille Desktop | Taille Mobile | Graisse | Hauteur de ligne | Usage |
|-----|----------|-------------|----------------|---------------|---------|------------------|-------|
| **H4 Playfair Desktop** | `text-h4-playfair-desktop` | Playfair Display | `18px` | - | Medium | `1.4` | Titres dans les cartes fonctionnalités |
| **H4 Playfair Mobile** | `text-h4-playfair-mobile` | Playfair Display | - | `16px` | Medium | `1.4` | Titres dans les cartes fonctionnalités |
| **H4 PolySans Desktop** | `text-h4-polysans-desktop` | PolySans Qonto | `18px` | - | Medium/Bold | `1.4` | Titres dans les cartes fonctionnalités |
| **H4 PolySans Mobile** | `text-h4-polysans-mobile` | PolySans Qonto | - | `16px` | Medium/Bold | `1.4` | Titres dans les cartes fonctionnalités |

---

#### Body XL - Texte extra large

| Nom | Variable | Typographie | Taille Desktop | Taille Mobile | Graisse | Hauteur de ligne | Usage |
|-----|----------|-------------|----------------|---------------|---------|------------------|-------|
| **Body XL Playfair Desktop** | `text-body-xl-playfair-desktop` | Playfair Display | `20px` | - | Regular | `1.5` | Trust cards, textes importants |
| **Body XL Playfair Mobile** | `text-body-xl-playfair-mobile` | Playfair Display | - | `18px` | Regular | `1.5` | Trust cards, textes importants |
| **Body XL PolySans Desktop** | `text-body-xl-polysans-desktop` | PolySans Qonto | `20px` | - | Regular | `1.5` | Trust cards, textes importants |
| **Body XL PolySans Mobile** | `text-body-xl-polysans-mobile` | PolySans Qonto | - | `18px` | Regular | `1.5` | Trust cards, textes importants |

---

#### Body Large - Texte large

| Nom | Variable | Typographie | Taille Desktop | Taille Mobile | Graisse | Hauteur de ligne | Usage |
|-----|----------|-------------|----------------|---------------|---------|------------------|-------|
| **Body Large Playfair Desktop** | `text-body-large-playfair-desktop` | Playfair Display | `18px` | - | Regular | `1.5` | Cards fonctionnalités, contenu secondaire |
| **Body Large Playfair Mobile** | `text-body-large-playfair-mobile` | Playfair Display | - | `16px` | Regular | `1.5` | Cards fonctionnalités, contenu secondaire |
| **Body Large PolySans Desktop** | `text-body-large-polysans-desktop` | PolySans Qonto | `18px` | - | Regular | `1.5` | Cards fonctionnalités, contenu secondaire |
| **Body Large PolySans Mobile** | `text-body-large-polysans-mobile` | PolySans Qonto | - | `16px` | Regular | `1.5` | Cards fonctionnalités, contenu secondaire |

---

#### Body - Texte standard

| Nom | Variable | Typographie | Taille Desktop | Taille Mobile | Graisse | Hauteur de ligne | Usage |
|-----|----------|-------------|----------------|---------------|---------|------------------|-------|
| **Body Playfair Desktop** | `text-body-playfair-desktop` | Playfair Display | `16px` | - | Regular | `1.5` | Texte courant (style élégant) |
| **Body Playfair Mobile** | `text-body-playfair-mobile` | Playfair Display | - | `14px` | Regular | `1.5` | Texte courant (style élégant) |
| **Body PolySans Desktop** | `text-body-polysans-desktop` | PolySans Qonto | `16px` | - | Regular | `1.5` | Texte courant, contenu principal |
| **Body PolySans Mobile** | `text-body-polysans-mobile` | PolySans Qonto | - | `14px` | Regular | `1.5` | Texte courant, contenu principal |

---

#### Body Small - Texte secondaire

| Nom | Variable | Typographie | Taille Desktop | Taille Mobile | Graisse | Hauteur de ligne | Usage |
|-----|----------|-------------|----------------|---------------|---------|------------------|-------|
| **Body Small Playfair Desktop** | `text-body-small-playfair-desktop` | Playfair Display | `14px` | - | Regular | `1.4` | Métadonnées, labels (style élégant) |
| **Body Small Playfair Mobile** | `text-body-small-playfair-mobile` | Playfair Display | - | `12px` | Regular | `1.4` | Métadonnées, labels (style élégant) |
| **Body Small PolySans Desktop** | `text-body-small-polysans-desktop` | PolySans Qonto | `14px` | - | Regular | `1.4` | Métadonnées, labels, infos complémentaires |
| **Body Small PolySans Mobile** | `text-body-small-polysans-mobile` | PolySans Qonto | - | `12px` | Regular | `1.4` | Métadonnées, labels, infos complémentaires |

---

#### Body Bold - Texte en gras

| Nom | Variable | Typographie | Taille Desktop | Taille Mobile | Graisse | Hauteur de ligne | Usage |
|-----|----------|-------------|----------------|---------------|---------|------------------|-------|
| **Body Bold Playfair Desktop** | `text-body-bold-playfair-desktop` | Playfair Display | `16px` | - | Bold | `1.5` | Mise en évidence (style élégant) |
| **Body Bold Playfair Mobile** | `text-body-bold-playfair-mobile` | Playfair Display | - | `14px` | Bold | `1.5` | Mise en évidence (style élégant) |
| **Body Bold PolySans Desktop** | `text-body-bold-polysans-desktop` | PolySans Qonto | `16px` | - | Bold | `1.5` | Mise en évidence, mots importants |
| **Body Bold PolySans Mobile** | `text-body-bold-polysans-mobile` | PolySans Qonto | - | `14px` | Bold | `1.5` | Mise en évidence, mots importants |

---

#### Body Slim - Texte fin

| Nom | Variable | Typographie | Taille Desktop | Taille Mobile | Graisse | Hauteur de ligne | Usage |
|-----|----------|-------------|----------------|---------------|---------|------------------|-------|
| **Body Slim Playfair Desktop** | `text-body-slim-playfair-desktop` | Playfair Display | `16px` | - | Light/Thin | `1.5` | Texte léger, citations (style élégant) |
| **Body Slim Playfair Mobile** | `text-body-slim-playfair-mobile` | Playfair Display | - | `14px` | Light/Thin | `1.5` | Texte léger, citations (style élégant) |
| **Body Slim PolySans Desktop** | `text-body-slim-polysans-desktop` | PolySans Qonto | `16px` | - | Light/Thin | `1.5` | Texte léger, citations, accents |
| **Body Slim PolySans Mobile** | `text-body-slim-polysans-mobile` | PolySans Qonto | - | `14px` | Light/Thin | `1.5` | Texte léger, citations, accents |

---

#### Body Slim Italic - Texte fin italique (Playfair uniquement)

| Nom | Variable | Typographie | Taille Desktop | Taille Mobile | Graisse | Style | Hauteur de ligne | Usage |
|-----|----------|-------------|----------------|---------------|---------|-------|------------------|-------|
| **Body Slim Italic Playfair Desktop** | `text-body-slim-italic-playfair-desktop` | Playfair Display | `16px` | - | Light/Thin | Italic | `1.5` | Citations, accents élégants |
| **Body Slim Italic Playfair Mobile** | `text-body-slim-italic-playfair-mobile` | Playfair Display | - | `14px` | Light/Thin | Italic | `1.5` | Citations, accents élégants |

**Note :** Cette variante existe uniquement pour Playfair Display (élégance).

---

#### Caption - Légende

| Nom | Variable | Typographie | Taille Desktop | Taille Mobile | Graisse | Hauteur de ligne | Usage |
|-----|----------|-------------|----------------|---------------|---------|------------------|-------|
| **Caption Playfair Desktop** | `text-caption-playfair-desktop` | Playfair Display | `12px` | - | Regular | `1.3` | Légendes photos, mentions légales (style élégant) |
| **Caption Playfair Mobile** | `text-caption-playfair-mobile` | Playfair Display | - | `12px` | Regular | `1.3` | Légendes photos, mentions légales (style élégant) |
| **Caption PolySans Desktop** | `text-caption-polysans-desktop` | PolySans Qonto | `12px` | - | Regular | `1.3` | Légendes photos, mentions légales |
| **Caption PolySans Mobile** | `text-caption-polysans-mobile` | PolySans Qonto | - | `12px` | Regular | `1.3` | Légendes photos, mentions légales |

---

#### Buttons - Texte de boutons

| Nom | Variable | Typographie | Taille Desktop | Taille Mobile | Graisse | Hauteur de ligne | Usage |
|-----|----------|-------------|----------------|---------------|---------|------------------|-------|
| **Button Large Desktop** | `text-button-large-desktop` | PolySans Qonto | `24px` | - | Bulky | `1.2` | Boutons principaux, CTA |
| **Button Large Mobile** | `text-button-large-mobile` | PolySans Qonto | - | `20px` | Bulky | `1.2` | Boutons principaux, CTA |
| **Button Small Desktop** | `text-button-small-desktop` | PolySans Qonto | `15px` | - | Bulky | `1.2` | Boutons secondaires |
| **Button Small Mobile** | `text-button-small-mobile` | PolySans Qonto | - | `14px` | Bulky | `1.2` | Boutons secondaires |

---

### Résumé des variantes typographiques

**Total : 51 variantes de texte**
- **Headings** : H1, H2, H3 (+ variantes SemiBold/Bulky), H4 = **20 variantes**
- **Body** : XL, Large, Standard, Small, Bold, Slim = 6 × 2 typographies × 2 tailles = **24 variantes**
- **Body Slim Italic** : Playfair uniquement × 2 tailles = **2 variantes**
- **Caption** : 2 typographies × 2 tailles = **4 variantes**
- **Buttons** : Large, Small × 2 tailles = **4 variantes**

---

## 📏 ESPACEMENTS (Spacing)

### Système d'espacement (8px base)

| Nom | Variable | Valeur | Usage |
|-----|----------|--------|-------|
| **XS** | `spacing-xs` | `4px` | Espacements très petits |
| **SM** | `spacing-sm` | `8px` | Espacements petits |
| **MD** | `spacing-md` | `16px` | Espacements moyens |
| **LG** | `spacing-lg` | `24px` | Espacements grands |
| **XL** | `spacing-xl` | `32px` | Espacements très grands |
| **2XL** | `spacing-2xl` | `48px` | Espacements extra grands |
| **3XL** | `spacing-3xl` | `64px` | Espacements maximum |

### Espacements spécifiques

| Nom | Variable | Valeur | Usage |
|-----|----------|--------|-------|
| **Button Padding X** | `spacing-button-x` | `32px` (desktop), `24px` (mobile) | Padding horizontal boutons |
| **Button Padding Y** | `spacing-button-y` | `16px` (desktop), `14px` (mobile) | Padding vertical boutons |
| **Button Large Padding X** | `spacing-button-large-x` | `40px` (desktop), `32px` (mobile) | Padding horizontal boutons large |
| **Button Large Padding Y** | `spacing-button-large-y` | `20px` (desktop), `16px` (mobile) | Padding vertical boutons large |
| **Card Padding** | `spacing-card` | `24px` | Padding des cartes |
| **Section Padding** | `spacing-section` | `80px` (desktop), `48px` (mobile) | Padding des sections |
| **Input Padding X** | `spacing-input-x` | `16px` | Padding horizontal inputs |
| **Input Padding Y** | `spacing-input-y` | `12px` | Padding vertical inputs |

---

## 🔲 RAYONS (Border Radius)

| Nom | Variable | Valeur | Usage |
|-----|----------|--------|-------|
| **None** | `radius-none` | `0px` | Pas d'arrondi |
| **SM** | `radius-sm` | `4px` | Petits éléments (checkboxes) |
| **MD** | `radius-md` | `8px` | Boutons, inputs |
| **LG** | `radius-lg` | `12px` | Cartes |
| **XL** | `radius-xl` | `20px` | Cartes grandes, modales |
| **2XL** | `radius-2xl` | `25px` | Trust cards |
| **Full** | `radius-full` | `50px` | Boutons pill, avatars |
| **Pill** | `radius-pill` | `9999px` | Boutons arrondis complets |

---

## 🌑 OMBRES (Shadows)

| Nom | Variable | Valeur | Usage |
|-----|----------|--------|-------|
| **None** | `shadow-none` | `none` | Pas d'ombre |
| **SM** | `shadow-sm` | `0 1px 2px rgba(0, 0, 0, 0.05)` | Légère élévation |
| **MD** | `shadow-md` | `0 4px 6px rgba(0, 0, 0, 0.1)` | Cartes, boutons hover |
| **LG** | `shadow-lg` | `0 10px 15px rgba(0, 0, 0, 0.1)` | Modales, dropdowns |
| **XL** | `shadow-xl` | `0 20px 25px rgba(0, 0, 0, 0.15)` | Overlays |

### Ombres spécifiques

| Nom | Variable | Valeur | Usage |
|-----|----------|--------|-------|
| **Card Shadow** | `shadow-card` | `0 2px 8px rgba(64, 54, 51, 0.08)` | Ombre des cartes |
| **Button Hover** | `shadow-button-hover` | `0 4px 8px rgba(111, 176, 208, 0.2)` | Ombre boutons au hover |
| **Header Shadow** | `shadow-header` | `0 2px 4px rgba(0, 0, 0, 0.05)` | Ombre header sticky |

---

## 📐 AUTRES TOKENS

### Z-index

| Nom | Variable | Valeur | Usage |
|-----|----------|--------|-------|
| **Base** | `z-base` | `0` | Éléments de base |
| **Dropdown** | `z-dropdown` | `100` | Menus déroulants |
| **Sticky** | `z-sticky` | `200` | Header sticky |
| **Modal** | `z-modal` | `300` | Modales |
| **Tooltip** | `z-tooltip` | `400` | Tooltips |
| **Overlay** | `z-overlay` | `500` | Overlays |

### Transitions

| Nom | Variable | Valeur | Usage |
|-----|----------|--------|-------|
| **Fast** | `transition-fast` | `150ms ease` | Transitions rapides |
| **Base** | `transition-base` | `200ms ease` | Transitions standard |
| **Slow** | `transition-slow` | `300ms ease` | Transitions lentes |

### Breakpoints (Responsive)

| Nom | Variable | Valeur | Usage |
|-----|----------|--------|-------|
| **Mobile** | `breakpoint-mobile` | `768px` | Mobile (< 768px) |
| **Tablet** | `breakpoint-tablet` | `1024px` | Tablet (768px - 1024px) |
| **Desktop** | `breakpoint-desktop` | `1440px` | Desktop (> 1024px) |


## 🔧 Intégration Rails + Tailwind

### Configuration Tailwind (tailwind.config.js)

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'blush': '#F2AAE2',
        'lime-cream': '#DFFFA5',
        'sky-reflection': '#6FB0D0',
        'sky-reflection-10': 'rgba(111, 176, 208, 0.1)',
        'sky-reflection-20': 'rgba(111, 176, 208, 0.2)',
        'sky-reflection-41': 'rgba(111, 176, 208, 0.41)',
        'sky-reflection-50': 'rgba(111, 176, 208, 0.5)',
        'deep-mocha': '#403633',
        'deep-mocha-60': 'rgba(64, 54, 51, 0.6)',
        'deep-mocha-70': 'rgba(64, 54, 51, 0.7)',
        'tea-green': '#C9FED3',
        'tan': '#D0B993',
        'crimson-carrot': '#FA4B02',
        'primary': '#6FB0D0',
        'secondary': '#FA4B02',
        'background': '#F3F0E8',
        'background-light': '#FFFFFF',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['PolySans Qonto', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2' }],
        'h2': ['32px', { lineHeight: '1.3' }],
        'h3': ['24px', { lineHeight: '1.4' }],
        'h4': ['18px', { lineHeight: '1.4' }],
        'body-xl': ['20px', { lineHeight: '1.5' }],
        'body-large': ['18px', { lineHeight: '1.5' }],
        'body': ['16px', { lineHeight: '1.5' }],
        'body-small': ['14px', { lineHeight: '1.4' }],
        'caption': ['12px', { lineHeight: '1.3' }],
        'button-large': ['24px', { lineHeight: '1.2' }],
        'button-small': ['15px', { lineHeight: '1.2' }],
      },
      fontWeight: {
        'light': '300',
        'regular': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'bulky': '800',
      },
      spacing: {
        'button-x': '32px',
        'button-y': '16px',
        'card': '24px',
        'section': '80px',
      },
      borderRadius: {
        'card': '12px',
        'trust-card': '25px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(64, 54, 51, 0.08)',
        'button-hover': '0 4px 8px rgba(111, 176, 208, 0.2)',
      },
    },
  },
}
```
