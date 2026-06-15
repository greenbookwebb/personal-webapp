import { useEffect, useState } from 'react'
import './App.css'

const NAV = ['Experience', 'Work', 'Skills', 'Contact']
const NAV_IDS = NAV.map((item) => item.toLowerCase())

function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}

const PILLS = [
  [
    { label: 'Product Lead', variant: 'orange' },
    { label: 'Technical PM', variant: 'teal' },
    { label: 'Builder', variant: 'yellow' },
    { label: 'Web3', variant: 'blue' },
    { label: 'DeFi', variant: 'orange' },
  ],
  [
    { label: 'Credentials', variant: 'teal' },
    { label: 'Python / APIs', variant: 'yellow' },
    { label: 'Infrastructure', variant: 'blue' },
  ],
]

const EXPERIENCE = [
  {
    variant: 'orange',
    title: 'Technical Product Manager',
    company: 'Open Campus / EDUChain',
    dates: 'Jul 2024 – Present',
    location: 'Remote / Australia',
    tag: 'Current',
    bullets: [
      'Lead product across OC Hub, EDUChain tooling, credential experiences, and partner mini-apps',
      'Define PRDs, user flows, API specs, technical requirements, and launch plans',
      'Shape India digital credentials initiative including OCID, Aadhaar KYC, and verifiable credentials',
      'Drive infrastructure migration planning across RaaS vendors, RPCs, subgraphs, and bridge UX',
      'Own rewards/incentive specs including points systems, Merkle claims, and campaign mechanics',
    ],
  },
  {
    variant: 'teal',
    title: 'Financial Engineering Lead / Product Lead',
    company: 'Tracer DAO / Mycelium',
    dates: 'Aug 2020 – Nov 2022',
    location: 'Brisbane, Australia',
    tag: 'DeFi',
    bullets: [
      'Co-designed Perpetual Pools v1/v2 and Perpetual Swaps — derivatives, liquidity mechanics, AMMs',
      'Helped scale Perpetual Pools to more than US$700M in trading volume',
      'Co-owned protocol tokenomics including liquidity mining, public auctions, and treasury allocation',
      'Managed a team of five during major market volatility and growth from ~10 to 50 people',
      'Worked with VC firms, market makers, and prop trading firms on fundraising and liquidity',
    ],
  },
  {
    variant: 'blue',
    title: 'Research Assistant / Casual Academic',
    company: 'University of Queensland',
    dates: '2019 – 2020',
    location: 'Brisbane, Australia',
    tag: 'Research',
    bullets: [
      'Co-authored research on corporate climate-transition risk',
      'Taught introductory finance and financial modelling including R and Python coursework',
    ],
  },
  {
    variant: 'yellow',
    title: 'Commercial Analyst',
    company: 'Flight Centre',
    dates: '2016 – 2018',
    location: 'Brisbane, Australia',
    tag: 'Travel',
    bullets: [
      'Pricing analyst for online travel business, helped build operating infrastructure',
      'Contributed to growth from ~A$100k/day to A$1m/day in revenue',
    ],
  },
]

const WORK = [
  {
    variant: 'orange',
    type: 'PRODUCT STRATEGY',
    num: '01',
    slug: 'credential-infrastructure',
    title: 'Government-scale Credential Infrastructure',
    desc: 'Built product specs for national credential verification — OCID, Aadhaar KYC handoffs, verifiable credential states, and employer verification flows.',
    tags: [
      { label: 'Product Strategy', variant: 'orange' },
      { label: 'APIs', variant: 'blue' },
      { label: 'Government', variant: 'teal' },
      { label: 'Compliance', variant: 'yellow' },
    ],
  },
  {
    variant: 'teal',
    type: 'INFRA OPS',
    num: '02',
    slug: 'blockchain-infra-ops',
    title: 'Blockchain Infrastructure Operations',
    desc: 'Drove migration planning across RaaS vendors, RPCs, subgraphs/indexing, Safe multisig, bridge UX, and oracle dependencies.',
    tags: [
      { label: 'Blockchain', variant: 'teal' },
      { label: 'Infra Ops', variant: 'blue' },
      { label: 'DevOps', variant: 'yellow' },
      { label: 'Monitoring', variant: 'orange' },
    ],
  },
  {
    variant: 'blue',
    type: 'PRODUCT DESIGN',
    num: '03',
    slug: 'oc-hub',
    title: 'OC Hub / Student Engagement Platform',
    desc: 'Shaped OC Hub v1 around lean rollout — Achievements, Apps, Widgets, onboarding, analytics, referral loops, and partner mini-app discovery.',
    tags: [
      { label: 'UX', variant: 'blue' },
      { label: 'Platform', variant: 'orange' },
      { label: 'Engagement', variant: 'teal' },
      { label: 'Education', variant: 'yellow' },
    ],
  },
  {
    variant: 'orange',
    type: 'DEFI PROTOCOL DESIGN',
    num: '04',
    slug: 'perpetual-pools',
    title: 'Perpetual Pools & DeFi Derivatives',
    desc: 'Co-designed Tracer Perpetual Pools v1/v2 and Perpetual Swaps — derivatives mechanics, AMM behaviour, liquidity mining, and tokenomics.',
    tags: [
      { label: 'DeFi', variant: 'orange' },
      { label: 'Smart Contracts', variant: 'teal' },
      { label: 'Tokenomics', variant: 'yellow' },
      { label: 'AMMs', variant: 'blue' },
    ],
  },
  {
    variant: 'yellow',
    type: 'DEVELOPER TOOLS',
    num: '05',
    slug: 'internal-tooling',
    title: 'Internal Product Tooling & Prototypes',
    desc: 'Python scripts, GraphQL/REST APIs, Goldsky/Pyth data flows, Next.js/FastAPI patterns, wallet analytics, and on-chain data analysis.',
    tags: [
      { label: 'Python', variant: 'yellow' },
      { label: 'APIs', variant: 'blue' },
      { label: 'Automation', variant: 'orange' },
      { label: 'Analytics', variant: 'teal' },
    ],
  },
]

const SKILLS = [
  {
    variant: 'orange',
    title: 'PRODUCT & STRATEGY',
    items: [
      'Product Roadmapping & PRDs',
      'User Flows & Requirements',
      'Stakeholder Management',
      'Go-to-Market Strategy',
      'Analytics & Instrumentation',
      'Agile / Scrum',
    ],
  },
  {
    variant: 'teal',
    title: 'LANGUAGES & FRAMEWORKS',
    items: [
      'Python / FastAPI',
      'React / Next.js',
      'REST & GraphQL APIs',
      'Solidity / Smart Contracts',
      'SQL / PostgreSQL',
      'R (statistical modelling)',
    ],
  },
  {
    variant: 'blue',
    title: 'INFRASTRUCTURE & TOOLS',
    items: [
      'Docker & CI/CD',
      'AWS / GCP / Vercel',
      'Goldsky / Pyth / Subgraphs',
      'Supabase / Cloudflare',
      'Grafana / Monitoring',
      'GitHub / GitLab',
    ],
  },
  {
    variant: 'yellow',
    title: 'WEB3 & DOMAINS',
    items: [
      'DeFi / AMMs / Derivatives',
      'Rollups / L2 Infrastructure',
      'Digital Credentials / SSI',
      'Tokenomics & Incentive Design',
      'Bridge & Oracle Systems',
      'EdTech & Engagement',
    ],
  },
]

const EDU_TAGS = [
  { label: 'Finance', variant: 'orange' },
  { label: 'Economics', variant: 'teal' },
  { label: 'ESG Research', variant: 'yellow' },
  { label: 'Statistical Modelling', variant: 'blue' },
]

const CONTACT_LINKS = [
  { label: 'GITHUB', value: 'github.com/greenbookwebb' },
  { label: 'LOCATION', value: 'Sydney, Australia' },
]

function Tag({ label, variant }) {
  return <span className={`tag tag--${variant}`}>{label}</span>
}

function SectionLabel({ children, variant = 'orange' }) {
  return (
    <div className="section-label">
      <span className={`section-label__line section-label__line--${variant}`} />
      <span className={`section-label__text section-label__text--${variant}`}>
        {children}
      </span>
    </div>
  )
}

function Header() {
  const active = useActiveSection(NAV_IDS)

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__logo">
          Lachlan Webb
        </a>
        <nav className="nav__links">
          {NAV.map((item) => {
            const id = item.toLowerCase()
            return (
              <a
                key={item}
                href={`#${id}`}
                className={active === id ? 'is-active' : ''}
              >
                {item}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__pills">
        {PILLS.map((row, i) => (
          <div className="hero__pill-row" key={i}>
            {row.map((p) => (
              <Tag key={p.label} {...p} />
            ))}
          </div>
        ))}
      </div>

      <span className="hero__accent" />

      <h1 className="hero__headline">
        Hi, I&apos;m Lachlan — I build products where finance, Web3, and
        infrastructure meet.
      </h1>

      <p className="hero__subtitle">
        A technical product manager who&apos;s as comfortable in a PRD as in a
        terminal. I care about getting the details right — protocol mechanics,
        API specs, credential rails — and I apply that to everything I ship,
        from DeFi derivatives at Tracer to credential systems at Open Campus /
        EDUChain.
      </p>

      <span className="hero__accent" />

      <div className="hero__meta">
        <span>Sydney, Australia</span>
        <span>·</span>
        <span>Open to opportunities</span>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section experience" id="experience">
      <SectionLabel>EXPERIENCE</SectionLabel>
      <div className="experience__entries">
        {EXPERIENCE.map((job, i) => (
          <article className="entry" key={job.title}>
            <div className="entry__main">
              <div className="entry__left">
                <span className={`entry__bar entry__bar--${job.variant}`} />
                <div className="entry__meta">
                  <h3 className="entry__title">{job.title}</h3>
                  <span className="entry__company">{job.company}</span>
                  <span className="entry__sub">{job.dates}</span>
                  <span className="entry__sub">{job.location}</span>
                  <span className={`entry__tag tag--${job.variant}`}>
                    {job.tag}
                  </span>
                </div>
              </div>
              <ul className="entry__bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            {i < EXPERIENCE.length - 1 && (
              <span className={`entry__divider entry__divider--${job.variant}`} />
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

function Work() {
  return (
    <section className="section work" id="work">
      <SectionLabel>SELECTED WORK</SectionLabel>
      <div className="work__grid">
        {WORK.map((card) => (
          <article
            className={`work-card work-card--${card.variant}`}
            key={card.num}
          >
            <div className="work-card__top">
              <span className="work-card__type">{card.type}</span>
              <span className="work-card__num">{card.num}</span>
            </div>
            <h3 className="work-card__title">{card.title}</h3>
            <p className="work-card__desc">{card.desc}</p>
            <div className="work-card__tags">
              {card.tags.map((t) => (
                <Tag key={t.label} {...t} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section skills" id="skills">
      <SectionLabel variant="teal">TECHNICAL TOOLKIT</SectionLabel>
      <h2 className="skills__intro">
        Tools, languages, and domains I work across daily.
      </h2>
      <div className="skills__grid">
        {SKILLS.map((col) => (
          <article
            className={`skill-card skill-card--${col.variant}`}
            key={col.title}
          >
            <span className={`skill-card__pill tag--${col.variant}`}>
              {col.title}
            </span>
            <span className="skill-card__divider" />
            <ul className="skill-card__items">
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section education">
      <SectionLabel>EDUCATION</SectionLabel>
      <div className="education__content">
        <div className="education__left">
          <h3 className="education__degree">
            Bachelor of Advanced Finance and Economics (Honours)
          </h3>
          <span className="education__university">University of Queensland</span>
          <span className="education__date">
            2016 — 2019 &nbsp;·&nbsp; Brisbane, Australia
          </span>
        </div>
        <div className="education__card">
          <span className="education__thesis-label">HONOURS THESIS</span>
          <p className="education__thesis">
            A review of the ESG literature and its effect on alpha.
          </p>
          <div className="education__tags">
            {EDU_TAGS.map((t) => (
              <Tag key={t.label} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__top">
          <span className="contact__label">GET IN TOUCH</span>
          <h2 className="contact__headline">
            Let&apos;s build something together.
          </h2>
          <p className="contact__desc">
            Open to Technical PM roles, advisory work, and interesting product
            challenges in Web3, infrastructure, credentials, and DeFi.
          </p>
        </div>

        <div className="contact__email-row">
          <a className="contact__email" href="mailto:lachlanwebb123@gmail.com">
            lachlanwebb123@gmail.com
          </a>
          <span className="contact__email-arrow">Say hello →</span>
        </div>

        <div className="contact__links">
          {CONTACT_LINKS.map((c) => (
            <div className="contact__link" key={c.label}>
              <span className="contact__link-label">{c.label}</span>
              <span className="contact__link-value">{c.value}</span>
            </div>
          ))}
        </div>

        <span className="contact__divider" />

        <div className="contact__footer">
          <span>© 2025 Lachlan Webb</span>
          <span>Designed with intention.</span>
        </div>
      </div>
    </section>
  )
}

function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const els = document.querySelectorAll('.hero, .section')
    els.forEach((el) => el.classList.add('reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Work />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App
