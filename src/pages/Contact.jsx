import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#FAF8F6] text-rose-950">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-20 md:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-semibold mb-6"
        >
          Contact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-rose-900/80 mb-8"
        >
          I'd love to hear about your project. Send a message and I'll get back soon.
        </motion.p>

        <form className="grid gap-4">
          <div>
            <label className="block text-sm mb-2 text-rose-800">Name</label>
            <input className="w-full rounded-xl border border-rose-200 bg-white/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-rose-200" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm mb-2 text-rose-800">Email</label>
            <input type="email" className="w-full rounded-xl border border-rose-200 bg-white/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-rose-200" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm mb-2 text-rose-800">Message</label>
            <textarea rows="5" className="w-full rounded-xl border border-rose-200 bg-white/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-rose-200" placeholder="Tell me a bit about what you need" />
          </div>
          <button type="button" className="justify-self-start inline-flex items-center gap-2 bg-rose-100 text-rose-900 px-5 py-2.5 rounded-full hover:bg-rose-200 transition-colors">Send</button>
        </form>
      </section>
    </main>
  )
}
