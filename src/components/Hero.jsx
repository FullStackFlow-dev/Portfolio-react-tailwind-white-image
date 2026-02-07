/**
 * HERO COMPONENT
 * Section d'accueil avec nom, description et CTA
 * 
 * Ce composant démontre :
 * - Comment utiliser Tailwind CSS dans React
 * - Comment gérer les événements (onClick)
 * - Comment structurer un composant
 * - Comment ajouter une image de profil
 */

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 pt-28 pb-16 relative overflow-hidden">
      {/* Arrière-plan inspiré du moodboard (sans image binaire) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f1f] via-[#111827] to-[#0f172a]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" aria-hidden="true" />

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 relative z-10">
        {/* Cadre photo */}
        <div className="w-[360px] h-[450px] rounded-2xl bg-gradient-to-br from-accent/30 to-accent/5 border border-accent/50 shadow-[0_0_40px_rgba(244,63,94,0.35)] overflow-hidden">
          <img
            src="/profile-photo.svg"
            alt="Photo de Merphy Mademba"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          {/* Badge "Disponible" */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-4 py-2 text-xs text-accent font-mono mb-6 animate-fade-in-down">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
            Disponible — Dakar, Sénégal
          </div>

          {/* Nom principal */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Merphy
            <br />
            <em className="text-accent">Mademba</em>
          </h1>

          {/* Description */}
          <p className="text-text-muted text-base max-w-xl font-light mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Développeur Full Stack passionné par la cybersécurité, l'ingénierie de données et l'intelligence artificielle. Je
            conçois des produits fiables qui transforment des besoins métiers en expériences digitales solides.
          </p>

          {/* Proposition de valeur */}
          <div className="grid gap-3 md:grid-cols-3 mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {[
              {
                title: 'Architecture scalable',
                text: 'Stacks modernes, code propre, performance mesurable.',
              },
              {
                title: 'Sécurité by design',
                text: 'Threat modeling, hardening API, bonnes pratiques OWASP.',
              },
              {
                title: 'Delivery rapide',
                text: 'Prototypage → CI/CD → production fiable.',
              },
            ].map((item) => (
              <div key={item.title} className="card text-left">
                <h3 className="font-mono text-xs text-accent uppercase tracking-wider mb-2">{item.title}</h3>
                <p className="text-xs text-text-muted">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Tags de compétences */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-11 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {['Full Stack', 'Cybersécurité', 'DevOps', 'Data Engineering', 'IA / ML', 'Linux'].map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs text-text-muted bg-bg-card border border-border px-3 py-1.5 rounded"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {/* Bouton principal */}
            <a href="#projects" className="btn-primary">
              Voir mes projets →
            </a>

            {/* Bouton CV */}
            <a
              href="mailto:merphy97@gmail.com?subject=Demande%20de%20CV"
              className="btn-secondary"
            >
              ⬇ Demander mon CV
            </a>
          </div>

          {/* Note sous les boutons */}
          <span className="font-mono text-xs text-text-muted mt-3 block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            // Disponible pour missions freelance & collaborations
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
