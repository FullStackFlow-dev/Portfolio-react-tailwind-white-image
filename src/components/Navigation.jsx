import { useState } from 'react'
import SocialLinks from './SocialLinks'

/**
 * NAVIGATION COMPONENT
 * Menu fixe en haut avec logo et liens
 * 
 * Features :
 * - Menu hamburger sur mobile
 * - Fermeture automatique au clic sur un lien
 * - Animation fluide d'ouverture/fermeture
 * - État géré avec useState (hook React)
 */

function Navigation() {
  /**
   * État du menu mobile
   * - isOpen = true : menu ouvert
   * - isOpen = false : menu fermé
   * 
   * useState est un "hook" React qui permet de gérer l'état local
   */
  const [isOpen, setIsOpen] = useState(false)

  /**
   * Toggle le menu : ouvre s'il est fermé, ferme s'il est ouvert
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  /**
   * Ferme le menu (appelé quand on clique sur un lien)
   */
  const closeMenu = () => {
    setIsOpen(false)
  }

  /**
   * Liste des liens de navigation
   * Utilise un tableau pour éviter la répétition de code
   */
  const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#certs', label: 'Certificats' },
    { href: '#education', label: 'Formation' },
    { href: '#projects', label: 'Projets' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-dark/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* Logo principal */}
        <a href="#top" className="font-display text-lg text-text-primary tracking-wide">
          Merph<span className="text-accent">Dev</span>
        </a>

        {/* Liens principaux (desktop) */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text-muted text-xs font-medium tracking-widest uppercase transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions rapides (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <SocialLinks className="gap-3" />
          <a href="#contact" className="btn-secondary">
            Connectons-nous
          </a>
        </div>

        {/* Bouton hamburger (mobile uniquement) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          {/* Les 3 barres du hamburger avec animation */}
          <span className={`w-6 h-0.5 bg-accent transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-accent transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-accent transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`
          md:hidden bg-bg-dark/98 backdrop-blur-xl border-t border-border
          transition-all duration-300
          ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
        `}
      >
        <ul className="flex flex-col items-center py-6 gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="text-text-muted text-xs font-medium tracking-widest uppercase transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-4 pb-6">
          <SocialLinks className="gap-4" />
          <a href="#contact" onClick={closeMenu} className="btn-secondary">
            Connectons-nous
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
