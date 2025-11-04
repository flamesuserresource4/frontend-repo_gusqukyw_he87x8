import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Section({ children, className = '', style = {} }) {
  return (
    <section
      className={`relative flex min-h-[120vh] items-center justify-center overflow-hidden ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}

export default function ParallaxSections() {
  const { scrollYProgress } = useScroll();

  const layerFar = useTransform(scrollYProgress, [0, 1], ['0px', '-200px']);
  const layerMid = useTransform(scrollYProgress, [0, 1], ['0px', '-400px']);
  const layerClose = useTransform(scrollYProgress, [0, 1], ['0px', '-650px']);

  return (
    <div className="bg-black text-white">
      {/* SECTION 1 */}
      <Section className="bg-gradient-to-b from-black via-[#0b0b12] to-black">
        <motion.div style={{ y: layerFar }} className="pointer-events-none absolute -top-20 -left-20 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <motion.div style={{ y: layerMid }} className="pointer-events-none absolute top-1/3 right-10 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
        <motion.div style={{ y: layerClose }} className="pointer-events-none absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="relative z-10 max-w-5xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            Architettura del Caos Elegante
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mx-auto mt-5 max-w-3xl text-zinc-300 text-lg leading-relaxed"
          >
            Scorri e guarda le strutture emergere come città-idee: geometrie ribelli,
            prospettive liquide, e luce che fende il buio come un bisturi.
          </motion.p>
        </div>
      </Section>

      {/* SECTION 2 */}
      <Section className="bg-black">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,28,40,0.8),_transparent_60%)]" />
        <motion.div style={{ y: layerMid }} className="pointer-events-none absolute -right-10 top-0 h-[30rem] w-[30rem] rounded-full bg-cyan-600/20 blur-3xl" />
        <motion.div style={{ y: layerClose }} className="pointer-events-none absolute left-20 bottom-20 h-40 w-40 rounded-full bg-yellow-300/20 blur-2xl" />

        <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_60px_-10px_rgba(56,189,248,0.35)]"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold">Materia Digitale</h3>
            <p className="mt-3 text-zinc-300 leading-relaxed">
              Texture cyber-organiche, superfici che respirano. Tocca con gli occhi: ogni pixel
              è una scaglia di un animale che non abbiamo ancora catalogato.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold">Spazio-Tempo Liquido</h3>
            <p className="mt-3 text-zinc-300 leading-relaxed">
              Parallax 3D che piega la prospettiva. Le sezioni scorrono come
              orbite, si avvicinano e scompaiono come sogni lucidi.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 3 */}
      <Section className="bg-black">
        <motion.div style={{ y: layerFar }} className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(56,189,248,0.06),_transparent_40%),_radial-gradient(circle_at_80%_70%,_rgba(250,204,21,0.06),_transparent_40%)]" />
        <div className="relative z-10 text-center px-6">
          <motion.h3
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-black"
          >
            Una ribellione elegante
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-zinc-300"
          >
            Minimalismo addestrato a combattere. Tipografia con contrasti estremi: un sans geometrico
            contro un serif calligrafico – un duello che ispira soggezione.
          </motion.p>
        </div>
      </Section>
    </div>
  );
}
