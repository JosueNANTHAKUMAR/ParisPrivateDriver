
import { motion } from "framer-motion";

export default function Services({ data, lang }) {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Nos Services</h2>
      <div className="grid gap-6 md:grid-cols-4">
        {data.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-md"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-2">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-1">{service.title[lang]}</h3>
            <p className="text-sm">{service.description[lang]}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
