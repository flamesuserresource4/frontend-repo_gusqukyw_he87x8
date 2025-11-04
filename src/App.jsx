import React from 'react';
import Hero from './components/Hero';
import ParallaxSections from './components/ParallaxSections';
import MicroInteractions from './components/MicroInteractions';
import Manifesto from './components/Manifesto';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased selection:bg-cyan-400/30 selection:text-white">
      <Hero />
      <ParallaxSections />
      <MicroInteractions />
      <Manifesto />
      <footer className="bg-black/95 py-10 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} — Un collettivo che progetta il futuro.
      </footer>
    </div>
  );
}

export default App;
