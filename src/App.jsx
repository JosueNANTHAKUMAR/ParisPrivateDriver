
import { useState } from 'react';
import data from '../data.json';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import LangToggle from './components/LangToggle';
import About from './components/About';

function App() {
  const [lang, setLang] = useState("fr");

  return (
    <div className="bg-[#0b1d3a] text-white min-h-screen font-sans">
      <LangToggle lang={lang} setLang={setLang} />
      <Hero data={data.hero} lang={lang} />
      <About lang={lang} />
      <Services data={data.services} lang={lang} />
      <Contact data={data.contact} />
    </div>
  );
}

export default App;
