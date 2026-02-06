# 📄 Déploiement Portfolio React + Tailwind (GitHub Pages & Vercel)

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
```
https://fullstackflow-dev.github.io/Portfolio-react-tailwind-white-image/
```
Vite doit connaître cette base pour charger correctement les assets (JS/CSS).

---

## ✅ Correctifs appliqués

1. **Ajout d’un workflow GitHub Actions**  
   Un workflow build + déploiement publie automatiquement le dossier `dist/`.

2. **Mise à jour de `base` dans Vite**  
   `base` est réglé sur le nom du repo GitHub Pages pour éviter les erreurs de chemins d’assets.

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

---

## 🔧 Mise à jour Vite (base URL)

Dans `vite.config.js` :
```js
export default defineConfig({
  base: '/Portfolio-react-tailwind-white-image/',
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

Si tu veux, je peux aussi ajouter :
- un badge de déploiement
- un script `deploy`
- un guide de maintenance
