import Navigation from './components/Navigation'
import Hero from './components/Hero'
import { About, Skills, Certifications, Education, Projects, Contact, Footer } from './components/index.jsx'

/**
 * APP - Composant principal du portfolio
 * 
 * Structure :
 * - Navigation fixe en haut
 * - Sections empilées verticalement
 * - Footer en bas
 * 
 * Ce composant orchestre toute l'application
 */
function App() {
  return (
    <div id="top" className="min-h-screen bg-bg-dark">
      {/* Navigation fixe */}
      <Navigation />
      
      {/* Contenu principal */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Education />
        <Projects />
        <Contact />
      </main>
      
      {/* Pied de page */}
      <Footer />

      {/* Bouton retour en haut */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-accent text-bg-dark flex items-center justify-center shadow-[0_0_20px_rgba(0,229,160,0.35)] hover:-translate-y-1 transition-transform"
        aria-label="Retour en haut"
      >
        ↑
      </a>
    </div>
  )
}

export default App
