import heroBg    from '../assets/images/background.jpg'
import heroVideo from '../assets/video/5384976-uhd_4096_2160_30fps.mp4'

export default function Hero() {
  const smoothScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        poster={heroBg}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.52) 50%, rgba(0,0,0,0.78) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-[2] px-[8%] max-w-[820px]">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 text-[0.67rem] tracking-[0.26em] uppercase text-gold
                        mb-6 opacity-0 animate-fade-up-1 hero-badge-line">
          Premium Interior Design Studio — Mumbai
        </div>

        {/* Heading */}
        <h1
          className="font-display font-light leading-[1.1] text-cream mb-6
                     opacity-0 animate-fade-up-2"
          style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)' }}
        >
          Transform Your Space<br />
          <em className="not-italic italic text-gold-light block">Into Luxury Living</em>
        </h1>

        {/* Subheading */}
        <p className="text-base font-light text-cream/70 max-w-[520px] mb-10 leading-[1.8]
                      opacity-0 animate-fade-up-3">
          Crafting exceptional interiors and bespoke carpentry that blend artistry with
          functionality — tailored to your unique vision, built to last a lifetime.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up-4">
          <a href="#Project"   onClick={(e) => smoothScroll(e, '#Project')}   className="btn btn-gold">View Our Projects</a>
          <a href="#ContactUs" onClick={(e) => smoothScroll(e, '#ContactUs')} className="btn btn-outline">Contact Us</a>
        </div>
      </div>

      {/* Stats — desktop only */}
      <div className="absolute bottom-12 right-[8%] z-[2] hidden md:flex gap-12
                      opacity-0 animate-fade-up-5">
        {[
          { num: '10+',  lbl: 'Years Experience'   },
          { num: '500+', lbl: 'Projects Completed'  },
          { num: '100%', lbl: 'Client Satisfaction' },
        ].map((s) => (
          <div key={s.lbl} className="text-center">
            <div className="font-display text-[2.2rem] font-light text-gold-light leading-none">{s.num}</div>
            <div className="text-[0.63rem] tracking-[0.15em] uppercase text-cream/50 mt-1">{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-[8%] z-[2] hidden sm:flex items-center gap-3
                      text-[0.63rem] tracking-[0.2em] uppercase text-cream/40
                      opacity-0 animate-fade-up-6">
        <div className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  )
}
