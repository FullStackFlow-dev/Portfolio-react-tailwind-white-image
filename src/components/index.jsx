import { useState } from 'react'

// ═══════════════════════════════════════════════════════════════
// COMPOSANTS DU PORTFOLIO
// Chaque section est personnalisée pour Merphy Mademba
// ═══════════════════════════════════════════════════════════════

/**
 * ABOUT COMPONENT
 * Section "À propos" avec texte et informations
 */
export function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-8 py-24">
      <div className="section-label">// À propos</div>
      <h2 className="section-title">Qui suis-je ?</h2>
      <div className="divider" />
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-text-muted">
          <p>
            Je m'appelle <span className="text-text-primary">Merphy Mademba</span>, développeur full stack basé à Dakar.
            J'aime construire des produits digitaux solides, avec un focus sur la sécurité, la performance et l'expérience
            utilisateur. Mon terrain de jeu : React, Node.js, DevOps et data engineering.
          </p>
          <p>
            Mon approche combine la rigueur d'un ingénieur logiciel et la curiosité d'un data builder. Je m'investis dans
            chaque projet comme un partenaire : compréhension du besoin, prototypage rapide et déploiement fiable.
          </p>
        </div>
        <div className="card">
          <h3 className="font-mono text-xs text-accent uppercase tracking-wider mb-4">Focus actuel</h3>
          <ul className="space-y-3 text-sm text-text-muted">
            <li>• Applications web & API sécurisées</li>
            <li>• Pipelines data & observabilité</li>
            <li>• Automatisation DevOps & CI/CD</li>
            <li>• IA appliquée à l'analyse métier</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

/**
 * SKILLS COMPONENT
 * Grille de compétences avec cartes
 */
export function Skills() {
  const skillGroups = [
    {
      icon: '🌐',
      title: 'Développement Web',
      skills: ['React', 'TypeScript', 'Node.js', 'Express', 'REST APIs'],
    },
    {
      icon: '🔐',
      title: 'Cybersécurité',
      skills: ['OWASP', 'Sécurisation API', 'Audit applicatif', 'Zero Trust'],
    },
    {
      icon: '⚙️',
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Git', 'GitHub', 'GitHub Actions', 'Linux', 'Nginx', 'Vercel/Netlify'],
    },
    {
      icon: '📊',
      title: 'Data Engineering',
      skills: ['Python', 'ETL', 'SQL', 'Airflow', 'Data Viz'],
    },
    {
      icon: '🧠',
      title: 'IA / ML',
      skills: ['NLP', 'Recommandation', 'Prompting', 'MLOps (bases)'],
    },
    {
      icon: '🎯',
      title: 'Soft Skills',
      skills: ['Communication', 'Gestion de projet', 'Mentorat', 'Veille tech'],
    },
  ]

  return (
    <section id="skills" className="max-w-6xl mx-auto px-8 py-24">
      <div className="section-label">// Compétences</div>
      <h2 className="section-title">Ce que je maîtrise</h2>
      <div className="divider" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <div key={group.title} className="card">
            <div className="text-2xl mb-3">{group.icon}</div>
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-3">
              {group.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs text-text-muted bg-white/5 border border-border px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/**
 * CERTIFICATIONS COMPONENT
 * Liste des certificats obtenus
 */
export function Certifications() {
  const certifications = [
    {
      icon: '🤖',
      title: 'AI Fluency',
      issuer: 'Anthropic',
      description: "Fondations IA, prompts avancés et cas d'usage business.",
    },
    {
      icon: '🛡️',
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy',
      description: 'Bases de la cybersécurité, gestion des risques et bonnes pratiques.',
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      issuer: 'Google Cloud Skills Boost',
      description: 'Déploiements cloud, CI/CD et automatisation des environnements.',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      issuer: 'IBM SkillsBuild',
      description: 'Analyse de données, storytelling et dashboards interactifs.',
    },
  ]

  return (
    <section id="certs" className="max-w-6xl mx-auto px-8 py-24">
      <div className="section-label">// Certificats</div>
      <h2 className="section-title">Certifications</h2>
      <div className="divider" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certifications.map((cert) => (
          <div key={cert.title} className="card flex gap-5">
            <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center text-xl flex-shrink-0">
              {cert.icon}
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-1">{cert.title}</h4>
              <p className="font-mono text-xs text-accent mb-2">{cert.issuer}</p>
              <p className="text-xs text-text-muted">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/**
 * EDUCATION COMPONENT
 * Parcours académique avec timeline
 */
export function Education() {
  const educationItems = [
    {
      period: '2024 - Aujourd\'hui',
      title: 'Master Data & IA (en cours)',
      school: 'Université virtuelle',
      details: 'Spécialisation data engineering, ML et gouvernance de données.',
    },
    {
      period: '2021 - 2023',
      title: 'Licence Informatique',
      school: 'Université Cheikh Anta Diop',
      details: 'Développement logiciel, bases de données, réseaux et sécurité.',
    },
    {
      period: '2019 - 2021',
      title: 'DUT Génie Informatique',
      school: 'Institut de Technologie',
      details: 'Algorithmes, systèmes d\'information et web development.',
    },
  ]

  return (
    <section id="education" className="max-w-6xl mx-auto px-8 py-24">
      <div className="section-label">// Formation</div>
      <h2 className="section-title">Parcours académique</h2>
      <div className="divider" />
      <div className="space-y-5">
        {educationItems.map((item) => (
          <div key={item.title} className="card flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold">{item.title}</h4>
              <p className="text-xs text-text-muted">{item.school}</p>
              <p className="text-xs text-text-muted mt-2">{item.details}</p>
            </div>
            <span className="font-mono text-xs text-accent">{item.period}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/**
 * PROJECTS COMPONENT
 * Projets avec projet vedette
 */
export function Projects() {
  const projects = [
    {
      title: 'ArtéNova Shop',
      description:
        "Plateforme e-commerce full stack avec checkout sécurisé, gestion des stocks et back-office multi-boutiques.",
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      highlight: true,
      image: {
        src: '/portfolio-preview.svg',
        alt: 'Aperçu du projet Portfolio React Tailwind',
      },
      demo: '#contact',
      repo: 'https://github.com/FullStackFlow-dev',
    },
    {
      title: 'SecureOps Monitor',
      description:
        'Dashboard temps réel pour la surveillance des logs et alertes sécurité sur infrastructure cloud.',
      tags: ['Next.js', 'Elastic', 'Docker', 'Grafana'],
      highlight: false,
      demo: '#contact',
      repo: 'https://github.com/FullStackFlow-dev',
    },
    {
      title: 'DataPulse Pipeline',
      description:
        'Pipeline data automatisé pour nettoyer, enrichir et visualiser les KPIs marketing.',
      tags: ['Python', 'Airflow', 'PostgreSQL', 'Metabase'],
      highlight: false,
      demo: '#contact',
      repo: 'https://github.com/FullStackFlow-dev',
    },
  ]

  return (
    <section id="projects" className="max-w-6xl mx-auto px-8 py-24">
      <div className="section-label">// Projets</div>
      <h2 className="section-title">Ce que je construis</h2>
      <div className="divider" />

      {projects.map((project) => (
        <div
          key={project.title}
          className={`card ${project.highlight ? 'border-accent mb-8 relative overflow-hidden' : 'mb-5'}`}
        >
          {project.highlight && (
            <>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent" />
              <div className="inline-flex items-center gap-2 font-mono text-xs text-accent bg-accent/10 px-2 py-1 rounded mb-4">
                ⭐ Projet vedette
              </div>
            </>
          )}
          {project.image && (
            <div className="mb-5">
              <img
                src={project.image.src}
                alt={project.image.alt}
                width={360}
                height={270}
                className="w-full max-w-[360px] h-auto object-cover rounded-lg border border-border"
                />
            </div>
          )}
          <h3 className="font-display text-2xl mb-3">{project.title}</h3>
          <p className="text-text-muted text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-xs text-text-muted bg-white/5 border border-border px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a href={project.demo} className="text-xs text-accent hover:underline">
              ↗ Demander une démo
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:underline"
            >
              ↗ GitHub
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}

/**
 * OPEN SOURCE COMPONENT
 * Contributions et badges GitHub
 */
export function OpenSource() {
  const badges = [
    {
      title: 'Pull Shark',
      description: 'Pull requests mergées avec succès.',
      href: 'https://github.com/users/FullStackFlow-dev/achievements/pull-shark',
      image: 'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png',
    },
    {
      title: 'Pair Extraordinaire',
      description: 'Coauthoring sur des pull requests mergées.',
      href: 'https://github.com/users/FullStackFlow-dev/achievements/pair-extraordinaire',
      image: 'https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png',
    },
  ]

  return (
    <section id="open-source" className="max-w-6xl mx-auto px-8 py-24">
      <div className="section-label">// Open source</div>
      <h2 className="section-title">Contributions open-source</h2>
      <div className="divider" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {badges.map((badge) => (
          <a
            key={badge.title}
            href={badge.href}
            target="_blank"
            rel="noreferrer"
            className="card flex gap-5 items-center transition hover:border-accent/60"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 border border-border flex items-center justify-center">
              <img src={badge.image} alt={badge.title} className="w-12 h-12 object-contain" />
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-1">{badge.title}</h4>
              <p className="text-xs text-text-muted">{badge.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

/**
 * CONTACT COMPONENT
 * Formulaire de contact connecté à Formspree
 */
export function Contact() {
  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID
  const formAction = formspreeId ? `https://formspree.io/f/${formspreeId}` : null

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formAction) {
      setStatus({
        type: 'error',
        message: 'Ajoute VITE_FORMSPREE_ID dans .env pour activer l\'envoi.',
      })
      return
    }

    setIsSubmitting(true)
    setStatus(null)

    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message envoyé ! Je te réponds rapidement.',
        })
        form.reset()
      } else {
        setStatus({
          type: 'error',
          message: 'Erreur lors de l\'envoi. Réessaie ou écris-moi directement.',
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Erreur réseau. Vérifie ta connexion et réessaie.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-8 py-24">
      <div className="section-label">// Contact</div>
      <h2 className="section-title">Discutons</h2>
      <div className="divider" />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-4 text-text-muted">
          <p>
            Besoin d\'un partenaire tech pour un projet web, data ou cybersécurité ? Je suis disponible pour des missions
            freelance, collaborations long terme et produits digitaux ambitieux.
          </p>
          <div className="card">
            <h3 className="font-mono text-xs text-accent uppercase tracking-wider mb-3">Coordonnées directes</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Dakar, Sénégal</li>
              <li>
                ✉️{' '}
                <a href="mailto:merphy97@gmail.com" className="text-accent hover:underline">
                  merphy97@gmail.com
                </a>
              </li>
              <li>
                🔗{' '}
                <a
                  href="https://linkedin.com/in/merph-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  linkedin.com/in/merph-dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nom complet"
            required
            className="w-full bg-bg-card border border-border rounded-md px-4 py-3 text-sm text-text-primary outline-none focus:border-accent transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full bg-bg-card border border-border rounded-md px-4 py-3 text-sm text-text-primary outline-none focus:border-accent transition-colors"
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            required
            className="w-full bg-bg-card border border-border rounded-md px-4 py-3 text-sm text-text-primary outline-none focus:border-accent transition-colors"
          />
          <textarea
            name="message"
            placeholder="Message..."
            required
            rows={5}
            className="w-full bg-bg-card border border-border rounded-md px-4 py-3 text-sm text-text-primary outline-none focus:border-accent transition-colors resize-y"
          />
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer →'}
          </button>
          {status && (
            <p
              className={`text-xs font-mono ${
                status.type === 'success' ? 'text-accent' : 'text-red-400'
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

/**
 * FOOTER COMPONENT
 * Pied de page avec liens sociaux
 */
export function Footer() {
  return (
    <footer className="border-t border-border py-10 text-center">
      <div className="mb-4 font-display text-lg">Retrouvez-moi sur les réseaux</div>
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://linkedin.com/in/merph-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/FullStackFlow-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a
          href="mailto:merphy97@gmail.com"
          className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
        >
          Email
        </a>
      </div>
      <p className="font-mono text-xs text-text-muted">
        © 2025 Merphy Mademba. Tous droits réservés.
      </p>
    </footer>
  )
}

// Exports par défaut pour chaque composant
export default {
  About,
  Skills,
  Certifications,
  Education,
  Projects,
  Contact,
  Footer,
}
