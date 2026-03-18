import aboutImg from '../assets/images/about-image.png'

const STATS = [
  { n: '10+',  t: 'Years Experience' },
  { n: '500+', t: 'Projects Done'    },
  { n: '100%', t: 'Satisfaction'     },
]

export default function About() {
  const smoothScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section
      id="about"
      className="py-32 px-[8%] grid grid-cols-1 lg:grid-cols-2 gap-[6%] items-center"
    >
      {/* Image */}
      <div className="reveal-left relative">
        <img
          src={aboutImg}
          alt="Shri Ganesh Interiors"
          className="w-full h-[400px] lg:h-[600px] object-cover block"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80' }}
        />
        {/* Gold border frame */}
        <div className="absolute -top-5 -right-5 w-full h-full border border-gold/30 -z-10 pointer-events-none" />
        {/* Badge */}
        <div className="hidden sm:block absolute -bottom-5 -right-5 bg-gold text-[#0A0A0A] px-8 py-6 text-center">
          <span className="font-display text-[2.5rem] font-semibold leading-none block">10+</span>
          <span className="text-[0.62rem] tracking-[0.15em] uppercase font-medium">Years of<br />Excellence</span>
        </div>
      </div>

      {/* Text */}
      <div className="reveal-right">
        <div className="section-label">About Us</div>
        <div className="divider" />
        <h2 className="section-title">
          Crafting <em>Elegance</em><br />in Every Space
        </h2>
        <p className="text-[#BBBBBB] text-[0.94rem] leading-[1.9] mt-6">
          At Shri Ganesh Interiors, we believe exceptional spaces are born from the perfect
          marriage of vision and craftsmanship. Based in Mumbai, our studio has spent over
          a decade transforming homes and offices into extraordinary environments that reflect
          each client's unique personality.
        </p>
        <p className="text-[#888] text-[0.88rem] leading-[1.9] mt-4">
          From bespoke carpentry and modular kitchens to complete home makeovers and commercial
          interiors, every project is approached with meticulous attention to detail and an
          unwavering commitment to quality that consistently exceeds expectations.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 my-10 py-8 border-y border-white/7">
          {STATS.map((s, i) => (
            <div key={s.t} className={`text-center reveal delay-${i + 1}`}>
              <div className="font-display text-[2.2rem] font-light text-gold-light leading-none">{s.n}</div>
              <div className="text-[0.68rem] tracking-[0.15em] uppercase text-[#888] mt-1">{s.t}</div>
            </div>
          ))}
        </div>

        <a
          href="#ContactUs"
          onClick={(e) => smoothScroll(e, '#ContactUs')}
          className="btn btn-gold"
        >
          Start Your Project
        </a>
      </div>
    </section>
  )
}
