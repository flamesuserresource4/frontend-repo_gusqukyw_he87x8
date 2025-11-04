import React from 'react';
import { motion } from 'framer-motion';

function InteractiveCard({ title, subtitle }) {
  const ref = React.useRef(null);
  const [pos, setPos] = React.useState({ x: 0.5, y: 0.5 });
  const [rot, setRot] = React.useState({ rx: 0, ry: 0 });

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setPos({ x, y });
    const ry = (x - 0.5) * 12; // rotateY
    const rx = (0.5 - y) * 12; // rotateX
    setRot({ rx, ry });
  };

  const onLeave = () => {
    setRot({ rx: 0, ry: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        '--mx': `${pos.x * 100}%`,
        '--my': `${pos.y * 100}%`,
        transformStyle: 'preserve-3d'
      }}
      animate={{ rotateX: rot.rx, rotateY: rot.ry }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx) var(--my), rgba(56,189,248,0.18), transparent 40%)'
        }}
      />

      <div className="relative z-10">
        <h4 className="text-xl md:text-2xl font-extrabold text-white">{title}</h4>
        <p className="mt-2 text-zinc-300 leading-relaxed">{subtitle}</p>
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-2xl" />
      <div className="pointer-events-none absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-yellow-400/10 blur-2xl" />
    </motion.div>
  );
}

export default function MicroInteractions() {
  return (
    <section className="relative bg-black py-28 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b12] to-black" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="text-3xl md:text-5xl font-black"
          >
            Micro-interazioni telepatiche
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-zinc-300"
          >
            Reazioni fluide al tuo intento. Il puntatore è una corrente elettrica: il design risponde.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <InteractiveCard
            title="Tipografia Mutante"
            subtitle="Frasi che si compongono come glitch poetici. La parola non è statica, respira."
          />
          <InteractiveCard
            title="Transizioni Liquide"
            subtitle="Movimenti morbidi, come oro fuso che scorre tra le pagine del metaverso."
          />
          <InteractiveCard
            title="Parallax 3D Mentale"
            subtitle="Ogni scroll curva lo spazio. Sei il regista di un trailer cosmico."
          />
        </div>
      </div>
    </section>
  );
}
