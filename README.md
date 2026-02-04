# 🎨 Portfolio - Rayan Koussa

Un portfolio moderne et minimaliste construit avec **Next.js**, **TypeScript**, **Tailwind CSS** et **Shadcn UI**. Présentant mon parcours académique, mes compétences, mes projets et mes loisirs.

## ✨ Fonctionnalités

- ✅ **Design responsive** - Adapté à tous les appareils (mobile, tablette, desktop)
- 🌙 **Dark Mode** - Support complet du thème clair/sombre
- ⚡ **Performance optimisée** - Next.js App Router avec optimisation des images
- 📱 **Accessibilité** - Normes WCAG respectées
- 🎯 **SEO-friendly** - Métadonnées optimisées
- 💫 **Animations fluides** - Transitions et animations CSS personnalisées
- 🔗 **Intégrations** - Liens vers GitHub, LinkedIn et réseaux sociaux
- 📷 **Feed Instagram intégré** - Affichage du flux photo
- 🎮 **Section Loisirs** - Guitare, Dessin, Cuisine, Jeux vidéo

## 📋 Sections du portfolio

### 🏠 Accueil
- Présentation personnelle avec photo de profil
- Stack technologique avec icônes
- Boutons de contact et réseaux sociaux
- Langues parlées

### 📚 Parcours académique
- Master 2 - Technologies de l'Hypermédia (Université Paris 8, 2023-2025)
- Master 1 - Management de projets informatiques (École IRIS, 2020-2021)
- Licence - Informatique (Université de Lorraine, 2015-2020)

### 💻 Compétences
- **Frontend** : React, Next.js, TypeScript, Tailwind CSS, Shadcn UI
- **Backend** : Node.js, Express, PHP
- **Bases de données** : MySQL, MongoDB, PL/SQL
- **Autres** : Java, C++, Bootstrap, HTML, CSS, JavaScript
- **Outils** : Git, ESLint, Docker

### 🎮 Loisirs
- 📷 **Photographie** - Feed Instagram intégré
- 🎸 **Guitare**, 🎨 **Dessin**, 🍳 **Cuisine**
- 🎮 **Jeux vidéo** : League of Legends, Sekiro, Elden Ring, Teamfight Tactics

### 📁 Projets récents
1. **Portfolio Next.js** - Ce portfolio moderne
2. **MBTI Explorer** - Application de découverte de lieux basée sur votre profil MBTI
3. **Application patrimoine** - Gestion et visualisation de patrimoine culturel
4. **Indexation HTML** - Moteur d'indexation et recherche avancée
5. **Jeux vidéo** - Hearthstone (Java), PACMAN (Java & C++)
6. **Trombinoscope** - Application web interactive
7. **Client/serveur** - Architecture multi-protocoles
8. **Base de données** - Gestion d'achats/ventes d'actions (PL/SQL)

## 🚀 Installation & Utilisation

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation
```bash
# Cloner le dépôt
git clone https://github.com/rayankoussa/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build pour la production
```bash
npm run build
npm start
```

## 📦 Stack technique

```
Frontend:
- Next.js 15 (App Router)
- TypeScript 5
- Tailwind CSS 3
- Shadcn UI
- React Icons
- Framer Motion

Infrastructure:
- Vercel (recommandé)
- Node.js
```

## 📁 Structure du projet

```
portfolio/
├── public/
│   ├── RK.jpg                    # Photo de profil
│   ├── CV_Rayan_K.pdf           # Curriculum Vitae
│   └── games/                    # Logos des jeux vidéo
├── src/
│   ├── app/
│   │   ├── page.tsx              # Page d'accueil principale
│   │   ├── projects/page.tsx     # Section projets
│   │   ├── contact/page.tsx      # Contact
│   │   ├── layout.tsx            # Layout global
│   │   ├── globals.css           # Styles globaux
│   │   └── components/           # Composants spécifiques à l'app
│   ├── components/               # Composants réutilisables
│   │   ├── Hobbies.tsx           # Section loisirs
│   │   ├── AcademicTimeline.tsx  # Parcours académique
│   │   ├── AppNavbar.tsx         # Navigation
│   │   ├── SkillBadge.tsx        # Badges de compétences
│   │   └── ui/                   # Composants Shadcn UI
│   └── lib/
│       └── utils.ts              # Fonctions utilitaires
├── next.config.ts                # Configuration Next.js
├── tailwind.config.ts            # Configuration Tailwind CSS
├── tsconfig.json                 # Configuration TypeScript
└── README.md                      # Ce fichier
```

## 🎨 Personnalisation

### Modifier le contenu
1. **Photo de profil** : Remplacez `public/RK.jpg`
2. **CV** : Mettez à jour `public/CV_Rayan_K.pdf`
3. **Texte** : Éditez les fichiers `.tsx` dans `src/app/` et `src/components/`
4. **Couleurs** : Modifiez `tailwind.config.ts`

### Ajouter un nouveau domaine d'images
```typescript
// Dans next.config.ts
remotePatterns: [
  {
    protocol: 'https',
    hostname: 'votre-domaine.com',
  },
]
```

## 🚢 Déploiement

### Vercel (recommandé - gratuit)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Servez le contenu de .next
```

### Autres plateformes
- Netlify
- Railway
- Render
- AWS Amplify

## 📞 Contact & Liens

- **GitHub** : [rayankoussa](https://github.com/rayankoussa)
- **LinkedIn** : [Rayan Koussa](https://linkedin.com/in/rayankoussa)
- **Instagram** : [@rayan.koussa](https://instagram.com/rayan.koussa)
- **Email** : [Votre email]

## 📝 Licence

Ce projet est open source sous la licence MIT - libre d'utilisation.

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) - Framework React fullstack
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Shadcn UI](https://ui.shadcn.com/) - Composants React
- [React Icons](https://react-icons.github.io/react-icons/) - Bibliothèque d'icônes

---

**Fait avec ❤️ par Rayan Koussa**
