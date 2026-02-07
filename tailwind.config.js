/** @type {import('tailwindcss').Config} */
export default {
  // Indique à Tailwind où chercher les classes utilisées
  // Il scanne ces fichiers pour générer seulement le CSS nécessaire
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Couleurs personnalisées pour correspondre au design original
      colors: {
        'bg-dark': '#120406',           // Fond principal (rouge noir)
        'bg-card': '#1b0a0d',           // Fond des cartes
        'accent': '#f43f5e',            // Accent rouge
        'text-primary': '#e2e8f0',      // Texte blanc cassé
        'text-muted': '#64748b',        // Texte gris
        'border': '#3a1416',            // Bordures
      },
      // Polices personnalisées
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Sora', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
