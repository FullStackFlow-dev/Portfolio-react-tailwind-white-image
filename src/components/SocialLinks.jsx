/**
 * SOCIAL LINKS COMPONENT
 * Affiche des icônes de réseaux sociaux réutilisables (header & footer).
 */
function SocialLinks({ className = '' }) {
  /**
   * Liste des réseaux sociaux et leurs URLs.
   * Les icônes sont en SVG inline pour éviter les dépendances externes.
   */
  const socials = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/merph-dev',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
          <path
            fill="currentColor"
            d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9.5 7H7v8h2.5v-8Zm-.75-3a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM18 12.5c0-2-1.07-3.25-2.83-3.25-1.28 0-2.03.7-2.33 1.2V10H10.5v8h2.5v-4.25c0-1.12.22-2.2 1.6-2.2 1.36 0 1.4 1.27 1.4 2.27V18H18v-5.5Z"
          />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: 'https://github.com/FullStackFlow-dev',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-3.16 19.48c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.36-1.18-3.36-1.18-.46-1.18-1.12-1.5-1.12-1.5-.92-.64.07-.62.07-.62 1.02.08 1.56 1.05 1.56 1.05.9 1.56 2.36 1.11 2.94.85.1-.66.35-1.1.63-1.35-2.22-.26-4.56-1.12-4.56-4.98 0-1.1.4-2 1.04-2.7-.1-.26-.45-1.3.1-2.7 0 0 .85-.28 2.78 1.03a9.5 9.5 0 0 1 5.06 0c1.92-1.3 2.77-1.03 2.77-1.03.56 1.4.2 2.44.1 2.7.65.7 1.04 1.6 1.04 2.7 0 3.87-2.35 4.72-4.58 4.97.36.31.68.92.68 1.86V21c0 .27.18.6.69.48A10 10 0 0 0 12 2Z"
          />
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:merphy97@gmail.com',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
          <path
            fill="currentColor"
            d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className={`flex items-center ${className}`}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.href.startsWith('http') ? '_blank' : undefined}
          rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={social.label}
          className="w-9 h-9 rounded-full border border-border bg-bg-card/60 text-text-muted flex items-center justify-center hover:text-accent hover:border-accent/60 transition-colors"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
