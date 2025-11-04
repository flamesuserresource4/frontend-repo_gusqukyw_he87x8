import React from 'react';
import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <section className="relative isolate overflow-hidden bg-black py-32 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.04),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-zinc-300"
        >
          Collettivo Alieno // Protocollo Estetico
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1 }}
          className="mt-8 bg-clip-text text-4xl font-black leading-tight text-transparent md:text-7xl bg-[linear-gradient(92deg,#e5e7eb_0%,#22d3ee_35%,#facc15_65%,#e5e7eb_100%)] [text-wrap:balance]"
          style={{
            WebkitTextStroke: '0.5px rgba(255,255,255,0.2)'
          }}
        >
          Crea. Brucia. Ricostruisci.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-zinc-300"
        >
          Questo non è solo design. È un linguaggio che vibra tra biomeccanica e poesia,
          costruito per far domandare: “Come cazzo hai fatto questo?”
        </motion.p>
      </div>
    </section>
  );
}
