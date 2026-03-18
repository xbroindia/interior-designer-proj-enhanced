import carpenterImg    from '../assets/images/carpenter.jpg'
import interiorImg     from '../assets/images/interior-design.jpg'
import consultationImg from '../assets/images/consultation.jpg'
import officeImg       from '../assets/images/pexels-heyho-7195545.jpg'
import renovationImg   from '../assets/images/renovation.jpg'

const SERVICES = [
  {
    num:   '01',
    title: 'Custom Carpentry',
    desc:  'Bespoke woodwork solutions — from wardrobes and TV units to modular kitchens — crafted with precision and premium materials tailored to your space.',
    img:   carpenterImg,
    alt:   'Custom Carpentry',
    fb:    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  },
  {
    num:   '02',
    title: 'Interior Design',
    desc:  'Transforming spaces with sophisticated design concepts that beautifully reflect your personal style, elevate comfort, and maximise every square foot.',
    img:   interiorImg,
    alt:   'Interior Design',
    fb:    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
  },
  {
    num:   '03',
    title: 'Design Consultation',
    desc:  'Expert, personalised advice to guide your project from initial concept to flawless completion — ensuring every detail aligns with your goals and budget.',
    img:   consultationImg,
    alt:   'Design Consultation',
    fb:    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
  {
    num:   '04',
    title: 'Office & Commercial Woodwork',
    desc:  'Ergonomic, custom office furniture including workstations, reception desks, and conference tables — durable aesthetics built for modern workplaces.',
    img:   officeImg,
    alt:   'Office Furniture',
    fb:    'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=600&q=80',
  },
  {
    num:   '05',
    title: 'Home Makeovers & Renovations',
    desc:  'From single-room refreshes to complete home transformations — we bring your vision to life with expert craftsmanship, quality materials, and premium finishes.',
    img:   renovationImg,
    alt:   'Home Renovation',
    fb:    'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80',
  },
]

const delays = ['delay-1', 'delay-2', 'delay-3', 'delay-1', 'delay-2']

export default function Services() {
  return (
    <section id="Service" className="py-32 px-[8%] bg-dark2">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 mb-16">
        <div className="reveal">
          <div className="section-label">What We Offer</div>
          <div className="divider" />
          <h2 className="section-title">
            Our <em>Signature</em><br />Services
          </h2>
        </div>
        <p className="reveal delay-1 max-w-xs text-[#888] text-[0.87rem] leading-[1.8]">
          Premium craftsmanship and thoughtful design for every space — residential,
          commercial, and beyond.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid gap-[1.5px] bg-white/[0.04]"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
      >
        {SERVICES.map((svc, i) => (
          <div
            key={svc.num}
            className={`svc-card bg-dark2 p-10 transition-colors duration-300 hover:bg-gold/[0.04] reveal ${delays[i]}`}
          >
            {/* Image */}
            <div className="h-[200px] overflow-hidden mb-6">
              <img
                src={svc.img}
                alt={svc.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 svc-img"
                onError={(e) => { e.target.src = svc.fb }}
              />
            </div>
            <div className="font-display text-[0.72rem] text-gold tracking-[0.15em] mb-2">{svc.num}</div>
            <h3 className="font-display text-[1.35rem] font-normal text-cream mb-3 leading-[1.3]">
              {svc.title}
            </h3>
            <p className="text-[0.84rem] text-[#888] leading-[1.8]">{svc.desc}</p>
            <div className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.12em] uppercase text-gold mt-5
                            transition-all duration-300 svc-arrow">
              Explore Service →
            </div>
          </div>
        ))}
      </div>

      {/* Scoped hover styles via a style tag trick — handled in CSS */}
      <style>{`
        .svc-card:hover .svc-img { transform: scale(1.05); }
        .svc-card:hover .svc-arrow { gap: 0.85rem; }
      `}</style>
    </section>
  )
}
