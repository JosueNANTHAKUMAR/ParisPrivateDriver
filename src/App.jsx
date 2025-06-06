import { useState } from 'react';
import data from '../data.json';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import LangToggle from './components/LangToggle';
import About from './components/About';
import BookingForm from './components/BookingForm';

function App() {
  const [lang, setLang] = useState("fr");

  return (
    <div className="bg-[#0b1d3a] text-white min-h-screen font-sans">
      <LangToggle lang={lang} setLang={setLang} />
      <div className="flex flex-col items-center w-full">
        <Hero data={data.hero} lang={lang} />
        <div className="w-full max-w-xl mx-auto mt-4 mb-10">
          <BookingForm lang={lang} forceOpen />
        </div>
      </div>
      <About lang={lang} />
      <Services data={data.services} lang={lang} />
      <Contact data={data.contact} />
    </div>
  );
}

export default App;
