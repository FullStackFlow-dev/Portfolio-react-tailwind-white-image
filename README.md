# 📄 Déploiement Portfolio React + Tailwind (GitHub Pages & Vercel)

[![Deploy to GitHub Pages](https://github.com/FullStackFlow-dev/Portfolio-react-tailwind-white-image/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/FullStackFlow-dev/Portfolio-react-tailwind-white-image/actions/workflows/deploy-pages.yml)

Ce document explique **pourquoi le portfolio ne s’affichait pas** sur GitHub Pages et **comment corriger** le déploiement, puis détaille **les étapes de déploiement** sur GitHub Pages **et** Vercel.

---

## ✅ Problèmes identifiés

### 1) Aucun build publié sur GitHub Pages
Le projet utilise **Vite**, qui génère un build statique dans le dossier `dist/`.  
Sans build, GitHub Pages n’a rien à servir → page blanche ou 404.

### 2) GitHub Pages ne servait pas `dist/`
GitHub Pages doit pointer sur un dossier **généré** (`dist/`) via une action (ou une branche dédiée).  
Sans action de build + déploiement, la branche `main` ne suffit pas.

### 3) Base URL incorrecte pour GitHub Pages
Sur GitHub Pages, l’app est servie dans un sous-dossier :
```text
https://fullstackflow-dev.github.io/Portfolio-react-tailwind-white-image/
```
Vite doit connaître cette base pour charger correctement les assets (JS/CSS).

---

## ✅ Correctifs appliqués

1. **Ajout d’un workflow GitHub Actions**  
   Un workflow build + déploiement publie automatiquement le dossier `dist/`.

2. **Mise à jour de `base` dans Vite**  
   `base` est conditionnel : GitHub Pages utilise le sous-dossier du repo, tandis que Vercel et le dev local restent sur `/`.

---

## 🚀 Déploiement GitHub Pages (automatique)

### Prérequis
- Le dépôt GitHub doit s’appeler **Portfolio-react-tailwind-white-image**
- GitHub Pages doit être activé dans **Settings → Pages**
- **Source** = GitHub Actions

### Fonctionnement
Le workflow GitHub Actions build l’app et publie `dist/` sur GitHub Pages à chaque push sur `main`.

Fichier utilisé : `.github/workflows/deploy-pages.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ "main" ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
      - uses: actions/deploy-pages@v4
```

✅ Résultat : GitHub Pages sert automatiquement la dernière version compilée.

---

## ✅ Déploiement Vercel (recommandé)

### Étapes rapides
1. Va sur https://vercel.com
2. **New Project**
3. Connecte ton repo GitHub
4. Configuration :
   - **Framework** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
5. Clique **Deploy**

✅ Vercel détecte tout automatiquement.  
⚠️ Important : assure-toi que `base` reste `/` pour Vercel (valeur par défaut), sinon les chemins d’assets seront cassés.

---

## 🧰 Script de déploiement (GitHub Pages)

Un script `deploy` est disponible pour publier manuellement le contenu de `dist/` sur la branche `gh-pages` :

```bash
npm run deploy
```

Ce script lance d’abord un build puis utilise `gh-pages` via `npx`. Assure-toi d’avoir les droits d’écriture sur le dépôt.

---

## 🛠️ Guide de maintenance

- **Mise à jour des dépendances**
  - Vérifie régulièrement les versions avec `npm outdated`.
  - Mets à jour de manière incrémentale et teste avec `npm run build`.
- **Changement de contenu**
  - Modifie les sections dans `src/components/`.
  - Vérifie le rendu local avec `npm run dev`.
- **Contrôle des assets**
  - Place les images statiques dans `public/`.
  - Vérifie que les URLs sont correctes après build (répertoire `dist/`).
- **Surveillance du déploiement**
  - Suis le workflow GitHub Actions pour GitHub Pages.
  - Vérifie les logs Vercel/Netlify après chaque déploiement.

---

## 🔧 Mise à jour Vite (base URL)

Dans `vite.config.js` :
```js
export default defineConfig({
  base: process.env.GITHUB_ACTIONS
    ? '/Portfolio-react-tailwind-white-image/'
    : '/',
  plugins: [react()],
})
```

---

## ✅ Résultat attendu

✅ GitHub Pages :  
https://fullstackflow-dev.github.io/Portfolio-react-tailwind-white-image/

✅ Vercel :  
https://nom-du-projet.vercel.app

---

## ✅ Modifications récentes (prod)

- Refonte du header avec navigation centrée, CTA “Connectons-nous” et icônes de réseaux sociaux.
- Ajout d’icônes sociales en haut et en bas de page pour une cohérence visuelle.
- Ajout d’un bouton “Retour en haut” flottant.
- Harmonisation de la couleur de fond globale pour matcher le nouveau header.
