import { motion } from "framer-motion";
import BookingForm from "./BookingForm";

export default function Hero({ data, lang }) {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{data.title[lang]}</h1>
      <p className="text-xl md:text-2xl mb-6">{data.subtitle[lang]}</p>
      <BookingForm lang={lang} />
    </motion.section>
  );
}
