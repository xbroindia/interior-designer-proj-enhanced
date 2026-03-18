import { useState } from 'react'
import bgImg       from '../assets/images/bg-img.jpg'
import facebookImg from '../assets/social-medias-icons/facebook.png'
import instagramImg from '../assets/social-medias-icons/instagram.png'
import youtubeImg  from '../assets/social-medias-icons/youtube.png'

const CONTACT_INFO = [
  {
    icon:  '📞',
    label: 'Phone',
    content: (
      <>
        <a href="tel:+919594742209" className="text-[#BBBBBB] hover:text-gold transition-colors duration-300 block">+91 9594742209</a>
        <a href="tel:+917900139608" className="text-[#BBBBBB] hover:text-gold transition-colors duration-300 block">+91 7900139608</a>
      </>
    ),
  },
  {
    icon:  '✉️',
    label: 'Email',
    content: (
      <a href="mailto:sharmarohan9594@gmail.com" className="text-[#BBBBBB] hover:text-gold transition-colors duration-300">
        sharmarohan9594@gmail.com
      </a>
    ),
  },
  {
    icon:  '📍',
    label: 'Studio Address',
    content: (
      <span className="text-[#BBBBBB]">
        B-401, Snehal Nagari, Gaondevi Road,<br />
        Jarimari, Mata Mandir, Kashigaon,<br />
        Mira Road East, Thane — 401107
      </span>
    ),
  },
]

const SOCIAL = [
  { href: 'https://www.facebook.com/profile.php?id=61577683704152', img: facebookImg, label: 'Facebook'  },
  { href: '#',                                                        img: instagramImg, label: 'Instagram' },
  { href: '#',                                                        img: youtubeImg,  label: 'YouTube'   },
]

const SERVICES_LIST = [
  'Custom Carpentry',
  'Interior Design',
  'Office Interiors',
  'Home Renovation',
  'Design Consultation',
]

export default function ContactUs() {
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/mnnvybbn', {
        method:  'POST',
        body:    data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('idle')
      }
    } catch {
      setStatus('idle')
    }
  }

  return (
    <section
      id="ContactUs"
      className="py-32 px-[8%] grid grid-cols-1 lg:grid-cols-2 gap-[6%] items-start"
      style={{
        background: `linear-gradient(rgba(10,10,10,0.88), rgba(10,10,10,0.88)), url(${bgImg}) center/cover no-repeat`,
      }}
    >
      {/* ── Left: Info ── */}
      <div className="reveal-left">
        <div className="section-label">Get in Touch</div>
        <div className="divider" />
        <h2 className="section-title mb-7">
          Let's Create<br /><em>Something Beautiful</em>
        </h2>
        <p className="text-[#888] text-[0.87rem] leading-[1.85] mb-9">
          Ready to transform your space? Reach out for a free consultation and let our
          team bring your vision to life.
        </p>

        {CONTACT_INFO.map((item) => (
          <div
            key={item.label}
            className="flex gap-5 pb-8 mb-8 border-b border-white/7 last:border-b-0 last:mb-0 last:pb-0"
          >
            <div className="flex items-center justify-center flex-shrink-0 text-base border w-11 h-11 border-gold/30">
              {item.icon}
            </div>
            <div>
              <div className="text-[0.64rem] tracking-[0.22em] uppercase text-gold mb-1">{item.label}</div>
              <div className="text-[0.88rem] leading-[1.65]">{item.content}</div>
            </div>
          </div>
        ))}

        {/* Social icons */}
        <div className="flex gap-3 mt-8">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex items-center justify-center overflow-hidden transition-all duration-300 border w-11 h-11 border-white/10 hover:border-gold hover:bg-gold/10"
            >
              <img
                src={s.img}
                alt={s.label}
                className="w-[22px] h-[22px] object-contain bg-white"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </a>
          ))}
        </div>
      </div>

      {/* ── Right: Form + Map ── */}
      <div className="reveal-right">
        <div className="bg-[rgba(26,26,26,0.82)] border border-white/7 p-10 backdrop-blur-sm">
          <h3 className="font-display text-[1.4rem] font-normal text-cream mb-8">
            Request a Free <em className="italic text-gold">Consultation</em>
          </h3>

          <form onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[1.4rem]">
              <div>
                <label className="form-label" htmlFor="name">Full Name</label>
                <input className="form-field" type="text" id="name" name="name" placeholder="Rajesh Sharma" required />
              </div>
              <div>
                <label className="form-label" htmlFor="mobile_number">Mobile Number</label>
                <input className="form-field" type="tel" id="mobile_number" name="mobile_number" placeholder="+91 98765 43210" maxLength={13} />
              </div>
            </div>

            {/* Email */}
            <div className="mb-[1.4rem]">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input className="form-field" type="email" id="email" name="email" placeholder="you@example.com" required />
            </div>

            {/* Service */}
            <div className="mb-[1.4rem]">
              <label className="form-label" htmlFor="service">Service Required</label>
              <select className="cursor-pointer form-field" id="service" name="service">
                <option value="" disabled defaultValue="">Select a service…</option>
                {SERVICES_LIST.map((s) => (
                  <option key={s} value={s} style={{ background: '#1A1A1A' }}>{s}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="mb-[1.4rem]">
              <label className="form-label" htmlFor="message">Your Message</label>
              <textarea
                className="form-field resize-y min-h-[115px]"
                id="message"
                name="message"
                placeholder="Tell us about your project…"
                rows={5}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status !== 'idle'}
              className={`btn w-full justify-center transition-all duration-300
                ${status === 'sent'
                  ? 'bg-[#2d7a4f] border-[#2d7a4f] text-white'
                  : status === 'sending'
                    ? 'btn-gold opacity-70 pointer-events-none'
                    : 'btn-gold'
                }`}
            >
              {status === 'idle'    && 'Send Message →'}
              {status === 'sending' && 'Sending…'}
              {status === 'sent'    && '✓ Message Sent!'}
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="mt-7 h-[280px] border border-white/7 overflow-hidden">
          <iframe
            className="w-full h-full border-none"
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=b+-401,+Snehal+Nagari,+Gaondevi+Road,Jarimari,Mata+Mandir,+Kashigaon,Mira+Road+East,+Thane,+Maharashtra+401107&t=&z=17&ie=UTF8&iwloc=B&output=embed"
            title="Shri Ganesh Studio — Mira Road"
            loading="lazy"
            style={{ filter: 'grayscale(0.7) brightness(0.85)' }}
          />
        </div>
      </div>
    </section>
  )
}
