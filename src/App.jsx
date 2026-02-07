import Navigation from './components/Navigation'
import Hero from './components/Hero'
import { About, Skills, Certifications, Education, Projects, OpenSource, Contact, Footer } from './components/index.jsx'

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
        <OpenSource />
        <Contact />
      </main>
      
      {/* Pied de page */}
      <Footer />
    </div>
  )
}

export default App
