import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

function TypeGlitch({ text, delay = 0 }) {
  const [display, setDisplay] = React.useState('');
  const [glitch, setGlitch] = React.useState(false);

  React.useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        setDisplay(text.slice(0, i + 1));
        i += 1;
        if (Math.random() > 0.8) setGlitch((g) => !g);
        if (i >= text.length) {
          clearInterval(id);
          setTimeout(() => setGlitch(false), 300);
        }
      }, 40);
    }, delay);
    return () => clearTimeout(start);
  }, [text, delay]);

  return (
    <span
      className={`relative inline-block transition-[text-shadow,filter] duration-150 ${
        glitch ? 'filter hue-rotate-15 saturate-150' : ''
      }`}
      style={{
        textShadow: glitch
          ? '0 0 12px rgba(0,195,255,0.7), 0 0 28px rgba(255,215,0,0.35)'
          : '0 0 6px rgba(0,195,255,0.35)'
      }}
    >
      {display}
      <span
        aria-hidden
        className="absolute inset-0 translate-x-0.5 translate-y-[-0.5px] text-cyan-400/50 mix-blend-screen select-none"
      >
        {display}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-0.5 translate-y-[0.5px] text-yellow-300/40 mix-blend-screen select-none"
      >
        {display}
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient atmospheres that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 h-40 w-40 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />
      </div>

      {/* Copy overlay */}
      <div className="pointer-events-none relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="mb-6 font-extrabold tracking-tight text-white/95 [text-wrap:balance] text-3xl sm:text-5xl md:text-6xl"
          >
            <TypeGlitch text="Non è un sito. È un esperimento visivo." />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
            className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-zinc-200/90 leading-relaxed"
          >
            <TypeGlitch
              text="Benvenuto dentro la mente di un creator che non dorme da tre giorni."
              delay={800}
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.2 }}
            className="mx-auto mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md shadow-[0_0_40px_-10px_rgba(56,189,248,0.5)]"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_18px_6px_rgba(34,211,238,0.9)]" />
            <span className="text-xs sm:text-sm uppercase tracking-widest text-zinc-300/90">
              Collective: Unknown // Status: Awake
            </span>
          </motion.div>
        </div>
      </div>

      {/* bottom cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-zinc-300/70">
        Scroll
      </div>
    </section>
  );
}
