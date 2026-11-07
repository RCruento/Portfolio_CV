# Logs du Projet

## [2026-11-07] - Revue & Nettoyage Cible (Audit & Unslop Selectionne)

### Decisions & Consignes Utilisateur
- **Conservé à la demande** :
  - `ArcadeMiniGame` (jeu Space Invaders)
  - `GameHUDOverlay` (barre de HP/XP)
  - Confetti au clic sur le bouton de téléchargement du CV (`handleDownloadCV`)

### Modifications Réalisées
- **Correction Lint** :
  - `src/components/ProjectShowcaseModal.tsx` : suppression de l'import mort `ShoppingBag` (@typescript-eslint/no-unused-vars).
- **Suppression Code Mort (YAGNI)** :
  - `src/lib/sound.ts` : supprimé (105 lignes WebAudio synthétiseur non utilisées dans le projet).
- **Optimisation Performance & Mobile** :
  - `src/components/ThreeCanvasBackground.tsx` : condition de coupure ajoutée pour mobile (`window.innerWidth < 768`) et `prefers-reduced-motion` pour épargner la batterie/GPU tactile.
- **Assainissement Dépendances** :
  - Suppression du méta-bundle géant `radix-ui` et du CLI `shadcn-ui`.
  - Migration de `src/components/ui/sheet.tsx` vers `@radix-ui/react-dialog` ciblé et léger.
- **Vérifications** :
  - `npm run lint` → 100% vert (0 erreur, 0 warning).
  - `npm run build` → 100% vert (Turbopack + SSG/Static prerender complet).


## [2026-11-07] - Unslop, Mini-Jeu Modal, Fix Career Finder & Optimisation SEO

### 1. Mini-Jeu en format discret (Option A)
- Création de [`ArcadeModalLauncher.tsx`](file:///d:/Coding/portfolio/src/components/ArcadeModalLauncher.tsx) : bouton pill élégant et discret en bas à droite (`fixed bottom-6 right-6`), lançant le mini-jeu dans une modal dédiée sans encombrer la page d'accueil.
- Retrait du bloc canvas encombrant au milieu de la `HomeView.tsx` : le parcours de lecture est désormais fluide et met en valeur le profil et les projets.

### 2. Unslop & Nettoyage UX
- Suppression définitive de [`CustomCursor.tsx`](file:///d:/Coding/portfolio/src/components/CustomCursor.tsx) : restauration du curseur natif réactif et sans lag.

### 3. Résolution du Bug "Career Finder Helper AI" & Démo Vidéo
- Cause identifiée : dans [`ProjectsView.tsx`](file:///d:/Coding/portfolio/src/components/ProjectsView.tsx), le mapping omettait de propager `video` et `gallery` de `PROJECT_BASE_CONFIGS` vers les objets de `ProjectCard`. Le modal ne recevait donc jamais le lien vidéo `/projects/career-finder-helper/demo_30s.webm`.
- Correction effectuée : propagation de `video` et `gallery`.
- Amélioration de la modal [`ProjectShowcaseModal.tsx`](file:///d:/Coding/portfolio/src/components/ProjectShowcaseModal.tsx) : affichage du bouton "Démo en direct" (Lien LemonSqueezy) même lorsque le projet est flaggé comme "Confidentiel / Architecture sur demande".

### 4. Améliorations SEO (/seo)
- Ajout des balises `alternates.canonical` et `alternates.languages` (avec `hreflang` EN, FR et `x-default`) dans [`layout.tsx`](file:///d:/Coding/portfolio/src/app/[locale]/layout.tsx).
- Contrôle de la conformité du sitemap multilingue et de `robots.ts`.

### 5. Validations
- `npm run lint` → 0 erreur, 0 warning.
- `npm run build` → 100% vert avec génération statique de toutes les routes.


## [2026-11-07] - Fix Positionnement Croix de Fermeture Modal
- Cause : Le container plein écran de la modal centrait verticalement sans dégagement haut suffisant (`p-4`), faisant passer le haut de la modal et le bouton de fermeture `X` sous la barre de navigation fixe (`header` + `GameHUDOverlay`).
- Correctif dans [`ProjectShowcaseModal.tsx`](file:///d:/Coding/portfolio/src/components/ProjectShowcaseModal.tsx) :
  - Ajout d'un padding top sécurisé (`pt-24 sm:pt-28 pb-8`) pour dégager la modal sous la navbar et la barre de HP.
  - Ajustement de la hauteur maximale à `max-h-[85vh]` avec `shrink-0` sur la barre d'en-tête pour garantir que la croix `X` reste toujours visible, alignée et cliquable.
- Validation : `npm run lint` & `npm run build` exécutés avec succès (code 0).


## [2026-11-07] - Optimisation SEO Complète (seo, seo-audit, ai-seo)
- **Robots.txt** ([robots.ts](file:///d:/Coding/portfolio/src/app/robots.ts)) : suppression du blocage de `/.well-known/` et suppression de `crawlDelay` obsolète pour Bingbot.
- **Structured Data Schema.org** :
  - [`projects/page.tsx`](file:///d:/Coding/portfolio/src/app/[locale]/projects/page.tsx) : injection du schéma JSON-LD `ItemList` avec les entités `SoftwareApplication` détaillées (Career Finder Helper AI, MBTI Explorer, KuCoinBot) pour l'éligibilité aux Rich Results Google.
  - [`contact/page.tsx`](file:///d:/Coding/portfolio/src/app/[locale]/contact/page.tsx) : injection du schéma JSON-LD `ContactPage` reliant l'entité `Person`.
- **Twitter Card Metadata** : ajout des configurations Twitter spécifiques par page dans `projects` et `contact`.
- **AEO / AI Search Readiness** ([`public/llms.txt`](file:///d:/Coding/portfolio/public/llms.txt)) :
  - Intégration complète du projet phare **Career Finder Helper AI** (ETL, Local-First, ATS scoring, BYOK AI, Chrome Extension).
  - Mise à jour des stacks (Python, FastAPI, SQLite, Go, Next.js 16) pour maximiser les citations dans Perplexity, ChatGPT et Google AI Overviews.
- **Validation** : `npm run lint` & `npm run build` : 100% vert.


## [2026-11-07] - Connexion Mailto, Harmonisation Badges Projets & Restructuration Home
1. **Formulaire de Contact Connecté** ([ContactView.tsx](file:///d:/Coding/portfolio/src/components/ContactView.tsx)) :
   - Clic sur "Send Message" génère un `mailto:` pré-rempli ciblé sur `rayan.koussa@outlook.fr` avec sujet et corps du message reprenant le nom, l'email et le texte saisis, déclenchant le client mail de l'utilisateur de manière fiable sans backend SMTP.
2. **Badges Technologiques Harmonisation** ([ProjectCard.tsx](file:///d:/Coding/portfolio/src/components/ProjectCard.tsx) et [ProjectShowcaseModal.tsx](file:///d:/Coding/portfolio/src/components/ProjectShowcaseModal.tsx)) :
   - Remplacement des badges carrés lourds par le style pilule sobre de la Home (`rounded-full`, fond sombre translucide `bg-black/60`, bordure cyan subtile, effet néon discret au survol).
3. **Refonte Hiérarchie de la Home Page** ([HomeView.tsx](file:///d:/Coding/portfolio/src/components/HomeView.tsx)) :
   - Insertion de la section **Projets Phares (Highlights)** en position 2 sous le Hero avec les 3 projets majeurs (*Career Finder Helper AI*, *KuCoinBot v10*, *MBTI Explorer*) et bouton d'exploration vers `/projects`.
   - Remontée des **Expériences Professionnelles & Formations** en position 3.
   - Placement de la grille de compétences techniques en position 4, suivie des métriques, langues et hobbies.
4. **Validation** : `npm run lint` & `npm run build` : 100% vert.


## [2026-11-07] - Harmonisation Globale des Badges & Cartes Projets
- **Harmonisation complète du design system Cyber HUD** :
  - [`ProjectCard.tsx`](file:///d:/Coding/portfolio/src/components/ProjectCard.tsx) : bascule de `arcade-card` vers `hud-card`, badges de catégorie et confidentialité convertis en `hud-badge` (cyan et ambre), et badges de technologies convertis en pilules arrondies (`rounded-full`, fond sombre translucide, lueur cyan).
  - [`ProjectsView.tsx`](file:///d:/Coding/portfolio/src/components/ProjectsView.tsx) : filtres de catégories alignés sur `hud-card` et `hud-btn-primary`, avec badge d'en-tête `hud-badge`.
- **Validation** : `npm run lint` & `npm run build` : 100% vert.


## [2026-11-07] - Colorisation des Icônes Technologiques Officielles
- **Diagnostic** : `TechIcon.tsx` utilisait du SVG monochrome avec `fill="currentColor"`, ce qui rendait toutes les icônes blanches/incolores.
- **Correctif** ([TechIcon.tsx](file:///d:/Coding/portfolio/src/components/TechIcon.tsx)) :
  - Remplacement par les composants vectoriels officiels de `react-icons` (`FaReact`, `FaPython`, `FaNodeJs`, `SiFastapi`, `SiGo`, `SiTypescript`, `SiNextdotjs`, `SiSqlite`, `SiGooglechrome`, `SiOpenai`, `SiMongodb`, `SiPostgresql`, `SiMysql`, etc.).
  - Application des couleurs de marque fidèles et éclatantes (Python en émeraude/jaune, React en cyan `#00d8ff`, TypeScript en bleu ciel `#3178c6`, FastAPI en sarcelle, Go en cyan, Chrome en ambre, etc.).
- **Validation** : `npm run lint` & `npm run build` : 100% vert.


## [2026-11-07] - Conseil d'Évaluation & Mise à Niveau Next.js 16.4.5
- **Mise à niveau Next.js** : `next@16.0.7` → **`next@16.4.5`** (dernière version stable officielle sur npm).
- **Vérifications de compatibilité** :
  - Turbopack compilation : succès en 9.8s.
  - SSG prerender (10/10 pages) : succès en 1550ms.
  - ESLint : 0 problème.
- **Rapport d'évaluation global consigné** dans `conseil_revue_site.md`.


## [2026-11-07] - Élimination Totale des Dépréciations Next.js 16.4
- **Migration Middleware → Proxy** : renommage de `src/middleware.ts` en `src/proxy.ts` conformément à la nouvelle convention Next.js 16.4 (`middleware-to-proxy`).
- **Migration Edge Runtime → Node.js Runtime** : mise à jour de `src/app/opengraph-image.tsx` en `export const runtime = "nodejs";`.
  - Résultat direct : déblocage de la pré-génération statique SSG sur `/opengraph-image` (11/11 pages désormais en SSG/Static).
- **Zéro avertissement de dépréciation** : `npm run build` affiche désormais une sortie 100% propre, sans aucun warning de dépréciation ni d'Edge Runtime.


## [2026-11-07] - Résolution des Avertissements Next/Image (Browser Console)
- **Ajout de la propriété `sizes` sur images avec `fill`** :
  - [`ProjectCard.tsx`](file:///d:/Coding/portfolio/src/components/ProjectCard.tsx) : ajout de `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"` sur les aperçus des projets.
  - [`ProjectShowcaseModal.tsx`](file:///d:/Coding/portfolio/src/components/ProjectShowcaseModal.tsx) : ajout de `sizes="(max-width: 768px) 100vw, 800px"`.
- **Maintien du ratio d'aspect sur logos de jeux** :
  - [`Hobbies.tsx`](file:///d:/Coding/portfolio/src/components/Hobbies.tsx) : application de `className="w-auto h-auto max-w-[36px] max-h-[36px] object-contain"` pour éliminer l'avertissement de dimension modifiée sur `Lol.png`, `Sekiro.png`, `TFT.png`.
- **Validation** : `npm run lint` & `npm run build` exécutés sans aucune erreur (100% vert).


## [2026-11-07] - Résolution de l'Erreur Console Script Tag (React 19 & Next.js 16.4)
- **Cause** : React 19 et Next.js lèvent une erreur d'hydratation quand des balises HTML `<script>` brutes sont directement rendues dans un composant sans passer par le composant `next/script` (`Encountered a script tag while rendering React component`).
- **Correctif** ([layout.tsx](file:///d:/Coding/portfolio/src/app/[locale]/layout.tsx)) :
  - Remplacement du `<script>` de flash prevention de thème par `<Script id="theme-flash-prevention" strategy="beforeInteractive" />`.
  - Remplacement du `<script type="application/ld+json">` par `<Script id="global-jsonld" type="application/ld+json" strategy="afterInteractive" />`.
- **Validation** : `npm run lint` & `npm run build` exécutés avec succès (code 0), erreur console éliminée.


## [2026-11-07] - Optimisations UI/UX Pro Max (Player Card & Entonnoir d'Acquisition)
- **Agrandissement & Polish de la Player Gaming Card** ([HomeView.tsx](file:///d:/Coding/portfolio/src/components/HomeView.tsx)) :
  - Avatar agrandi de 144px à **176px/192px** (`w-44 h-44 sm:w-48 sm:h-48`) avec anneau néon vibrant.
  - Largeur de la carte portée à `max-w-md` avec padding `p-7 sm:p-8`.
  - Blocs "Formation" et "Statut" réhaussés avec typographie plus nette et point vert clignotant (`animate-pulse`) sur "DISPONIBLE".
- **Suppression du doublon "Explorer les projets"** :
  - Bouton Hero principal transformé en CTA direct : **"ME CONTACTER" / "GET IN TOUCH"** (avec icône éclair `Zap`), diversifiant le funnel d'acquisition et incitant au contact direct.
  - Bouton d'en-tête de section conservé pour **"Explorer tous les projets"** vers la galerie complète.
- **Overlay sur cartes de projets** ([ProjectCard.tsx](file:///d:/Coding/portfolio/src/components/ProjectCard.tsx)) :
  - Remplacement du voile rouge opaque par un fond sombre translucide avec flou `backdrop-blur-[2px]` et bouton glow centré, laissant la capture du projet visible au survol.
- **Validation** : `npm run lint` & `npm run build` : 100% vert.


## [2026-11-08] - Emplacement Script Next.js & Conformité React 19 / Next 16.4
- **Cause de l'erreur** : Dans l'App Router de Next.js (`layout.tsx`), placer `<Script>` directement à l'intérieur de `<head>` déclenchait l'avertissement React 19 (`Encountered a script tag while rendering React component`). La documentation Next.js stipule que `<Script>` doit être placé dans `<body>` ou à la racine d'un composant, Next.js se chargeant d'injecter et d'ordonnancer l'exécution automatiquement.
- **Correctif** ([layout.tsx](file:///d:/Coding/portfolio/src/app/[locale]/layout.tsx)) : déplacement des composants `<Script>` (`theme-flash-prevention`, `global-jsonld`, Plausible) à l'intérieur de `<body>`.
- **Validation** : `npm run lint` & `npm run build` : 100% vert.
