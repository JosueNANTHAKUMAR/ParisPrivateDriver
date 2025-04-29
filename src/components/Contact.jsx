
export default function Contact({ data }) {
  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>Email : {data.email}</p>
      <p>Téléphone : {data.phone}</p>
      <a
        href={`https://wa.me/${data.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-full"
      >
        WhatsApp
      </a>
      <div className="mt-6">
        <iframe
          src="https://maps.google.com/maps?q=Paris&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
