import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home',         href: '#home'         },
  { label: 'About',        href: '#about'        },
  { label: 'Services',     href: '#Service'      },
  { label: 'Projects',     href: '#Project'      },
  { label: 'Testimonials', href: '#Testimonials' },
  { label: 'Contact',      href: '#ContactUs'    },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeHref, setActiveHref] = useState('#home')

  /* Navbar background on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Active section detection */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveHref('#' + e.target.id)
        })
      },
      { threshold: 0.35 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const smoothScroll = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between
          px-[5%] transition-all duration-400
          ${scrolled
            ? 'py-4 bg-[rgba(10,10,10,0.96)] backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.55)]'
            : 'py-[1.4rem]'
          }`}
      >
        {/* Logo */}
        <div>
          <span className="block font-display text-[1.3rem] font-medium text-cream leading-tight tracking-[0.03em]">
            Shri Ganesh
          </span>
          <span className="block text-[0.6rem] tracking-[0.22em] uppercase text-gold">
            Interiors &amp; Carpentry
          </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href)}
                className={`nav-link ${activeHref === link.href ? 'active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919594742209"
            className="btn btn-gold hidden md:inline-flex"
          >
            Get a Quote
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 bg-cream transition-all duration-300 ${menuOpen ? 'h-[1.5px] translate-y-[6.5px] rotate-45' : 'h-[1.5px]'}`} />
            <span className={`block w-6 h-[1.5px] bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 bg-cream transition-all duration-300 ${menuOpen ? 'h-[1.5px] -translate-y-[6.5px] -rotate-45' : 'h-[1.5px]'}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/72 z-[998] transition-opacity duration-400
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed top-0 right-0 h-screen w-[min(320px,85vw)] bg-dark2 z-[999]
          flex flex-col gap-7 pt-24 px-10 pb-12
          border-l border-gold/10 transition-all duration-400
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => smoothScroll(e, link.href)}
            className="font-display text-[1.6rem] font-light text-cream border-b border-white/7
                       pb-[0.9rem] hover:text-gold transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
        <div className="mt-auto">
          <p className="text-[0.78rem] text-[#888]">Call us directly</p>
          <a href="tel:+919594742209" className="text-gold font-body text-base">
            +91 9594742209
          </a>
        </div>
      </div>
    </>
  )
}
