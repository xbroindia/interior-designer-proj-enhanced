import { useEffect } from 'react'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import About           from './components/About'
import Services        from './components/Services'
import Projects        from './components/Projects'
import Testimonials    from './components/Testimonials'
import ContactUs       from './components/ContactUs'
import Footer          from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-dark text-cream font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
