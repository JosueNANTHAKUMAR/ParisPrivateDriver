import { motion } from "framer-motion";

export default function Services({ data, lang }) {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-tr from-primary via-accentDark to-accent"></div>

      <h2 className="text-4xl font-extrabold text-center mb-16 text-white tracking-tight">
        {lang === "fr" ? "Nos Services" : "Our Services"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {data.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={service.image}
              alt={service.title[lang]}
              className="w-full h-40 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{service.title[lang]}</h3>
              <p className="text-sm text-gray-200 leading-relaxed line-clamp-4">
                {service.description[lang]}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
