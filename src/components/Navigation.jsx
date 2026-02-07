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
      href: 'https://x.com/MMademba67105',
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
      href: 'https://discord.com/channels/974519864045756446/1046312630626820187',
      label: 'Discord',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
          <path
            fill="currentColor"
            d="M19.54 3.43A18.1 18.1 0 0 0 15.55 2a12.3 12.3 0 0 0-.6 1.26 16.5 16.5 0 0 0-4.9 0A12.3 12.3 0 0 0 9.45 2a18.1 18.1 0 0 0-4 1.43C3.47 6.44 2.88 9.4 3.07 12.33a18.4 18.4 0 0 0 5.64 2.88 13.5 13.5 0 0 0 1.2-1.96 11.3 11.3 0 0 1-1.89-.9c.16-.12.32-.25.47-.38a13.3 13.3 0 0 0 11.02 0c.15.13.31.26.47.38-.6.35-1.23.66-1.9.9a13.5 13.5 0 0 0 1.2 1.96 18.4 18.4 0 0 0 5.64-2.88c.26-3.74-.45-6.67-2.38-8.9ZM9.7 11.75c-.83 0-1.5-.76-1.5-1.7s.66-1.7 1.5-1.7 1.5.76 1.5 1.7-.67 1.7-1.5 1.7Zm4.6 0c-.83 0-1.5-.76-1.5-1.7s.66-1.7 1.5-1.7 1.5.76 1.5 1.7-.66 1.7-1.5 1.7Z"
          />
        </svg>
      ),
    },
    {
      href: 'https://m.facebook.com/Merph-dev',
      label: 'Facebook',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
          <path
            fill="currentColor"
            d="M13.5 9.5H16l-.4 2.9h-2.1V22h-3.1v-9.6H8.6V9.5h1.8V7.8c0-2.5 1.5-3.8 3.8-3.8 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6v1.2Z"
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
