const TESTIMONIALS = [
  {
    initials: 'RP',
    name:     'Rajesh Patel',
    role:     'Homeowner, Mira Road',
    text:     '"Shri Ganesh completely transformed our 3BHK in Mira Road. The modular kitchen and wardrobes exceeded every expectation. The team was professional throughout and delivered on time."',
  },
  {
    initials: 'SM',
    name:     'Sonal Mehta',
    role:     'Business Owner, Navi Mumbai',
    text:     '"We hired them for our office renovation in Navi Mumbai. The reception area and workstations are stunning. Clients regularly compliment the space — best investment for our business image."',
  },
  {
    initials: 'AK',
    name:     'Anjali & Karan Shah',
    role:     'Homeowners, Thane',
    text:     '"The walk-in wardrobe they built for our new home is gorgeous. Quality wood, flawless finish, delivered on schedule. We\'ve already referred three friends — we cannot recommend them enough!"',
  },
  {
    initials: 'VD',
    name:     'Vikram Desai',
    role:     'Architect, Mumbai',
    text:     '"Professional, punctual, and incredibly talented. They handled our complete home renovation from design to delivery. The woodwork detail is remarkable — our home is now the envy of every guest."',
  },
]

const StarRow = () => (
  <div className="flex gap-[3px] mb-5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="w-[13px] h-[13px] fill-gold" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
)

const delays = ['delay-1', 'delay-2', 'delay-3', 'delay-4']

export default function Testimonials() {
  return (
    <section id="Testimonials" className="py-32 px-[8%] bg-dark2 relative overflow-hidden">
      {/* Decorative quote mark */}
      <div
        className="absolute top-8 left-[4%] font-display text-[20rem] leading-none
                   text-gold/[0.033] pointer-events-none select-none"
        aria-hidden="true"
      >
        "
      </div>

      {/* Header */}
      <div className="reveal text-center max-w-[560px] mx-auto">
        <div className="section-label">Client Stories</div>
        <div className="divider mx-auto" />
        <h2 className="section-title">
          What Our <em>Clients</em> Say
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.name}
            className={`bg-dark3 border border-white/5 p-10 transition-all duration-300
                        hover:border-gold/25 hover:-translate-y-1 reveal ${delays[i]}`}
          >
            <StarRow />
            <p className="font-display text-[1.03rem] italic font-light text-[#BBBBBB] leading-[1.8] mb-7">
              {t.text}
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center
                           font-display text-[1.05rem] font-semibold text-[#0A0A0A] flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #9E7A28, #C9A84C)' }}
              >
                {t.initials}
              </div>
              <div>
                <div className="text-[0.85rem] font-medium text-cream">{t.name}</div>
                <div className="text-[0.7rem] text-gold tracking-[0.08em] mt-0.5">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
