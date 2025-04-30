import React from "react";
import { motion } from "framer-motion";
import data from "../../data.json";

const About = ({ lang }) => {
  const { title, subtitle, description, image } = data.about;

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-[#0b1d3a] dark:to-gray-900 py-24 px-6 sm:px-12 lg:px-24"
    >
    <div className="absolute inset-0 -z-10 blur-3xl opacity-25 bg-gradient-to-tr from-primary via-accentDark to-accent"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <motion.img
          src={image}
          alt="About Paris Private Driver"
          className="rounded-3xl shadow-xl w-full object-cover border-4 border-white/30 dark:border-white/10"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
        />

        <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-lg">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            {title[lang]}
          </h2>
          <h3 className="text-lg font-medium mb-4 text-blue-700 dark:text-blue-300 uppercase tracking-widest">
            {subtitle[lang]}
          </h3>
          <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
            {description[lang]}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
