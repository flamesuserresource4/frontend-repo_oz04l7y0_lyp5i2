import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="min-h-screen bg-[#FAF8F6] text-rose-950">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-20 md:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-semibold mb-6"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-rose-900/80 leading-8"
        >
          I'm a multidisciplinary designer and developer who loves crafting calm, considered digital experiences. I focus on clarity, performance, and micro‑interactions that feel effortless.
        </motion.p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {["UI/UX Design", "Frontend Development", "Interaction Design", "Photography"].map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl border border-rose-100 bg-white/70 backdrop-blur p-5"
            >
              <p className="font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
