import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../../data.json';

export default function BookingForm({ lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white text-black px-6 py-3 rounded-full shadow hover:scale-105 transition"
      >
        {data.hero.cta[lang]}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0b1d3a] p-8 rounded-lg w-full max-w-md"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-6 text-white">
                {data.booking.title[lang]}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white mb-2">
                    {data.booking.fields.name[lang]}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-white text-black"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">
                    {data.booking.fields.email[lang]}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-white text-black"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">
                    {data.booking.fields.phone[lang]}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-white text-black"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">
                    {data.booking.fields.date[lang]}
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-white text-black"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">
                    {data.booking.fields.time[lang]}
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-white text-black"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">
                    {data.booking.fields.service[lang]}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-white text-black"
                  >
                    <option value="">{data.booking.selectPlaceholder[lang]}</option>
                    {data.services.map((service) => (
                      <option key={service.title[lang]} value={service.title[lang]}>
                        {service.title[lang]}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-2">
                    {data.booking.fields.message[lang]}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-white text-black"
                    rows="3"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600"
                  >
                    {data.booking.buttons.cancel[lang]}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-white text-black hover:bg-gray-100"
                  >
                    {data.booking.buttons.submit[lang]}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 