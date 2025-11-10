import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#333333]">
      {/* Hero with Spline cover */}
      <section className="relative h-[70vh] md:h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl bg-white/65 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.12)]"
            >
              <p className="text-[#333333]/70 text-xs uppercase tracking-[0.35em] mb-3">Designer • Developer • Creative</p>
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
                Elegant, serene, and thoughtfully minimalist
              </h1>
              <p className="text-[#333333]/80">
                I craft calm, sophisticated interfaces and performant web apps.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 bg-[#EBD8D5] text-[#333333] px-5 py-2.5 rounded-full hover:bg-[#e5cfcc] transition-colors"
                >
                  View Work <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-[#EADFD8] text-[#333333] px-5 py-2.5 rounded-full hover:bg-white/70 transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {["Minimal", "Thoughtful", "Performant"].map((title, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="rounded-2xl border border-[#EADFD8] bg-white/70 backdrop-blur p-6"
              >
                <h3 className="font-medium text-lg mb-2">{title}</h3>
                <p className="text-[#333333]/80 text-sm">Subtle animations, elegant typography, and a love for clean design.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold accent callout */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl p-6 md:p-8 border border-[#EADFD8] bg-gradient-to-br from-white to-amber-50/40">
            <p className="text-sm tracking-wide text-[#333333]/70 mb-2">Currently available for select projects</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[#333333] transition-all"
              style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37 0%, #f1da8a 100%)', color: '#333' }}>
              Let’s collaborate <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
