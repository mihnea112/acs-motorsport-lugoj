import React from "react";

const FALLBACK_IMG =
  "https://source.unsplash.com/1600x900/?rally,car,motorsport,track";

function handleImgError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
  const img = e.currentTarget;
  // prevent infinite loop if fallback also fails
  img.onerror = null;
  img.src = FALLBACK_IMG;
}

const Archive: React.FC = () => {
  return (
    <>
      <header className="relative bg-black py-24 overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-20 bg-checkered-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <img
          alt="Rally car dust background"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1600"
          onError={handleImgError}
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start border-l-4 border-primary pl-6">
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase tracking-wider mb-2">
              Evenimente{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
                Trecute
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light">
              Arhiva completă a competițiilor și performanțelor ACS Motorsport
              Lugoj. Istoria vitezei, păstrată aici.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2 flex">
          <div className="w-1/3 bg-secondary"></div>
          <div className="w-1/3 bg-accent"></div>
          <div className="w-1/3 bg-primary"></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap items-center justify-between mb-12 gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            <button className="px-6 py-2 bg-primary text-white font-display text-xl tracking-wide rounded hover:bg-red-800 transition-colors shadow-lg shadow-primary/30">
              2023
            </button>
            <button className="px-6 py-2 bg-surface-light dark:bg-surface-dark text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-display text-xl tracking-wide rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              2022
            </button>
            <button className="px-6 py-2 bg-surface-light dark:bg-surface-dark text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-display text-xl tracking-wide rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              2021
            </button>
            <button className="px-6 py-2 bg-surface-light dark:bg-surface-dark text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-display text-xl tracking-wide rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              2020
            </button>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <span className="material-icons text-lg mr-1">filter_list</span>
            <span>Filtrează după categorie</span>
          </div>
        </div>

        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 md:ml-6 space-y-12">
          {/* Item 1 */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-[9px] top-8 h-5 w-5 rounded-full border-4 border-white dark:border-background-dark bg-primary shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden h-48 md:h-auto">
                  <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur text-white px-3 py-1 text-sm font-bold uppercase tracking-wider rounded">
                    Oct 2023
                  </div>
                  <img
                    alt="Viteza in Coasta Lugoj"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    src="https://images.unsplash.com/flagged/photo-1554042329-269abab49dc9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    onError={handleImgError}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white uppercase tracking-wide group-hover:text-primary transition-colors">
                        Raliul Perla Banatului
                      </h3>
                      <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-700 uppercase font-bold tracking-widest">
                        Etapa 5
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4 text-sm font-medium">
                      <span className="material-icons text-base mr-1">
                        location_on
                      </span>
                      Lugoj, Timiș
                      <span className="mx-2">•</span>
                      <span className="material-icons text-base mr-1">
                        calendar_today
                      </span>
                      14-15 Octombrie 2023
                    </div>
                    <div className="mb-6">
                      <h4 className="text-xs uppercase font-bold text-gray-500 dark:text-gray-400 tracking-widest mb-2">
                        Podium General
                      </h4>
                      <ul className="space-y-1">
                        <li className="flex items-center text-sm text-gray-800 dark:text-gray-200">
                          <span className="w-5 h-5 flex items-center justify-center bg-accent text-black text-xs font-bold rounded-full mr-2">
                            1
                          </span>
                          Popescu Ion / Ionescu Dan (Ford Fiesta R5)
                        </li>
                        <li className="flex items-center text-sm text-gray-800 dark:text-gray-200">
                          <span className="w-5 h-5 flex items-center justify-center bg-gray-300 text-black text-xs font-bold rounded-full mr-2">
                            2
                          </span>
                          Marinescu Vlad / Radu Andrei (Skoda Fabia)
                        </li>
                        <li className="flex items-center text-sm text-gray-800 dark:text-gray-200">
                          <span className="w-5 h-5 flex items-center justify-center bg-orange-300 text-black text-xs font-bold rounded-full mr-2">
                            3
                          </span>
                          Stanciu George (Mitsubishi Lancer Evo IX)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-2 bg-primary hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wider rounded transition-colors group/btn"
                    >
                      <span className="material-icons text-lg mr-2 group-hover/btn:animate-pulse">
                        photo_library
                      </span>
                      Vezi Galeria Foto
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-2 bg-transparent border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-bold uppercase tracking-wider rounded transition-colors"
                    >
                      <span className="material-icons text-lg mr-2 text-red-600">
                        picture_as_pdf
                      </span>
                      Descarcă Clasament
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-[9px] top-8 h-5 w-5 rounded-full border-4 border-white dark:border-background-dark bg-gray-400 dark:bg-gray-600 shadow-sm group-hover:bg-primary transition-colors duration-300"></div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden h-48 md:h-auto">
                  <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur text-white px-3 py-1 text-sm font-bold uppercase tracking-wider rounded">
                    Iul 2023
                  </div>
                  <img
                    alt="Viteza in Coasta Lugoj"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1535970793482-07de93762dc4?auto=format&fit=crop&q=80&w=800"
                    onError={handleImgError}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white uppercase tracking-wide group-hover:text-primary transition-colors">
                        Cupa Timiș la Viteză
                      </h3>
                      <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-700 uppercase font-bold tracking-widest">
                        Etapa 3
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4 text-sm font-medium">
                      <span className="material-icons text-base mr-1">
                        location_on
                      </span>
                      Făget, Timiș
                      <span className="mx-2">•</span>
                      <span className="material-icons text-base mr-1">
                        calendar_today
                      </span>
                      22 Iulie 2023
                    </div>
                    <div className="mb-6">
                      <h4 className="text-xs uppercase font-bold text-gray-500 dark:text-gray-400 tracking-widest mb-2">
                        Podium General
                      </h4>
                      <ul className="space-y-1">
                        <li className="flex items-center text-sm text-gray-800 dark:text-gray-200">
                          <span className="w-5 h-5 flex items-center justify-center bg-accent text-black text-xs font-bold rounded-full mr-2">
                            1
                          </span>
                          Dumitrescu Alex (BMW E36)
                        </li>
                        <li className="flex items-center text-sm text-gray-800 dark:text-gray-200">
                          <span className="w-5 h-5 flex items-center justify-center bg-gray-300 text-black text-xs font-bold rounded-full mr-2">
                            2
                          </span>
                          Kovacs Istvan (Honda Civic)
                        </li>
                        <li className="flex items-center text-sm text-gray-800 dark:text-gray-200">
                          <span className="w-5 h-5 flex items-center justify-center bg-orange-300 text-black text-xs font-bold rounded-full mr-2">
                            3
                          </span>
                          Popa Cristian (VW Golf)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-2 bg-primary hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wider rounded transition-colors group/btn"
                    >
                      <span className="material-icons text-lg mr-2 group-hover/btn:animate-pulse">
                        photo_library
                      </span>
                      Vezi Galeria Foto
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-2 bg-transparent border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-bold uppercase tracking-wider rounded transition-colors"
                    >
                      <span className="material-icons text-lg mr-2 text-red-600">
                        picture_as_pdf
                      </span>
                      Descarcă Clasament
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <nav className="flex items-center space-x-2">
            <a
              href="#"
              className="px-4 py-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-primary dark:hover:text-primary rounded-l transition-colors"
            >
              <span className="material-icons text-sm">arrow_back_ios</span>
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-primary text-white font-bold border border-primary rounded transition-colors"
            >
              1
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              2
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              3
            </a>
            <span className="px-4 py-2 text-gray-400">...</span>
            <a
              href="#"
              className="px-4 py-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-primary dark:hover:text-primary rounded-r transition-colors"
            >
              <span className="material-icons text-sm">arrow_forward_ios</span>
            </a>
          </nav>
        </div>
      </main>
    </>
  );
};

export default Archive;
