# FAIRE Architecte — Site web

Site vitrine de **FAIRE Architecte**, atelier d'architecture HMONP basé à Reims, spécialisé dans la construction neuve, l'extension, la rénovation, le mobilier sur mesure et les projets ERP.

Construit avec [Jekyll](https://jekyllrb.com/) et un thème Minima personnalisé.

---

## Structure du projet

```
├── _config.yml          # Configuration Jekyll (titre, URL, plugins…)
├── _posts/              # Articles et projets du portfolio (Markdown)
├── _layouts/            # Templates HTML (page, post, portfolio…)
├── _includes/           # Composants réutilisables (header, footer, img…)
├── _data/               # Données JSON (dont responsive_images.json généré)
├── assets/
│   ├── css/             # Feuilles de style
│   ├── js/              # Scripts JavaScript
│   └── images/          # Images sources + dossier resized/ (généré)
├── scripts/
│   └── images.js        # Script Node.js de génération des vignettes
├── Gemfile              # Dépendances Ruby / Jekyll
└── package.json         # Dépendances Node.js
```

---

## Installation

### Prérequis communs

- **Ruby** ≥ 3.1
- **Bundler** (`gem install bundler`)
- **Node.js** ≥ 18 et **npm**

---

### Windows

1. Installer Ruby via [RubyInstaller](https://rubyinstaller.org/) (choisir la version **with DevKit**).  
   Lors de l'installation, cocher *Add Ruby executables to your PATH* et lancer `ridk install` en fin d'assistant.

2. Installer les dépendances Ruby :
   ```powershell
   gem install bundler
   bundle install
   ```

3. Installer Node.js depuis [nodejs.org](https://nodejs.org/), puis les dépendances npm :
   ```powershell
   npm install
   ```

> **WSL (Windows Subsystem for Linux) :** si vous utilisez un terminal WSL, les `node_modules` installés sous Windows natif ne sont pas accessibles. Relancez `npm install` depuis votre terminal WSL avant d'exécuter les scripts.

---

### macOS

1. Installer Ruby via [Homebrew](https://brew.sh/) (la version système est déconseillée) :
   ```bash
   brew install ruby
   echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
   source ~/.zshrc
   ```

2. Installer les dépendances Ruby :
   ```bash
   gem install bundler
   bundle install
   ```

3. Installer Node.js (via Homebrew ou [nodejs.org](https://nodejs.org/)), puis :
   ```bash
   npm install
   ```

---

### Linux (Debian / Ubuntu)

1. Installer Ruby et les outils de compilation :
   ```bash
   sudo apt update
   sudo apt install ruby-full build-essential zlib1g-dev
   echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
   echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
   source ~/.bashrc
   ```

2. Installer les dépendances Ruby :
   ```bash
   gem install bundler
   bundle install
   ```

3. Installer Node.js (via [NodeSource](https://github.com/nodesource/distributions) ou `nvm`), puis :
   ```bash
   npm install
   ```

---

## Générer les vignettes responsive

Le script redimensionne toutes les images de `assets/images/` en trois largeurs (480, 800, 1200 px) au format WebP et écrit les chemins dans `_data/responsive_images.json`.

```bash
npm run build:images
```

---

## Minifier les fichiers JavaScript

Génère les versions minifiées de `common.js`, `scripts.js` et `contact.js` (fichiers servis en production). À relancer après chaque modification de ces fichiers, avant de committer.

```bash
npm run build:minify-js
```

Les fichiers produits (`common.min.js`, `scripts.min.js`, `contact.min.js`) doivent être committés — ils sont servis directement par GitHub Pages.

---

## Ajouter un nouveau projet au portfolio

### 1. Préparer les images

Créer un sous-dossier dans `assets/images/projects/` portant le **slug** du projet (en minuscules, sans accents, sans espaces) :

```
assets/images/projects/nom-du-projet/
```

Y déposer toutes les images du projet en `.jpg` ou `.png`. Nommer les fichiers de façon claire (ex. `01_FACADE_AVANT.jpg`, `02_PLAN_RDC.jpg`…).

Pour les deux images de vignette (thumbnail), prévoir une version carrée suffixée `Vcarre` — ex. `01_FACADE_AVANTVcarre.jpg` — utilisée comme thumbnail de face sur la page portfolio.

---

### 2. Créer le fichier du projet

Copier un fichier existant de `_posts/` et le renommer selon le format :

```
_posts/AAAA-MM-JJ-NomDuProjet.markdown
```

La date dans le nom de fichier détermine l'ordre d'affichage (du plus récent au plus ancien).

---

### 3. Renseigner l'en-tête (front matter)

Ouvrir le fichier et modifier les champs entre les `---` :

```yaml
---
layout: post
title:  "Nom du projet"          # Titre affiché sur la page
slug: "nom-du-projet"            # Identifiant URL (minuscules, sans accents, sans espaces)
seo_title: "Nom – Description courte | FAIRE Architecte"
description: "Description meta pour le référencement (150-160 caractères)."
categories:
- Constructions                  # Une seule catégorie parmi : Constructions, Extensions, Rénovations, Meubles
breadcrumbs:
  - name: "Accueil"
    url: "/"
  - name: "Portfolio"
    url: "/portfolio/"
  - name: "Constructions"        # Adapter à la catégorie
    url: "/portfolio/constructions/"  # Adapter : /extensions/, /renovations/, /meubles/
date: 2026-01-06 12:00:00 +0100  # Date du projet

# Vignettes sur la page portfolio
thumbnailback: "/assets/images/projects/nom-du-projet/01_IMAGE_PRINCIPALE.jpg"
thumbnailback-alt: "Voir le projet Nom – catégorie à Reims, FAIRE Architecte"
thumbnailfront: "/assets/images/projects/nom-du-projet/01_IMAGE_VCAREEVcarre.jpg"
thumbnailfront-alt: "Voir le projet Nom – catégorie à Reims, FAIRE Architecte"

# Détails affichés dans la fiche projet (laisser vide si non renseigné)
detail1a: "Maître d'ouvrage"
detail1b: "Privé"
detail2a: "Mission"
detail2b: "Esquisse"
detail3a: "Superficie"
detail3b: "100 m²"
detail4a: "Montant des travaux"
detail4b: "200 000 € HT"
detail5a: ""
detail5b: ""
detail6a: ""
detail6b: ""

# Textes de description (HTML autorisé pour le gras, les sauts de ligne…)
description1: "Premier paragraphe de description du projet."
description2: "Deuxième paragraphe de description du projet."

# Images (jusqu'à 10 — laisser vide si non utilisée)
img1: "/assets/images/projects/nom-du-projet/01_IMAGE.jpg"
altimg1: "Description de l'image pour l'accessibilité"
captionimg1: "Légende affichée sous l'image"

img2: "/assets/images/projects/nom-du-projet/02_IMAGE.jpg"
altimg2: ""
captionimg2: "Légende image 2"

img3: ""
altimg3: ""
captionimg3: ""

# … répéter jusqu'à img10
---
```

Le corps du fichier (après le second `---`) contient le HTML de mise en page — **ne pas le modifier** si vous vous basez sur un projet existant de la même structure.

---

### 4. Générer les vignettes responsive

Après avoir déposé les images, lancer le script de génération :

```bash
npm run build:images
```

Cela crée les versions redimensionnées dans `assets/images/resized/` et met à jour `_data/responsive_images.json`. **Ces fichiers doivent être inclus dans le commit.**

---

### 5. Vérifier en local

```bash
bundle exec jekyll serve
```

Ouvrir `http://localhost:4000/portfolio/` pour vérifier que le projet apparaît bien dans la bonne catégorie, et `http://localhost:4000/nom-du-projet/` pour contrôler la page de détail.

---

### 6. Publier

```bash
git add .
git commit -m "Ajout du projet Nom du projet"
git push origin main
```

Le site se met en ligne automatiquement en 1 à 2 minutes via GitHub Actions.

---

## Lancer le site en local

```bash
bundle exec jekyll serve
```

Le site est alors accessible sur `http://localhost:4000`.

---

## Build complet (images + JS + Jekyll)

```bash
npm run build
```

---

## Publier le site (commit + push → mise en ligne automatique)

Le site est hébergé sur **GitHub Pages** et se déploie automatiquement à chaque push sur la branche `main` via une GitHub Action (`.github/workflows/pages-with-encryption.yml`).

> **Important :** la GitHub Action ne génère pas les vignettes. Si vous avez ajouté ou modifié des images, pensez à exécuter `npm run build:images` **avant** de committer, afin d'inclure les fichiers `assets/images/resized/` et `_data/responsive_images.json` dans le commit.

### Via la ligne de commande

```bash
# 1. Vérifier les fichiers modifiés
git status

# 2. Ajouter les fichiers à committer
git add .

# 3. Créer le commit
git commit -m "Description des modifications"

# 4. Pousser sur GitHub
git push origin main
```

### Via GitHub Desktop

[GitHub Desktop](https://desktop.github.com/) est une interface graphique officielle qui simplifie les opérations Git.

1. Ouvrir GitHub Desktop — les fichiers modifiés apparaissent automatiquement dans le panneau de gauche.
2. Cocher les fichiers à inclure dans le commit (par défaut tous sont cochés).
3. En bas à gauche, renseigner un **titre de commit** (champ *Summary*) et, si besoin, une description.
4. Cliquer sur **Commit to main**.
5. Cliquer sur **Push origin** (bouton en haut à droite) pour envoyer les modifications sur GitHub.

### Ce qui se passe ensuite

Une fois le push effectué, GitHub Actions déclenche automatiquement le pipeline suivant :

1. **Build Jekyll** — génère le site statique dans `_site/`
2. **Déploiement** — le site compilé est publié sur GitHub Pages

La mise en ligne prend généralement **1 à 2 minutes**. L'avancement est visible dans l'onglet **Actions** du dépôt GitHub. Le site est accessible à l'adresse configurée dans `_config.yml` (`url: "https://faire-architecte.com"`).
