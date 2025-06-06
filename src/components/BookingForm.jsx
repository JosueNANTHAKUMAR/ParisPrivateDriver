import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../../data.json';
import { MapPinIcon, FlagIcon, CalendarDaysIcon, ClockIcon, ArrowPathIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

const transferTypes = [
  { key: 'transfer', label: { fr: 'Transfert', en: 'Transfer' } },
  { key: 'hourly', label: { fr: 'À l\'heure', en: 'Hourly' } }
];

function getLocationGroups(data, lang) {
  return [
    {
      label: 'Aéroports',
      icon: <MapPinIcon className="w-5 h-5 text-[#0b1d3a]" />,
      options: data.airports.map(a => ({
        id: a.id,
        icon: <MapPinIcon className="w-5 h-5 text-[#0b1d3a] inline-block mr-2" />, 
        label: a.name[lang]
      }))
    },
    {
      label: 'Gares',
      icon: <BuildingLibraryIcon className="w-5 h-5 text-[#0b1d3a]" />,
      options: data.stations.map(s => ({
        id: s.id,
        icon: <BuildingLibraryIcon className="w-5 h-5 text-[#0b1d3a] inline-block mr-2" />, 
        label: s.name[lang]
      }))
    },
    {
      label: lang === 'fr' ? 'Lieux touristiques' : 'Tourist places',
      icon: <FlagIcon className="w-5 h-5 text-[#0b1d3a]" />,
      options: data.places.map(p => ({
        id: p.id,
        icon: <FlagIcon className="w-5 h-5 text-[#0b1d3a] inline-block mr-2" />, 
        label: p.name[lang]
      }))
    }
  ];
}

const hourOptions = Array.from({ length: 24 }, (_, i) => (i < 10 ? `0${i}` : `${i}`));
const minuteOptions = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
const durationOptions = Array.from({ length: 10 }, (_, i) => `${i + 1}`);

export default function BookingForm({ lang, forceOpen = false }) {
  const [isOpen, setIsOpen] = useState(forceOpen);
  const [transferType, setTransferType] = useState('transfer');
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    hour: '',
    minute: '',
    roundTrip: false,
    address: '',
    duration: '1'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire:', { ...formData, transferType });
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="bg-white shadow-2xl hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.18)] transition-shadow duration-300 rounded-3xl p-10 w-full max-w-xl mx-auto text-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
        {data.booking.title[lang]}
      </h2>
      <div className="flex mb-6 gap-2 justify-center">
        {transferTypes.map(type => (
          <button
            key={type.key}
            type="button"
            onClick={() => setTransferType(type.key)}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all duration-150 border-2 text-base shadow-sm \
              ${transferType === type.key
                ? 'bg-[#0b1d3a] text-white border-[#0b1d3a] shadow-lg'
                : 'bg-white text-[#0b1d3a] border-[#0b1d3a] hover:bg-[#1b2a46] hover:text-white'}
            `}
          >
            {type.key === 'transfer' ? <ArrowPathIcon className="w-5 h-5 text-[#0b1d3a]" /> : <ClockIcon className="w-5 h-5 text-[#0b1d3a]" />}
            {type.label[lang]}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 mb-1 font-semibold flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-[#0b1d3a]" />
            {lang === 'fr' ? 'Lieu de départ' : 'Departure location'}
          </label>
          <div className="relative">
            <select
              name="from"
              value={formData.from}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0b1d3a] focus:outline-none appearance-none bg-white text-gray-900 text-base pr-10"
            >
              <option value="" disabled>{lang === 'fr' ? 'Choisissez un lieu' : 'Choose a location'}</option>
              {getLocationGroups(data, lang).map((group, i) => (
                <optgroup key={i} label={group.label}>
                  {group.options.map(opt => (
                    <option key={opt.id} value={opt.id}>{opt.label}</option>
                  ))}
                </optgroup>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#0b1d3a]">
              <MapPinIcon className="w-5 h-5" />
            </span>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 mb-1 font-semibold flex items-center gap-2">
            <FlagIcon className="w-5 h-5 text-[#0b1d3a]" />
            {lang === 'fr' ? 'Destination' : 'Destination'}
          </label>
          <div className="relative">
            <select
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0b1d3a] focus:outline-none appearance-none bg-white text-gray-900 text-base pr-10"
            >
              <option value="" disabled>{lang === 'fr' ? 'Choisissez une destination' : 'Choose a destination'}</option>
              {getLocationGroups(data, lang).map((group, i) => (
                <optgroup key={i} label={group.label}>
                  {group.options.map(opt => (
                    <option key={opt.id} value={opt.id}>{opt.label}</option>
                  ))}
                </optgroup>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#0b1d3a]">
              <FlagIcon className="w-5 h-5" />
            </span>
          </div>
        </div>
        {transferType === 'transfer' ? null : null}
        {transferType === 'hourly' && (
          <div>
            <label className="block text-gray-700 mb-1 font-semibold flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-[#0b1d3a]" />
              {lang === 'fr' ? "Nombre d'heures" : 'Number of hours'}
            </label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0b1d3a] focus:outline-none bg-white text-gray-900 text-base"
            >
              {durationOptions.map(opt => (
                <option key={opt} value={opt}>{opt} {lang === 'fr' ? 'Heure' : 'Hour'}{opt !== '1' ? 's' : ''}</option>
              ))}
            </select>
          </div>
        )}
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <label className="block text-gray-700 mb-1 font-semibold flex items-center gap-2">
              <CalendarDaysIcon className="w-5 h-5 text-[#0b1d3a]" />
              {lang === 'fr' ? 'Date' : 'Date'}
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>
          <div className="flex-1 relative">
            <label className="block text-gray-700 mb-1 font-semibold flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-[#0b1d3a]" />
              {lang === 'fr' ? 'Heure' : 'Hour'}
            </label>
            <select
              name="hour"
              value={formData.hour}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              <option value="" disabled>{lang === 'fr' ? 'Heure' : 'Hour'}</option>
              {hourOptions.map(opt => (
                <option key={opt} value={opt}>{opt} h</option>
              ))}
            </select>
          </div>
          <div className="flex-1 relative">
            <label className="block text-gray-700 mb-1 font-semibold flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-[#0b1d3a]" />
              {lang === 'fr' ? 'Minute' : 'Minute'}
            </label>
            <select
              name="minute"
              value={formData.minute}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              <option value="" disabled>{lang === 'fr' ? 'Minute' : 'Minute'}</option>
              {minuteOptions.map(opt => (
                <option key={opt} value={opt}>{opt} min</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            id="roundTrip"
            name="roundTrip"
            checked={formData.roundTrip}
            onChange={handleChange}
            className="accent-yellow-500 w-4 h-4"
          />
          <label htmlFor="roundTrip" className="text-gray-700 font-medium flex items-center gap-1">
            {lang === 'fr' ? 'Aller/retour' : 'Round trip'}
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-[#0b1d3a] text-white font-bold text-lg shadow-lg hover:bg-[#1b2a46] transition-all duration-200 mt-4"
        >
          {lang === 'fr' ? 'Estimation' : 'Get Estimate'}
        </button>
      </form>
    </div>
  );
} 