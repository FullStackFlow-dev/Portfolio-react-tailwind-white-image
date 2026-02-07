import { useState } from 'react'

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
    { href: '#open-source', label: 'Open source' },
    { href: '#contact', label: 'Contact' },
  ]

  const socialLinks = [
    {
      href: 'https://linkedin.com/in/merph-dev',
      label: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
          <path
            fill="currentColor"
            d="M4.98 3.5C4.98 5.16 3.64 6.5 2 6.5S-.98 5.16-.98 3.5 1.36.5 3 .5 4.98 1.84 4.98 3.5ZM.5 8.5h5v15h-5v-15ZM8.5 8.5h4.8v2.05h.07c.67-1.24 2.3-2.55 4.73-2.55 5.06 0 6 3.33 6 7.66v8.34h-5v-7.39c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.83 1.92-2.83 3.9v7.5h-5v-15Z"
          />
        </svg>
      ),
    },
    {
      href: 'https://github.com/FullStackFlow-dev',
      label: 'GitHub',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
          <path
            fill="currentColor"
            d="M12 .5a12 12 0 0 0-3.8 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.73-1.32-1.73-1.08-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.06 1.82 2.78 1.3 3.46 1 .11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.16 0 0 1.02-.33 3.35 1.23a11.58 11.58 0 0 1 6.1 0c2.32-1.56 3.34-1.23 3.34-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.92 1.24 3.24 0 4.63-2.8 5.65-5.48 5.95.43.38.82 1.12.82 2.25v3.34c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z"
          />
        </svg>
      ),
    },
    {
      href: 'mailto:merphy97@gmail.com',
      label: 'Mail',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
          <path
            fill="currentColor"
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Zm0 2v.01l8 5 8-5V6H4Zm0 12h16V8.24l-8 5-8-5V18Z"
          />
        </svg>
      ),
    },
    {
      href: 'https://x.com/',
      label: 'X',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
          <path
            fill="currentColor"
            d="M3 2.5h4.7l4.1 5.7 4.8-5.7H21l-6.8 7.9 7.3 10.1h-4.7l-4.7-6.3-5.4 6.3H3.1l7.3-8.3L3 2.5Zm4.1 2.2 9.2 12.5h1.7L8.9 4.7H7.1Z"
          />
        </svg>
      ),
    },
    {
      href: 'https://instagram.com/',
      label: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
          <path
            fill="currentColor"
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm6.2-2.7a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2Z"
          />
        </svg>
      ),
    },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-dark/75 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center gap-6">
        {/* Logo */}
        <a href="#" className="font-mono text-sm text-accent tracking-wider">
          merphdev
        </a>
        
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
        
        {/* Liens de navigation */}
        <ul className={`
          fixed md:relative top-[70px] md:top-0 left-0 right-0
          md:flex md:gap-8
          bg-bg-dark/98 md:bg-transparent
          backdrop-blur-xl md:backdrop-blur-none
          flex-col md:flex-row items-center
          py-8 md:py-0 gap-6 md:gap-8
          border-b md:border-b-0 border-border
          transition-all duration-300
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full md:translate-y-0 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto'}
        `}>
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
          <li className="md:hidden flex items-center gap-4 pt-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-text-muted hover:text-accent transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </li>
          <li className="md:hidden">
            <a href="#contact" onClick={closeMenu} className="btn-primary text-xs px-5 py-2">
              Connectons-nous
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-text-muted hover:text-accent transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn-primary text-xs px-5 py-2">
            Connectons-nous
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
