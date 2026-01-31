import React from 'react';

const Events: React.FC = () => {
  return (
    <>
      <header className="relative bg-black text-white py-16 md:py-24 overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-40">
          <img
            alt="Rally car in motion blurred background"
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW5DpIbAnNEmkBLGiexZUJ_rHc9gGhSxVkJ9JtFesT50TeJllzvkZqsJ1GLKGUR1an9GdBgTObBaUwO2BNDIcNdwYBfkPygP8tqwTLTHS0kfb08cLqXqFXE9FGNJlJdGGGL4rNzrJmNp0pfmq4eonWXyE20M4F6aooRFUM3qNOV6W0BeDL1-_AaTmE2cgI8Vv6NxVBVQp52J8-w3UVqaeNYpHRX-KC1McxDpPGVEPDr6WGmLLYUAW9W-soultv_OiZNLGzc8IidPOz"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
            Calendar <span className="text-primary">Competițional</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg md:text-xl">
            Descoperă următoarele etape de raliu, viteză în coastă și evenimente organizate de ACS Motorsport Lugoj. Înscrie-te acum și intră în cursă!
          </p>
        </div>
      </header>

      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Filter Bar */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg p-6 mb-12 border border-gray-200 dark:border-gray-800 -mt-20 relative z-10">
          <div className="flex flex-col md:flex-row gap-6 items-end md:items-center justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto flex-grow">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Tip Eveniment</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg py-2.5 pl-3 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer">
                    <option>Toate Tipurile</option>
                    <option>Raliu</option>
                    <option>Viteză în Coastă</option>
                    <option>Super Slalom</option>
                    <option>Time Attack</option>
                  </select>
                  <span className="material-icons absolute right-3 top-2.5 pointer-events-none text-gray-400">expand_more</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Status</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg py-2.5 pl-3 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer">
                    <option>Toate</option>
                    <option selected>Înscrieri Deschise</option>
                    <option>În Curând</option>
                    <option>Finalizate</option>
                  </select>
                  <span className="material-icons absolute right-3 top-2.5 pointer-events-none text-gray-400">expand_more</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">An Competițional</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg py-2.5 pl-3 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer">
                    <option selected>2023</option>
                    <option>2022</option>
                  </select>
                  <span className="material-icons absolute right-3 top-2.5 pointer-events-none text-gray-400">expand_more</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <button className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2.5 rounded-lg font-medium transition-colors w-full md:w-auto">
                <span className="material-icons text-sm">restart_alt</span> Reset
              </button>
              <button className="flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-bold uppercase tracking-wide transition-colors shadow-lg shadow-red-900/20 w-full md:w-auto">
                <span className="material-icons text-sm">filter_list</span> Filtrează
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <article className="group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-800 flex flex-col h-full relative">
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-green-500/90 text-white backdrop-blur-sm shadow-sm">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Înscrieri Deschise
              </span>
            </div>
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img
                alt="Rally car drifting on gravel"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2xhLlAt--aQTXybQgSZipv1ZpfjqMDAmT-Eau6pNg5k0vMoCn6-rPAnkpIE4kQmZ-vxCTdO92ImJdgkT-AJb8038r4nooFbOO_W5YTo1CKJ_ABKH7aMl0KbRcJFS8PSqcnuenuSA-2xGpNs6Y9G-Kv7qPvTBnHnhKJ7S5cDiImz4FYRvbPYRUG7KatZJgHDauh_MujSOBjBWRvlz_dn_dmjRruLcshx6q9S3Ku_zUttZ9m9ICfaQN_kNkShoGAkj6jN2h6wL-e-1v"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="text-accent font-display font-bold text-lg uppercase drop-shadow-md">Raliu</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-1">
                    <span className="material-icons text-primary text-base">calendar_today</span> 12-14 Octombrie
                  </span>
                  <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
                    Cupa "Ana Lugojana"
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6 text-sm">
                <span className="material-icons text-base">location_on</span>
                Lugoj, Județul Timiș
              </div>
              <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider py-3 px-4 rounded-lg hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                  Detalii & Înscriere
                  <span className="material-icons text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="h-1.5 w-full bg-gradient-to-r from-secondary via-accent to-primary"></div>
          </article>

          {/* Card 2 */}
          <article className="group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-800 flex flex-col h-full relative">
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-green-500/90 text-white backdrop-blur-sm shadow-sm">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Înscrieri Deschise
              </span>
            </div>
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img
                alt="Super slalom event car on track"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlXYPcjHLwxCc5EtVriZ4Tju9aSI8_wnnhbyoNbxxq_EV_Z3GNkAPQNAM73gMdYqwziCMUUB4fkAnQJnBuJkLS1EvfYZ1XzvY3boaUZAeoZ9O0CMiypy8053KqlOI-TMLvokGXhGpvmroH6qD2lLomZBm2Q2Fycl__5Y_s1dxlbzfYbYqqKhnOk1dqcPQ1_RqlZCUTm5fotrz5MeNX4k8bsirEHDReD7kgkIZ6xdiyx2lLtd3WFENJUH04x9V8H2RTcyqxNpu__2oQ"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="text-accent font-display font-bold text-lg uppercase drop-shadow-md">Super Slalom</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-1">
                    <span className="material-icons text-primary text-base">calendar_today</span> 28 Octombrie
                  </span>
                  <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
                    Trofeul "Timiș Rally"
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6 text-sm">
                <span className="material-icons text-base">location_on</span>
                Circuitul Lugoj Vest
              </div>
              <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider py-3 px-4 rounded-lg hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                  Detalii & Înscriere
                  <span className="material-icons text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="h-1.5 w-full bg-gradient-to-r from-secondary via-accent to-primary"></div>
          </article>

          {/* Card 3 */}
          <article className="group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 flex flex-col h-full relative opacity-90 hover:opacity-100">
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600/90 text-white backdrop-blur-sm shadow-sm">
                <span className="material-icons text-xs mr-1">schedule</span>
                În Curând
              </span>
            </div>
            <div className="relative h-56 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img
                alt="Mountain road for hill climb race"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmXU1rRBXm4iG-YdjNu74o9MHxivzE9hEbbfpy-VASSx0peCtcF1_Lxykg_sKp9BJdiCTEF6IP9NFwppqAVRYI312AVJAOUYewWEzPqY8Qt9H6FLAPe64LVPHImR2bWR8jy7cEjy1jtaB4u6ZKj2Z8CGImNAet0rfYMpnSmYIuzyqVSjlNkCUUmSZbImCN9WyLui2MqDRbUiGHUS9ukIHyAF5sBRJaE5mQ_BmFCH7EhDKTAtTcbmba7k17nfNn8wzlFgRJfHrfp0pn"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="text-white font-display font-bold text-lg uppercase drop-shadow-md">Viteză în Coastă</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-1">
                    <span className="material-icons text-primary text-base">calendar_today</span> 11 Noiembrie
                  </span>
                  <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                    Memorialul "Campionilor"
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6 text-sm">
                <span className="material-icons text-base">location_on</span>
                Traseu Făget-Lugoj
              </div>
              <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider py-3 px-4 rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
                  Detalii Indisponibile
                  <span className="material-icons text-sm">lock</span>
                </button>
              </div>
            </div>
            <div className="h-1.5 w-full bg-gray-300 dark:bg-gray-700"></div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Events;