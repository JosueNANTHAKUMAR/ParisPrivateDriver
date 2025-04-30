import { motion } from "framer-motion";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";

const CustomDateInput = React.forwardRef(({ value, onClick, placeholder }, ref) => (
  <input
    onClick={onClick}
    ref={ref}
    value={value}
    readOnly
    placeholder={placeholder}
    className="bg-white/20 text-white px-4 py-3 rounded-xl w-full focus:outline-none placeholder-gray-300"
  />
));

export default function Hero({ data, lang }) {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    passengers: "",
    name: "",
    phone: "",
    email: "",
  });

  const [showFromList, setShowFromList] = useState(false);
  const [showToList, setShowToList] = useState(false);
  const [showTimeList, setShowTimeList] = useState(false);
  const [showPassengerList, setShowPassengerList] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelect = (name, value) => {
    setFormData({ ...formData, [name]: value });
    if (name === "from") setShowFromList(false);
    if (name === "to") setShowToList(false);
    if (name === "time") setShowTimeList(false);
    if (name === "passengers") setShowPassengerList(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{data.title[lang]}</h1>
      <p className="text-xl md:text-2xl mb-8">{data.subtitle[lang]}</p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-[#1b2a46]/90 p-6 md:p-10 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 text-left relative"
      >
        <div className="relative">
          <input
            type="text"
            name="from"
            placeholder={lang === "fr" ? "Lieu de départ" : "Pickup location"}
            value={formData.from}
            onChange={handleChange}
            onFocus={() => setShowFromList(true)}
            onBlur={() => setTimeout(() => setShowFromList(false), 100)}
            className="bg-white/20 placeholder-gray-300 text-white px-4 py-3 rounded-xl focus:outline-none w-full"
            autoComplete="off"
          />
          {showFromList && (
            <ul className="absolute z-10 w-full mt-2 max-h-48 overflow-y-auto bg-[#1b2a46]/90 text-white border border-white/10 rounded-xl shadow-xl">
              {data.locations[lang].map((loc, index) => (
                <li
                  key={index}
                  onMouseDown={() => handleSelect("from", loc)}
                  className="px-4 py-2 hover:bg-white/20 cursor-pointer"
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            name="to"
            placeholder={lang === "fr" ? "Destination" : "Drop-off location"}
            value={formData.to}
            onChange={handleChange}
            onFocus={() => setShowToList(true)}
            onBlur={() => setTimeout(() => setShowToList(false), 100)}
            className="bg-white/20 placeholder-gray-300 text-white px-4 py-3 rounded-xl focus:outline-none w-full"
            autoComplete="off"
          />
          {showToList && (
            <ul className="absolute z-10 w-full mt-2 max-h-48 overflow-y-auto bg-[#1b2a46]/90 text-white border border-white/10 rounded-xl shadow-xl">
              {data.locations[lang].map((loc, index) => (
                <li
                  key={index}
                  onMouseDown={() => handleSelect("to", loc)}
                  className="px-4 py-2 hover:bg-white/20 cursor-pointer"
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative w-full">
          <DatePicker
            selected={formData.date ? new Date(formData.date) : null}
            onChange={(date) =>
              setFormData({ ...formData, date: date.toISOString().split("T")[0] })
            }
            placeholderText={lang === "fr" ? "Date de prise en charge" : "Pickup date"}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            calendarClassName="!bg-[#0b1d3a] !text-white !border !border-white/10 !rounded-xl !shadow-lg"
            showPopperArrow={false}
            customInput={<CustomDateInput />}
          />
        </div>

        <div className="relative">
          <input
            type="text"
            name="time"
            placeholder={lang === "fr" ? "Heure de prise en charge" : "Pickup time"}
            value={formData.time}
            onChange={handleChange}
            onFocus={() => setShowTimeList(true)}
            onBlur={() => setTimeout(() => setShowTimeList(false), 100)}
            className="bg-white/20 placeholder-gray-300 text-white px-4 py-3 rounded-xl focus:outline-none w-full"
            autoComplete="off"
          />
          {showTimeList && (
            <ul className="absolute z-10 w-full mt-2 max-h-48 overflow-y-auto bg-[#1b2a46]/90 text-white border border-white/10 rounded-xl shadow-xl">
              {[...Array(36)].map((_, i) => {
                const hour = String(Math.floor(i / 2)).padStart(2, "0");
                const minute = i % 2 === 0 ? "00" : "30";
                const value = `${hour}:${minute}`;
                return (
                  <li
                    key={value}
                    onMouseDown={() => handleSelect("time", value)}
                    className="px-4 py-2 hover:bg-white/20 cursor-pointer"
                  >
                    {value}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="relative w-full">
          <input
            type="text"
            name="passengers"
            value={formData.passengers}
            readOnly
            onFocus={() => setShowPassengerList(true)}
            onBlur={() => setTimeout(() => setShowPassengerList(false), 100)}
            placeholder={lang === "fr" ? "Nombre de passagers" : "Number of passengers"}
            className="bg-white/20 text-white px-4 py-3 rounded-xl placeholder-gray-300 w-full focus:outline-none"
          />
          {showPassengerList && (
            <ul className="absolute z-10 w-full mt-2 max-h-48 overflow-y-auto bg-[#1b2a46]/90 text-white border border-white/10 rounded-xl shadow-xl">
              {[...Array(8)].map((_, i) => {
                const value = i + 1;
                return (
                  <li
                    key={value}
                    onMouseDown={() => handleSelect("passengers", value)}
                    className="px-4 py-2 hover:bg-white/20 cursor-pointer"
                  >
                    {value} {lang === "fr" ? "passager(s)" : "passenger(s)"}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <input
          type="text"
          name="name"
          placeholder={lang === "fr" ? "Votre nom" : "Your name"}
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-white/20 placeholder-gray-300 text-white px-4 py-3 rounded-xl focus:outline-none"
        />

        <input
          type="tel"
          name="phone"
          placeholder={lang === "fr" ? "Téléphone" : "Phone number"}
          value={formData.phone}
          onChange={handleChange}
          required
          className="bg-white/20 placeholder-gray-300 text-white px-4 py-3 rounded-xl focus:outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-white/20 placeholder-gray-300 text-white px-4 py-3 rounded-xl focus:outline-none"
        />

        <button
          type="submit"
          className="md:col-span-2 w-full py-3 bg-gradient-to-r from-accent to-accentDark text-white font-semibold rounded-xl hover:opacity-90 transition"
        >
          {lang === "fr" ? "Réserver maintenant" : "Book Now"}
        </button>
      </form>
    </motion.section>
  );
}