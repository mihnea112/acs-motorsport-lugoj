import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
      <div className="relative bg-black py-24 overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-40">
          <img
            alt="Racing car background abstract"
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy0IGP31FuVyA5WoMjghwCB4nxfETGJQRwYzF5261ZxDnloZRd7_SCbLNxdAHwGnCAJ2Jg226N9ven8b-TKKFoM4G2OAsSY0u9CXqjJE8XTP9nJLht8Lb8MCwu9Pr_T-AUsqc4tPOvNwIX16WjO9IcyRf8_NEGQSqT5tISAtSIyBEp5pXAnEkLT36U5DXnLnOOsGQokWDgiPuaE_w5GjrdR1LoPmZGtme8TCvgTTLrKTFSuupddz954ARXk5OdCsBZBfIE38Mwf0ZG"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-wider mb-4">
            Contactează-ne
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Suntem aici pentru a răspunde la toate întrebările tale despre evenimentele noastre și lumea motorsportului.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-primary"></div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6 uppercase">
              Trimite un mesaj
            </h2>
            <form action="#" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">Nume Complet</label>
                <div className="mt-1">
                  <input className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md p-3" id="name" name="name" placeholder="Ion Popescu" type="text" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
                <div className="mt-1">
                  <input className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md p-3" id="email" name="email" placeholder="exemplu@email.com" type="email" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="subject">Subiect</label>
                <div className="mt-1">
                  <select className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md p-3" id="subject" name="subject">
                    <option>Informații Generale</option>
                    <option>Înscrieri Evenimente</option>
                    <option>Parteneriate / Sponsorizări</option>
                    <option>Presă</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="message">Mesaj</label>
                <div className="mt-1">
                  <textarea className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md p-3" id="message" name="message" placeholder="Scrie mesajul tău aici..." rows={4}></textarea>
                </div>
              </div>
              <div>
                <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors uppercase tracking-widest font-display text-lg" type="submit">
                  Trimite Mesaj
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6 uppercase">
                Informații de Contact
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-black dark:bg-white text-white dark:text-black">
                      <span className="material-icons text-2xl">email</span>
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">contact@acsmotorsport.ro</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-black dark:bg-white text-white dark:text-black">
                      <span className="material-icons text-2xl">phone</span>
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Telefon</h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">+40 700 123 456</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">Luni - Vineri, 09:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-black dark:bg-white text-white dark:text-black">
                      <span className="material-icons text-2xl">location_on</span>
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Sediu</h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">Strada Victoriei, Nr. 15<br />Lugoj, Județul Timiș, România</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-4">Urmărește-ne</h3>
                <div className="flex space-x-4">
                  <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                     <span className="material-icons text-3xl">facebook</span>
                  </a>
                  <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                     <span className="material-icons text-3xl">photo_camera</span>
                  </a>
                  <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                     <span className="material-icons text-3xl">ondemand_video</span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6 uppercase">
                Întrebări Frecvente
              </h2>
              <div className="space-y-4">
                <details className="group bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-lg open:ring-1 open:ring-primary transition-all">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="font-medium text-gray-900 dark:text-white">Cum mă înscriu la un eveniment?</h3>
                    <span className="ml-6 flex-shrink-0">
                      <span className="material-icons text-gray-400 group-open:rotate-180 transition-transform">expand_more</span>
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-500 dark:text-gray-400">
                    <p>Înscrierea se face exclusiv online prin platforma noastră. Accesați secțiunea "Evenimente", selectați cursa dorită și completați formularul de înscriere. Veți primi un email de confirmare cu pașii următori.</p>
                  </div>
                </details>
                <details className="group bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-lg open:ring-1 open:ring-primary transition-all">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="font-medium text-gray-900 dark:text-white">Ce documente sunt necesare pentru participare?</h3>
                    <span className="ml-6 flex-shrink-0">
                      <span className="material-icons text-gray-400 group-open:rotate-180 transition-transform">expand_more</span>
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-500 dark:text-gray-400">
                    <p>Pentru a participa, veți avea nevoie de: permis de conducere valabil, asigurare RCA a mașinii de concurs, și licența FRAS valabilă pentru anul curent. Pentru debutanți, oferim asistență în obținerea licenței "One Event".</p>
                  </div>
                </details>
                <details className="group bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-lg open:ring-1 open:ring-primary transition-all">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="font-medium text-gray-900 dark:text-white">Pot participa fără experiență anterioară?</h3>
                    <span className="ml-6 flex-shrink-0">
                      <span className="material-icons text-gray-400 group-open:rotate-180 transition-transform">expand_more</span>
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-500 dark:text-gray-400">
                    <p>Da! Organizăm evenimente speciale pentru amatori și debutanți. Căutați evenimentele marcate cu "Promo" sau "Debutanți". Siguranța este prioritatea noastră, așa că veți beneficia de un briefing tehnic detaliat înainte de start.</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="w-full h-96 bg-gray-900 relative">
        <iframe
          allowFullScreen
          className="w-full h-full grayscale invert-[.9] contrast-[.8] opacity-80"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44747.07823485055!2d21.87676767784333!3d45.68652300063238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d9d70459703%3A0x67954932b137d6e!2sLugoj%2C%20Romania!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
          title="Harta locație Lugoj"
        ></iframe>
        <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
      </section>
    </>
  );
};

export default Contact;