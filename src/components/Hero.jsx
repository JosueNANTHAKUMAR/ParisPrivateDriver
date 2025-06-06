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
      className="w-full flex flex-col justify-center items-center text-center px-6 py-12 bg-[#0b1d3a] text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg">{data.title[lang]}</h1>
      <p className="text-xl md:text-2xl mb-0 drop-shadow">{data.subtitle[lang]}</p>
    </motion.section>
  );
}