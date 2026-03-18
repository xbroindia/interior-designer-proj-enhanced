export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] px-[8%] py-10 border-t border-white/[0.06]
                       flex flex-col sm:flex-row justify-between items-center gap-6 flex-wrap">
      <p className="text-[0.76rem] text-[#888] text-center sm:text-left">
        © 2025{' '}
        <strong className="text-gold">Shri Ganesh Interiors &amp; Carpentry</strong>.
        {' '}All rights reserved.
      </p>
      <p className="text-[0.76rem] text-[#888]">
        Crafted with care in <span className="text-gold">Mumbai, India</span>
      </p>
      <p className="text-[0.76rem] text-[#888] text-center sm:text-right">
        <a href="tel:+919594742209" className="text-gold hover:text-gold-light transition-colors duration-300">
          +91 9594742209
        </a>
        {' '}·{' '}
        <a href="mailto:sharmarohan9594@gmail.com" className="text-gold hover:text-gold-light transition-colors duration-300">
          sharmarohan9594@gmail.com
        </a>
      </p>
    </footer>
  )
}
