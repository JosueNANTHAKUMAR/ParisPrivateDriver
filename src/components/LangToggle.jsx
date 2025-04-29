
export default function LangToggle({ lang, setLang }) {
  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={() => setLang(lang === "fr" ? "en" : "fr")}
        className="bg-white text-black px-4 py-1 rounded-full shadow"
      >
        {lang === "fr" ? "EN" : "FR"}
      </button>
    </div>
  );
}
