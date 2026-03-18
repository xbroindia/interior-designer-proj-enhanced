import pjImg       from '../assets/projects-image/pj-img.jpg'
import project1    from '../assets/projects-image/project1.jpg'
import project2    from '../assets/projects-image/project2.jpg'
import project3    from '../assets/projects-image/project3.jpg'
import renovationImg from '../assets/images/renovation.jpg'

const PROJECTS = [
  {
    src:  pjImg,
    alt:  'Signature project',
    tag:  'Signature Work',
    name: 'Luxury Full-Home Interior',
    fb:   'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
    span: 'lg:[grid-column:1/6] lg:[grid-row:1/3]',
  },
  {
    src:  project1,
    alt:  'Project 1',
    tag:  'Carpentry',
    name: 'Modular Kitchen — Mira Road',
    fb:   'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80',
    span: 'lg:[grid-column:6/9] lg:[grid-row:1/2]',
  },
  {
    src:  project2,
    alt:  'Project 2',
    tag:  'Residential',
    name: 'Master Bedroom Suite',
    fb:   'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=500&q=80',
    span: 'lg:[grid-column:9/13] lg:[grid-row:1/2]',
  },
  {
    src:  project3,
    alt:  'Project 3',
    tag:  'Commercial',
    name: 'Corporate Office — Thane',
    fb:   'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
    span: 'lg:[grid-column:6/10] lg:[grid-row:2/3]',
  },
  {
    src:  renovationImg,
    alt:  'Renovation project',
    tag:  'Renovation',
    name: 'Full-Home Makeover',
    fb:   'https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&q=80',
    span: 'lg:[grid-column:10/13] lg:[grid-row:2/3]',
  },
]

const delays = ['', 'delay-1', 'delay-2', 'delay-3', 'delay-4']

export default function Projects() {
  const smoothScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section id="Project" className="py-32 px-[8%]">

      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-8 mb-12 sm:flex-row sm:items-end">
        <div className="reveal">
          <div className="section-label">Portfolio</div>
          <div className="divider" />
          <h2 className="section-title">Featured <em>Projects</em></h2>
        </div>
        <a
          href="#ContactUs"
          onClick={(e) => smoothScroll(e, '#ContactUs')}
          className="btn btn-outline reveal delay-1"
        >
          Start Your Project →
        </a>
      </div>

      {/* Mosaic grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:[grid-template-columns:repeat(12,1fr)] gap-[2px]"
        style={{ '--lg-rows': '300px 300px' }}
      >
        <style>{`
          @media (min-width: 1024px) {
            .proj-mosaic { grid-template-rows: 300px 300px; }
          }
        `}</style>

        {PROJECTS.map((p, i) => (
          <div
            key={p.name}
            className={`proj-item relative overflow-hidden bg-dark3 h-[240px] sm:h-[260px] lg:h-auto ${p.span} reveal ${delays[i]}`}
          >
            <img
              src={p.src}
              alt={p.alt}
              className="object-cover w-full h-full transition-transform duration-700 proj-img"
              onError={(e) => { e.target.src = p.fb }}
            />
            <div className="proj-overlay">
              <div className="proj-info">
                <div className="text-[0.62rem] tracking-[0.22em] uppercase text-gold mb-1">{p.tag}</div>
                <div className="font-display text-[1.05rem] text-cream">{p.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Apply mosaic class */}
      <style>{`
        @media (min-width: 1024px) {
          #Project .grid { grid-template-rows: 300px 300px; }
        }
      `}</style>
    </section>
  )
}
