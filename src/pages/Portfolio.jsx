import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Golden Hour',
    desc: 'A gallery layout with warm tones and smooth transitions.',
  },
  {
    title: 'Minimal Commerce',
    desc: 'A pared‑back storefront focused on content and speed.',
  },
  {
    title: 'Lens Studio',
    desc: 'A photography landing page with subtle parallax.',
  },
]

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#333333]">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-semibold mb-10"
        >
          Selected Work
        </motion.h1>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group rounded-2xl border border-[#EADFD8] bg-white/70 backdrop-blur p-5 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)] transition-all"
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[#EBD8D5] to-[#D4E3E8] border border-[#EADFD8] transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/40" />
              </div>
              <h3 className="font-medium text-lg mt-4">{p.title}</h3>
              <p className="text-[#333333]/80 text-sm mt-1">{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}
