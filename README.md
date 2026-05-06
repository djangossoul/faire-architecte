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
