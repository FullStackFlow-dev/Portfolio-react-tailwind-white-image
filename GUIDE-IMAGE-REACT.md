# 📸 Comment ajouter ton image au portfolio React

Pour React, c'est un peu différent de HTML pur.

---

## 🎯 Méthode 1 : Dossier public/ (RECOMMANDÉ)

### Étape 1 : Crée le dossier public

```
portfolio-react/
├── public/              ← Crée ce dossier s'il n'existe pas
│   └── profile.jpg      ← Place ton image ici
├── src/
│   └── components/
└── index.html
```

### Étape 2 : Place ton image

1. **Renomme ton image** : `profile.jpg` ou `merphy.jpg`
2. **Copie-la dans `public/`**
3. **Important** : Les fichiers dans `public/` sont accessibles directement via `/nom-fichier.jpg`

### Étape 3 : Le code est déjà prêt !

Dans `src/components/Hero.jsx`, j'ai déjà ajouté :

```jsx
<img 
  src="/profile.jpg" 
  alt="Photo de Merphy Mademba" 
  className="w-40 h-40 rounded-full..."
/>
```

**Change juste le nom** :
- Si ton image s'appelle `merphy.jpg` → `src="/merphy.jpg"`
- Si ton image s'appelle `photo.png` → `src="/photo.png"`

### Étape 4 : Teste

```bash
npm run dev
```

Ouvre http://localhost:5173 et tu vois ton image ! 🎉

---

## 🎯 Méthode 2 : Import depuis src/ (AVANCÉ)

### Structure

```
portfolio-react/
├── src/
│   ├── assets/
│   │   └── profile.jpg    ← Image ici
│   └── components/
│       └── Hero.jsx
```

### Dans Hero.jsx

```jsx
// Importe l'image en haut du fichier
import profileImage from '../assets/profile.jpg'

function Hero() {
  return (
    <section>
      {/* Utilise la variable importée */}
      <img 
        src={profileImage} 
        alt="Photo de Merphy Mademba" 
        className="w-40 h-40..."
      />
      {/* ... */}
    </section>
  )
}
```

**Avantage :** Vite optimise automatiquement l'image pendant le build.

---

## 🎯 Méthode 3 : URL externe

Si ton image est hébergée ailleurs :

```jsx
<img 
  src="https://i.imgur.com/ABC123.jpg" 
  alt="Photo de Merphy Mademba" 
  className="w-40 h-40..."
/>
```

---

## 🎨 Personnaliser l'image en React

### Changer la taille

Dans `Hero.jsx`, modifie les classes Tailwind :

```jsx
<img 
  src="/profile.jpg" 
  alt="Photo de Merphy Mademba" 
  className="w-40 h-40..."  
  // ↑ w-40 = 160px, h-40 = 160px
/>
```

**Exemples :**
- Plus grande : `w-48 h-48` (192px)
- Plus petite : `w-32 h-32` (128px)
- Très grande : `w-60 h-60` (240px)

### Changer la bordure

```jsx
className="... border-3 border-accent ..."
//               ↑              ↑
//            épaisseur      couleur verte
```

**Exemples :**
- Bordure plus épaisse : `border-4`
- Bordure blanche : `border-white`
- Pas de bordure : enlève `border-3 border-accent`

### Changer la forme

```jsx
className="... rounded-full ..."
//                 ↑
//            cercle parfait
```

**Exemples :**
- Coins arrondis : `rounded-2xl`
- Carré : enlève `rounded-full`

---

## 🐛 Problèmes courants en React

### L'image ne s'affiche pas

**Vérifications :**

1. **L'image est dans `public/` ?**
   ```
   ✅ public/profile.jpg
   ❌ src/profile.jpg
   ```

2. **Le chemin commence par `/` ?**
   ```jsx
   ✅ src="/profile.jpg"
   ❌ src="profile.jpg"
   ```

3. **Le serveur dev est lancé ?**
   ```bash
   npm run dev
   ```

### Erreur de build

Si Vite ne trouve pas l'image pendant `npm run build` :

**Solution :** Utilise la Méthode 2 (import)

```jsx
import profileImage from '../assets/profile.jpg'
<img src={profileImage} alt="..." />
```

---

## 📦 Déploiement avec l'image

### Sur Vercel

```bash
# 1. L'image doit être dans public/
portfolio-react/
└── public/
    └── profile.jpg

# 2. Build localement pour tester
npm run build

# 3. Vérifie que l'image est dans dist/
dist/
└── profile.jpg    ← Doit être là

# 4. Pousse sur GitHub
git add public/profile.jpg
git commit -m "feat: ajout photo de profil"
git push

# 5. Vercel redéploie automatiquement
```

---

## 🎯 Résumé

```bash
# 1. Place ton image
portfolio-react/public/profile.jpg

# 2. Dans src/components/Hero.jsx
<img src="/profile.jpg" alt="..." className="..." />

# 3. Teste
npm run dev

# 4. Build
npm run build

# 5. Déploie
git push
```

---

**Différence HTML vs React :**

| Aspect | HTML pur | React |
|---|---|---|
| **Dossier** | À la racine | Dans `public/` |
| **Chemin** | `merphy.jpg` | `/merphy.jpg` |
| **Optimisation** | Manuelle | Automatique (avec import) |
